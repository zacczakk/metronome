import { expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { renderOpenCodeMcp } from '../../opencode/version-renderer';
import { readCanonicalMCPServers, readCanonicalSettings, PROJECT_ROOT } from '../canonical';
import { PiAdapter } from '../../adapters/pi';
import { INSTRUCTION_PATHS } from '../../../configs/pi/extensions/instructions-loader';

const opencode = JSON.parse(readFileSync(join(PROJECT_ROOT, 'configs/settings/opencode.json'), 'utf8'));
const LOADER = '~/Repos/zacczakk/metronome/configs/pi/extensions/instructions-loader.ts';

test('Pi default model equals OpenCode default model', async () => {
  const pi = await readCanonicalSettings(PROJECT_ROOT, 'pi');
  expect(`${pi!.keys.defaultProvider}/${pi!.keys.defaultModel}`).toBe(opencode.model);
});

test('Pi models.json covers every OpenCode Tux model', async () => {
  const pi = await readCanonicalSettings(PROJECT_ROOT, 'pi');
  const models = JSON.parse(new PiAdapter('/h').renderAdditionalSettings(pi!)[0].content).providers.tux.models;
  expect(models.map((m: { id: string }) => m.id).sort()).toEqual(Object.keys(opencode.providers.tux.models).sort());
});

test('Pi enables exactly the MCP servers OpenCode enables', async () => {
  const servers = await readCanonicalMCPServers(PROJECT_ROOT);
  const oc = renderOpenCodeMcp(servers).servers as Record<string, { disabled: boolean }>;
  const pi = JSON.parse(new PiAdapter('/h').renderMCPServers(servers)).mcpServers as Record<string, { enabled: boolean }>;
  const ocOn = Object.entries(oc).filter(([, s]) => !s.disabled).map(([n]) => n).sort();
  const piOn = Object.entries(pi).filter(([, s]) => s.enabled).map(([n]) => n).sort();
  expect(piOn).toEqual(ocOn);
});

test('Pi loads the same instruction files as OpenCode, in order', async () => {
  const [agents, ...vault] = opencode.instructions as string[];
  expect(agents).toBe('~/.config/opencode/AGENTS.md');
  expect([...INSTRUCTION_PATHS]).toEqual(vault);
  const pi = await readCanonicalSettings(PROJECT_ROOT, 'pi');
  expect(pi!.keys.extensions).toContain(LOADER);
  expect((pi!.keys.subagents as { defaultSubagentOnlyExtensions: string[] }).defaultSubagentOnlyExtensions).toContain(LOADER);
  expect(new PiAdapter('/h').renderInstructions('x')).toBe('x');
});
