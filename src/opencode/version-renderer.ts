import type { CanonicalItem, MCPServer, TargetName } from '../types';
import { EnvVarTransformer } from '../secrets/env-var-transformer';

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

function withoutAisdkPrefix(value: unknown): unknown {
  return typeof value === 'string' && value.startsWith('aisdk:') ? value.slice(6) : clone(value);
}

function rawCost(value: unknown): unknown {
  if (!Array.isArray(value)) {
    if (!isRecord(value)) return clone(value);
    const cost: UnknownRecord = {};
    for (const [key, item] of Object.entries(value)) {
      if (key === 'cache' && isRecord(item)) {
        if (item.read !== undefined) cost.cache_read = clone(item.read);
        if (item.write !== undefined) cost.cache_write = clone(item.write);
      } else if (key !== 'tier') {
        cost[key] = clone(item);
      }
    }
    return cost;
  }

  const [short, long] = value;
  const cost = rawCost(short);
  if (!isRecord(cost) || !isRecord(long)) return cost;
  const longCost = rawCost(long);
  return isRecord(longCost) ? { ...cost, context_over_200k: longCost } : cost;
}

function rawModel(model: unknown): unknown {
  if (!isRecord(model)) return clone(model);
  const raw: UnknownRecord = {};
  let packageName: unknown;

  for (const [key, value] of Object.entries(model)) {
    if (key === 'package') packageName = withoutAisdkPrefix(value);
    else if (key === 'settings') raw.options = clone(value);
    else if (key === 'capabilities' && isRecord(value)) {
      if (value.attachment !== undefined) raw.attachment = clone(value.attachment);
      const modalities = Object.fromEntries(
        ['input', 'output'].filter((name) => value[name] !== undefined).map((name) => [name, clone(value[name])]),
      );
      if (Object.keys(modalities).length > 0) raw.modalities = modalities;
    } else if (key === 'variants' && Array.isArray(value)) {
      raw.variants = Object.fromEntries(value.flatMap((entry) =>
        isRecord(entry) && typeof entry.id === 'string' ? [[entry.id, clone(entry.settings ?? {})]] : []));
    } else if (key === 'cost') raw.cost = rawCost(value);
    else raw[key] = clone(value);
  }

  if (packageName !== undefined) raw.provider = { npm: packageName };
  if (packageName === '@ai-sdk/openai') raw.reasoning ??= true;
  return raw;
}

function rawProvider(provider: unknown): unknown {
  if (!isRecord(provider)) return clone(provider);
  const raw: UnknownRecord = {};
  let packageName: unknown;

  for (const [key, value] of Object.entries(provider)) {
    if (key === 'package') packageName = withoutAisdkPrefix(value);
    else if (key === 'settings') raw.options = clone(value);
    else if (key === 'headers') {
      const options = isRecord(raw.options) ? raw.options : {};
      raw.options = { ...options, headers: clone(value) };
    } else if (key === 'models' && isRecord(value)) {
      raw.models = Object.fromEntries(Object.entries(value).map(([id, model]) => [id, rawModel(model)]));
    } else raw[key] = clone(value);
  }

  if (packageName !== undefined) raw.npm = packageName;
  return raw;
}

function rawProviders(providers: unknown): UnknownRecord {
  if (!isRecord(providers)) return {};
  return Object.fromEntries(Object.entries(providers).map(([id, provider]) => [id, rawProvider(provider)]));
}

