import { spawn } from 'node:child_process';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export interface CommandResult {
  stdout: string;
  stderr: string;
}

export type CommandRunner = (command: string, args: string[], cwd?: string, signal?: AbortSignal) => Promise<CommandResult>;
export type OperationProgressReporter = (message: string) => void;

const GLOBAL_CLI_PACKAGE = '@opencode-ai/cli';

function abortError(signal: AbortSignal): Error {
  const reason = signal.reason;
  if (reason instanceof Error) return reason;
  return new Error(typeof reason === 'string' ? reason : 'Operation interrupted');
}

function throwIfAborted(signal?: AbortSignal): void {
  if (signal?.aborted) throw abortError(signal);
}

function waitFor(milliseconds: number, signal?: AbortSignal): Promise<void> {
  throwIfAborted(signal);
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      signal?.removeEventListener('abort', onAbort);
      resolve();
    }, milliseconds);
    const onAbort = () => {
      clearTimeout(timer);
      signal?.removeEventListener('abort', onAbort);
      reject(abortError(signal!));
    };
    signal?.addEventListener('abort', onAbort, { once: true });
    if (signal?.aborted) onAbort();
  });
}

function runChildCommand(
  command: string,
  args: string[],
  cwd: string | undefined,
  timeoutMs: number | undefined,
  signal?: AbortSignal,
): Promise<CommandResult> {
  throwIfAborted(signal);
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { cwd, env: process.env, stdio: ['ignore', 'pipe', 'pipe'] });

    let stdout = '';
    let stderr = '';
    let settled = false;
    let childError: Error | undefined;
    let termination: Error | undefined;
    let timeout: ReturnType<typeof setTimeout> | undefined;
    let forceKill: ReturnType<typeof setTimeout> | undefined;

    const onAbort = () => {
      if (settled || termination) return;
      termination = abortError(signal!);
      child.kill('SIGTERM');
      forceKill = setTimeout(() => {
        if (!settled) child.kill('SIGKILL');
      }, 500);
    };
    const cleanup = () => {
      if (timeout) clearTimeout(timeout);
      if (forceKill) clearTimeout(forceKill);
      signal?.removeEventListener('abort', onAbort);
    };

    child.stdout.on('data', (chunk) => { stdout += String(chunk); });
    child.stderr.on('data', (chunk) => { stderr += String(chunk); });
    child.on('error', (error: Error) => { childError = error; });
    child.on('close', (code: number | null) => {
      if (settled) return;
      settled = true;
      cleanup();
      if (termination) {
        reject(termination);
      } else if (childError) {
        reject(childError);
      } else if (code === 0) {
        resolve({ stdout, stderr });
      } else {
        reject(new Error(`${command} ${args.join(' ')} failed (${code}): ${stderr.trim()}`));
      }
    });

    signal?.addEventListener('abort', onAbort, { once: true });
    if (signal?.aborted) onAbort();
    if (timeoutMs !== undefined) {
      timeout = setTimeout(() => {
        if (settled || termination) return;
        termination = new Error(`${command} ${args.join(' ')} timed out`);
        child.kill('SIGTERM');
        forceKill = setTimeout(() => {
          if (!settled) child.kill('SIGKILL');
        }, 500);
      }, timeoutMs);
    }
  });
}

export const runCommand: CommandRunner = (command, args, cwd, signal) => runChildCommand(command, args, cwd, undefined, signal);

function runVerificationCommand(command: string, args: string[], cwd?: string, signal?: AbortSignal): Promise<CommandResult> {
  return runChildCommand(command, args, cwd, 2_000, signal);
}

export function parseGlobalOpenCodeVersion(output: string): string | undefined {
  return output.match(/@opencode-ai\/cli@(0\.0\.0-(?:next|beta)-[^\s]+)/)?.[1];
}

export function parseOpenCodeExecutableVersion(output: string): string | undefined {
  return output.match(/(0\.0\.0-(?:next|beta)-[^\s]+)/)?.[1];
}

function versionParts(version: string): { channel: 'beta' | 'next'; build: number } | undefined {
  const match = version.match(/^0\.0\.0-(beta|next)-(\d+)$/);
  return match ? { channel: match[1] as 'beta' | 'next', build: Number(match[2]) } : undefined;
}

export function compareOpenCodeVersions(left: string, right: string): number {
  const leftParts = versionParts(left);
  const rightParts = versionParts(right);
  if (!leftParts || !rightParts) return left.localeCompare(right);
  if (leftParts.build !== rightParts.build) return leftParts.build - rightParts.build;
  if (leftParts.channel !== rightParts.channel) return leftParts.channel === 'next' ? 1 : -1;
  return 0;
}

export async function installedGlobalOpenCodeVersion(runner: CommandRunner = runCommand, signal?: AbortSignal): Promise<string> {
  const result = await runner('bun', ['pm', 'ls', '-g'], undefined, signal);
  const version = parseGlobalOpenCodeVersion(`${result.stdout}\n${result.stderr}`);
  if (!version) throw new Error('Unable to find global @opencode-ai/cli next/beta installation');
  return version;
}

