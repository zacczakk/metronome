import { join } from 'node:path';
import { BaseAdapter } from './base';
import { readJson, writeJson } from '../formats/json';
import { stringifyFrontmatter } from '../formats/markdown';
import { renderPiModels } from '../pi/models';
import { renderPiMcp } from '../pi/mcp';
import { renderPiAgentMetadata } from '../pi/agents';
import type { AdapterCapabilities, CanonicalItem, CanonicalSettings, MCPServer, RenderedFile } from '../types';

/** Canonical settings keys starting with `_` are render inputs, never written to settings.json. */
const PRIVATE_PREFIX = '_';

export class PiAdapter extends BaseAdapter {
  constructor(homeDir?: string) {
    super('pi', 'Pi', homeDir);
  }

  getCapabilities(): AdapterCapabilities {
    return { commands: false, agents: true, mcp: true, instructions: true, skills: false, settings: true, hooks: false };
  }

  renderCommand(item: CanonicalItem): RenderedFile {
    return { relativePath: this.paths.getCommandFilePath(item.name), content: stringifyFrontmatter(item.content, item.metadata) };
  }

  renderAgent(item: CanonicalItem): RenderedFile {
    return { relativePath: this.paths.getAgentFilePath(item.name), content: stringifyFrontmatter(item.content, renderPiAgentMetadata(item)) };
  }

  renderMCPServers(servers: MCPServer[], existingContent?: string): string {
    const existing = existingContent ? readJson<Record<string, unknown>>(existingContent) : {};
    return writeJson({ ...existing, ...renderPiMcp(servers) });
  }

  override getRenderedServerNames(servers: MCPServer[]): string[] {
    return servers.filter((s) => !s.disabledFor?.includes('pi')).map((s) => s.name);
  }

  override renderSettings(settings: CanonicalSettings, existingContent?: string): string {
    const base = existingContent ? readJson<Record<string, unknown>>(existingContent) : {};
    for (const [key, value] of Object.entries(settings.keys)) {
      if (!key.startsWith(PRIVATE_PREFIX)) base[key] = value;
    }
    return writeJson(base);
  }

  override extractSettingsKeys(canonicalKeys: string[], targetContent: string): string {
    return super.extractSettingsKeys(canonicalKeys.filter((k) => !k.startsWith(PRIVATE_PREFIX)), targetContent);
  }

  override renderAdditionalSettings(settings: CanonicalSettings): RenderedFile[] {
    const providers = settings.keys._opencodeProviders;
    if (!providers || typeof providers !== 'object') return [];
    return [{
      relativePath: join(this.paths.getBaseDir(), 'models.json'),
      content: writeJson(renderPiModels(providers as Record<string, unknown>)),
    }];
  }
}
