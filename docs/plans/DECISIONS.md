---
summary: Cross-plan decision log for choices that span multiple plans.
read_when:
  - Starting a new plan that may conflict with prior decisions
---

# Cross-Plan Decision Log

Decisions that span multiple plans or affect the repo broadly.

| Date | Decision | Context | Status |
|------|----------|---------|--------|
| 2026-02-18 | Migrate `.tasks/` → `docs/plans/` | Align with canonical AGENTS.md structure | Done |
| 2026-02-18 | Agent-driven sync (no build step) | SYNC.md as contract, CLI reads playbook | Superseded — now code-driven via `metronome` CLI |
| 2026-04-21 | `toolStreaming: false` on all tux models | See below | Active workaround |

## 2026-04-21: `toolStreaming: false` on tux models

**Problem:** OpenCode 1.14.19 uses `@ai-sdk/anthropic` v3.0.71, which defaults `toolStreaming: true`. This injects `eager_input_streaming: true` into every function tool definition on streaming requests. Foundry LMS (the endpoint tux proxies to) doesn't recognize this field and returns `400 INVALID_ARGUMENT: Request contained an unrecognized field`.

**Root cause trace:**
1. `@ai-sdk/anthropic` computes `defaultEagerInputStreaming = stream && (anthropicOptions?.toolStreaming ?? true)` — defaults to `true`
2. Adds `eager_input_streaming: true` to each tool definition sent to the API
3. Foundry LMS is an Anthropic-compatible proxy that hasn't implemented this field yet
4. OpenCode sst/opencode#23541 tracks this; fix PR #23542 was closed without merge

**Fix:** Per-model `options: { toolStreaming: false }` in `configs/settings/opencode.json`. This flows through OpenCode's options pipeline as `providerOptions.anthropic.toolStreaming = false`, suppressing the field injection. Provider-level options don't reach the per-request `providerOptions` — only model-level options do.

**No env var equivalent** to `CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS=1`. The model-level option is the only knob.

**Cost:** Zero. `toolStreaming` only affects streaming of tool *input* parameters (a latency optimization). Tool functionality is unaffected.

**Remove when:** Foundry LMS accepts `eager_input_streaming` without error. Verify by removing the options from one model and testing.
