# Vault Frontmatter Migration Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add frontmatter to all Knowledge vault notes and redesign Memory vault frontmatter schema — full migration of both vaults per the [spec](../specs/2026-03-24-vault-frontmatter-design.md).

**Architecture:** Two TypeScript migration scripts using `gray-matter` (already a metronome dependency) for YAML frontmatter parsing/serialization. Scripts read each `.md` file, extract metadata from body text (Knowledge) or transform existing frontmatter (Memory), write back. Agent-assisted phase generates summaries via subagent reads of each note. AGENTS.md updated last to document new conventions.

**Tech Stack:** TypeScript, Bun, gray-matter, git

---

## File Structure

| File | Purpose |
|------|---------|
| `scripts/migrate-knowledge-frontmatter.ts` | Phase 1 script: adds frontmatter to all Knowledge vault notes |
| `scripts/migrate-memory-frontmatter.ts` | Phase 1 script: transforms Memory vault frontmatter |
| `scripts/generate-summaries.ts` | Phase 2 script: reads notes, calls agent to generate summaries |
| `~/Vaults/AGENTS.md` | Update schema documentation for both vaults |

---

### Task 1: Knowledge Vault Migration Script

**Files:**
- Create: `scripts/migrate-knowledge-frontmatter.ts`

This script processes every `.md` file in `~/Vaults/Knowledge/` (excluding `.obsidian/` and `.planning/`), adds YAML frontmatter based on folder position and body text, and removes `See also:` lines.

- [ ] **Step 1: Create the migration script**

