---
name: duckdb-migration
description: Use when replacing a large distributed data transform with a measured DuckDB pipeline, especially when joins, Parquet I/O, schema compatibility, resource limits, and rollback need explicit validation.
---

# DuckDB Migration

Use this skill to plan and implement a measured migration from a large distributed Spark or dataframe pipeline to a single-node DuckDB transform. It covers semantic inventory, memory-bounded join passes, resource sizing, Parquet output, observability, and same-input equivalence.

This is a method, not permission to copy dataset identifiers, schemas, filters, or business rules from an example. Treat every target pipeline as its own contract.

## Non-negotiable repository safety

- Never work directly on a protected or main branch.
- Create a development branch or worktree before changing the target repository.
- Keep the legacy distributed implementation available until equivalence and rollback are demonstrated.
- Leave any read-only reference repository unchanged. Use inspection-only git commands.
- When more than one repository is involved, isolate worktrees under the owning project and update ignore rules only when required.

## When this architecture is a good candidate

Prefer a DuckDB experiment when the transform:

- Is a large batch or snapshot build dominated by joins and column projection.
- Has a single large fact input and reference or dimension tables that can be grouped into memory-bounded join stages.
- Does not require distributed-only operations, cross-node aggregation, or a working set larger than the available local disk and staged memory budget.
- Can preserve the existing output schema, metadata, filters, and row-level business logic exactly.
- Has consumers that are compatible with a multi-file Parquet output written as-is.

Stop and reassess if the full fact cannot be streamed through bounded passes, if a dimension cannot be staged or scanned within local disk, if the transform depends on distributed ordering or partition behavior, or if joins are intentionally many-to-many and row multiplication is part of the contract.

## Required workflow

### 1. Establish a reproducible distributed baseline

Record for the same input snapshot:

- Fact row count, output row count, column count, types, order, and descriptions.
- Runtime, billable resource usage, driver and worker resources, shuffle writes, spill, input and output sizes, and file counts.
- Per-stage timings and the largest build-side dimensions.
- Business filters, incremental or snapshot semantics, trigger inputs, and all intermediate datasets.
- Join keys and key uniqueness for every dimension.

Use a fixed sample and a full run. A useful sample is a reporting period with the largest join workload, not only a small or empty sample.

### 1a. Measure execution time and the scaling curve

Separate billable resource-hours from wall-clock time and observed CPU utilization. Use the platform's documented billing formula and resource telemetry; do not use elapsed time as a cost proxy.

For each candidate run:

- Record execution from job `RUNNING` through finish for resource-weighted job time. Track submit-to-finish separately; it includes queue time.
- Keep enclosing build start and end as a separate wall-clock metric because it includes orchestration and queueing.
- For benchmark series, record earliest build start through latest build finish and classify gaps, retries, dependency waits, and configuration refreshes.
- Report failed attempts separately from the valid candidate topology, while retaining them as real platform usage where applicable.

For distributed jobs, calculate driver and executor contributions separately, each as `max(vCPU, memory GiB / 7.5)` over its lifetime. Foundry Spark bills at or above this documented formula, including spin-up, so worker-active time from telemetry is only a lower bound. Count replacement worker series as additional allocated time, and do not confuse CPU utilization with billed resources.

For lightweight jobs, billed compute-seconds ≈ `max(vCPU, memory GiB / 7.5) × execution seconds` (`RUNNING` to finish; queue time is not billed). Verified billing came in at 0.90–0.98× this estimate. Record the requested resource envelope and the observed peak and average CPU, memory, pressure, temporary spill, and OOM status. Use the requested envelope for cost comparison and observed peaks for sizing the next run.

For monetary cost, Foundry compute costs $0.00019825 per compute-second for all compute types. Confirm actual usage through the Resource Management usage aggregator (see `foundry-transforms-ops`). Resource-hours are enough to compare topologies, but include storage, durable intermediates, and transaction charges when estimating total cost. Nightly transform compute was only about 15–25% of this project's bill; development and branch builds, ontology indexing and queries, and Contour made up the rest, so count iteration builds when judging savings.

