import { expect, test } from 'bun:test';
import { mkdtempSync, mkdirSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createInstructionsLoader, INSTRUCTION_PATHS } from '../../../configs/pi/extensions/instructions-loader';

type Handler = (event: { systemPromptOptions: { contextFiles: Array<{ path: string; content: string }> } }) => unknown;

function harness(paths: readonly string[], home: string, loads = 1) {
  const handlers: Handler[] = [];
  const pi = { on: (name: string, fn: Handler) => { if (name === 'before_agent_start') handlers.push(fn); } };
  for (let i = 0; i < loads; i++) createInstructionsLoader(paths, home)(pi as never);
  return async () => {
    const event = { systemPromptOptions: { contextFiles: [{ path: join(home, '.pi/agent/AGENTS.md'), content: 'agents' }] } };
    for (const h of handlers) await h(event);
    return event.systemPromptOptions.contextFiles;
  };
}

const home = mkdtempSync(join(tmpdir(), 'pi-instr-'));
mkdirSync(join(home, 'Vaults/Memory'), { recursive: true });
writeFileSync(join(home, 'Vaults/Memory/SOUL.md'), 'soul');
writeFileSync(join(home, 'Vaults/Memory/USER.md'), 'user');

test('appends existing vault files after AGENTS.md in canonical order', async () => {
  const files = await harness(INSTRUCTION_PATHS, home)();
  expect(files).toEqual([
    { path: join(home, '.pi/agent/AGENTS.md'), content: 'agents' },
    { path: join(home, 'Vaults/Memory/SOUL.md'), content: 'soul' },
    { path: join(home, 'Vaults/Memory/USER.md'), content: 'user' },
  ]);
});

test('double load does not duplicate files', async () => {
  const files = await harness(INSTRUCTION_PATHS, home, 2)();
  expect(files.map((f) => f.path)).toHaveLength(3);
});

test('reapplies on every run (fresh prompt options per turn)', async () => {
  const run = harness(INSTRUCTION_PATHS, home);
  await run();
  expect(await run()).toHaveLength(3);
});
