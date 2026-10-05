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
- Own `scripts/sessions`, `scripts/session_archive.py`, `scripts/__tests__/sessions-opencode.test.ts`, `docs/operations/archive-export.md`, canonical `configs/instructions/TOOLS.md` sessions documentation, this plan, and workflows README documentation only.
- Reuse clean repair worktrees; preserve unrelated main-checkout skill edits. Commit locally; no push.

---

### Task 1: Local-only exporter

**Files:** `scripts/sessions`, `scripts/session_archive.py`, `scripts/__tests__/sessions-opencode.test.ts`, `docs/operations/archive-export.md`.

**Interface:** Existing `sessions export --no-index`, `sessions search`, `sessions stats --json`, and `sessions --help` commands.

- [x] Add CLI assertions after real fixture export: `expect(existsSync(join(home, "Vaults"))).toBe(false)`; stats must still contain local exported counts.
- [x] Run `bun test scripts/__tests__/sessions-opencode.test.ts`; cloud-folder assertion must fail before implementation.
- [x] Replace mirror writes with `atomic_write(path, text)`; remove mirror helper/imports, retry loop and `mirrorPending`; discard old `mirror_pending` state via `state.pop("mirror_pending", None)`.
- [x] Make stats use `ARCHIVE_DIR.exists()` while retaining JSON `vault` key. Help names local archive and actual FTS/QMD paths. Update archive-export docs for local-only behavior.
- [x] Run `bun test scripts/__tests__`, `ruff check scripts/sessions scripts/session_archive.py scripts/sessions_opencode.py`, and `git diff --check`; commit owned files with `committer`.

### Task 2: Preserve and switch live storage

**Files:** Machine-local cloud preservation tree and receipt under `~/.local/share/sessions/`; workflows `README.md`.

**Interface:** Existing cloud symlink, full indexed `wf run sessions-export`, `sessions search`, `sessions find`, QMD status.

- [ ] Pause only the interval exporter if idle. Copy the complete former cloud tree to local legacy storage with bounded reads; write SHA-256 receipt covering every source file. Any failure blocks removal.
- [ ] Preserve cloud-only session identities in the indexed local archive; keep redundant snapshots outside QMD. Verify copied bytes and unchanged source inventory.
- [x] Integrate committed exporter changes locally. Update workflows README to local-only storage.
- [ ] Use `trash` on the exact verified cloud directory and old symlink. Leave local canonical archive and source databases intact.
- [ ] Run full indexed `wf run sessions-export`; check complete health and keyword/meaning search. Reload interval exporter regardless of validation result.
- [x] Record results and remaining blockers here and in Memory; commit documentation locally. Complete receipt remains blocked on cloud reads.

## Evidence

- Red: CLI cloud-directory assertion failed against mirror implementation.
- Green: 13 scripts tests pass, 88 assertions; Ruff and diff checks pass.
- Interval exporter paused while idle. Existing cloud tree: 20,776 files, 234,270,388 logical bytes; copy into local `legacy-icloud` uses bounded 240-second ditto and preserves originals on failure.
- Local exporter commit `dbb42f4` integrated into main; workflow README commit `7afa9c6` integrated locally. Unrelated skill edits preserved.
- Live full indexed local-only export passed in 2m32s at 2026-10-05T08:54:46Z, all three sources, indexed/fullCoverage true, zero failures. Search/find returned results. Half-hour exporter restored.
- Initial whole-tree copy stalled after 157 files and timed out safely. Apple's documented `FileManager.startDownloadingUbiquitousItem(at:)` requested Sessions download. Bounded workers now copy/read each file independently with checksum verification; cloud originals remain intact.
- Per-file attempt also failed: 487 verified reads; 8 workers stopped after 180 seconds with many cloud read timeouts. Full preservation, cloud-only import, checksum receipt and cloud removal remain blocked. No originals removed. Stop recovery here; user Finder **Download Now** on the original Sessions folder is the next step before resuming verification.
- Canonical TOOLS sessions paths corrected. Live export/search passed and interval scheduling is restored; cloud migration remains explicitly incomplete.
- Partial local preservation currently contains 489 files. CLI/cloud-write switch is complete and verified; run final indexed export again after importing the remaining former cloud history.
- User requested Finder download and reported done. Resumed bounded copy; initial macOS inventory still marked 19,852/20,776 files cloud-only, so request completion differs from actual download completion. Originals retained until receipt validates.
- Receipt script checked with real temporary files: incomplete copy and corrupt bytes fail; valid copy adds only the cloud-only transcript to QMD archive, preserving originals. Removal script checks exact cloud target, unchanged inventory, every preserved hash and imported hash before `trash`.
- Resumed attempt stopped safely: 1,147 verified reads, local preservation now 1,149 files. Finder download is progressing (cloud-only flags fell from 19,852 to 19,151), but 19,151 files remain unavailable locally. Cloud folder/symlink intact, interval exporter loaded, archive health green. Wait for Finder download completion before next copy attempt; no further automatic retries.
- User explicitly requested active monitoring. Apple resource probe reproduces root cause: Sessions folder status Current, contained dataless files NotDownloaded with downloadRequested/downloading false. Directory request did not fetch all children. Individual file requests changed sampled status to Current.
- Monitoring now requests each remaining file in batches, copies only readable files, verifies hashes, and publishes `~/.local/share/sessions/cloud-migration-progress.json`. It stops after five minutes without copy progress, retaining originals. On complete preservation it verifies/imports, runs full indexed export, removes exact verified cloud tree/symlink via trash, and restores interval exporter. Log: approved temp `session-migration-monitor.log`; shell `sh_10b54d6c2001XmtUUpQ64MoJlI`.
- Finder reveal/open sent for exact `/Users/m332023/Library/Mobile Documents/iCloud~md~obsidian/Documents/Sessions`; AppleScript reports no Finder windows, so visibility in user UI is unconfirmed. Peekaboo unavailable; filesystem and Apple Foundation resource probes provide download evidence.
- Initial active monitor reached 1,768 verified / 3,584 download requests. Hydration updates placeholder timestamps; monitor corrected to compare the hydrated file before/after its read rather than pre-download placeholder metadata. Owned monitor restarted as `sh_10b561025001bkAW2Z0WFadEmj`, same progress path/log and automatic completion chain.
- Active file requests preserved 20,423/20,776 files (231,107,938 bytes), then stopped after five minutes without progress on last 353 OpenCode files. macOS repeatedly re-evicts already downloaded data under disk pressure (22 GiB free); cloud flags are not remaining-to-preserve counts. All old cloud originals remain intact.
- Targeted 353 requests succeeded; sampled remaining files became Current. Monitor now persists per-file checksum/time proof in `cloud-migration-checksums.json`, resumes verified files without rehydrating them, retries outstanding requests after 60s, and prioritizes missing copies. Restart `sh_10b758032001hGS9RxUN3GHUmz`, log `session-migration-monitor-resume.log`; final verifier accepts cached source proof only with unchanged size/mtime and matching local hash.