- Compare execution minutes, never submit-to-finish time. Observed: queue time inflated two claimed savings; one candidate actually cost 3% more, and a smaller container cost more.
- Expect diminishing returns from more cores. Observed: a CPU-bound job went from 12 to 24 cores and 37.3 to 26.7 minutes (1.4× faster), while billed CPU-min rose 43%. Per-thread efficiency fell, and about 3 minutes of startup and platform checks did not scale.
- Use median CPU utilization as the signal: about 95% of allocated cores busy means work reduction is the main lever; about 45% means serial sections, so shrink the container or fix those sections.
- Choose size from a measured curve with at least two sizes, weighing nightly cost against development wall time. Observed: faster development rebuilds justified about 10% more CPU-min.
- Prefer code fixes over size changes: bucket wide-by-wide joins and resolve lookups on distinct coordinates (section 7) before buying a bigger container. Observed: one round of work reduction was both faster and cheaper at 22.4 minutes / 358 CPU-min, versus 37.3 / 448 and 26.7 / 641 for the size options.

### 2. Map distributed semantics before translating SQL

Do not start by translating syntax. Inventory:

- Every input and its catalog or dataset identifier.
- Every join in execution order, including dimension pre-joins.
- Fact-side and dimension-side key expressions, including concatenated keys and null behavior.
- Every `drop`, `select`, `withColumn`, `distinct`, filter, fallback, and description mapping.
- Any behavior that appears accidental but is observable in production.

Treat production behavior as the contract until the owner explicitly approves a semantic change. In particular, retain legacy fallback chains, filter boundaries, null behavior, and column naming quirks during the equivalence phase.

### 3. Create one lightweight DuckDB job

For a managed platform with a lightweight transform SDK, the shape is often similar to:

```python
@transform.using(
    output=Output(TARGET_OUTPUT),
    **{name: Input(identifier) for name, identifier in INPUT_IDENTIFIERS.items()},
).with_resources(cpu_cores=CPU_CORES, memory_gb=MEMORY_GB)
def compute(ctx: LightweightContext, output: LightweightOutput, **inputs):
    conn = ctx.duckdb().conn
```

Inputs may be registered as queryable DuckDB views by the runtime. Confirm the exact API and available DuckDB version in the target repository before implementation.

At session setup:

```python
conn.sql("SET preserve_insertion_order = false")
conn.sql(f"SET threads = {CPU_CORES}")
```

Row order is not a data contract for ordinary batch outputs. Disabling insertion-order preservation can prevent large buffering. Pin threads to the allocated vCPUs; do not let the container expose more logical host CPUs than the resource quota.

Leave headroom in the DuckDB memory limit for Python, Arrow or dataframe buffers, the platform sidecar, native output checks, and file I/O. Keep at least 40% memory headroom: measured peak should stay at or below about 60% of the container. Do not raise the limit to container RAM without a measured resource plan.

### 3a. Budget for platform output checks in the same container

Managed platforms may run declarative output checks (expectations, data-health checks) after user code exits, inside the same lightweight container and outside DuckDB's memory limit. On a distributed engine these checks run across executors; on one node they share the container's RAM.

- Measure memory after "user code exited" separately from DuckDB peaks. A job that finishes its DuckDB work and then runs out of memory has a check-sizing problem, not a SQL problem.
- Primary-key and grouped-uniqueness checks dominate. Observed: about 420 MB per million rows for a composite key, versus about 20 MB per million rows for all other column checks combined. A 190M-row output needed a 128 GB container solely for its native key check, while the DuckDB work fit in 60 GB with a 40 GB engine cap.
- Prefer enforcing key uniqueness and non-null keys inside DuckDB before publishing: per shard and on the assembled output, spill-capable, with nothing committed on failure. Then remove only the redundant platform key check. Keep every other platform check for health history and alerting. Get owner approval, because the data-health UI loses the key-check result.
- Before removing a platform key check, audit by introspecting the registered outputs' check objects, not by grepping source; a regex silently skipped a module name containing a digit. Every removed key must equal a key the engine enforces. Move any extra uniqueness rule (for example "one row per system") into the engine stage, with a test.
- Filter at the DuckDB call sites, so shared check catalogs and Spark reference builds keep the full list.
- After removal, re-measure and resize down. The old container size reflects the check, not the workload.
- Container memory telemetry can include page cache: a job with a 40 GB engine cap showed a flat 128 GB in a 128 GB container. Size from process RSS or cgroup anonymous memory logged by the job, not from the container memory chart alone.

