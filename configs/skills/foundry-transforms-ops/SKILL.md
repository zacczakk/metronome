---
name: foundry-transforms-ops
description: "Use when building, verifying, promoting, cleaning up or monitoring Foundry Python transforms (Spark or lightweight/DuckDB) through Stemma, Jemma CI, the build and orchestration APIs, schedules, and dataset reads. Covers CI gaps, shrinkwrap timing, branch fallback, job telemetry, cancellation, billing math, usage reporting, resource cleanup, refactor gates and promotion scripts."
---

# Foundry Transforms Operations

## 1. What CI actually checks

The Jemma `Checks` job runs only `./gradlew patch publish` (see `ci.yml`; its header says DO NOT MODIFY). That packages the code and publishes job specs. It runs no `pytest`. Green CI is not green tests; 10 failing tests once sat on master unnoticed.

`transforms-python/build.gradle` applies `com.palantir.transforms.lang.pytest-defaults`, but that plugin discovers tests only under `transforms-python/src/test/`. Tests elsewhere (for example `transforms-python/tests/`) never run in CI; put them under `src/test/`. Do not edit `ci.yml` to add a test step.

Run tests locally from `transforms-python/` with the repo's Maestro environment (created at the repo root `.maestro/`):

```bash
TZ=UTC SPARK_HOME=../.maestro/spark-home ../.maestro/bin/python -m pytest
```

Use the real environment rather than a plain interpreter. `tests/conftest.py` stubs `transforms.api` when it is missing; do not add more import shims, fix the environment instead. Spark-backed tests are slow and environment-sensitive; never use them as a gate.

CI results are cached per commit. Re-requesting a build at the same hash reuses the failed result. A retry after a transient failure, such as `Build2:InputResolutionClientError` during job spec publishing, needs a new commit.

## 2. Shrinkwrap and bot commits

`transforms-shrinkwrap.yml` maps dataset paths to IDs. Never hand-edit it. New outputs get an ID only after CI, when a bot commits the updated shrinkwrap to the branch. Submit builds at the bot's commit, after the code commit's CI has passed. Bot commits do not trigger CI.

Always pull the remote branch before pushing again, or the push races the bot.

Master also receives "Upgrade repository" template-bump commits for transforms versions. Merge them like any other change.

## 3. Branch fallback and experimental datasets

A branch build reads each input from that branch if it exists there; otherwise it reads from master.

Experimental outputs exist only on the branch that built them. A fresh branch gets a 404 on those outputs and cannot reuse them. Iterate on the branch holding the materialized inputs, or rebuild them.

Record input end-transaction IDs, not branch names, as input identity. The same transaction can be resolved through different branches.

Never build production-path outputs on a branch as proof of a change; build experimental copies instead.

## 4. Submitting and targeting builds

Builds take the repository RID, dataset RIDs, branch, and the exact commit hash. Use `palantir build-datasets` (or the Palantir MCP `build-datasets` tool). Target only the outputs you need so references and inputs from earlier builds are reused.

After promotion, build the production output on master, then confirm the next scheduled run picked up the new code.

## 5. Orchestration, dataset and filesystem APIs

Authenticate with OAuth from `tux token --foundry` (or `$FOUNDRY_TOKEN`); TLS via `~/.ssh/cacert.pem`. Append `?preview=true` to each call.

| Purpose | Call |
|---|---|
| Build status and timing | `GET /api/v2/orchestration/builds/{buildRid}?preview=true` |
| A build's jobs | `GET /api/v2/orchestration/builds/{buildRid}/jobs?preview=true` |
| Cancel a build (204) | `POST /api/v2/orchestration/builds/{buildRid}/cancel?preview=true` |
| Schedule run history | `GET /api/v2/orchestration/schedules/{rid}/runs?preview=true` |
| Delete a schedule | `DELETE /api/v2/orchestration/schedules/{rid}?preview=true` |
| Trash a dataset or resource | `DELETE /api/v2/filesystem/resources/{rid}?preview=true` |
| Small result tables | `GET /api/v2/datasets/{rid}/readTable?format=CSV&branchName=…&preview=true` |
| Schema, descriptions, nullability | `GET /api/v2/datasets/{rid}/getSchema?preview=true` |
| Branches with data | `GET /api/v2/datasets/{rid}/branches?preview=true` |
| Raw Parquet, such as footer metadata | `GET /api/v2/datasets/{rid}/files/{path}/content?preview=true` |