export async function runningGlobalOpenCodeVersion(runner: CommandRunner = runCommand, signal?: AbortSignal): Promise<string> {
  const result = await runner('opencode2', ['--version'], undefined, signal);
  const version = parseOpenCodeExecutableVersion(`${result.stdout}\n${result.stderr}`);
  if (!version) throw new Error('Unable to determine the version reported by the opencode2 launcher');
  return version;
}

async function installGlobalOpenCodeVersion(version: string, runner: CommandRunner, signal?: AbortSignal): Promise<void> {
  await runner('bun', ['install', '-g', '--force', '--trust', '--minimum-release-age=0', `${GLOBAL_CLI_PACKAGE}@${version}`], undefined, signal);
}

async function verifyGlobalOpenCodeVersion(expected: string, runner: CommandRunner, signal?: AbortSignal): Promise<void> {
  const [installed, running] = await Promise.all([
    installedGlobalOpenCodeVersion(runner, signal),
    runningGlobalOpenCodeVersion(runner, signal),
  ]);
  if (installed !== expected || running !== expected) {
    throw new Error(`Global OpenCode CLI mismatch: expected ${expected}; package ${installed}; launcher ${running}`);
  }
}

async function ensureGlobalOpenCodeVersion(
  expected: string,
  runner: CommandRunner,
  progress?: OperationProgressReporter,
  signal?: AbortSignal,
): Promise<void> {
  try {
    await verifyGlobalOpenCodeVersion(expected, runner, signal);
    return;
  } catch (error) {
    if (signal?.aborted) throw abortError(signal);
    progress?.(`Global CLI install mismatch; repairing exact ${expected}`);
    await runner('bun', ['remove', '-g', GLOBAL_CLI_PACKAGE], undefined, signal);
    await installGlobalOpenCodeVersion(expected, runner, signal);
    try {
      await verifyGlobalOpenCodeVersion(expected, runner, signal);
    } catch (verificationError) {
      throw new Error(`Unable to repair global OpenCode CLI at ${expected}: ${verificationError instanceof Error ? verificationError.message : String(verificationError)}`, { cause: error });
    }
  }
}

export async function alignOpenCodePluginSdk(configDir: string, runner: CommandRunner = runCommand, signal?: AbortSignal): Promise<string> {
  const version = await installedGlobalOpenCodeVersion(runner, signal);
  const [declared, installed] = await Promise.all([
    readPackageDependencyVersion(join(configDir, 'package.json')),
    readPackageVersion(join(configDir, 'node_modules', '@opencode-ai', 'plugin', 'package.json')),
  ]);
  if (declared === version && installed === version) return version;
  throwIfAborted(signal);
  await runner('bun', ['add', '--exact', '--minimum-release-age=0', `@opencode-ai/plugin@${version}`], configDir, signal);
  throwIfAborted(signal);
  return version;
}

function formatDuration(milliseconds: number): string {
  return milliseconds < 1_000 ? `${milliseconds}ms` : `${(milliseconds / 1_000).toFixed(1)}s`;
}

