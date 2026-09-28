# OpenCode Single Target Implementation Plan

> **For agentic workers:** Execute this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Retire the duplicate `opencode2` Metronome target while keeping one stable OpenCode configuration and preserving historical manifest ownership.

**Architecture:** Make `opencode` the only active target. Migrate canonical target options and tests, keep read-only recognition of old manifest entries where needed, and update the user-facing docs. Do not alter the live OpenCode database or service.

**Tech Stack:** TypeScript, Bun, JSON.

## Global Constraints

- Work only in `.worktrees/fix-opencode-single-target`.
- Do not change the active OpenCode service, database, or shell launcher.
- Preserve unrelated work and existing provider settings.

---

### Task 1: Single target and canonical routing

**Owned files:** `src/types.ts`, `src/cli/`, `src/adapters/`, `src/opencode/profile.ts`, `src/opencode/version-renderer.ts`, `src/core/skill-projection.ts`, `configs/agents/foundry-sql.md`, `configs/mcp/`, matching tests and fixtures.

- [x] Reject `opencode2` as a user target and remove it from active target types.
- [x] Migrate canonical MCP and agent routing to `opencode` without dropping options.
- [x] Preserve old manifest skill ownership read-only.
- [x] Run focused and full tests.

### Task 2: Documentation and verification

**Owned files:** `README.md`, `docs/architecture.md`, `docs/overview.md`, `docs/design/sync-spec.md`, `docs/subagent.md`, `docs/CHANGELOG.md`, `configs/instructions/TOOLS.md`, this plan.

- [x] Update current docs to describe one OpenCode target.
- [x] Confirm no active runtime target alias remains, diff clean, tests pass, and public-repo gate result understood. Live GitHub MCP remains one expected update; do not push to a running OpenCode session. Public-repo gate fails on history-sensitive-content in existing history.
