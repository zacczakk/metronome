import { describe, expect, test } from 'bun:test';
import { existsSync, mkdtempSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { isCanonicalAgentForTarget, readCanonicalAgents, readCanonicalMCPServers, readCanonicalSkills } from '../canonical';

describe('canonical agent routing', () => {
  test('uses current specialist models and reasoning efforts', async () => {
    const agents = await readCanonicalAgents(process.cwd(), () => false);
    const routing = Object.fromEntries(
      agents.map(({ name, metadata }) => [
        name,
        [metadata.model, metadata.reasoningEffort],
      ]),
    );

    expect(routing).toEqual({
      'api-review': ['github-copilot/claude-opus-5.5', 'medium'],
      docs: ['github-copilot/gpt-6-luna', 'medium'],
      execute: ['tux/gpt-6.1-sol', 'high'],
      'foundry-sql': ['github-copilot/gpt-6.1-sol', 'medium'],
      'infra-review': ['github-copilot/claude-opus-5.5', 'medium'],
      release: ['github-copilot/gpt-6.1-sol', 'high'],
      research: ['github-copilot/gpt-6.1-sol', 'high'],
      'security-review': ['github-copilot/claude-opus-5.5', 'medium'],
      'vault-ops': ['github-copilot/gpt-6-luna', 'medium'],
      verify: ['github-copilot/gpt-6-luna', 'max'],
    });
  });

  test('routes every Sol subagent to GPT-6.1 Sol', async () => {
    const agents = await readCanonicalAgents(process.cwd(), () => false);
    const solAgents = agents.filter(({ metadata }) =>
      typeof metadata.model === 'string' && metadata.model.includes('-sol'),
    );

    expect(solAgents.map(({ name }) => name).sort()).toEqual(['execute', 'foundry-sql', 'release', 'research']);
    for (const { metadata } of solAgents) {
      expect(metadata.model).toMatch(/^[^/]+\/gpt-6\.1-sol$/);
    }
  });

  test('limits Foundry SQL agent to OpenCode and Pi targets', async () => {
    const agents = await readCanonicalAgents(process.cwd(), () => false);
    const agent = agents.find(({ name }) => name === 'foundry-sql');

    expect(agent?.metadata.targets).toEqual(['opencode', 'pi']);
    expect(agent && isCanonicalAgentForTarget(agent, 'opencode')).toBe(true);
    expect(agent && isCanonicalAgentForTarget(agent, 'pi')).toBe(true);
    expect(agent && isCanonicalAgentForTarget(agent, 'claude-code')).toBe(false);
    expect(agent && isCanonicalAgentForTarget(agent, 'codex')).toBe(false);
  });

  test('gives Foundry SQL agent access to the complete Palantir MCP namespace', async () => {
    const agents = await readCanonicalAgents(process.cwd(), () => false);
    const agent = agents.find(({ name }) => name === 'foundry-sql');

    expect(agent?.metadata.permission).toMatchObject({
      '*': 'deny',
      'palantir-mcp_*': 'allow',
    });
  });

  test('requires replayable Palantir calls in the Foundry SQL report', async () => {
    const agents = await readCanonicalAgents(process.cwd(), () => false);
    const agent = agents.find(({ name }) => name === 'foundry-sql');

    expect(agent?.content).toContain('Reproduction calls:');
    expect(agent?.content).toContain('exact native tool name');
    expect(agent?.content).toMatch(/complete JSON argument\s+object/);
    expect(agent?.content).toContain('Do not abbreviate, paraphrase');
  });

  test('routes OpenCode explore to GPT-6 Luna with medium reasoning effort', () => {
    const settings = JSON.parse(
      readFileSync(join(process.cwd(), 'configs', 'settings', 'opencode.json'), 'utf8'),
    ) as {
      model?: string;
      agents?: Record<string, { model?: string }>;
      provider?: {
        'github-copilot'?: {
          models?: Record<string, { variants?: Record<string, { reasoningEffort?: string }> }>;
        };
      };
    };

    expect(settings.model).toBe('tux/gpt-6-luna');
    expect(settings.agents?.explore).toEqual({ model: 'github-copilot/gpt-6-luna#agent-explore' });
    expect(settings.provider?.['github-copilot']?.models?.['gpt-6-luna']?.variants?.['agent-explore'])
      .toEqual({ reasoningEffort: 'medium' });
  });

  test('matches the current Tux OpenCode catalog and provider policy', () => {
    const settings = JSON.parse(
      readFileSync(join(process.cwd(), 'configs', 'settings', 'opencode.json'), 'utf8'),
    );
    const models = settings.providers?.tux?.models ?? {};

    for (const model of ['claude-opus-5-5', 'claude-sonnet-4-5', 'gpt-6-sol', 'gpt-6-luna']) {
      expect(models[model]).toBeDefined();
    }
    expect(settings.disabled_providers).toEqual(['opencode', 'opencode-go']);
    expect(models['claude-sonnet-5']?.cost).toEqual({ input: 2.2, output: 11, cache: { read: 0.22, write: 2.75 } });
    expect(models['gpt-5.6-sol']?.cost).toEqual([
      { input: 5.5, output: 33, cache: { read: 0.55, write: 6.88 } },
      { tier: { type: 'context', size: 272000 }, input: 11, output: 49.5, cache: { read: 1.1, write: 13.75 } },
    ]);
    expect(models['gpt-6-luna']?.cost).toEqual([
      { input: 0.12, output: 0.6, cache: { read: 0.012, write: 0.15 } },
      { tier: { type: 'context', size: 272000 }, input: 0.24, output: 0.9, cache: { read: 0.024, write: 0.3 } },
    ]);
  });

  test('allows webfetch for review and verification agents', async () => {
    const agents = await readCanonicalAgents(process.cwd(), () => false);

    for (const name of ['api-review', 'infra-review', 'security-review', 'verify']) {
      const agent = agents.find((item) => item.name === name);
      expect(agent?.metadata.permission).toMatchObject({ webfetch: 'allow' });
    }
  });

  test('sets Codex base to Tux Luna at xhigh reasoning', () => {
    const settings = JSON.parse(
      readFileSync(join(process.cwd(), 'configs', 'settings', 'codex.json'), 'utf8'),
    ) as Record<string, unknown>;

    expect(settings).toMatchObject({
      model: 'gpt-5.6-terra',
      model_provider: 'openai',
      model_reasoning_effort: 'xhigh',
      approval_policy: 'never',
      sandbox_mode: 'workspace-write',
    });
  });

  test('keeps all validated Tux reasoning variants for Luna and Terra', () => {
    const settings = JSON.parse(
      readFileSync(join(process.cwd(), 'configs', 'settings', 'opencode.json'), 'utf8'),
    );
    const expected = ['none', 'low', 'medium', 'high', 'xhigh', 'max'];

    for (const model of ['gpt-5.6-luna', 'gpt-5.6-terra']) {
      expect(settings.providers?.tux?.models?.[model]?.variants.map((variant: { id: string }) => variant.id)).toEqual(expected);
    }
    expect(settings.providers?.tux?.models?.['gpt-5.6-luna']?.settings?.reasoningEffort).toBe('max');
  });
});

describe('canonical vault retrieval policy', () => {
  test('does not launch the Obsidian app for routine reads or searches', () => {
    const walk = (directory: string): string[] => readdirSync(directory).flatMap((entry) => {
      const path = join(directory, entry);
      return statSync(path).isDirectory() ? walk(path) : [path];
    });
    const files = [
      ...walk(join(process.cwd(), 'configs', 'agents')),
      ...walk(join(process.cwd(), 'configs', 'commands')),
      'configs/skills/memory-retrieval/SKILL.md',
      'configs/skills/obsidian-vault-conventions/SKILL.md',
    ].map((file) => file.startsWith('/') ? file : join(process.cwd(), file));

    for (const file of files) {
      const content = readFileSync(file, 'utf8');
      expect(content).not.toMatch(/obsidian\s+(?:vault=\w+\s+)?(?:files|read|search(?::context)?|create|append|move|delete|task|links|backlinks)(?:\s|`)/);
    }
  });
});

describe('upstream skill registry', () => {
  test('does not resync removed skills and tracks Matt replacements', () => {
    const registry = JSON.parse(
      readFileSync(join(process.cwd(), 'configs', 'skills', 'registry.json'), 'utf8'),
    ) as {
      upstreams: Record<string, {
        repo: string;
        basePath: string;
        skills: Record<string, unknown>;
      }>;
    };
    const registeredSkills = Object.values(registry.upstreams)
      .flatMap((upstream) => Object.keys(upstream.skills));
    const removedSkills = [
      'doc-coauthoring',
      'dispatching-parallel-agents',
      'finishing-a-development-branch',
      'receiving-code-review',
      'requesting-code-review',
      'skill-creator',
      'systematic-debugging',
      'test-driven-development',
      'using-git-worktrees',
      'webapp-testing',
      'writing-skills',
    ];

    for (const skill of removedSkills) {
      expect(registeredSkills).not.toContain(skill);
      expect(existsSync(join(process.cwd(), 'configs', 'skills', skill))).toBe(false);
    }
    expect(existsSync(join(process.cwd(), 'configs', 'skills', 'diagnosing-bugs', 'SKILL.md'))).toBe(true);
    expect(existsSync(join(process.cwd(), 'configs', 'skills', 'tdd', 'SKILL.md'))).toBe(true);
    expect(registry.upstreams.mattpocock).toEqual({
      repo: 'https://github.com/mattpocock/skills.git',
      basePath: 'skills/engineering',
      skills: {
        'diagnosing-bugs': { sync: 'auto' },
        tdd: { sync: 'auto' },
      },
    });
  });
});

describe('readCanonicalMCPServers', () => {
  test('normalizes snake_case MCP fields from canonical JSON', async () => {
    const projectDir = mkdtempSync(join(tmpdir(), 'canonical-mcp-'));
    const mcpDir = join(projectDir, 'configs', 'mcp');
    mkdirSync(mcpDir, { recursive: true });

    writeFileSync(join(mcpDir, 'context7.json'), JSON.stringify({
      transport: 'http',
      url: 'https://mcp.context7.com/mcp',
      headers: { 'X-Env': '${CONTEXT7_API_KEY}' },
      env_vars: ['CONTEXT7_API_KEY'],
      disabled_for: ['codex'],
      target_options: {
        opencode: { timeout: 20_000 },
      },
      enabled: false,
    }, null, 2));

    const [server] = await readCanonicalMCPServers(projectDir);

    expect(server).toEqual({
      name: 'context7',
      transport: 'http',
      url: 'https://mcp.context7.com/mcp',
      headers: { 'X-Env': '${CONTEXT7_API_KEY}' },
      envVars: ['CONTEXT7_API_KEY'],
      disabledFor: ['codex'],
      targetOptions: {
        opencode: { timeout: 20_000 },
      },
      enabled: false,
    });
  });
});

describe('readCanonicalSkills', () => {
  test('fails closed when the canonical skills root is missing', async () => {
    const projectDir = mkdtempSync(join(tmpdir(), 'canonical-skills-missing-'));

    await expect(readCanonicalSkills(projectDir, () => false)).rejects.toThrow('Unable to read canonical skills root');
  });
});
