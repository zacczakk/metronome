import { expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { renderOpenCodeSettings } from '../../opencode/version-renderer';

const canonical = JSON.parse(readFileSync(join(process.cwd(), 'configs/settings/opencode.json'), 'utf8'));
const fixture = JSON.parse(readFileSync(join(process.cwd(), 'test/fixtures/tux-model-metadata.json'), 'utf8'));

test('renders every Tux develop model with exact limits, prices, and behavior', () => {
  const rendered = renderOpenCodeSettings(canonical);
  expect(rendered.provider).toEqual(canonical.provider);
  expect(rendered.providers).toEqual(canonical.providers);
  const provider = rendered.providers?.tux;
  expect(provider).toBeDefined();
  expect(provider.package).toBe('aisdk:@ai-sdk/anthropic');
  expect(provider.settings).toEqual({ baseURL: 'http://127.0.0.1:18080/v1', apiKey: 'does-not-matter', toolStreaming: false });
  expect(provider.models).toEqual(fixture.models);
  expect(Object.keys(provider.models)).toHaveLength(19);
  expect(canonical.provider.tux).toBeUndefined();
  expect(canonical.model).toBe('tux/gpt-6-luna');
});

test('uses reviewed context/output limits and preserves explicit metadata gaps', () => {
  const models = canonical.providers?.tux.models;
  expect(models).toBeDefined();
  for (const [id, model] of Object.entries(fixture.models)) {
    const expected = id.startsWith('gpt-') ? { context: 1_050_000, output: 128_000 }
      : ['claude-sonnet-4-5', 'claude-haiku-4-5-20251001'].includes(id) ? { context: 200_000, output: 64_000 }
      : id.startsWith('claude-') ? { context: 1_000_000, output: 128_000 }
      : { context: 200_000, output: 32_000 };
    expect(models[id].limit, id).toEqual(expected);
    expect(model).toEqual(models[id]);
  }
  expect(models['gpt-5.5'].cost).toEqual([]);
  expect(models['glm-5.2'].cost.cache.write).toBeUndefined();
  expect(models['deepseek-v4-pro'].variants).toContainEqual({ id: 'none', settings: { thinking: { type: 'disabled' } } });
});

test('preserves all six GPT long-context tiers at exactly 272K', () => {
  const models = canonical.providers?.tux.models;
  expect(models).toBeDefined();
  const tiered = ['gpt-6.1-sol', 'gpt-6-sol', 'gpt-5.6-sol', 'gpt-5.6-terra', 'gpt-6-luna', 'gpt-5.6-luna'];
  for (const id of tiered) {
    expect(models[id].cost, id).toHaveLength(2);
    expect(models[id].cost[1].tier, id).toEqual({ type: 'context', size: 272_000 });
    expect(models[id].cost[0].tier, id).toBeUndefined();
  }
  expect(models['gpt-6.1-sol'].cost).toEqual([
    { input: 2.4, output: 12, cache: { read: 0.12, write: 3 } },
    { tier: { type: 'context', size: 272_000 }, input: 4.8, output: 18, cache: { read: 0.24, write: 6 } },
  ]);
});
