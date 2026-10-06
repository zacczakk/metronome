import { expect, test } from 'bun:test';
import { renderPiMcp } from '../mcp';
import type { MCPServer } from '../../types';

const servers: MCPServer[] = [
  { name: 'github', transport: 'http', url: 'https://api.githubcopilot.com/mcp/',
    headers: { Authorization: 'Bearer ${GITHUB_PERSONAL_ACCESS_TOKEN}' },
    targetOptions: { opencode: { oauth: false, codemode: true } } },
  { name: 'palantir-mcp', transport: 'stdio', command: 'tux', args: ['palantir-mcp', 'start'], enabled: false,
    targetOptions: { opencode: { enabled: true, timeout: 20000, codemode: false } } },
  { name: 'tavily', transport: 'stdio', command: 'tavily-mcp', args: [], enabled: false,
    env: { TAVILY_API_KEY: '${TAVILY_API_KEY}' } },
  { name: 'figma', transport: 'http', url: 'https://mcp.figma.com/mcp', enabled: false,
    targetOptions: { pi: { oauth: { clientName: 'Claude Code' } } } },
  { name: 'shadcn', transport: 'stdio', command: 'npx', disabledFor: ['pi'] },
];
const out = renderPiMcp(servers).mcpServers;

test('mirrors OpenCode enablement, exposure and timeout (ms→s)', () => {
  expect(out.github).toEqual({ url: 'https://api.githubcopilot.com/mcp/',
    headers: { Authorization: 'Bearer ${GITHUB_PERSONAL_ACCESS_TOKEN}' }, enabled: true, exposure: 'codemode' });
  expect(out['palantir-mcp']).toEqual({ command: 'tux', args: ['palantir-mcp', 'start'], enabled: true, exposure: 'direct', timeout: 20 });
  expect(out.tavily).toEqual({ command: 'tavily-mcp', args: [], env: { TAVILY_API_KEY: '${TAVILY_API_KEY}' }, enabled: false });
});

test('pi target options win and disabled_for skips', () => {
  expect(out.figma).toEqual({ url: 'https://mcp.figma.com/mcp', enabled: false, oauth: { clientName: 'Claude Code' } });
  expect(out.shadcn).toBeUndefined();
});
