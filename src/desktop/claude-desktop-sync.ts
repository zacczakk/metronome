import os from 'node:os';
import { createHash } from 'node:crypto';
import { readdir, readFile, mkdir, rm, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, relative } from 'node:path';
import { atomicWrite } from '../infra/atomic-write';
import { readJson, writeJson } from '../formats/json';
import { parseFrontmatter } from '../formats/markdown';
import type { DesktopDrift } from '../types';

export type Variant = DesktopDrift['variant'];

const VARIANT_DIR_NAME: Record<Variant, string> = {
  claude: 'Claude',
  'claude-3p': 'Claude-3p',
};

/** UUIDv4-ish (8-4-4-4-12 hex) */
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

const DISABLED_SKILLS = new Set([
  'dispatching-parallel-agents',
  'doc-coauthoring',
  'finishing-a-development-branch',
  'receiving-code-review',
  'requesting-code-review',
  'skill-creator',
  'systematic-debugging',
  'test-driven-development',
  'using-git-worktrees',
  'webapp-testing',
  'writing-skills',
]);

export interface AccountOrg {
  account: string;
  org: string;
}

/** What a variant needs written. `apply` writes only the parts that drifted. */
export interface DesktopPlan extends DesktopDrift {
  userSkills: number;
  apply: () => Promise<void>;
}

export interface SyncOpts {
  configsDir: string;
  memoryVaultDir: string;
  variants?: Variant[];
  homeDir?: string;
}

// ── Path helpers ────────────────────────────────────────────────────────────

function variantBaseDir(homeDir: string, variant: Variant): string {
  return join(homeDir, 'Library/Application Support', VARIANT_DIR_NAME[variant]);
}

function instructionsPath(base: string, account: string, org: string): string {
  return join(base, 'local-agent-mode-sessions', account, org, 'memory', 'CLAUDE.md');
}

function skillsPluginRoot(base: string, account: string, org: string): string {
  return join(base, 'local-agent-mode-sessions', 'skills-plugin', org, account);
}

async function readTextOrNull(path: string): Promise<string | null> {
  try {
    return await readFile(path, 'utf-8');
  } catch (err) {
    if (err instanceof Error && 'code' in err && err.code === 'ENOENT') return null;
    throw err;
  }
}

// ── Discovery ───────────────────────────────────────────────────────────────

export async function discoverVariants(homeDir: string): Promise<Variant[]> {
  const found: Variant[] = [];
  // 3p first — primary target
  for (const v of ['claude-3p', 'claude'] as Variant[]) {
    if (existsSync(variantBaseDir(homeDir, v))) found.push(v);
  }
  return found;
}

export async function discoverAccountAndOrg(variantBase: string): Promise<AccountOrg | null> {
  const sessionsDir = join(variantBase, 'local-agent-mode-sessions');
  let entries: string[];
  try {
    entries = await readdir(sessionsDir);
  } catch {
    return null;
  }
  for (const account of entries) {
    if (!UUID_RE.test(account)) continue; // skip skills-plugin and other non-UUID dirs
    const accountDir = join(sessionsDir, account);
    let orgEntries: string[];
    try {
      orgEntries = await readdir(accountDir);
    } catch {
      continue;
    }
    for (const org of orgEntries) {
      if (!UUID_RE.test(org)) continue;
      return { account, org };
    }
  }
  return null;
}

// ── Instructions ────────────────────────────────────────────────────────────

const INSTRUCTIONS_HEADER = '# Composed by metronome — do not edit by hand. Source: configs/instructions/AGENTS.md + Memory vault.\n';

/** Missing Memory files are skipped; unreadable ones (e.g. iCloud locks) throw so a partial file is never written. */
export async function composeInstructions(configsDir: string, memoryVaultDir: string): Promise<string> {
  const agentsPath = join(configsDir, 'instructions', 'AGENTS.md');
  const agents = await readFile(agentsPath, 'utf-8'); // throws if missing — required

  const optional: Array<{ label: string; path: string }> = [
    { label: 'IDENTITY', path: join(memoryVaultDir, 'IDENTITY.md') },
    { label: 'SOUL', path: join(memoryVaultDir, 'SOUL.md') },
    { label: 'USER', path: join(memoryVaultDir, 'USER.md') },
    { label: 'STYLE', path: join(memoryVaultDir, 'STYLE.md') },
  ];

  const parts: string[] = [INSTRUCTIONS_HEADER, '\n', agents.trimEnd(), '\n'];
  for (const o of optional) {
    const body = await readTextOrNull(o.path);
    if (body === null) continue;
    parts.push(`\n\n---\n\n<!-- from ${o.label} -->\n`, body.trimEnd(), '\n');
  }
  return parts.join('');
}

