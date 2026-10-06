// Pi port of configs/opencode/v2/plugins/instructions-loader.ts:
// appends Memory vault files as context files in every session and subagent.
import { readFile } from 'node:fs/promises';
import { homedir } from 'node:os';
import { resolve } from 'node:path';
import type { ExtensionAPI } from '@earendil-works/pi-coding-agent';

export const INSTRUCTION_PATHS = [
  '~/Vaults/Memory/SOUL.md',
  '~/Vaults/Memory/IDENTITY.md',
  '~/Vaults/Memory/USER.md',
  '~/Vaults/Memory/MEMORY.md',
] as const;

type ContextFile = { path: string; content: string };

function expandHome(path: string, home: string): string {
  if (path === '~') return home;
  if (path.startsWith('~/')) return resolve(home, path.slice(2));
  return resolve(path);
}

export function createInstructionsLoader(paths: readonly string[] = INSTRUCTION_PATHS, home = homedir()) {
  return (pi: ExtensionAPI) => {
    let loaded: Promise<ContextFile[]> | undefined;
    const load = () => (loaded ??= Promise.all(paths.map(async (p) => {
      const path = expandHome(p, home);
      try { return { path, content: await readFile(path, 'utf8') }; } catch { return undefined; }
    })).then((files) => files.filter((f): f is ContextFile => f !== undefined)));

    pi.on('before_agent_start', async (event) => {
      const contextFiles = event.systemPromptOptions.contextFiles;
      const present = new Set(contextFiles.map((f) => f.path));
      for (const file of await load()) {
        if (!present.has(file.path)) contextFiles.push(file);
      }
    });
  };
}

export default createInstructionsLoader();