```typescript
// scripts/migrate-knowledge-frontmatter.ts
//
// Usage: bun run scripts/migrate-knowledge-frontmatter.ts [--dry-run]
//
// Adds YAML frontmatter to all Knowledge vault .md files.
// Extracts: type (from folder), parent (from "See also:" lines),
//           source (first URL), tags (from task lines), created (from git log).
// Removes "See also:" lines from body text.

import { readFileSync, writeFileSync, readdirSync, statSync } from "fs"
import { join, relative, dirname, basename } from "path"
import { execSync } from "child_process"
import matter from "gray-matter"

const VAULT = join(process.env.HOME!, "Vaults/Knowledge")
const DRY_RUN = process.argv.includes("--dry-run")
const SKIP_DIRS = new Set([".obsidian", ".planning", ".trash"])

// --- Type mapping ---

function getType(relPath: string, fileName: string): string {
  // Index/sub-index files
  const FOLDER_INDEXES = new Set([
    "Home.md", "backlog.md", "projects.md", "docs.md",
    "knowledge.md", "people.md"
  ])
  const SUB_INDEXES = new Set([
    "terminal-shell.md", "python.md", "agent-obsidian.md",
    "web-dev.md", "macos-tools.md", "merck-work.md",
    "agent-memory.md", "agent-skills.md", "agent-tooling.md",
    "ai-research.md", "ai-runtimes.md", "dev-environment.md",
    "document-processing.md", "frontend-design.md", "react-patterns.md",
    "claude-code-skills.md", "agentic-frameworks.md",
    "skill-design-and-tooling.md"
  ])

  if (FOLDER_INDEXES.has(fileName) || SUB_INDEXES.has(fileName)) return "index"
  if (relPath.startsWith("01_inbox/")) return "backlog"
  if (relPath.startsWith("02_backlog/")) return "backlog"
  if (relPath.startsWith("03_active/")) return "project"
  if (relPath.startsWith("04_archive/")) return "project"
  if (relPath.startsWith("05_notes/")) return "note"
  if (relPath.startsWith("06_docs/")) return "doc"
  if (relPath.startsWith("07_knowledge/")) return "knowledge"
  if (relPath.startsWith("08_people/ppl/")) return "person"
  if (relPath.startsWith("08_people/org/")) return "org"
  if (relPath.startsWith("08_people/")) return "index" // people.md itself
  if (relPath.startsWith("00_system/queries/")) return "query"
  if (relPath.startsWith("00_system/grooming-reports/")) return "report"
  return "note" // fallback
}

// --- Parent mapping ---

function extractParent(content: string): string | null {
  // Match "See also: [[Parent]]" pattern (case insensitive, flexible whitespace)
  const match = content.match(/See\s+also:\s*\[\[([^\]]+)\]\]/i)
  return match ? match[1] : null
}

function getDefaultParent(relPath: string, fileName: string, type: string): string | null {
  if (fileName === "Home.md") return null

  // Folder indexes -> Home
  const FOLDER_INDEXES = new Set([
    "backlog.md", "projects.md", "docs.md", "knowledge.md", "people.md"
  ])
  if (FOLDER_INDEXES.has(fileName)) return "Home"

  // Inbox items -> backlog
  if (relPath.startsWith("01_inbox/")) return "backlog"

  // Default by folder for files without See also
  if (relPath.startsWith("02_backlog/")) return "backlog"
  if (relPath.startsWith("03_active/")) return "projects"
  if (relPath.startsWith("04_archive/")) return "projects"
  if (relPath.startsWith("05_notes/")) return "Home"
  if (relPath.startsWith("00_system/queries/")) return "Home"
  if (relPath.startsWith("00_system/grooming-reports/")) return "Home"
  if (relPath.startsWith("08_people/ppl/")) return "people"
  if (relPath.startsWith("08_people/org/")) return "people"

  return null
}

// --- Source URL extraction ---

function extractSource(content: string): string | null {
  const match = content.match(/https?:\/\/[^\s\)>\]]+/)
  return match ? match[0] : null
}

// --- Tag extraction from task lines ---

function extractTags(content: string): string[] {
  const tags = new Set<string>()
  const taskTagPattern = /- \[[ x]\].*?(#\w+)/g
  let match
  while ((match = taskTagPattern.exec(content)) !== null) {
    tags.add(match[1].replace("#", ""))
  }
  return [...tags]
}

// --- Git created date ---

function getGitCreated(filePath: string): string | null {
  try {
    const result = execSync(
      `git log --diff-filter=A --follow --format=%aI -- "${filePath}" | tail -1`,
      { cwd: VAULT, encoding: "utf-8" }
    ).trim()
    if (result) {
      return result.slice(0, 10) // YYYY-MM-DD
    }
  } catch {}
  return null
}

// --- Remove "See also:" line ---

function removeSeeAlso(content: string): string {
  return content.replace(/^See\s+also:\s*\[\[[^\]]+\]\]\s*$/gim, "").replace(/\n{3,}/g, "\n\n").trim()
}

// --- Walk directory ---

function walkDir(dir: string): string[] {
  const files: string[] = []
  for (const entry of readdirSync(dir)) {
    if (SKIP_DIRS.has(entry)) continue
    const fullPath = join(dir, entry)
    const stat = statSync(fullPath)
    if (stat.isDirectory()) {
      files.push(...walkDir(fullPath))
    } else if (entry.endsWith(".md")) {
      files.push(fullPath)
    }
  }
  return files
}

// --- Main ---

const files = walkDir(VAULT)
let processed = 0
let skipped = 0
const errors: string[] = []

for (const filePath of files) {
  const relPath = relative(VAULT, filePath)
  const fileName = basename(filePath)

  try {
    const raw = readFileSync(filePath, "utf-8")
    const parsed = matter(raw)

    // Skip files that already have frontmatter (2 files: web clipper + liquid-carbon)
    if (parsed.data && Object.keys(parsed.data).length > 0) {
      console.log(`SKIP (has frontmatter): ${relPath}`)
      skipped++
      continue
    }

    const content = parsed.content || raw
    const type = getType(relPath, fileName)
    const seeAlsoParent = extractParent(content)
    const parent = seeAlsoParent || getDefaultParent(relPath, fileName, type)
    const created = getGitCreated(filePath) || new Date().toISOString().slice(0, 10)
    const tags = extractTags(content)

    // Build frontmatter
    const fm: Record<string, any> = { type }
    if (parent) fm.parent = `"[[${parent}]]"`
    fm.created = created
    fm.summary = ""
    if (tags.length > 0) fm.tags = tags
    else fm.tags = []

    // Type-specific extensions
    if ((type === "backlog" || type === "knowledge") && extractSource(content)) {
      fm.source = extractSource(content)
    }
    if (type === "project") {
      fm.status = "active"
    }

    // Clean body
    const cleanBody = removeSeeAlso(content)

    // Write
    const output = matter.stringify(cleanBody, fm)

    if (DRY_RUN) {
      console.log(`DRY RUN: ${relPath}`)
      console.log(`  type: ${type}, parent: ${parent}, created: ${created}, tags: [${tags}]`)
    } else {
      writeFileSync(filePath, output)
      console.log(`OK: ${relPath}`)
    }
    processed++
  } catch (err: any) {
    errors.push(`${relPath}: ${err.message}`)
  }
}

console.log(`\nProcessed: ${processed}, Skipped: ${skipped}, Errors: ${errors.length}`)
if (errors.length > 0) {
  console.log("\nErrors:")
  errors.forEach(e => console.log(`  ${e}`))
}
```