#### Native checks that fail trigger retries; size or validate first

If the container dies during post-user checks, the platform may retry the whole job. Observed: three attempts of about 3.5 hours each, costing three times as much, with `Exiting user code` logged just before each container death. Watch for the pattern and cancel early through the build-cancel API.

1. Measure check memory locally at full scale. Observed: 13 checks over 93.7M rows × 226 columns added about 7 GB RSS in 11 seconds.
2. Size the container for checks plus work, or validate the same check in DuckDB before publishing, with approval.

Never drop non-key checks silently.

### 3b. Acquire remote warehouse inputs with explicit parallelism

For external warehouse inputs (for example, Snowflake `COPY INTO` a stage followed by `GET` to local disk), set file-download parallelism separately from container vCPUs. An adapter that uses the vCPU count for downloads makes a 1-CPU job download one file at a time.

- Observed at parallelism 16: a 1-CPU job's acquisition fell from 12.7 to 4.6 minutes; a 12-CPU job's wall time fell from 24.2 to 16.9 minutes.
- Observed with a job running alone: 32 was fastest at 13.9 minutes; 64 took 16.1 minutes. With several jobs downloading together, they competed and 32/64 took 26–27 minutes. Tune for nightly concurrency, not a solo run.
- Before tuning, timestamp export submitted, export finished, first file downloaded, and last file downloaded. Observed: all 22 exports were submitted within 40 seconds, then stalled for 70 minutes because a read-only secondary database forced warehouse-side `COPY` to a fallback staging database. Parallel downloads did not help (71.5 vs 72.1 minutes). Fix the source warehouse or staging path; local concurrency cannot fix it.

### 4. Recreate pre-join views lazily

If the distributed pipeline enriches a dimension before the main fact joins, create a DuckDB view that preserves the same semantics. Views defer work until a pass reads them:

```sql
CREATE VIEW company_prepped AS
SELECT DISTINCT c.*, cn.country_text
FROM company AS c
LEFT JOIN (
    SELECT DISTINCT country_id, country_text
    FROM country
) AS cn USING (country_id);
```

Use `DISTINCT` only where it is part of the required semantic or uniqueness contract. A global `DISTINCT` that happens to be a no-op in one pipeline must not be removed or retained for another without proof.

#### Prove uniqueness narrowly, keep the fallback

A full-row `DISTINCT` on wide rows is expensive. Check uniqueness on the narrow identity columns with `GROUP BY ... HAVING count(*) > 1 LIMIT 1`. Skip the full-row `DISTINCT` only when that check finds no duplicates; retain the `DISTINCT` path as the fallback and test both paths.

### 5. Build a fact view

Apply initial drops without enumerating hundreds of survivor columns, and recreate all legacy join keys and filters exactly:

```sql
SELECT * EXCLUDE ("known_dropped_column"),
       concat_ws('_', "key_a", "key_b") AS "composite_key"
FROM fact_source
WHERE <production filter>;
```

Resolve dynamic configuration values before constructing SQL and escape values safely. Preserve schedule-control inputs even when they do not affect row values if the legacy job reads them for parity. A sample predicate must be explicit and removable; never leave a zero-row smoke predicate enabled for a benchmark or production build.

### 6. Derive the output schema; do not hand-copy it

Large distributed pipelines often rely on positional `drop()` behavior. A column introduced at child stage `k` can only be removed by drop lists applied at stage `k` or later. Reproduce this by walking child drop lists backward:

