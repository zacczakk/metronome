import { afterEach, describe, expect, test } from "bun:test";
import { mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const roots: string[] = [];

afterEach(() => {
  for (const root of roots.splice(0)) rmSync(root, { recursive: true });
});

describe("sessions qmd timeout", () => {
  test("a timed-out command stops its child processes too", () => {
    const root = mkdtempSync(join(tmpdir(), "sessions-timeout-"));
    roots.push(root);
    const pidFile = join(root, "child.pid");
    const script = `
import subprocess
import sys
from importlib.machinery import SourceFileLoader
sys.path.insert(0, ${JSON.stringify(join(import.meta.dir, ".."))})
sessions = SourceFileLoader("sessions", ${JSON.stringify(join(import.meta.dir, "..", "sessions"))}).load_module()
try:
    sessions.run_process_group(["sh", "-c", "sleep 30 & echo $! > ${pidFile}; wait"], timeout=1)
except subprocess.TimeoutExpired:
    print("timed out")
`;
    const result = Bun.spawnSync(["python3", "-c", script]);
    expect(result.stdout.toString()).toContain("timed out");
    const pid = Number(readFileSync(pidFile, "utf8"));
    expect(() => process.kill(pid, 0)).toThrow();
  });
});
