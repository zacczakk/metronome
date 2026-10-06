import { readJsonc } from '../formats/jsonc';
import type { ToolAdapter } from '../adapters/base';
import type { MCPServer, TargetName } from '../types';

/**
 * MCP servers listed with `external_for` are owned by another tool for those targets
 * (e.g. `tux integrate`). Metronome neither renders, rewrites, removes, nor reports
 * drift for them there; existing target entries are kept verbatim.
 */
const MCP_SECTION: Partial<Record<TargetName, string[]>> = {
  'claude-code': ['mcpServers'],
  opencode: ['mcp', 'servers'],
  antigravity: ['mcpServers'],
  pi: ['mcpServers'],
};

const isExternal = (server: MCPServer, target: TargetName) => server.externalFor?.includes(target) ?? false;

export function managedMCPServers(servers: MCPServer[], target: TargetName): MCPServer[] {
  return servers.filter((server) => !isExternal(server, target));
}

export function externalMCPNames(servers: MCPServer[], target: TargetName): string[] {
  return servers.filter((server) => isExternal(server, target)).map((server) => server.name);
}

function section(root: unknown, path: string[]): Record<string, unknown> | undefined {
  let node = root;
  for (const key of path) {
    if (typeof node !== 'object' || node === null) return undefined;
    node = (node as Record<string, unknown>)[key];
  }
  return typeof node === 'object' && node !== null ? node as Record<string, unknown> : undefined;
}

/** Render managed servers, then restore the target's own entries for external servers. */
export function renderTargetMCP(adapter: ToolAdapter, servers: MCPServer[], existingContent?: string): string {
  const rendered = adapter.renderMCPServers(managedMCPServers(servers, adapter.target), existingContent);
  const names = externalMCPNames(servers, adapter.target);
  if (names.length === 0 || !existingContent) return rendered;
  const path = MCP_SECTION[adapter.target];
  if (!path) throw new Error(`external_for is not supported for ${adapter.target}`);
  const existing = section(readJsonc(existingContent), path);
  const output = JSON.parse(rendered) as Record<string, unknown>;
  const target = section(output, path);
  if (!existing || !target) return rendered;
  for (const name of names) {
    if (existing[name] !== undefined) target[name] = existing[name];
  }
  return JSON.stringify(output, null, 2) + '\n';
}
