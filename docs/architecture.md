---
summary: Domain map of the agents repo — modules, layers, dependency direction.
read_when:
  - First time navigating repo structure
  - Adding new config targets or scripts
---

# Architecture

## Layers

- **configs/** — Canonical source for all CLI artifacts.
  - `commands/` — Slash commands (8 .md files)
  - `agents/` — Subagent definitions (10 .md files)
  - `skills/` — Skill bundles (28 active directories)
  - `opencode/v2/plugins/` — profile-owned native V2 plugins
  - `opencode/themes/` — OpenCode themes, pushed with settings to `~/.config/opencode/themes/`
  - `mcp/` — MCP server definitions (9 .json files)
  - `settings/` — Per-CLI settings (4 .json files)
  - `hooks/` — Hook scripts (see [Hooks](#hooks) below)
  - `instructions/AGENTS.md` — Unified agent operating system (ground truth)
  - `instructions/TOOLS.md` — Tool-use reference
- **scripts/** — Helper tools on PATH (committer, ask-model, sessions, sessions_opencode.py, docs-list.ts, sync-upstream-skills.ts)
- **bin/** — Compiled binaries on PATH (4 MCP CLI binaries: context7, palantir, shadcn, tavily; plus docs-list)
- **docs/** — Operational documentation, plans, design decisions
- **backups/** — Pre-sync backups (gitignored)

## Data Flow

```
configs/  ──→  metronome push  ──→  ~/.claude/
                                    ~/.config/opencode/
                                    ~/.gemini/antigravity-cli/
                                    ~/.codex/
```

## Dependency Direction

- CLI configs depend on `configs/` (never the reverse)
- `src/adapters/` implement per-CLI format transforms (spec: `docs/design/sync-spec.md`)
- `configs/instructions/AGENTS.md` is consumed by all CLIs at runtime (injected as instructions)
- `scripts/` are standalone; no imports between them
- `bin/` contains Bun-compiled binaries; both `scripts/` and `bin/` are on PATH. Repo helpers such as `docs-list` resolve caller-owned files from `process.cwd()`, not from Bun's compiled `/$bunfs` module path.

## Hooks

Hook scripts live in `configs/hooks/` and are referenced by absolute path from each CLI's hook registration. The scripts themselves are not copied by `metronome push`; only per-CLI hook registrations are synced where supported.

### Why absolute paths, not deployment

- Edits take effect immediately — no sync step needed.
- Hook config structures differ per CLI (Claude Code uses nested JSON, OpenCode uses plugin events).
- Only a handful of hooks; full deployment infra isn't warranted.

### Claude Code hooks

Registered in `~/.claude/settings.json` under the `hooks` key. Canonical source: `configs/settings/claude.json`. Metronome's deep-merge preserves any user-added hooks alongside managed ones.

| Script | Event | Managed by | Purpose |
|--------|-------|------------|---------|
| `vault-context-loader.js` | `SessionStart` | metronome | Injects IDENTITY/SOUL/USER/MEMORY into context |
| context-mode plugin | `PreToolUse`, `PostToolUse`, `PreCompact`, `SessionStart` | context-mode marketplace | Tool-output sandboxing, session continuity, `ctx_*` MCP tools. Installed via `claude plugin install context-mode@context-mode --scope user`. Canonical: `enabledPlugins` in `configs/settings/claude.json`. |

Hook scripts receive JSON on stdin (session_id, source, cwd, etc.) and communicate via exit codes + stdout JSON. See [Claude Code hooks reference](https://docs.anthropic.com/en/docs/claude-code/hooks).

### OpenCode plugins

OpenCode uses a **plugin system** instead of shell hooks. Local plugins are auto-loaded from `~/.config/opencode/plugins/`. See [OpenCode plugins docs](https://opencode.ai/v2/docs/plugins/).

| Plugin | Event(s) | Purpose |
|--------|----------|---------|
| `memory-vault-advisor.ts` | `tool.execute.after` | Advisory reminder to check Memory vault before exploratory searches. |
| `read-guard.ts` | `tool.execute.after`, `tool.execute.before` | Blocks edits to existing files that have not been read in the session. |
| `validate-commit.ts` | `tool.execute.before` | Enforces Conventional Commit messages for `git commit`. |

`configs/opencode/v2/plugins/` is the sole Metronome OpenCode plugin source.
The profile service deploys these files to `~/.config/opencode/plugins/` and
generic sync does not copy plugin files.

`configs/opencode/themes/*.json` are copied verbatim to
`~/.config/opencode/themes/` by `metronome push --type settings`. The `rex-*`
themes are generated from the Rex app's bundled palettes: run
`python3 scripts/rex-opencode-themes.py`, then push. The generator raises
accent, status, and syntax colors to a 4.5:1 contrast ratio against the
background and dialog surfaces. Removing a canonical theme leaves the installed
file in place.

The profile service backs up `opencode.json`, agents, plugin roots, CLI settings,
package manifests, and lockfiles before writing. Unknown plugins and unowned
providers are preserved. Native `providers` and legacy `provider` entries retain
their own shapes; canonical definitions replace same-name entries across shapes.
Profile activation folds mixed
MCP entries into the native shape and preserves noncanonical servers. The
stale `foundry` duplicate and retired `uptimize-*` providers are removed from
the projection.

#### Tux model metadata

Tux owns `providers.tux` in `~/.config/opencode/opencode.json` and rewrites it
from its live model cards. `configs/settings/opencode.json` mirrors that block
(16 models from Tux 0.13.0-beta.38, 2026-10-19), captured in
`test/fixtures/tux-model-metadata.json`, so pushes do not fight Tux. Refresh
after Tux updates its models:

```sh
bun scripts/sync-tux-model-metadata.ts
bun scripts/sync-tux-model-metadata.ts --check
bun test src/cli/__tests__/tux-model-parity.test.ts
```

The script reads the installed OpenCode config (or a path argument), drops
generated `agent-*` variants, and records the installed Tux version and
timestamp; `--check` verifies canonical settings and the fixture still match.

| Models | Context | Output |
| --- | ---: | ---: |
| All six GPT models | 1,050,000 | 128,000 |
| Opus 4.6/5.5, Sonnet 4.6/5/5.5, Haiku 5.5 | 1,000,000 | 128,000 |
| Sonnet 4.5, Haiku 4.5 | 200,000 | 64,000 |
| DeepSeek V4 Pro | 1,000,000 | 384,000 |
| DeepSeek V4.1 Flash | 327,680 | 32,768 |

Costs retain all six GPT tiers at exactly 272,000 input tokens. Prices are USD per million
tokens for Agentic, not a claim about other Tux upstreams. Renderer, settings
merge, profile activation, and agent-variant operations preserve native pricing
and variant arrays unchanged; settings-only sync backs up installed config.

Reasoning-capable Claude models request readable thinking summaries through
native model and variant `settings.thinking` fields (`type: "adaptive"`,
`display: "summarized"`). Default selections and enabled presets include this
request; `none` presets keep `type: "disabled"` without a display field.
GPT and DeepSeek metadata stays unchanged. Sync with
`metronome push -t opencode --type settings --force`; terminal display is
controlled separately by `session.thinking: "show"` in OpenCode's `cli.json`.

Versioned V2 plugins live under `configs/opencode/v2/plugins/`. V2 ports the
instruction loader, Memory advisor, read guard, commit validator, and Muxy
notifications. The native Muxy V2 port is deployed globally as
`metronome-muxy-notify.js` so Muxy's app-owned `muxy-notify.js` cannot overwrite
it; the app-owned file is preserved because Muxy continuously regenerates it.
The Metronome port remains the active notification integration. Muxy is optional
for V2 readiness. The stable runtime uses the `opencode` executable;
There is one Metronome target, `opencode`. Cursor OAuth is
disabled in V2 because the
public V2 catalog API cannot add a provider. Switching back to
another profile is not supported.

The canonical settings file includes `websearch.provider: chatgpt`. ChatGPT
websearch is a vendored, profile-owned plugin
(`configs/opencode/v2/plugins/chatgpt-websearch.js`) deployed like the other
managed V2 plugins, not a package entry: upstream
`opencode-chatgpt-websearch` is unmaintained. V2 runtime verification requires
`opencode.chatgpt-websearch`; `metronome.muxy-notify` is optional.

Generic V2 sync handles settings, agents, MCP, commands, skills, and
instructions. V2 preserves but does not natively resolve the config
`instructions` array; `metronome.instructions-loader` reads the four separate
Memory files and adds them through the supported session context hook.
`AGENTS.md` remains excluded from that plugin because V2 discovers it natively.

**Context Mode**: not configured for OpenCode. The renderer strips any
`context-mode` entry it finds in an existing plugin array; canonical settings
do not declare it.

### Codex hooks

Codex supports native lifecycle hooks via `~/.codex/hooks.json` behind the `features.hooks = true` flag in `~/.codex/config.toml`. Metronome manages the TOML feature flag and only hook groups marked with `_managed: "metronome"`; third-party groups in `hooks.json` are preserved and ignored during drift checks.

| Script | Event | Managed by | Purpose |
|--------|-------|------------|---------|
| `vault-context-loader-codex.js` | `SessionStart` (`startup|resume`) | metronome | Injects IDENTITY/SOUL/USER/MEMORY into Codex startup context |

Canonical Codex hook registrations live in `configs/hook-configs/` and must carry the Metronome ownership marker. Hook scripts still live in `configs/hooks/` and run directly from the repo checkout via absolute path references in `hooks.json`.

### Codex app-owned MCP tools

Codex installs `node_repl` and `computer-use` under `mcp_servers` in
`~/.codex/config.toml`. These two names belong to the Codex app: Metronome
ignores them during status/diff checks and pull, preserves their complete
existing values during push, and excludes same-name canonical definitions.
Other MCP entries retain normal managed sync and stale-server cleanup.

### Codex provider profiles

`configs/settings/codex.json` may define a Metronome-only `profile_files` map.
The Codex adapter omits that key from `config.toml` and projects each entry to
`~/.codex/<name>.config.toml`, matching Codex 0.134+ profile layering. Select one
with `codex --profile <name>` or `codex exec --profile <name> ...`.

The base configuration uses OpenAI's `gpt-5.6-terra` at `xhigh` reasoning, with
Codex's existing `never` approval policy and `workspace-write` sandbox retained
under canonical ownership. The `enterprise` profile remains available for
explicitly selecting ChatGPT Enterprise; the `tux` profile uses local
`gpt-5.6-luna` without forwarding OpenAI credentials.

### Adding a new hook

1. Create the script in `configs/hooks/`.
2. **Claude Code:** Add registration entry to `~/.claude/settings.json` → `hooks` key. Use absolute path to `configs/hooks/`.
3. **OpenCode:** Add a native plugin under `configs/opencode/v2/plugins/` and
   activate it with `metronome opencode use`. Reference shared logic from
   `configs/hooks/` if possible.
4. **Codex:** Add canonical registration to `configs/hook-configs/codex.json`. Ensure Codex settings enable `features.hooks = true`.
5. Restart the CLI session for hooks to take effect.

## Test Isolation

E2E tests never touch real target directories (`~/.claude`, `~/.config/opencode`, etc.). Instead, `AdapterPathResolver` accepts an optional `homeDir` that redirects all path resolution to an isolated temp directory. Each test creates its own fake home via `createTestHome()` and passes it as `homeDir` to `runPush`/`runPull`/`runCheck`. This makes parallel execution safe by construction — no backup/restore, no locking, no race conditions.
