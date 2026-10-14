import { readFile, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { isPlainObject } from '../adapters/merge';
import { atomicWrite } from '../infra/atomic-write';

export const CODEX_PROVIDERS = ['enterprise', 'tux'] as const;
export type CodexProvider = (typeof CODEX_PROVIDERS)[number];
export const DEFAULT_CODEX_PROVIDER: CodexProvider = 'tux';

export function isCodexProvider(value: string): value is CodexProvider {
  return CODEX_PROVIDERS.some((provider) => provider === value);
}

function statePath(projectDir: string): string {
  return join(projectDir, '.metronome', 'codex-provider');
}

/** Machine-local Codex Desktop provider choice; absent means the default. */
export async function readCodexProviderState(projectDir: string): Promise<CodexProvider | null> {
  let raw: string;
  try {
    raw = await readFile(statePath(projectDir), 'utf8');
  } catch (error) {
    if (error instanceof Error && 'code' in error && error.code === 'ENOENT') return null;
    throw error;
  }
  const value = raw.trim();
  if (!isCodexProvider(value)) {
    throw new Error(`Unsupported Codex provider '${value}' in .metronome/codex-provider. Choose: ${CODEX_PROVIDERS.join(', ')}.`);
  }
  return value;
}

export async function writeCodexProviderState(projectDir: string, provider: CodexProvider | null): Promise<void> {
  if (provider === null) {
    await rm(statePath(projectDir), { force: true });
    return;
  }
  await atomicWrite(statePath(projectDir), `${provider}\n`);
}

export function codexProfile(keys: Record<string, unknown>, provider: CodexProvider): { model: string; model_provider: string } {
  const profiles = keys.profile_files;
  const config = isPlainObject(profiles) ? profiles[provider] : undefined;
  if (!isPlainObject(config) || typeof config.model !== 'string' || typeof config.model_provider !== 'string') {
    throw new Error(`Codex profile '${provider}' is missing model or model_provider.`);
  }
  return { model: config.model, model_provider: config.model_provider };
}
