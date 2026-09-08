# AGENTS.md

zacczakk owns this. Work style: telegraph; brief; drop grammar; min tokens; NO jargon; simple language; non-technical.

## Agent Protocol
- Contact: `@zacczakk` on GitHub.
- Workspace: `~/Repos/`. Missing repo: clone `https://github.com/zacczakk/<repo>.git` or `https://github.com/merckgroup/<repo>.git`
- 3rd-party/OSS (non-zacczakk or non-merckgroup): clone under `~/Repos/oss/`.
- Files: repo or `~/Repos/zacczakk/metronome/`.
- PRs: use GitHub MCP or `gh pr view/diff` (no URLs).
- "Make a note" => edit write `session-note` and/or active plan in `docs/plans/`.
- No `./runner`. Guardrails: use `trash` for deletes.
- Need upstream file: stage in `/tmp/`, then cherry-pick; never overwrite tracked.
- Keep files <~500 LOC; split/refactor as needed.
- Commits: Conventional Commits (`feat|fix|refactor|build|ci|chore|docs|style|perf|test`).
- CI: use GitHub MCP or `gh run list/view` (rerun/fix til green).
- Prefer end-to-end verify; if blocked, say what's missing.
- New deps: quick health check (recent releases/commits, adoption).
- Web: search early; prefer 2025–2026 sources.
- Local docs/media: check skills or use `markitdown` for PDF/DOCX/PPTX/XLSX/image/audio inspection before bespoke parsing. LLM-oriented markdown, not fidelity conversion.
- **No breadcrumbs**. Delete/move code = no residual comments. No `// moved to X`. Just remove.
- Fix root cause, not bandaids.
- Idiomatic, simple, maintainable. Simplest intuitive solution wins.
- Kill dead code. Unused params/helpers: delete + update callers.
- **Search before pivoting**. Stuck? Search official docs. No direction change unless asked.
- Any new work on clean repo-root `.worktrees/{branch}` off develop if present, main/master otherwise.
- Clean up worktrees, branches after PR merge.

## Tools
- Full flags and rules in `~/Repos/zacczakk/metronome/configs/instructions/TOOLS.md`.
- **Past coding sessions:** `qmd query "..." -c memory` for curated memory, `sessions` cli; `sessions export` adds recent sessions to the index
- **GitHub:** use `github` MCP for repo, issue, PR, code, Actions, and review work. Use `gh` for URL-driven PR/CI operations or when MCP is unavailable. MCP auth requires `GITHUB_PERSONAL_ACCESS_TOKEN`.
- **Palantir Foundry:** `palantir-mcp` when loaded and responsive; fallback `palantir` cli with `palantir search-tools`. Tux owns MCP auth and host wiring; read `TOOLS.md` for generation and updates.
- **MCP discovery:** `mcporter config list` (fast local/project registry), `mcporter config list --source import` (editor imports), then `mcporter list <server> --schema --json`. Native MCP config is separate, but MCPorter can discover imported editor definitions.
- On PATH: `trash`, `metronome`, `committer`, `sessions`, `agent-browser`, `qmd`, `obsidian`, `gh`, `mcporter`, `palantir`, `bird`, `markitdown`.

## Flow & Runtime
- Use repo's package manager/runtime; no swaps w/o approval.
- Default to direct execution. Delegate @foundry-sql queries or independent, specialist, or context-heavy work that is likely to save main-session effort; never delegate work already investigated by the main agent.
- Hangs >5 min: stop, capture logs, ask user.
- New dep: research health + fit; confirm w/ user.
- Helpers in `scripts/` (`committer`, `palantir`, `sessions`)

