import { expect, test } from 'bun:test';
import { renderPiAgentMetadata } from '../agents';

test('maps model, effort and permissions to pi-subagents frontmatter', () => {
  const meta = renderPiAgentMetadata({ name: 'execute', content: 'x', metadata: {
    description: 'Impl', mode: 'subagent', model: 'tux/gpt-6.1-sol', reasoningEffort: 'high', textVerbosity: 'low',
    color: '#fff', permission: { '*': 'deny', read: 'allow', glob: 'allow', grep: 'allow', bash: 'allow', edit: 'allow' } } });
  expect(meta).toEqual({
    name: 'execute', description: 'Impl', model: 'tux/gpt-6.1-sol', thinking: 'high',
    tools: 'read, grep, find, ls, edit, write, bash', advertise: true, systemPromptMode: 'append',
    inheritProjectContext: true, inheritGlobalContext: true, inheritSkills: true,
    subagentOnlyExtensions: '~/Repos/zacczakk/metronome/configs/pi/extensions/instructions-loader.ts, ~/Repos/zacczakk/metronome/configs/pi/extensions/permissions.ts',
  });
});

test('MCP wildcard permissions become mcp: tools; none → off', () => {
  const meta = renderPiAgentMetadata({ name: 'foundry-sql', content: '', metadata: {
    description: 'SQL', model: 'github-copilot/gpt-6.1-sol', reasoningEffort: 'none', steps: 12, targets: ['opencode', 'pi'],
    permission: { '*': 'deny', 'palantir-mcp_*': 'allow' } } });
  expect(meta.tools).toBe('mcp:palantir-mcp');
  expect(meta.thinking).toBe('off');
  expect(meta).not.toHaveProperty('steps');
  expect(meta).not.toHaveProperty('targets');
});

test('nested bash rules still grant bash', () => {
  const meta = renderPiAgentMetadata({ name: 'release', content: '', metadata: {
    description: 'Rel', permission: { '*': 'deny', bash: { '*': 'allow', 'git push *': 'allow' } } } });
  expect(meta.tools).toBe('bash');
});
