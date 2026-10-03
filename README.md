<p align="center">
  <img src="assets/logo.svg" width="128" height="128" alt="metronome logo">
</p>

<h1 align="center">metronome</h1>

<p align="center">Single source of truth for AI coding assistant configurations.</p>
Code-driven sync across Claude Code, OpenCode, Gemini CLI, and Codex.

## First-Time Setup

1. Clone the repo:
   ```bash
   git clone https://github.com/zacczakk/metronome.git ~/Repos/zacczakk/metronome
   cd ~/Repos/zacczakk/metronome
   ```

2. Install dependencies and link the CLI:
   ```bash
   bun install && bun link
   ```

3. Copy `.env.example` to `.env` and fill in secrets:
   ```bash
   cp .env.example .env
   # Edit .env with your API keys
   ```

4. Push configs to all CLIs:
   ```bash
   metronome push --force --delete
   ```

## Quick Start

```bash
metronome check                     # show only drifted items (default)
metronome check --verbose           # include up-to-date items
metronome diff                      # interactive diff picker (TTY) or all (piped)
metronome diff --all                # unified diff of all drift
metronome push --force --delete     # push all + delete stale files
metronome pull -s claude            # pull from Claude to canonical
metronome codex-provider tux        # switch Codex Desktop to Tux
metronome codex-provider enterprise # switch back; OpenAI chats become visible
```

## Directory Layout

```
.env                         Secrets (gitignored)

configs/
  commands/*.md              Slash commands (7)
  agents/                    Agent definitions (2)
  skills/                    Skill directories (28 active, with upstream sync)
  opencode/v2/plugins/       OpenCode V2 profile-owned plugins
  mcp/*.json                 MCP server definitions
  settings/*.json            Settings definitions (claude, opencode, token-tracker)
  hooks/*.js                 Hook scripts (absolute-path refs, not deployed)
  instructions/AGENTS.md     Unified agent operating system (ground truth)
  instructions/TOOLS.md      Tool-use reference

evals/
  runner.ts                  CLI-agnostic skill eval runner
  adapters/                  opencode, claude execution backends
  sets/*.json                Eval query sets per skill
  improve.ts                 Description optimization loop
  report.ts                  HTML report generator

src/                         TypeScript sync engine
  cli/                       check, push, pull, diff, render, helpers commands
  adapters/                  Per-CLI renderers (claude, opencode, antigravity, codex)
  core/                      Diff engine, formatter, manifest tracking
  formats/                   Parsers (markdown, JSON, JSONC, TOML)
  secrets/                   .env injection/redaction
  infra/                     Atomic writes, exclusion filters

scripts/
  committer                  Git commit helper
  ask-model                  Cross-model consultation (Claude/Codex/Gemini)
  sessions                   Session history search/export/browse (OpenCode + Claude + Codex)
  sessions_opencode.py       OpenCode V2 session database adapter
  sync-upstream-skills.ts    Upstream skill sync
  docs-list.ts               Docs catalog generator

docs/                        Operational docs
backups/                     Pre-sync backups (gitignored)
```

## How It Works

The `metronome` CLI handles all sync operations programmatically:

- Reads canonical configs from `configs/`
- Transforms to each CLI's native format (Markdown, TOML, JSON)
- Injects secrets from `.env` on push, redacts on pull
- Subset-merges settings (preserves user-added keys)
- Tracks sync state via `.metronome/manifest.json` (3-way hash comparison)
- Atomic writes with backup/rollback on failure

### OpenCode V2 profile

Metronome renders and atomically activates the stable OpenCode V2 profile:

```sh
metronome opencode use
metronome opencode update
metronome opencode upgrade
metronome opencode status
```

`use` activates the profile; `update` refreshes and verifies it; `upgrade`
updates the runtime and then refreshes the profile. Every profile operation persists the active profile in
`~/.config/opencode/migration-manifest.json`. `metronome opencode status`
reports that profile; it is unrelated to `metronome status`, which remains the
drift check alias.

For generic `check`, `push`, `pull`, `render`, and `diff` operations, use
target `opencode`. It renders the stable OpenCode profile in
`~/.config/opencode/`; the runtime executable is `opencode`.

Generic V2 sync covers settings, agents, MCP, commands, skills, and
instructions. V2 plugin files are profile-owned and deployed by
`metronome opencode use`; generic V2 plugin sync intentionally does nothing.

