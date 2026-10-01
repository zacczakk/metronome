import { describe, it, expect } from 'bun:test';
import os from 'node:os';
import path from 'node:path';
import { OpenCodeAdapter } from '../opencode';

const HOME = os.homedir();

const adapter = new OpenCodeAdapter();

const baseCommandItem = {
  name: 'my-plan',
  content: 'This is the command body.\n',
  metadata: {
    description: 'Plan a feature',
    'argument-hint': '[feature]',
    'allowed-tools': ['Read', 'Write', 'Bash'],
  },
};

describe('OpenCodeAdapter.renderCommand', () => {
  it('produces correct command file path', () => {
    const result = adapter.renderCommand(baseCommandItem);
    expect(result.relativePath).toBe(path.join(HOME, '.config/opencode/commands/my-plan.md'));
  });

  it('keeps description in frontmatter', () => {
    const result = adapter.renderCommand(baseCommandItem);
    expect(result.content).toContain('description: Plan a feature');
  });

  it('strips allowed-tools from frontmatter', () => {
    const result = adapter.renderCommand(baseCommandItem);
    expect(result.content).not.toContain('allowed-tools');
  });

  it('strips argument-hint from frontmatter', () => {
    const result = adapter.renderCommand(baseCommandItem);
    expect(result.content).not.toContain('argument-hint');
  });

  it('includes body verbatim', () => {
    const result = adapter.renderCommand(baseCommandItem);
    expect(result.content).toContain('This is the command body.');
  });

  it('handles item with no description gracefully (no frontmatter emitted)', () => {
    const item = { ...baseCommandItem, metadata: {} };
    const result = adapter.renderCommand(item);
    // gray-matter omits frontmatter delimiters when data is empty — body only
    expect(result.content).toContain('This is the command body.');
  });

  it('passes through agent key in frontmatter', () => {
    const item = { ...baseCommandItem, metadata: { ...baseCommandItem.metadata, agent: 'release' } };
    const result = adapter.renderCommand(item);
    expect(result.content).toContain('agent: release');
  });

  it('passes through model key in frontmatter', () => {
    const item = { ...baseCommandItem, metadata: { ...baseCommandItem.metadata, model: 'anthropic/claude-sonnet-4' } };
    const result = adapter.renderCommand(item);
    expect(result.content).toContain('model: anthropic/claude-sonnet-4');
  });

  it('passes through subtask key in frontmatter', () => {
    const item = { ...baseCommandItem, metadata: { ...baseCommandItem.metadata, subtask: true } };
    const result = adapter.renderCommand(item);
    expect(result.content).toContain('subtask: true');
  });
});

describe('OpenCodeAdapter.renderAgent', () => {
  const agentItem = {
    name: 'my-agent',
    content: 'Agent body content.\n',
    metadata: {
      name: 'my-agent',
      description: 'Does agent things',
      'allowed-tools': ['Read', 'Write'],
    },
  };

  it('produces correct agent file path', () => {
    const result = adapter.renderAgent(agentItem);
    expect(result.relativePath).toBe(path.join(HOME, '.config/opencode/agents/my-agent.md'));
  });

  it('adds mode: subagent to frontmatter', () => {
    const result = adapter.renderAgent(agentItem);
    expect(result.content).toContain('mode: subagent');
  });

  it('strips name from frontmatter', () => {
    const result = adapter.renderAgent(agentItem);
    expect(result.content).not.toContain('name: my-agent');
  });

  it('strips allowed-tools from agent frontmatter', () => {
    const result = adapter.renderAgent(agentItem);
    expect(result.content).not.toContain('allowed-tools');
  });

  it('keeps description in agent frontmatter', () => {
    const result = adapter.renderAgent(agentItem);
    expect(result.content).toContain('description: Does agent things');
  });

  it('includes body verbatim', () => {
    const result = adapter.renderAgent(agentItem);
    expect(result.content).toContain('Agent body content.');
  });

  it('passes through permission in agent frontmatter', () => {
    const item = {
      ...agentItem,
      metadata: {
        ...agentItem.metadata,
        permission: { bash: { '*': 'allow', 'git push *': 'allow' } },
      },
    };
    const result = adapter.renderAgent(item);
    expect(result.content).toContain('permissions:');
    expect(result.content).toContain('git push *');
  });

  it('strips target routing metadata from agent frontmatter', () => {
    const item = {
      ...agentItem,
      metadata: { ...agentItem.metadata, targets: ['opencode'] },
    };
    const result = adapter.renderAgent(item);
    expect(result.content).not.toContain('targets:');
  });

  it('passes through tools in agent frontmatter', () => {
    const item = {
      ...agentItem,
      metadata: {
        ...agentItem.metadata,
        tools: { bash: true, edit: true, write: true },
      },
    };
    const result = adapter.renderAgent(item);
    expect(result.content).toContain('tools:');
    expect(result.content).toContain('bash: true');
  });

  it('passes through color in agent frontmatter', () => {
    const item = {
      ...agentItem,
      metadata: { ...agentItem.metadata, color: '#22C55E' },
    };
    const result = adapter.renderAgent(item);
    expect(result.content).toContain("color: '#22C55E'");
  });

  it('does not leave inert model overlays in agent frontmatter', () => {
    const item = {
      ...agentItem,
      metadata: {
        ...agentItem.metadata,
        reasoningEffort: 'medium',
        textVerbosity: 'low',
      },
    };
    const result = adapter.renderAgent(item);
    expect(result.content).not.toContain('reasoningEffort: medium');
    expect(result.content).not.toContain('textVerbosity: low');
  });
});

