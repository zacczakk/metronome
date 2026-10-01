---
summary: Restore exact Tux develop context limits and source-qualified price tiers through native OpenCode settings.
read_when:
  - Updating Tux model metadata or OpenCode provider rendering
---

# Tux Context and Pricing Implementation Plan

> **For agentic workers:** Execute this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Match every Tux model's limits and Agentic costs to develop `d93882070071f3d0df763461750efa8c9ebd103a`.

**Architecture:** Store Tux's native V2 provider under `providers.tux`; preserve it through render, merge, and agent-variant operations. Retain legacy providers for existing callers. Compare the complete 19-model catalog to a dated source fixture and independently regenerate it from Tux develop.

**Tech Stack:** TypeScript, JSON, Bun; existing dependencies only.

## Global Constraints

- Owned: `configs/settings/opencode.json`, `scripts/sync-tux-model-metadata.ts`, `src/opencode/version-renderer.ts`, its tests, `src/opencode/__tests__/profile.test.ts`, `src/adapters/__tests__/opencode.test.ts`, `src/cli/__tests__/tux-model-parity.test.ts`, `src/cli/__tests__/canonical.test.ts`, `test/fixtures/tux-model-metadata.json`, `test/__tests__/push-settings.test.ts`, `docs/architecture.md`, `docs/CHANGELOG.md`, this plan.
- Preserve selected defaults, endpoints, reasoning/media behavior, other providers, MCPs, and dirty root instruction/skill files.
- Source: Tux develop registry and `modelPricingAt(id, now, 'agentic')` through `buildOpenCodeModel`; source revision/time recorded in the fixture.
- Retain all six exact 272,000-token tiers, omitted unpublished cache-write rates, and GPT-5.5 `cost: []`.
- Retain documented DeepSeek/GLM 200K/32K fallback limits; no invented gateway maxima.
- Settings-only live sync. No runtime upgrade, service restart, or model requests.

### Task 1: Lossless native provider rendering

- [x] Add failing tests: native costs/empty arrays unchanged, mixed provider merge, native agent-variant preservation/removal, and settings push idempotence.
- [x] Run `bun test src/opencode/__tests__/version-renderer.test.ts test/__tests__/push-settings.test.ts`; confirm failures.
- [x] Preserve `providers` separately from legacy `provider`; apply agent variants in each format and remove duplicate names during merge.
- [x] Run focused renderer, profile, adapter, agent, and settings-push tests.

### Task 2: Complete metadata and live proof

- [x] Capture a dated fixture from all Tux develop models using the source expression above; assert every model's complete definition after rendering.
- [x] Run `bun test src/cli/__tests__/tux-model-parity.test.ts`; confirm stale canonical failure.
- [x] Replace only the canonical Tux provider with the generated native provider; retain explicit media support and DeepSeek's existing reasoning plus develop's thinking-off preset.
- [x] Update canonical assertions and docs with source revision, exact limits, tiers, and gaps.
- [x] Run `bun run test`, `bun scripts/docs-list.ts`, and `git diff --check`; report pre-existing gates separately.
- [x] Independently regenerate models from latest Tux develop and compare all 19 canonical definitions.
- [x] Run `bun src/cli/index.ts push -t opencode --type settings --force`; verify settings drift is zero and live `/api/model` limits/costs match every canonical model.
- [x] Commit only owned paths using `committer`.

## Verification

- 685 Bun tests pass, including native profile activation and real settings push/idempotence.
- Public-file scan passes current files; `bun run test` exits on pre-existing `history-sensitive-content: git history` (also reproduced at root).
- Existing docs lacking frontmatter reported; new/updated docs have metadata.
- Source parity command verifies all 19 complete definitions against clean Tux develop.
- Global and workspace `/api/model` snapshots verify all 19 limits/costs; workspace also verifies full capabilities, variants, settings, and runtime packages.
- Installed OpenCode remains 2.0.18. Settings-only check reports zero drift.
- `opencode reload` reported a removed Tux worktree location; automatic loading subsequently exposed all corrected values without a service restart.
