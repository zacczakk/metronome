import { expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { renderPiModels } from '../models';

const opencode = JSON.parse(readFileSync(join(process.cwd(), 'configs/settings/opencode.json'), 'utf8'));
const tux = renderPiModels(opencode.providers).providers.tux;
const byId = Object.fromEntries(tux.models.map((m) => [m.id, m]));

test('renders every canonical Tux model', () => {
  expect(Object.keys(byId).sort()).toEqual(Object.keys(opencode.providers.tux.models).sort());
  expect(tux).toMatchObject({ api: 'anthropic-messages', baseUrl: 'http://127.0.0.1:18080', apiKey: 'does-not-matter' });
});

test('OpenAI models use Responses on /v1 with mapped thinking levels', () => {
  expect(byId['gpt-6.1-sol']).toMatchObject({
    api: 'openai-responses', baseUrl: 'http://127.0.0.1:18080/v1', reasoning: true,
    input: ['image', 'text'], contextWindow: 1_050_000, maxTokens: 128_000,
    thinkingLevelMap: { off: 'none', minimal: null, low: 'low', medium: 'medium', high: 'high', xhigh: 'xhigh', max: 'max' },
    cost: { input: 2.4, output: 12, cacheRead: 0.12, cacheWrite: 3,
      tiers: [{ input: 4.8, output: 18, cacheRead: 0.24, cacheWrite: 6, inputTokensAbove: 272_000 }] },
  });
  expect(byId['gpt-5.5'].thinkingLevelMap?.max).toBeNull();
  expect(byId['gpt-5.5'].cost).toEqual({ input: 0, output: 0, cacheRead: 0, cacheWrite: 0 });
});

test('Claude models use adaptive Anthropic thinking without tool streaming', () => {
  expect(byId['claude-opus-5-5']).toMatchObject({
    reasoning: true, contextWindow: 1_000_000, maxTokens: 128_000,
    compat: { forceAdaptiveThinking: true, supportsEagerToolInputStreaming: false },
    thinkingLevelMap: { minimal: null, xhigh: null, max: null },
    cost: { input: 4.4, output: 22, cacheRead: 0.22, cacheWrite: 5.5 },
  });
  expect(byId['claude-opus-5-5'].api).toBeUndefined();
  expect(byId['claude-haiku-4-5-20251001'].reasoning).toBe(false);
  expect(byId['glm-5.2'].cost.cacheWrite).toBe(0);
});
