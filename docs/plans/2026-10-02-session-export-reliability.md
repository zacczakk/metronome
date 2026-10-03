# Session Export Reliability Implementation Plan

> **For agentic workers:** Execute task-by-task. CLI regression and live nightly validation approved.

**Goal:** Make archive export collision-safe, recoverable, and honest about failures.

**Architecture:** Write session-ID filenames by atomic replacement; persist successful per-item progress even when another item fails. Keep a filesystem lock and publish archive health only after export and indexes succeed.

**Tech Stack:** Python standard library; existing Bun CLI tests.

## Global Constraints

- Owned: `scripts/sessions`, `scripts/session_archive.py`, `scripts/__tests__/sessions-opencode.test.ts`, sessions docs.
- No dependencies, no source DB edits, no deleting existing archives, no push.
- Full workflow plan: workflows `docs/plans/2026-10-02-nightly-reliability.md`.

## Tasks

- [x] Regression: two V2 sessions with the same date/title remain separate and incremental export updates the correct file.
- [x] Run `bun test scripts/__tests__/sessions-opencode.test.ts`; observe collision failure.
- [x] Implement atomic writes, unique filenames, lock, per-item checkpoints/failures, honest indexing exit, and successful export metadata.
- [x] Test blocked output directory leaves existing file intact while later sessions export; retry remains nonzero.
- [x] Run impacted CLI tests and Python checks, update docs, commit using `committer`.
- [ ] Integrate locally after checking root changes; live export; return to workflow repair.