```python
suffix = set()
for k in range(len(child_drop_lists) - 1, -1, -1):
    suffix |= child_drop_lists[k]
    child_suffix_drops[k] = set(suffix)
```

Then generate final columns deterministically:

1. Fact columns, excluding the legacy parent and all-child drop sets.
2. Parent-dimension columns, with the same legacy drops.
3. KPI or computed columns in their original logical position.
4. Child columns that survive their own suffix drop set.
5. Duplicate names handled explicitly with the same first or last-wins rule as the legacy implementation.
6. Temporary fact-side join keys carried through intermediate passes even if they are absent from the final schema.

Validate names, types, order, and descriptions against the production schema. Do not simplify a positional drop rule into a global drop without proving equivalence.

### 7. Split joins into memory-bounded passes

A single query containing all joins may OOM because all hash build sides must coexist. Group joins by build-side memory, not merely by business topic. A common shape is:

- **Pass 0:** fact plus small parent dimensions and computed expressions, streamed to compressed scratch Parquet.
- **Pass 1:** medium child dimensions, streamed to another scratch directory.
- **Pass 2:** the largest dimension plus the final projection, written to the output as ZSTD Parquet.

The pass count is a measured design choice. Benchmark one-pass, two-pass, and three-pass candidates on representative data. Too many concurrent hash tables approach the memory limit; too many threads increase per-thread buffers and spill. More memory is not automatically more cost-effective.

Use plain `LEFT JOIN`s and remove distributed salting, explode, or union workarounds unless a benchmark proves they are still required. Single-node hash joins do not need distributed skew mitigation, but they still require unique dimension keys and enough memory.

A generic pass shape is:

```sql
COPY (
    SELECT ...
    FROM fact_or_read_parquet_previous_pass AS fact
    LEFT JOIN dimension_1 AS d1 ON ...
    LEFT JOIN dimension_2 AS d2 ON ...
) TO '<scratch-or-output-directory>'
(FORMAT PARQUET, COMPRESSION LZ4);
```

Read the previous pass with `read_parquet('<dir>/*.parquet')`. Write each next pass completely before deleting the consumed directory; this keeps peak disk close to two generations and avoids deleting the only input after a failed write.

#### Count full-width rewrites; fuse row-local stages

Observed: on outputs with 200+ columns, every materialized stage rewrites the whole table, and I/O plus compression dominated CPU time. Count stages per shard; materialize only for big joins, windows or aggregations, results reused by later stages, and memory boundaries.

Fuse row-local chains (`CASE`, `COALESCE`, casts, and lookups into small tables) into one projection. Add late enrichment columns in the final output pass. Do not inline a predecessor stage's SQL instead of reading its output: DuckDB recomputes it. Observed: one stage ran three times this way and caused an out-of-memory kill. Read the materialized result.

#### Wide-by-wide joins: bucket both sides

The warning pattern is tracked memory pinned at the cap for a long time while temporary spill grows into tens or hundreds of GB. Observed: a 93.6M-row wide fact `LEFT JOIN`ed to 86.1M wide PO rows at a 22.5 GB cap ran 124 minutes and spilled 155 GB.

1. Write both sides as Parquet partitioned by `hash(key) % N`, using an integer bucket column and `PARTITION_BY`.
2. Join one matching bucket pair at a time so each pair fits in memory.
3. Return a typed empty relation for a missing bucket.

Narrow the build side to the needed key and columns before joining. Observed: bucketing eliminated spill and cut runtime from 155 to 15.8 minutes. Upsizing does not fix a working set several times larger than memory.

#### Out-of-memory beyond DuckDB's limit: aggregate state DuckDB can't spill

If the process grows far beyond `memory_limit` within seconds, suspect aggregate state DuckDB cannot spill: `MIN`, `MAX`, `arg_max`, `list`, or `string_agg` on `VARCHAR` or `STRUCT` over tens of millions of groups. Observed: process memory rose from 3 GB to over 45 GB within 60 seconds.

