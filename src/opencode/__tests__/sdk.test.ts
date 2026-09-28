import { describe, expect, test } from 'bun:test';
import { mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { alignOpenCodePluginSdk, compareOpenCodeVersions, OPTIONAL_V2_PLUGIN_IDS, parseGlobalOpenCodeVersion, parseOpenCodeExecutableVersion, parsePluginIDs, REQUIRED_V2_PLUGIN_IDS, restartAndVerifyOpenCodeV2, runCommand, updateOpenCodeV2, updateOpenCodeV2Safely, verifyOpenCodeV2Plugins, type CommandRunner } from '../sdk';

describe('OpenCode V2 SDK alignment', () => {
  test('terminates a child process when aborted', async () => {
    const controller = new AbortController();
    const command = runCommand(process.execPath, ['-e', 'setTimeout(() => {}, 30000)'], undefined, controller.signal);
    setTimeout(() => controller.abort(new Error('interrupted')), 20);

    await expect(command).rejects.toThrow('interrupted');
  });

  test('parses the stable global package version', () => {
    expect(parseGlobalOpenCodeVersion('├── @opencode/cli@2.0.18')).toBe('2.0.18');
  });

  test('parses the stable executable version', () => {
    expect(parseOpenCodeExecutableVersion('opencode v2.0.18')).toBe('2.0.18');
  });

  test('compares stable releases', () => {
    expect(compareOpenCodeVersions('2.0.18', '2.0.17')).toBeGreaterThan(0);
  });

  test('aligns the local stable SDK to the global CLI release', async () => {
    const calls: Array<[string, string[], string | undefined]> = [];
    const runner: CommandRunner = async (command, args, cwd) => {
      calls.push([command, args, cwd]);
      return {
        stdout: command === 'bun' && args[0] === 'pm'
          ? '@opencode/cli@2.0.18'
          : command === 'opencode' ? 'opencode v2.0.18' : '',
        stderr: '',
      };
    };
    expect(await alignOpenCodePluginSdk('/config', runner)).toBe('2.0.18');
    expect(calls.at(-1)).toEqual(['bun', ['add', '--exact', '--minimum-release-age=0', '@opencode/plugin@2.0.18'], '/config']);
  });

  test('skips SDK installation when the exact stable package is already aligned', async () => {
    const configDir = await mkdtemp(join(tmpdir(), 'metronome-opencode-sdk-'));
    try {
      await mkdir(join(configDir, 'node_modules', '@opencode', 'plugin'), { recursive: true });
      await writeFile(join(configDir, 'package.json'), JSON.stringify({ dependencies: { '@opencode/plugin': '2.0.18' } }));
      await writeFile(join(configDir, 'node_modules', '@opencode', 'plugin', 'package.json'), JSON.stringify({ version: '2.0.18' }));
      const calls: string[] = [];
      const runner: CommandRunner = async (command, args) => {
        calls.push(`${command} ${args.join(' ')}`);
        return { stdout: '@opencode/cli@2.0.18', stderr: '' };
      };

      expect(await alignOpenCodePluginSdk(configDir, runner)).toBe('2.0.18');
      expect(calls).toEqual(['bun pm ls -g']);
    } finally {
      await rm(configDir, { recursive: true, force: true });
    }
  });

  test('aligns a stale local stable SDK', async () => {
    const configDir = await mkdtemp(join(tmpdir(), 'metronome-opencode-sdk-'));
    try {
      await mkdir(join(configDir, 'node_modules', '@opencode', 'plugin'), { recursive: true });
      await writeFile(join(configDir, 'package.json'), JSON.stringify({ dependencies: { '@opencode/plugin': '2.0.17' } }));
      await writeFile(join(configDir, 'node_modules', '@opencode', 'plugin', 'package.json'), JSON.stringify({ version: '2.0.17' }));
      const calls: string[] = [];
      const runner: CommandRunner = async (command, args) => {
        calls.push(`${command} ${args.join(' ')}`);
        return { stdout: '@opencode/cli@2.0.18', stderr: '' };
      };

      expect(await alignOpenCodePluginSdk(configDir, runner)).toBe('2.0.18');
      expect(calls).toEqual([
        'bun pm ls -g',
        'bun add --exact --minimum-release-age=0 @opencode/plugin@2.0.18',
      ]);
    } finally {
      await rm(configDir, { recursive: true, force: true });
    }
  });

  test('updates the global CLI to the stable latest tag', async () => {
    const calls: string[] = [];
    let packageVersion = '2.0.17';
    let executable = '2.0.17';
    const runner: CommandRunner = async (command, args) => {
      calls.push(`${command} ${args.join(' ')}`);
      if (args[0] === 'pm') return { stdout: `@opencode/cli@${packageVersion}`, stderr: '' };
      if (command === 'opencode') return { stdout: `opencode v${executable}`, stderr: '' };
      if (command === 'bun' && args[0] === 'install' && args.at(-1) === '@opencode/cli@latest') {
        packageVersion = '2.0.18';
        executable = '2.0.18';
      }
      return { stdout: '', stderr: '' };
    };
    expect(await updateOpenCodeV2('/config', runner)).toBe('2.0.18');
    expect(calls).toContain('bun install -g --force --trust --minimum-release-age=0 @opencode/cli@latest');
  });

  test('repairs a launcher that disagrees with the installed stable package', async () => {
    const calls: string[] = [];
    let executable = '2.0.17';
    const runner: CommandRunner = async (command, args) => {
      calls.push(`${command} ${args.join(' ')}`);
      if (args[0] === 'pm') return { stdout: '@opencode/cli@2.0.18', stderr: '' };
      if (command === 'opencode') return { stdout: `opencode v${executable}`, stderr: '' };
      if (command === 'bun' && args[0] === 'install' && args.at(-1) === '@opencode/cli@2.0.18') executable = '2.0.18';
      return { stdout: '', stderr: '' };
    };

    expect(await updateOpenCodeV2('/config', runner)).toBe('2.0.18');
    expect(calls).toContain('bun remove -g @opencode/cli');
    expect(calls).toContain('bun install -g --force --trust --minimum-release-age=0 @opencode/cli@2.0.18');
  });

  test('restores an exact stable package when profile activation fails', async () => {
    const calls: string[] = [];
    let packageName = '@opencode/cli';
    let packageVersion = '2.0.17';
    let executable = packageVersion;
    const runner: CommandRunner = async (command, args) => {
      calls.push(`${command} ${args.join(' ')}`);
      if (args[0] === 'pm') return { stdout: `${packageName}@${packageVersion}`, stderr: '' };
      if (command === 'opencode') return { stdout: `opencode v${executable}`, stderr: '' };
      if (command === 'bun' && args[0] === 'remove' && args.includes('@opencode/cli')) packageName = '';
      if (command === 'bun' && args[0] === 'install') {
        const target = args.at(-1) ?? '';
        if (target === '@opencode/cli@latest') {
          packageName = '@opencode/cli';
          packageVersion = '2.0.18';
          executable = '2.0.18';
        } else if (target === '@opencode/cli@2.0.17') {
          packageName = '@opencode/cli';
          packageVersion = '2.0.17';
          executable = '2.0.17';
        }
      }
      return { stdout: '', stderr: '' };
    };

    await expect(updateOpenCodeV2Safely('/config', async () => { throw new Error('activation failed'); }, runner)).rejects.toThrow('activation failed');
    expect(calls).toContain('bun install -g --force --trust --minimum-release-age=0 @opencode/cli@2.0.17');
  });

  test('rejects a parseable response missing required plugins', async () => {
    const runner: CommandRunner = async (_command, args) => ({
      stdout: args.at(-1) === '/api/plugin' ? '[]' : '',
      stderr: '',
    });
    expect(restartAndVerifyOpenCodeV2(runner, 1, 0)).rejects.toThrow('did not activate required plugins');
  });

  test('accepts all required plugin IDs from the API envelope', async () => {
    const ids = [...REQUIRED_V2_PLUGIN_IDS];
    const runner: CommandRunner = async (_command, args) => ({ stdout: args.at(-1) === '/api/plugin' ? JSON.stringify({ data: ids.map((id) => ({ id })) }) : '', stderr: '' });
    expect(await restartAndVerifyOpenCodeV2(runner)).toEqual(ids);
    expect(parsePluginIDs(JSON.stringify(ids.map((id) => ({ id }))))).toEqual(ids);
  });

  test('does not fail readiness when the optional Muxy plugin is absent', async () => {
    const ids = [...REQUIRED_V2_PLUGIN_IDS];
    const progress: Array<{ status: string; missing: string[]; optionalMissing: string[] }> = [];
    const runner: CommandRunner = async (_command, args) => ({
      stdout: args.at(-1) === '/api/plugin' ? JSON.stringify({ data: ids.map((id) => ({ id })) }) : '',
      stderr: '',
    });

    expect(await verifyOpenCodeV2Plugins(runner, 1, 0, (event) => progress.push({
      status: event.status,
      missing: event.missing,
      optionalMissing: event.optionalMissing,
    }))).toEqual(ids);
    expect(progress).toEqual([{ status: 'ready', missing: [], optionalMissing: OPTIONAL_V2_PLUGIN_IDS }]);
  });

  test('fails fast after a plugin request failure', async () => {
    let calls = 0;
    const runner: CommandRunner = async () => {
      calls += 1;
      throw new Error('service unavailable');
    };

    await expect(verifyOpenCodeV2Plugins(runner, 60, 1)).rejects.toThrow('service request failed');
    expect(calls).toBe(1);
  });

  test('aborts plugin verification while a request is pending', async () => {
    const controller = new AbortController();
    const runner: CommandRunner = async (_command, _args, _cwd, signal) => new Promise((_resolve, reject) => {
      signal?.addEventListener('abort', () => reject(signal.reason), { once: true });
    });
    const verification = verifyOpenCodeV2Plugins(runner, 60, 1, undefined, controller.signal);
    setTimeout(() => controller.abort(new Error('interrupted')), 20);

    await expect(verification).rejects.toThrow('interrupted');
  });

  test('proves readiness through the API when restart drops its client connection', async () => {
    const ids = [...REQUIRED_V2_PLUGIN_IDS];
    const runner: CommandRunner = async (_command, args) => {
      if (args[0] === 'service') throw new Error('connection closed');
      return { stdout: JSON.stringify({ data: ids.map((id) => ({ id })) }), stderr: '' };
    };
    expect(await restartAndVerifyOpenCodeV2(runner, 1, 0)).toEqual(ids);
  });

  test('reports the service restart stage before readiness checks', async () => {
    const ids = [...REQUIRED_V2_PLUGIN_IDS];
    const progress: string[] = [];
    const runner: CommandRunner = async (_command, args) => ({
      stdout: args.at(-1) === '/api/plugin' ? JSON.stringify({ data: ids.map((id) => ({ id })) }) : '',
      stderr: '',
    });

    await restartAndVerifyOpenCodeV2(runner, 1, 0, undefined, (message) => progress.push(message));

    expect(progress[0]).toBe('Restart OpenCode V2 service...');
    expect(progress[1]).toMatch(/^Restart OpenCode V2 service done \(\d+(\.\d+)?(ms|s)\)$/);
  });

  test('verifies a hot-reloaded profile without restarting the service', async () => {
    const ids = [...REQUIRED_V2_PLUGIN_IDS];
    const calls: string[] = [];
    const runner: CommandRunner = async (command, args) => {
      calls.push(`${command} ${args.join(' ')}`);
      return { stdout: JSON.stringify({ data: ids.map((id) => ({ id })) }), stderr: '' };
    };
    expect(await verifyOpenCodeV2Plugins(runner, 1, 0)).toEqual(ids);
    expect(calls).toEqual(['opencode api get /api/plugin']);
  });

  test('waits through a partial plugin catalog during service readiness', async () => {
    const ids = [...REQUIRED_V2_PLUGIN_IDS];
    let calls = 0;
    const progress: Array<{ attempt: number; status: string; missing: string[] }> = [];
    const runner: CommandRunner = async (_command, args) => {
      calls += 1;
      return {
        stdout: args.at(-1) === '/api/plugin'
          ? JSON.stringify({ data: (calls < 3 ? ids.slice(0, -1) : ids).map((id) => ({ id })) })
          : '',
        stderr: '',
      };
    };
    expect(await verifyOpenCodeV2Plugins(runner, 3, 0, (event) => progress.push({ attempt: event.attempt, status: event.status, missing: event.missing }))).toEqual(ids);
    expect(calls).toBe(3);
    expect(progress).toEqual([
      { attempt: 1, status: 'retrying', missing: ['opencode.chatgpt-websearch'] },
      { attempt: 2, status: 'retrying', missing: ['opencode.chatgpt-websearch'] },
      { attempt: 3, status: 'ready', missing: [] },
    ]);
  });
});
