# Rename ~/Repos/merck → ~/Repos/merckgroup Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rename the local workspace directory `~/Repos/merck` to `~/Repos/merckgroup` with zero data loss and all downstream references updated.

**Architecture:** Atomic rename first, then path-reference cleanup in docs and vault notes. Maestro/conda envs are intentionally skipped (will be rebuilt on demand). No code changes required — this is a pure filesystem + metadata migration.

**Tech Stack:** macOS `mv`, `sed`, Obsidian vault, shell.

---

## Pre-flight

- [ ] Confirm no active processes are reading from `~/Repos/merck/` (close IDE tabs, stop dev servers, etc.)
- [ ] Confirm no git worktrees are checked out under `~/Repos/merck/` (each sub-repo: `git worktree list`)

---

### Task 1: Rename the directory

**Files:**
- `~/Repos/merck/` → `~/Repos/merckgroup/`

- [ ] **Step 1: Rename**

```bash
mv ~/Repos/merck ~/Repos/merckgroup
```

- [ ] **Step 2: Verify**

```bash
ls ~/Repos/merckgroup
# Expected: same contents as before
ls ~/Repos/merck 2>&1
# Expected: "No such file or directory"
```

- [ ] **Step 3: Spot-check a git sub-repo**

```bash
git -C ~/Repos/merckgroup/tux status
# Expected: clean working tree (not "fatal: not a git repository")
```

---

### Task 2: Update tux planning docs

These are historical, won't break anything, but will mislead future agents. Bulk update.

**Files:**
- Modify: `~/Repos/merckgroup/tux/.planning/` — all `.md` files containing `Repos/merck/`

- [ ] **Step 1: Preview matches**

```bash
grep -rl "Repos/merck/" ~/Repos/merckgroup/tux/.planning/
```

- [ ] **Step 2: Bulk replace**

```bash
find ~/Repos/merckgroup/tux/.planning/ -name "*.md" -exec \
  sed -i '' 's|Repos/merck/|Repos/merckgroup/|g' {} +
```

- [ ] **Step 3: Verify no residual hits**

```bash
grep -r "Repos/merck/" ~/Repos/merckgroup/tux/.planning/
# Expected: no output
```

---

### Task 3: Update Memory vault notes

At least five notes reference the old path (confirmed: `sessions/2026-03-19-tux-emd-sso-checkpoint.md`, `projects/liquid-carbon-design-system.md`, `projects/verion-dotenvx-plan.md` + potentially others). Bulk replace covers all. Update so future agent sessions don't chase stale paths.

**Files:**
- Modify: all `~/Vaults/Memory/**/*.md` files containing `Repos/merck/`

- [ ] **Step 1: Preview all vault hits**

```bash
grep -rn "Repos/merck/" ~/Vaults/Memory/
```

- [ ] **Step 2: Bulk replace across vault**

```bash
find ~/Vaults/Memory/ -name "*.md" -exec \
  sed -i '' 's|Repos/merck/|Repos/merckgroup/|g' {} +
```

- [ ] **Step 3: Verify**

```bash
grep -r "Repos/merck/" ~/Vaults/Memory/
# Expected: no output
```

---

### Task 4: Update MEMORY.md project index (if stale)

`MEMORY.md` is the agent-facing index. Check if it references the old path.

**Files:**
- Modify: `~/Vaults/Memory/MEMORY.md` (only if hits found)

- [ ] **Step 1: Check**

```bash
grep "Repos/merck" ~/Vaults/Memory/MEMORY.md
```

- [ ] **Step 2: Fix if needed**

```bash
sed -i '' 's|Repos/merck/|Repos/merckgroup/|g' ~/Vaults/Memory/MEMORY.md
```

---

### Task 5: Verify token-tracker log (no action, confirm)

The OpenCode token log is passive history — no tooling reads it back. Confirm and skip.

- [ ] **Step 1: Confirm log location**

```bash
wc -l ~/.config/opencode/logs/token-tracker/tokens.jsonl
# Expected: >0 lines (passive data file)
```

- [ ] **Step 2: Accept as stale history — no update needed**

---

### Task 6: Smoke test

- [ ] **Step 1: Verify key sub-repos are intact**

```bash
for repo in tux verion liquidcn esgenius-python-functions; do
  echo "=== $repo ==="
  git -C ~/Repos/merckgroup/$repo status 2>&1 | head -3
done
```

Expected: each prints branch + working tree status (not fatal errors).

- [ ] **Step 2: Confirm metronome, shell, LaunchAgents are unaffected**

```bash
grep -rE "Repos/merck($|[^g])" ~/Repos/zacczakk/metronome/ ~/.zshrc ~/Library/LaunchAgents/ 2>/dev/null
# Expected: no output (merckgroup.com domain hits are fine; regex handles bare "merck" at EOL)
```

- [ ] **Step 3: Write session note**

Use `sessions` CLI or create `~/Vaults/Memory/sessions/2026-03-20-rename-merck-merckgroup.md` capturing:
- rename complete
- Maestro envs intentionally left stale (rebuild on demand)
- all doc/vault refs updated

---

## Out of Scope (intentional)

- **Maestro/conda envs** (`ftudd/.maestro/`, `esgenius-python-functions/.maestro/`, `Code-repository-Python-Pipeline/.maestro/`) — shebangs and binary prefixes are baked. Rebuild on demand when those envs are needed again.
- **OpenCode token-tracker log** — passive history, not worth updating.
