---
summary: "Switch execute to Tux GPT-6.1 Sol with high reasoning; verify every Sol subagent uses 6.1."
read_when:
  - "Changing execute model routing"
---

# Execute model change

Owned files: `configs/agents/execute.md`, `src/cli/__tests__/canonical.test.ts`, `docs/subagent.md`, this plan.

- [x] Update routing check and confirm failure.
- [x] Set model `tux/gpt-6-sol`, effort `high`; preserve prompt and permissions.
- [x] Verify routing and renderer tests; sync OpenCode agents and check deployed variant.

Verification: 51 tests pass; `git diff --check` clean. OpenCode agent drift check clean. Deployed `agent-execute` variant has `reasoningEffort: high`, `textVerbosity: low`.

## GPT-6.1 correction

Work directly on `main` at user request; same owned files.

- [x] Require every Sol subagent to use GPT-6.1 Sol; confirm failing routing test.
- [x] Correct execute to `tux/gpt-6.1-sol`, preserving high effort and low verbosity.
- [x] Sync OpenCode agents; check every installed Sol route and reasoning setting.

Correction verification: 690 tests pass; all four installed Sol agents use 6.1. Execute uses Tux/high; Foundry SQL, release, research retain their existing provider and effort. Agent drift check clean.
