# OpenCode/Tux Parity Implementation Plan

> **For agentic workers:** Execute this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make Metronome's OpenCode configuration match Tux `origin/develop` model, pricing, provider, default, and provider-denylist behavior.

**Architecture:** Keep the existing canonical settings file as the source of truth, but store OpenCode providers and model metadata in Tux's native `provider`/`npm`/`options`/object-`variants` shape. Render and merge that shape without recreating the separate `providers` namespace; preserve unrelated settings and migrate existing rendered provider data where needed.

**Tech Stack:** JSON, TypeScript, Bun tests.

## Global Constraints

- Preserve unrelated dirty work already present in the repository.
- No new dependencies.
- Tux target-gateway-only models remain available in canonical config but are not assumed live at runtime.
- Keep the existing native MCP `mcp.servers` rendering path; update Palantir's canonical OpenCode2 timeout only if required by parity.

---

### Task 1: Add Tux model and pricing parity

**Files:**
- Modify: `configs/settings/opencode.json`
- Test: `src/cli/__tests__/canonical.test.ts`

- [x] Add `claude-opus-5-5`, `claude-sonnet-4-5`, `gpt-6-sol`, and `gpt-6-luna` using Tux's raw model shape.
- [x] Set the default to `tux/gpt-6-luna`.
- [x] Correct Sonnet 5 to `{ input: 2, output: 10, cache_read: 0.2, cache_write: 2.5 }`.
- [x] Correct GPT-5.6 Sol short/long-context pricing to Tux's current pre-reversion rates.
- [x] Add canonical tests for the default and required model IDs/prices.

### Task 2: Use Tux's provider shape

**Files:**
- Modify: `src/opencode/version-renderer.ts`
- Modify: `src/opencode/__tests__/version-renderer.test.ts`
- Modify: `src/opencode/__tests__/profile.test.ts`
- Modify: `test/__tests__/push-settings.test.ts`

- [x] Render canonical `provider` entries without converting them to `providers`.
- [x] Store agent variants as Tux-shaped object variants.
- [x] Merge existing `provider` data and migrate the old rendered `providers` map without dropping unrelated providers.
- [x] Update focused tests to assert `provider.tux` and Tux-shaped models.

### Task 3: Add Tux's disabled provider policy

**Files:**
- Modify: `configs/settings/opencode.json`
- Modify: `src/opencode/version-renderer.ts`
- Test: `src/opencode/__tests__/version-renderer.test.ts`

- [x] Add `disabled_providers` with `opencode` and `opencode-go`.
- [x] Preserve existing user entries during merge.
- [x] Keep the field in the rendered config.

### Task 4: Verify

- [x] Run `bun test src/opencode/__tests__/version-renderer.test.ts src/opencode/__tests__/profile.test.ts src/cli/__tests__/canonical.test.ts test/__tests__/push-settings.test.ts`.
- [x] Run `bun test`.
- [x] Run `git diff --check` and inspect only the requested OpenCode parity changes plus this plan.