Use `readTable` when SQL fails with `ReadQueryInputsPermissionDenied`.

Do not use `search-dataset-builds` to look up one build ID. It returned unrelated builds and made a 37-minute run look like 30 seconds. Use `builds/{rid}/jobs`.

## 6. Cleaning up datasets and schedules

- Trash with `DELETE /api/v2/filesystem/resources/{rid}?preview=true`, then read the resource back and confirm `trashStatus` is `DIRECTLY_TRASHED`. `POST .../delete` returns 404.
- Delete schedules with `DELETE /api/v2/orchestration/schedules/{rid}?preview=true`.
- The lineage API returned 0 downstream consumers even for heavily used datasets. It is not proof that nothing reads a dataset. Check consumers another way (repo code, ontology backing datasets, dashboards, Contour) before trashing.

## 7. Job telemetry and sizing evidence

Duration is job `RUNNING` to finish. Do not use submit-to-finish time; it includes queueing.

The container memory chart includes page cache and can sit flat at the limit. Size from RSS or cgroup anonymous memory logged by the job.

Lightweight jobs run native output checks after user code, in the same container. If the container dies there (`Exiting user code`, then death), Foundry retries the whole job up to three attempts at three times the cost. Cancel early.

Detailed logs and metrics come only from the internal job-tracker GraphQL (`LightweightJobReportQuery`) and the metrics series. Both are unofficial; wrap them in a helper.

## 8. Billing math

Verified against the Resource Management usage service:

- Rate: $0.00019825 per compute-second, for all Foundry compute.
- Lightweight (DuckDB/Polars): compute-seconds ≈ `max(vCPU, memory GiB / 7.5) × execution seconds` (`RUNNING` to finish). Queue time is not billed. Billed usage came in at 0.90–0.98× this estimate.
- Spark: bills at or above the documented formula: driver plus executors, each `max(vCPU, memory GiB / 7.5)`, with spin-up included. Active-executor time from telemetry is a lower bound, not the bill.

Read project usage from the usage aggregator:

- `POST /usage-aggregator/api/usage/table/model/{enrollment}/usage/summary`
- `POST /usage-aggregator/api/usage/table/model/{enrollment}/usage/granular`
- `POST /usage-aggregator/api/usage/table/model/{enrollment}/top-resources`

They split usage by type and resource, not by branch. Price endpoints return 403 for normal users; apply the rate yourself.

Nightly transform compute was only about 15–25% of the project bill. The rest was development and branch builds, ontology indexing and queries, and Contour. Check those before tuning nightly jobs for cost.

## 9. Refactor gates

Two cheap gates caught real bugs; run both before merging a refactor:

- **Manifest diff:** dump every registered transform's inputs, outputs, checks, resources and descriptions on the base and the branch. They must be byte-identical except for intended removals.
- **Import sweep:** import every module of the package with `pkgutil.walk_packages`. The manifest diff alone missed a broken import in a module the pipeline did not load.

## 10. Auth and tooling

OAuth from `tux token --foundry` works for dataset, orchestration, build and usage APIs. Stemma git needs a personal access token (see `foundry-local-development`).

When the Palantir MCP server drops, use the `palantir` CLI. Check argument names with `palantir search-tools` first (for example, `sqlQuery`, not `query`); wrappers can exit non-zero on transient errors.

## 11. Promotion and watcher scripts

- Run scripts with `nohup … & disown` and a log file.
- Use `set -o pipefail`; wrap every status poll in a retry loop.
- Before pushing to master, pull the branch, check that `origin/master` is an ancestor of `$SHA`, and push `"${SHA}:refs/heads/master"`. Quote the ref: in zsh, `$SHA:r` silently eats characters.
- Stop loudly on a merge conflict, failed push, moved master, or failed build.
- Keep watcher labels to `[a-z-]`.
- Check progress yourself; do not assume a background script is alive.
- Never start a merge-and-push script while a manual merge is open.

## 12. Schedules

After a cutover, confirm through schedule runs and build jobs that the nightly chain ran in order on the new code, with the expected duration.

## Related memory

[Foundry delivery tools](file:///Users/m332023/Vaults/Memory/tools/foundry-delivery-tools.md)