describe('OpenCodeAdapter capabilities', () => {
  it('reports all capabilities as true', () => {
    const caps = adapter.getCapabilities();
    expect(caps.commands).toBe(true);
    expect(caps.agents).toBe(true);
    expect(caps.mcp).toBe(true);
    expect(caps.instructions).toBe(true);
    expect(caps.skills).toBe(true);
  });

  it('has correct target and displayName', () => {
    expect(adapter.target).toBe('opencode');
    expect(adapter.displayName).toBe('OpenCode');
  });
});

describe('OpenCodeAdapter native settings', () => {
  it('renders native settings and MCP semantics', () => {
    const v2 = new OpenCodeAdapter();
    const settings = v2.renderSettings({
      target: 'opencode',
      keys: { permission: { bash: 'allow' } },
    });
    const mcp = v2.renderMCPServers([{
      name: 'native', transport: 'stdio', command: 'tool', enabled: false,
      targetOptions: { opencode: { timeout: 12 } },
    }]);

    expect(settings).toContain('"permissions"');
    expect(mcp).toContain('"servers"');
    expect(mcp).toContain('"disabled": true');
    expect(mcp).toContain('"catalog": 12');
  });

  it('preserves native providers and configured external plugins', () => {
    const v2 = new OpenCodeAdapter();
    const settings = JSON.parse(v2.renderSettings({
      target: 'opencode',
      keys: {
        plugin: ['some-plugin'],
        websearch: { provider: 'chatgpt' },
        provider: { canonical: { npm: '@ai-sdk/anthropic' } },
      },
    }, JSON.stringify({
      plugins: ['./third-party'],
      providers: { external: { package: 'aisdk:external' } },
    })));

    expect(settings.plugins).toEqual(['./third-party', 'some-plugin']);
    expect(settings.websearch).toEqual({ provider: 'chatgpt' });
    expect(settings.provider).toEqual({ canonical: { npm: '@ai-sdk/anthropic' } });
    expect(settings.providers).toEqual({ external: { package: 'aisdk:external' } });
  });

  it('preserves profile-owned agent variants during generic V2 settings sync', () => {
    const v2 = new OpenCodeAdapter();
    const existing = JSON.stringify({
      providers: {
        acme: {
          models: {
            model: {
              variants: [
                { id: 'canonical', settings: { effort: 'old' } },
                { id: 'agent-review', settings: { effort: 'high' } },
                { id: 'third-party', settings: { temperature: 1 } },
              ],
            },
          },
        },
      },
    });

    const rendered = JSON.parse(v2.renderSettings({
      target: 'opencode',
      keys: {
        provider: {
          acme: {
            models: {
              model: { variants: { canonical: { effort: 'new' } } },
            },
          },
        },
      },
    }, existing));

    expect(rendered.provider.acme.models.model.variants).toEqual({
      canonical: { effort: 'new' },
      'agent-review': { effort: 'high' },
    });
  });

  it('uses OpenCode MCP overrides for the active V2 profile', () => {
    const v2 = new OpenCodeAdapter();
    const mcp = v2.renderMCPServers([{
      name: 'native', transport: 'stdio', command: 'tool',
      targetOptions: { opencode: { timeout: 12 } },
    }]);

    expect(mcp).toContain('"catalog": 12');
  });
});