export async function syncInstructions(base: string, account: string, org: string, content: string): Promise<void> {
  await atomicWrite(instructionsPath(base, account, org), content);
}

// ── Skills ──────────────────────────────────────────────────────────────────

interface ManifestEntry {
  skillId: string;
  name: string;
  description: string;
  creatorType: 'anthropic' | 'user';
  /** false marks a local skill; Cowork's skills sync deletes user entries without it. */
  syncManaged?: boolean;
  updatedAt: number | null;
  enabled: boolean;
}

interface SkillManifest {
  lastUpdated: number;
  skills: ManifestEntry[];
}

interface SourceSkill {
  name: string;
  description: string;
  dir: string;
}

interface SkillsPlan {
  writePluginJson: boolean;
  copy: SourceSkill[];
  remove: string[];
  manifest: string | null;
  userSkills: number;
}

const PLUGIN_JSON_DEFAULT = {
  name: 'anthropic-skills',
  version: '1.0.0',
  description: 'Anthropic-managed skills for Claude Desktop',
};

async function readSourceSkills(sourceSkillsDir: string): Promise<SourceSkill[]> {
  let entries: string[];
  try {
    entries = await readdir(sourceSkillsDir);
  } catch {
    return [];
  }
  const skills: SourceSkill[] = [];
  for (const entry of entries) {
    if (entry.startsWith('.')) continue;
    const dir = join(sourceSkillsDir, entry);
    let st;
    try {
      st = await stat(dir);
    } catch {
      continue;
    }
    if (!st.isDirectory()) continue;
    const skillMdPath = join(dir, 'SKILL.md');
    let raw: string;
    try {
      raw = await readFile(skillMdPath, 'utf-8');
    } catch {
      continue; // not a valid skill dir
    }
    const { data } = parseFrontmatter(raw);
    const description = typeof data.description === 'string' ? data.description.replace(/\s+/g, ' ').trim() : '';
    skills.push({ name: entry, description, dir });
  }
  return skills.sort((a, b) => a.name.localeCompare(b.name));
}

async function copyDirRecursive(src: string, dest: string): Promise<void> {
  await mkdir(dest, { recursive: true });
  const entries = await readdir(src, { withFileTypes: true });
  for (const entry of entries) {
    const sp = join(src, entry.name);
    const dp = join(dest, entry.name);
    if (entry.isDirectory()) {
      await copyDirRecursive(sp, dp);
    } else if (entry.isFile()) {
      const buf = await readFile(sp);
      await atomicWrite(dp, buf);
    }
  }
}

/** Relative paths of regular files under `dir`, the same set copyDirRecursive copies. */
async function listFiles(dir: string, root = dir): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await listFiles(path, root)));
    else if (entry.isFile()) files.push(relative(root, path));
  }
  return files.sort();
}

async function treesEqual(src: string, dest: string): Promise<boolean> {
  if (!existsSync(dest)) return false;
  const [srcFiles, destFiles] = await Promise.all([listFiles(src), listFiles(dest)]);
  if (srcFiles.length !== destFiles.length || srcFiles.some((f, i) => f !== destFiles[i])) return false;
  for (const file of srcFiles) {
    const [a, b] = await Promise.all([readFile(join(src, file)), readFile(join(dest, file))]);
    if (!a.equals(b)) return false;
  }
  return true;
}

