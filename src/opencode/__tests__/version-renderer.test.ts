import { describe, expect, test } from 'bun:test';
import type { MCPServer } from '../../types';
import {
  configureOpenCodeV2Plugins,
  mergeOpenCodeSettings,
  preserveOpenCodeAgentVariants,
  removeOpenCodeAgentVariants,
  renderOpenCodeAgent,
  renderOpenCodeMcp,
  renderOpenCodeSettings,
} from '../version-renderer';

describe('renderOpenCodeSettings', () => {
  test('keeps ChatGPT websearch config and removes managed plugin paths', () => {
    const rendered = renderOpenCodeSettings({
      plugin: ['./chatgpt-websearch'],
      websearch: { provider: 'chatgpt' },
    });
    expect(rendered.plugins).toEqual([]);
    expect(rendered.websearch).toEqual({ provider: 'chatgpt' });

    configureOpenCodeV2Plugins(rendered, {
      plugins: ['./chatgpt-websearch', 'third-party', { package: './chatgpt-websearch' }],
    });
    expect(rendered.plugins).toEqual(['third-party']);
  });

  test('keeps Tux provider shape while rendering permissions and agent variants', () => {
    const rendered = renderOpenCodeSettings({
      permission: { bash: { '*': 'allow' }, task: 'ask', write: 'deny', patch: 'allow' },
      agent: { explore: { model: 'acme/model', options: { reasoningEffort: 'low', textVerbosity: 'brief' } } },
      plugin: ['context-mode'],
      provider: {
        acme: {
          npm: '@ai-sdk/anthropic',
          options: { apiKey: '{env:KEY}', headers: { 'x-client': 'metronome' } },
          models: {
            model: {
              options: { temperature: 0.2 },
              modalities: { input: ['text'], output: ['text'] },
               tool_call: true,
               reasoning: true,
              cost: { input: 1, output: 2, cache_read: 0.1, cache_write: 0.2 },
              variants: { fast: { temperature: 0 } },
            },
          },
        },
      },
    });

    expect(rendered.permissions).toEqual([
      { action: 'shell', resource: '*', effect: 'allow' },
      { action: 'subagent', resource: '*', effect: 'ask' },
      { action: 'edit', resource: '*', effect: 'deny' },
      { action: 'edit', resource: '*', effect: 'allow' },
    ]);
    expect(rendered.agents).toEqual({ explore: { model: 'acme/model#agent-explore' } });
    expect(rendered.plugins).toEqual(['context-mode']);
    expect(rendered.provider).toEqual({
      acme: {
        npm: '@ai-sdk/anthropic',
        options: { apiKey: '{env:KEY}', headers: { 'x-client': 'metronome' } },
        models: {
          model: {
            options: { temperature: 0.2 },
            modalities: { input: ['text'], output: ['text'] },
            tool_call: true,
            reasoning: true,
            cost: { input: 1, output: 2, cache_read: 0.1, cache_write: 0.2 },
            variants: {
              fast: { temperature: 0 },
              'agent-explore': { reasoningEffort: 'low', textVerbosity: 'brief' },
            },
          },
        },
      },
    });
    expect(rendered).not.toHaveProperty('permission');
    expect(rendered).not.toHaveProperty('agent');
  });

  test('preserves attachment and modality metadata in Tux shape', () => {
    const rendered = renderOpenCodeSettings({
      provider: {
        tux: {
          npm: '@ai-sdk/anthropic',
          models: {
            luna: {
              attachment: true,
              modalities: { input: ['image', 'pdf', 'text'], output: ['text'] },
            },
          },
        },
      },
    });
    expect(rendered.provider).toMatchObject({
      tux: { models: { luna: {
        attachment: true,
        modalities: { input: ['image', 'pdf', 'text'], output: ['text'] },
      } } },
    });
  });

  test('preserves native provider pricing tiers and empty unknown costs', () => {
    const rendered = renderOpenCodeSettings({
      providers: {
        tux: {
          package: 'aisdk:@ai-sdk/anthropic',
          settings: { apiKey: 'does-not-matter' },
          models: {
            luna: {
              package: 'aisdk:@ai-sdk/openai',
              cost: [
                { input: 0.2, output: 1.2, cache: { read: 0.02, write: 0.25 } },
                { tier: { type: 'context', size: 272000 }, input: 0.4, output: 1.8, cache: { read: 0.04, write: 0.5 } },
              ],
              variants: [{ id: 'fast', settings: { reasoningEffort: 'low' } }],
            },
            unpriced: { cost: [] },
          },
        },
      },
    });
    expect(rendered.providers).toEqual({
      tux: {
        package: 'aisdk:@ai-sdk/anthropic',
        settings: { apiKey: 'does-not-matter' },
        models: {
          luna: {
            package: 'aisdk:@ai-sdk/openai',
            cost: [
              { input: 0.2, output: 1.2, cache: { read: 0.02, write: 0.25 } },
              { tier: { type: 'context', size: 272000 }, input: 0.4, output: 1.8, cache: { read: 0.04, write: 0.5 } },
            ],
            variants: [{ id: 'fast', settings: { reasoningEffort: 'low' } }],
          },
          unpriced: { cost: [] },
        },
      },
    });
    expect(rendered.provider).toBeUndefined();
  });

  test('preserves Anthropic limits without inventing metadata', () => {
    const rendered = renderOpenCodeSettings({
      provider: { anthropic: { npm: '@ai-sdk/anthropic', models: { claude: { limit: { context: 200000 } } } } },
    });
    expect(rendered.provider).toEqual({
      anthropic: {
        npm: '@ai-sdk/anthropic',
        models: { claude: { limit: { context: 200000 } } },
      },
    });
  });

  test('preserves unowned providers and MCP servers while removing retired providers', () => {
    const merged = mergeOpenCodeSettings({
      provider: {
        foundry: { name: 'legacy duplicate' },
        tux: { name: 'Tux overlay' },
        'uptimize-openai': { name: 'retired Uptimize provider' },
        external: { name: 'external provider' },
      },
      providers: {
        external: { package: 'aisdk:external' },
        foundry: { package: 'aisdk:legacy-foundry' },
      },
      disabled_providers: ['local-provider'],
      mcp: {
        servers: { native: { type: 'local', command: ['native'], disabled: true } },
        legacy: { type: 'remote', url: 'https://legacy.example/mcp', enabled: true },
        native: { type: 'remote', url: 'https://legacy-native.example/mcp', enabled: true },
      },
    }, {
      providers: { foundry: { package: 'aisdk:managed-foundry' } },
      disabled_providers: ['opencode', 'opencode-go'],
      mcp: { servers: { managed: { type: 'local', command: ['managed'], disabled: false } } },
    });

    expect(merged.provider).toEqual({ tux: { name: 'Tux overlay' }, external: { name: 'external provider' } });
    expect(merged.providers).toEqual({
      external: { package: 'aisdk:external' },
      foundry: { package: 'aisdk:managed-foundry' },
    });
    expect(merged.disabled_providers).toEqual(['local-provider', 'opencode', 'opencode-go']);
    expect(merged.mcp).toEqual({
      servers: {
        legacy: { type: 'remote', url: 'https://legacy.example/mcp', disabled: false },
        native: { type: 'local', command: ['native'], disabled: true },
        managed: { type: 'local', command: ['managed'], disabled: false },
      },
    });
  });

  test('preserves explicit context and output limits', () => {
    const rendered = renderOpenCodeSettings({
      provider: {
        tux: {
          npm: '@ai-sdk/anthropic',
          models: {
            claude: { limit: { context: 1000000, output: 128000 } },
            gpt: { provider: { npm: '@ai-sdk/openai' }, limit: { context: 1050000, output: 128000 } },
          },
        },
      },
    });
    expect(rendered.provider).toMatchObject({
      tux: { models: {
        claude: { limit: { context: 1000000, output: 128000 } },
        gpt: { limit: { context: 1050000, output: 128000 } },
      } },
    });
  });

  test('adds, preserves, and removes agent variants without lowering native metadata', () => {
    const settings = {
      provider: { legacy: { models: { model: { variants: { fast: { temperature: 0 } } } } } },
      providers: { tux: { models: { model: { cost: [], variants: [{ id: 'high', settings: { reasoningEffort: 'high' }, headers: { 'x-tier': 'high' }, body: { service_tier: 'priority' } }] } } } },
      agent: { helper: { model: 'tux/model', reasoningEffort: 'medium' } },
    };
    const rendered = renderOpenCodeSettings(settings);
    expect(rendered.providers).toMatchObject({ tux: { models: { model: { cost: [], variants: [
      { id: 'high', settings: { reasoningEffort: 'high' } },
      { id: 'agent-helper', settings: { reasoningEffort: 'medium' } },
    ] } } } });
    const existing = {
      provider: { tux: { models: { model: { variants: { 'agent-retained': { reasoningEffort: 'low' } } } } } },
      providers: { tux: { models: { model: { variants: [{ id: 'agent-stale', settings: {} }] } } } },
    };
    preserveOpenCodeAgentVariants(rendered, existing, ['stale']);
    expect(rendered.providers).toMatchObject({ tux: { models: { model: { cost: [], variants: [
      { id: 'high', settings: { reasoningEffort: 'high' } },
      { id: 'agent-helper', settings: { reasoningEffort: 'medium' } },
      { id: 'agent-retained', settings: { reasoningEffort: 'low' } },
    ] } } } });
    removeOpenCodeAgentVariants(rendered, ['helper', 'retained']);
    expect(rendered.providers).toMatchObject({ tux: { models: { model: { cost: [], variants: [
      { id: 'high', settings: { reasoningEffort: 'high' } },
    ] } } } });
    expect(rendered.provider).toEqual(settings.provider);
    expect(rendered.providers).toEqual(settings.providers);
  });

  test('replaces stale legacy Tux with native Tux without modifying neighboring providers', () => {
    const canonical = { providers: { tux: { models: { model: { cost: [], limit: { context: 1050000, output: 128000 } } } } } };
    const existing = { provider: { tux: { models: { model: { cost: { input: 5, output: 30 } } } }, neighbor: { name: 'Keep' } } };
    const merged = mergeOpenCodeSettings(existing, renderOpenCodeSettings(canonical));
    expect(merged.provider).toEqual({ neighbor: { name: 'Keep' } });
    expect(merged.providers).toEqual(canonical.providers);
    expect(mergeOpenCodeSettings(merged, renderOpenCodeSettings(canonical))).toEqual(merged);
  });

  test('gives native canonical providers precedence over same-name legacy definitions', () => {
    const legacy = { tux: { models: { model: { limit: { context: 200000, output: 32000 } } } } };
    const native = { tux: { models: { model: { limit: { context: 1050000, output: 128000 } } } } };
    const merged = mergeOpenCodeSettings({}, { provider: legacy, providers: native });
    expect(merged.provider).toBeUndefined();
    expect(merged.providers).toEqual(native);
  });
});

