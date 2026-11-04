import { describe, expect, test } from "bun:test";
import { scoreCase, type ReviewCase } from "./score";

const bugCase: ReviewCase = {
  id: "bug-sample",
  kind: "bug",
  commit: "abc",
  bug: { file: "src/proxy/stream.ts", lines: [40, 52], summary: "drops events", fixedBy: "def" },
};

describe("scoreCase", () => {
  test("bug case passes only when a finding the verdict blocks on cites the bug", () => {
    const caught = "1. **Events lost** (`src/proxy/stream.ts:L44-48`)\n\nVerdict: fix 1 first.";
    const wrongLines = "1. **Naming** (`stream.ts:L200`)\n\nVerdict: fix 1 first.";
    const otherFile = "1. **Events lost** (`src/logging/stream.ts:L44`)\n\nVerdict: fix 1 first.";
    const notBlocking = "1. **Typo** (`src/a.ts:L1`)\n\n**Pre-existing**\n\n2. **Events lost** (`stream.ts:L44`)\n\nVerdict: fix 1 first.";
    const shipped = "1. **Events lost** (`stream.ts:L44`)\n\nVerdict: Ship.";
    const noVerdict = "I will inspect stream.ts:L44 before giving a verdict.";

    expect(scoreCase(bugCase, caught)).toEqual({ hit: "line", verdict: "block", pass: true });
    expect(scoreCase(bugCase, wrongLines).hit).toBe("file");
    expect(scoreCase(bugCase, otherFile).pass).toBe(false);
    expect(scoreCase(bugCase, notBlocking).pass).toBe(false);
    expect(scoreCase(bugCase, shipped).pass).toBe(false);
    expect(scoreCase(bugCase, noVerdict)).toEqual({ hit: "miss", verdict: null, pass: false });
  });

  test("clean case passes only on an explicit ship verdict", () => {
    const clean: ReviewCase = { id: "clean-sample", kind: "clean", commit: "abc" };

    expect(scoreCase(clean, "Looks good. Ship.").pass).toBe(true);
    expect(scoreCase(clean, "Verdict: **Ship.**").pass).toBe(true);
    expect(scoreCase(clean, "Verdict: fix 2 first.").pass).toBe(false);
    expect(scoreCase(clean, "Still reading the diff.").pass).toBe(false);
  });
});
