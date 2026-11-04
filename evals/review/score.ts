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

export interface CaseScore {
  hit: Hit | null;
  ship: boolean;
  pass: boolean;
}

const LINE_SLACK = 5;

export function findHit(bug: BugLocation, review: string): Hit {
  const name = basename(bug.file);
  if (!review.includes(name)) return "miss";

  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const refs = review.matchAll(new RegExp(`${escaped}:L?(\\d+)(?:-L?(\\d+))?`, "g"));
  const [start, end] = bug.lines;
  for (const ref of refs) {
    const from = Number(ref[1]);
    const to = ref[2] ? Number(ref[2]) : from;
    if (from <= end + LINE_SLACK && to >= start - LINE_SLACK) return "line";
  }
  return "file";
}

export function saysShip(review: string): boolean {
  const verdicts = [...review.matchAll(/Verdict:\s*(.+)/gi)];
  const last = verdicts.at(-1)?.[1];
  if (last) return /^ship\b/i.test(last.replace(/[`*]/g, "").trim());
  return /Looks good\.\s*Ship\./i.test(review);
}

export function scoreCase(reviewCase: ReviewCase, review: string): CaseScore {
  const ship = saysShip(review);
  if (reviewCase.kind === "clean") return { hit: null, ship, pass: ship };
  if (!reviewCase.bug) throw new Error(`Case ${reviewCase.id}: bug cases need a bug location`);
  const hit = findHit(reviewCase.bug, review);
  return { hit, ship, pass: hit !== "miss" && !ship };
}
