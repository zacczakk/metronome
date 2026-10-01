# Tux Model Parity Implementation Plan

> **For agentic workers:** Execute this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Cover every live Tux model with matching prices, limits, protocols, and reasoning presets.

**Architecture:** Update the existing canonical OpenCode model map; keep its supported legacy format and existing renderer. Compare against installed Tux `v0.13.0-beta.9`, not an older checkout.

**Tech Stack:** JSON, TypeScript, Bun tests.

## Global Constraints

- Owned files: `configs/settings/opencode.json`, `src/cli/__tests__/tux-model-parity.test.ts`, `src/cli/__tests__/canonical.test.ts`, this plan.
- Preserve default `tux/gpt-6-luna`, unrelated providers, agents, and dirty root work.
- No new dependencies or changes to Tux.
- TPM/RPM are enforced by Tux; OpenCode token limits are context/output, not rate limits.

### Task 1: Catalog parity

- [x] Add regression coverage for the complete 19-model Tux registry, costs, protocols, limits, and variants.
- [x] Run `bun test src/cli/__tests__/tux-model-parity.test.ts`; confirm failure.
- [x] Add Sonnet 5.5 and GPT-6.1 Sol; align every model to Tux's 200,000 context / 32,000 output integration limits, Haiku's empty variants, and Luna's encrypted-content option.
- [x] Run focused tests, `bun test`, and `git diff --check`.
- [x] Verify every live `/v1/models` ID is present in rendered settings; sync OpenCode settings only.

## Availability evidence — 2026-10-01

`tux limits` reports 18 selectors: 16 positive, Opus 4.5 and Opus 5 zero.
`/v1/models` exposes the 16 positive entries, with Haiku mapped to
`claude-haiku-4-5-20251001`. Opus 4.5 is a limits-only selector, not in
Tux's client registry. Canonical settings retain Opus 5, GPT-5.5 and GLM 5.2
as registry entries for other upstreams; availability remains Tux-owned.
The canonical legacy representation is semantically equivalent to Tux's
native model settings. Attachment declarations remain preserved.
Active `/api/status` catalog source is `agentic`:
use Tux's source-specific client prices, remove inactive direct-provider
long-context price cards, and match the 200K context cap.

## Verification

- Imported the installed release's `integrateOpenCodeCliWithDeps` from a
  temporary detached Tux worktree at `v0.13.0-beta.9` (`ae1d65d9`). Generated
  its complete Agentic projection in memory; converted native model fields
  through Metronome's existing renderer. All 19 models deep-equal canonical
  definitions after ignoring Metronome's explicit attachment declaration.
- Live Tux `/v1/models`: all 16 model IDs covered.
- `opencode models`: both additions and every other registry model visible.
- Settings-only push succeeded; subsequent settings check reports zero drift.
- `bun test`: 669 pass, zero failures. `git diff --check`: clean.
- `bun run test`: tests pass; existing `history-sensitive-content: git history`
  public-repository gate remains blocked.
