---
summary: Retired agent-browser instructions, replaced by the browse MCP on 2026-11-09. Restore by pasting the sections back into configs/instructions.
---

# agent-browser instructions (archived 2026-11-09)

Source commit: 6282d64

## From configs/instructions/AGENTS.md

"On PATH" list entry: `agent-browser`

### Browser
- `agent-browser` for browser work (automation, scraping, screenshots, console/network, authenticated pages).
- Default: `agent-browser --profile Default open <url> --headed`. `Default` = `z/acc`; isolated copy, auth intact. No `--native`.
- Loop: `snapshot -i` → act on refs → re-snapshot after page changes. Reuse during task; `close` when done.
- No `--auto-connect` unless Phil explicitly asks. Never `pkill`/restart Chrome. 403: stop.
- Viewport `1800x1169` (Phil's logical res). Never 1920x1080 — overflows.
- Skill: `agent-browser skills get core`. Ignore kill/reset advice. Lightpanda: unauthenticated reading only.

## From configs/instructions/TOOLS.md

### agent-browser

Browser automation CLI. Rust/CDP.

- **Install:** `brew install agent-browser` or `npm install -g agent-browser`
- **Skill:** `agent-browser skills get core`
- **Default:** `--profile Default` (`z/acc`), `--headed`; isolated auth copy. No `--native`.
- **Live Chrome:** `--auto-connect` only on explicit request.
- **Lightweight:** `--engine lightpanda`; unauthenticated reading only.

```bash
agent-browser --profile Default open <url> --headed
agent-browser snapshot -i                        # interactive @refs
agent-browser click @e2
agent-browser snapshot -i                        # refs stale after page change
agent-browser fill @e3 "text"
agent-browser screenshot
agent-browser chat "do X"                        # AI single-shot (needs AI_GATEWAY_API_KEY)
agent-browser batch "open <url>" "snapshot -i"   # multi-step
agent-browser close                              # task done
```

Never kill/relaunch Chrome. Never close Phil's tabs. Viewport `1800x1169`, never 1920x1080. 403: stop; no retries.

| Task | Tool |
|---|---|
| Browse/click/fill/extract | `agent-browser` |
| Intent-driven task | `agent-browser chat` |
| Multi-step sequence | `agent-browser batch` |
| Authenticated pages | `--profile Default` (`z/acc`) |
| Live Chrome control | `--auto-connect`, explicit request only |
| Test suites w/ assertions | `agent-browser` plus the repository's test runner |
| Diagnose install | `agent-browser doctor` |

## From configs/settings

- `opencode.json` permission: `{ "action": "external_directory", "resource": "~/.agent-browser/**", "effect": "allow" }`
- `claude.json` `additionalDirectories` entry: `"~/.agent-browser"`
