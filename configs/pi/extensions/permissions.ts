// Pi port of OpenCode permission rules (configs/settings/opencode.json#permissions plus
// per-agent `permission` frontmatter), rendered by metronome into ~/.pi/agent/permissions.json.
// Semantics follow OpenCode: last matching rule wins, `*` matches any characters, `?` one,
// `~`/`$HOME` expand, paths inside cwd match workspace-relative, and paths outside cwd also
// need `external_directory` (default ask). `ask` prompts in the TUI and blocks without a UI.
import { readFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { isAbsolute, join, relative, resolve } from 'node:path';
import type { ExtensionAPI } from '@earendil-works/pi-coding-agent';

export type Effect = 'allow' | 'ask' | 'deny';
export interface Rule { action: string; resource: string; effect: Effect }
export interface PermissionConfig { rules: Rule[]; agents: Record<string, Rule[]> }

const RANK: Record<Effect, number> = { allow: 0, ask: 1, deny: 2 };
/** Shell commands whose path arguments OpenCode checks against external_directory. */
const PATH_COMMANDS = new Set(['cd', 'rm', 'cp', 'mv', 'mkdir', 'touch', 'chmod', 'chown', 'cat']);
const AGENT_MARKER = /<!-- metronome-agent: ([A-Za-z0-9_-]+) -->/;

function expandHome(value: string, home: string): string {
  if (value === '~' || value === '$HOME') return home;
  if (value.startsWith('~/')) return join(home, value.slice(2));
  if (value.startsWith('$HOME/')) return join(home, value.slice(6));
  return value;
}

function matches(pattern: string, value: string): boolean {
  const source = pattern.replace(/[.+^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '[\\s\\S]*').replace(/\?/g, '[\\s\\S]');
  return new RegExp(`^${source}$`).test(value);
}

const normalizeAction = (action: string) => action.replace(/-/g, '_');

/** Last matching rule wins; `fallback` applies when nothing matches. */
export function evaluate(rules: readonly Rule[], action: string, resource: string, home: string, fallback: Effect = 'allow'): Effect {
  let effect = fallback;
  for (const rule of rules) {
    if (matches(normalizeAction(rule.action), normalizeAction(action)) && matches(expandHome(rule.resource, home), resource)) effect = rule.effect;
  }
  return effect;
}

/** Split a shell command on &&, ||, ;, |, and newlines outside quotes. */
export function bashCommands(command: string): string[] {
  const parts: string[] = [];
  let current = '';
  let quote: string | undefined;
  for (let i = 0; i < command.length; i++) {
    const ch = command[i]!;
    if (quote) {
      if (ch === quote) quote = undefined;
      current += ch;
    } else if (ch === '"' || ch === "'") {
      quote = ch;
      current += ch;
    } else if (ch === ';' || ch === '\n' || ch === '|' || (ch === '&' && command[i + 1] === '&')) {
      if ((ch === '|' || ch === '&') && command[i + 1] === ch) i++;
      parts.push(current);
      current = '';
    } else {
      current += ch;
    }
  }
  parts.push(current);
  return parts.map((part) => part.trim()).filter(Boolean);
}

function worst(effects: Effect[]): Effect {
  return effects.reduce<Effect>((a, b) => (RANK[b] > RANK[a] ? b : a), 'allow');
}

/** Decide a Pi tool call; undefined means the tool is not permission-gated. */
export function decide(
  rules: readonly Rule[],
  call: { toolName: string; input: Record<string, unknown> },
  cwd: string,
  home: string,
): { effect: Effect; reason: string } | undefined {
  const str = (value: unknown) => (typeof value === 'string' ? value : undefined);
  const absolute = (p: string) => resolve(cwd, expandHome(p, home));
  const inside = (abs: string) => abs === cwd || !relative(cwd, abs).startsWith('..') && !isAbsolute(relative(cwd, abs));
  const pathResource = (abs: string) => (inside(abs) ? relative(cwd, abs) || '.' : abs);
  const external = (p: string | undefined): Effect => {
    if (p === undefined) return 'allow';
    const abs = absolute(p);
    return inside(abs) ? 'allow' : evaluate(rules, 'external_directory', abs, home, 'ask');
  };
  const verdict = (effect: Effect, what: string) => ({ effect, reason: `${what} is ${effect === 'deny' ? 'denied' : 'not pre-approved'} by permission rules` });

  const { toolName, input } = call;
  switch (toolName) {
    case 'read':
    case 'edit':
    case 'write': {
      const path = str(input.path) ?? '.';
      const action = toolName === 'read' ? 'read' : 'edit';
      return verdict(worst([evaluate(rules, action, pathResource(absolute(path)), home), external(path)]), `${action} ${path}`);
    }
    case 'grep':
      return verdict(worst([evaluate(rules, 'grep', str(input.pattern) ?? '*', home), external(str(input.path))]), `grep ${str(input.pattern) ?? ''}`);
    case 'find':
    case 'ls':
      return verdict(worst([evaluate(rules, 'glob', str(input.pattern) ?? str(input.path) ?? '*', home), external(str(input.path))]), `${toolName} ${str(input.path) ?? '.'}`);
    case 'bash': {
      const command = str(input.command) ?? '';
      const effects = bashCommands(command).flatMap((cmd) => {
        const [name, ...args] = cmd.split(/\s+/);
        const paths = PATH_COMMANDS.has(name ?? '')
          ? args.filter((arg) => !arg.startsWith('-')).map((arg) => arg.replace(/^["']|["']$/g, '')).filter((arg) => arg.startsWith('/') || arg.startsWith('~') || arg.startsWith('..'))
          : [];
        return [evaluate(rules, 'shell', cmd, home), ...paths.map(external)];
      });
      return verdict(worst(effects), `\`${command}\``);
    }
    case 'subagent':
      return verdict(evaluate(rules, 'subagent', str(input.agent) ?? '*', home), `subagent ${str(input.agent) ?? ''}`);
    default: {
      const mcp = toolName.match(/^mcp__(.+?)__(.+)$/);
      if (!mcp) return undefined;
      const action = `${mcp[1]}_${mcp[2]}`;
      return verdict(evaluate(rules, action, '*', home), `MCP tool ${action}`);
    }
  }
}

function loadConfig(): PermissionConfig | undefined {
  const dir = process.env.PI_CODING_AGENT_DIR ?? join(homedir(), '.pi', 'agent');
  try {
    return JSON.parse(readFileSync(join(dir, 'permissions.json'), 'utf8')) as PermissionConfig;
  } catch {
    return undefined;
  }
}

export default function permissions(pi: ExtensionAPI) {
  const config = loadConfig();
  if (!config) return;
  let agent: string | undefined;

  pi.on('before_agent_start', (event) => {
    agent = event.systemPrompt?.match(AGENT_MARKER)?.[1] ?? agent;
  });

  pi.on('tool_call', async (event, ctx) => {
    const ruleset = agent && config.agents[agent] ? [...config.rules, ...config.agents[agent]] : config.rules;
    const decision = decide(ruleset, { toolName: event.toolName, input: event.input as Record<string, unknown> }, ctx.cwd, homedir());
    if (!decision || decision.effect === 'allow') return;
    if (decision.effect === 'ask' && ctx.hasUI && await ctx.ui.confirm('Permission required', `Allow ${decision.reason.replace(/ is not pre-approved.*/, '')}?`)) return;
    return { block: true, reason: decision.effect === 'ask' ? `${decision.reason}; ask the user to run it or approve it in an interactive session` : decision.reason };
  });
}
