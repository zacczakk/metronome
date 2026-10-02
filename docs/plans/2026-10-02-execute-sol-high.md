---
summary: "Switch execute to Tux GPT-6 Sol with high reasoning."
read_when:
  - "Changing execute model routing"
---

# Execute model change

Owned files: `configs/agents/execute.md`, `src/cli/__tests__/canonical.test.ts`, `docs/subagent.md`, this plan.

- [x] Update routing check and confirm failure.
- [x] Set model `tux/gpt-6-sol`, effort `high`; preserve prompt and permissions.
- [x] Verify routing and renderer tests; sync OpenCode agents and check deployed variant.

Verification: 51 tests pass; `git diff --check` clean. OpenCode agent drift check clean. Deployed `agent-execute` variant has `reasoningEffort: high`, `textVerbosity: low`.