function providersFromSettings(settings: UnknownRecord): UnknownRecord {
  return {
    ...rawProviders(settings.providers),
    ...(isRecord(settings.provider) ? settings.provider : {}),
  };
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

export function renderOpenCodeAgent(metadata: Record<string, unknown>): Record<string, unknown> {
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

export function renderOpenCodeSettings(settings: Record<string, unknown>): Record<string, unknown> {
  const rendered: UnknownRecord = {};
  const agentVariants: Array<{ providerID: string; modelID: string; id: string; settings: UnknownRecord }> = [];

  for (const [key, value] of Object.entries(settings)) {
    if (key === 'permission') rendered.permissions = renderPermissions(value);
    else if (key === 'plugin') {
      const configured = Array.isArray(value) ? withoutChatGPTWebSearchPlugin(clone(value)) : [];
      const existing = Array.isArray(rendered.plugins) ? rendered.plugins : [];
      rendered.plugins = [...new Map([...existing, ...configured].map((entry) => [JSON.stringify(entry), entry])).values()];
    }
    else if (key === 'provider' && isRecord(value)) rendered.provider = clone(value);
    else if (key === 'providers' && isRecord(value)) rendered.provider = rawProviders(value);
    else if (key === 'agent' && isRecord(value)) {
      const agents: UnknownRecord = {};
      for (const [name, agent] of Object.entries(value)) {
        if (!isRecord(agent)) {
          agents[name] = clone(agent);
          continue;
        }
        const renderedAgent = renderOpenCodeAgent({ ...agent, _agentName: name });
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
    const rendered = renderOpenCodeAgent({ ...agent.metadata, _agentName: agent.name });
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
  const providers = providersFromSettings(settings);
  settings.provider = providers;
  delete settings.providers;
  for (const [providerID, provider] of Object.entries(providers)) {
    if (!isRecord(provider) || !isRecord(provider.models)) continue;
    for (const [modelID, model] of Object.entries(provider.models)) {
      if (!isRecord(model) || !isRecord(model.variants)) continue;
      for (const variantID of Object.keys(model.variants)) {
        if (staleVariantIDs.has(variantID)) delete model.variants[variantID];
      }
      if (Object.keys(model.variants).length === 0 && Object.keys(model).every((key) => key === 'variants')) {
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
): Record<string, unknown> {
  const next = structuredClone(existing);
  let output = structuredClone(rendered);
  for (const key of ['permission', 'agent', 'plugin']) delete next[key];

  if (isRecord(output.mcp)) output.mcp = mergeOpenCodeMcp(existing.mcp, output.mcp);

  const hasProviderOutput = isRecord(output.provider) || isRecord(output.providers);
  if (hasProviderOutput) {
    const existingProviders = {
      ...rawProviders(next.providers),
      ...(isRecord(next.provider) ? withoutRetiredProviders(next.provider) : {}),
    };
    const renderedProviders = {
      ...rawProviders(output.providers),
      ...(isRecord(output.provider) ? withoutRetiredProviders(output.provider) : {}),
    };
    delete next.providers;
    delete output.providers;
    delete output.provider;
    const providers = withoutRetiredProviders({ ...existingProviders, ...renderedProviders });
    if (Object.keys(providers).length > 0) next.provider = providers;
    else delete next.provider;
  }

  if (Array.isArray(output.disabled_providers)) {
    output.disabled_providers = [...new Set([
      ...(Array.isArray(existing.disabled_providers) ? existing.disabled_providers : []),
      ...output.disabled_providers,
    ])];
  }

  Object.assign(next, output);
  if (Array.isArray(next.plugins)) next.plugins = withoutChatGPTWebSearchPlugin(next.plugins);
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
  const renderedProviders = providersFromSettings(settings);
  const existingProviders = providersFromSettings(existing);
  settings.provider = renderedProviders;
  delete settings.providers;
  for (const [providerID, renderedProviderValue] of Object.entries(renderedProviders)) {
    if (!isRecord(renderedProviderValue)) continue;
    const existingProvider = isRecord(existingProviders[providerID]) ? existingProviders[providerID] : {};
    const renderedModels = isRecord(renderedProviderValue.models) ? renderedProviderValue.models : {};
    renderedProviderValue.models = renderedModels;
    const existingModels = isRecord(existingProvider.models) ? existingProvider.models : {};
    for (const [modelID, existingModelValue] of Object.entries(existingModels)) {
      if (!isRecord(existingModelValue)) continue;
      const renderedModelValue = isRecord(renderedModels[modelID]) ? renderedModels[modelID] : {};
      const renderedVariants = isRecord(renderedModelValue.variants) ? renderedModelValue.variants : {};
      const existingVariants = isRecord(existingModelValue.variants) ? existingModelValue.variants : {};
      const profileVariants = Object.fromEntries(Object.entries(existingVariants).filter(([id]) =>
        id.startsWith('agent-') && renderedVariants[id] === undefined && !staleVariantIDs.has(id)));
      if (Object.keys(profileVariants).length > 0) {
        renderedModelValue.variants = { ...clone(renderedVariants), ...clone(profileVariants) };
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
  const providers = providersFromSettings(rendered);
  rendered.provider = providers;
  delete rendered.providers;
  for (const variant of variantsToAdd) {
    const provider = isRecord(providers[variant.providerID]) ? providers[variant.providerID] : {};
    providers[variant.providerID] = provider;
    const models = isRecord(provider.models) ? provider.models : {};
    provider.models = models;
    const model = isRecord(models[variant.modelID]) ? models[variant.modelID] : {};
    models[variant.modelID] = model;
    const variants = isRecord(model.variants) ? clone(model.variants) : {};
    variants[variant.id] = clone(variant.settings);
    model.variants = variants;
  }
  return rendered;
}

function isOpenCodeMcpServerConfig(value: unknown): value is UnknownRecord {
  if (!isRecord(value)) return false;
  return ['type', 'command', 'url', 'enabled', 'disabled'].some((key) => key in value);
}

function convertOpenCodeMcpConfig(value: UnknownRecord): UnknownRecord {
  const converted = clone(value);
  if (typeof converted.enabled === 'boolean' && converted.disabled === undefined) converted.disabled = !converted.enabled;
  delete converted.enabled;
  if (typeof converted.timeout === 'number') {
    converted.timeout = { catalog: converted.timeout, execution: converted.timeout };
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

function mergeOpenCodeMcp(existing: unknown, rendered: UnknownRecord): UnknownRecord {
  const current = existingOpenCodeMcpParts(existing);
  const renderedServers = isRecord(rendered.servers)
    ? rendered.servers
    : rendered;
  const legacy = Object.fromEntries(
    Object.entries(current.legacy).map(([name, config]) => [name, convertOpenCodeMcpConfig(config)]),
  );
  const native = Object.fromEntries(
    Object.entries(current.native).map(([name, config]) => [name, convertOpenCodeMcpConfig(config)]),
  );
  return {
    ...current.extras,
    servers: { ...legacy, ...native, ...clone(renderedServers) },
  };
}

export function renderOpenCodeMcp(servers: MCPServer[], target: TargetName = 'opencode'): Record<string, unknown> {
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

    config.disabled = !targetEnabled;
    if (typeof config.timeout === 'number') config.timeout = { catalog: config.timeout, execution: config.timeout };
    renderedServers[server.name] = config;
  }
  return { servers: renderedServers };
}
