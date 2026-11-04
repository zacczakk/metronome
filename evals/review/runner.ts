#!/usr/bin/env bun
import { parseArgs } from "util";
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "fs";
import { tmpdir } from "os";
import { join, resolve } from "path";
import { scoreCase, type CaseScore, type ReviewCase, type ReviewSet } from "./score";

const { values } = parseArgs({
  args: Bun.argv.slice(2),
  options: {
    set: { type: "string" },
    skill: { type: "string", default: resolve(import.meta.dir, "../../configs/skills/ponytail-review/SKILL.md") },
    model: { type: "string" },
    case: { type: "string" },
    out: { type: "string" },
    workers: { type: "string", default: "2" },
    timeout: { type: "string", default: "20" },
  },
  strict: true,
});

if (!values.set) {
  console.error("Usage: bun evals/review/runner.ts --set .metronome/review-evals/<repo>.json [--case <id>] [--model provider/model] [--workers 2] [--timeout <minutes>]");
  process.exit(1);
}

const set: ReviewSet = JSON.parse(readFileSync(resolve(values.set), "utf-8"));
const skill = readFileSync(resolve(values.skill), "utf-8").replace(/^---[\s\S]*?---\n/, "");
const cases = values.case ? set.cases.filter((c) => c.id === values.case) : set.cases;
if (cases.length === 0) {
  console.error(`No case matches "${values.case}". Ids: ${set.cases.map((c) => c.id).join(", ")}`);
  process.exit(1);
}
const outDir = resolve(values.out ?? join(tmpdir(), `review-eval-${Date.now()}`));
const timeoutMs = Number(values.timeout) * 60_000;
mkdirSync(outDir, { recursive: true });

const prompt = `Follow these review instructions exactly. Do not load any skill.

<instructions>
${skill}
</instructions>

The change to review is the last commit in this checkout: run \`git show HEAD\`. Review only this checkout. Do not edit any files. Give the full review in your final message.`;

interface CaseResult extends CaseScore {
  id: string;
  kind: ReviewCase["kind"];
  cost: number;
  error?: string;
}

async function git(args: string[], cwd: string): Promise<void> {
  const proc = Bun.spawn(["git", ...args], { cwd, stdout: "ignore", stderr: "pipe" });
  if ((await proc.exited) !== 0) {
    throw new Error(`git ${args.join(" ")}: ${await new Response(proc.stderr).text()}`);
  }
}

// Depth 2 fetch: the reviewer sees the commit and its parent, never the later fix.
async function checkout(commit: string): Promise<string> {
  const dir = mkdtempSync(join(tmpdir(), "review-case-"));
  try {
    await git(["init", "-q"], dir);
    await git(["fetch", "-q", "--depth", "2", `file://${resolve(set.repo)}`, commit], dir);
    await git(["checkout", "-q", "--detach", "FETCH_HEAD"], dir);
    return dir;
  } catch (error) {
    rmSync(dir, { recursive: true, force: true });
    throw error;
  }
}

async function review(dir: string): Promise<{ review: string; cost: number; log: string }> {
  const args = ["opencode", "run", "--standalone", "--format", "json"];
  if (values.model) args.push("--model", values.model);
  args.push(prompt);

  // OpenCode resolves the project from PWD, which Bun.spawn's cwd does not update.
  const proc = Bun.spawn(args, { cwd: dir, env: { ...process.env, PWD: dir }, stdout: "pipe", stderr: "ignore" });
  let timedOut = false;
  const timer = setTimeout(() => {
    timedOut = true;
    proc.kill();
  }, timeoutMs);
  const log = await new Response(proc.stdout).text();
  const exitCode = await proc.exited;
  clearTimeout(timer);
  if (timedOut) throw new Error(`timed out after ${values.timeout} minutes`);
  if (exitCode !== 0) throw new Error(`opencode run exited ${exitCode}`);

  let text = "";
  let cost = 0;
  for (const line of log.split("\n")) {
    if (!line.trim()) continue;
    try {
      const event = JSON.parse(line);
      if (event.type === "text" && typeof event.part?.text === "string" && event.part.text.trim()) {
        text = event.part.text;
      }
      if (event.type === "step_finish" && typeof event.part?.cost === "number") cost += event.part.cost;
    } catch {}
  }
  return { review: text, cost, log };
}

async function runCase(reviewCase: ReviewCase): Promise<CaseResult> {
  let dir: string | undefined;
  try {
    dir = await checkout(reviewCase.commit);
    const result = await review(dir);
    writeFileSync(join(outDir, `${reviewCase.id}.md`), result.review);
    writeFileSync(join(outDir, `${reviewCase.id}.ndjson`), result.log);
    if (!result.review) throw new Error("no review text from opencode run");
    const score = scoreCase(reviewCase, result.review);
    console.log(`${score.pass ? "PASS" : "FAIL"} ${reviewCase.id} hit=${score.hit ?? "-"} verdict=${score.verdict ?? "none"} $${result.cost.toFixed(2)}`);
    return { id: reviewCase.id, kind: reviewCase.kind, cost: result.cost, ...score };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.log(`ERROR ${reviewCase.id}: ${message}`);
    return { id: reviewCase.id, kind: reviewCase.kind, hit: null, verdict: null, pass: false, cost: 0, error: message };
  } finally {
    if (dir) rmSync(dir, { recursive: true, force: true });
  }
}

const results: CaseResult[] = [];
const queue = [...cases];
await Promise.all(
  Array.from({ length: Math.max(1, Number(values.workers)) }, async () => {
    for (let next = queue.shift(); next; next = queue.shift()) results.push(await runCase(next));
  }),
);
results.sort((a, b) => a.id.localeCompare(b.id));

const bugs = results.filter((r) => r.kind === "bug");
const clean = results.filter((r) => r.kind === "clean");
const rows = results.map(
  (r) => `| ${r.id} | ${r.pass ? "pass" : "fail"} | ${r.hit ?? "-"} | ${r.verdict ?? "none"} | $${r.cost.toFixed(2)} | ${r.error ?? ""} |`,
);
const summary = [
  `# Review eval: ${values.set}`,
  "",
  `Bugs caught: ${bugs.filter((r) => r.pass).length}/${bugs.length}. Clean changes shipped: ${clean.filter((r) => r.pass).length}/${clean.length}. Cost: $${results.reduce((sum, r) => sum + r.cost, 0).toFixed(2)}.`,
  "",
  "| Case | Result | Hit | Verdict | Cost | Error |",
  "|---|---|---|---|---|---|",
  ...rows,
  "",
].join("\n");
writeFileSync(join(outDir, "summary.md"), summary);
writeFileSync(join(outDir, "summary.json"), JSON.stringify(results, null, 2));
console.log(`\n${summary}\nReviews: ${outDir}`);
