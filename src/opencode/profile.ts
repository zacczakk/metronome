import { createHash } from 'node:crypto';
import { cp, lstat, mkdir, readFile, rm, stat, unlink } from 'node:fs/promises';
import { dirname, join, relative } from 'node:path';
import { atomicWrite } from '../infra/atomic-write';
import { stringifyFrontmatter } from '../formats/markdown';
import { readJsonc } from '../formats/jsonc';
import { isCanonicalAgentForTarget, readCanonicalAgents, readCanonicalMCPServers } from '../cli/canonical';
import {
  applyOpenCodeAgentVariants,
  configureOpenCodeV2Plugins,
  mergeOpenCodeSettings,
  renderOpenCodeAgent,
  renderOpenCodeMcp,
  renderOpenCodeSettings,
  type OpenCodeModelVariant,
} from './version-renderer';

const MANAGED_GLOBAL_PLUGINS = [
  'chatgpt-websearch.js',
  'instructions-loader.ts',
  'memory-vault-advisor.ts',
  'muxy-notify.js',
  'read-guard.ts',
  'validate-commit.ts',
];

const V2_MUXY_PLUGIN_NAME = 'metronome-muxy-notify.js';

interface ManifestHistory {
  timestamp: string;
  from: 'v2' | 'unknown';
  to: 'v2';
  backup: string;
  files: Record<string, string>;
  plugins: Record<string, 'active' | 'inactive' | 'unsupported'>;
  sdk?: string;
}

interface MigrationManifest {
  version: 1;
  active: 'v2';
  history: ManifestHistory[];
}

export interface SwitchOpenCodeOptions {
  projectDir: string;
  homeDir: string;
  now?: Date;
  dryRun?: boolean;
  signal?: AbortSignal;
  prepare?: (signal?: AbortSignal) => Promise<void>;
  rollback?: () => Promise<void>;
  verifyPlugins?: (signal?: AbortSignal) => Promise<string[]>;
  progress?: (message: string) => void;
}

export interface SwitchOpenCodeResult {
  backupPath: string;
  manifestPath: string;
  written: string[];
}

function hash(content: string): string {
  return createHash('sha256').update(content).digest('hex');
}

function abortError(signal: AbortSignal): Error {
  const reason = signal.reason;
  if (reason instanceof Error) return reason;
  return new Error(typeof reason === 'string' ? reason : 'Operation interrupted');
}

function throwIfAborted(signal?: AbortSignal): void {
  if (signal?.aborted) throw abortError(signal);
}

function formatDuration(milliseconds: number): string {
  return milliseconds < 1_000 ? `${milliseconds}ms` : `${(milliseconds / 1_000).toFixed(1)}s`;
}

async function timedStage<T>(
  progress: ((message: string) => void) | undefined,
  label: string,
  operation: () => Promise<T>,
): Promise<T> {
  const startedAt = Date.now();
  progress?.(`${label}...`);
  const heartbeat = progress
    ? setInterval(() => progress(`${label} still running (${formatDuration(Date.now() - startedAt)})`), 5_000)
    : undefined;
  try {
    const result = await operation();
    progress?.(`${label} done (${formatDuration(Date.now() - startedAt)})`);
    return result;
  } catch (error) {
    progress?.(`${label} failed (${formatDuration(Date.now() - startedAt)})`);
    throw error;
  } finally {
    if (heartbeat) clearInterval(heartbeat);
  }
}

async function readJson(path: string): Promise<Record<string, unknown>> {
  try {
    return JSON.parse(await readFile(path, 'utf8')) as Record<string, unknown>;
  } catch {
    return {};
  }
}

async function readOpenCodeConfig(path: string): Promise<Record<string, unknown>> {
  try {
    return readJsonc<Record<string, unknown>>(await readFile(path, 'utf8'));
  } catch (error) {
    if (error instanceof Error && 'code' in error && error.code === 'ENOENT') return {};
    throw new Error(`Unable to parse OpenCode config ${path}: ${error instanceof Error ? error.message : String(error)}`);
  }
}

async function readManifest(path: string): Promise<MigrationManifest | undefined> {
  const parsed = await readJson(path);
  if (parsed.version !== 1 || parsed.active !== 'v2' || !Array.isArray(parsed.history)) return undefined;
  return parsed as unknown as MigrationManifest;
}

