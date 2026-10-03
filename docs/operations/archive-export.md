---
summary: "Session export uses unique atomic files, checkpoints partial progress, and publishes archive health for safe workflow retention."
read_when:
  - "Diagnosing session export or Memory session cleanup"
---

# Session archive export

`sessions export` reads OpenCode V2, Claude, and Codex source history. Existing source data and older archive files are preserved.

- New filenames include the complete session ID; identical titles remain separate.
- Writes use a same-folder temporary file, flush, and atomic replacement. Existing iCloud placeholders are never opened for truncation.
- An exclusive local file lock prevents concurrent exporters.
- Unwritable items are reported and retried next time. Later items still export; successful progress is checkpointed every 25 OpenCode/Claude items and after each source.
- Export and indexing failures return nonzero. `sessions index` also returns nonzero when QMD fails.
- `~/.local/share/sessions/archive-health.json` records `completedAt`, `sources`, `indexed`, and `failures`. Only a complete all-source export with indexes refreshed can authorize automated Memory session cleanup.
- `--no-index` supports diagnostics and tests, and produces `indexed: false`.
- QMD update/embed each have a four-minute timeout; stalled iCloud reads fail visibly and leave cleanup blocked.
- Health lists only sources actually scanned. Missing or unreadable source paths return failure and never authorize cleanup.

Verification: `bun test scripts/__tests__/sessions-opencode.test.ts scripts/__tests__/sessions-codex.test.ts`.
