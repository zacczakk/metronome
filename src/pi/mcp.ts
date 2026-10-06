import type { MCPServer } from '../types';

/** Render canonical MCP servers for Pi's built-in MCP (~/.pi/agent/mcp.json), mirroring OpenCode enablement. */
export function renderPiMcp(servers: MCPServer[]): { mcpServers: Record<string, Record<string, unknown>> } {
  const mcpServers: Record<string, Record<string, unknown>> = {};
  for (const s of servers) {
    if (s.disabledFor?.includes('pi')) continue;
    const oc = s.targetOptions?.opencode ?? {};
    const pi = { ...(s.targetOptions?.pi ?? {}) };
    const cfg: Record<string, unknown> = s.transport === 'stdio'
      ? { command: s.command, args: s.args ?? [], ...(s.env ? { env: { ...s.env } } : {}) }
      : { url: s.url, ...(s.headers ? { headers: { ...s.headers } } : {}) };
    cfg.enabled = typeof pi.enabled === 'boolean' ? pi.enabled
      : typeof oc.enabled === 'boolean' ? oc.enabled : s.enabled !== false;
    delete pi.enabled;
    if (typeof oc.codemode === 'boolean') cfg.exposure = oc.codemode ? 'codemode' : 'direct';
    if (typeof oc.timeout === 'number') cfg.timeout = oc.timeout / 1000;
    Object.assign(cfg, pi);
    mcpServers[s.name] = cfg;
  }
  return { mcpServers };
}
