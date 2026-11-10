---
summary: Skills catalog and portfolio guidance for 23 active globally synced skills.
read_when:
  - Adding or modifying skills
  - Reviewing what's available
  - Deciding whether to adopt a new upstream skill
---

# Skills Catalog

23 active skills in `configs/skills/`, synced to all targets via `metronome push`.
Company-internal skills (e.g. Foundry) are private: they live only in `~/.agents/skills` (see [shared-private-skill-projection](shared-private-skill-projection.md)).
Skills load on-demand when the agent's task matches the skill description.
Run `bun scripts/sync-upstream-skills.ts` to pull configured upstreams; `auto`
entries overwrite their local skill trees, while `manual` entries report diffs.

The current portfolio is intentionally under review. See [Skill Portfolio Review](skill-portfolio-review-2026-07-10.md) for ranked cuts and reduction candidates.

## Sources

| Source | Repo | Count | Notes |
|---|---|---|---|
| Custom | this repo | 6 | Vault, migration, handoff, and film skills |
| Anthropic | `anthropics/skills` | 4 | File-format skills |
| Kepano | `kepano/obsidian-skills` | 5 | `obsidian-cli` is manually synced due to local app-safety guard |
| Ponytail | `DietrichGebert/ponytail` | 6 | Minimalism and over-engineering skills, auto-synced from upstream HEAD |
| Psychopomp | `kitlangton/psychopomp` | 2 | `psychopomp` and `explainer-motion`, manual sync |

## Selected Inventory

The tables below are a trigger-oriented overview, not an exhaustive registry. Source counts above and `configs/skills/*/SKILL.md` are authoritative.

### Custom Skills

| Skill | Trigger | Lines |
|---|---|---|
| `memory-retrieval` | Memory/Knowledge/qmd/session lookup before broad repo search or multi-file reads | — |
| `obsidian-markdown` | Working with .md files in Obsidian, wikilinks, callouts | — |
| `obsidian-json-canvas` | Working with .canvas files, mind maps, flowcharts | — |
| `obsidian-cli` | Explicit Obsidian app, plugin, or theme automation | — |
| `obsidian-defuddle` | Extracting clean markdown from web pages | — |
| `obsidian-bases` | Creating .base files, database views, filters | — |
| `obsidian-vault-conventions` | Vault layout, folder lifecycle, naming conventions | — |
| `session-notes` | Writing atomic session notes to Memory vault (decisions, discoveries, checkpoints) | — |

### Anthropic Skills

| Skill | Trigger | Support files |
|---|---|---|
| `docx` | Creating/editing/reading Word documents | scripts/ |
| `pdf` | PDF processing (read, create, merge, OCR) | forms.md, reference.md, scripts/ |
| `pptx` | Creating/editing PowerPoint presentations | editing.md, pptxgenjs.md, scripts/ |
| `xlsx` | Creating/editing/cleaning spreadsheets | scripts/ |

### Ponytail Skills

| Skill | Trigger | Purpose |
|---|---|---|
| `ponytail` | Any coding task or explicit minimalism/YAGNI request | Simplest correct implementation with intensity levels |
| `ponytail-review` | Review a change, commit, or PR | Ranked bug, safety, load, test, and lean findings with a verdict; pre-existing problems never block |
| `ponytail-audit` | Audit a repository for bloat | Repo-wide complexity audit |
| `ponytail-debt` | Find deferred `ponytail:` shortcuts | Debt ledger from deliberate simplifications |
| `ponytail-gain` | Show Ponytail impact | Published benchmark scoreboard |
| `ponytail-help` | Ask for Ponytail usage help | Modes, skills, and command reference |

## Design Commands

Five design commands in `configs/commands/`, synced with the rest of the canonical command set:

1. `teach-design-context`
2. `design-audit`
3. `design-normalize`
4. `design-polish`
5. `design-typeset`

## Adoption Guidelines

Per arXiv:2602.11988 (Gloaguen et al., "Evaluating AGENTS.md"):
- Every skill loaded but not needed costs tokens and slightly reduces success rate
- Upstream skills are often verbose (100-400 lines) — trim to telegraphic on adoption when customizing
- Anthropic skills adopted as-is are upstream-only; don't modify (pull updates from source)
- Ponytail skills are upstream-owned and auto-synced; keep local policy in canonical instructions instead of editing the imported files
- Custom and trimmed skills are owned by us; modify freely

## Adding a New Skill

1. Evaluate fit: does this address a gap or duplicate existing coverage?
2. Check upstream source health (recent commits, adoption)
3. If upstream: copy to `configs/skills/<name>/`, trim if customizing
4. If custom: create `configs/skills/<name>/SKILL.md` with frontmatter (`name`, `description`)
5. `metronome push --type skills` to sync
6. Update this doc