- [ ] **Step 2: Run dry-run to verify**

Run: `bun run scripts/migrate-knowledge-frontmatter.ts --dry-run`

Expected: Lists all ~198 files with extracted type, parent, created, tags. No files modified.

Review output for:
- Every file has a type
- Every non-Home file has a parent
- Parents look correct (leaf → sub-index → folder-index → Home)
- No errors

- [ ] **Step 3: Run the migration**

Run: `bun run scripts/migrate-knowledge-frontmatter.ts`

Expected: All files modified with frontmatter. `See also:` lines removed.

- [ ] **Step 4: Spot-check 10 files across folders**

Manually read 10 files (2 per major folder type) to verify:
- Frontmatter is valid YAML
- `parent:` links are correct
- `See also:` lines are removed
- Body content is intact
- `source:` URLs are correct for backlog/knowledge notes
- Tags are extracted correctly

- [ ] **Step 5: Commit**

```bash
cd ~/Vaults/Knowledge && git add -A && git commit -m "feat: add frontmatter to all Knowledge vault notes"
```

Also commit the script:
```bash
cd ~/Repos/zacczakk/metronome && git add scripts/migrate-knowledge-frontmatter.ts && git commit -m "feat: knowledge vault frontmatter migration script"
```

---

### Task 2: Memory Vault Migration Script

**Files:**
- Create: `scripts/migrate-memory-frontmatter.ts`

This script transforms existing frontmatter on all Memory vault files: splits `related:` into `parent:` + `related:`, drops dead fields, adds `status:` to patterns/tools, removes type-echo tags.

- [ ] **Step 1: Create the migration script**

