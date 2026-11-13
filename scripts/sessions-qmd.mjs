import { resolve } from "node:path";
import { homedir } from "node:os";
import { pathToFileURL } from "node:url";

const [packageRoot, command = "update"] = process.argv.slice(2);
if (!packageRoot) throw new Error("Installed QMD package path is required");
const dist = (file) => import(pathToFileURL(resolve(packageRoot, "dist", file)).href);
const { createStore } = await dist("index.js");
const { getConfigPath } = await dist("collections.js");
const dbPath = process.env.INDEX_PATH || resolve(process.env.XDG_CACHE_HOME || resolve(homedir(), ".cache"), "qmd/index.sqlite");
const store = await createStore({ dbPath, configPath: getConfigPath() });
try {
  if (command === "update") {
    const result = await store.update({ collections: ["sessions"] });
    if (result.collections !== 1) throw new Error("Sessions collection is missing");
    console.log(`Sessions indexed: ${result.indexed} new, ${result.updated} updated, ${result.unchanged} unchanged, ${result.removed} removed`);
  } else if (command === "embed") {
    const { embedLockPathForDb, tryAcquireEmbedLock, EMBED_LOCK_BUSY_MESSAGE } = await dist("cli/embed-lock.js");
    const lock = tryAcquireEmbedLock(embedLockPathForDb(dbPath));
    if (!lock) {
      console.log(EMBED_LOCK_BUSY_MESSAGE);
    } else {
      // QMD unloads models after five idle minutes, but its idle check cannot see embed runs,
      // so chunking large sessions lets it close contexts mid-run. A batch job never needs that unload.
      const { LlamaCpp } = await dist("llm.js");
      const llm = new LlamaCpp({ embedModel: store.internal.llm.embedModelUri, inactivityTimeoutMs: 0 });
      store.internal.llm = llm;
      try {
        const result = await store.embed();
        console.log(`Embedded ${result.chunksEmbedded} chunks from ${result.docsProcessed} documents; ${result.errors} errors`);
        if (result.errors > 0) process.exitCode = 1;
      } finally {
        await llm.dispose();
        lock.release();
      }
    }
  } else {
    throw new Error(`Unknown command: ${command}; use update or embed`);
  }
} finally {
  await store.close();
}
