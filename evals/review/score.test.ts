import { describe, expect, test } from "bun:test";
import { scoreCase, type ReviewCase } from "./score";

const bugCase: ReviewCase = {
  id: "bug-sample",
  kind: "bug",
  commit: "abc",
  bug: { file: "src/proxy/stream.ts", lines: [40, 52], summary: "drops events", fixedBy: "def" },
};

describe("scoreCase", () => {
  test("bug case passes only when the review names the bug lines and blocks the change", () => {
    const caught = "1. **Events lost** (`stream.ts:L44-48`)\n\nVerdict: fix 1 first.";
    const wrongLines = "1. **Naming** (`stream.ts:L200`)\n\nVerdict: fix 1 first.";
    const shipped = "1. **Events lost** (`stream.ts:L44`)\n\nVerdict: Ship.";

    expect(scoreCase(bugCase, caught)).toEqual({ hit: "line", ship: false, pass: true });
    expect(scoreCase(bugCase, wrongLines).hit).toBe("file");
    expect(scoreCase(bugCase, shipped).pass).toBe(false);
  });

  test("clean case passes only when the review ships it", () => {
    const clean: ReviewCase = { id: "clean-sample", kind: "clean", commit: "abc" };

    expect(scoreCase(clean, "Looks good. Ship.").pass).toBe(true);
    expect(scoreCase(clean, "Verdict: **Ship.**").pass).toBe(true);
    expect(scoreCase(clean, "Verdict: fix 2 first.").pass).toBe(false);
  });
});
