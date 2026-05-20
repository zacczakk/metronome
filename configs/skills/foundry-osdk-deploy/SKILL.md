---
name: foundry-osdk-deploy
description: >-
  Use when releasing, deploying, tagging, or publishing a Foundry OSDK React app
  hosted on Stemma with Jemma CI. Covers the git-tag-based release flow, CI
  pipeline behavior, and manual promotion in Developer Console.
---

# Foundry OSDK App — Release & Deploy

## Overview

Foundry OSDK React apps deploy via **git tags**. Pushing a semver tag to Stemma triggers Jemma CI, which builds and uploads the site to Foundry website hosting. If `uploadOnly: true`, a manual promotion step in Developer Console is required.

## Quick Reference

| Action | Command / Location |
|--------|-------------------|
| Local build | `npm run build` (runs `tsc && vite build`, output in `./dist/`) |
| Local verify | `npm run lint && npm run test && npm run build` |
| Push code | `git push origin master` (CI runs lint+test+build only, no deploy) |
| Tag a release | `git tag X.Y.Z && git push origin tag X.Y.Z` |
| PR preview | Open PR in Stemma UI (CI auto-deploys snapshot preview) |
| Promote to prod | Foundry Developer Console > Website Hosting > select version > Deploy |
| Production URL | Configured per-app (e.g. `https://<app-subdomain>.palantir.mcloud.merckgroup.com`) |

## CI Pipeline Paths (Jemma)

The `ci.yml` defines a single job `osdk-app-publish` with three behavior paths:

```
Push to branch (no PR, no tag)
  └─ lint + test + build
  └─ Exit. No deploy.

Pull Request opened/updated
  └─ lint + test + build
  └─ Snapshot preview deploy (--uploadOnly false --snapshot)
  └─ Preview accessible via snapshot URL in Stemma

Tagged push (git tag X.Y.Z)
  └─ VERIFY_ENV_PRODUCTION=true (enables env.test.ts validation)
  └─ lint + test + build
  └─ @osdk/cli site deploy (uploads to Foundry website hosting)
  └─ If uploadOnly=true: must manually promote in Developer Console
  └─ If uploadOnly=false: auto-promotes to production
```

## Release Procedure

### Pre-flight

```bash
git checkout master
git pull origin master
npm run lint        # 0 errors, 0 warnings
npm run test        # all tests pass
npm run build       # exit 0, dist/ created
```

### Tag and Push

```bash
# Use semver, NO prefix (tagPrefix is "" in foundry.config.json)
git tag 0.2.0
git push origin master          # push any commits first
git push origin tag 0.2.0       # triggers CI deploy
```

### Post-deploy (if uploadOnly: true)

1. Open Foundry Developer Console
2. Navigate to **Website Hosting** for the application
3. Find the newly uploaded version (matches the tag)
4. Click **Deploy** to promote to production

### To enable auto-deploy

In `foundry.config.json`, change:
```json
"uploadOnly": false
```
This makes tagged builds immediately go live without manual promotion.

## Key Config Files

### `foundry.config.json`

The `autoVersion` type varies by app — check the actual file before releasing:

```json
{
  "foundryUrl": "https://palantir.mcloud.merckgroup.com",
  "site": {
    "application": "<application RID>",
    "directory": "./dist",
    "autoVersion": {
      "type": "package-json"
    },
    "uploadOnly": true
  }
}
```

**`autoVersion` types:**

| Type | Version source | Release requirement |
|------|---------------|---------------------|
| `"package-json"` | `version` field in `package.json` | Bump `package.json` **before** tagging, then tag on that commit |
| `"git-describe"` | Nearest reachable git tag | Tag the release commit; `tagPrefix` controls prefix (e.g. `""` for bare `0.1.0`) |

**Critical for `package-json` type:** if you tag without bumping `package.json`, CI will upload the old version string and get `[error] The site version already exists`. Always:
1. `npm version X.Y.Z --no-git-tag-version` (bumps `package.json`, no git tag)
2. Commit the bump
3. Tag the new commit
4. Push master + tag

- `directory: "./dist"` is the Vite build output uploaded to Foundry

### Environment Files

| File | Purpose |
|------|---------|
| `.env.development` | Local dev (`localhost:8080` redirect) |
| `.env.production` | Production build (production redirect URL) |
| `.env.code-workspaces` | Foundry Code Workspaces IDE |

All set the same four `VITE_FOUNDRY_*` variables. Only `VITE_FOUNDRY_REDIRECT_URL` differs between environments.

### `ci.yml`

- Jemma CI config (not GitHub Actions)
- Uses `JEMMA_TAG` env var to detect tagged builds
- Uses `STEMMA_PULL_REQUEST_RID` to detect PR builds
- Authenticates npm via `FOUNDRY_TOKEN` (Jemma job token)
- Runs `npx @osdk/cli@latest site deploy` for actual deployment

## Tag Conventions

- **Format**: `MAJOR.MINOR.PATCH` (semver, no prefix)
- **Examples**: `0.1.0`, `0.2.0`, `1.0.0`
- **Do NOT use** `v` prefix — Foundry apps don't use it; bare semver is the standard
- Tags are lightweight (not annotated)
- For `autoVersion.type: "package-json"` apps: tag must be placed on the commit that bumps `package.json` to that version

## Common Issues

| Problem | Cause | Fix |
|---------|-------|-----|
| CI runs but doesn't deploy | No `JEMMA_TAG` — you pushed a commit, not a tag | Create and push a tag |
| `env.test.ts` fails in CI | `.env.production` missing or has placeholders | Verify `.env.production` has real values |
| `[error] The site version already exists` | `autoVersion.type: "package-json"` and `package.json` wasn't bumped before tagging | `npm version X.Y.Z --no-git-tag-version`, commit, retag on new commit, force-push tag |
| Version shows as `0.0.0-N-gSHA` | `git-describe` type: no reachable tag on the branch | Create a tag on or before the commit |
| Upload succeeds but app not updated | `uploadOnly: true` | Promote manually in Developer Console, or set to `false` |
| npm install fails in CI | Foundry token expired or npm registry auth | Check `.npmrc` and `FOUNDRY_TOKEN` |

## Architecture Notes

- **Auth**: Public OAuth client (browser-based, no secret). Scopes: `api:use-ontologies-read`, `api:use-mediasets-read`.
- **Build**: Vite injects `VITE_FOUNDRY_*` env vars into `index.html` `<meta>` tags at build time. `client.ts` reads them at runtime.
- **NPM registry**: Foundry artifact repository (not public npm). Packages like `@pco-app/sdk` and `@osdk/*` come from there.
- **Node version**: Pinned in `.nvmrc`.
