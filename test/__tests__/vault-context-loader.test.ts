import { expect, test } from 'bun:test';
import { mkdirSync, mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const CLAUDE_HOOK_LIMIT = 10_000;
const home = mkdtempSync(join(tmpdir(), 'vault-loader-'));
mkdirSync(join(home, 'Vaults/Memory'), { recursive: true });
writeFileSync(join(home, 'Vaults/Memory/SOUL.md'), 'soul '.repeat(1500));
writeFileSync(join(home, 'Vaults/Memory/STYLE.md'), 'style '.repeat(1500));

function load(...files: string[]): string {
  const run = Bun.spawnSync(['node', 'configs/hooks/vault-context-loader.js', ...files], {
    env: { ...process.env, HOME: home },
    stdin: Buffer.from('{}'),
  });
  return JSON.parse(run.stdout.toString()).hookSpecificOutput.additionalContext;
}

test('loads only the named file so each Claude hook value stays under the cap', () => {
  const style = load('STYLE.md');
  expect(style.startsWith('# STYLE')).toBe(true);
  expect(style).not.toContain('soul');
  expect(style.length).toBeLessThan(CLAUDE_HOOK_LIMIT);
});

test('canonical Claude settings run the loader once per injected file', () => {
  const settings = JSON.parse(readFileSync('configs/settings/claude.json', 'utf8'));
  const commands: string[] = settings.hooks.SessionStart.flatMap((group: { hooks: Array<{ command: string }> }) => group.hooks.map((hook) => hook.command));
  const loaded = commands.filter((command) => command.includes('vault-context-loader.js')).map((command) => command.split(' ').pop());
  expect(loaded).toEqual(['IDENTITY.md', 'SOUL.md', 'USER.md', 'STYLE.md', 'MEMORY.md']);
});
