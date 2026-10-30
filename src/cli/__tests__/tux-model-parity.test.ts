import { expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { renderOpenCodeSettings } from '../../opencode/version-renderer';

const canonical = JSON.parse(readFileSync(join(process.cwd(), 'configs/settings/opencode.json'), 'utf8'));
const LEGACY_CLAUDE = ['claude-sonnet-4-5', 'claude-haiku-4-5-20251001'];
const fixture = JSON.parse(readFileSync(join(process.cwd(), 'test/fixtures/tux-model-metadata.json'), 'utf8'));

test('renders every model Tux writes with exact limits, prices, and behavior', () => {
  const rendered = renderOpenCodeSettings(canonical);
  expect(rendered.provider).toEqual(canonical.provider);
  expect(rendered.providers).toEqual(canonical.providers);
  const provider = rendered.providers?.tux;
  expect(provider).toBeDefined();
  expect(provider.package).toBe('aisdk:@ai-sdk/anthropic');
  expect(provider.settings).toEqual({ baseURL: 'http://127.0.0.1:18080/v1', apiKey: 'does-not-matter', toolStreaming: false });
  expect(provider.models).toEqual(fixture.models);
  expect(Object.keys(provider.models)).toHaveLength(16);
  expect(canonical.provider.tux).toBeUndefined();
  expect(canonical.model).toBe('tux/claude-opus-5-5#high');
});

test('uses the context/output limits Tux writes', () => {
  const models = canonical.providers?.tux.models;
  expect(models).toBeDefined();
  for (const [id, model] of Object.entries(fixture.models)) {
    const expected = id.startsWith('gpt-') ? { context: 1_050_000, output: 128_000 }
      : LEGACY_CLAUDE.includes(id) ? { context: 200_000, output: 64_000 }
      : id.startsWith('claude-') ? { context: 1_000_000, output: 128_000 }
      : id === 'deepseek-v4-pro' ? { context: 1_000_000, output: 384_000 }
      : { context: 320_000, output: 32_768 };
    expect(models[id].limit, id).toEqual(expected);
    expect(model).toEqual(models[id]);
  }
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

test('preserves Claude thinking summaries for default models and enabled variants', () => {
  const rendered = renderOpenCodeSettings(canonical);
  const models = rendered.providers?.tux.models;
  for (const [id, value] of Object.entries(models)) {
    if (typeof value !== 'object' || value === null || Array.isArray(value)) throw new Error('Expected model');
    if (!id.startsWith('claude-') || LEGACY_CLAUDE.includes(id)) {
      expect('body' in value, id).toBe(false);
      continue;
    }
    expect('settings' in value && value.settings, id).toMatchObject({ thinking: { type: 'adaptive', display: 'summarized' } });
    if (!('variants' in value) || !Array.isArray(value.variants)) throw new Error('Expected variants');
    for (const variant of value.variants) {
      expect(variant.settings.thinking, `${id}#${variant.id}`).toEqual(variant.id === 'none'
        ? { type: 'disabled' } : { type: 'adaptive', display: 'summarized' });
    }
  }
});
