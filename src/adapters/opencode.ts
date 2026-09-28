import { BaseAdapter } from './base';
import { stringifyFrontmatter } from '../formats/markdown';
import { readJsonc } from '../formats/jsonc';
import { EnvVarTransformer } from '../secrets/env-var-transformer';
import { applyOpenCodeAgentVariants, configureOpenCodeV2Plugins, mergeOpenCodeSettings, preserveOpenCodeAgentVariants, removeOpenCodeAgentVariants, renderOpenCodeAgent, renderOpenCodeAgentVariants, renderOpenCodeMcp, renderOpenCodeSettings } from '../opencode/version-renderer';
import type {
  CanonicalItem,
  CanonicalSettings,
  MCPServer,
  RenderedFile,
  AdapterCapabilities,
} from '../types';

export class OpenCodeAdapter extends BaseAdapter {
  constructor(homeDir?: string, target: 'opencode' | 'opencode2' = 'opencode') {
    super(target, 'OpenCode', homeDir);
  }

  getCapabilities(): AdapterCapabilities {
    return { commands: true, agents: true, mcp: true, instructions: true, skills: true, settings: true, agentVariantsInSettings: true, hooks: false };
  }

  private get mcpTarget(): 'opencode' | 'opencode2' {
    return this.target;
  }

  /** Keys that only exist in the canonical format — strip before rendering */
  private static readonly CANONICAL_ONLY_KEYS = new Set(['allowed-tools', 'argument-hint', 'name', 'targets']);

  renderCommand(item: CanonicalItem): RenderedFile {
    // Pass through all frontmatter except canonical-only keys
    const metadata: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(item.metadata)) {
      if (!OpenCodeAdapter.CANONICAL_ONLY_KEYS.has(key)) metadata[key] = value;
    }

    const content = stringifyFrontmatter(item.content, metadata);
    return {
      relativePath: this.paths.getCommandFilePath(item.name),
      content,
    };
  }

  renderAgent(item: CanonicalItem): RenderedFile {
    // Pass through all frontmatter except canonical-only keys, inject mode: subagent
    const metadata: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(item.metadata)) {
      if (!OpenCodeAdapter.CANONICAL_ONLY_KEYS.has(key)) metadata[key] = value;
    }
    metadata.mode = 'subagent';
    const rendered = renderOpenCodeAgent({ ...metadata, _agentName: item.name });
    delete rendered._modelVariant;
    return { relativePath: this.paths.getAgentFilePath(item.name), content: stringifyFrontmatter(item.content, rendered) };
  }

  /** OpenCode uses mcp key (not mcpServers) */
  override parseExistingMCPServerNames(content: string): string[] {
    try {
      const parsed = readJsonc<Record<string, unknown>>(content);
      const mcp = parsed.mcp as Record<string, unknown> | undefined;
      const servers = mcp?.servers as Record<string, unknown> | undefined;
      return servers ? Object.keys(servers) : [];
    } catch {
      return [];
    }
  }

  /** OpenCode resets mcp object then re-adds canonical — non-canonical removed */
  override removesNonCanonicalOnPush(): boolean {
    return true;
  }

  /** OpenCode renders enabled: false servers (with disabled flag) */
  override getRenderedServerNames(servers: MCPServer[]): string[] {
    return servers
      .filter((s) => !s.disabledFor?.includes(this.mcpTarget))
      .map((s) => s.name);
  }

  /** Parse OpenCode JSONC MCP config → canonical MCPServer[] */
  override parseMCPServers(content: string): MCPServer[] {
    try {
      const parsed = readJsonc<Record<string, unknown>>(content);
      const mcp = parsed.mcp as Record<string, Record<string, unknown>> | undefined;
      const entries = mcp?.servers as Record<string, Record<string, unknown>> | undefined;
      if (!entries) return [];

      const servers: MCPServer[] = [];
      for (const [name, cfg] of Object.entries(entries)) {
        const type = cfg.type as string | undefined;
        const transport: 'stdio' | 'http' = type === 'remote' ? 'http' : 'stdio';
        const server: MCPServer = { name, transport };

        if (transport === 'stdio') {
          // OpenCode: command is [binary, ...args] array
          const cmdArr = cfg.command as string[] | undefined;
          if (cmdArr && cmdArr.length > 0) {
            server.command = cmdArr[0];
            server.args = cmdArr.slice(1);
          }
          // OpenCode: environment uses {env:VAR} syntax
          if (cfg.environment && typeof cfg.environment === 'object') {
            const rawEnv = cfg.environment as Record<string, string>;
            // Convert {env:VAR} → ${VAR} (claude-code canonical format)
            server.env = EnvVarTransformer.fromOpenCode(rawEnv) as Record<string, string>;
            server.envVars = Object.keys(rawEnv);
          }
        } else {
          server.url = cfg.url as string;
          if (cfg.headers && typeof cfg.headers === 'object') {
            server.headers = EnvVarTransformer.fromOpenCode(cfg.headers) as Record<string, string>;
          }
        }

        if (cfg.disabled === true) server.enabled = false;

        const targetOptions: Record<string, unknown> = {};
        for (const key of ['oauth', 'codemode', 'timeout']) {
          if (key in cfg) targetOptions[key] = cfg[key];
        }
        if (Object.keys(targetOptions).length > 0) {
          server.targetOptions = { [this.mcpTarget]: targetOptions };
        }

        servers.push(server);
      }
      return servers;
    } catch {
      return [];
    }
  }

  /** OpenCode uses JSONC — override to preserve comments and $schema */
  override renderSettings(
    settings: CanonicalSettings,
    existingContent?: string,
    agents: CanonicalItem[] = [],
    staleAgentNames: string[] = [],
  ): string {
    const existing = existingContent ? readJsonc<Record<string, unknown>>(existingContent) : {};
    let rendered = renderOpenCodeSettings(settings.keys);
    rendered = applyOpenCodeAgentVariants(rendered, renderOpenCodeAgentVariants(agents));
    configureOpenCodeV2Plugins(rendered, existing);
    removeOpenCodeAgentVariants(existing, staleAgentNames);
    preserveOpenCodeAgentVariants(rendered, existing, staleAgentNames);
    return JSON.stringify(mergeOpenCodeSettings(existing, rendered), null, 2) + '\n';
  }

  /** OpenCode uses JSONC — override to parse with comment support */
  override extractSettingsKeys(canonicalKeys: string[], targetContent: string): string {
    const parsed = readJsonc<Record<string, unknown>>(targetContent);
    const extracted: Record<string, unknown> = {};
    for (const key of [...canonicalKeys].sort()) {
      if (key in parsed) {
        extracted[key] = parsed[key];
      }
    }
    return JSON.stringify(extracted, null, 2) + '\n';
  }

  override renderMCPServers(servers: MCPServer[], existingContent?: string): string {
    const existing = existingContent ? readJsonc<Record<string, unknown>>(existingContent) : {};
    return JSON.stringify({ ...existing, mcp: renderOpenCodeMcp(servers, this.mcpTarget) }, null, 2) + '\n';
  }
}