```typescript
// scripts/migrate-memory-frontmatter.ts
//
// Usage: bun run scripts/migrate-memory-frontmatter.ts [--dry-run]
//
// Transforms Memory vault frontmatter:
// - Splits related: → parent: (first entry) + related: (rest)
// - Drops depends-on:, date:, branch:
// - Adds status: active to patterns and tools
// - Removes type-echo tags (session, collection, recap, etc.)
// - Fixes non-standard type values

import { readFileSync, writeFileSync, readdirSync, statSync } from "fs"
import { join, relative, basename } from "path"
import matter from "gray-matter"

const VAULT = join(process.env.HOME!, "Vaults/Memory")
const DRY_RUN = process.argv.includes("--dry-run")
const SKIP_DIRS = new Set([".obsidian", ".trash"])

// Root files have no parent — they have peer links
const ROOT_FILES = new Set(["MEMORY.md", "IDENTITY.md", "SOUL.md", "USER.md"])

// Known folder parents and collections (for parent validation)
const KNOWN_PARENTS = new Set([
  "MEMORY", "patterns", "projects", "sessions", "system", "tools",
  "agent-config-patterns", "claude-code-patterns", "vault-lifecycle-patterns",
  "build-runtime-gotchas", "security-compliance-patterns", "llm-api-patterns",
  "metronome", "verion", "obsidian-vault-system",
  "grooming-reports", "consolidation-reports",
  "macos-shell-environment", "opencode-internals", "mcp-agent-tooling",
  "enterprise-devops-tools", "standalone-cli-tools"
])

// Type-echo tags to remove (these duplicate the type: field)
const TYPE_ECHO_TAGS = new Set([
  "session", "collection", "recap", "discovery", "decision",
  "checkpoint", "dead-end", "pattern", "report"
])

// Non-standard type fixes
const TYPE_FIXES: Record<string, string> = {
  "tool-note": "tool",
  "session-note": "discovery", // fargate-hostname-nextjs is a discovery
}

// Files with specific type fixes
const FILE_TYPE_OVERRIDES: Record<string, string> = {
  "sessions/2026-03-20-tavily-mcp-fix.md": "discovery",
  "sessions/2026-03-19-public-repo-pii-checklist.md": "decision",
}

function extractWikilinkName(wikilink: string): string {
  // "[[name]]" -> "name"
  return wikilink.replace(/^\[\[/, "").replace(/\]\]$/, "").replace(/^"/, "").replace(/"$/, "")
}

function walkDir(dir: string): string[] {
  const files: string[] = []
  for (const entry of readdirSync(dir)) {
    if (SKIP_DIRS.has(entry)) continue
    const fullPath = join(dir, entry)
    const stat = statSync(fullPath)
    if (stat.isDirectory()) {
      files.push(...walkDir(fullPath))
    } else if (entry.endsWith(".md")) {
      files.push(fullPath)
    }
  }
  return files
}

const files = walkDir(VAULT)
let processed = 0
let skipped = 0
const warnings: string[] = []
const errors: string[] = []

for (const filePath of files) {
  const relPath = relative(VAULT, filePath)
  const fileName = basename(filePath)

  try {
    const raw = readFileSync(filePath, "utf-8")
    const parsed = matter(raw)
    const fm = { ...parsed.data }

    if (!fm.type) {
      console.log(`SKIP (no frontmatter): ${relPath}`)
      skipped++
      continue
    }

    const isRoot = ROOT_FILES.has(fileName)
    const changes: string[] = []

    // 1. Fix non-standard type values
    if (TYPE_FIXES[fm.type]) {
      changes.push(`type: ${fm.type} → ${TYPE_FIXES[fm.type]}`)
      fm.type = TYPE_FIXES[fm.type]
    }
    if (FILE_TYPE_OVERRIDES[relPath]) {
      changes.push(`type: ${fm.type} → ${FILE_TYPE_OVERRIDES[relPath]}`)
      fm.type = FILE_TYPE_OVERRIDES[relPath]
    }

    // 2. Split related: → parent: + related:
    if (!isRoot && fm.related && Array.isArray(fm.related) && fm.related.length > 0) {
      const parentLink = fm.related[0] // First entry = parent
      const parentName = extractWikilinkName(parentLink)

      // Validate parent
      if (KNOWN_PARENTS.has(parentName)) {
        fm.parent = parentLink
        fm.related = fm.related.slice(1)
        if (fm.related.length === 0) delete fm.related
        changes.push(`parent: ${parentLink}`)
      } else {
        warnings.push(`${relPath}: parent "${parentName}" not in known parents. Keeping related: as-is.`)
      }
    } else if (!isRoot && !fm.related) {
      warnings.push(`${relPath}: missing related: — no parent extracted`)
    }

    // For root files: keep related as-is, no parent field
    if (isRoot) {
      // related stays as peer links
    }

    // 3. Drop dead fields
    if ("depends-on" in fm) {
      // Move actual values to related before dropping
      const depsOn = fm["depends-on"]
      if (Array.isArray(depsOn) && depsOn.length > 0) {
        if (!fm.related) fm.related = []
        fm.related.push(...depsOn)
        changes.push(`depends-on values moved to related: ${depsOn}`)
      }
      delete fm["depends-on"]
      changes.push("dropped depends-on")
    }
    if ("date" in fm) {
      delete fm.date
      changes.push("dropped date")
    }
    if ("branch" in fm) {
      delete fm.branch
      changes.push("dropped branch")
    }

    // 4. Add status: active to patterns and tools (non-collections)
    if ((fm.type === "pattern" || fm.type === "tool") && !fm.status) {
      fm.status = "active"
      changes.push("added status: active")
    }

    // 5. Remove type-echo tags
    if (fm.tags && Array.isArray(fm.tags)) {
      const originalLen = fm.tags.length
      fm.tags = fm.tags.filter((t: string) => !TYPE_ECHO_TAGS.has(t))
      if (fm.tags.length < originalLen) {
        changes.push(`removed ${originalLen - fm.tags.length} type-echo tags`)
      }
    }

    // 6. Fix system.md type (reference → collection)
    if (relPath === "system/system.md" && fm.type === "reference") {
      fm.type = "collection"
      changes.push("type: reference → collection")
    }

    if (changes.length === 0) {
      console.log(`NOOP: ${relPath}`)
      skipped++
      continue
    }

    // Reorder frontmatter fields for consistency
    const ordered: Record<string, any> = {}
    const fieldOrder = [
      "type", "parent", "summary", "tags", "created", "updated",
      "related", "status", "verified",
      "repo", "language", "framework",
      "projects", "consolidated",
      "usage", "mutable", "immutable", "version"
    ]
    for (const key of fieldOrder) {
      if (key in fm) ordered[key] = fm[key]
    }
    // Any remaining fields not in the order
    for (const key of Object.keys(fm)) {
      if (!(key in ordered)) ordered[key] = fm[key]
    }

    const output = matter.stringify(parsed.content, ordered)

    if (DRY_RUN) {
      console.log(`DRY RUN: ${relPath}`)
      changes.forEach(c => console.log(`  ${c}`))
    } else {
      writeFileSync(filePath, output)
      console.log(`OK: ${relPath} — ${changes.join(", ")}`)
    }
    processed++
  } catch (err: any) {
    errors.push(`${relPath}: ${err.message}`)
  }
}

console.log(`\nProcessed: ${processed}, Skipped: ${skipped}, Warnings: ${warnings.length}, Errors: ${errors.length}`)
if (warnings.length > 0) {
  console.log("\nWarnings:")
  warnings.forEach(w => console.log(`  ${w}`))
}
if (errors.length > 0) {
  console.log("\nErrors:")
  errors.forEach(e => console.log(`  ${e}`))
}
```

