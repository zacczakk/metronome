import { expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { renderOpenCodeSettings } from '../../opencode/version-renderer';

// Tux v0.13.0-beta.9: Agentic modelCostAt rates and OpenCode integration.
const catalog = {
  'claude-opus-5-5': [4.4, 22, 0.22, 5.5],
  'claude-opus-5': [5.5, 27.5, 0.55, 6.875],
  'claude-opus-4-8': [5.5, 27.5, 0.55, 6.875],
  'claude-opus-4-7': [5.5, 27.5, 0.55, 6.875],
  'claude-opus-4-6': [5.5, 27.5, 0.55, 6.875],
  'claude-sonnet-5-5': [2.2, 11, 0.22, 2.75],
  'claude-sonnet-5': [2.2, 11, 0.22, 2.75],
  'claude-sonnet-4-6': [3.3, 16.5, 0.33, 4.125],
  'claude-sonnet-4-5': [3.3, 16.5, 0.33, 4.125],
  'claude-haiku-4-5-20251001': [1.1, 5.5, 0.11, 1.375],
  'gpt-6.1-sol': [2.4, 12, 0.12, 3],
  'gpt-6-sol': [2.4, 12, 0.24, 3],
  'gpt-5.6-sol': [5.5, 33, 0.55, 6.88],
  'gpt-5.6-terra': [4.4, 19.8, 0.44, 5.5],
  'gpt-6-luna': [0.12, 0.6, 0.012, 0.15],
  'gpt-5.6-luna': [0.22, 1.32, 0.03, 0.28],
  'gpt-5.5': [5, 30, 0.5],
  'deepseek-v4-pro': [1.74, 3.48, 0.145, 1.74],
  'glm-5.2': [1.54, 4.84, 0.15],
};
const maxReasoning = new Set(['gpt-5.6-luna', 'gpt-5.6-terra', 'gpt-6.1-sol', 'gpt-6-sol', 'gpt-6-luna']);

test('renders the complete Tux catalog with matching model behavior', () => {
  const canonical = JSON.parse(readFileSync(join(process.cwd(), 'configs/settings/opencode.json'), 'utf8'));
  const rendered = renderOpenCodeSettings(canonical);
  expect(rendered.provider).toEqual(canonical.provider);
  const provider = canonical.provider.tux;
  expect(provider.npm).toBe('@ai-sdk/anthropic');
  expect(provider.options).toEqual({ baseURL: 'http://127.0.0.1:18080/v1', apiKey: 'does-not-matter', toolStreaming: false });
  expect(Object.keys(provider.models).sort()).toEqual(Object.keys(catalog).sort());

  for (const [id, [input, output, cache_read, cache_write]] of Object.entries(catalog)) {
    const model = provider.models[id];
    expect(model, id).toBeDefined();
    expect(model.cost, id).toEqual({ input, output, cache_read, ...(cache_write === undefined ? {} : { cache_write }) });
    if (cache_write === undefined) expect(model.cost.cache_write, id).toBeUndefined();
    expect(model.limit, id).toEqual({ context: 200_000, output: 32_000 });
    const openai = id.startsWith('gpt-') || id === 'glm-5.2';
    expect(model.modalities, id).toEqual({ input: openai ? ['image', 'pdf', 'text'] : ['image', 'text'], output: ['text'] });
    if (openai) {
      expect(model.provider, id).toEqual({ npm: '@ai-sdk/openai' });
      expect(model.reasoning, id).toBe(true);
      expect(model.options, id).toEqual({
        reasoningSummary: 'auto',
        ...(id === 'gpt-5.6-luna' ? { reasoningEffort: 'max', include: ['reasoning.encrypted_content'] } : {}),
      });
      const efforts = ['none', 'low', 'medium', 'high', 'xhigh', ...(maxReasoning.has(id) ? ['max'] : [])];
      expect(model.variants, id).toEqual(Object.fromEntries(efforts.map((reasoningEffort) => [reasoningEffort, {
        reasoningEffort, reasoningSummary: 'auto', include: ['reasoning.encrypted_content'],
      }])));
    } else {
      expect(model.provider, id).toBeUndefined();
      expect(model.options, id).toEqual({ toolStreaming: false });
      expect(model.variants, id).toEqual(Object.fromEntries(['low', 'medium', 'high'].map((effort) => [effort,
        id.startsWith('claude-haiku-') ? {} : { thinking: { type: 'adaptive' }, effort },
      ])));
    }
  }
});
