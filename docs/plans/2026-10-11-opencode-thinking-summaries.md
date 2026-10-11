---
summary: Request Claude thinking summaries in canonical OpenCode settings while preserving other model metadata and installed configuration.
read_when:
  - Changing Tux Claude reasoning display
---

# OpenCode Thinking Summaries Implementation Plan

> **For agentic workers:** Execute this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Carry Tux's Claude thinking-summary request bodies into canonical and installed OpenCode settings.

**Architecture:** Update existing Claude metadata without refreshing unrelated prices, model cards, or capabilities. Preserve the source fixture and verify renderer/profile behavior.

**Tech Stack:** Bun, JSON, existing OpenCode renderer.

## Global Constraints

- Preserve unrelated work and installed configuration.
- No dependency or runtime updates.
- Owned: `configs/settings/opencode.json`, `test/fixtures/tux-model-metadata.json`, `src/cli/__tests__/tux-model-parity.test.ts`, `docs/architecture.md`, this plan.

### Task 1: Canonical config and installed settings

- [x] Add a regression test for default Claude settings, every enabled preset, `none`, and unchanged GPT/DeepSeek behavior.
- [x] Run `bun test src/cli/__tests__/tux-model-parity.test.ts`; expect failure.
- [x] For reasoning-capable Claude models in canonical settings and fixture, add:

```json
"settings": { "thinking": { "type": "adaptive", "display": "summarized" } }
```

- [x] Add the same thinking settings to enabled variants; `none` receives `{"thinking":{"type":"disabled"}}` instead. Keep existing settings and effort values. Canonical Claude models currently expose only enabled presets; Haiku 4.5 has no reasoning control and stays unchanged.
- [x] Document summaries and run `bun run test`, including existing profile/merge checks. Result: 730 pass, 0 fail.
- [x] Commit with `committer`; apply just this commit to the original Metronome checkout, preserving its unrelated changes.
- [x] Run `metronome push -t opencode --type settings --dry-run`, inspect diff, then sync with `--force`. Used `bun src/cli/index.ts` from the worktree because the linked CLI resolves its canonical root to the original checkout.
- [x] Verify installed model settings and live OpenCode reasoning output; record result. Installed nine Claude models and 27 presets; OpenCode 2.0.26 `tux/claude-sonnet-5-5#high` emitted nonempty reasoning and final text through the local Tux proxy.

Initial request-body overrides were replaced with native settings after a live off-preset check showed OpenCode retaining the default display flag. Settings-only configuration passed that check. Existing fixture revision/date still describe prices and limits; this change overlays summary settings only.