- [ ] **Step 2: Run dry-run to verify**

Run: `bun run scripts/migrate-memory-frontmatter.ts --dry-run`

Expected: Lists all changes per file. Verify:
- Every non-root file gets a `parent:` extracted
- `depends-on` dropped from ~35 files
- `date` dropped from ~34 files
- `status: active` added to pattern/tool leaves (not collections)
- Type-echo tags removed
- Warnings for 3 files missing `related:` (2 skill-syncs + 1 session)
- No errors

- [ ] **Step 3: Run the migration**

Run: `bun run scripts/migrate-memory-frontmatter.ts`

- [ ] **Step 4: Spot-check 10 files across folders**

Read 10 files to verify:
- `parent:` is correct (matches what was first in `related:`)
- `related:` only has lateral links (not the parent)
- `depends-on`, `date`, `branch` are gone
- `status: active` is on pattern/tool leaves
- Type-echo tags removed
- Field ordering is consistent

- [ ] **Step 5: Fix dangling wikilink**

In files that reference `[[tux]]`, replace with `[[throttle-tux]]`:
- `sessions/2026-03-20-recap-merckgroup-repo-audit.md`
- `system/grooming-reports/2026-03-17.md` (in Knowledge vault)

- [ ] **Step 6: Commit**

```bash
cd ~/Vaults/Memory && git add -A && git commit -m "feat: redesign frontmatter schema — parent field, drop dead fields, add status"
```

Also commit the script:
```bash
cd ~/Repos/zacczakk/metronome && git add scripts/migrate-memory-frontmatter.ts && git commit -m "feat: memory vault frontmatter migration script"
```

---

### Task 3: Generate Summaries (Agent-Assisted)

**Files:**
- Create: `scripts/generate-summaries.ts`

This task generates 15-25 word summaries for all notes that need them. For the Knowledge vault, that's all ~198 notes (all have empty `summary: ""`). For Memory vault, that's ~23 files missing summaries.

- [ ] **Step 1: Create the summary generation script**

This script reads each file, extracts the body content, and outputs a list of files needing summaries with their content — to be processed by the orchestrating agent.

