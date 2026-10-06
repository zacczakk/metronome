import type { CanonicalItem } from '../types';

const PI_EXTENSIONS = '~/Repos/zacczakk/metronome/configs/pi/extensions';
/** Loads Memory vault files into every child session (see configs/pi/extensions/instructions-loader.ts). */
export const PI_INSTRUCTIONS_LOADER = `${PI_EXTENSIONS}/instructions-loader.ts`;
/** Enforces OpenCode permission rules (see configs/pi/extensions/permissions.ts). */
export const PI_PERMISSIONS = `${PI_EXTENSIONS}/permissions.ts`;

/** Lets the permissions extension apply this agent's rules inside its child session. */
export function piAgentMarker(name: string): string {
  return `<!-- metronome-agent: ${name} -->`;
}

type Rec = Record<string, unknown>;
const isRec = (v: unknown): v is Rec => typeof v === 'object' && v !== null && !Array.isArray(v);

function allowed(permission: Rec, key: string): boolean {
  const rule = permission[key];
  if (rule === 'allow' || rule === 'ask') return true;
  if (rule === 'deny') return false;
  if (isRec(rule)) return Object.values(rule).some((e) => e === 'allow' || e === 'ask');
  return permission['*'] !== 'deny';
}

function tools(permission: unknown): string | undefined {
  if (!isRec(permission)) return undefined;
  const out: string[] = [];
  if (allowed(permission, 'read')) out.push('read');
  if (allowed(permission, 'grep')) out.push('grep');
  if (allowed(permission, 'glob')) out.push('find', 'ls');
  if (allowed(permission, 'edit')) out.push('edit', 'write');
  if (allowed(permission, 'bash')) out.push('bash');
  for (const [key, rule] of Object.entries(permission)) {
    const m = key.match(/^([A-Za-z0-9_-]+)_\*$/);
    if (m && (rule === 'allow' || rule === 'ask')) out.push(`mcp:${m[1]}`);
  }
  return out.join(', ');
}

/** Render canonical (OpenCode-style) agent frontmatter as pi-subagents frontmatter. */
export function renderPiAgentMetadata(item: CanonicalItem): Record<string, unknown> {
  const src = item.metadata;
  const meta: Rec = { name: item.name };
  if (src.description) meta.description = src.description;
  if (typeof src.model === 'string') meta.model = src.model;
  if (typeof src.reasoningEffort === 'string') meta.thinking = src.reasoningEffort === 'none' ? 'off' : src.reasoningEffort;
  const t = tools(src.permission);
  if (t !== undefined) meta.tools = t;
  Object.assign(meta, {
    advertise: true, systemPromptMode: 'append',
    inheritProjectContext: true, inheritGlobalContext: true, inheritSkills: true,
    subagentOnlyExtensions: `${PI_INSTRUCTIONS_LOADER}, ${PI_PERMISSIONS}`,
  });
  return meta;
}
