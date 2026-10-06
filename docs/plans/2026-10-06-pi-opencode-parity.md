---
summary: Add Pi as a metronome sync target with OpenCode parity for MCP servers, subagents, the Tux provider, shared instructions, and Memory vault files.
read_when:
  - Wiring Pi into metronome
  - Changing Tux models, MCP servers, subagents, or instruction files and needing Pi to follow
created: 2026-10-06
---

# Pi ↔ OpenCode Parity Implementation Plan

> **For agentic workers:** Execute this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** `metronome push -t pi` renders `~/.pi/agent/{models.json,mcp.json,settings.json,AGENTS.md,agents/*.md}` so Pi (and its subagents) has the same Tux models, MCP servers, subagents, shared instructions, and Memory vault context as OpenCode, all derived from existing canonical sources.

**Architecture:** New `pi` `TargetName` + `PiAdapter`. Three pure renderers under `src/pi/` translate canonical data (no duplicated catalogs):
`configs/settings/opencode.json#providers.tux` → `models.json`; `configs/mcp/*.json` → `mcp.json` (Pi's **built-in** MCP); `configs/agents/*.md` → `pi-subagents` agent files. `configs/instructions/AGENTS.md` → `~/.pi/agent/AGENTS.md` (Pi global context file). Vault files (SOUL/IDENTITY/USER/MEMORY) are read at session start by a repo-referenced Pi extension, `configs/pi/extensions/instructions-loader.ts` (Pi port of the OpenCode `metronome.instructions-loader` plugin), loaded in the main session and in every subagent. A small canonical `configs/settings/pi.json` owns Pi-only settings (default model, packages, extensions, subagent overrides).

**Tech Stack:** TypeScript, Bun tests, Pi `1.0.4`, `pi-subagents@0.76.1`, Tux `v0.13.0-beta.13`.

## Global Constraints

- Single source of truth: Tux catalog stays in `configs/settings/opencode.json`; MCP in `configs/mcp/`; agents in `configs/agents/`. Pi files are generated only.
- No new runtime dependencies in metronome.
- Pi ≥ 1.0.4 has **native MCP** (`~/.pi/agent/mcp.json`). Do **not** install `pi-mcp-adapter` (it replaces built-in MCP). `docs/pi-setup-guide.md` is stale on this.
- Pi has no built-in subagents. Use npm package `pi-subagents`, pinned `@0.76.1`.
- Skills: Pi already loads `~/.agents/skills/` (shared with OpenCode/Codex). Pi adapter declares `skills: false` to avoid double-writing.
- Preserve non-canonical keys in `~/.pi/agent/settings.json` (e.g. `lastChangelogVersion`).
- Pi `models.json` `input` accepts only `text`/`image`; drop `pdf`.
- Pi MCP `timeout` is **seconds**; OpenCode is **ms**.
- Instructions: OpenCode loads `~/.config/opencode/AGENTS.md` + `~/Vaults/Memory/{SOUL,IDENTITY,USER,MEMORY}.md` (`configs/settings/opencode.json#instructions`). Pi must load the same five, in the same order, in the main session **and** subagents. Vault files are read live (not copied) so vault edits apply on the next session, same as OpenCode.
- Pi extensions are referenced from the repo by `~` path (same pattern as `configs/hooks/*.js` in Claude settings); metronome does not copy them.
- Out of scope (separate plans): permissions parity (`permissions` → Pi permission-gate extension), commands → `~/.pi/agent/prompts`, other OpenCode plugins (`read-guard`, `validate-commit`, `memory-vault-advisor`, `muxy-notify`, `chatgpt-websearch`).

## Verified facts (2026-10-06)

| Fact | Evidence |
|---|---|
| Tux OpenAI models work in Pi with `api: openai-responses`, `baseUrl: http://127.0.0.1:18080/v1` | `PI_CODING_AGENT_DIR=<tmp> pi -p --model tux/gpt-6-luna` → `ok` |
| Tux Claude models work with `api: anthropic-messages`, `baseUrl: http://127.0.0.1:18080` (**no** `/v1`; SDK appends it) | same, `tux/claude-sonnet-5-5` → `ok` |
| Pi Responses client already sends `store:false` + encrypted reasoning | `pi-ai/dist/api/openai-responses.js:246` |
| `models.json` schema: `thinkingLevelMap` (null = unsupported), `cost.tiers[].inputTokensAbove`, `compat.forceAdaptiveThinking`, `compat.supportsEagerToolInputStreaming` | `pi-coding-agent/dist/core/model-config.d.ts` |
| Pi loads `<agent-dir>/AGENTS.md` as a global context file; no setting adds extra context files | `pi-coding-agent/docs/configuration.md` §Context files |
| Extensions can append context files: `before_agent_start` exposes mutable `event.systemPromptOptions.contextFiles: {path, content}[]` | `pi-coding-agent/dist/core/extensions/types.d.ts:700-711`, `dist/core/system-prompt.d.ts:37-50`; spike: pushing `~/Vaults/Memory/SOUL.md` via `pi -p -e <ext.ts> --no-tools` → model answered `agent-soul` |
| `settings.json#extensions` accepts `~` paths | `pi-coding-agent/docs/settings.md:147` |
| pi-subagents: foreground children never load ambient extensions; `subagents.defaultSubagentOnlyExtensions` (settings) loads extensions in every child; `inheritGlobalContext: true` keeps `~/.pi/agent/AGENTS.md` | pi-subagents docs/agents.md, docs/configuration.md |
| Pi MCP: `mcpServers`, `${VAR}` interpolation, `enabled`, `timeout` (s), `exposure: codemode|deferred|direct|hidden`, OAuth auto for url servers w/o `Authorization` | `pi-coding-agent/docs/mcp.md` |
| `pi-subagents` frontmatter: `name, description, model (provider/id), thinking, tools (incl. mcp:<server>), advertise, systemPromptMode, inheritProjectContext, inheritGlobalContext, inheritSkills`; `subagents.agentOverrides.<name>` in Pi `settings.json` | github.com/nicobailon/pi-subagents docs/agents.md, docs/models.md |
| `mcp:` tool entries select **direct** MCP tools only | pi-subagents docs/agents.md |

## Mapping tables

**Tux model → Pi model**

| OpenCode (`providers.tux.models.<id>`) | Pi (`providers.tux.models[]`) |
|---|---|
| `package: aisdk:@ai-sdk/openai` | `api: openai-responses`, `baseUrl: <settings.baseURL>` |
| (provider default anthropic) | provider `api: anthropic-messages`, `baseUrl: <settings.baseURL minus /v1>` |
| `limit.context` / `limit.output` | `contextWindow` / `maxTokens` |
| `capabilities.input` | `input` ∩ {text,image} |
| `cost` object | `{input, output, cacheRead: cache.read??0, cacheWrite: cache.write??0}` |
| `cost` array | first entry = base; `tier.type=context` entries → `tiers[{…, inputTokensAbove: tier.size}]`; `[]` → zeros |
| variants all empty settings (Haiku) | `reasoning: false` |
| OpenAI variants `none…max` | `reasoning: true`, `thinkingLevelMap`: `off→"none"` if present else null, `minimal→null`, other levels → id if present else null |
| Anthropic variants `thinking.type=adaptive` | `reasoning: true`, `compat.forceAdaptiveThinking: true`, `thinkingLevelMap: {minimal,xhigh,max: null}` |
| `settings.toolStreaming: false` (provider or model) | anthropic `compat.supportsEagerToolInputStreaming: false` |

**MCP server → Pi**

| Canonical | Pi |
|---|---|
| stdio `command/args/env` | same keys |
| http `url/headers` | same keys |
| `oauth: {}` | omitted (Pi auto-OAuth) unless `target_options.pi.oauth` |
| `disabled_for: [pi]` | skipped |
| enabled | `target_options.pi.enabled` ?? `target_options.opencode.enabled` ?? `enabled !== false` |
| `target_options.opencode.codemode` true/false | `exposure: codemode` / `direct` |
| `target_options.opencode.timeout` (ms) | `timeout: ms/1000` |
| `target_options.pi.*` | merged last (wins) |

**Agent → pi-subagents**

| Canonical | Pi agent frontmatter |
|---|---|
| filename | `name` |
| `description` | `description` |
| `model` | `model` (already `provider/id`) |
| `reasoningEffort` | `thinking` (`none→off`) |
| `permission` read/grep/glob/edit/bash | `tools: read, grep, find, ls, edit, write, bash` (same allow logic as `deriveAllowedTools`) |
| `permission['<server>_*']: allow` | `tools += mcp:<server>` |
| — | `advertise: true`, `systemPromptMode: append`, `inheritProjectContext: true`, `inheritGlobalContext: true`, `inheritSkills: true` |
| `mode, color, textVerbosity, steps, targets, permission` | dropped |

OpenCode built-ins: `explore` → pi-subagents builtin `scout` (override model `github-copilot/gpt-6-luna`, thinking `medium`); `general` → builtin `delegate`. Other pi-subagents builtins (`researcher, worker, reviewer, oracle, evidence-auditor, advisor`) disabled to avoid shadowing our routed agents.

---

## File Structure

- Create `src/pi/models.ts` — `renderPiModels(opencodeProviders)`.
- Create `src/pi/mcp.ts` — `renderPiMcp(servers)`.
- Create `src/pi/agents.ts` — `renderPiAgentMetadata(item)`.
- Create `src/adapters/pi.ts` — `PiAdapter` wiring the three renderers + identity instructions.
- Create `configs/pi/extensions/instructions-loader.ts` — Pi extension appending vault files as context files.
- Create `configs/settings/pi.json` — Pi-only canonical settings.
- Create tests: `src/pi/__tests__/{models,mcp,agents,instructions-loader}.test.ts`, `src/adapters/__tests__/pi.test.ts`, `src/cli/__tests__/pi-parity.test.ts`.
- Modify `src/types.ts`, `src/adapters/path-resolver.ts`, `src/cli/canonical.ts`, `src/cli/cli-helpers.ts`.
- Modify `configs/agents/foundry-sql.md` (`targets` += `pi`), `configs/mcp/figma.json` (`target_options.pi.oauth`).
- Modify docs: `docs/subagent.md`, `docs/pi-setup-guide.md`, `README.md`, `docs/CHANGELOG.md`.

---

### Task 1: Tux catalog → Pi `models.json`

**Files:**
- Create: `src/pi/models.ts`
- Test: `src/pi/__tests__/models.test.ts`

**Interfaces:**
- Produces: `export function renderPiModels(providers: Record<string, unknown>, ids?: string[]): { providers: Record<string, PiProvider> }` — renders each OpenCode native provider in `ids` (default `['tux']`).

- [x] **Step 1: Write the failing test**

```ts
// src/pi/__tests__/models.test.ts
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
```

- [x] **Step 2: Run** `bun test src/pi/__tests__/models.test.ts` — Expected: FAIL `Cannot find module '../models'`.

- [x] **Step 3: Implement**

```ts
// src/pi/models.ts
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
  const openai = model.package === 'aisdk:@ai-sdk/openai';
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
  if (openai) {
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
```

- [x] **Step 4: Run** `bun test src/pi/__tests__/models.test.ts` — Expected: PASS. If the `gpt-6.1-sol` tier cache values differ, the canonical file wins: fix the test literal to match `configs/settings/opencode.json`, not the renderer.

- [x] **Step 5: Commit** `committer "feat(pi): render Tux catalog as Pi models.json" src/pi/models.ts src/pi/__tests__/models.test.ts`

---

### Task 2: Canonical MCP → Pi `mcp.json`

**Files:**
- Create: `src/pi/mcp.ts`
- Modify: `configs/mcp/figma.json`
- Test: `src/pi/__tests__/mcp.test.ts`

**Interfaces:**
- Consumes: `MCPServer` from `src/types.ts` (with `TargetName` including `'pi'` — add the union member here if Task 4 has not run: `export type TargetName = 'claude-code' | 'opencode' | 'antigravity' | 'codex' | 'pi';`).
- Produces: `export function renderPiMcp(servers: MCPServer[]): { mcpServers: Record<string, Record<string, unknown>> }`.

- [x] **Step 1: Write the failing test**

```ts
// src/pi/__tests__/mcp.test.ts
import { expect, test } from 'bun:test';
import { renderPiMcp } from '../mcp';
import type { MCPServer } from '../../types';

const servers: MCPServer[] = [
  { name: 'github', transport: 'http', url: 'https://api.githubcopilot.com/mcp/',
    headers: { Authorization: 'Bearer ${GITHUB_PERSONAL_ACCESS_TOKEN}' },
    targetOptions: { opencode: { oauth: false, codemode: true } } },
  { name: 'palantir-mcp', transport: 'stdio', command: 'tux', args: ['palantir-mcp', 'start'], enabled: false,
    targetOptions: { opencode: { enabled: true, timeout: 20000, codemode: false } } },
  { name: 'tavily', transport: 'stdio', command: 'tavily-mcp', args: [], enabled: false,
    env: { TAVILY_API_KEY: '${TAVILY_API_KEY}' } },
  { name: 'figma', transport: 'http', url: 'https://mcp.figma.com/mcp', enabled: false,
    targetOptions: { pi: { oauth: { clientName: 'Claude Code' } } } },
  { name: 'shadcn', transport: 'stdio', command: 'npx', disabledFor: ['pi'] },
];
const out = renderPiMcp(servers).mcpServers;

test('mirrors OpenCode enablement, exposure and timeout (ms→s)', () => {
  expect(out.github).toEqual({ url: 'https://api.githubcopilot.com/mcp/',
    headers: { Authorization: 'Bearer ${GITHUB_PERSONAL_ACCESS_TOKEN}' }, enabled: true, exposure: 'codemode' });
  expect(out['palantir-mcp']).toEqual({ command: 'tux', args: ['palantir-mcp', 'start'], enabled: true, exposure: 'direct', timeout: 20 });
  expect(out.tavily).toEqual({ command: 'tavily-mcp', args: [], env: { TAVILY_API_KEY: '${TAVILY_API_KEY}' }, enabled: false });
});

test('pi target options win and disabled_for skips', () => {
  expect(out.figma).toEqual({ url: 'https://mcp.figma.com/mcp', enabled: false, oauth: { clientName: 'Claude Code' } });
  expect(out.shadcn).toBeUndefined();
});
```

- [x] **Step 2: Run** `bun test src/pi/__tests__/mcp.test.ts` — Expected: FAIL module not found.

- [x] **Step 3: Implement**

```ts
// src/pi/mcp.ts
import type { MCPServer } from '../types';

export function renderPiMcp(servers: MCPServer[]): { mcpServers: Record<string, Record<string, unknown>> } {
  const mcpServers: Record<string, Record<string, unknown>> = {};
  for (const s of servers) {
    if (s.disabledFor?.includes('pi')) continue;
    const oc = s.targetOptions?.opencode ?? {};
    const pi = { ...(s.targetOptions?.pi ?? {}) };
    const cfg: Record<string, unknown> = s.transport === 'stdio'
      ? { command: s.command, args: s.args ?? [], ...(s.env ? { env: { ...s.env } } : {}) }
      : { url: s.url, ...(s.headers ? { headers: { ...s.headers } } : {}) };
    cfg.enabled = typeof pi.enabled === 'boolean' ? pi.enabled
      : typeof oc.enabled === 'boolean' ? oc.enabled : s.enabled !== false;
    delete pi.enabled;
    if (typeof oc.codemode === 'boolean') cfg.exposure = oc.codemode ? 'codemode' : 'direct';
    if (typeof oc.timeout === 'number') cfg.timeout = oc.timeout / 1000;
    Object.assign(cfg, pi);
    mcpServers[s.name] = cfg;
  }
  return { mcpServers };
}
```

- [x] **Step 4: Add Figma Pi OAuth option** — edit `configs/mcp/figma.json`, add:

```json
  "target_options": {
    "pi": { "oauth": { "clientName": "Claude Code" } }
  }
```

(Pi docs: Figma only accepts known client names.)

- [x] **Step 5: Run** `bun test src/pi/__tests__/mcp.test.ts && bun test` — Expected: PASS; existing MCP tests unaffected by the new `pi` target option.

- [x] **Step 6: Commit** `committer "feat(pi): render canonical MCP servers for Pi built-in MCP" src/pi/mcp.ts src/pi/__tests__/mcp.test.ts configs/mcp/figma.json src/types.ts`

---

### Task 3: Canonical agents → pi-subagents agents

**Files:**
- Create: `src/pi/agents.ts`
- Modify: `configs/agents/foundry-sql.md` (`targets: [opencode, pi]`)
- Test: `src/pi/__tests__/agents.test.ts`

**Interfaces:**
- Consumes: `CanonicalItem`.
- Produces: `export function renderPiAgentMetadata(item: CanonicalItem): Record<string, unknown>`.

- [x] **Step 1: Write the failing test**

```ts
// src/pi/__tests__/agents.test.ts
import { expect, test } from 'bun:test';
import { renderPiAgentMetadata } from '../agents';

test('maps model, effort and permissions to pi-subagents frontmatter', () => {
  const meta = renderPiAgentMetadata({ name: 'execute', content: 'x', metadata: {
    description: 'Impl', mode: 'subagent', model: 'tux/gpt-6.1-sol', reasoningEffort: 'high', textVerbosity: 'low',
    color: '#fff', permission: { '*': 'deny', read: 'allow', glob: 'allow', grep: 'allow', bash: 'allow', edit: 'allow' } } });
  expect(meta).toEqual({
    name: 'execute', description: 'Impl', model: 'tux/gpt-6.1-sol', thinking: 'high',
    tools: 'read, grep, find, ls, edit, write, bash', advertise: true, systemPromptMode: 'append',
    inheritProjectContext: true, inheritGlobalContext: true, inheritSkills: true,
  });
});

test('MCP wildcard permissions become mcp: tools; none → off', () => {
  const meta = renderPiAgentMetadata({ name: 'foundry-sql', content: '', metadata: {
    description: 'SQL', model: 'github-copilot/gpt-6.1-sol', reasoningEffort: 'none', steps: 12, targets: ['opencode', 'pi'],
    permission: { '*': 'deny', 'palantir-mcp_*': 'allow' } } });
  expect(meta.tools).toBe('mcp:palantir-mcp');
  expect(meta.thinking).toBe('off');
  expect(meta).not.toHaveProperty('steps');
  expect(meta).not.toHaveProperty('targets');
});

test('nested bash rules still grant bash', () => {
  const meta = renderPiAgentMetadata({ name: 'release', content: '', metadata: {
    description: 'Rel', permission: { '*': 'deny', bash: { '*': 'allow', 'git push *': 'allow' } } } });
  expect(meta.tools).toBe('bash');
});
```

- [x] **Step 2: Run** `bun test src/pi/__tests__/agents.test.ts` — Expected: FAIL module not found.

- [x] **Step 3: Implement**

```ts
// src/pi/agents.ts
import type { CanonicalItem } from '../types';

type Rec = Record<string, unknown>;
const isRec = (v: unknown): v is Rec => typeof v === 'object' && v !== null && !Array.isArray(v);

function allowed(permission: Rec, key: string): boolean {
  const rule = permission[key];
  if (rule === 'allow' || rule === 'ask') return true;
  if (rule === 'deny') return false;
  if (isRec(rule)) return Object.values(rule).some((e) => e === 'allow' || e === 'ask');
  return permission['*'] !== 'deny';
}

function tools(permission: unknown): string | undefined {
  if (!isRec(permission)) return undefined;
  const out: string[] = [];
  if (allowed(permission, 'read')) out.push('read');
  if (allowed(permission, 'grep')) out.push('grep');
  if (allowed(permission, 'glob')) out.push('find', 'ls');
  if (allowed(permission, 'edit')) out.push('edit', 'write');
  if (allowed(permission, 'bash')) out.push('bash');
  for (const [key, rule] of Object.entries(permission)) {
    const m = key.match(/^([A-Za-z0-9_-]+)_\*$/);
    if (m && (rule === 'allow' || rule === 'ask')) out.push(`mcp:${m[1]}`);
  }
  return out.join(', ');
}

export function renderPiAgentMetadata(item: CanonicalItem): Record<string, unknown> {
  const src = item.metadata;
  const meta: Rec = { name: item.name };
  if (src.description) meta.description = src.description;
  if (typeof src.model === 'string') meta.model = src.model;
  if (typeof src.reasoningEffort === 'string') meta.thinking = src.reasoningEffort === 'none' ? 'off' : src.reasoningEffort;
  const t = tools(src.permission);
  if (t !== undefined) meta.tools = t;
  Object.assign(meta, {
    advertise: true, systemPromptMode: 'append',
    inheritProjectContext: true, inheritGlobalContext: true, inheritSkills: true,
  });
  return meta;
}
```

Note: `webfetch` and `external_directory` have no Pi built-in equivalent and are intentionally dropped; web access comes from `bash` (`curl`/`tvly`) like today's TOOLS.md guidance.

- [x] **Step 4: Route foundry-sql to Pi** — in `configs/agents/foundry-sql.md` change

```yaml
targets:
  - opencode
```
to
```yaml
targets:
  - opencode
  - pi
```

- [x] **Step 5: Run** `bun test src/pi/__tests__/agents.test.ts` — Expected: PASS.

- [x] **Step 6: Commit** `committer "feat(pi): render canonical agents for pi-subagents" src/pi/agents.ts src/pi/__tests__/agents.test.ts configs/agents/foundry-sql.md`

---

### Task 4: `PiAdapter` + target registration + canonical `pi.json`

**Files:**
- Create: `src/adapters/pi.ts`, `configs/settings/pi.json`
- Modify: `src/types.ts:79`, `src/adapters/path-resolver.ts` (all `switch` blocks), `src/cli/canonical.ts:43-57` and `readCanonicalSettings` (`:218`), `src/cli/cli-helpers.ts:4`
- Test: `src/adapters/__tests__/pi.test.ts`

**Interfaces:**
- Consumes: `renderPiModels`, `renderPiMcp`, `renderPiAgentMetadata`.
- Produces: `class PiAdapter extends BaseAdapter` with `target = 'pi'`; `readCanonicalSettings(projectDir, 'pi')` returns `keys` plus private key `_opencodeProviders` (the `providers` object of `opencode.json`), consumed only by `PiAdapter.renderAdditionalSettings` and stripped from `settings.json`.

- [x] **Step 1: Write the failing test**

```ts
// src/adapters/__tests__/pi.test.ts
import { expect, test } from 'bun:test';
import { PiAdapter } from '../pi';

const adapter = new PiAdapter('/tmp/pi-home');

test('paths live under ~/.pi/agent', () => {
  const p = adapter.getPaths();
  expect(p.getMCPConfigPath()).toBe('/tmp/pi-home/.pi/agent/mcp.json');
  expect(p.getSettingsPath()).toBe('/tmp/pi-home/.pi/agent/settings.json');
  expect(p.getAgentFilePath('execute')).toBe('/tmp/pi-home/.pi/agent/agents/execute.md');
  expect(p.getInstructionsPath()).toBe('/tmp/pi-home/.pi/agent/AGENTS.md');
  expect(adapter.getCapabilities()).toMatchObject({ agents: true, mcp: true, settings: true, instructions: true, skills: false, commands: false, hooks: false });
});

test('settings merge preserves runtime keys and strips private keys', () => {
  const out = JSON.parse(adapter.renderSettings(
    { target: 'pi', keys: { defaultProvider: 'tux', _opencodeProviders: { tux: {} } } },
    JSON.stringify({ lastChangelogVersion: '1.0.4', defaultProvider: 'github-copilot' })));
  expect(out).toEqual({ lastChangelogVersion: '1.0.4', defaultProvider: 'tux' });
});

test('models.json is an additional settings file', () => {
  const files = adapter.renderAdditionalSettings({ target: 'pi', keys: { _opencodeProviders: {
    tux: { name: 'Tux', settings: { baseURL: 'http://127.0.0.1:18080/v1', apiKey: 'x' }, models: { 'gpt-6-luna': { package: 'aisdk:@ai-sdk/openai', variants: [] } } } } } });
  expect(files).toHaveLength(1);
  expect(files[0].relativePath).toBe('/tmp/pi-home/.pi/agent/models.json');
  expect(JSON.parse(files[0].content).providers.tux.models[0].id).toBe('gpt-6-luna');
});

test('agent and MCP rendering', () => {
  const agent = adapter.renderAgent({ name: 'docs', content: 'Body\n', metadata: { description: 'D', model: 'github-copilot/gpt-6-luna' } });
  expect(agent.relativePath).toBe('/tmp/pi-home/.pi/agent/agents/docs.md');
  expect(agent.content).toContain('name: docs');
  expect(agent.content).toContain('advertise: true');
  const mcp = JSON.parse(adapter.renderMCPServers([{ name: 'x', transport: 'stdio', command: 'x' }], '{"mcpServers":{"old":{}},"autoEnableCodemode":true}'));
  expect(Object.keys(mcp.mcpServers)).toEqual(['x']);
  expect(mcp.autoEnableCodemode).toBe(true);
});
```

- [x] **Step 2: Run** `bun test src/adapters/__tests__/pi.test.ts` — Expected: FAIL module not found.

- [x] **Step 3: Register the target**

`src/types.ts`:
```ts
export type TargetName = 'claude-code' | 'opencode' | 'antigravity' | 'codex' | 'pi';
```

`src/adapters/path-resolver.ts` — add a `case 'pi':` to each switch:
```ts
// rawBaseDir
case 'pi':            return '~/.pi/agent';
// rawCommandsDir
case 'pi':            return '~/.pi/agent/prompts/';
// rawAgentsDir
case 'pi':            return '~/.pi/agent/agents/';
// rawMCPConfigPath
case 'pi':            return '~/.pi/agent/mcp.json';
// rawSettingsPath
case 'pi':            return '~/.pi/agent/settings.json';
// rawInstructionsPath
case 'pi':            return '~/.pi/agent/AGENTS.md';
// rawSkillsDir: add 'pi' to the shared ~/.agents/skills/ case
case 'opencode':
case 'codex':
case 'pi':          return '~/.agents/skills/';
```

`src/cli/cli-helpers.ts:4`:
```ts
const VALID_TARGETS = ['claude', 'antigravity', 'codex', 'opencode', 'pi'] as const;
```

`src/cli/canonical.ts`:
```ts
import { PiAdapter } from '../adapters/pi';
export const ALL_TARGETS: TargetName[] = ['claude-code', 'opencode', 'antigravity', 'codex', 'pi'];
// in createAdapter:
    case 'pi':          return new PiAdapter(homeDir);
```
and in `readCanonicalSettings`, before `return { target, keys };`:
```ts
    if (target === 'pi') {
      const oc = JSON.parse(await readFile(join(projectDir, SETTINGS_DIR, 'opencode.json'), 'utf-8')) as Record<string, unknown>;
      keys._opencodeProviders = oc.providers ?? {};
    }
```

- [x] **Step 4: Implement the adapter**

```ts
// src/adapters/pi.ts
import { join } from 'node:path';
import { BaseAdapter } from './base';
import { readJson, writeJson } from '../formats/json';
import { stringifyFrontmatter } from '../formats/markdown';
import { renderPiModels } from '../pi/models';
import { renderPiMcp } from '../pi/mcp';
import { renderPiAgentMetadata } from '../pi/agents';
import type { AdapterCapabilities, CanonicalItem, CanonicalSettings, MCPServer, RenderedFile } from '../types';

const PRIVATE_PREFIX = '_';

export class PiAdapter extends BaseAdapter {
  constructor(homeDir?: string) {
    super('pi', 'Pi', homeDir);
  }

  getCapabilities(): AdapterCapabilities {
    return { commands: false, agents: true, mcp: true, instructions: true, skills: false, settings: true, hooks: false };
  }

  renderCommand(item: CanonicalItem): RenderedFile {
    return { relativePath: this.paths.getCommandFilePath(item.name), content: stringifyFrontmatter(item.content, item.metadata) };
  }

  renderAgent(item: CanonicalItem): RenderedFile {
    return { relativePath: this.paths.getAgentFilePath(item.name), content: stringifyFrontmatter(item.content, renderPiAgentMetadata(item)) };
  }

  renderMCPServers(servers: MCPServer[], existingContent?: string): string {
    const existing = existingContent ? readJson<Record<string, unknown>>(existingContent) : {};
    return writeJson({ ...existing, ...renderPiMcp(servers) });
  }

  override getRenderedServerNames(servers: MCPServer[]): string[] {
    return servers.filter((s) => !s.disabledFor?.includes('pi')).map((s) => s.name);
  }

  override renderSettings(settings: CanonicalSettings, existingContent?: string): string {
    const base = existingContent ? readJson<Record<string, unknown>>(existingContent) : {};
    for (const [key, value] of Object.entries(settings.keys)) {
      if (!key.startsWith(PRIVATE_PREFIX)) base[key] = value;
    }
    return writeJson(base);
  }

  override extractSettingsKeys(canonicalKeys: string[], targetContent: string): string {
    return super.extractSettingsKeys(canonicalKeys.filter((k) => !k.startsWith(PRIVATE_PREFIX)), targetContent);
  }

  override renderAdditionalSettings(settings: CanonicalSettings): RenderedFile[] {
    const providers = settings.keys._opencodeProviders;
    if (!providers || typeof providers !== 'object') return [];
    return [{
      relativePath: join(this.paths.getBaseDir(), 'models.json'),
      content: writeJson(renderPiModels(providers as Record<string, unknown>)),
    }];
  }
}
```

Check `src/cli/check.ts:396` — profile name derivation becomes `profile:models.json`; push matches by `targetPath`, so no change needed. Confirm by running `metronome check -t pi --verbose` in Step 7.

- [x] **Step 5: Create canonical Pi settings** — `configs/settings/pi.json`:

```json
{
  "defaultProvider": "tux",
  "defaultModel": "gpt-6-luna",
  "defaultThinkingLevel": "max",
  "enabledModels": [
    "tux/*",
    "github-copilot/claude-opus-5.5",
    "github-copilot/claude-sonnet-5.5",
    "github-copilot/gpt-6-luna",
    "github-copilot/gpt-6.1-sol",
    "openai-codex/gpt-6-luna",
    "openai-codex/gpt-6.1-sol"
  ],
  "packages": [
    "git:https://github.com/hasit/pi-community-themes",
    "npm:pi-subagents@0.76.1"
  ],
  "theme": "nord-dark",
  "hideThinkingBlock": false,
  "editorPaddingX": 1,
  "outputPad": 1,
  "enableInstallTelemetry": false,
  "defaultProjectTrust": "always",
  "enableSkillCommands": false,
  "extensions": [
    "~/Repos/zacczakk/metronome/configs/pi/extensions/instructions-loader.ts"
  ],
  "subagents": {
    "defaultSubagentOnlyExtensions": [
      "~/Repos/zacczakk/metronome/configs/pi/extensions/instructions-loader.ts"
    ],
    "agentOverrides": {
      "scout": { "model": "github-copilot/gpt-6-luna", "thinking": "medium" },
      "researcher": { "disabled": true },
      "evidence-auditor": { "disabled": true },
      "worker": { "disabled": true },
      "reviewer": { "disabled": true },
      "oracle": { "disabled": true },
      "advisor": { "disabled": true }
    }
  }
}
```

- [x] **Step 6: Run** `bun test` — Expected: PASS. Fix any test that enumerates targets (`test/__tests__/fixtures-smoke.test.ts`, `src/cli/__tests__/render.test.ts`, `test/__tests__/pull-*.test.ts`) by adding `pi` expectations or scoping them to their original targets; do not weaken assertions.

- [x] **Step 7: Dry-run against the real home**

```bash
metronome check -t pi --verbose
metronome diff -t pi --all | head -200
```
Expected: creates for `mcp.json`, `models.json`, `AGENTS.md`, 11 agents, settings update. No writes yet. (The `extensions` path points at a file Task 5 creates; Pi only loads it after Task 7's push.)

- [x] **Step 8: Commit** `committer "feat(pi): add Pi sync target for models, MCP, agents and settings" src/adapters/pi.ts src/adapters/__tests__/pi.test.ts src/types.ts src/adapters/path-resolver.ts src/cli/canonical.ts src/cli/cli-helpers.ts configs/settings/pi.json` (plus any adjusted test files).

---

### Task 5: Shared instructions + Memory vault files

**Files:**
- Create: `configs/pi/extensions/instructions-loader.ts`
- Test: `src/pi/__tests__/instructions-loader.test.ts`

**Interfaces:**
- Consumes: `~/.pi/agent/AGENTS.md` rendered by Task 4 (Pi loads it natively; subagents keep it via `inheritGlobalContext: true` from Task 3).
- Produces:
  - `export const INSTRUCTION_PATHS: readonly string[]` — `['~/Vaults/Memory/SOUL.md', '~/Vaults/Memory/IDENTITY.md', '~/Vaults/Memory/USER.md', '~/Vaults/Memory/MEMORY.md']`.
  - `export function createInstructionsLoader(paths?: readonly string[], home?: string): (pi: ExtensionAPI) => void`.
  - `export default createInstructionsLoader()` — the Pi extension entry.

Behavior: on the first `before_agent_start` of a process, read each path once (missing files skipped, like the OpenCode plugin); on every `before_agent_start`, append `{ path, content }` for each file to `event.systemPromptOptions.contextFiles` **unless that path is already present** (idempotent if the extension is loaded twice, e.g. ambient + `defaultSubagentOnlyExtensions` in background children). Order after Pi's own context files matches OpenCode: AGENTS.md, then SOUL, IDENTITY, USER, MEMORY.

- [x] **Step 1: Write the failing test**

```ts
// src/pi/__tests__/instructions-loader.test.ts
import { expect, test } from 'bun:test';
import { mkdtempSync, mkdirSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createInstructionsLoader, INSTRUCTION_PATHS } from '../../../configs/pi/extensions/instructions-loader';

function harness(paths: readonly string[], home: string, loads = 1) {
  const handlers: Array<(event: any) => unknown> = [];
  const pi = { on: (name: string, fn: (event: any) => unknown) => { if (name === 'before_agent_start') handlers.push(fn); } };
  for (let i = 0; i < loads; i++) createInstructionsLoader(paths, home)(pi as any);
  return async () => {
    const event = { systemPromptOptions: { contextFiles: [{ path: join(home, '.pi/agent/AGENTS.md'), content: 'agents' }] } };
    for (const h of handlers) await h(event);
    return event.systemPromptOptions.contextFiles;
  };
}

const home = mkdtempSync(join(tmpdir(), 'pi-instr-'));
mkdirSync(join(home, 'Vaults/Memory'), { recursive: true });
writeFileSync(join(home, 'Vaults/Memory/SOUL.md'), 'soul');
writeFileSync(join(home, 'Vaults/Memory/USER.md'), 'user');

test('appends existing vault files after AGENTS.md in canonical order', async () => {
  const files = await harness(INSTRUCTION_PATHS, home)();
  expect(files).toEqual([
    { path: join(home, '.pi/agent/AGENTS.md'), content: 'agents' },
    { path: join(home, 'Vaults/Memory/SOUL.md'), content: 'soul' },
    { path: join(home, 'Vaults/Memory/USER.md'), content: 'user' },
  ]);
});

test('double load does not duplicate files', async () => {
  const files = await harness(INSTRUCTION_PATHS, home, 2)();
  expect(files.map((f: { path: string }) => f.path)).toHaveLength(3);
});

test('reapplies on every run (fresh prompt options per turn)', async () => {
  const run = harness(INSTRUCTION_PATHS, home);
  await run();
  expect(await run()).toHaveLength(3);
});
```

- [x] **Step 2: Run** `bun test src/pi/__tests__/instructions-loader.test.ts` — Expected: FAIL module not found.

- [x] **Step 3: Implement**

```ts
// configs/pi/extensions/instructions-loader.ts
// Pi port of configs/opencode/v2/plugins/instructions-loader.ts.
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
      const contextFiles = event.systemPromptOptions.contextFiles;
      const present = new Set(contextFiles.map((f) => f.path));
      for (const file of await load()) {
        if (!present.has(file.path)) contextFiles.push(file);
      }
    });
  };
}

export default createInstructionsLoader();
```

- [x] **Step 4: Run** `bun test src/pi/__tests__/instructions-loader.test.ts` — Expected: PASS.

- [x] **Step 5: Smoke-load in real Pi (no push yet)**

```bash
cd /tmp && pi -p --no-session --no-tools \
  -e ~/Repos/zacczakk/metronome/configs/pi/extensions/instructions-loader.ts \
  "Without tools: what is the 'type' frontmatter value of the SOUL.md context file? Reply with only the value."
```
Expected: `agent-soul`. If Pi reports the mutation is ignored (answer unknown), switch the handler to `return { systemPrompt: event.systemPrompt + rendered }` where `rendered` wraps each file as `<instruction-source path="…">…</instruction-source>` (the OpenCode plugin's format), keep the dedupe by checking `event.systemPrompt.includes(`path="${file.path}"`)`, and update the test harness to assert on the returned `systemPrompt`.

- [x] **Step 6: Commit** `committer "feat(pi): load Memory vault instructions in Pi sessions and subagents" configs/pi/extensions/instructions-loader.ts src/pi/__tests__/instructions-loader.test.ts`

---

### Task 6: Parity guard tests

**Files:**
- Create: `src/cli/__tests__/pi-parity.test.ts`

**Interfaces:**
- Consumes: `readCanonicalSettings`, `readCanonicalMCPServers`, `PROJECT_ROOT` (`src/cli/canonical.ts`), `renderOpenCodeMcp` (`src/opencode/version-renderer.ts`), `PiAdapter`.

- [x] **Step 1: Write the test**

```ts
// src/cli/__tests__/pi-parity.test.ts
import { expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { renderOpenCodeMcp } from '../../opencode/version-renderer';
import { readCanonicalMCPServers, readCanonicalSettings, PROJECT_ROOT } from '../canonical';
import { PiAdapter } from '../../adapters/pi';

const opencode = JSON.parse(readFileSync(join(PROJECT_ROOT, 'configs/settings/opencode.json'), 'utf8'));

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
  const { INSTRUCTION_PATHS } = await import('../../../configs/pi/extensions/instructions-loader');
  const [agents, ...vault] = opencode.instructions as string[];
  expect(agents).toBe('~/.config/opencode/AGENTS.md');
  expect([...INSTRUCTION_PATHS]).toEqual(vault);
  const pi = await readCanonicalSettings(PROJECT_ROOT, 'pi');
  const loader = '~/Repos/zacczakk/metronome/configs/pi/extensions/instructions-loader.ts';
  expect(pi!.keys.extensions).toContain(loader);
  expect((pi!.keys.subagents as { defaultSubagentOnlyExtensions: string[] }).defaultSubagentOnlyExtensions).toContain(loader);
  expect(new PiAdapter('/h').renderInstructions('x')).toBe('x');
});
```

- [x] **Step 2: Run** `bun test src/cli/__tests__/pi-parity.test.ts` — Expected: PASS (if it fails, fix the renderer or canonical data, not the assertion).

- [x] **Step 3: Commit** `committer "test(pi): guard Pi/OpenCode parity for models, MCP, instructions and default model" src/cli/__tests__/pi-parity.test.ts`

---

### Task 7: Push, install, live verification, docs

**Files:**
- Modify: `docs/subagent.md`, `docs/pi-setup-guide.md`, `README.md`, `docs/CHANGELOG.md`

- [x] **Step 1: Back up and push**

```bash
cp ~/.pi/agent/settings.json /tmp/pi-settings.backup.json
metronome push -t pi --force
pi update --extensions          # installs npm:pi-subagents@0.76.1
```
Expected: `~/.pi/agent/{models.json,mcp.json,AGENTS.md,agents/*.md}` exist; `settings.json` keeps `lastChangelogVersion`; `diff ~/.pi/agent/AGENTS.md ~/.config/opencode/AGENTS.md` is empty.

- [x] **Step 2: Tux** — `pi --list-models | rg '^tux'` shows 19 models; then

```bash
cd /tmp && pi -p --no-session --model tux/gpt-6.1-sol --thinking high "Reply: ok"
cd /tmp && pi -p --no-session --model tux/claude-opus-5-5 --thinking medium "Reply: ok"
cd /tmp && pi -p --no-session --model tux/deepseek-v4-pro --thinking off "Reply: ok"
```
Expected: `ok` ×3; `tux costs` shows the requests.

- [x] **Step 3: MCP** — `pi mcp list`. Expected: `github` + `palantir-mcp` connected, others listed disabled; exit 0. If `github` fails, `GITHUB_PERSONAL_ACCESS_TOKEN` is not exported in Pi's env (same requirement as OpenCode) — document, don't hardcode.

- [x] **Step 4: Subagents** — in `pi` interactive: ask "use the docs agent to list the files in docs/plans". Expected: `subagent` tool call with `agent: docs`, child model `github-copilot/gpt-6-luna`. Ask "use foundry-sql to list one dataset" — Expected: child calls `mcp__palantir_mcp__*`.

- [x] **Step 5: Instructions + vault** —

```bash
cd /tmp && pi -p --no-session --no-tools "Without tools, answer in one line each: (1) Contact handle in your instructions? (2) 'type' frontmatter of IDENTITY.md context? (3) 'type' frontmatter of SOUL.md context?"
```
Expected: `@zacczakk`, `agent-identity`, `agent-soul`. Then in `pi` interactive: "use the docs agent; without tools, it must reply with the 'type' frontmatter of its IDENTITY.md and SOUL.md context files". Expected: `agent-identity`, `agent-soul` (proves `defaultSubagentOnlyExtensions` + `inheritGlobalContext`). Also run with an async/background child ("run it in the background") to confirm no duplicate-load error. If a foreground child lacks the vault files, add `extensions: ~/Repos/zacczakk/metronome/configs/pi/extensions/instructions-loader.ts` to `renderPiAgentMetadata` output (Task 3) with a test, then re-push.

- [x] **Step 6: Drift** — `metronome check -t pi`. Expected: zero drift.

- [x] **Step 7: Docs**
  - `docs/subagent.md`: add "Pi: `~/.pi/agent/agents/{name}.md` via pi-subagents; frontmatter per mapping table; `scout`=explore, `delegate`=general, other builtins disabled; children get AGENTS.md (`inheritGlobalContext`) and vault files (`defaultSubagentOnlyExtensions`)."
  - `docs/pi-setup-guide.md`: replace the `pi-mcp-adapter` guidance with "Pi ≥1.0.4 has native MCP; metronome renders `~/.pi/agent/mcp.json`"; replace §0 scaffolding prerequisite with `metronome push -t pi && pi update --extensions`; replace the APPEND_SYSTEM/SOUL guidance with the instructions-loader extension.
  - `README.md`: add Pi to the target list, `metronome push -t pi` to Quick Start, and `configs/pi/extensions/` to Directory Layout.
  - `docs/CHANGELOG.md`: entry for the Pi target.

- [x] **Step 8: Full gate** — `bun test && git diff --check`. Expected: pass, clean.

- [x] **Step 9: Commit** `committer "docs(pi): document Pi target, native MCP and instruction loading" docs/subagent.md docs/pi-setup-guide.md README.md docs/CHANGELOG.md`

---

## Decisions (approved 2026-10-06)

1. **Default model** — Pi default is `tux/gpt-6-luna` (OpenCode parity), replacing `github-copilot/gpt-5.6-luna`.
2. **Subagent runtime** — `pi-subagents@0.76.1`, not a vendored copy of Pi's example extension.
3. **`systemPromptMode: append`** — agent prompts go on top of Pi's base prompt.
4. **Per-model default effort** — OpenCode's per-model `gpt-5.6-luna` `reasoningEffort: max` is dropped; Pi uses the global `defaultThinkingLevel`.
5. **Instructions in scope** — canonical `AGENTS.md` synced to `~/.pi/agent/AGENTS.md`; vault files loaded live by the repo-referenced `instructions-loader` extension in main sessions and subagents.

## Execution notes (2026-10-06)

Deviations from the plan:
- `pi-subagents@0.76.1` documents `subagents.defaultSubagentOnlyExtensions` but does not implement it. Each rendered agent now carries `subagentOnlyExtensions: <loader>` (`PI_INSTRUCTIONS_LOADER` in `src/pi/agents.ts`). The settings key was removed.
- pi-subagents children run in process with `forceSystemPrompt` set, which ignores `contextFiles`. When a prompt is forced, the loader appends `<instruction-source path="…">` blocks via `return { systemPrompt }`. It deduplicates by path, so a double load is safe.
- `pi update --extensions` does not install a newly declared package. Run `pi install npm:pi-subagents@0.76.1` once.
- `pull -s all` skips Pi; Pi files are lossy projections. There are 10 agents, not 11.
- `foundry-sql` description now reads "OpenCode and Pi only."

Live verification:
- 19 `tux/*` models listed. `gpt-6.1-sol`, `claude-opus-5-5`, `deepseek-v4-pro`, `claude-haiku-4-5-20251001` and the default `gpt-6-luna` all answered.
- `pi mcp list`: github connected (codemode, 49 tools), palantir-mcp connected (direct). Every other server disabled, same as OpenCode.
- Main session, foreground `docs` child and background `vault-ops` child all answered `Fred Overflow` from IDENTITY.md and `@zacczakk` from AGENTS.md. No duplicate loads.
- The `foundry-sql` child called `mcp__palantir_mcp__search_tools`.
- `~/.pi/agent/AGENTS.md` is byte-identical to `~/.config/opencode/AGENTS.md`.
- `metronome check -t pi`: 21 up to date. `bun test`: 711 pass.
- `bun run test`: the public-repo gate failures that predate this work remain (skills, history); this work adds none.
