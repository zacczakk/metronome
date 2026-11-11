import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { isPlainObject } from '../adapters/merge';

export type MachineProfile = {
  name: string;
  settings: Record<string, Record<string, unknown>>;
  agents: Record<string, Record<string, unknown>>;
};

/** Machine-local profile name from `.metronome/machine`; absent means no overrides. */
export async function readMachineProfile(projectDir: string): Promise<MachineProfile | null> {
  let name: string;
  try {
    name = (await readFile(join(projectDir, '.metronome', 'machine'), 'utf8')).trim();
  } catch (error) {
    if (error instanceof Error && 'code' in error && error.code === 'ENOENT') return null;
    throw error;
  }
  if (!name) return null;

  const path = join(projectDir, 'configs', 'machines', `${name}.json`);
  let raw: string;
  try {
    raw = await readFile(path, 'utf8');
  } catch {
    throw new Error(`Machine profile '${name}' from .metronome/machine has no configs/machines/${name}.json.`);
  }
  const parsed: unknown = JSON.parse(raw);
  if (!isPlainObject(parsed)) throw new Error(`configs/machines/${name}.json must be a JSON object.`);
  return { name, settings: objectMap(parsed.settings), agents: objectMap(parsed.agents) };
}

function objectMap(value: unknown): Record<string, Record<string, unknown>> {
  if (!isPlainObject(value)) return {};
  return Object.fromEntries(
    Object.entries(value).filter((entry): entry is [string, Record<string, unknown>] => isPlainObject(entry[1])),
  );
}

/** Deep-merge `overlay` onto `base`; a `null` overlay value removes the key. */
export function applyOverlay(base: Record<string, unknown>, overlay: Record<string, unknown>): Record<string, unknown> {
  const result: Record<string, unknown> = { ...base };
  for (const [key, value] of Object.entries(overlay)) {
    if (value === null) delete result[key];
    else if (isPlainObject(value) && isPlainObject(result[key])) result[key] = applyOverlay(result[key], value);
    else result[key] = value;
  }
  return result;
}