async function timedStage<T>(
  progress: OperationProgressReporter | undefined,
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

async function readPackageVersion(path: string): Promise<string | undefined> {
  try {
    const parsed = JSON.parse(await readFile(path, 'utf8')) as { version?: unknown };
    return typeof parsed.version === 'string' ? parsed.version : undefined;
  } catch {
    return undefined;
  }
}

async function readPackageDependencyVersion(path: string): Promise<string | undefined> {
  try {
    const parsed = JSON.parse(await readFile(path, 'utf8')) as { dependencies?: Record<string, unknown> };
    const version = parsed.dependencies?.['@opencode-ai/plugin'];
    return typeof version === 'string' ? version : undefined;
  } catch {
    return undefined;
  }
}

export async function updateOpenCodeV2(
  _configDir: string,
  runner: CommandRunner = runCommand,
  progress?: OperationProgressReporter,
  signal?: AbortSignal,
): Promise<string> {
  await runner('bun', ['install', '-g', '--force', '--trust', '--minimum-release-age=0', '@opencode-ai/cli@beta'], undefined, signal);
  throwIfAborted(signal);
  const version = await installedGlobalOpenCodeVersion(runner, signal);
  await ensureGlobalOpenCodeVersion(version, runner, progress, signal);
  return version;
}

export async function updateOpenCodeV2Safely(
  configDir: string,
  activate: (version: string, signal?: AbortSignal) => Promise<void>,
  runner: CommandRunner = runCommand,
  progress?: OperationProgressReporter,
  signal?: AbortSignal,
): Promise<string> {
  throwIfAborted(signal);
  const previous = await timedStage(progress, 'Resolve current global CLI', () => installedGlobalOpenCodeVersion(runner, signal));
  progress?.(`Current global CLI: ${previous}`);
  const restorePrevious = () => timedStage(progress, `Restore global CLI ${previous}`, async () => {
    await installGlobalOpenCodeVersion(previous, runner);
    await ensureGlobalOpenCodeVersion(previous, runner, progress);
  });
  let restoredPrevious = false;
  let resolved: string;
  try {
    resolved = await timedStage(progress, 'Install @opencode-ai/cli@beta', () => updateOpenCodeV2(configDir, runner, progress, signal));
    progress?.(`Resolved global CLI: ${resolved}`);
    if (compareOpenCodeVersions(resolved, previous) < 0) {
      progress?.(`Beta channel returned ${resolved}; keeping current global CLI ${previous}`);
      await restorePrevious();
      restoredPrevious = true;
      throwIfAborted(signal);
      await timedStage(progress, `Activate OpenCode V2 at ${previous}`, () => activate(previous, signal));
      throwIfAborted(signal);
      return previous;
    }
    await timedStage(progress, `Activate OpenCode V2 at ${resolved}`, () => activate(resolved, signal));
    throwIfAborted(signal);
  } catch (error) {
    if (restoredPrevious) throw error;
    try {
      await restorePrevious();
    } catch (rollbackError) {
      throw new AggregateError([error, rollbackError], `OpenCode V2 activation failed and global CLI ${previous} could not be restored`);
    }
    throw error;
  }
  return resolved;
}

export const REQUIRED_V2_PLUGIN_IDS = [
  'metronome.instructions-loader',
  'memory-vault-advisor',
  'metronome.read-guard',
  'metronome.validate-commit',
  'opencode.chatgpt-websearch',
];

export const OPTIONAL_V2_PLUGIN_IDS = ['metronome.muxy-notify'];

export interface PluginVerificationProgress {
  attempt: number;
  attempts: number;
  status: 'retrying' | 'ready';
  missing: string[];
  attemptMs: number;
  elapsedMs: number;
  optionalMissing: string[];
  failure?: 'request-failed' | 'invalid-response';
}

export type PluginVerificationReporter = (progress: PluginVerificationProgress) => void;

export function parsePluginIDs(output: string): string[] {
  const parsed = JSON.parse(output) as unknown;
  const entries = Array.isArray(parsed)
    ? parsed
    : parsed && typeof parsed === 'object' && 'data' in parsed && Array.isArray(parsed.data) ? parsed.data : [];
  return entries.flatMap((entry) => entry && typeof entry === 'object' && 'id' in entry && typeof entry.id === 'string' ? [entry.id] : []);
}

export async function restartAndVerifyOpenCodeV2(
  runner: CommandRunner = runVerificationCommand,
  attempts = 60,
  intervalMs = 500,
  onProgress?: PluginVerificationReporter,
  progress?: OperationProgressReporter,
  signal?: AbortSignal,
): Promise<string[]> {
  throwIfAborted(signal);
  await timedStage(progress, 'Restart OpenCode V2 service', async () => {
    try {
      await runner('opencode2', ['service', 'restart'], undefined, signal);
    } catch {
      if (signal?.aborted) throw abortError(signal);
      // Restart closes its own client connection; readiness is proven by the API loop below.
      progress?.('Restart request closed its client connection; continuing with API readiness checks');
    }
  });
  return verifyOpenCodeV2Plugins(runner, attempts, intervalMs, onProgress, signal);
}

export async function verifyOpenCodeV2Plugins(
  runner: CommandRunner = runVerificationCommand,
  attempts = 60,
  intervalMs = 500,
  onProgress?: PluginVerificationReporter,
  signal?: AbortSignal,
): Promise<string[]> {
  let missing = [...REQUIRED_V2_PLUGIN_IDS];
  const startedAt = Date.now();
  for (let attempt = 0; attempt < attempts; attempt += 1) {
    throwIfAborted(signal);
    const attemptStartedAt = Date.now();
    let ids: string[] = [];
    let failure: PluginVerificationProgress['failure'];
    try {
      const result = await runner('opencode2', ['api', 'get', '/api/plugin'], undefined, signal);
      try {
        ids = parsePluginIDs(result.stdout);
      } catch {
        failure = 'invalid-response';
      }
    } catch {
      if (signal?.aborted) throw abortError(signal);
      failure = 'request-failed';
    }
    missing = REQUIRED_V2_PLUGIN_IDS.filter((id) => !ids.includes(id));
    const optionalMissing = OPTIONAL_V2_PLUGIN_IDS.filter((id) => !ids.includes(id));
    const ready = missing.length === 0;
    onProgress?.({
      attempt: attempt + 1,
      attempts,
      status: ready ? 'ready' : 'retrying',
      missing,
      optionalMissing,
      attemptMs: Date.now() - attemptStartedAt,
      elapsedMs: Date.now() - startedAt,
      ...(failure ? { failure } : {}),
    });
    if (ready) return ids;
    if (failure === 'request-failed') {
      throw new Error('OpenCode V2 service request failed; check `opencode2 service status` before retrying.');
    }
    if (attempt < attempts - 1) await waitFor(intervalMs, signal);
  }
  throw new Error(`OpenCode V2 did not activate required plugins after ${attempts} attempt(s) in ${Date.now() - startedAt}ms: ${missing.join(', ')}. Check \`opencode2 api get /api/plugin\` and the OpenCode service logs.`);
}