async function backupPath(source: string, root: string, homeDir: string): Promise<void> {
  try {
    const info = await stat(source);
    const destination = join(root, relative(homeDir, source));
    await mkdir(dirname(destination), { recursive: true });
    if (info.isDirectory()) await cp(source, destination, { recursive: true, dereference: false });
    else await cp(source, destination, { dereference: false });
  } catch (error) {
    if (!(error instanceof Error && 'code' in error && error.code === 'ENOENT')) throw error;
  }
}

function protectedPaths(homeDir: string): string[] {
  const global = join(homeDir, '.config', 'opencode');
  return [
    join(global, 'opencode.json'),
    join(global, 'migration-manifest.json'),
    join(global, 'agents'),
    join(global, 'plugins'),
    join(global, 'package.json'),
    join(global, 'package-lock.json'),
    join(global, 'bun.lock'),
    join(global, 'cli.json'),
    join(global, 'tui.json'),
    join(homeDir, '.opencode', 'plugins'),
    join(homeDir, '.opencode', 'package.json'),
    join(homeDir, '.opencode', 'package-lock.json'),
  ];
}

async function createCompleteBackup(homeDir: string, backupRoot: string): Promise<void> {
  for (const path of protectedPaths(homeDir)) await backupPath(path, backupRoot, homeDir);
}

async function restoreCompleteBackup(homeDir: string, backupRoot: string): Promise<void> {
  for (const target of protectedPaths(homeDir)) {
    const source = join(backupRoot, relative(homeDir, target));
    let backedUp = false;
    try {
      await lstat(source);
      backedUp = true;
    } catch {}
    await rm(target, { recursive: true, force: true });
    if (!backedUp) continue;
    await mkdir(dirname(target), { recursive: true });
    await cp(source, target, { recursive: true, dereference: false });
  }
}

async function renderAgents(projectDir: string): Promise<{ files: Map<string, string>; variants: OpenCodeModelVariant[] }> {
  const target = 'opencode';
  const agents = (await readCanonicalAgents(projectDir, () => false))
    .filter((agent) => isCanonicalAgentForTarget(agent, target));
  const files = new Map<string, string>();
  const variants: OpenCodeModelVariant[] = [];
  for (const agent of agents) {
    const metadata = renderOpenCodeAgent({ ...agent.metadata, _agentName: agent.name });
    const descriptor = metadata._modelVariant;
    delete metadata._modelVariant;
    if (descriptor && typeof descriptor === 'object') variants.push(descriptor as OpenCodeModelVariant);
    files.set(`${agent.name}.md`, stringifyFrontmatter(agent.content, metadata));
  }
  return { files, variants };
}

async function deployPlugins(options: SwitchOpenCodeOptions, written: string[]): Promise<void> {
  const globalDir = join(options.homeDir, '.config', 'opencode', 'plugins');
  await mkdir(globalDir, { recursive: true });
  try { await unlink(join(globalDir, 'cursor-oauth.js')); } catch {}
  const sourceDir = join(options.projectDir, 'configs', 'opencode', 'v2', 'plugins');
  for (const name of MANAGED_GLOBAL_PLUGINS) {
    const targetName = name === 'muxy-notify.js' ? V2_MUXY_PLUGIN_NAME : name;
    const target = join(globalDir, targetName);
    const content = await readFile(join(sourceDir, name), 'utf8');
    await atomicWrite(target, content);
    written.push(target);
    if (name === 'muxy-notify.js') {
      const legacyTarget = join(globalDir, name);
      try {
        if (await readFile(legacyTarget, 'utf8') === content) await unlink(legacyTarget);
      } catch {}
    }
  }

}

async function installedSdkVersion(configDir: string): Promise<string | undefined> {
  const pkg = await readJson(join(configDir, 'node_modules', '@opencode', 'plugin', 'package.json'));
  return typeof pkg.version === 'string' ? pkg.version : undefined;
}