- Aggregate on integer or hash keys; preserve exact semantics with lossless integer encodings and test hash collisions.
- Materialize first, then process in buckets.
- Lower threads for that stage only, then restore them. Never cap the output or final-write stages below the container's vCPUs; that leaves paid cores idle during the longest I/O and compression phase.

Observed: 194M edges over 86M groups; local peak memory fell from 14.8 to 5.5 GB. Log memory at each stage start and every 15 seconds so the next failure points to its stage.

#### Resolve lookups on distinct coordinates, not on wide rows

Interval, ASOF, and LATERAL lookups (for example, FX by currency/date or system mapping by date range) can sort and spill when repeated over every wide row.

1. Select distinct lookup coordinates, such as `(currency, date)` or `(system, posting_date)`.
2. Resolve each lookup once, preserving its original tie-break `ORDER BY`.
3. Hash-join the result back with `IS NOT DISTINCT FROM` so null keys match correctly.

Before replacing `BETWEEN` with ASOF plus an upper-bound guard, prove intervals do not overlap, for example with `LEAD` per currency. Observed: 44 GB and 31 GB spills disappeared, and FX took 5 seconds instead of 22.7 seconds per 1M rows.

### 8. Choose compression and file layout deliberately

- Use LZ4 for throwaway scratch: compression CPU matters more than long-term size.
- Use ZSTD for the published output.
- Under parallel DuckDB `COPY`, `FILE_SIZE_BYTES` may produce one row group per small file and be ineffective. Test `ROW_GROUPS_PER_FILE` or an equivalent layout control to produce files sized for downstream parallel reads.
- Preserve a tuned multi-file output instead of forcing a platform rewrite; confirm that downstream consumers are file-layout agnostic.
- Log file count, total bytes, and minimum, average, and maximum file size for every stage.

### 9. Preserve final projection and metadata

The last pass should emit the final schema explicitly and in production order. Apply legacy blank-name-to-ID fallbacks only at the same point as the old pipeline. Preserve the exact order and even documented quirks of fallback pair construction; production behavior is still the contract.

Capture a zero-row frame from the final Parquet schema before handing the output directory to the platform. Attach column descriptions using the metadata API supported by the target runtime. Verify the API and test both preview and real-build behavior.

### 10. Add fail-safe observability

Every pass should log:

- Start, end, and elapsed time.
- Row count written, if available.
- Number and total size of files.
- DuckDB tracked memory, temporary spill, and free scratch disk.
- Final output size and file-size distribution.

A separate monitor connection or cursor can periodically query `duckdb_memory()` and `duckdb_temporary_files()` while `COPY` runs. Observability must not turn a successful data build into a failure; telemetry failures may warn. Resource exhaustion and data-integrity failures are different: handle them as hard failures where possible.

### 11. Enforce the row-conservation invariant

For a fact-preserving pipeline made only of left joins, every pass must write exactly the pass-0 row count. A larger count means a dimension key is no longer unique and the join is fanning out; a smaller count means the SQL is not the intended left-join contract or a write, filter, or input problem occurred.

```python
if pass_rows >= 0 and pass0_rows >= 0 and pass_rows != pass0_rows:
    raise RuntimeError("left-join row-count invariant failed")
```

Fail the candidate build or route it to explicit review unless warning-only behavior has been approved. Test key uniqueness directly before cutover; a warning after producing incorrect totals is too late.

## Validation gates before cutover

Run gates in increasing strength:

1. **Schema gate:** exact column names, types, order, nullability where relevant, and descriptions.
2. **Aggregate gate:** total and per-period row counts; null counts; sums of every financial or business KPI.
3. **Full snapshot comparison:** compare row fingerprints or per-column multisets against the production output. Separate fact or KPI columns from dimension-origin columns.
4. **Same-snapshot head-to-head:** run old and new logic in the same time window on identical inputs. Compare every output row and column.
5. **Operational gate:** verify schedule, trigger inputs, output transaction, descriptions, downstream reads, file layout, and rollback.

