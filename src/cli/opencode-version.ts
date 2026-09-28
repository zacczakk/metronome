import { homedir } from 'node:os';
import { join } from 'node:path';
import { Command } from 'commander';
import { PROJECT_ROOT } from './canonical';
import { createTerminalUI, type TerminalUI } from './terminal-ui';
import { getOpenCodeVersionStatus, switchOpenCodeVersion, type SwitchOpenCodeResult } from '../opencode/profile';
import { alignOpenCodePluginSdk, restartAndVerifyOpenCodeV2, runCommand, updateOpenCodeV2Safely, verifyOpenCodeV2Plugins, type PluginVerificationProgress } from '../opencode/sdk';

type OpenCodeOperation = 'use' | 'update' | 'upgrade';

interface OperationOptions {
  dryRun?: boolean;
  alignSdk?: boolean;
}

interface OperationResult {
  profile?: SwitchOpenCodeResult;
  resolved?: string;
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

function title(operation: OpenCodeOperation): string {
  const noun = operation === 'use' ? 'profile activation' : operation === 'update' ? 'profile refresh' : 'runtime upgrade';
  return `OpenCode V2 · ${noun}`;
}

function resultLabel(operation: OpenCodeOperation, dryRun: boolean): string {
  if (dryRun) return `Would ${operation === 'use' ? 'activate' : operation} OpenCode V2`;
  if (operation === 'use') return 'Activated OpenCode V2';
  if (operation === 'update') return 'Updated OpenCode V2 profile';
  return 'Upgraded OpenCode V2';
}

async function switchProfile(
  homeDir: string,
  options: OperationOptions,
  restart: boolean,
  report: ((message: string) => void) | undefined,
  signal: AbortSignal,
): Promise<SwitchOpenCodeResult> {
  const configDir = join(homeDir, '.config', 'opencode');
  const reporter = report ? verificationReporter(report) : undefined;
  return switchOpenCodeVersion({
    projectDir: PROJECT_ROOT,
    homeDir,
    dryRun: options.dryRun,
    signal,
    progress: report,
    prepare: options.alignSdk !== false && !options.dryRun
      ? async (currentSignal) => {
        const resolved = await alignOpenCodePluginSdk(configDir, runCommand, currentSignal);
        report?.(`Resolved @opencode/plugin to ${resolved}`);
      }
      : undefined,
    rollback: options.alignSdk !== false && !options.dryRun
      ? async () => { await runCommand('bun', ['install', '--frozen-lockfile'], configDir); }
      : undefined,
    verifyPlugins: !options.dryRun
      ? (currentSignal) => restart
        ? restartAndVerifyOpenCodeV2(undefined, undefined, undefined, reporter, report, currentSignal)
        : verifyOpenCodeV2Plugins(undefined, undefined, undefined, reporter, currentSignal)
      : undefined,
  });
}

async function performOperation(
  operation: OpenCodeOperation,
  options: OperationOptions,
  ui: TerminalUI,
  signal: AbortSignal,
): Promise<OperationResult> {
  const homeDir = homedir();
  const report = options.dryRun ? undefined : (message: string) => ui.report(message);

  if (operation === 'upgrade' && !options.dryRun) {
    const configDir = `${homeDir}/.config/opencode`;
    let profile: SwitchOpenCodeResult | undefined;
    const resolved = await updateOpenCodeV2Safely(
      configDir,
      async (build, currentSignal) => {
        profile = await switchProfile(homeDir, options, true, report, currentSignal ?? signal);
        report?.(`Activated OpenCode V2 at ${build}`);
      },
      runCommand,
      report,
      signal,
    );
    report?.(`Global CLI and local SDK resolved to ${resolved}`);
    return { profile, resolved };
  }

  return { profile: await switchProfile(homeDir, options, false, report, signal) };
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

async function executeOperation(operation: OpenCodeOperation, options: OperationOptions): Promise<void> {
  const ui = createTerminalUI();
  try {
    ui.start(title(operation));
    const result = await withInterrupts(ui, (signal) => performOperation(operation, options, ui, signal));
    ui.success(resultLabel(operation, options.dryRun === true));
    if (result.profile) {
      process.stdout.write(`${resultLabel(operation, options.dryRun === true)}\n`);
      if (!options.dryRun) process.stdout.write(`Files written: ${result.profile.written.length}\n`);
      process.stdout.write(`Backup: ${result.profile.backupPath}\nManifest: ${result.profile.manifestPath}\n`);
    } else {
      process.stdout.write(`${resultLabel(operation, options.dryRun === true)} at ${result.resolved}\n`);
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
    .option('--dry-run', 'Show the planned change without writing')
    .option('--no-align-sdk', 'Do not align the local V2 plugin SDK');
}

function addOperationCommand(operation: OpenCodeOperation): void {
  const command = addVersionArgument(opencodeVersionCommand.command(operation));
  command
    .description(operation === 'use'
      ? 'Activate an OpenCode compatibility profile'
      : operation === 'update'
        ? 'Refresh the OpenCode V2 profile'
        : 'Upgrade the OpenCode V2 runtime and profile')
    .action((options: OperationOptions) => executeOperation(operation, options));
}

export const opencodeVersionCommand = new Command('opencode')
  .description('Maintain the OpenCode V2 profile and runtime');

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
    .action(() => executeOperation('upgrade', {}));
}