export async function switchOpenCodeVersion(options: SwitchOpenCodeOptions): Promise<SwitchOpenCodeResult> {
  const configDir = join(options.homeDir, '.config', 'opencode');
  const configPath = join(configDir, 'opencode.json');
  const manifestPath = join(configDir, 'migration-manifest.json');
  const timestamp = (options.now ?? new Date()).toISOString().replace(/[:.]/g, '-');
  const previousManifest = await readManifest(manifestPath);
  const from = previousManifest?.active ?? 'unknown';
  const backupRoot = join(options.homeDir, '.config', 'opencode-backups', 'metronome', `${timestamp}-${from}-to-v2`);
  if (options.dryRun) return { backupPath: backupRoot, manifestPath, written: [] };

  throwIfAborted(options.signal);
  await timedStage(options.progress, `Back up current OpenCode state to ${backupRoot}`, () => createCompleteBackup(options.homeDir, backupRoot));
  const written: string[] = [];
  try {
    throwIfAborted(options.signal);
    if (options.prepare) {
      await timedStage(options.progress, 'Prepare OpenCode V2 dependencies', () => options.prepare!(options.signal));
      throwIfAborted(options.signal);
    }
    const renderedState = await timedStage(options.progress, 'Render and write OpenCode V2 profile', async () => {
      const canonical = await readJson(join(options.projectDir, 'configs', 'settings', 'opencode.json'));
      const existing = await readOpenCodeConfig(configPath);
      const mcp = await readCanonicalMCPServers(options.projectDir);
      const renderedAgents = await renderAgents(options.projectDir);
      let rendered = renderOpenCodeSettings(canonical);
      rendered.mcp = renderOpenCodeMcp(mcp, 'opencode');
      rendered = applyOpenCodeAgentVariants(rendered, renderedAgents.variants);
      configureOpenCodeV2Plugins(rendered, existing);
      const merged = mergeOpenCodeSettings(existing, rendered);
      await mkdir(join(configDir, 'agents'), { recursive: true });
      await atomicWrite(configPath, `${JSON.stringify(merged, null, 2)}\n`);
      written.push(configPath);
      for (const [name, content] of renderedAgents.files) {
        const path = join(configDir, 'agents', name);
        await atomicWrite(path, content);
        written.push(path);
      }
      await deployPlugins(options, written);
      return { merged };
    });
    throwIfAborted(options.signal);
    const observedPlugins = options.verifyPlugins
      ? await timedStage(options.progress, 'Verify OpenCode plugin catalog', () => options.verifyPlugins!(options.signal))
      : undefined;
    throwIfAborted(options.signal);
    const files: Record<string, string> = {};
    for (const path of written) files[relative(options.homeDir, path)] = hash(await readFile(path, 'utf8'));
    const sdk = await installedSdkVersion(configDir);
    const history: ManifestHistory = {
      timestamp: (options.now ?? new Date()).toISOString(),
      from,
      to: 'v2',
      backup: backupRoot,
      files,
      plugins: {
        'metronome.instructions-loader': observedPlugins?.includes('metronome.instructions-loader') ? 'active' : 'inactive',
        'memory-vault-advisor': observedPlugins?.includes('memory-vault-advisor') ? 'active' : 'inactive',
        'metronome.read-guard': observedPlugins?.includes('metronome.read-guard') ? 'active' : 'inactive',
        'metronome.validate-commit': observedPlugins?.includes('metronome.validate-commit') ? 'active' : 'inactive',
        'metronome.muxy-notify': observedPlugins?.includes('metronome.muxy-notify') ? 'active' : 'inactive',
        'opencode.chatgpt-websearch': observedPlugins?.includes('opencode.chatgpt-websearch') ? 'active' : 'inactive',
      },
      ...(sdk ? { sdk } : {}),
    };
    const priorHistory = (previousManifest?.history ?? []).filter((entry) => entry.to === 'v2' && (entry.from === 'v2' || entry.from === 'unknown'));
    const manifest: MigrationManifest = { version: 1, active: 'v2', history: [...priorHistory, history] };
    await timedStage(options.progress, 'Record migration manifest', async () => {
      throwIfAborted(options.signal);
      await atomicWrite(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
      written.push(manifestPath);
    });
    throwIfAborted(options.signal);
    return { backupPath: backupRoot, manifestPath, written };
  } catch (error) {
    try {
      await timedStage(options.progress, 'Restore previous OpenCode state', async () => {
        await restoreCompleteBackup(options.homeDir, backupRoot);
        await options.rollback?.();
      });
    } catch (rollbackError) {
      throw new AggregateError([error, rollbackError], 'OpenCode profile activation failed and the previous state could not be restored');
    }
    throw error;
  }
}

export async function getOpenCodeVersionStatus(homeDir: string): Promise<MigrationManifest | undefined> {
  return readManifest(join(homeDir, '.config', 'opencode', 'migration-manifest.json'));
}
