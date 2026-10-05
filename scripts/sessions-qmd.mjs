import { resolve } from "node:path";
import { homedir } from "node:os";
import { pathToFileURL } from "node:url";

const packageRoot = process.argv[2];
if (!packageRoot) throw new Error("Installed QMD package path is required");
const { createStore } = await import(pathToFileURL(resolve(packageRoot, "dist/index.js")).href);
const { getConfigPath } = await import(pathToFileURL(resolve(packageRoot, "dist/collections.js")).href);
const dbPath = process.env.INDEX_PATH || resolve(process.env.XDG_CACHE_HOME || resolve(homedir(), ".cache"), "qmd/index.sqlite");
const store = await createStore({ dbPath, configPath: getConfigPath() });
try {
  const result = await store.update({ collections: ["sessions"] });
  if (result.collections !== 1) throw new Error("Sessions collection is missing");
  console.log(`Sessions indexed: ${result.indexed} new, ${result.updated} updated, ${result.unchanged} unchanged, ${result.removed} removed`);
} finally {
  await store.close();
}
