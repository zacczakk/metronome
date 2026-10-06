import { describe, expect, test } from 'bun:test';
import { ClaudeCodeAdapter } from '../../adapters/claude-code';
import { OpenCodeAdapter } from '../../adapters/opencode';
import { externalMCPNames, managedMCPServers, renderTargetMCP } from '../external-mcp';
import type { MCPServer } from '../../types';

const servers: MCPServer[] = [
  { name: 'github', transport: 'http', url: 'https://example.com/mcp' },
  { name: 'palantir-mcp', transport: 'stdio', command: 'tux', args: ['palantir-mcp', 'start'], externalFor: ['claude-code', 'opencode'] },
  { name: 'docs-hub', transport: 'http', externalFor: ['claude-code', 'opencode'], disabledFor: ['codex', 'antigravity', 'pi'] },
];

describe('externally managed MCP servers', () => {
  test('are excluded from managed rendering only for their targets', () => {
    expect(managedMCPServers(servers, 'claude-code').map((s) => s.name)).toEqual(['github']);
    expect(managedMCPServers(servers, 'pi').map((s) => s.name)).toEqual(['github', 'palantir-mcp', 'docs-hub']);
    expect(externalMCPNames(servers, 'opencode')).toEqual(['palantir-mcp', 'docs-hub']);
  });

  test('Claude keeps existing external entries verbatim', () => {
    const existing = JSON.stringify({ other: 1, mcpServers: {
      'palantir-mcp': { type: 'stdio', command: '/Applications/Tux.app/tux', args: ['palantir-mcp', 'start'] },
      'docs-hub': { type: 'http', url: 'https://internal/mcp' },
      stale: { command: 'x' },
    } });
    const out = JSON.parse(renderTargetMCP(new ClaudeCodeAdapter('/tmp/h'), servers, existing));
    expect(out.other).toBe(1);
    expect(Object.keys(out.mcpServers).sort()).toEqual(['docs-hub', 'github', 'palantir-mcp']);
    expect(out.mcpServers['palantir-mcp'].command).toBe('/Applications/Tux.app/tux');
    expect(out.mcpServers['docs-hub'].url).toBe('https://internal/mcp');
  });

  test('OpenCode keeps existing external entries and omits absent ones', () => {
    const existing = JSON.stringify({ mcp: { servers: { 'palantir-mcp': { type: 'local', command: ['tux'], disabled: true } } } });
    const out = JSON.parse(renderTargetMCP(new OpenCodeAdapter('/tmp/h'), servers, existing));
    expect(out.mcp.servers['palantir-mcp']).toEqual({ type: 'local', command: ['tux'], disabled: true });
    expect(out.mcp.servers['docs-hub']).toBeUndefined();
    expect(out.mcp.servers.github).toBeDefined();
  });
});
