import { describe, test, expect } from 'bun:test';
import { OpenCodeAdapter } from '../opencode';
import { readJsonc } from '../../formats/jsonc';
import type { MCPServer } from '../../types';

const adapter = new OpenCodeAdapter();

const stdioServer: MCPServer = {
  name: 'context7', transport: 'stdio', command: 'npx', args: ['-y', '@context7/mcp'],
  env: { CONTEXT7_API_KEY: '${CONTEXT7_API_KEY}' },
};

const httpServer: MCPServer = {
  name: 'tavily', transport: 'http', url: 'https://mcp.tavily.com/mcp',
  env: { TAVILY_API_KEY: '${TAVILY_API_KEY}' },
};

const githubServer: MCPServer = {
  name: 'github', transport: 'http', url: 'https://api.githubcopilot.com/mcp/',
  headers: { Authorization: 'Bearer ${GITHUB_PERSONAL_ACCESS_TOKEN}' },
  targetOptions: { opencode: { oauth: false, codemode: true } },
};

function servers(content: string): Record<string, Record<string, unknown>> {
  const parsed = readJsonc<Record<string, unknown>>(content);
  return (parsed.mcp as Record<string, unknown>).servers as Record<string, Record<string, unknown>>;
}

describe('OpenCodeAdapter native MCP rendering', () => {
  test('renders stdio and HTTP servers', () => {
    expect(servers(adapter.renderMCPServers([stdioServer])).context7).toMatchObject({
      type: 'local', command: ['npx', '-y', '@context7/mcp'], disabled: false,
    });
    expect(servers(adapter.renderMCPServers([httpServer])).tavily).toMatchObject({
      type: 'remote', url: 'https://mcp.tavily.com/mcp', disabled: false,
    });
  });

  test('converts environment variables and headers to runtime syntax', () => {
    const rendered = adapter.renderMCPServers([stdioServer, httpServer, githubServer]);
    expect(rendered).toContain('{env:CONTEXT7_API_KEY}');
    expect(rendered).toContain('{env:TAVILY_API_KEY}');
    expect(servers(rendered).github.headers).toEqual({ Authorization: 'Bearer {env:GITHUB_PERSONAL_ACCESS_TOKEN}' });
  });

  test('omits empty environment values and preserves unrelated JSONC state', () => {
    const simple: MCPServer = { name: 'simple', transport: 'stdio', command: 'node', args: ['server.js'] };
    const existing = '{\n  // comment\n  "theme": "dark"\n}';
    const rendered = adapter.renderMCPServers([simple], existing);
    expect(readJsonc<Record<string, unknown>>(rendered).theme).toBe('dark');
    expect(servers(rendered).simple.environment).toBeUndefined();
  });

  test('renders inverse enablement and target overrides', () => {
    const disabled: MCPServer = {
      name: 'thinking', transport: 'stdio', command: 'npx', args: ['-y', '@mcp/thinking'], enabled: false,
      targetOptions: { opencode: { enabled: true, codemode: false, timeout: 20_000 } },
    };
    const rendered = servers(adapter.renderMCPServers([stdioServer, disabled]));
    expect(rendered.context7.disabled).toBe(false);
    expect(rendered.thinking).toMatchObject({ disabled: false, codemode: false, timeout: { catalog: 20_000, execution: 20_000 } });
    expect(rendered.thinking.enabled).toBeUndefined();
  });

  test('filters servers disabled for the native target', () => {
    const excluded: MCPServer = { name: 'excluded', transport: 'stdio', command: 'tool', disabledFor: ['opencode'] };
    const rendered = servers(adapter.renderMCPServers([stdioServer, excluded]));
    expect(rendered.context7).toBeDefined();
    expect(rendered.excluded).toBeUndefined();
    expect(adapter.getRenderedServerNames([stdioServer, excluded])).toEqual(['context7']);
  });

  test('parses native servers and round-trips target options', () => {
    const content = JSON.stringify({
      mcp: {
        servers: {
          github: {
            type: 'remote', url: 'https://api.githubcopilot.com/mcp/',
            headers: { Authorization: 'Bearer {env:GITHUB_PERSONAL_ACCESS_TOKEN}' }, oauth: false, codemode: true,
          },
          peekaboo: { type: 'local', command: ['peekaboo'], timeout: { catalog: 30_000, execution: 30_000 } },
        },
      },
    });
    expect(adapter.parseExistingMCPServerNames(content)).toEqual(['github', 'peekaboo']);
    expect(adapter.parseMCPServers(content)).toEqual([
      {
        name: 'github', transport: 'http', url: 'https://api.githubcopilot.com/mcp/',
        headers: { Authorization: 'Bearer ${GITHUB_PERSONAL_ACCESS_TOKEN}' },
        targetOptions: { opencode: { oauth: false, codemode: true } },
      },
      {
        name: 'peekaboo', transport: 'stdio', command: 'peekaboo', args: [],
        targetOptions: { opencode: { timeout: { catalog: 30_000, execution: 30_000 } } },
      },
    ]);
  });

  test('handles empty and minimal configs', () => {
    expect(servers(adapter.renderMCPServers([]))).toEqual({});
    const minimal: MCPServer = { name: 'minimal', transport: 'stdio', command: 'mytool' };
    expect(servers(adapter.renderMCPServers([minimal])).minimal.command).toEqual(['mytool']);
    expect(adapter.parseExistingMCPServerNames('{}')).toEqual([]);
    expect(adapter.removesNonCanonicalOnPush()).toBe(true);
  });
});
