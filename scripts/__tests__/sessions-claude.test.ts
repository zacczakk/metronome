import { afterEach, describe, expect, test } from "bun:test";
import { mkdirSync, mkdtempSync, rmSync, symlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const roots: string[] = [];

afterEach(() => {
  for (const root of roots.splice(0)) rmSync(root, { recursive: true });
});

describe("sessions Claude adapter", () => {
  test("a broken Claude session link fails the export without blocking the search index", () => {
    const root = mkdtempSync(join(tmpdir(), "sessions-claude-"));
    roots.push(root);
    const home = join(root, "home");
    const project = join(home, ".claude", "projects", "-work-metronome");
    mkdirSync(project, { recursive: true });
    writeFileSync(
      join(project, "good.jsonl"),
      `${JSON.stringify({ type: "user", sessionId: "good", cwd: "/work/metronome", timestamp: "2026-11-13T00:00:00Z", message: { content: "Index this fixture" } })}\n`,
    );
    symlinkSync(join(root, "old-user", "missing.jsonl"), join(project, "missing.jsonl"));

    const cli = join(import.meta.dir, "..", "sessions");
    const env = { ...process.env, HOME: home };
    const exportResult = Bun.spawnSync(["python3", cli, "export", "--source", "claude", "--no-index"], { env });
    expect(exportResult.exitCode).toBe(1);
    expect(exportResult.stderr.toString()).toContain("successful items checkpointed");
    expect(exportResult.stderr.toString()).not.toContain("Traceback");

    const searchResult = Bun.spawnSync(["python3", cli, "search", "fixture", "--source", "claude", "--json"], { env });
    expect(searchResult.exitCode).toBe(0);
    expect(JSON.parse(searchResult.stdout.toString())[0]).toMatchObject({ source: "claude", session_id: "good" });
  });
});
