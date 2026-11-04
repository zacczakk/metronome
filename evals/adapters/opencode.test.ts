import { describe, expect, it, mock } from "bun:test";

function textStream(text: string) {
  const encoder = new TextEncoder();
  return new ReadableStream({
    start(controller) {
      if (text) controller.enqueue(encoder.encode(`${text}\n`));
      controller.close();
    },
  });
}

function createSpawn(output: string, exitCode = 0, stderr = "") {
  return {
    stdout: textStream(output),
    stderr: textStream(stderr),
    exited: Promise.resolve(exitCode),
    kill: mock(),
  } as unknown as ReturnType<typeof Bun.spawn>;
}

describe("createOpenCodeAdapter", () => {
  it("detects skill trigger via skill tool use", async () => {
    const { createOpenCodeAdapter } = await import("./opencode");
    const spawn = createSpawn(
      [
        JSON.stringify({ type: "tool_use", part: { tool: "skill", state: { input: { id: "session-notes" } } } }),
      ].join("\n"),
    );

    const adapter = createOpenCodeAdapter(undefined, { timeoutMs: 50, spawnFn: mock(() => spawn) as typeof Bun.spawn });
    const triggered = await adapter.runQuery("write a session note", "session-notes");
    expect(triggered).toBe(true);
  });

  it("detects agent auto-routing via subagent tool agent", async () => {
    const { createOpenCodeAdapter } = await import("./opencode");
    const spawn = createSpawn(
      [
        JSON.stringify({ type: "text", part: { type: "text", text: "Checking the repository first." } }),
        JSON.stringify({ type: "tool_use", part: { tool: "subagent", state: { input: { agent: "research" } } } }),
      ].join("\n"),
    );

    const adapter = createOpenCodeAdapter(undefined, { timeoutMs: 50, spawnFn: mock(() => spawn) as typeof Bun.spawn });
    const triggered = await adapter.runQuery("research prior decisions", "research");
    expect(triggered).toBe(true);
  });

  it("falls back to explicit delegation text for agent routing", async () => {
    const { createOpenCodeAdapter } = await import("./opencode");
    const spawn = createSpawn(
      [
        JSON.stringify({ type: "text", part: { type: "text", text: "Launching a research agent to scan the repo." } }),
      ].join("\n"),
    );

    const adapter = createOpenCodeAdapter(undefined, { timeoutMs: 50, spawnFn: mock(() => spawn) as typeof Bun.spawn });
    const triggered = await adapter.runQuery("research prior decisions", "research");
    expect(triggered).toBe(true);
  });

  it("returns false when first step ends without matching target", async () => {
    const { createOpenCodeAdapter } = await import("./opencode");
    const spawn = createSpawn(
      [
        JSON.stringify({ type: "step_finish", part: { reason: "stop" } }),
      ].join("\n"),
    );

    const adapter = createOpenCodeAdapter(undefined, { timeoutMs: 50, spawnFn: mock(() => spawn) as typeof Bun.spawn });
    const triggered = await adapter.runQuery("fix a test", "research");
    expect(triggered).toBe(false);
  });

  it("throws when opencode run fails before emitting events", async () => {
    const { createOpenCodeAdapter } = await import("./opencode");
    const spawn = createSpawn("", 1, "ERROR\n  Unrecognized flag: --dir in command opencode run");

    const adapter = createOpenCodeAdapter(undefined, { timeoutMs: 50, spawnFn: mock(() => spawn) as typeof Bun.spawn });
    await expect(adapter.runQuery("write a session note", "session-notes")).rejects.toThrow("opencode run exited 1");
  });
});