```typescript
// scripts/generate-summaries.ts
//
// Usage: bun run scripts/generate-summaries.ts <vault-path> [--missing-only]
//
// Lists files that need summaries. With --missing-only, only shows files
// with empty or absent summary fields.
// Outputs JSON array of {path, content_preview} for agent processing.

import { readFileSync, readdirSync, statSync } from "fs"
import { join, relative } from "path"
import matter from "gray-matter"

const vaultPath = process.argv[2]
if (!vaultPath) {
  console.error("Usage: bun run scripts/generate-summaries.ts <vault-path> [--missing-only]")
  process.exit(1)
}

const MISSING_ONLY = process.argv.includes("--missing-only")
const SKIP_DIRS = new Set([".obsidian", ".planning", ".trash"])

function walkDir(dir: string): string[] {
  const files: string[] = []
  for (const entry of readdirSync(dir)) {
    if (SKIP_DIRS.has(entry)) continue
    const fullPath = join(dir, entry)
    const stat = statSync(fullPath)
    if (stat.isDirectory()) {
      files.push(...walkDir(fullPath))
    } else if (entry.endsWith(".md")) {
      files.push(fullPath)
    }
  }
  return files
}

const files = walkDir(vaultPath)
const needsSummary: { path: string; content_preview: string }[] = []

for (const filePath of files) {
  const raw = readFileSync(filePath, "utf-8")
  const parsed = matter(raw)
  const fm = parsed.data

  if (!fm || Object.keys(fm).length === 0) continue

  const summary = fm.summary
  const isEmpty = !summary || summary === "" || summary === '""'

  if (MISSING_ONLY && !isEmpty) continue

  // First 500 chars of body for context
  const preview = parsed.content.slice(0, 500).replace(/\n/g, " ").trim()

  needsSummary.push({
    path: relative(vaultPath, filePath),
    content_preview: preview
  })
}

console.log(JSON.stringify(needsSummary, null, 2))
console.error(`\nTotal files needing summaries: ${needsSummary.length}`)
```

- [ ] **Step 2: Generate summaries for Memory vault (small batch — 23 files)**

Run: `bun run scripts/generate-summaries.ts ~/Vaults/Memory --missing-only`

For each file in the output, read the full note and write a 15-25 word summary into the `summary:` frontmatter field. Use `gray-matter` to parse and rewrite.

Files expected:
- 4 root files (MEMORY, IDENTITY, SOUL, USER)
- 18 grooming reports
- 1 session note (2026-03-23-tux-token-persistence-refactor)

For grooming reports, use template: `"Vault grooming run on YYYY-MM-DD: [key findings from body]."`

- [ ] **Step 3: Commit Memory summaries**

```bash
cd ~/Vaults/Memory && git add -A && git commit -m "feat: add missing summaries to 23 files"
```

- [ ] **Step 4: Generate summaries for Knowledge vault (large batch — ~198 files)**

Run: `bun run scripts/generate-summaries.ts ~/Vaults/Knowledge`

For each file, read the full note and write a 15-25 word summary. Process in batches of 20-30 files per subagent to manage context.

Guidelines for summary writing:
- 15-25 words, plain text, no markdown
- Capture the core purpose/finding, not just the topic
- Good: `"Evaluates Kaku terminal as WezTerm alternative. GPU-rendered, Vim motions, config via TOML. Worth trying."`
- Bad: `"A note about Kaku terminal."`
- For index notes: `summary` is optional but recommended. E.g., `"Index of 6 sub-indexes covering agent tooling, AI research, and frontend patterns."`

- [ ] **Step 5: Commit Knowledge summaries**

```bash
cd ~/Vaults/Knowledge && git add -A && git commit -m "feat: add summaries to all Knowledge vault notes"
```

- [ ] **Step 6: Commit the script**

```bash
cd ~/Repos/zacczakk/metronome && git add scripts/generate-summaries.ts && git commit -m "feat: summary generation helper script"
```

---

### Task 4: Knowledge Vault Edge Cases

**Files:**
- Modify: Various files in `~/Vaults/Knowledge/`

Handle edge cases that the automated script can't solve.

- [ ] **Step 1: Add role/org to person notes**

Read each file in `08_people/ppl/` and add `role:` and `org:` fields based on body content. These are 1-3 line stubs — role is usually the first line.

Example:
```yaml
role: "Palantir Tech Lead for Merck"
org: "[[Healthcare]]"
```

14 files in `08_people/ppl/`.

- [ ] **Step 2: Set project status fields**

Read each project note in `03_active/` and set `status:` based on body content:
- Active projects with open tasks → `status: active`
- Projects with no recent activity → `status: paused`

Also extract `repo:` URLs where present in body text.

9 files in `03_active/`.

- [ ] **Step 3: Handle empty/stub files**

