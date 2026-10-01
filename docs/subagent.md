---
summary: "Canonical subagent model and cross-CLI rendering contract."
read_when:
  - "Adding or changing subagents"
  - "Debugging prompt/subagent drift across Claude, Codex, Antigravity, OpenCode"
---

# Subagent and Command System

## Canonical sources
- Canonical subagent specs: `configs/agents/*.md`.
- Canonical command specs: `configs/commands/*.md`.
- Agent specs use OpenCode-style frontmatter as the source of truth:
  - required: `description`
  - common: `mode`, `model`, `reasoningEffort`, `textVerbosity`, `permission`, `color`
  - optional: `targets` — target names that should receive the agent; omitted means all targets
  - body: verbatim agent instructions
- Commands remain markdown with frontmatter plus body instructions.

## Render targets — agents
- Claude Code: derive portable frontmatter (`name`, `description`, optional `model`, derived `allowed-tools`), copy to `~/.claude/agents/`.
- Gemini CLI: same portable frontmatter plus `kind: local`, copy to `~/.gemini/agents/`.
- OpenCode: convert `permission` to ordered `permissions`; move per-agent request options into a generated model variant, then copy to `~/.config/opencode/agents/`.
- OpenCode V2 agent sync also updates the shared settings catalog so every generated `agent-*` variant referenced by an agent file is registered under its base model.
- With `--delete`, removing a managed OpenCode agent also removes its generated V2 model variant; unrelated `agent-*` variants are preserved.
- Codex: standalone TOML as `~/.codex/agents/{name}.toml` with `name`, `description`, and `developer_instructions`. `sandbox_mode` is preserved when explicit and derived as `read-only` when canonical metadata denies edits. An `openai/*-fast` model alias renders as the base model with `model_provider = "openai"` and `service_tier = "fast"`.

Target-scoped agents are filtered before rendering and stale-item detection. The
`targets` metadata is routing metadata, not agent frontmatter. Use it for
OpenCode-only specialists such as `foundry-sql`; list `opencode` for stable
OpenCode routing.

## Current OpenCode routing

| Agent | Model | Effort |
|---|---|---|
| `api-review` | `github-copilot/claude-opus-5.5` | medium |
| `docs` | `github-copilot/gpt-6-luna` | medium |
| `execute` | `github-copilot/gpt-6-luna` | max |
| `explore` | `github-copilot/gpt-6-luna` | medium |
| `foundry-sql` | `github-copilot/gpt-6.1-sol` | medium |
| `infra-review` | `github-copilot/claude-opus-5.5` | medium |
| `release` | `github-copilot/gpt-6.1-sol` | high |
| `research` | `github-copilot/gpt-6.1-sol` | high |
| `security-review` | `github-copilot/claude-opus-5.5` | medium |
| `vault-ops` | `github-copilot/gpt-6-luna` | medium |
| `verify` | `github-copilot/gpt-6-luna` | max |

The built-in `general` agent inherits the session model. `foundry-sql` is OpenCode only.

## Portable tool derivation
- Non-OpenCode targets do not consume OpenCode `permission` blocks directly.
- Adapters derive a best-effort `allowed-tools` list from canonical metadata.
  Explicit tool rules override `permission['*']`; a wildcard deny includes only
  explicitly allowed or asked tools. Without a wildcard deny, unspecified tools
  keep the portable defaults.
- Nested Bash command rules flatten to the Bash tool on non-OpenCode targets;
  command-level restrictions do not transfer.
- OpenCode-only keys like `permission`, `color`, and `mode` are dropped when the target does not support them.
- Claude Code maps an explicit Opus 5.5 model to `opus`; effort-only routes map high/xhigh/max to `opus`, medium to `sonnet`, and low to `haiku`. It renders native `effort`.
- Codex maps Opus 5.5 to GPT-6.1 Sol/medium because Codex uses OpenAI Responses and Opus is Anthropic-Messages-only. Antigravity drops `model` and uses its own model routing.
- OpenCode GPT model options use camelCase in canonical frontmatter. Codex renders `reasoningEffort` as `model_reasoning_effort` and `textVerbosity` as `model_verbosity`.

## Render targets — commands
- Claude Code: strip `zz-` prefix, nest under `~/.claude/commands/zz/` (invoked as `/zz:name`).
- Gemini CLI: convert to TOML (`description` + `prompt = '''...'''`), copy to `~/.gemini/commands/`.
- OpenCode: preserve supported frontmatter, strip canonical-only keys, and copy to `~/.config/opencode/commands/`.
- Codex: flat Markdown with `# /{name}` heading, copy to `~/.codex/prompts/`.

## Instructions
- Canonical source: `configs/instructions/AGENTS.md` (unified, all CLI notes included).
- System locations: `~/.claude/CLAUDE.md`, `~/.config/opencode/AGENTS.md`, `~/.gemini/AGENTS.md`, `~/.codex/AGENTS.md`.
- Written verbatim to each CLI's instruction path (no per-CLI addendums).
- Synced via `metronome push` alongside commands, agents, and MCP.

## Operational rules
- Update only `configs/agents/` and `configs/commands/` for shared behavior changes.
- Do not hand-edit system files; use `metronome push` to distribute.
- If you need CLI-specific behavior, add a section to `configs/instructions/AGENTS.md` and push.
- Full format specification lives in `docs/design/sync-spec.md` sections 2.1 through 2.5.
