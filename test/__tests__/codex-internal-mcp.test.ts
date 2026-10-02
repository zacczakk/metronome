import { describe, expect, test } from 'bun:test';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { CodexAdapter } from '../../src/adapters/codex';
import { runCheck } from '../../src/cli/check';
import { runPush } from '../../src/cli/push';
import { runPull } from '../../src/cli/pull';
import type { SyncOptions } from '../../src/cli/canonical';
import { readToml } from '../../src/formats/toml';
import { createEmptyProject, createTestHome } from '../helpers/backup';
import type { MCPServer } from '../../src/types';

const internalTools = `
[mcp_servers.node_repl]
command = "/Applications/Codex.app/Contents/Resources/cua_node/bin/node_repl"
args = ["--experimental"]
startup_timeout_sec = 30

[mcp_servers.node_repl.env]
CODEX_NODE_REPL_MODE = "computer-use"

[mcp_servers.computer-use]
command = "./Codex Computer Use.app/Contents/SharedSupport/SkyComputerUseClient"
args = ["mcp"]
cwd = "/codex/computer-use"
enabled = false
`;

const managedServer: MCPServer = { name: 'context7', transport: 'http', url: 'https://example.com/mcp' };

function setup() {
  const projectDir = createEmptyProject('codex-internal-mcp');
  const homeDir = createTestHome('codex-internal-mcp');
  const adapter = new CodexAdapter(homeDir);
  const path = adapter.getPaths().getMCPConfigPath();
  mkdirSync(join(projectDir, 'configs/mcp'), { recursive: true });
  mkdirSync(join(projectDir, 'configs/skills'), { recursive: true });
  writeFileSync(join(projectDir, 'configs/mcp/context7.json'), JSON.stringify(managedServer));
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, internalTools + adapter.renderMCPServers([managedServer]));
  return { projectDir, homeDir, path };
}

describe('Codex app-owned MCP tools', () => {
  test('status ignores app-owned entries and push is a no-op when managed servers match', async () => {
    const { projectDir, homeDir, path } = setup();
    const before = readFileSync(path, 'utf-8');
    const options: SyncOptions = { projectDir, homeDir, targets: ['codex'], types: ['mcp'] };
    const checked = await runCheck(options);
    expect(checked.hasDrift).toBe(false);
    expect(checked.diffs[0]?.mcpWarning).toBeUndefined();
    const pushed = await runPush({ ...options, force: true, deleteStale: true });
    expect(pushed.written).toBe(0);
    expect(readFileSync(path, 'utf-8')).toBe(before);
  });

  test('forced push updates managed servers and retains complete app-owned values', async () => {
    const { projectDir, homeDir, path } = setup();
    const before = readToml<{ mcp_servers: Record<string, unknown> }>(readFileSync(path, 'utf-8'));
    writeFileSync(path, readFileSync(path, 'utf-8').replace('https://example.com/mcp', 'https://old.example.com/mcp')
      + '\n[mcp_servers.stale]\ncommand = "stale-server"\n');
    const pushed = await runPush({ projectDir, homeDir, targets: ['codex'], types: ['mcp'], force: true, deleteStale: true });
    expect(pushed.failed).toBe(0);
    expect(pushed.written).toBeGreaterThan(0);
    const after = readToml<{ mcp_servers: Record<string, unknown> }>(readFileSync(path, 'utf-8'));
    expect(after.mcp_servers.node_repl).toEqual(before.mcp_servers.node_repl);
    expect(after.mcp_servers['computer-use']).toEqual(before.mcp_servers['computer-use']);
    expect(after.mcp_servers.context7).toEqual({ url: managedServer.url });
    expect(after.mcp_servers.stale).toBeUndefined();
    expect((await runCheck({ projectDir, homeDir, targets: ['codex'], types: ['mcp'] })).hasDrift).toBe(false);
  });

  test('reserved canonical names cannot overwrite or create app-owned tools', () => {
    const adapter = new CodexAdapter();
    const collisions: MCPServer[] = ['node_repl', 'computer-use'].map((name) => ({ name, transport: 'stdio', command: 'replacement' }));
    expect(adapter.getRenderedServerNames(collisions)).toEqual([]);
    expect(adapter.renderMCPServers(collisions)).toBe('');
    const expected = readToml(internalTools);
    expect(readToml(adapter.renderMCPServers(collisions, internalTools))).toEqual(expected);
    expect(readToml(adapter.renderMCPServers([], internalTools))).toEqual(expected);
    expect(adapter.parseExistingMCPServerNames(internalTools)).toEqual([]);
    expect(adapter.parseMCPServers(internalTools)).toEqual([]);
  });

  test('pull imports managed servers while keeping app-owned tools local', async () => {
    const { homeDir, path } = setup();
    const projectDir = createEmptyProject('codex-internal-mcp-pull');
    const before = readFileSync(path, 'utf-8');
    const pulled = await runPull({ source: 'codex', projectDir, homeDir, force: true });
    expect(pulled.rolledBack).toBe(false);
    expect(pulled.items.filter((item) => item.type === 'mcp').map((item) => item.name)).toEqual(['context7']);
    expect(existsSync(join(projectDir, 'configs/mcp/context7.json'))).toBe(true);
    expect(existsSync(join(projectDir, 'configs/mcp/node_repl.json'))).toBe(false);
    expect(existsSync(join(projectDir, 'configs/mcp/computer-use.json'))).toBe(false);
    expect(readFileSync(path, 'utf-8')).toBe(before);
  });
});
