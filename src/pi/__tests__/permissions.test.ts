import { describe, expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { bashCommands, decide, evaluate, type Rule } from '../../../configs/pi/extensions/permissions';

const HOME = '/h';
const CWD = '/h/Repos/zacczakk/app';
const opencode = JSON.parse(readFileSync(join(process.cwd(), 'configs/settings/opencode.json'), 'utf8'));
const rules = opencode.permissions as Rule[];
const call = (toolName: string, input: Record<string, unknown>, ruleset: Rule[] = rules) => decide(ruleset, { toolName, input }, CWD, HOME)?.effect;

describe('OpenCode rule semantics', () => {
  test('last matching rule wins; * spans path separators; ~ expands', () => {
    const r: Rule[] = [
      { action: 'read', resource: '*', effect: 'allow' },
      { action: 'read', resource: '*.env', effect: 'deny' },
      { action: 'read', resource: '*.env.example', effect: 'allow' },
      { action: 'read', resource: '~/secret', effect: 'deny' },
    ];
    expect(evaluate(r, 'read', 'a/b/.env', HOME)).toBe('deny');
    expect(evaluate(r, 'read', 'a/.env.example', HOME)).toBe('allow');
    expect(evaluate(r, 'read', '/h/secret', HOME)).toBe('deny');
    expect(evaluate(r, 'read', 'src/x.ts', HOME)).toBe('allow');
  });

  test('unmatched actions fall back to the default', () => {
    expect(evaluate([], 'external_directory', '/x', HOME, 'ask')).toBe('ask');
    expect(evaluate([], 'read', 'x', HOME)).toBe('allow');
  });

  test('splits compound shell commands outside quotes', () => {
    expect(bashCommands('git status && rm -rf x; echo "a && b" | wc -l')).toEqual(['git status', 'rm -rf x', 'echo "a && b"', 'wc -l']);
  });
});

describe('canonical OpenCode permissions applied to Pi tools', () => {
  test('shell', () => {
    expect(call('bash', { command: 'ls -la' })).toBe('allow');
    expect(call('bash', { command: 'rm -rf build' })).toBe('deny');
    expect(call('bash', { command: 'bun test && git push origin main' })).toBe('ask');
    expect(call('bash', { command: 'git reset --hard HEAD~1' })).toBe('deny');
    expect(call('bash', { command: 'cat app/.env' })).toBe('deny');
    expect(call('bash', { command: 'cat app/.env.example' })).toBe('allow');
    expect(call('bash', { command: 'committer "feat: x" a.ts' })).toBe('allow');
  });

  test('read and edit use workspace-relative paths inside cwd, absolute outside', () => {
    expect(call('read', { path: 'src/index.ts' })).toBe('allow');
    expect(call('read', { path: '.env' })).toBe('deny');
    expect(call('read', { path: '/h/.zsh_secrets' })).toBe('deny');
    expect(call('edit', { path: 'src/index.ts' })).toBe('allow');
    expect(call('write', { path: '/h/Repos/other/x.ts' })).toBe('deny');
    expect(call('edit', { path: '/h/.config/oe/x.json' })).toBe('allow');
  });

  test('external directories ask unless allowlisted', () => {
    expect(call('read', { path: '/h/Vaults/Memory/SOUL.md' })).toBe('allow');
    expect(call('read', { path: '/etc/hosts' })).toBe('ask');
    expect(call('ls', { path: '/tmp/x' })).toBe('allow');
    expect(call('grep', { pattern: 'x', path: '/opt/data' })).toBe('ask');
    expect(call('bash', { command: 'cat /etc/hosts' })).toBe('ask');
    expect(call('bash', { command: 'cd /h/Repos/other && ls' })).toBe('allow');
  });

  test('MCP tools map to <server>_<tool> actions; unknown tools are not gated', () => {
    const r: Rule[] = [...rules, { action: '*', resource: '*', effect: 'deny' }, { action: 'palantir-mcp_*', resource: '*', effect: 'allow' }];
    expect(call('mcp__palantir_mcp__search_tools', {}, r)).toBe('allow');
    expect(call('mcp__github__get_me', {}, r)).toBe('deny');
    expect(call('contact_supervisor', {}, r)).toBeUndefined();
  });

  test('agent rules appended after global rules take precedence', () => {
    const release: Rule[] = [...rules, { action: 'shell', resource: '*', effect: 'allow' }, { action: 'shell', resource: 'git push *', effect: 'allow' }];
    expect(call('bash', { command: 'git push origin v1' }, release)).toBe('allow');
  });
});
