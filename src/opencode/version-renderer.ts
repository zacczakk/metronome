import type { CanonicalItem, MCPServer, TargetName } from '../types';
import { EnvVarTransformer } from '../secrets/env-var-transformer';

export type OpenCodeVersion = 'v1' | 'v2';

type UnknownRecord = Record<string, unknown>;

function isRecord(value: unknown): value is UnknownRecord {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function clone<T>(value: T): T {
  return structuredClone(value);
}

const CHATGPT_WEBSEARCH_PLUGIN_PATHS = new Set([
  './chatgpt-websearch',
  './chatgpt-websearch.js',
]);

function isChatGPTWebSearchPluginEntry(entry: unknown): boolean {
  if (typeof entry === 'string') return CHATGPT_WEBSEARCH_PLUGIN_PATHS.has(entry);
  return isRecord(entry)
    && typeof entry.package === 'string'
    && CHATGPT_WEBSEARCH_PLUGIN_PATHS.has(entry.package);
}

function withoutChatGPTWebSearchPlugin(entries: unknown[]): unknown[] {
  return entries.filter((entry) => !isChatGPTWebSearchPluginEntry(entry));
}

const RETIRED_PROVIDER_IDS = new Set([
  'uptimize-bedrock',
  'uptimize-foundry',
  'uptimize-openai',
]);

function withoutRetiredProviders(providers: UnknownRecord): UnknownRecord {
  const filtered = clone(providers);
  for (const providerID of RETIRED_PROVIDER_IDS) delete filtered[providerID];
  return filtered;
}

function renamedPermission(name: string): string {
  if (name === 'bash') return 'shell';
  if (name === 'task') return 'subagent';
  if (name === 'write' || name === 'patch') return 'edit';
  return name;
}

function renderPermissions(permission: unknown): unknown[] {
  if (!isRecord(permission)) return [];

  const rules: unknown[] = [];
  for (const [name, value] of Object.entries(permission)) {
    const renderedName = renamedPermission(name);
    if (isRecord(value)) {
      for (const [pattern, action] of Object.entries(value)) {
        rules.push({ action: renderedName, resource: pattern, effect: clone(action) });
      }
    } else {
      rules.push({ action: renderedName, resource: '*', effect: clone(value) });
    }
  }
  return rules;
}

function withAnthropicOutputLimit(model: UnknownRecord, packageName: unknown): UnknownRecord {
  if (packageName !== 'aisdk:@ai-sdk/anthropic') return model;

  const limit = isRecord(model.limit) ? clone(model.limit) : {};
  if (typeof limit.output !== 'number' || limit.output <= 0) limit.output = 64000;
  return { ...model, limit };
}

function contextTierSize(modelProvider: UnknownRecord | undefined, providerPackage: unknown): number {
  const packageName = modelProvider?.npm ?? providerPackage;
  if (packageName === '@ai-sdk/openai' || packageName === 'aisdk:@ai-sdk/openai') return 272000;
  return 200000;
}

function renderModel(model: unknown, providerPackage: unknown, version: OpenCodeVersion): unknown {
  if (!isRecord(model)) return clone(model);

  const rendered: UnknownRecord = {};
  const modelProvider = isRecord(model.provider) ? model.provider : undefined;
  let effectivePackage = providerPackage;

  for (const [key, value] of Object.entries(model)) {
    if (key === 'options') {
      rendered.settings = clone(value);
    } else if (key === 'modalities') {
      const capabilities = isRecord(rendered.capabilities) ? rendered.capabilities : {};
      rendered.capabilities = isRecord(value) ? { tools: true, ...capabilities, ...clone(value) } : clone(value);
    } else if (key === 'tool_call') {
      const capabilities = isRecord(rendered.capabilities) ? rendered.capabilities : {};
      rendered.capabilities = { ...capabilities, tools: clone(value) };
    } else if (key === 'attachment' && version === 'v2') {
      const capabilities = isRecord(rendered.capabilities) ? rendered.capabilities : {};
      rendered.capabilities = { ...capabilities, attachment: clone(value) };
    } else if (key === 'variants' && isRecord(value)) {
      rendered.variants = Object.entries(value).map(([id, settings]) => ({ id, settings: clone(settings) }));
    } else if (key === 'cost' && isRecord(value)) {
      const cost: UnknownRecord = {};
      const longContext = isRecord(value.context_over_200k) ? value.context_over_200k : undefined;
      const cache: UnknownRecord = {};
      for (const [costKey, costValue] of Object.entries(value)) {
        if (costKey === 'cache_read') cache.read = clone(costValue);
        else if (costKey === 'cache_write') cache.write = clone(costValue);
        else if (costKey === 'context_over_200k') continue;
        else cost[costKey] = clone(costValue);
      }
      if (Object.keys(cache).length > 0) cost.cache = cache;
      if (version === 'v2' && longContext) {
        const longCache: UnknownRecord = {};
        if (longContext.cache_read !== undefined) longCache.read = clone(longContext.cache_read);
        if (longContext.cache_write !== undefined) longCache.write = clone(longContext.cache_write);
        rendered.cost = [
          cost,
          {
            tier: { type: 'context', size: contextTierSize(modelProvider, providerPackage) },
            input: clone(longContext.input),
            output: clone(longContext.output),
            ...(Object.keys(longCache).length > 0 ? { cache: longCache } : {}),
          },
        ];
      } else {
        if (version === 'v2') rendered.cost = cost;
        else rendered.cost = clone(value);
      }
    } else if (key === 'provider' && modelProvider) {
      for (const [providerKey, providerValue] of Object.entries(modelProvider)) {
        if (providerKey === 'npm') {
          const packageValue = typeof providerValue === 'string' && providerValue.startsWith('aisdk:')
            ? providerValue
            : `aisdk:${String(providerValue)}`;
          rendered.package = packageValue;
          effectivePackage = packageValue;
        } else {
          rendered[providerKey] = clone(providerValue);
        }
      }
    } else if (key !== 'reasoning') {
      rendered[key] = clone(value);
    }
  }

  return withAnthropicOutputLimit(rendered, effectivePackage);
}

function renderProvider(provider: unknown, version: OpenCodeVersion): unknown {
  if (!isRecord(provider)) return clone(provider);
  const rendered: UnknownRecord = {};
  const npm = provider.npm;
  const packageName: unknown = typeof npm === 'string' && npm.startsWith('aisdk:')
    ? npm
    : typeof npm === 'string' ? `aisdk:${npm}` : undefined;

  for (const [key, value] of Object.entries(provider)) {
    if (key === 'npm') {
      rendered.package = packageName ?? `aisdk:${String(value)}`;
    } else if (key === 'options' && isRecord(value)) {
      const { headers, ...options } = value;
      if (Object.keys(options).length > 0) rendered.settings = clone(options);
      if (headers !== undefined) rendered.headers = clone(headers);
    } else if (key === 'models' && isRecord(value)) {
      const models: UnknownRecord = {};
      for (const [modelID, model] of Object.entries(value)) models[modelID] = renderModel(model, packageName, version);
      rendered.models = models;
    } else {
      rendered[key] = clone(value);
    }
  }
  return rendered;
}

function splitModel(model: unknown): { providerID: string; modelID: string } | undefined {
  if (typeof model !== 'string') return undefined;
  const slash = model.indexOf('/');
  if (slash <= 0 || slash === model.length - 1) return undefined;
  return { providerID: model.slice(0, slash), modelID: model.slice(slash + 1) };
}

function sanitizedAgentName(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'unnamed';
}

function agentVariantSettings(agent: UnknownRecord): UnknownRecord {
  const settings = isRecord(agent.options) ? clone(agent.options) : {};
  for (const key of ['reasoningEffort', 'textVerbosity']) {
    if (agent[key] !== undefined) settings[key] = clone(agent[key]);
  }
  return settings;
}

export function renderOpenCodeAgent(metadata: Record<string, unknown>, version: OpenCodeVersion): Record<string, unknown> {
  if (version === 'v1') return clone(metadata);

  const rendered: UnknownRecord = {};
  const variantSettings = agentVariantSettings(metadata);
  const agentName = typeof metadata._agentName === 'string' ? metadata._agentName : undefined;
  const modelReference = splitModel(metadata.model);

  for (const [key, value] of Object.entries(metadata)) {
    if (key === '_agentName' || key === 'options' || key === 'reasoningEffort' || key === 'textVerbosity' || key === 'request') continue;
    if (key === 'permission') rendered.permissions = renderPermissions(value);
    else rendered[key] = clone(value);
  }

  if (agentName && modelReference) {
    const id = `agent-${sanitizedAgentName(agentName)}`;
    rendered.model = `${metadata.model}#${id}`;
    rendered._modelVariant = { ...modelReference, id, settings: variantSettings };
  }
  return rendered;
}

export function renderOpenCodeSettings(settings: Record<string, unknown>, version: OpenCodeVersion): Record<string, unknown> {
  if (version === 'v1') {
    const rendered = clone(settings);
    if (Array.isArray(rendered.plugin)) rendered.plugin = withoutChatGPTWebSearchPlugin(rendered.plugin);
    if (isRecord(rendered.websearch) && rendered.websearch.provider === 'chatgpt') delete rendered.websearch;
    return rendered;
  }

  const rendered: UnknownRecord = {};
  const agentVariants: Array<{ providerID: string; modelID: string; id: string; settings: UnknownRecord }> = [];

  for (const [key, value] of Object.entries(settings)) {
    if (key === 'permission') rendered.permissions = renderPermissions(value);
    else if (key === 'plugin') {
      const configured = Array.isArray(value) ? withoutChatGPTWebSearchPlugin(clone(value)) : [];
      const existing = Array.isArray(rendered.plugins) ? rendered.plugins : [];
      rendered.plugins = [...new Map([...existing, ...configured].map((entry) => [JSON.stringify(entry), entry])).values()];
    }
    else if (key === 'provider' && isRecord(value)) {
      const providers: UnknownRecord = {};
      for (const [providerID, provider] of Object.entries(value)) providers[providerID] = renderProvider(provider, 'v2');
      rendered.providers = providers;
    } else if (key === 'agent' && isRecord(value)) {
      const agents: UnknownRecord = {};
      for (const [name, agent] of Object.entries(value)) {
        if (!isRecord(agent)) {
          agents[name] = clone(agent);
          continue;
        }
        const renderedAgent = renderOpenCodeAgent({ ...agent, _agentName: name }, 'v2');
        const descriptor = renderedAgent._modelVariant;
        delete renderedAgent._modelVariant;
        agents[name] = renderedAgent;
        if (isRecord(descriptor) && typeof descriptor.providerID === 'string' && typeof descriptor.modelID === 'string' && typeof descriptor.id === 'string' && isRecord(descriptor.settings)) {
          agentVariants.push({ providerID: descriptor.providerID, modelID: descriptor.modelID, id: descriptor.id, settings: descriptor.settings });
        }
      }
      rendered.agents = agents;
    } else {
      rendered[key] = clone(value);
    }
  }

  return applyOpenCodeAgentVariants(rendered, agentVariants);
}

export interface OpenCodeModelVariant {
  providerID: string;
  modelID: string;
  id: string;
  settings: Record<string, unknown>;
}

export function renderOpenCodeAgentVariants(agents: CanonicalItem[]): OpenCodeModelVariant[] {
  const variants: OpenCodeModelVariant[] = [];
  for (const agent of agents) {
    const rendered = renderOpenCodeAgent({ ...agent.metadata, _agentName: agent.name }, 'v2');
    const descriptor = rendered._modelVariant;
    if (!isRecord(descriptor)
      || typeof descriptor.providerID !== 'string'
      || typeof descriptor.modelID !== 'string'
      || typeof descriptor.id !== 'string'
      || !isRecord(descriptor.settings)) continue;
    variants.push({
      providerID: descriptor.providerID,
      modelID: descriptor.modelID,
      id: descriptor.id,
      settings: descriptor.settings,
    });
  }
  return variants;
}

export function removeOpenCodeAgentVariants(settings: Record<string, unknown>, staleAgentNames: string[]): void {
  const staleVariantIDs = new Set(staleAgentNames.map((name) => `agent-${sanitizedAgentName(name)}`));
  if (staleVariantIDs.size === 0) return;
  const providers = isRecord(settings.providers) ? settings.providers : {};
  for (const [providerID, provider] of Object.entries(providers)) {
    if (!isRecord(provider) || !isRecord(provider.models)) continue;
    for (const [modelID, model] of Object.entries(provider.models)) {
      if (!isRecord(model) || !Array.isArray(model.variants)) continue;
      model.variants = model.variants.filter((entry) => !isRecord(entry)
        || typeof entry.id !== 'string'
        || !staleVariantIDs.has(entry.id));
      if (model.variants.length === 0 && Object.keys(model).every((key) => key === 'variants')) {
        delete provider.models[modelID];
      }
    }
    if (Object.keys(provider).every((key) => key === 'models') && Object.keys(provider.models).length === 0) {
      delete providers[providerID];
    }
  }
}

export function mergeOpenCodeSettings(
  existing: Record<string, unknown>,
  rendered: Record<string, unknown>,
  version: OpenCodeVersion,
): Record<string, unknown> {
  const next = structuredClone(existing);
  let output = structuredClone(rendered);
  const remove = version === 'v1'
    ? ['permissions', 'agents', 'plugins', 'providers', 'websearch']
    : ['permission', 'agent', 'plugin'];
  for (const key of remove) delete next[key];

  if (isRecord(next.provider)) next.provider = withoutRetiredProviders(next.provider);
  if (isRecord(next.providers)) next.providers = withoutRetiredProviders(next.providers);
  if (isRecord(output.provider)) output.provider = withoutRetiredProviders(output.provider);
  if (isRecord(output.providers)) output.providers = withoutRetiredProviders(output.providers);

  if (isRecord(output.mcp)) output.mcp = mergeOpenCodeMcp(existing.mcp, output.mcp, version);

  if (version === 'v2' && isRecord(existing.provider) && isRecord(output.providers)) {
    const legacyProviders = withoutRetiredProviders(existing.provider);
    if ('foundry' in output.providers || (isRecord(existing.providers) && 'foundry' in existing.providers)) {
      delete legacyProviders.foundry;
    }
    if (Object.keys(legacyProviders).length > 0) next.provider = legacyProviders;
    else delete next.provider;
  }

  const providerKey = version === 'v1' ? 'provider' : 'providers';
  const existingProviders = next[providerKey];
  const renderedProviders = output[providerKey];
  if (isRecord(existingProviders) && isRecord(renderedProviders)) {
    output = { ...output, [providerKey]: { ...existingProviders, ...renderedProviders } };
  }
  Object.assign(next, output);
  if (version === 'v1' && Array.isArray(next.plugin)) next.plugin = withoutChatGPTWebSearchPlugin(next.plugin);
  if (version === 'v2' && Array.isArray(next.plugins)) next.plugins = withoutChatGPTWebSearchPlugin(next.plugins);
  return next;
}

export function configureOpenCodeV2Plugins(settings: Record<string, unknown>, existing: Record<string, unknown>): void {
  const rendered = Array.isArray(settings.plugins) ? settings.plugins : [];
  const external = Array.isArray(existing.plugins) ? existing.plugins : [];
  const configured = [...new Map([...external, ...rendered].map((entry) => [JSON.stringify(entry), entry])).values()];
  settings.plugins = withoutChatGPTWebSearchPlugin(configured).filter((entry) => entry !== 'context-mode'
    && entry !== './plugins/memory-vault-advisor.ts'
    && !(isRecord(entry) && entry.package === './plugins/instructions-loader.ts'));
}

export function preserveOpenCodeAgentVariants(
  settings: Record<string, unknown>,
  existing: Record<string, unknown>,
  staleAgentNames: string[] = [],
): void {
  const staleVariantIDs = new Set(staleAgentNames.map((name) => `agent-${sanitizedAgentName(name)}`));
  const renderedProviders = isRecord(settings.providers) ? settings.providers : {};
  const existingProviders = isRecord(existing.providers) ? existing.providers : {};
  for (const [providerID, renderedProviderValue] of Object.entries(renderedProviders)) {
    if (!isRecord(renderedProviderValue)) continue;
    const existingProvider = isRecord(existingProviders[providerID]) ? existingProviders[providerID] : {};
    const renderedModels = isRecord(renderedProviderValue.models) ? renderedProviderValue.models : {};
    renderedProviderValue.models = renderedModels;
    const existingModels = isRecord(existingProvider.models) ? existingProvider.models : {};
    for (const [modelID, existingModelValue] of Object.entries(existingModels)) {
      if (!isRecord(existingModelValue)) continue;
      const renderedModelValue = isRecord(renderedModels[modelID]) ? renderedModels[modelID] : {};
      const renderedVariants = Array.isArray(renderedModelValue.variants) ? renderedModelValue.variants : [];
      const ids = new Set(renderedVariants.flatMap((entry) => isRecord(entry) && typeof entry.id === 'string' ? [entry.id] : []));
      const profileVariants = Array.isArray(existingModelValue.variants)
        ? existingModelValue.variants.filter((entry) => isRecord(entry)
          && typeof entry.id === 'string'
          && entry.id.startsWith('agent-')
          && !ids.has(entry.id)
          && !staleVariantIDs.has(entry.id))
        : [];
      if (profileVariants.length > 0) {
        renderedModelValue.variants = [...clone(renderedVariants), ...clone(profileVariants)];
        renderedModels[modelID] = renderedModelValue;
      }
    }
  }
}

export function applyOpenCodeAgentVariants(
  settings: Record<string, unknown>,
  variantsToAdd: OpenCodeModelVariant[],
): Record<string, unknown> {
  const rendered = clone(settings);
  const providers = isRecord(rendered.providers) ? rendered.providers : {};
  rendered.providers = providers;
  for (const variant of variantsToAdd) {
    const provider = isRecord(providers[variant.providerID]) ? providers[variant.providerID] : {};
    providers[variant.providerID] = provider;
    const models = isRecord(provider.models) ? provider.models : {};
    provider.models = models;
    const model = isRecord(models[variant.modelID]) ? models[variant.modelID] : {};
    models[variant.modelID] = model;
    const variants = Array.isArray(model.variants) ? clone(model.variants) : [];
    const withoutExisting = variants.filter((entry) => !isRecord(entry) || entry.id !== variant.id);
    model.variants = [...withoutExisting, { id: variant.id, settings: clone(variant.settings) }];
  }
  return rendered;
}

function isOpenCodeMcpServerConfig(value: unknown): value is UnknownRecord {
  if (!isRecord(value)) return false;
  return ['type', 'command', 'url', 'enabled', 'disabled'].some((key) => key in value);
}

function convertOpenCodeMcpConfig(value: UnknownRecord, version: OpenCodeVersion): UnknownRecord {
  const converted = clone(value);
  if (version === 'v2') {
    if (typeof converted.enabled === 'boolean' && converted.disabled === undefined) converted.disabled = !converted.enabled;
    delete converted.enabled;
    if (typeof converted.timeout === 'number') {
      converted.timeout = { catalog: converted.timeout, execution: converted.timeout };
    }
    return converted;
  }

  if (typeof converted.disabled === 'boolean' && converted.enabled === undefined) converted.enabled = !converted.disabled;
  delete converted.disabled;
  if (isRecord(converted.timeout)) {
    const timeout = typeof converted.timeout.execution === 'number'
      ? converted.timeout.execution
      : typeof converted.timeout.catalog === 'number' ? converted.timeout.catalog : undefined;
    if (timeout !== undefined) converted.timeout = timeout;
  }
  return converted;
}

function existingOpenCodeMcpParts(value: unknown): {
  legacy: UnknownRecord;
  native: UnknownRecord;
  extras: UnknownRecord;
} {
  const legacy: UnknownRecord = {};
  const native: UnknownRecord = {};
  const extras: UnknownRecord = {};
  if (!isRecord(value)) return { legacy, native, extras };

  if (isRecord(value.servers)) Object.assign(native, value.servers);
  for (const [name, config] of Object.entries(value)) {
    if (name === 'servers') continue;
    if (isOpenCodeMcpServerConfig(config)) legacy[name] = config;
    else extras[name] = clone(config);
  }
  return { legacy, native, extras };
}

function mergeOpenCodeMcp(existing: unknown, rendered: UnknownRecord, version: OpenCodeVersion): UnknownRecord {
  const current = existingOpenCodeMcpParts(existing);
  const renderedServers = version === 'v2' && isRecord(rendered.servers)
    ? rendered.servers
    : rendered;
  const legacy = Object.fromEntries(
    Object.entries(current.legacy).map(([name, config]) => [name, convertOpenCodeMcpConfig(config, version)]),
  );
  const native = Object.fromEntries(
    Object.entries(current.native).map(([name, config]) => [name, convertOpenCodeMcpConfig(config, version)]),
  );

  if (version === 'v2') {
    return {
      ...current.extras,
      servers: { ...legacy, ...native, ...clone(renderedServers) },
    };
  }

  return {
    ...current.extras,
    ...legacy,
    ...native,
    ...clone(renderedServers),
  };
}

export function renderOpenCodeMcp(servers: MCPServer[], version: OpenCodeVersion, target: TargetName = 'opencode'): Record<string, unknown> {
  const renderedServers: UnknownRecord = {};
  for (const server of servers) {
    if (server.disabledFor?.includes(target)) continue;
    const config: UnknownRecord = { type: server.transport === 'stdio' ? 'local' : 'remote' };
    if (server.transport === 'stdio') config.command = [server.command, ...(server.args ?? [])];
    else config.url = server.url;
    if (server.env) config.environment = EnvVarTransformer.toOpenCode(server.env);
    if (server.headers) config.headers = EnvVarTransformer.toOpenCode(server.headers);
    const targetOptions = server.targetOptions?.[target]
      ? clone(server.targetOptions[target]!)
      : {};
    const targetEnabled = typeof targetOptions.enabled === 'boolean'
      ? targetOptions.enabled
      : server.enabled !== false;
    delete targetOptions.enabled;
    Object.assign(config, targetOptions);

    if (version === 'v1') config.enabled = targetEnabled;
    else {
      config.disabled = !targetEnabled;
      if (typeof config.timeout === 'number') config.timeout = { catalog: config.timeout, execution: config.timeout };
    }
    renderedServers[server.name] = config;
  }
  return version === 'v1' ? renderedServers : { servers: renderedServers };
}