A behavior change is proven only by a branch build compared against current output with 0 differing rows in both directions (for example `EXCEPT ALL` each way, so row multiplicity counts) plus exact schema equality.

For refactors that should not change behavior, also run two cheap gates that caught real bugs:

- **Manifest diff:** dump every registered transform's inputs, outputs, checks, resources and descriptions on the base and the branch; they must be byte-identical except for intended removals.
- **Import sweep:** import every module with `pkgutil.walk_packages`. A manifest check alone missed a broken import.

A comparison against an output built on a different snapshot can show legitimate differences from changed reference data. Do not label that a logic failure without controlling input snapshots, and do not claim full equivalence from an uncontrolled comparison. Same-input comparison is stronger.

### Comparison harness details that matter

- Reuse one fixed input set. Materialize snapshot inputs once on the development branch and build the Spark reference once; after code changes, rebuild only the DuckDB candidate and comparison.
- Build every proof output at an experimental path. Never build production-path outputs on a branch as proof. Comparing two experimental candidates (for example a fixed-input copy and a canonical-code copy) separates logic differences from run-to-run randomness: identical diffs in both indicate a logic difference.
- Check input transaction IDs and evaluation date, not branch names. A reference that read through a master fallback may still have read the same transactions.
- Report differences per scope (ERP or system), not only in total.
- Allow floating-point tolerance only per column, only for `DOUBLE` sums over many rows: relative tolerance 1e-12 to 1e-10. NULL versus a value always differs; report the largest absolute and relative differences. Never apply tolerance globally.
- Validate expensive layers on diagnostic slices first, then run one full-scope reference build.

## Target adaptation checklist

Before changing a transform:

- Locate the current transform, its tests, inputs, outputs, and all upstream reference datasets.
- Identify whether the expensive work is in the application, clean, ontology, or legacy layer; preserve the contract at the published layer.
- Capture current distributed build metrics and largest joins.
- Enumerate domain-specific keys, filters, deduplication, calculations, fallback behavior, and exception columns.
- Confirm the output grain and whether any join is intentionally one-to-many.
- Profile each candidate dimension for duplicate join keys, row count, compressed size, and estimated decompressed or hash-build size.
- Design stage boundaries from measured memory, then benchmark one-pass, two-pass, and three-pass candidates on a representative sample.
- Port column descriptions and output schema tests before optimizing business expressions.
- Run existing unit tests plus equivalence tests; add fixtures for null keys, duplicate dimension keys, missing descriptions, and empty inputs.
- Keep the distributed path available until same-snapshot equivalence and rollback are accepted.

## Promotion automation on a managed platform

Background watchers and promotion scripts can fail quietly: one-off CLI errors under `set -e`, server or network restarts that kill background shells, missing `pipefail` that pushes despite red CI, or merge conflicts that stop without a message.

- Retry status polls. Stop loudly on merge conflicts, failed pushes, or a master branch that moved.
- Pull the remote branch before pushing; platform bots may commit after each push.
- Set `pipefail`, check progress yourself, and do not trust a background script alone.
- CI results may be cached per commit; a retry needs a new commit.

## Common traps and rejected approaches