describe('renderOpenCodeAgent', () => {
  test('creates a named model variant descriptor and removes inert overlays', () => {
    const rendered = renderOpenCodeAgent({
      _agentName: 'Research Review!',
      model: 'github-copilot/gpt-5',
      options: { temperature: 0.1 },
      reasoningEffort: 'high',
      textVerbosity: 'low',
      permission: { bash: 'allow', write: 'deny' },
    });

    expect(rendered).toEqual({
      model: 'github-copilot/gpt-5#agent-research-review',
      permissions: [
        { action: 'shell', resource: '*', effect: 'allow' },
        { action: 'edit', resource: '*', effect: 'deny' },
      ],
      _modelVariant: {
        providerID: 'github-copilot',
        modelID: 'gpt-5',
        id: 'agent-research-review',
        settings: { temperature: 0.1, reasoningEffort: 'high', textVerbosity: 'low' },
      },
    });
  });
});

describe('renderOpenCodeMcp', () => {
  const servers: MCPServer[] = [{
    name: 'local', transport: 'stdio', command: 'node', args: ['server.js'], env: { TOKEN: '${TOKEN}' }, enabled: false,
    targetOptions: { opencode: { timeout: 30 } },
  }];

  test('renders native servers with inverse enablement and split timeout', () => {
    expect(renderOpenCodeMcp(servers)).toEqual({
      servers: {
        local: {
          type: 'local', command: ['node', 'server.js'], environment: { TOKEN: '{env:TOKEN}' }, disabled: true,
          timeout: { catalog: 30, execution: 30 },
        },
      },
    });
  });
});
