# Skill and Agent Evals

Framework for testing whether skills or agents auto-route correctly.

## Quick Start

```bash
# Run evals (opencode adapter, default)
bun evals/runner.ts --skill session-notes --verbose

# Use claude adapter
bun evals/runner.ts --skill session-notes --adapter claude

# Run OpenCode agent auto-routing evals
bun evals/runner.ts --type agent --agent research --adapter opencode

# Lower per-query timeout for faster routing checks
bun evals/runner.ts --type agent --agent research --adapter opencode --timeout 20000

# Improve description automatically
bun evals/runner.ts --skill session-notes --improve --iterations 3
```

## How It Works

1. The runner reads an eval set (`evals/sets/<name>.json`) — an array of `{query, should_trigger}` pairs.
2. For each query, it runs the selected backend.
3. It checks whether the target skill or agent was auto-routed.
4. Results are reported as pass/fail + an HTML report.

The opencode adapter uses streaming early-exit — it kills the agent process as soon as triggering is detected (or the first step completes without triggering), so each query takes ~15-25 seconds instead of minutes.

## CLI Options

| Flag | Default | Description |
|------|---------|-------------|
| `--skill` | optional | Skill name (exists in `configs/skills/`) |
| `--type` | `skill` | Eval target type: `skill`, `agent` |
| `--agent` | optional | Agent name (exists in `configs/agents/`) |
| `--adapter` | `opencode` | Execution backend: `opencode`, `claude` |
| `--timeout` | `20000` | Per-query timeout in milliseconds |
| `--eval-set` | `evals/sets/<skill>.json` | Path to eval set JSON |
| `--workers` | `3` | Concurrent query workers |
| `--model` | (adapter default) | Model override |
| `--report` | `auto` | HTML report path (`auto` = temp file, `none` = skip) |
| `--verbose` | `false` | Print per-query progress |
| `--improve` | `false` | Run description improvement loop |
| `--iterations` | `3` | Max improvement iterations |

## Eval Set Format

```json
[
  { "query": "A prompt that should trigger the skill", "should_trigger": true },
  { "query": "A prompt that should NOT trigger it", "should_trigger": false }
]
```

Guidelines for writing eval queries (from Anthropic's skill-creator):
- Queries should be substantive — simple one-step tasks won't reliably trigger skills.
- Include both positive (should trigger) and negative (should not) cases.
- Negative cases should be plausible near-misses, not obviously unrelated.
- Aim for 10-15 queries per skill (6 positive, 6 negative minimum).

## Adapters

### opencode (default)

For skill evals: runs `opencode run --format json` and parses NDJSON stream events.

For agent evals: also uses `opencode run --format json`, but detects auto-routing via streamed `task` tool calls (`subagent_type`) and, when OpenCode emits delegation text before the tool event, an explicit delegation-text fallback.

### claude

Runs `claude -p --output-format stream-json` and parses stream events. Detects skill loading via `content_block_start` events with tool name `Skill` or `Read`.

## Description Improvement

`--improve` runs an optimization loop:

1. Evaluate current description
2. Send failures to the agent with improvement instructions
3. Apply proposed description to SKILL.md
4. Re-evaluate
5. Repeat up to `--iterations` times
6. Apply the best-scoring description

The improvement prompt is routed through the same adapter as evals — no separate API key needed.

## Review Evals

Scores `ponytail-review` against real commits: bug cases (a commit whose bug was fixed later) and clean cases (a commit never fixed or reverted).

Case sets name private repositories and their bugs, so they stay out of this public repo in the gitignored `.metronome/review-evals/`.

```bash
bun evals/review/runner.ts --set .metronome/review-evals/<repo>.json
bun evals/review/runner.ts --set .metronome/review-evals/<repo>.json --case bug-<slug> --model provider/model
```

```json
{
  "repo": "<absolute path to the local clone>",
  "cases": [
    { "id": "bug-<slug>", "kind": "bug", "commit": "<sha that added the bug>",
      "bug": { "file": "src/a.ts", "lines": [37, 45], "summary": "<what goes wrong>", "fixedBy": "<fix sha>" } },
    { "id": "clean-<slug>", "kind": "clean", "commit": "<sha>" }
  ]
}
```

| Flag | Default | Description |
|------|---------|-------------|
| `--set` | required | Case set JSON (`repo`, `cases[]`) |
| `--skill` | `configs/skills/ponytail-review/SKILL.md` | Review instructions under test |
| `--case` | all | Run one case id |
| `--model` | OpenCode default | Model override |
| `--workers` | `2` | Concurrent reviews |
| `--timeout` | `20` | Minutes per review |
| `--out` | temp dir | Review texts, NDJSON logs, `summary.md`, `summary.json` |

Each case runs in a private `opencode run --standalone` session on a depth-2 fetch of the commit, so the reviewer never sees the later fix. A bug case passes when a finding the verdict blocks on cites the bug file (`hit=file`) or lines (`hit=line`); pre-existing and other unblocked findings do not count, and a cited path in another directory is a miss. A clean case passes only on an explicit Ship verdict. A failed or timed-out `opencode run` is a case error. Read the saved reviews to judge false alarms and pre-existing findings.

Rescore after every change to the review skill, its tools, or its model.

## Files

```
evals/
  runner.ts              CLI entry point
  types.ts               Shared types (EvalQuery, EvalResult, Adapter)
  improve.ts             Description improvement loop
  report.ts              HTML report generator
  adapters/
    opencode.ts          OpenCode execution backend
    claude.ts            Claude Code execution backend
  sets/
    *.json               Eval query sets (one per skill)
  review/
    runner.ts            Review eval entry point
    score.ts             Bug-hit and verdict scoring
```
