import { homedir } from 'node:os';
import { join } from 'node:path';
import { Command } from 'commander';
import { PROJECT_ROOT } from './canonical';
import { createTerminalUI, type TerminalUI } from './terminal-ui';
import { getOpenCodeVersionStatus, switchOpenCodeVersion, type SwitchOpenCodeResult } from '../opencode/profile';
import { alignOpenCodePluginSdk, restartAndVerifyOpenCodeV2, runCommand, updateOpenCodeV2Safely, verifyOpenCodeV2Plugins, type PluginVerificationProgress } from '../opencode/sdk';
import type { OpenCodeVersion } from '../opencode/version-renderer';

type OpenCodeOperation = 'use' | 'update' | 'upgrade';

interface OperationOptions {
  dryRun?: boolean;
  alignSdk?: boolean;
}

interface OperationResult {
  profile?: SwitchOpenCodeResult;
  resolved?: string;
}

function version(value: string): OpenCodeVersion {
  if (value !== 'v1' && value !== 'v2') throw new Error('Version must be v1 or v2');
  return value;
}

function formatDuration(milliseconds: number): string {
  return milliseconds < 1_000 ? `${milliseconds}ms` : `${(milliseconds / 1_000).toFixed(1)}s`;
}

export function formatVerificationProgress(progress: PluginVerificationProgress): string {
  const details = [
    progress.failure,
    progress.missing.length > 0 ? `required missing: ${progress.missing.join(', ')}` : undefined,
    progress.optionalMissing.length > 0 ? `optional unavailable: ${progress.optionalMissing.join(', ')}` : undefined,
  ].filter((value): value is string => value !== undefined).join('; ');
  const suffix = details ? `; ${details}` : '';
  if (progress.status === 'ready') {
    return `Plugin catalog ready (${progress.attempt}/${progress.attempts}; ${formatDuration(progress.attemptMs)}${suffix})`;
  }
  return `Plugin catalog waiting (${progress.attempt}/${progress.attempts}; ${formatDuration(progress.attemptMs)}${suffix})`;
}

export function verificationReporter(report: (message: string) => void): (progress: PluginVerificationProgress) => void {
  let lastState = '';
  return (progress) => {
    const state = [progress.status, progress.failure, progress.missing.join(','), progress.optionalMissing.join(',')].join('|');
    const periodic = progress.attempt === 1 || progress.attempt % 10 === 0 || progress.attempt === progress.attempts;
    if (state !== lastState || periodic || progress.status === 'ready') report(formatVerificationProgress(progress));
    lastState = state;
  };
}

function title(operation: OpenCodeOperation, selected: OpenCodeVersion): string {
  const noun = operation === 'use' ? 'profile activation' : operation === 'update' ? 'profile refresh' : 'runtime upgrade';
  return `OpenCode ${selected.toUpperCase()} · ${noun}`;
}

function resultLabel(operation: OpenCodeOperation, selected: OpenCodeVersion, dryRun: boolean): string {
  if (dryRun) return `Would ${operation === 'use' ? 'activate' : operation} OpenCode ${selected.toUpperCase()}`;
  if (operation === 'use') return `Activated OpenCode ${selected.toUpperCase()}`;
  if (operation === 'update') return `Updated OpenCode ${selected.toUpperCase()} profile`;
  return `Upgraded OpenCode ${selected.toUpperCase()}`;
}

async function switchProfile(
  selected: OpenCodeVersion,
  homeDir: string,
  options: OperationOptions,
  restart: boolean,
  report: ((message: string) => void) | undefined,
  signal: AbortSignal,
): Promise<SwitchOpenCodeResult> {
  const configDir = join(homeDir, '.config', 'opencode');
  const reporter = report ? verificationReporter(report) : undefined;
  return switchOpenCodeVersion({
    version: selected,
    projectDir: PROJECT_ROOT,
    homeDir,
    dryRun: options.dryRun,
    signal,
    progress: report,
    prepare: selected === 'v2' && options.alignSdk !== false && !options.dryRun
      ? async (currentSignal) => {
        const resolved = await alignOpenCodePluginSdk(configDir, runCommand, currentSignal);
        report?.(`Resolved @opencode-ai/plugin to ${resolved}`);
      }
      : undefined,
    rollback: selected === 'v2' && options.alignSdk !== false && !options.dryRun
      ? async () => { await runCommand('bun', ['install', '--frozen-lockfile'], configDir); }
      : undefined,
    verifyPlugins: selected === 'v2' && !options.dryRun
      ? (currentSignal) => restart
        ? restartAndVerifyOpenCodeV2(undefined, undefined, undefined, reporter, report, currentSignal)
        : verifyOpenCodeV2Plugins(undefined, undefined, undefined, reporter, currentSignal)
      : undefined,
  });
}

