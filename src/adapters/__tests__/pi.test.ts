import { expect, test } from 'bun:test';
import { PiAdapter } from '../pi';

const adapter = new PiAdapter('/tmp/pi-home');

test('paths live under ~/.pi/agent', () => {
  const p = adapter.getPaths();
  expect(p.getMCPConfigPath()).toBe('/tmp/pi-home/.pi/agent/mcp.json');
  expect(p.getSettingsPath()).toBe('/tmp/pi-home/.pi/agent/settings.json');
  expect(p.getAgentFilePath('execute')).toBe('/tmp/pi-home/.pi/agent/agents/execute.md');
  expect(p.getInstructionsPath()).toBe('/tmp/pi-home/.pi/agent/AGENTS.md');
  expect(adapter.getCapabilities()).toMatchObject({ agents: true, mcp: true, settings: true, instructions: true, skills: false, commands: false, hooks: false });
});

test('settings merge preserves runtime keys and strips private keys', () => {
  const out = JSON.parse(adapter.renderSettings(
    { target: 'pi', keys: { defaultProvider: 'tux', _opencodeProviders: { tux: {} } } },
    JSON.stringify({ lastChangelogVersion: '1.0.4', defaultProvider: 'github-copilot' })));
  expect(out).toEqual({ lastChangelogVersion: '1.0.4', defaultProvider: 'tux' });
});

test('models.json is an additional settings file', () => {
  const files = adapter.renderAdditionalSettings({ target: 'pi', keys: { _opencodeProviders: {
    tux: { name: 'Tux', settings: { baseURL: 'http://127.0.0.1:18080/v1', apiKey: 'x' }, models: { 'gpt-6-luna': { package: 'aisdk:@ai-sdk/openai', variants: [] } } } } } });
  expect(files).toHaveLength(1);
  expect(files[0].relativePath).toBe('/tmp/pi-home/.pi/agent/models.json');
  expect(JSON.parse(files[0].content).providers.tux.models[0].id).toBe('gpt-6-luna');
});

test('agent and MCP rendering', () => {
  const agent = adapter.renderAgent({ name: 'docs', content: 'Body\n', metadata: { description: 'D', model: 'github-copilot/gpt-6-luna' } });
  expect(agent.relativePath).toBe('/tmp/pi-home/.pi/agent/agents/docs.md');
  expect(agent.content).toContain('name: docs');
  expect(agent.content).toContain('advertise: true');
  const mcp = JSON.parse(adapter.renderMCPServers([{ name: 'x', transport: 'stdio', command: 'x' }], '{"mcpServers":{"old":{}},"autoEnableCodemode":true}'));
  expect(Object.keys(mcp.mcpServers)).toEqual(['x']);
  expect(mcp.autoEnableCodemode).toBe(true);
});
