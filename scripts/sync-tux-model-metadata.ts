import { execFileSync } from 'node:child_process';
import { homedir } from 'node:os';
import { resolve } from 'node:path';
import { isDeepStrictEqual } from 'node:util';
import { applyEdits, modify } from 'jsonc-parser';
import { readJsonc } from '../src/formats/jsonc';

function record(value: unknown): Record<string, unknown> {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) throw new Error('Expected object');
  return value;
}

const args = process.argv.slice(2);
const check = args.includes('--check');
const paths = args.filter((arg) => arg !== '--check');
if (paths.length > 1 || paths.some((arg) => arg.startsWith('--'))) {
  throw new Error('Usage: bun scripts/sync-tux-model-metadata.ts [opencode.json] [--check]');
}
const livePath = resolve(paths[0] ?? `${homedir()}/.config/opencode/opencode.json`);
const live = record(record(record(readJsonc(await Bun.file(livePath).text())).providers).tux);
const models = Object.fromEntries(Object.entries(record(live.models)).map(([id, value]) => {
  const model = structuredClone(record(value));
  if (Array.isArray(model.variants)) {
    model.variants = model.variants.filter((variant) => !String(record(variant).id).startsWith('agent-'));
  }
  return [id, model];
}));
const revision = execFileSync('tux', ['--version'], { encoding: 'utf8' }).trim().replace(/^Tux\s+/, '');
const fixturePath = resolve('test/fixtures/tux-model-metadata.json');
const previous = await Bun.file(fixturePath).exists() ? record(await Bun.file(fixturePath).json()) : {};
const configPath = resolve('configs/settings/opencode.json');
const configText = await Bun.file(configPath).text();
const config = record(JSON.parse(configText));
const native = typeof config.providers === 'object' && config.providers !== null ? record(config.providers) : {};
if (check) {
  if (!isDeepStrictEqual(models, previous.models) || !isDeepStrictEqual(models, record(native.tux).models)) {
    throw new Error('Tux model metadata drift: run this command without --check');
  }
  console.log(`Verified ${Object.keys(models).length} models against Tux ${revision} (${livePath})`);
} else {
  const provider = { name: 'Tux', package: 'aisdk:@ai-sdk/anthropic', settings: {
    baseURL: 'http://127.0.0.1:18080/v1', apiKey: 'does-not-matter', toolStreaming: false,
  }, models };
  const options = { formattingOptions: { insertSpaces: true, tabSize: 2 } };
  const withoutLegacy = applyEdits(configText, modify(configText, ['provider', 'tux'], undefined, options));
  const text = applyEdits(withoutLegacy, modify(withoutLegacy, ['providers', 'tux'], provider, options));
  const fixture = { revision, source: 'tux-live', at: new Date().toISOString(), models: {} };
  const fixtureText = JSON.stringify(fixture, null, 2).replace('"models": {}',
    '"models": {\n' + Object.entries(models).map(([id, model]) =>
      `    ${JSON.stringify(id)}: ${JSON.stringify(model)}`).join(',\n') + '\n  }');
  await Bun.write(configPath, text);
  await Bun.write(fixturePath, fixtureText + '\n');
  console.log(`Synced ${Object.keys(models).length} models from Tux ${revision} (${livePath})`);
}
