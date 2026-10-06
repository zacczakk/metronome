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
      const options = event.systemPromptOptions;
      const present = new Set(options.contextFiles.map((f) => f.path));
      const missing = (await load()).filter((f) => !present.has(f.path) && !event.systemPrompt?.includes(`path="${f.path}"`));
      if (missing.length === 0) return;
      // pi-subagents children run with a forced system prompt, which ignores contextFiles.
      if (options.forceSystemPrompt !== undefined) {
        const blocks = missing.map((f) => `<instruction-source path="${f.path}">\n${f.content}\n</instruction-source>`);
        return { systemPrompt: [event.systemPrompt, ...blocks].join('\n\n') };
      }
      options.contextFiles.push(...missing);
    });
  };
}

export default createInstructionsLoader();
