#!/usr/bin/env bun
import os from 'node:os';
import { join } from 'node:path';
import { Command } from 'commander';
import pc from 'picocolors';
import { PROJECT_ROOT } from './canonical';
import { planClaudeDesktop, type Variant } from '../desktop/claude-desktop-sync';

const VALID_VARIANTS: Variant[] = ['claude', 'claude-3p'];

function isVariant(value: string): value is Variant {
  return VALID_VARIANTS.some((variant) => variant === value);
}

export const syncDesktopCommand = new Command('sync-desktop')
  .description(
    `Sync canonical configs to Claude Desktop (regular + 3p / Cowork variants).

Writes two surfaces per detected variant, only when they differ:
  1. CLAUDE.md  — composed from configs/instructions/AGENTS.md + Memory vault
                  (IDENTITY/SOUL/USER/STYLE) → memory/CLAUDE.md
  2. Skills     — copies configs/skills/* into the per-account skills-plugin
                  scaffold; preserves Anthropic-managed skills, upserts user
                  entries in manifest.json

metronome push (Claude target, instructions or skills) runs the same sync, and
metronome check reports its drift.

MCP servers live in ~/.claude.json (claude-code adapter), shared by both
Desktop variants via the bundled SDK.

Auto-discovers account/org UUIDs from local-agent-mode-sessions/. Idempotent.

Examples:
  metronome sync-desktop                        Sync to all detected variants
  metronome sync-desktop --dry-run              Show what would be written
  metronome sync-desktop --variant claude-3p    Sync only to Cowork (3p)
  metronome sync-desktop --memory-vault PATH    Override default ~/Vaults/Memory`,
  )
  .option(
    '--variant <name>',
    `Restrict to a single variant: ${VALID_VARIANTS.join(', ')}`,
  )
  .option(
    '--memory-vault <path>',
    'Path to Memory vault containing IDENTITY.md/SOUL.md/USER.md/STYLE.md',
    join(os.homedir(), 'Vaults/Memory'),
  )
  .option('--dry-run', 'Show what would be written without writing', false)
  .action(async (opts: { variant?: string; memoryVault: string; dryRun: boolean }) => {
    try {
      const variant = opts.variant;
      if (variant !== undefined && !isVariant(variant)) {
        throw new Error(`Invalid variant "${variant}". Valid: ${VALID_VARIANTS.join(', ')}`);
      }

      const plans = await planClaudeDesktop({
        configsDir: join(PROJECT_ROOT, 'configs'),
        memoryVaultDir: opts.memoryVault,
        variants: variant ? [variant] : undefined,
      });

      if (plans.length === 0) {
        process.stderr.write(
          pc.yellow('No Claude Desktop variants found (or no account/org detected).\n'),
        );
        process.stderr.write(
          pc.dim(
            '  Looked under: ~/Library/Application Support/{Claude,Claude-3p}/local-agent-mode-sessions/\n',
          ),
        );
        process.exit(0);
      }

      const changed = opts.dryRun ? 'would write' : 'written';
      for (const plan of plans) {
        if (!opts.dryRun) await plan.apply();
        process.stdout.write(pc.green(`✓ ${plan.variant}\n`));
        process.stdout.write(`  instructions: ${plan.instructions ? changed : 'unchanged'}\n`);
        process.stdout.write(`  skills:       ${plan.skills ? changed : 'unchanged'} (${plan.userSkills} user skills)\n`);
      }
      if (!opts.dryRun && plans.some((plan) => plan.instructions || plan.skills)) {
        process.stdout.write(pc.dim('\nRestart Claude Desktop to pick up changes.\n'));
      }
      process.exit(0);
    } catch (err) {
      process.stderr.write(pc.red(`Error: ${err instanceof Error ? err.message : String(err)}\n`));
      process.exit(1);
    }
  });
