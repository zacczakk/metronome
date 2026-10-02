---
summary: Preserve Codex app-owned MCP tools across status, push, pull, and diff without changing managed-server sync.
read_when:
  - Changing Codex MCP ownership or sync behavior
---

# Codex Internal Tools Implementation Plan

> **For agentic workers:** Execute this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Keep Codex-owned `node_repl` and `computer-use` entries outside Metronome sync.

**Architecture:** Reserve these two names in the Codex adapter. Ignore them when parsing or selecting canonical MCP servers, and retain their complete existing TOML values when rendering managed MCP changes.

**Tech Stack:** TypeScript, Bun, existing TOML reader/writer.

## Global Constraints

- Preserve both entries, including nested environment tables and extra Codex fields.
- Preserve normal managed-server updates and stale-server cleanup.
- Keep protection across status, diff, push, and pull; add no dependencies.
- Worktree: `.worktrees/fix-codex-internal-tools`; owned files listed below.

---

### Task 1: Protect Codex-owned MCP entries

**Files:**
- Modify: `src/adapters/codex.ts`
- Test: `test/__tests__/codex-internal-mcp.test.ts`
- Modify: `docs/architecture.md`
- Modify: `docs/design/sync-spec.md`
- Modify: this plan

**Interfaces:** Existing `CodexAdapter.parseMCPServers`, `parseExistingMCPServerNames`, `getRenderedServerNames`, and `renderMCPServers`; no contract changes.

- [x] Write isolated filesystem tests for clean status, forced push preservation, canonical name collisions, empty managed lists, and pull exclusion.
- [x] Run `bun test test/__tests__/codex-internal-mcp.test.ts`; four failures expose the current ownership bug.
- [x] Apply adapter guards:

```ts
const CODEX_OWNED_MCP_SERVERS = new Set(['node_repl', 'computer-use']);
// Skip these names in parsing and canonical selection.
// Initialize rendered mcp_servers from existing entries matching this set.
```

- [x] Document Codex MCP ownership in `docs/architecture.md` and `docs/design/sync-spec.md`.
- [x] Run focused adapter and MCP integration tests (33 pass), `bun run test` (689 pass; existing public-history scan fails), and `git diff --check` (clean).
- [x] Run `bun src/cli/index.ts status` against installed configs without writing them; reports `220 up to date`.
- [x] Commit with `committer "fix(codex): preserve app-owned MCP tools"` and the five owned paths.

## Evidence

- Installed commands point to Codex app binaries. A direct assertion against `parseExistingMCPServerNames` failed with `node_repl is treated as a managed MCP server`.
- Simple deterministic bug: broader hypothesis ranking and temporary instrumentation are unnecessary.
- Public-history scan also fails on unchanged main with `history-sensitive-content: git history`.
