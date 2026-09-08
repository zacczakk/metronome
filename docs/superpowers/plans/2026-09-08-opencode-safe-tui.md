# OpenCode profile safety and command UI

## Context

`metronome opencode use v2` can be interrupted while it has already changed
the live OpenCode files. The current rollback lives in the command's normal
`catch` path, so SIGINT can bypass it. Plugin verification also retries a
failed `opencode2 api` request; that command can auto-start the managed
service, creating competing processes while the service is unavailable.

The public commands are also inconsistent: profile work uses `use`, while
runtime updates use `update-v2` and `upgrade-v2`. The command output is a
stream of unrelated progress lines rather than one readable operation view.

## Outcome

- An interrupt aborts children, completes rollback, and exits with status 130.
- Rollback itself is never aborted by the user's signal.
- A failed plugin request fails fast; only a successful partial catalog is
  retried.
- Public commands are `use <version>`, `update <version>`, and
  `upgrade <version>` for both `v1` and `v2`.
- Existing `update-v2` and `upgrade-v2` spellings remain hidden aliases.
- TTY output has one compact title, live stage, and final status line.
  Piped output remains plain and line-oriented.

## Design

### Signal handling

Thread an optional `AbortSignal` through the OpenCode command runner,
verification loop, profile switch, and V2 upgrade flow. The child-process
helper listens for abort, sends SIGTERM, waits for `close`, then rejects with
the abort reason. Timers and listeners are always cleared.

The CLI installs temporary SIGINT/SIGTERM handlers before each operation. The
handler reports `Interrupt received; restoring previous state…`, aborts the
operation, and lets the existing complete-backup restore run. Handlers are
removed in `finally`. If rollback fails, preserve both errors in an
`AggregateError`.

### Plugin verification

On the first `request-failed` result, stop immediately with an actionable
service-unavailable error. Do not issue more `opencode2 api` calls, because
those calls can each try to resolve or start the managed service. Keep the
existing bounded retry behavior for a valid but incomplete plugin catalog.

### Terminal UI

Add a dependency-free renderer at `src/cli/terminal-ui.ts`. It writes to
stderr so stdout remains usable by scripts. In an interactive terminal use:

    ◆ OpenCode V2 · runtime upgrade
    ✓ Resolve current CLI · 18ms
    ⠋ Verify plugins · 10/60 · waiting

Use cyan for the title, green for success, amber for active work, red for
failure, and dim text for detail. Use one carriage-returned active line and a
four-frame spinner. With a pipe or `NO_COLOR`, emit indented plain lines and
no control sequences. Keep the renderer small; no boxes, gradients, or new
dependencies.

### Command mapping

- `use v1|v2`: select and render the profile.
- `update v1|v2`: refresh and verify the selected profile.
- `upgrade v1`: run the installed V1 CLI upgrade, then refresh the V1 profile.
- `upgrade v2`: update the V2 beta/runtime dependencies, then activate and
  verify V2.
- `update-v2` and `upgrade-v2`: hidden compatibility aliases for `upgrade v2`.

## Tasks

### 1. Add abort-safe command execution and verification

Files:

- `src/opencode/sdk.ts`
- `src/opencode/__tests__/sdk.test.ts`

Steps:

1. Extend `CommandRunner` and command helpers with an optional signal.
2. Share child termination and cleanup between normal and verification
   commands.
3. Make verification delay abortable.
4. Stop the plugin loop after the first request failure.
5. Thread the signal through SDK update, restart, alignment, and install
   helpers; never pass it to restoration calls.
6. Add tests for child termination, abortable verification, and fail-fast
   request failure.

### 2. Make profile switching signal-safe

Files:

- `src/opencode/profile.ts`
- `src/opencode/__tests__/profile.test.ts`

Steps:

1. Add signal-aware prepare and plugin verifier callbacks.
2. Check abort before and after each mutating stage.
3. Keep complete-backup restoration in the catch path and run it without the
   signal.
4. Preserve original and restore errors together.
5. Add an interruption test proving live config returns to its snapshot.

### 3. Add the shared terminal renderer

Files:

- `src/cli/terminal-ui.ts`
- `src/cli/__tests__/terminal-ui.test.ts`

Steps:

1. Implement TTY and plain-stream modes with the palette and layout above.
2. Ensure timers and active-line state close cleanly on success, failure, and
   interruption.
3. Test readable TTY output, plain piped output, and no ANSI under
   `NO_COLOR`.

### 4. Normalize the CLI grammar and wire the UI

Files:

- `src/cli/opencode-version.ts`
- `src/cli/__tests__/opencode-version.test.ts`
- `src/cli/index.ts`
- `README.md`
- `docs/CHANGELOG.md`
- `configs/instructions/TOOLS.md`

Steps:

1. Add `update` and `upgrade` commands taking `v1` or `v2`.
2. Route the four operation/version combinations to the right existing
   behavior.
3. Keep old V2 command spellings as hidden aliases.
4. Install and remove signal handlers around each operation; use exit 130 for
   an interrupt.
5. Replace direct progress writes with the shared renderer.
6. Update help, examples, and operator docs.
7. Test public command names, aliases, command routing, and interruption
   cleanup.

### 5. Verify

Run:

    bun test src/opencode/__tests__/sdk.test.ts src/opencode/__tests__/profile.test.ts src/cli/__tests__/terminal-ui.test.ts src/cli/__tests__/opencode-version.test.ts
    bun run typecheck
    bun run test
    git diff --check

Inspect the final diff for unrelated files and confirm stdout behavior stays
stable for scripts.