- **Copying identifiers or constants from an example:** source IDs, columns, filters, and fallback mappings are target-specific.
- **Keeping distributed salting on one node:** unnecessary explode or union plans create dead rows and extra I/O; remove only after validating join semantics.
- **One giant query:** often OOMs when all hash tables coexist.
- **Over-threading:** per-thread buffers can create memory pressure and spill; match threads to the resource quota.
- **Under-threading the output stage:** capping threads below the container's vCPUs for final writes wastes billed cores.
- **Raising DuckDB's memory limit to container RAM:** leaves no room for the runtime and can cause an OOM kill.
- **Global `DISTINCT` as a safety blanket:** it may be expensive and may hide duplicate-key problems; prove whether it changes rows.
- **Skipping a wide-row `DISTINCT` without proof:** check narrow identity columns first and keep the full-row fallback.
- **Coupling download parallelism to vCPUs or tuning before finding the bottleneck:** set it separately for nightly concurrency, timestamp export and download phases, and fix the warehouse staging path when `COPY` is slow.
- **Treating queue time as execution time or assuming more cores scale linearly:** compare `RUNNING` to finish and use the measured CPU and cost curve.
- **Materializing every wide-table stage:** full-width rewrites can make I/O and compression dominate; fuse row-local projections.
- **Upsizing a wide-by-wide join instead of bucketing both sides:** a working set several times memory needs bounded bucket pairs.
- **Assuming `memory_limit` caps every aggregate:** some aggregate states cannot spill; bucket the work and control threads for that stage.
- **Running interval lookups over every wide row:** resolve distinct coordinates first and preserve tie-break and null semantics.
- **Ignoring native-check retries:** post-user check OOMs can replay the whole build; measure, size, or validate with approval.
- **Dropping columns too early or globally:** changes positional semantics and can remove columns that should survive.
- **Reordering or normalizing business quirks:** exact output compatibility comes before cleanup during migration.
- **Deleting scratch before the next write succeeds:** can make a failed build unrecoverable.
- **Using only row counts for validation:** row counts can match while values, nulls, types, descriptions, or KPI totals differ.
- **Treating a snapshot comparison as same-input proof:** changed reference data creates legitimate differences.
- **Comparing different inputs or branch labels:** pin transaction IDs and evaluation date; reuse one reference and break results down per scope.
- **Using global floating-point tolerance:** allow it only per column for large `DOUBLE` sums; NULL versus value always differs.
- **Assuming ancient dates or Parquet footer metadata are irrelevant:** follow Spark's per-input rebase rule and test real pre-1582 date pairs.
- **Leaving sample mode enabled:** a zero-row smoke predicate must never survive into benchmarking or production.
- **Ignoring metadata or preview differences:** a path handoff and a dataframe-style metadata write may not compose in preview; test the target runtime.
- **Sizing the container for platform checks:** post-user-code key checks can need more RAM than the whole DuckDB job. Enforce keys in DuckDB and drop the duplicate platform check instead of buying a larger container.
- **Sizing from the container memory chart:** it may count page cache and sit at the cap. Log process RSS or cgroup anonymous memory per stage instead.
- **Confusing engine limits with billing:** DuckDB `threads` and `memory_limit` only shape behavior inside the container. The platform bills the requested container envelope from `RUNNING` to finish.
- **Trusting promotion automation without checking it:** retries, branch movement, bot commits, conflicts, and cached CI can change the outcome.

### Pre-1582 dates and Parquet calendar metadata

Hosted Spark rebases dates on read using Parquet footer metadata, including files whose footer has `org.apache.spark.version` but no `legacyDateTime` marker. DuckDB-written files can have this metadata. A DuckDB consumer that does not rebase on read but writes `LEGACY` can shift ancient dates twice. Observed: 33 PO delivery dates in years 0123–1010 shifted by up to 6 days; years 200–299 had zero offset and hid the bug.

- Choose the read rebase for each input from its footer, using hosted Spark's rule.
- Publish with Spark `LEGACY` metadata when Spark consumers read the output.
- Never filter, clamp, or null ancient dates; they are real source typos.
- Add regression tests with real date pairs.

## Definition of done

A DuckDB candidate is ready for review only when:

- It runs on a non-main development branch with the distributed implementation retained.
- It uses explicit resource and thread settings and bounded passes justified by measurements.
- It preserves the published schema, filters, null behavior, descriptions, and business calculations.
- It logs stage timings, row counts, file sizes, memory, spill, and free scratch disk.
- Row-conservation and dimension-key uniqueness checks pass.
- Schema, aggregate, same-input value, metadata, downstream, and rollback gates pass.
- The measured cost, runtime, resource tradeoff, rejected alternatives, and known limitations are documented.
- Promotion ends with a production build on master, and the nightly schedule is verified to have run the new engine within its window.
