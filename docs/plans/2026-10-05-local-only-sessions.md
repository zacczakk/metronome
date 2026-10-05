---
summary: "Stop session cloud writes, preserve existing cloud history locally, and validate unchanged CLI search and scheduled export."
read_when:
  - "Moving sessions archives off iCloud"
---

# Local-only Sessions Implementation Plan

> **For agentic workers:** Execute this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Keep all session history local, preserving every existing cloud file before removing the iCloud folder.

**Architecture:** Existing atomic exports and QMD continue using `~/.local/share/sessions/archive/`. Remove the mirror writer and retry queue. Preserve the former cloud tree in local legacy storage; retain cloud-only transcripts in the search archive without indexing redundant copies.

**Tech Stack:** Python standard library, Bun CLI regression tests, QMD, macOS launchd/trash.

## Global Constraints

- Preserve original chats and all former cloud files; checksum proof before cloud removal.
- Keep CLI commands and JSON stats keys compatible.
- Existing real export/search CLI seam is user-approved; no mocks or dependencies.
- Own `scripts/sessions`, `scripts/session_archive.py`, `scripts/__tests__/sessions-opencode.test.ts`, `docs/operations/archive-export.md`, this plan, and workflows README documentation only.
- Reuse clean repair worktrees; preserve unrelated main-checkout skill edits. Commit locally; no push.

---

### Task 1: Local-only exporter

**Files:** `scripts/sessions`, `scripts/session_archive.py`, `scripts/__tests__/sessions-opencode.test.ts`, `docs/operations/archive-export.md`.

**Interface:** Existing `sessions export --no-index`, `sessions search`, `sessions stats --json`, and `sessions --help` commands.

- [x] Add CLI assertions after real fixture export: `expect(existsSync(join(home, "Vaults"))).toBe(false)`; stats must still contain local exported counts.
- [x] Run `bun test scripts/__tests__/sessions-opencode.test.ts`; cloud-folder assertion must fail before implementation.
- [x] Replace mirror writes with `atomic_write(path, text)`; remove mirror helper/imports, retry loop and `mirrorPending`; discard old `mirror_pending` state via `state.pop("mirror_pending", None)`.
- [x] Make stats use `ARCHIVE_DIR.exists()` while retaining JSON `vault` key. Help names local archive and actual FTS/QMD paths. Update archive-export docs for local-only behavior.
- [ ] Run `bun test scripts/__tests__`, `ruff check scripts/sessions scripts/session_archive.py scripts/sessions_opencode.py`, and `git diff --check`; commit owned files with `committer`.

### Task 2: Preserve and switch live storage

**Files:** Machine-local cloud preservation tree and receipt under `~/.local/share/sessions/`; workflows `README.md`.

**Interface:** Existing cloud symlink, full indexed `wf run sessions-export`, `sessions search`, `sessions find`, QMD status.

- [ ] Pause only the interval exporter if idle. Copy the complete former cloud tree to local legacy storage with bounded reads; write SHA-256 receipt covering every source file. Any failure blocks removal.
- [ ] Preserve cloud-only session identities in the indexed local archive; keep redundant snapshots outside QMD. Verify copied bytes and unchanged source inventory.
- [ ] Integrate committed exporter changes locally. Update workflows README to local-only storage.
- [ ] Use `trash` on the exact verified cloud directory and old symlink. Leave local canonical archive and source databases intact.
- [ ] Run full indexed `wf run sessions-export`; check complete health and keyword/meaning search. Reload interval exporter regardless of validation result.
- [ ] Record receipt, results, and remaining blockers here and in Memory; commit documentation locally.

## Evidence

- Red: CLI cloud-directory assertion failed against mirror implementation.
- Green: 13 scripts tests pass, 88 assertions; Ruff and diff checks pass.
- Interval exporter paused while idle. Existing cloud tree: 20,776 files, 234,270,388 logical bytes; copy into local `legacy-icloud` uses bounded 240-second ditto and preserves originals on failure.
