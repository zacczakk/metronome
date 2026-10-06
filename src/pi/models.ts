type Rec = Record<string, unknown>;
const isRec = (v: unknown): v is Rec => typeof v === 'object' && v !== null && !Array.isArray(v);
const LEVELS = ['off', 'minimal', 'low', 'medium', 'high', 'xhigh', 'max'] as const;

export interface PiCost { input: number; output: number; cacheRead: number; cacheWrite: number; tiers?: Array<PiCost & { inputTokensAbove: number }> }
export interface PiModel {
  id: string; name?: string; api?: string; baseUrl?: string; reasoning: boolean;
  thinkingLevelMap?: Partial<Record<(typeof LEVELS)[number], string | null>>;
  input: string[]; contextWindow?: number; maxTokens?: number; cost: PiCost; compat?: Rec;
}
export interface PiProvider { name?: string; api: string; baseUrl: string; apiKey: string; models: PiModel[] }

function price(entry: unknown): PiCost {
  const e = isRec(entry) ? entry : {};
  const cache = isRec(e.cache) ? e.cache : {};
  return { input: Number(e.input ?? 0), output: Number(e.output ?? 0), cacheRead: Number(cache.read ?? 0), cacheWrite: Number(cache.write ?? 0) };
}

function cost(value: unknown): PiCost {
  if (!Array.isArray(value)) return price(value);
  if (value.length === 0) return price({});
  const base = price(value.find((e) => !isRec(e) || !isRec(e.tier)));
  const tiers = value.flatMap((e) => isRec(e) && isRec(e.tier) && e.tier.type === 'context'
    ? [{ ...price(e), inputTokensAbove: Number(e.tier.size) }] : []);
  return tiers.length ? { ...base, tiers } : base;
}

function variants(model: Rec): Array<{ id: string; settings: Rec }> {
  return Array.isArray(model.variants)
    ? model.variants.filter(isRec).map((v) => ({ id: String(v.id), settings: isRec(v.settings) ? v.settings : {} }))
    : [];
}

function renderModel(id: string, model: Rec, openaiBase: string, providerSettings: Rec): PiModel {
  const limit = isRec(model.limit) ? model.limit : {};
  const caps = isRec(model.capabilities) ? model.capabilities : {};
  const vs = variants(model);
  const reasoning = vs.some((v) => Object.keys(v.settings).length > 0);
  const out: PiModel = {
    id,
    name: typeof model.name === 'string' ? model.name : undefined,
    reasoning,
    input: (Array.isArray(caps.input) ? caps.input : ['text']).filter((i) => i === 'text' || i === 'image') as string[],
    contextWindow: typeof limit.context === 'number' ? limit.context : undefined,
    maxTokens: typeof limit.output === 'number' ? limit.output : undefined,
    cost: cost(model.cost),
  };
  if (model.package === 'aisdk:@ai-sdk/openai') {
    out.api = 'openai-responses';
    out.baseUrl = openaiBase;
    if (reasoning) {
      const ids = new Set(vs.map((v) => v.id));
      out.thinkingLevelMap = Object.fromEntries(LEVELS.map((l) => [l,
        l === 'off' ? (ids.has('none') ? 'none' : null) : l === 'minimal' ? null : ids.has(l) ? l : null]));
    }
  } else {
    const modelSettings = isRec(model.settings) ? model.settings : {};
    const compat: Rec = {};
    if (modelSettings.toolStreaming === false || providerSettings.toolStreaming === false) compat.supportsEagerToolInputStreaming = false;
    if (vs.some((v) => isRec(v.settings.thinking) && v.settings.thinking.type === 'adaptive')) compat.forceAdaptiveThinking = true;
    if (Object.keys(compat).length) out.compat = compat;
    if (reasoning) out.thinkingLevelMap = { minimal: null, xhigh: null, max: null };
  }
  return out;
}

/** Render OpenCode native providers (e.g. Tux) as Pi models.json providers. */
export function renderPiModels(providers: Rec, ids: string[] = ['tux']): { providers: Record<string, PiProvider> } {
  const rendered: Record<string, PiProvider> = {};
  for (const pid of ids) {
    const p = providers[pid];
    if (!isRec(p)) continue;
    const settings = isRec(p.settings) ? p.settings : {};
    const openaiBase = String(settings.baseURL ?? '');
    rendered[pid] = {
      name: typeof p.name === 'string' ? p.name : undefined,
      api: 'anthropic-messages',
      baseUrl: openaiBase.replace(/\/v1\/?$/, ''),
      apiKey: String(settings.apiKey ?? 'does-not-matter'),
      models: Object.entries(isRec(p.models) ? p.models : {})
        .filter(([, m]) => isRec(m))
        .map(([id, m]) => renderModel(id, m as Rec, openaiBase, settings)),
    };
  }
  return { providers: rendered };
}
