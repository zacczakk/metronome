---
name: foundry-transforms-ops
description: "Use when building, verifying, promoting or monitoring Foundry Python transforms (Spark or lightweight/DuckDB) through Stemma, Jemma CI, the build and orchestration APIs, schedules, and dataset reads. Covers CI gaps, shrinkwrap timing, branch fallback, job telemetry, cancellation, billing math and promotion scripts."
---

# Foundry Transforms Operations

## 1. What CI actually checks

A transforms repo's Jemma `Checks` job runs `./gradlew patch publish`: packaging, lint and type checks, plus job spec publishing. It does not run `pytest`. Green CI is not green tests; 10 failing tests sat on master unnoticed.

Run `pytest` locally from the repo's `.maestro` environment, with `SPARK_HOME` set to that environment's Spark installation and `TZ=UTC`. From `transforms-python/`, run `.maestro/bin/python -m pytest`. Or add a `pytest` step to `ci.yml`.

CI results are cached per commit. Re-requesting a build at the same hash reuses the failed result. A retry after a transient failure, such as `Build2:InputResolutionClientError` during job spec publishing, needs a new commit.

## 2. Shrinkwrap and bot commits

`transforms-shrinkwrap.yml` maps dataset paths to IDs. New outputs get an ID only after CI, when a bot commits the updated shrinkwrap to the branch. Submit builds at the bot's commit, after the code commit's CI has passed. Bot commits do not trigger CI.

Always pull the remote branch before pushing, or the push can race the bot.

Master also receives "Upgrade repository" template-bump commits for transforms versions. Merge them like any other change.

## 3. Branch fallback and experimental datasets

A branch build reads each input from that branch if it exists there; otherwise it reads from master.

Experimental outputs exist only on the branch that built them. A fresh branch gets a 404 on those outputs and cannot reuse them. Iterate on the branch holding the materialized inputs, or rebuild them.

Record input end-transaction IDs, not branch names, as input identity. The same transaction can be resolved through different branches.

## 4. Submitting and targeting builds

`palantir build-datasets` takes the repository ID, dataset IDs, branch, and exact commit hash. Target only the outputs you need so references and inputs from earlier builds are reused.

After promotion, build the production output on master, then confirm the next scheduled run picked up the new code.

## 5. Orchestration and dataset APIs

OAuth works for these APIs. Append `?preview=true` to each call.

| Purpose | Call |
|---|---|
| Build status and timing | `GET /api/v2/orchestration/builds/{buildRid}?preview=true` |
| A build's jobs | `GET /api/v2/orchestration/builds/{buildRid}/jobs?preview=true` |
| Cancel a build (204) | `POST /api/v2/orchestration/builds/{buildRid}/cancel?preview=true` |
| Schedule run history | `GET /api/v2/orchestration/schedules/{rid}/runs?preview=true` |
| Small result tables | `GET /api/v2/datasets/{rid}/readTable?format=CSV&branchName=…&preview=true` |
| Schema, descriptions, nullability | `GET /api/v2/datasets/{rid}/getSchema?preview=true` |
| Branches with data | `GET /api/v2/datasets/{rid}/branches?preview=true` |
| Raw Parquet, such as footer metadata | `GET /api/v2/datasets/{rid}/files/{path}/content?preview=true` |

Use `readTable` when SQL fails with `ReadQueryInputsPermissionDenied`.

Do not use `search-dataset-builds` to look up one build ID. It returned unrelated builds and made a 37-minute run look like 30 seconds. Use `builds/{rid}/jobs`.

## 6. Job telemetry and sizing evidence

Duration is job `RUNNING` to finish. Do not use submit-to-finish time; it includes queueing.

The container memory chart includes page cache and can sit flat at the limit. Size from RSS or cgroup anonymous memory logged by the job.

Lightweight jobs run native output checks after user code, in the same container. If the container dies there (`Exiting user code`, then death), Foundry retries the whole job up to three attempts at three times the cost. Cancel early.

Detailed logs and metrics come only from the internal job-tracker GraphQL (`LightweightJobReportQuery`) and the metrics series. Both are unofficial; wrap them in a helper.

## 7. Billing math

Lightweight cost = `max(vCPU, memory GB / 7.5) × execution minutes`.

Spark cost = driver plus active executor time from telemetry. Keep the tenant's compute-second price in a config note, not in this skill.

## 8. Auth and tooling

OAuth from `tux token --foundry` works for dataset, orchestration, and build APIs. A PAT is still needed for Stemma git.

When the Palantir MCP server drops, use the `palantir` CLI. Check argument names with `palantir search-tools`—for example, `sqlQuery`, not `query`—because the CLI can exit non-zero on transient errors.

## 9. Promotion and watcher scripts

- Run scripts with `nohup … & disown` and a log file.
- Use `set -o pipefail`; wrap every status poll in a retry loop.
- Before pushing to master, pull the branch, check that `origin/master` is an ancestor of `$SHA`, and push `"${SHA}:refs/heads/master"`. Quote the ref: in zsh, `$SHA:r` silently eats characters.
- Stop loudly on a merge conflict, failed push, moved master, or failed build.
- Keep watcher labels to `[a-z-]`.
- Check progress yourself; do not assume a background script is alive.
- Never start a merge-and-push script while a manual merge is open.

## 10. Schedules

After a cutover, confirm through schedule runs and build jobs that the nightly chain ran in order on the new code, with the expected duration.

## Related memory

[Foundry delivery tools](file:///Users/m332023/Vaults/Memory/tools/foundry-delivery-tools.md)
