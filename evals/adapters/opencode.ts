import type { Adapter } from "../types";

const DEFAULT_TIMEOUT_MS = 60_000;

export function createOpenCodeAdapter(
  model?: string,
  options?: {
    timeoutMs?: number;
    directory?: string;
    spawnFn?: typeof Bun.spawn;
  },
): Adapter {
  const timeoutMs = options?.timeoutMs ?? DEFAULT_TIMEOUT_MS;
  const directory = options?.directory ?? process.cwd();
  const spawnFn = options?.spawnFn ?? Bun.spawn;

  return {
    name: "opencode",
    async runQuery(query: string, targetName: string): Promise<boolean> {
      const args = ["run", "--standalone", "--format", "json"];
      if (model) args.push("--model", model);
      args.push(query);

      // OpenCode V2 resolves the project from PWD, which spawn's cwd does not update.
      const proc = spawnFn(["opencode", ...args], {
        cwd: directory,
        env: { ...process.env, PWD: directory },
        stdout: "pipe",
        stderr: "pipe",
      });

      // Drain stderr while the run streams so a full pipe cannot stall it.
      const stderr = proc.stderr instanceof ReadableStream ? new Response(proc.stderr).text() : Promise.resolve("");

      async function outcome(): Promise<boolean> {
        const result = await streamParse(proc, targetName);
        if (result !== "ended") return result;
        const exitCode = await proc.exited;
        if (exitCode !== 0) {
          throw new Error(`opencode run exited ${exitCode}: ${(await stderr).replace(/\s+/g, " ").trim().slice(0, 200)}`);
        }
        return false;
      }

      try {
        const result = await Promise.race([outcome(), timeout(timeoutMs)]);
        return result ?? false;
      } finally {
        try {
          proc.kill();
        } catch {}
      }
    },
  };
}

async function streamParse(
  proc: ReturnType<typeof Bun.spawn>,
  targetName: string,
): Promise<boolean | "ended"> {
  const reader = proc.stdout.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  let firstStepFinished = false;

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });

      while (buffer.includes("\n")) {
        const idx = buffer.indexOf("\n");
        const line = buffer.slice(0, idx).trim();
        buffer = buffer.slice(idx + 1);

        if (!line) continue;

        try {
          const event = JSON.parse(line);

          if (event.type === "tool_use") {
            const part = event.part;
            if (part?.tool === "skill" && part?.state?.input?.id === targetName) {
              return true;
            }
            if (part?.tool === "subagent" && part?.state?.input?.agent === targetName) {
              return true;
            }
          }

          if (event.type === "text") {
            const text = event.part?.text;
            if (typeof text === "string" && indicatesAgentDelegation(text, targetName)) {
              return true;
            }
          }

          if (event.type === "step_finish") {
            if (!firstStepFinished) {
              firstStepFinished = true;
              if (event.part?.reason === "stop") {
                return false;
              }
              continue;
            }
            return false;
          }
        } catch {
          continue;
        }
      }
    }
  } finally {
    reader.releaseLock();
  }

  return "ended";
}

function timeout(ms: number): Promise<undefined> {
  return new Promise((resolve) => setTimeout(() => resolve(undefined), ms));
}

function indicatesAgentDelegation(text: string, targetName: string): boolean {
  const normalized = text.toLowerCase();
  const agent = targetName.toLowerCase();
  return (
    normalized.includes(`${agent} agent`) ||
    normalized.includes(`launch a ${agent} agent`) ||
    normalized.includes(`launching a ${agent} agent`) ||
    normalized.includes(`delegate this to ${agent}`) ||
    normalized.includes(`delegating to ${agent}`) ||
    normalized.includes(`spin up ${agent}`)
  );
}
