---
title: OpenCode iOS notifications
summary: Manage the iOS callback plugin through canonical OpenCode settings.
read_when: Updating OpenCode notification configuration.
---

# OpenCode iOS notifications

Scope: `configs/settings/opencode.json`; append the iOS notify plugin.
Preserve global settings and comments. Verify `GET /api/plugin` reports
`opencode-notify-callback` active after automatic config reload.

Apply with `metronome push -t opencode --type settings --force` after reviewing
the settings diff. Keep the existing server running.

Applied October 9, 2026. Settings diff changed only `plugins`; Metronome check
passes. Activation blocked: `/api/plugin` reports `failed`; server log records
`NpmInstallFailedError` / `An unknown git error occurred`. GitHub repository
lookup returned 404. Server address stayed `http://0.0.0.0:49374`.