async function timedUpgrade(
  report: ((message: string) => void) | undefined,
  signal: AbortSignal,
): Promise<void> {
  const startedAt = Date.now();
  report?.('Upgrade OpenCode V1 CLI...');
  await runCommand('opencode', ['upgrade'], undefined, signal);
  report?.(`Upgrade OpenCode V1 CLI done (${formatDuration(Date.now() - startedAt)})`);
}

async function performOperation(
  operation: OpenCodeOperation,
  selected: OpenCodeVersion,
  options: OperationOptions,
  ui: TerminalUI,
  signal: AbortSignal,
): Promise<OperationResult> {
  const homeDir = homedir();
  const report = options.dryRun ? undefined : (message: string) => ui.report(message);

  if (operation === 'upgrade' && selected === 'v2' && !options.dryRun) {
    const configDir = join(homeDir, '.config', 'opencode');
    let profile: SwitchOpenCodeResult | undefined;
    const resolved = await updateOpenCodeV2Safely(
      configDir,
      async (build, currentSignal) => {
        profile = await switchProfile(selected, homeDir, options, true, report, currentSignal ?? signal);
        report?.(`Activated OpenCode V2 at ${build}`);
      },
      runCommand,
      report,
      signal,
    );
    report?.(`Global CLI and local SDK resolved to ${resolved}`);
    return { profile, resolved };
  }

  if (operation === 'upgrade' && selected === 'v1' && !options.dryRun) await timedUpgrade(report, signal);
  return { profile: await switchProfile(selected, homeDir, options, false, report, signal) };
}

async function withInterrupts<T>(ui: TerminalUI, operation: (signal: AbortSignal) => Promise<T>): Promise<T> {
  const controller = new AbortController();
  let interrupted = false;
  const onInterrupt = () => {
    if (interrupted) return;
    interrupted = true;
    ui.report('Interrupt received; restoring previous state…');
    controller.abort(new Error('Operation interrupted'));
  };
  process.once('SIGINT', onInterrupt);
  process.once('SIGTERM', onInterrupt);
  try {
    return await operation(controller.signal);
  } catch (error) {
    if (interrupted) process.exitCode = 130;
    throw error;
  } finally {
    process.removeListener('SIGINT', onInterrupt);
    process.removeListener('SIGTERM', onInterrupt);
  }
}

async function executeOperation(operation: OpenCodeOperation, rawVersion: string, options: OperationOptions): Promise<void> {
  const ui = createTerminalUI();
  try {
    const selected = version(rawVersion);
    ui.start(title(operation, selected));
    const result = await withInterrupts(ui, (signal) => performOperation(operation, selected, options, ui, signal));
    ui.success(resultLabel(operation, selected, options.dryRun === true));
    if (result.profile) {
      process.stdout.write(`${resultLabel(operation, selected, options.dryRun === true)}\n`);
      if (!options.dryRun) process.stdout.write(`Files written: ${result.profile.written.length}\n`);
      process.stdout.write(`Backup: ${result.profile.backupPath}\nManifest: ${result.profile.manifestPath}\n`);
    } else {
      process.stdout.write(`${resultLabel(operation, selected, options.dryRun === true)} at ${result.resolved}\n`);
    }
  } catch (error) {
    ui.failure(error instanceof Error ? error.message : String(error));
    if (process.exitCode !== 130) process.exitCode = 1;
  } finally {
    ui.close();
  }
}

function addVersionArgument(command: Command): Command {
  return command
    .argument('<version>', 'v1 or v2')
    .option('--dry-run', 'Show the planned change without writing')
    .option('--no-align-sdk', 'Do not align the local V2 plugin SDK');
}

function addOperationCommand(operation: OpenCodeOperation): void {
  const command = addVersionArgument(opencodeVersionCommand.command(operation));
  command
    .description(operation === 'use'
      ? 'Activate an OpenCode compatibility profile'
      : operation === 'update'
        ? 'Refresh an OpenCode compatibility profile'
        : 'Upgrade the OpenCode runtime and profile')
    .action((rawVersion: string, options: OperationOptions) => executeOperation(operation, rawVersion, options));
}

export const opencodeVersionCommand = new Command('opencode')
  .description('Switch and maintain OpenCode V1/V2 compatibility profiles');

addOperationCommand('use');
addOperationCommand('update');
addOperationCommand('upgrade');

opencodeVersionCommand.command('status')
  .description('Show the active Metronome OpenCode profile and latest switch')
  .action(async () => {
    const status = await getOpenCodeVersionStatus(homedir());
    if (!status) {
      process.stdout.write('OpenCode profile: unmanaged\n');
      return;
    }
    const latest = status.history.at(-1);
    process.stdout.write(`OpenCode profile: ${status.active.toUpperCase()}\n`);
    if (latest) process.stdout.write(`Last switch: ${latest.timestamp}\nBackup: ${latest.backup}\n`);
  });

for (const legacy of ['update-v2', 'upgrade-v2']) {
  opencodeVersionCommand.command(legacy, { hidden: true })
    .description('Legacy alias for upgrade v2')
    .action(() => executeOperation('upgrade', 'v2', {}));
}
