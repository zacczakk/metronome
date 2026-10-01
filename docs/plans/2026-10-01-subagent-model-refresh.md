# Subagent Model Refresh Implementation Plan

> **For agentic workers:** Execute this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refresh every explicit subagent model route and effort setting using current Artificial Analysis results.

**Architecture:** Use Claude Opus 5.5/medium for API, security, and infrastructure review; use GPT-6 Luna/max for execute and verify. Preserve target compatibility: Claude Code maps the explicit Opus route to its `opus` alias, while Codex maps it to GPT-6.1 Sol/medium because Codex uses OpenAI Responses and Opus is Anthropic-Messages-only. Keep built-in `general` inheriting the session model.

**Tech Stack:** Markdown/YAML, JSON, TypeScript, Bun tests.

## Global Constraints

- Preserve agent permissions, scopes, and prompts.
- Use only model IDs and effort variants present in the active OpenCode catalog.
- Keep OpenCode `reasoningEffort` canonical; render Claude Code's native model and effort fields.
- No dependencies; do not touch the unrelated root checkout edits.

---

### Task 1: Refresh subagent routes and render behavior

**Files:**
- Modify: `configs/agents/*.md` (10 canonical agents)
- Modify: `configs/settings/opencode.json` (built-in Explore route)
- Modify: `src/adapters/claude-code.ts`, `src/adapters/codex.ts`, `src/adapters/base.ts`
- Test: `src/adapters/__tests__/claude-code.test.ts`
- Test: `src/adapters/__tests__/codex.test.ts`
- Test: `src/adapters/__tests__/antigravity.test.ts`
- Test: `src/cli/__tests__/canonical.test.ts`
- Modify: `docs/subagent.md`, `docs/design/foundry-sql-subagent.md`, `docs/design/sync-spec.md`, `docs/architecture.md`
- Modify: this plan

**Routing:**
- API, infra, security: Claude Opus 5.5 / medium
- Execute, verify: GPT-6 Luna / max
- Release, research: GPT-6.1 Sol / high
- Foundry SQL: GPT-6.1 Sol / medium
- Docs, Explore, vault-ops: GPT-6 Luna / medium

- [x] Add failing Claude, Codex, and wildcard-permission tests; targeted runs reproduced each defect.
- [x] Update Claude Code/Codex routing, wildcard permission projection, canonical routes, Explore settings, and docs.
- [x] Run focused Claude, Codex, Antigravity, canonical-routing, and OpenCode profile/renderer tests.
- [x] Run `bun test`: 678 pass. `git diff --check`: clean.

## Verification note

`bun run test` also runs `scripts/check-public-repo.ts`. The test suite passed,
then the public-repository check exited 1 with `history-sensitive-content: git
history` in this worktree.
