import { execFileSync } from 'node:child_process';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { applyEdits, modify } from 'jsonc-parser';

function record(value: unknown): Record<string, unknown> {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) throw new Error('Expected object');
  return value;
}

const [directory, flag] = process.argv.slice(2);
if (!directory || (flag && flag !== '--check') || process.argv.length > 4) {
  throw new Error('Usage: bun scripts/sync-tux-model-metadata.ts <tux-repo> [--check]');
}
const tux = resolve(directory);
const git = (...args: string[]) => execFileSync('git', args, { cwd: tux, encoding: 'utf8' }).trim();
const revision = git('rev-parse', 'HEAD');
if (git('status', '--porcelain')) throw new Error('Use a clean Tux checkout for traceable metadata');
const load = async (path: string) => import(pathToFileURL(resolve(tux, path)).href);
const { EXPOSED_MODELS } = await load('src/modelRegistry.ts');
const { modelPricingAt } = await load('src/cost/provider-pricing.ts');
const { buildOpenCodeModel } = await load('src/integrations/opencode-models.ts');
if (!Array.isArray(EXPOSED_MODELS) || typeof modelPricingAt !== 'function' || typeof buildOpenCodeModel !== 'function') {
  throw new Error('Tux develop model metadata exports are missing');
}
const fixturePath = resolve('test/fixtures/tux-model-metadata.json');
const previous = await Bun.file(fixturePath).exists() ? record(await Bun.file(fixturePath).json()) : {};
const at = new Date().toISOString();
const source = 'agentic';
const models = Object.fromEntries(EXPOSED_MODELS.map((value: unknown) => {
  const model = record(value);
  if (typeof model.requestId !== 'string' || typeof model.primaryProtocol !== 'string') throw new Error('Invalid Tux model');
  return [model.requestId, record(buildOpenCodeModel(model, model.primaryProtocol, modelPricingAt(model.requestId, Date.parse(at), source)))];
}));
if (git('rev-parse', 'HEAD') !== revision || git('status', '--porcelain')) {
  throw new Error('Tux checkout changed during metadata generation; retry against a stable checkout');
}
const configPath = resolve('configs/settings/opencode.json');
const configText = await Bun.file(configPath).text();
const config = record(JSON.parse(configText));
const native = typeof config.providers === 'object' && config.providers !== null ? record(config.providers) : {};
if (flag === '--check') {
  const { isDeepStrictEqual } = await import('node:util');
  if (!isDeepStrictEqual(models, previous.models) || !isDeepStrictEqual(models, record(native.tux).models)) {
    throw new Error('Tux model metadata drift: run this command without --check');
  }
  console.log(`Verified ${Object.keys(models).length} models against Tux develop (${source}, ${at})`);
} else {
  const provider = { name: 'Tux', package: 'aisdk:@ai-sdk/anthropic', settings: {
    baseURL: 'http://127.0.0.1:18080/v1', apiKey: 'does-not-matter', toolStreaming: false,
  }, models };
  const options = { formattingOptions: { insertSpaces: true, tabSize: 2 } };
  const withoutLegacy = applyEdits(configText, modify(configText, ['provider', 'tux'], undefined, options));
  const text = applyEdits(withoutLegacy, modify(withoutLegacy, ['providers', 'tux'], provider, options));
  const fixture = { revision, source, at, models };
  const fixtureText = JSON.stringify({ ...fixture, models: {} }, null, 2).replace('"models": {}',
    '"models": {\n' + Object.entries(models).map(([id, model]) =>
      `    ${JSON.stringify(id)}: ${JSON.stringify(model)}`).join(',\n') + '\n  }');
  await Bun.write(configPath, text);
  await Bun.write(fixturePath, fixtureText + '\n');
  console.log(`Synced ${Object.keys(models).length} models from Tux ${revision} (${source}, ${at})`);
}
