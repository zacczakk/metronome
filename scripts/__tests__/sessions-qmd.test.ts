import { expect, test } from "bun:test";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

test.skipIf(!Bun.which("qmd"))("sessions index refreshes local history without reading other collections", () => {
  const root = mkdtempSync(join(tmpdir(), "sessions-qmd-"));
  try {
    const home = join(root, "home");
    const archive = join(home, ".local/share/sessions/archive");
    const memory = join(root, "memory");
    const config = join(root, "qmd-config");
    for (const path of [archive, memory, config]) mkdirSync(path, { recursive: true });
    writeFileSync(join(archive, "session.md"), "# Session\n\nLocalhistorysentinel recovered transcript.\n");
    writeFileSync(join(memory, "memory.md"), "# Memory\n\nUnrelatedvaultsentinel leave this collection alone.\n");
    writeFileSync(join(config, "index.yml"), `collections:
  sessions:
    path: ${JSON.stringify(archive)}
    pattern: "**/*.md"
  memory:
    path: ${JSON.stringify(memory)}
    pattern: "**/*.md"
`);
    const env = { ...process.env, HOME: home, QMD_CONFIG_DIR: config, XDG_CACHE_HOME: join(root, "cache") };
    const index = Bun.spawnSync(["python3", join(import.meta.dir, "../sessions"), "index", "--no-embed"], { env });
    expect(index.exitCode).toBe(0);
    const local = Bun.spawnSync(["qmd", "search", "localhistorysentinel", "-c", "sessions", "--json"], { env });
    expect(local.exitCode).toBe(0);
    expect(local.stdout.toString()).toContain("Localhistorysentinel");
    const unrelated = Bun.spawnSync(["qmd", "search", "unrelatedvaultsentinel", "-c", "memory", "--json"], { env });
    expect(unrelated.exitCode).toBe(0);
    expect(unrelated.stdout.toString()).not.toContain("Unrelatedvaultsentinel");
  } finally {
    rmSync(root, { recursive: true });
  }
}, 20_000);
