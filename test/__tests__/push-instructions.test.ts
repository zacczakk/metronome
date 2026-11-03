import { describe, expect, test } from 'bun:test';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { createTestHome, createTestProject } from '../helpers/backup';
import { runPush } from '../../src/cli/push';
import { createAdapter } from '../../src/cli/canonical';
import type { TargetName } from '../../src/types';

const FIXTURE_ROOT = join(import.meta.dir, '../fixtures');

/** Golden fixture paths per target */
const GOLDEN_PATHS: Record<TargetName, string> = {
  'claude-code': join(FIXTURE_ROOT, 'claude/instructions/CLAUDE.md'),
  opencode: join(FIXTURE_ROOT, 'opencode/instructions/AGENTS.md'),
  antigravity: join(FIXTURE_ROOT, 'antigravity/instructions/AGENTS.md'),
  codex: join(FIXTURE_ROOT, 'codex/instructions/AGENTS.md'),
  pi: join(FIXTURE_ROOT, 'pi/instructions/AGENTS.md'),
};

const ALL_TARGETS: TargetName[] = ['claude-code', 'opencode', 'antigravity', 'codex', 'pi'];

describe('push instructions E2E', () => {
  test('pushes instructions to all 5 targets, matches goldens, identity passthrough, idempotent', async () => {
    const fakeHome = createTestHome('push-instr');
    const projectDir = createTestProject('push-instr', FIXTURE_ROOT);

    // --- Push instructions (no seeding needed — identity passthrough) ---
    const result = await runPush({ projectDir, force: true, types: ['instruction'], homeDir: fakeHome });
    expect(result.failed).toBe(0);
    expect(result.rolledBack).toBe(false);
    expect(result.written).toBe(5);

    // --- Golden comparison for all 5 targets ---
    for (const target of ALL_TARGETS) {
      const adapter = createAdapter(target, fakeHome);
      const instructionsPath = adapter.getPaths().getInstructionsPath();
      const actual = readFileSync(instructionsPath, 'utf-8');
      const golden = readFileSync(GOLDEN_PATHS[target], 'utf-8');
      expect(actual).toBe(golden);
    }

    // --- All 5 targets get identical content (identity passthrough) ---
    const contents = ALL_TARGETS.map((target) => {
      const adapter = createAdapter(target, fakeHome);
      return readFileSync(adapter.getPaths().getInstructionsPath(), 'utf-8');
    });
    for (let i = 1; i < contents.length; i++) {
      expect(contents[i]).toBe(contents[0]);
    }

    // --- Idempotency: second push reports no drift ---
    const result2 = await runPush({ projectDir, force: true, types: ['instruction'], homeDir: fakeHome });
    expect(result2.hasDrift).toBe(false);
    expect(result2.written).toBe(0);
  });

  test('syncs Cowork instructions when only the Memory vault changed', async () => {
    const fakeHome = createTestHome('push-instr-cowork');
    const projectDir = createTestProject('push-instr-cowork', FIXTURE_ROOT);
    const accountDir = join(fakeHome, 'Library/Application Support/Claude-3p/local-agent-mode-sessions', 'f2345c46-7345-402b-bf22-3bfd122ed95a', '00000000-0000-4000-8000-000000000001');
    const vaultDir = join(fakeHome, 'Vaults', 'Memory');
    mkdirSync(accountDir, { recursive: true });
    mkdirSync(vaultDir, { recursive: true });

    await runPush({ projectDir, force: true, types: ['instruction'], homeDir: fakeHome });
    writeFileSync(join(vaultDir, 'SOUL.md'), '# SOUL\n\nnew soul\n');
    const result = await runPush({ projectDir, force: true, types: ['instruction'], homeDir: fakeHome });

    expect(result.failed).toBe(0);
    expect(result.written).toBe(1);
    expect(readFileSync(join(accountDir, 'memory', 'CLAUDE.md'), 'utf-8')).toContain('new soul');
  });
});
