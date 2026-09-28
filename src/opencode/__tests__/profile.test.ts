import { afterEach, describe, expect, test } from 'bun:test';
import { lstat, mkdtemp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { switchOpenCodeVersion } from '../profile';

const roots: string[] = [];

afterEach(async () => {
  await Promise.all(roots.splice(0).map((root) => rm(root, { recursive: true, force: true })));
});

async function fixture(): Promise<{ projectDir: string; homeDir: string }> {
  const root = await mkdtemp(join(tmpdir(), 'metronome-opencode-'));
  roots.push(root);
  const projectDir = join(root, 'project');
  const homeDir = join(root, 'home');
  await mkdir(join(projectDir, 'configs', 'settings'), { recursive: true });
  await mkdir(join(projectDir, 'configs', 'agents'), { recursive: true });
  await mkdir(join(projectDir, 'configs', 'mcp'), { recursive: true });
  await mkdir(join(projectDir, 'configs', 'opencode', 'v2', 'plugins'), { recursive: true });
  await mkdir(join(homeDir, '.config', 'opencode', 'plugins'), { recursive: true });
  await mkdir(join(homeDir, '.opencode', 'plugins'), { recursive: true });

  await writeFile(join(projectDir, 'configs', 'settings', 'opencode.json'), JSON.stringify({
    instructions: ['~/.config/opencode/AGENTS.md', '~/Vaults/Memory/SOUL.md'],
    permission: { bash: { '*': 'allow' } },
    plugin: ['context-mode'],
    websearch: { provider: 'chatgpt' },
    provider: { acme: { npm: '@ai-sdk/anthropic', models: { claude: { name: 'Claude' } } } },
  }));
  await writeFile(join(projectDir, 'configs', 'agents', 'review.md'), '---\nmodel: acme/claude\nreasoningEffort: high\npermission:\n  edit: deny\n---\nReview.\n');
  await writeFile(join(projectDir, 'configs', 'mcp', 'tool.json'), JSON.stringify({ transport: 'stdio', command: 'tool', enabled: true }));
  await writeFile(join(projectDir, 'configs', 'mcp', 'github.json'), JSON.stringify({
    transport: 'http',
    url: 'https://api.githubcopilot.com/mcp/',
    target_options: {
      opencode: { oauth: false },
      opencode: { oauth: false, codemode: true },
    },
  }));
  for (const name of ['chatgpt-websearch.js', 'instructions-loader.ts', 'memory-vault-advisor.ts', 'read-guard.ts', 'validate-commit.ts']) {
    await writeFile(join(projectDir, 'configs', 'opencode', 'v2', 'plugins', name), `// v2 ${name}\n`);
  }
  await writeFile(join(projectDir, 'configs', 'opencode', 'v2', 'plugins', 'muxy-notify.js'), '// v2 muxy\n');
  await writeFile(join(homeDir, '.config', 'opencode', 'opencode.json'), JSON.stringify({
    provider: { tux: { name: 'Tux overlay' } },
    mcp: {
      servers: {
        native: { type: 'local', command: ['native'], disabled: true },
      },
      legacy: { type: 'remote', url: 'https://legacy.example/mcp', enabled: true },
    },
    custom: true,
  }));
  await writeFile(join(homeDir, '.config', 'opencode', 'plugins', 'third-party.ts'), '// preserve\n');
  await writeFile(join(homeDir, '.config', 'opencode', 'plugins', 'muxy-notify.js'), '// external muxy\n');
  await writeFile(join(homeDir, '.opencode', 'plugins', 'muxy-notify.js'), '// external muxy\n');
  return { projectDir, homeDir };
}

describe('switchOpenCodeVersion', () => {
  test('dry run writes nothing', async () => {
    const paths = await fixture();
    const before = await readFile(join(paths.homeDir, '.config', 'opencode', 'opencode.json'), 'utf8');
    const result = await switchOpenCodeVersion({ ...paths, dryRun: true });
    expect(result.written).toEqual([]);
    expect(await readFile(join(paths.homeDir, '.config', 'opencode', 'opencode.json'), 'utf8')).toBe(before);
  });

  test('reports switch stages through the optional progress callback', async () => {
    const paths = await fixture();
    const progress: string[] = [];

    await switchOpenCodeVersion({ ...paths, progress: (message) => progress.push(message) });

    expect(progress).toHaveLength(6);
    expect(progress[0]).toContain('Back up current OpenCode state');
    expect(progress[1]).toContain(' done (');
    expect(progress[2]).toContain('Render and write OpenCode V2 profile');
    expect(progress[3]).toContain('Render and write OpenCode V2 profile done');
    expect(progress[4]).toContain('Record migration manifest');
    expect(progress[5]).toContain('Record migration manifest done');
  });

  test('preserves JSONC-only unrelated and Tux state', async () => {
    const paths = await fixture();
    await writeFile(join(paths.homeDir, '.config', 'opencode', 'opencode.json'), `{
      // third-party state
      "custom": true,
      "provider": { "tux": { "name": "Tux overlay" } },
    }`);
    await switchOpenCodeVersion({ ...paths, now: new Date('2026-08-10T14:00:00Z') });
    const config = JSON.parse(await readFile(join(paths.homeDir, '.config', 'opencode', 'opencode.json'), 'utf8'));
    expect(config.custom).toBe(true);
    expect(config.provider.tux.name).toBe('Tux overlay');
  });

  test('restores the complete backup when protected preparation fails', async () => {
    const paths = await fixture();
    const configPath = join(paths.homeDir, '.config', 'opencode', 'opencode.json');
    const packagePath = join(paths.homeDir, '.config', 'opencode', 'package.json');
    await writeFile(packagePath, '{"dependencies":{"plugin":"old"}}\n');
    const before = await readFile(configPath, 'utf8');
    let rolledBack = false;
    await expect(switchOpenCodeVersion({
      ...paths,
      now: new Date('2026-08-10T15:00:00Z'),
      prepare: async () => {
        await writeFile(configPath, '{"broken":true}\n');
        await writeFile(packagePath, '{"dependencies":{"plugin":"new"}}\n');
        throw new Error('prepare failed');
      },
      rollback: async () => { rolledBack = true; },
    })).rejects.toThrow('prepare failed');
    expect(await readFile(configPath, 'utf8')).toBe(before);
    expect(await readFile(packagePath, 'utf8')).toBe('{"dependencies":{"plugin":"old"}}\n');
    expect(rolledBack).toBe(true);
  });

  test('restores rendered files when manifest persistence fails', async () => {
    const paths = await fixture();
    const configPath = join(paths.homeDir, '.config', 'opencode', 'opencode.json');
    const manifestPath = join(paths.homeDir, '.config', 'opencode', 'migration-manifest.json');
    const before = await readFile(configPath, 'utf8');
    await mkdir(manifestPath);

    await expect(switchOpenCodeVersion({
      ...paths,
      now: new Date('2026-08-10T16:00:00Z'),
    })).rejects.toThrow('Failed to write file atomically');

    expect(await readFile(configPath, 'utf8')).toBe(before);
    expect((await lstat(manifestPath)).isDirectory()).toBe(true);
  });

  test('restores the complete backup when verification is interrupted', async () => {
    const paths = await fixture();
    const configPath = join(paths.homeDir, '.config', 'opencode', 'opencode.json');
    const before = await readFile(configPath, 'utf8');
    const controller = new AbortController();

    await expect(switchOpenCodeVersion({
      ...paths,
      signal: controller.signal,
      verifyPlugins: async () => {
        controller.abort(new Error('interrupted'));
        return [];
      },
    })).rejects.toThrow('interrupted');

    expect(await readFile(configPath, 'utf8')).toBe(before);
  });
});
