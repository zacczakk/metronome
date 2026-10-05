---
summary: "Session export uses unique atomic files, checkpoints partial progress, and publishes archive health for safe workflow retention."
read_when:
  - "Diagnosing session export or Memory session cleanup"
---

# Session archive export

`sessions export` reads OpenCode V2, Claude, and Codex source history into `~/.local/share/sessions/archive/`. QMD's `sessions` collection indexes that local directory. Archives are local-only; exports never access iCloud. Original source chats remain untouched.

- New filenames include the complete session ID; identical titles remain separate.
- Writes use a same-folder temporary file, flush, and atomic replacement.
- An exclusive local file lock prevents concurrent exporters.
- Unwritable items are reported and retried next time. Later items still export; successful progress is checkpointed every 25 OpenCode/Claude items and after each source.
- Export and indexing failures return nonzero. `sessions index` also returns nonzero when QMD fails.
- `~/.local/share/sessions/archive-health.json` records `completedAt`, `sources`, `indexed`, and `failures`. Only a complete all-source export with indexes refreshed can authorize automated Memory session cleanup.
- `--no-index` supports diagnostics and tests, and produces `indexed: false`.
- QMD refresh/embed each have a four-minute timeout and return failures honestly. The installed QMD SDK refreshes only the local `sessions` collection; unrelated Memory/iCloud files cannot block archive export. Embedding uses already-indexed database content.
- Health lists only sources actually scanned. Missing or unreadable source paths return failure and never authorize cleanup.
- Date-filtered or source-filtered exports record `fullCoverage: false` and cannot refresh full archive health. Malformed JSON/JSONL records are reported as failures and are never checkpointed as exported.
- Migration target for former cloud files: `~/.local/share/sessions/legacy-icloud/`, outside the search corpus to avoid duplicate snapshots. Import cloud-only session identities into the indexed local archive after preservation. Cloud removal requires a complete checksum receipt; interrupted downloads retain the cloud originals.
- Existing mirror queues are discarded on export; no further cloud writes or retries occur.
- Existing export checkpoints are retained during migration; a missing local archive file is regenerated even when its source watermark is unchanged.
- `sessions list`, `latest`, and `read` still query source chats directly. `search` uses local FTS and `find` uses local QMD. `stats --json` retains its `vault` key for compatibility but counts local archive files.

Verification: `bun test scripts/__tests__/sessions-opencode.test.ts scripts/__tests__/sessions-codex.test.ts`.