async function planSkills(root: string, sourceSkillsDir: string): Promise<SkillsPlan> {
  const skillsRoot = join(root, 'skills');

  // Read existing manifest (preserve Anthropic entries)
  const existingRaw = await readTextOrNull(join(root, 'manifest.json'));
  let existingManifest: SkillManifest = { lastUpdated: 0, skills: [] };
  if (existingRaw !== null) {
    try {
      existingManifest = readJson<SkillManifest>(existingRaw);
    } catch {
      // unparseable — rebuild
    }
  }
  const anthropicEntries = existingManifest.skills.filter(
    (s) => s.creatorType === 'anthropic' && !DISABLED_SKILLS.has(s.name),
  );
  const anthropicNames = new Set(anthropicEntries.map((s) => s.name));

  // Never overwrite Anthropic skills
  const sourceSkills = (await readSourceSkills(sourceSkillsDir)).filter((s) => !anthropicNames.has(s.name));
  const sourceNames = new Set(sourceSkills.map((s) => s.name));

  // Disabled skills, and stale user skill dirs (not in source, not Anthropic-managed)
  const remove: string[] = [];
  if (existsSync(skillsRoot)) {
    for (const name of await readdir(skillsRoot)) {
      if (DISABLED_SKILLS.has(name) || (!anthropicNames.has(name) && !sourceNames.has(name))) remove.push(name);
    }
  }

  const copy: SourceSkill[] = [];
  for (const s of sourceSkills) {
    if (!(await treesEqual(s.dir, join(skillsRoot, s.name)))) copy.push(s);
  }

  const userEntries: ManifestEntry[] = sourceSkills.map((s) => ({
    skillId: s.name,
    name: s.name,
    description: s.description,
    creatorType: 'user' as const,
    syncManaged: false,
    updatedAt: null,
    enabled: true,
  }));

  // Anthropic first (preserve order), then user (alphabetical)
  const newSkills = [...anthropicEntries, ...userEntries];

  // Deterministic lastUpdated: hash of skill list (idempotency)
  const lastUpdated = parseInt(createHash('sha256').update(JSON.stringify(newSkills)).digest('hex').slice(0, 12), 16);
  const newManifest: SkillManifest = { lastUpdated, skills: newSkills };
  const manifest = writeJson(newManifest);

  return {
    writePluginJson: !existsSync(join(root, '.claude-plugin', 'plugin.json')),
    copy,
    remove,
    manifest: manifest === existingRaw ? null : manifest,
    userSkills: userEntries.length,
  };
}

function skillsDrifted(plan: SkillsPlan): boolean {
  return plan.writePluginJson || plan.copy.length > 0 || plan.remove.length > 0 || plan.manifest !== null;
}

async function applySkills(root: string, plan: SkillsPlan): Promise<void> {
  const skillsRoot = join(root, 'skills');
  if (plan.writePluginJson) await atomicWrite(join(root, '.claude-plugin', 'plugin.json'), writeJson(PLUGIN_JSON_DEFAULT));
  for (const name of plan.remove) await rm(join(skillsRoot, name), { recursive: true, force: true });
  for (const s of plan.copy) {
    const destDir = join(skillsRoot, s.name);
    await rm(destDir, { recursive: true, force: true });
    await copyDirRecursive(s.dir, destDir);
  }
  if (plan.manifest !== null) await atomicWrite(join(root, 'manifest.json'), plan.manifest);
}

export async function syncSkills(
  base: string,
  account: string,
  org: string,
  sourceSkillsDir: string,
): Promise<number> {
  const root = skillsPluginRoot(base, account, org);
  const plan = await planSkills(root, sourceSkillsDir);
  await applySkills(root, plan);
  return plan.userSkills;
}

// ── Top-level orchestrator ──────────────────────────────────────────────────

/** Compare canonical sources with each detected variant without writing anything. */
export async function planClaudeDesktop(opts: SyncOpts): Promise<DesktopPlan[]> {
  const homeDir = opts.homeDir ?? os.homedir();
  const candidate = opts.variants ?? (await discoverVariants(homeDir));
  const plans: DesktopPlan[] = [];
  let instructionsContent: string | undefined;

  for (const variant of candidate) {
    const base = variantBaseDir(homeDir, variant);
    if (!existsSync(base)) continue;

    const accountOrg = await discoverAccountAndOrg(base);
    if (!accountOrg) continue; // skip variant without account/org
    const { account, org } = accountOrg;

    instructionsContent ??= await composeInstructions(opts.configsDir, opts.memoryVaultDir);
    const content = instructionsContent;
    const instructions = (await readTextOrNull(instructionsPath(base, account, org))) !== content;
    const root = skillsPluginRoot(base, account, org);
    const skillsPlan = await planSkills(root, join(opts.configsDir, 'skills'));
    const skills = skillsDrifted(skillsPlan);

    plans.push({
      variant,
      instructions,
      skills,
      userSkills: skillsPlan.userSkills,
      apply: async () => {
        if (instructions) await syncInstructions(base, account, org, content);
        if (skills) await applySkills(root, skillsPlan);
      },
    });
  }

  return plans;
}

export async function syncClaudeDesktop(opts: SyncOpts): Promise<DesktopPlan[]> {
  const plans = await planClaudeDesktop(opts);
  for (const plan of plans) await plan.apply();
  return plans;
}
