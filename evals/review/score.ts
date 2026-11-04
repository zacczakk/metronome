import { basename } from "path";

export interface BugLocation {
  file: string;
  lines: [number, number];
  summary: string;
  fixedBy: string;
}

export interface ReviewCase {
  id: string;
  kind: "bug" | "clean";
  commit: string;
  bug?: BugLocation;
}

export interface ReviewSet {
  repo: string;
  cases: ReviewCase[];
}

export type Hit = "line" | "file" | "miss";

export type Verdict = "ship" | "block" | null;

export interface CaseScore {
  hit: Hit | null;
  verdict: Verdict;
  pass: boolean;
}

const LINE_SLACK = 5;

function verdictLine(review: string): string | undefined {
  return [...review.matchAll(/Verdict:\s*(.+)/gi)].at(-1)?.[1]?.replace(/[`*]/g, "").trim();
}

export function readVerdict(review: string): Verdict {
  const line = verdictLine(review);
  if (line) return /^ship\b/i.test(line) ? "ship" : "block";
  return /Looks good\.\s*Ship\./i.test(review) ? "ship" : null;
}

// Finding text by number, each cut at the next group header or the verdict.
function findings(review: string): Map<number, string> {
  const parts = review.split(/^\s*(\d+)\.\s+(?=\*\*)/m);
  const byNumber = new Map<number, string>();
  for (let i = 1; i < parts.length; i += 2) {
    const text = parts[i + 1] ?? "";
    const end = text.search(/^\W*(?:Must fix|Should fix|Nice to have|Pre-existing)\b|^Verdict:/im);
    byNumber.set(Number(parts[i]), end < 0 ? text : text.slice(0, end));
  }
  return byNumber;
}

// The findings the verdict asks to fix; a verdict without numbers blocks on all of them.
export function blockingText(review: string): string {
  const all = findings(review);
  const numbers = [...(verdictLine(review) ?? "").matchAll(/\d+/g)].map(Number);
  const chosen = numbers.length > 0 ? numbers.filter((n) => all.has(n)) : [...all.keys()];
  return chosen.map((n) => all.get(n)).join("\n");
}

export function findHit(bug: BugLocation, text: string): Hit {
  const name = basename(bug.file);
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const refs = text.matchAll(new RegExp(`(?<![\\w./-])((?:[\\w.-]+/)*)${escaped}(?::L?(\\d+)(?:-L?(\\d+))?)?`, "g"));
  const [start, end] = bug.lines;
  let hit: Hit = "miss";
  for (const [, dir = "", from, to] of refs) {
    if (dir && !bug.file.endsWith(`${dir}${name}`)) continue;
    hit = "file";
    if (!from) continue;
    const last = to ? Number(to) : Number(from);
    if (Number(from) <= end + LINE_SLACK && last >= start - LINE_SLACK) return "line";
  }
  return hit;
}

export function scoreCase(reviewCase: ReviewCase, review: string): CaseScore {
  const verdict = readVerdict(review);
  if (reviewCase.kind === "clean") return { hit: null, verdict, pass: verdict === "ship" };
  if (!reviewCase.bug) throw new Error(`Case ${reviewCase.id}: bug cases need a bug location`);
  const hit = verdict === "block" ? findHit(reviewCase.bug, blockingText(review)) : "miss";
  return { hit, verdict, pass: hit !== "miss" };
}
