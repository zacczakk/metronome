---
name: foundry-local-development
description: Use when setting up local development tooling for Palantir Foundry projects — cloning Stemma repos, MCP servers, IDE extensions, Maestro/Hawk binaries, and translating Claude Code .mcp.json configs to OpenCode opencode.json format.
---

# Foundry Local Development

## Overview

Foundry projects (transforms, pipelines, OSDK apps) require local tooling wired up correctly: MCP servers for agentic dev, Palantir IDE extensions, and project-specific binary paths. This skill captures setup patterns and the Claude Code → OpenCode config translation.

## When to Use

- Cloning a Foundry/Stemma repo locally (auth, URL pattern, `$FOUNDRY_TOKEN`)
- Setting up MCP servers for a Foundry project in OpenCode or Claude Code
- Translating a project's `.mcp.json` to `opencode.json`
- Wiring up Maestro or Hawk binaries for transforms development
- Diagnosing why a local MCP server isn't connecting

## MCP Config Translation (.mcp.json → opencode.json)

Foundry projects often ship a `.mcp.json` for Claude Code. OpenCode uses a different shape.

**Claude Code `.mcp.json`:**

```json
{
  "mcpServers": {
    "my-server": {
      "type": "stdio",
      "command": "binary",
      "args": ["arg1", "arg2"],
      "env": { "KEY": "value" }
    }
  }
}
```

**OpenCode `opencode.json`:**

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "my-server": {
      "type": "local",
      "command": ["binary", "arg1", "arg2"],
      "environment": { "KEY": "value" },
      "enabled": true
    }
  }
}
```

Key differences:

| Field | Claude Code | OpenCode |
|-------|-------------|----------|
| Top-level key | `mcpServers` | `mcp` |
| Server type | `"stdio"` | `"local"` |
| Command | `command` string + `args` array | `command` array (binary + args merged) |
| Env vars | `env` | `environment` |
| Disable | `"disabled": true` | `"enabled": false` |

Place project-specific MCP config in a project-level `opencode.json` (not global `~/.config/opencode/opencode.json`) — server args like `--project-path` are repo-specific.

## Maestro MCP (Transforms Projects)

The Palantir authoring Cursor extension ships `maestro` and `hawk` binaries for transforms development. The `.mcp.json` in a transforms repo points at these.

**Translated `opencode.json` for a transforms project:**

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "maestro-mcp": {
      "type": "local",
      "command": [
        "/Users/<you>/.cursor/extensions/palantir.authoring-vscode-extension-<version>/build/authoring-vs-code-extension-executables/maestro/macos/arm64/maestro",
        "transforms",
        "mcp",
        "--hawk-path",
        "/Users/<you>/.cursor/extensions/palantir.authoring-vscode-extension-<version>/build/authoring-vs-code-extension-executables/hawk/macos/arm64/hawk",
        "--project-path",
        "/path/to/transforms"
      ],
      "enabled": true
    }
  }
}
```

**Caveats:**
- Binary path is pinned to the Cursor extension version — update when the extension upgrades.
- `<version>` in the path (e.g. `0.508.2`) changes on every extension update.
- `--project-path` must be absolute and point to the repo root containing `settings.gradle` / `build.gradle`.
- Architecture suffix (`macos/arm64`) — adjust for Intel (`macos/x86_64`) or Linux.

## Finding the Current Binary Path

```bash
# Find the currently installed authoring extension version
ls ~/.cursor/extensions/ | grep palantir.authoring

# Verify the binary exists
ls ~/.cursor/extensions/palantir.authoring-vscode-extension-<version>/build/authoring-vs-code-extension-executables/maestro/macos/arm64/
```

## Cloning Foundry (Stemma) Repos

Foundry hosts code repos on Stemma, accessed via HTTPS git. Auth uses Foundry credentials in the URL.

**Critical: use a Personal Access Token (PAT), not an OAuth token.**

Stemma git auth distinguishes token *type*, not just permissions:

| Token source | Works for git? | Notes |
|--------------|----------------|-------|
| Foundry UI > Settings > Tokens (PAT) | Yes | Long-lived, server-tracked |
| `tux token --foundry` (OAuth) | No | Rejected by Stemma git regardless of scopes |
| OAuth with `api:repositories-read`, `api:filesystem-read`, etc. | No | Scope additions don't help |

The JWT payload looks identical between PAT and OAuth tokens (no visible `exp` or `scp` claims), but Stemma enforces token type server-side via `jti` lookup.

**Workflow:**

1. Get PAT from Foundry UI: Settings > Tokens > Create token. Store as `$FOUNDRY_TOKEN` in shell.
2. Find the repo RID and name via `palantir-mcp` or the Foundry UI.
3. Clone with the URL pattern below.

**URL pattern:**

```
https://<user-double-encoded>:<token>@<host>/stemma/git/<repo-rid>/<repo-name-with-dashes>
```

- **Username:** double URL-encoded. `<user>@one.merckgroup.com` → `%3Cuser%3E%40one.merckgroup.com` → `%253Cuser%253E%2540one.merckgroup.com`
- **Repo name:** spaces become `-` (e.g. "Liquidity UI" → `liquidity-ui`), not `%20`
- **Host:** typically `palantir.mcloud.merckgroup.com`

**One-liner:**

```bash
USER_ENC=$(printf '%s' "$USER@one.merckgroup.com" | python3 -c "import urllib.parse,sys; print(urllib.parse.quote(urllib.parse.quote(sys.stdin.read(), safe=''), safe=''))")
git clone "https://${USER_ENC}:${FOUNDRY_TOKEN}@palantir.mcloud.merckgroup.com/stemma/git/<repo-rid>/<repo-name>" <local-dir>
```

**Auth split:** PAT for git ops, OAuth (`tux token`) for API/MCP/artifacts calls. They serve different backends.

## Common Mistakes

| Mistake | Consequence | Fix |
|---------|-------------|-----|
| Putting project MCP in global opencode config | Wrong `--project-path` for other repos | Use project-level `opencode.json` |
| Stale extension version in path | Binary not found, MCP fails to start | Re-check path after Cursor extension update |
| Using `env` instead of `environment` | OpenCode ignores env vars silently | Use `environment` key |
| Forgetting `type: "local"` | OpenCode rejects config on startup | Always include `type` |
| `command` as a string | OpenCode schema error | Must be an array |
| Using OAuth token for git clone | Rejected by Stemma regardless of scopes | Use PAT from Foundry UI > Settings > Tokens |
