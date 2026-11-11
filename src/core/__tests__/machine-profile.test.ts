import { describe, expect, test } from 'bun:test';
import { mkdirSync, mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { readCanonicalAgents, readCanonicalMCPServers, readCanonicalSettings } from '../../cli/canonical';

function project(machine?: string): string {
  const dir = mkdtempSync(join(tmpdir(), 'machine-profile-'));
  mkdirSync(join(dir, 'configs', 'settings'), { recursive: true });
  mkdirSync(join(dir, 'configs', 'agents'), { recursive: true });
  mkdirSync(join(dir, 'configs', 'machines'), { recursive: true });
  mkdirSync(join(dir, '.metronome'), { recursive: true });
  mkdirSync(join(dir, 'configs', 'mcp'), { recursive: true });
  writeFileSync(join(dir, 'configs', 'mcp', 'github.json'), JSON.stringify({ transport: 'http', url: 'https://example.com/mcp' }));
  writeFileSync(join(dir, 'configs', 'mcp', 'palantir-mcp.json'), JSON.stringify({ transport: 'stdio', command: 'tux' }));
  writeFileSync(join(dir, 'configs', 'settings', 'claude.json'), JSON.stringify({
    env: { ANTHROPIC_BASE_URL: 'http://127.0.0.1:18080', DISABLE_TELEMETRY: '1' },
  }));
  writeFileSync(join(dir, 'configs', 'agents', 'execute.md'), '---\nmodel: tux/gpt-6.1-sol\nmode: subagent\n---\nBody\n');
  writeFileSync(join(dir, 'configs', 'machines', 'personal.json'), JSON.stringify({
    settings: { 'claude-code': { env: { ANTHROPIC_BASE_URL: null } } },
    agents: { execute: { model: 'github-copilot/gpt-6.1-sol' } },
    mcp: { 'palantir-mcp': null },
  }));
  if (machine) writeFileSync(join(dir, '.metronome', 'machine'), `${machine}\n`);
  return dir;
}

describe('machine profile', () => {
  test('without a machine file, canonical settings and agents are unchanged', async () => {
    const dir = project();
    expect((await readCanonicalSettings(dir, 'claude-code'))?.keys.env).toEqual({
      ANTHROPIC_BASE_URL: 'http://127.0.0.1:18080', DISABLE_TELEMETRY: '1',
    });
    expect((await readCanonicalAgents(dir, () => false))[0]?.metadata.model).toBe('tux/gpt-6.1-sol');
  });

  test('the selected profile removes null keys and overrides agent fields', async () => {
    const dir = project('personal');
    expect((await readCanonicalSettings(dir, 'claude-code'))?.keys.env).toEqual({ DISABLE_TELEMETRY: '1' });
    const execute = (await readCanonicalAgents(dir, () => false))[0];
    expect(execute?.metadata).toMatchObject({ model: 'github-copilot/gpt-6.1-sol', mode: 'subagent' });
  });

  test('the selected profile leaves out null MCP servers', async () => {
    expect((await readCanonicalMCPServers(project())).map((server) => server.name).sort()).toEqual(['github', 'palantir-mcp']);
    expect((await readCanonicalMCPServers(project('personal'))).map((server) => server.name)).toEqual(['github']);
  });

  test('an unknown profile name fails loudly', async () => {
    const dir = project('laptop');
    await expect(readCanonicalSettings(dir, 'claude-code')).rejects.toThrow("Machine profile 'laptop'");
  });
});