Canonical `configs/settings/opencode.json` includes `websearch.provider:
chatgpt`. ChatGPT websearch itself ships as a vendored, profile-owned plugin
(`configs/opencode/v2/plugins/chatgpt-websearch.js`, deployed the same way as
the other managed V2 plugins) rather than a package entry. The upstream
`opencode-chatgpt-websearch` package is unmaintained, so the integration is
bundled into a single file under OpenCode's local-plugin auto-discovery
directory instead. Runtime verification requires the
`opencode.chatgpt-websearch` plugin. Muxy is an optional V2 integration, so a
Muxy load problem never aborts profile activation.

The native V2 Muxy port is deployed as
`~/.config/opencode/plugins/metronome-muxy-notify.js`; Muxy's app-owned
`muxy-notify.js` file is left untouched because Muxy regenerates it.
The canonical global profile sets `autoupdate: false`; use
`metronome opencode upgrade` for trusted, verified CLI updates.

Every activation creates a complete compatibility backup under
`~/.config/opencode-backups/metronome/` and appends hashes, plugin status, SDK
version, and the restore source to
`~/.config/opencode/migration-manifest.json`. Ordinary `use` and `update`
wait for the hot-reloaded plugin catalog without restarting the shared service.
`upgrade` refreshes the Bun-installed stable `@opencode/cli@latest`, pins
the local `@opencode/plugin` SDK to the exact resolved build, restarts the V2
service because hot reload does not reliably register newly deployed plugin
files, and verifies the plugin API. The package metadata and `opencode
--version` must agree. Failed or interrupted activation restores the complete
profile backup and, for V2 upgrades, the previous exact global CLI build.

Profile operations show a compact live TUI in a terminal and plain indented
stages when piped. Required-plugin state changes are shown immediately;
unchanged partial-catalog retries are periodic. A failed service request stops
verification immediately instead of spawning more service clients. Optional
plugin gaps are warnings, not failures. SDK alignment skips `bun add` when the
global CLI, local package manifest, and installed `@opencode/plugin` already
match. Use `--no-align-sdk` to skip alignment explicitly; plugin readiness
still runs.

Profile activation uses atomic writes with rollback on failure.

## Helper Scripts

Copy canonical helper scripts into another repo:

```bash
metronome helpers -p ~/Repos/my-project          # interactive confirm
metronome helpers -p ~/Repos/my-project --force   # no prompt
metronome helpers -p . --dry-run                  # preview only
```

Writes all files from `scripts/` into `<path>/scripts/`, skipping files
already up to date (SHA-256 match). Supports `--json` for machine output.

The `sessions` helper reads OpenCode from `~/.local/share/opencode/opencode.db`.
Use `sessions latest --source opencode` or `sessions list --source opencode`
to select the OpenCode database; `--project` filters the project directory.

## Secrets

Copy `.env.example` to `.env` and fill in:

```
TAVILY_API_KEY=
UPTIMIZE_ENV=dev
CONTEXT7_API_KEY=
GITHUB_PERSONAL_ACCESS_TOKEN=
# Add your own provider keys as needed
```

Secrets are injected during push and redacted during pull. Never committed.

## Skill Evals

Test whether skill descriptions trigger correctly:

```bash
# Run evals for a skill (opencode adapter, default)
bun evals/runner.ts --skill session-notes --verbose

# Use claude adapter
bun evals/runner.ts --skill session-notes --adapter claude

# Auto-improve the description (eval + iterate)
bun evals/runner.ts --skill session-notes --improve --iterations 3

# Custom eval set, parallel workers, custom report path
bun evals/runner.ts --skill my-skill --eval-set path/to/set.json --workers 4 --report out.html
```

Eval sets live in `evals/sets/<skill-name>.json`:

```json
[
  { "query": "A prompt that should trigger the skill", "should_trigger": true },
  { "query": "A prompt that should NOT trigger it", "should_trigger": false }
]
```

The runner spawns `opencode run` (or `claude -p`) per query, streams the output,
and detects whether the skill was loaded. Results go to stdout as JSON + an HTML report.

## Docs

Run `bin/docs-list` (or `bun scripts/docs-list.ts`) from a repo to list that repo's `docs/` catalog. The compiled binary resolves `docs/` from the current directory or its parents, so it works from nested paths too.

| Doc | When to Read |
|-----|-------------|
| `docs/overview.md` | First time in the repo |
| `docs/architecture.md` | Repo layout, hooks, OpenCode plugins (incl. Cursor OAuth) |
| `docs/subagent.md` | Writing new commands or agents |
| `configs/instructions/TOOLS.md` | Understanding available tools |
| `docs/tavily-reference.md` | Configuring Tavily MCP |
| `docs/runbooks/mcp-incident.md` | MCP server outage |
| `docs/operations/archive-export.md` | Archive export failures and safe session retention |