- `01_inbox/Adam Schafer.md` — empty file. Add minimal frontmatter with `type: backlog`, `parent: "[[backlog]]"`, empty summary.
- `01_inbox/agile-v.md` — German meeting notes. Add frontmatter.
- Any other stub files found during processing.

- [ ] **Step 4: Handle the 2 files with existing frontmatter**

- `01_inbox/opencode.cafe...md` — web clipper auto-generated frontmatter. Merge with new schema (keep existing fields, add missing ones like `parent`, `type`).
- `06_docs/liquid-carbon-design-system.md` — already has Memory-style frontmatter. Transform to Knowledge schema.

- [ ] **Step 5: Commit edge case fixes**

```bash
cd ~/Vaults/Knowledge && git add -A && git commit -m "feat: edge case frontmatter — person roles, project status, stubs"
```

---

### Task 5: Update AGENTS.md

**Files:**
- Modify: `~/Vaults/AGENTS.md`

Update the vault conventions document to reflect the new frontmatter schemas.

- [ ] **Step 1: Replace "No frontmatter" rule with Knowledge vault schema**

Find the "Rules — Knowledge Vault" section. Replace the "No frontmatter" bullet with the full schema documentation:
- Core fields table
- Type-specific extensions
- Type-to-folder mapping
- Parent chain convention

- [ ] **Step 2: Update Memory vault schema section**

Find the "Memory Vault Frontmatter Schema" section. Update to reflect:
- New `parent:` field (replaces first entry of `related:`)
- Removed fields (`depends-on`, `date`, `branch`)
- `pattern` replacing `learning` in type enum
- `sync-report` added to type enum
- Root file types documented
- `status:` field for patterns/tools
- `projects:` formalized for sessions
- Tags convention: domain topics only, no type-echo

- [ ] **Step 3: Add 08_people/ to folder structure**

Add `08_people/` folder to the Knowledge vault structure tree and folder details table.

- [ ] **Step 4: Update tree-graph linking rules**

Update linking rules for both vaults to reference `parent:` frontmatter field instead of `See also:` body text and `related:` first-entry conventions.

- [ ] **Step 5: Commit**

```bash
cd ~/Vaults && git add AGENTS.md && git commit -m "docs: update AGENTS.md with new frontmatter schemas for both vaults"
```

---

### Task 6: Verification

- [ ] **Step 1: Verify Knowledge vault frontmatter**

Run a quick validation: every `.md` file (except Home.md) should have `type:` and `parent:` in frontmatter. Count files with empty `summary:` — should be zero after Task 3.

```bash
cd ~/Vaults/Knowledge
# Files missing type:
rg '^type:' --files-without-match --glob '*.md' --glob '!.obsidian/**' --glob '!.planning/**'
# Files missing parent: (except Home.md)
rg '^parent:' --files-without-match --glob '*.md' --glob '!.obsidian/**' --glob '!.planning/**' --glob '!Home.md'
# Files with empty summary:
rg '^summary: ""$' --glob '*.md' --glob '!.obsidian/**' --glob '!.planning/**'
```

Expected: No missing type/parent. Zero empty summaries.

- [ ] **Step 2: Verify Memory vault frontmatter**

```bash
cd ~/Vaults/Memory
# No depends-on: remaining
rg '^depends-on:' --glob '*.md' --glob '!.obsidian/**'
# No date: remaining
rg '^date:' --glob '*.md' --glob '!.obsidian/**'
# Every non-root file has parent:
rg '^parent:' --files-without-match --glob '*.md' --glob '!.obsidian/**' --glob '!MEMORY.md' --glob '!IDENTITY.md' --glob '!SOUL.md' --glob '!USER.md'
# No dangling [[tux]] references
rg '\[\[tux\]\]' --glob '*.md' --glob '!.obsidian/**'
```

Expected: No depends-on, no date, all non-root files have parent, no `[[tux]]` references.

- [ ] **Step 3: Test Dataview queries in Obsidian**

Open Obsidian and verify these Dataview queries work:
1. `TABLE summary, type FROM "" WHERE type = "backlog" SORT created DESC` — should list backlog items
2. `TABLE summary, type FROM "" WHERE parent = link("docs") SORT file.name` — should show docs children
3. `TABLE status, summary FROM "" WHERE type = "project"` — should list projects with status

- [ ] **Step 4: Final commit if any fixes needed**

If verification reveals issues, fix and commit.