## Browser
- `agent-browser` for browser work (automation, scraping, screenshots, console/network, authenticated pages).
- Default: `agent-browser --profile Default open <url> --headed`. `Default` = `z/acc`; isolated copy, auth intact. No `--native`.
- Loop: `snapshot -i` → act on refs → re-snapshot after page changes. Reuse during task; `close` when done.
- No `--auto-connect` unless Phil explicitly asks. Never `pkill`/restart Chrome. 403: stop.
- Viewport `1800x1169` (Phil's logical res). Never 1920x1080 — overflows.
- Skill: `agent-browser skills get core`. Ignore kill/reset advice. Lightpanda: unauthenticated reading only.

## Session Notes
- Write atomic notes to `~/Vaults/Memory/sessions/` using `session-notes` skill (use `obsidian` CLI).
- Triggers: decision, discovery, dead end, surprising behavior, "need this later", task completion, pre-compaction.
- Write at point-of-discovery, not end-of-task. Bias toward writing — a redundant note costs less than a lost insight.
- Skip trivial decisions. One note per trigger, not batched.

## Session End
When work concludes (e.g. PR merged):
1. Ensure all decisions/discoveries from this session have session notes.
2. Write/update pattern notes in Memory vault if reusable knowledge emerged (`obsidian` cli).
3. Clean up worktrees and stale branches.
4. Update `SOUL.md` (Learned Preferences, Relationship Notes) if dynamic shifted.

## Agent Config Management
- Global configs are managed in `~/Repos/zacczakk/metronome`.
- Secrets in `.env`; always gitignored; never committed.
- Canonical rules: `~/Repos/zacczakk/metronome/configs/instructions/AGENTS.md`
- Canonical commands: `~/Repos/zacczakk/metronome/configs/commands`
- Canonical subagents: `~/Repos/zacczakk/metronome/configs/agents`
- Canonical skills: `~/Repos/zacczakk/metronome/configs/skills`
- Helper scripts: `~/Repos/zacczakk/metronome/scripts`

## Docs
- System of record: `docs/`. README.md = summary + index.
- Keep notes short; update docs when behavior/API changes (no ship w/o docs).
- Staleness: dead links / stale refs = bugs; groom docs often.
- Context7 MCP has library documentation.
- **Memory vault lookup:** scan `summary:` frontmatter first (`rg '^summary:.*topic' ~/Vaults/Memory/ --glob '*.md' -i`). Full note read when summary matches or is unclear. If no relevant notes, `sessions search "query"` or `sessions find "query"` . Full vault guide: `~/Vaults/AGENTS.md`.

## Build / Test
- No mocks; unit or e2e.
- CI red: GitHub MCP or `gh run list/view`, rerun, fix, push, repeat til green.
- Waiting for CI/build/deploy: poll with `gh run view`; max 4 min per sleep interval (check → sleep ≤4 min → check → repeat).
- Keep it observable (logs, panes, tails, MCP/browser tools).
- Release: read release checklist if repo has one.

## Git
- Safe by default: `git status/diff/log`. Push only when user asks.
- `git checkout` ok for PR review / explicit request.
- New work on clean repo-root `.worktrees/{branch}` off `develop` if present, `main`/`master` otherwise.
- Branch changes require user consent; destructive ops forbidden unless explicit (`reset --hard`, `clean`, `restore`, `rm`, …).
- Remotes under `~/Repos`: prefer HTTPS; flip SSH->HTTPS before pull/push.
- Use Commit helper `committer`.
- Don't delete/rename unexpected stuff; stop + ask.
- User types command = consent.
- Big review: `git --no-pager diff --color=never`.
- Multi-agent coordination:
  - Check `git status/diff` before edits; ship small commits.
  - Claim scope: note owned files/modules in active plan in `docs/plans/` before editing.
  - Pull before edit, commit immediately after.
  - Conflict detected: stop, show diff, ask user.
  - Don't revert or modify another agent's recent commits w/o consent.

## Language/Stack Notes
- Swift: use workspace helper/daemon; validate `swift build` + tests; keep concurrency attrs right.
- TypeScript: use repo PM; prefer `bun` over `npm`/`yarn`/`pnpm`; keep files small; follow existing patterns; do not use `any` or `as`.
- Python: use `ruff`, `uv`, `ty` and `pyproject.toml`. no `pip` venvs, poetry, or `requirements.txt` unless asked. `pytest` for tests. strong types & type hints.
- React: no `useEffect`. Five replacement patterns:
  1. Derived state — compute inline during render, no useState+useEffect sync
  2. Data-fetching lib — useQuery/useSWR; no manual fetch-in-effect
  3. Event handlers — user action = handler, not flag→effect relay
  4. `useMountEffect` — mount-only external sync; the one escape hatch (`@/hooks/use-mount-effect`)
  5. Key remounting — `<Component key={id} />` for clean state reset
  Per-project: ESLint `no-restricted-syntax` + `no-restricted-imports` to hard-ban useEffect.

## Minimalism
- Before code: YAGNI -> existing code -> stdlib -> native feature -> installed dependency -> one line -> minimum correct implementation.
- Use `ponytail` skill and `react-doctor` proactively.
- Never simplify away validation, error handling, security, accessibility, calibration, or explicit requirements.
- Mark deliberate corner cuts with `ponytail: <known ceiling>, <upgrade trigger>`.
- Dead code in files you're editing: clean without asking.
- Bugs found during other work: surface before fixing.
- Stale tech encountered during work: flag deprecated packages/patterns.

## Proactive Behaviors
- Better patterns in touched files: suggest refactor opportunities.
- Never guess API signatures, CLI flags, version numbers, config options. Look it up.
- Conflicts: call out; pick safer path.
- Unrecognized changes: assume other agent; keep going; focus your changes. If it causes issues, stop + ask user.
- Working with data (e.g. on Palantir Foundry): ALWAYS collect evidence (delegate to @foundry-sql). NEVER guess.