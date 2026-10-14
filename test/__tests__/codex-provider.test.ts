import { describe, expect, test } from 'bun:test';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { createTestHome, createTestProject } from '../helpers/backup';
import { runCodexProvider } from '../../src/cli/codex-provider';
import { readCanonicalSettings } from '../../src/cli/canonical';

const FIXTURE_ROOT = join(import.meta.dir, '../fixtures');

function seed(projectDir: string, provider?: 'enterprise' | 'tux'): string {
  const dir = join(projectDir, 'configs', 'settings');
  mkdirSync(dir, { recursive: true });
  const canonical = JSON.stringify({
    model_providers: {
      tux: { name: 'Tux', base_url: 'http://127.0.0.1:18080/v1', wire_api: 'responses' },
    },
    profile_files: {
      enterprise: { model: 'gpt-5.6-terra', model_provider: 'openai' },
      tux: { model: 'gpt-5.6-luna', model_provider: 'tux' },
    },
    features: { hooks: true },
  }, null, 2) + '\n';
  writeFileSync(join(dir, 'codex.json'), canonical);
  if (provider) {
    mkdirSync(join(projectDir, '.metronome'), { recursive: true });
    writeFileSync(join(projectDir, '.metronome', 'codex-provider'), `${provider}\n`);
  }
  return canonical;
}

describe('codex-provider', () => {
  test('switches the local choice and rendered desktop settings, leaving canonical untouched', async () => {
    const projectDir = createTestProject('codex-provider-switch', FIXTURE_ROOT);
    const homeDir = createTestHome('codex-provider-switch');
    const canonical = seed(projectDir, 'tux');

    const result = await runCodexProvider('enterprise', { projectDir, homeDir });
    const rendered = readFileSync(join(homeDir, '.codex/config.toml'), 'utf8');

    expect(result.changed).toBe(true);
    expect(readFileSync(join(projectDir, '.metronome', 'codex-provider'), 'utf8')).toBe('enterprise\n');
    expect(readFileSync(join(projectDir, 'configs/settings/codex.json'), 'utf8')).toBe(canonical);
    expect(rendered).toContain('model = "gpt-5.6-terra"');
    expect(rendered).toContain('model_provider = "openai"');
  });

  test('defaults to Tux when no local choice exists', async () => {
    const projectDir = createTestProject('codex-provider-default', FIXTURE_ROOT);
    seed(projectDir);

    const result = await runCodexProvider(undefined, { projectDir, json: true });
    const settings = await readCanonicalSettings(projectDir, 'codex');

    expect(result.changed).toBe(false);
    expect(result.provider).toBe('tux');
    expect(settings?.keys).toMatchObject({ model: 'gpt-5.6-luna', model_provider: 'tux' });
    expect(existsSync(join(projectDir, '.metronome', 'codex-provider'))).toBe(false);
  });

  test('canonical settings use the local choice', async () => {
    const projectDir = createTestProject('codex-provider-settings', FIXTURE_ROOT);
    seed(projectDir, 'enterprise');

    const result = await runCodexProvider(undefined, { projectDir, json: true });
    const settings = await readCanonicalSettings(projectDir, 'codex');

    expect(result.changed).toBe(false);
    expect(result.output).toContain('"provider": "enterprise"');
    expect(settings?.keys).toMatchObject({ model: 'gpt-5.6-terra', model_provider: 'openai' });
  });

  test('rejects unknown providers', async () => {
    const projectDir = createTestProject('codex-provider-invalid', FIXTURE_ROOT);
    seed(projectDir);
    expect(runCodexProvider('api', { projectDir })).rejects.toThrow('Choose: enterprise, tux');
  });

  test('rejects an invalid saved choice instead of ignoring it', async () => {
    const projectDir = createTestProject('codex-provider-bad-state', FIXTURE_ROOT);
    seed(projectDir);
    mkdirSync(join(projectDir, '.metronome'), { recursive: true });
    writeFileSync(join(projectDir, '.metronome', 'codex-provider'), 'api\n');
    expect(readCanonicalSettings(projectDir, 'codex')).rejects.toThrow("Unsupported Codex provider 'api'");
  });
});
