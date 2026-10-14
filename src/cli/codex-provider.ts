import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { Command } from 'commander';
import {
  CODEX_PROVIDERS,
  codexProfile,
  DEFAULT_CODEX_PROVIDER,
  isCodexProvider,
  readCodexProviderState,
  writeCodexProviderState,
  type CodexProvider,
} from '../core/codex-provider-state';
import { PROJECT_ROOT, SETTINGS_DIR } from './canonical';
import { runPush } from './push';

export interface CodexProviderResult {
  provider: CodexProvider;
  model: string;
  changed: boolean;
  output: string;
}

function formatResult(provider: CodexProvider, model: string, changed: boolean, json: boolean): string {
  if (json) return JSON.stringify({ provider, model, changed }, null, 2) + '\n';
  const state = changed ? 'switched' : 'active';
  return [
    `Codex desktop provider ${state}: ${provider} (${model})`,
    'Restart the ChatGPT/Codex app or start a new desktop session.',
    'Desktop history is filtered by provider; switching does not delete chats.',
    '',
  ].join('\n');
}

export async function runCodexProvider(
  requested?: string,
  options: { projectDir?: string; homeDir?: string; json?: boolean } = {},
): Promise<CodexProviderResult> {
  const projectDir = options.projectDir ?? PROJECT_ROOT;
  const settings: Record<string, unknown> = JSON.parse(
    await readFile(join(projectDir, SETTINGS_DIR, 'codex.json'), 'utf8'),
  );
  const saved = await readCodexProviderState(projectDir);
  const current = saved ?? DEFAULT_CODEX_PROVIDER;
  const provider = requested ?? current;
  if (!isCodexProvider(provider)) {
    throw new Error(`Unknown provider '${provider}'. Choose: ${CODEX_PROVIDERS.join(', ')}.`);
  }

  const target = codexProfile(settings, provider);
  const changed = provider !== current;
  if (changed) {
    await writeCodexProviderState(projectDir, provider);
    try {
      const pushed = await runPush({
        projectDir,
        homeDir: options.homeDir,
        targets: ['codex'],
        types: ['settings'],
        force: true,
      });
      if (pushed.failed > 0 || pushed.rolledBack) throw new Error('Codex settings push failed.');
    } catch (error) {
      await writeCodexProviderState(projectDir, saved);
      throw error;
    }
  }

  return {
    provider,
    model: target.model,
    changed,
    output: formatResult(provider, target.model, changed, options.json ?? false),
  };
}

export const codexProviderCommand = new Command('codex-provider')
  .description('Show or switch the provider used by the ChatGPT/Codex desktop app.')
  .argument('[provider]', 'enterprise or tux')
  .option('--json', 'Machine-readable output')
  .action(async (provider: string | undefined, options: { json?: boolean }) => {
    try {
      const result = await runCodexProvider(provider, options);
      process.stdout.write(result.output);
    } catch (error) {
      process.stderr.write(`Error: ${error instanceof Error ? error.message : String(error)}\n`);
      process.exitCode = 1;
    }
  });
