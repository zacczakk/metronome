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

### 1a. Evaluate compute cost and elapsed time consistently

Separate billable resource-hours from wall-clock time and observed CPU utilization. Use the platform's documented billing formula and resource telemetry; do not use elapsed time as a cost proxy.

For each candidate run:

- Record job start through finish for resource-weighted job time.
- Keep enclosing build start and end as a separate wall-clock metric because it includes orchestration and queueing.
- For benchmark series, record earliest build start through latest build finish and classify gaps, retries, dependency waits, and configuration refreshes.
- Report failed attempts separately from the valid candidate topology, while retaining them as real platform usage where applicable.

For distributed jobs, calculate driver and worker contributions separately. With dynamic allocation, use worker-active time from telemetry rather than multiplying the maximum worker count by the entire job duration. Count replacement worker series as additional allocated time, but do not confuse CPU utilization with billed resources.

For lightweight jobs, record the requested resource envelope and the observed peak and average CPU, memory, pressure, temporary spill, and OOM status. Use the requested envelope for cost comparison and observed peaks for sizing the next run.

For monetary cost, attach the organization's resource usage export and contract rate. Resource-hours are enough to compare topologies, but include storage, durable intermediates, and transaction charges when estimating total cost.

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

Leave headroom in the DuckDB memory limit for Python, Arrow or dataframe buffers, the platform sidecar, and file I/O. Do not raise the limit to container RAM without a measured resource plan.

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

A comparison against an output built on a different snapshot can show legitimate differences from changed reference data. Do not label that a logic failure without controlling input snapshots, and do not claim full equivalence from an uncontrolled comparison. Same-input comparison is stronger.

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

## Common traps and rejected approaches

- **Copying identifiers or constants from an example:** source IDs, columns, filters, and fallback mappings are target-specific.
- **Keeping distributed salting on one node:** unnecessary explode or union plans create dead rows and extra I/O; remove only after validating join semantics.
- **One giant query:** often OOMs when all hash tables coexist.
- **Over-threading:** per-thread buffers can create memory pressure and spill; match threads to the resource quota.
- **Raising DuckDB's memory limit to container RAM:** leaves no room for the runtime and can cause an OOM kill.
- **Global `DISTINCT` as a safety blanket:** it may be expensive and may hide duplicate-key problems; prove whether it changes rows.
- **Dropping columns too early or globally:** changes positional semantics and can remove columns that should survive.
- **Reordering or normalizing business quirks:** exact output compatibility comes before cleanup during migration.
- **Deleting scratch before the next write succeeds:** can make a failed build unrecoverable.
- **Using only row counts for validation:** row counts can match while values, nulls, types, descriptions, or KPI totals differ.
- **Treating a snapshot comparison as same-input proof:** changed reference data creates legitimate differences.
- **Leaving sample mode enabled:** a zero-row smoke predicate must never survive into benchmarking or production.
- **Ignoring metadata or preview differences:** a path handoff and a dataframe-style metadata write may not compose in preview; test the target runtime.

## Definition of done

A DuckDB candidate is ready for review only when:

- It runs on a non-main development branch with the distributed implementation retained.
- It uses explicit resource and thread settings and bounded passes justified by measurements.
- It preserves the published schema, filters, null behavior, descriptions, and business calculations.
- It logs stage timings, row counts, file sizes, memory, spill, and free scratch disk.
- Row-conservation and dimension-key uniqueness checks pass.
- Schema, aggregate, same-input value, metadata, downstream, and rollback gates pass.
- The measured cost, runtime, resource tradeoff, rejected alternatives, and known limitations are documented.
