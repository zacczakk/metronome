---
name: foundry-react-app-dev
description: Use when developing a React app hosted on Palantir Foundry (UPTIMIZE stack) that calls Foundry APIs, proxied LLMs, or Integration Hub MCP servers from the browser. Covers CORS issues, OAuth auth, AI SDK integration, Vite env handling, and common production pitfalls.
---

# Foundry React App Development

## Overview

React apps on the UPTIMIZE Foundry stack face unique challenges: cross-origin API calls to Foundry proxies, OAuth token flows, Integration Hub MCP integration, and Vite build-time env injection. This skill captures patterns that prevent production failures.

## When to Use

- Building a React/Vite app hosted on Foundry Website Hosting
- Calling Foundry LLM proxy (`/api/v2/llm/proxy/anthropic/v1/messages`) from the browser
- Integrating with Integration Hub (IHub) MCP servers
- Using `@ai-sdk/anthropic`, `@ai-sdk/mcp`, or `@osdk/oauth` in browser code
- Debugging CORS preflight failures, 413/429 errors, or missing auth tokens in production
- Using `useChat` or `ToolLoopAgent` from the Vercel AI SDK

## Architecture

```
Browser App (https://<app>.palantir.mcloud.merckgroup.com)
  |
  |-- Foundry OAuth (OSDK) --> user token (Bearer)
  |-- Foundry LLM Proxy ----> /api/v2/llm/proxy/anthropic/v1/messages
  |-- IHub MCP Proxy -------> https://api.nlp.p.uptimize.merckgroup.com/ihub/servers/<id>/mcp
```

In development, Vite proxies cross-origin calls. In production, calls go direct (same-origin for Foundry API, cross-origin for IHub).

## CORS: Foundry LLM Proxy

The Foundry LLM proxy at `palantir.mcloud.merckgroup.com` does NOT whitelist Anthropic-specific headers in its `Access-Control-Allow-Headers` response. The `@ai-sdk/anthropic` SDK automatically adds these non-standard headers, which cause CORS preflight failures in production:

| Header | Why SDK sends it | Impact |
|--------|-----------------|--------|
| `anthropic-beta` | Beta features (structured outputs, tool use) | CORS rejection |
| `anthropic-version` | API version pinning | CORS rejection |
| `x-api-key` | Anthropic auth (redundant with Bearer) | CORS rejection |

**Fix:** Strip all three in a custom `fetch` wrapper:

```typescript
const BLOCKED_HEADERS = new Set([
  "anthropic-beta",
  "anthropic-version",
  "x-api-key",
]);

const provider = createAnthropic({
  baseURL,
  authToken: userToken,
  fetch: (input, init) => {
    if (init?.headers) {
      if (init.headers instanceof Headers) {
        for (const h of BLOCKED_HEADERS) init.headers.delete(h);
      } else if (Array.isArray(init.headers)) {
        init.headers = init.headers.filter(
          ([key]) => !BLOCKED_HEADERS.has(key.toLowerCase()),
        );
      } else {
        const cleaned: Record<string, string> = {};
        for (const [k, v] of Object.entries(init.headers as Record<string, string>)) {
          if (!BLOCKED_HEADERS.has(k.toLowerCase())) cleaned[k] = v;
        }
        init.headers = cleaned;
      }
    }
    return fetch(input, init);
  },
});
```

This is safe -- the Foundry proxy doesn't use these headers. Auth is via the standard `Authorization: Bearer` header from the OSDK OAuth token.

## Cloning Foundry (Stemma) Repos

Foundry hosts code repos on Stemma, accessed via HTTPS git. Auth uses Foundry credentials in the URL.

**Critical: use a Personal Access Token (PAT), not an OAuth token.**

Stemma git auth distinguishes token *type*, not just permissions:

| Token source | Works for git? | Notes |
|--------------|----------------|-------|
| Foundry UI > Settings > Tokens (PAT) | Yes | Long-lived, server-tracked |
| `tux token --foundry` (OAuth) | No | Rejected by Stemma git regardless of scopes |
| OAuth with `api:repositories-read`, `api:filesystem-read`, etc. | No | Scope additions don't help |

The JWT payload looks identical between PAT and OAuth tokens (no visible `exp` or `scp` claims), but Stemma enforces token type server-side via `jti` lookup.

**Workflow:**

1. Get PAT from Foundry UI: Settings > Tokens > Create token. Store as `$FOUNDRY_TOKEN` in shell.
2. Find the repo RID and name via `palantir-mcp` or the Foundry UI.
3. Clone with the URL pattern below.

**URL pattern:**

```
https://<user-double-encoded>:<token>@<host>/stemma/git/<repo-rid>/<repo-name-with-dashes>
```

- **Username:** double URL-encoded. `<user>@one.merckgroup.com` → `%3Cuser%3E%40one.merckgroup.com` → `%253Cuser%253E%2540one.merckgroup.com`
- **Repo name:** spaces become `-` (e.g. "Liquidity UI" → `liquidity-ui`), not `%20`
- **Host:** typically `palantir.mcloud.merckgroup.com`

**One-liner:**

```bash
USER_ENC=$(printf '%s' "$USER@one.merckgroup.com" | python3 -c "import urllib.parse,sys; print(urllib.parse.quote(urllib.parse.quote(sys.stdin.read(), safe=''), safe=''))")
git clone "https://${USER_ENC}:${FOUNDRY_TOKEN}@palantir.mcloud.merckgroup.com/stemma/git/<repo-rid>/<repo-name>" <local-dir>
```

**Auth split:** PAT for git ops, OAuth (`tux token`) for API/MCP/artifacts calls. They serve different backends.

## Foundry Auth (OSDK)

```typescript
import { createPublicOauthClient } from "@osdk/oauth";

const auth = createPublicOauthClient(clientId, foundryUrl, redirectUrl, {
  scopes: [
    "api:use-ontologies-read",
    "api:use-language-models-execute",
    // add scopes as needed
  ],
});

// Get token: auth.getTokenOrUndefined() (sync) or await auth() (async)
// Refresh periodically (tokens expire in ~5 min)
```

The `clientId`, `foundryUrl`, `redirectUrl` come from `<meta>` tags in `index.html`, which Vite injects from `.env.*` files at build time.

## Environment Files

| File | Mode | Key difference |
|------|------|----------------|
| `.env.development` | `npm run dev` | `VITE_FOUNDRY_REDIRECT_URL=http://localhost:8080/auth/callback` |
| `.env.production` | `npm run build` | `VITE_FOUNDRY_REDIRECT_URL=https://<app>.palantir.mcloud.merckgroup.com/auth/callback` |
| `.env.code-workspaces` | Foundry IDE | Uses `${DEV_SERVER_DOMAIN}` template vars |

**Critical:** `.env.production` is committed to git and baked into the production build. Placeholder values like `your-token-here` will ship to production. Add CI validation:

```typescript
// env.test.ts -- runs in CI when VERIFY_ENV_PRODUCTION=true
const SENSITIVE_ENV_VARS = ["VITE_IHUB_MCP_URL", "VITE_IHUB_MCP_TOKEN"];

for (const envVar of SENSITIVE_ENV_VARS) {
  test.skipIf(process.env.VERIFY_ENV_PRODUCTION !== "true")(
    `production env should have real value for ${envVar}`,
    () => {
      const env = loadEnv("production", process.cwd());
      expect(env[envVar]).toBeDefined();
      expect(env[envVar]).not.toMatch(/your-token-here|placeholder|CHANGE_ME/i);
    },
  );
}
```

## Vite Proxy (Development)

Cross-origin calls fail in the browser during local dev. Configure Vite to proxy them:

```typescript
// vite.config.ts
server: {
  proxy: {
    "/foundry-api": {
      target: "https://palantir.mcloud.merckgroup.com",
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/foundry-api/, ""),
    },
    "/ihub-mcp": {
      target: "https://api.nlp.p.uptimize.merckgroup.com/ihub/servers/<id>/mcp",
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/ihub-mcp/, ""),
    },
  },
}
```

Then in code, switch URL based on `import.meta.env.DEV`:

```typescript
const baseURL = import.meta.env.DEV
  ? `${window.location.origin}/foundry-api/api/v2/llm/proxy/anthropic/v1`
  : `${foundryUrl}/api/v2/llm/proxy/anthropic/v1`;
```

## AI SDK: Context Window & Payload Management

When using `@ai-sdk/anthropic` with tool-calling (MCP tools), tool results often contain large base64 blobs (images, charts, files). These blobs are included in the conversation history on every subsequent LLM call, causing:

- **413 Content Too Large** -- payload exceeds Foundry proxy limits
- **429 Too Many Requests** -- rate limiter triggered by large payloads
- **Context window exhaustion** -- base64 blobs consume massive token counts

**Fix:** Strip binary content in `prepareCall` before it reaches the LLM:

```typescript
function looksLikeBase64(s: string): boolean {
  if (s.length < 8192) return false;
  return /^[A-Za-z0-9+/=\s]+$/.test(s.slice(0, 200));
}

function stripBinaryDeep(obj: unknown, depth = 0): unknown {
  if (depth > 15) return obj;
  if (typeof obj === "string") {
    if (looksLikeBase64(obj))
      return `[binary data removed, ~${Math.round(obj.length / 1024)}KB]`;
    return obj;
  }
  if (Array.isArray(obj))
    return obj.map((item) => stripBinaryDeep(item, depth + 1));
  if (obj && typeof obj === "object") {
    const record = obj as Record<string, unknown>;
    const result: Record<string, unknown> = {};
    let changed = false;
    for (const key of Object.keys(record)) {
      const stripped = stripBinaryDeep(record[key], depth + 1);
      result[key] = stripped;
      if (stripped !== record[key]) changed = true;
    }
    return changed ? result : obj;
  }
  return obj;
}

// In ToolLoopAgent config:
prepareCall: async (options) => {
  if (options.messages) {
    options.messages = stripBinaryDeep(options.messages);
  }
  return options;
},
```

**Why brute-force, not format-specific:** The AI SDK's internal message format is not documented and differs from both the MCP spec and what the UI receives. Format-specific checks (`type === "image-data"`, `role === "tool"`) miss edge cases. Recursively replacing any large base64 string works regardless of nesting.

## AI SDK: Tool Part Types

The AI SDK has two tool part formats in `message.parts`:

| Format | `part.type` | Has `toolName` prop? | When used |
|--------|-------------|---------------------|-----------|
| Static | `tool-<name>` (e.g. `tool-generate_chart`) | No | Tools registered at init |
| Dynamic | `dynamic-tool` | Yes | Tools added at runtime (MCP) |

**MCP tools are dynamic** (registered via `mcpClient.tools()`). They have `type: "dynamic-tool"` with an explicit `toolName` property.

Extract the tool name reliably:

```typescript
function getToolNameFromPart(part: Record<string, unknown>): string {
  if (part.toolName && typeof part.toolName === "string") return part.toolName;
  const partType = part.type as string;
  if (partType.startsWith("tool-")) return partType.slice(5);
  return "";
}
```

**Tool result states** (check for completion):

| State | Meaning |
|-------|---------|
| `input-available` | Tool call received, not yet executed |
| `approval-requested` | Waiting for user approval |
| `approval-responded` | User responded |
| `output-available` | Tool finished successfully |
| `output-error` | Tool execution failed |
| `output-denied` | Tool execution denied |

There is no `"result"` or `"complete"` state. Check `state === "output-available"` for success.

## AI SDK: MCP Tool Output Format

The `@ai-sdk/mcp` package converts MCP `content[]` to AI SDK format via `mcpToModelOutput`:

```
MCP: { type: "text", text: "..." }    --> { type: "text", text: "..." }
MCP: { type: "image", data: "b64..." } --> { type: "image-data", data: "b64...", mediaType: "..." }
MCP: anything else                     --> { type: "text", text: JSON.stringify(part) }
```

The output wrapper is `{ type: "content", value: [...converted parts...] }` or `{ type: "json", value: rawResult }` if there's no `content[]`.

**EmbeddedResource blobs** (type `"resource"`) get JSON-stringified into text parts. They don't survive as structured objects.

## Integration Hub (IHub) MCP

IHub proxies MCP tool calls but may not support all MCP methods:

| Feature | Supported? |
|---------|-----------|
| `tools/call` | Yes |
| `tools/list` | Yes |
| `resources/read` | Unlikely -- IHub is a tool-forwarding proxy |
| Inline blobs in tool results | Yes -- passed through |

**Auth:** IHub uses its own API tokens (JWT), separate from Foundry OAuth. Store in `VITE_IHUB_MCP_TOKEN`.

**Key pattern:** Include inline blobs in MCP tool responses (via `ImageContent` / `EmbeddedResource`) rather than relying on `resources/read`. The frontend extracts blobs from tool results directly.

## Common Mistakes

| Mistake | Consequence | Fix |
|---------|------------|-----|
| Not stripping Anthropic headers | CORS preflight failure in prod | Custom `fetch` wrapper (see above) |
| Placeholder tokens in `.env.production` | Auth failures in prod only | CI env validation test |
| Checking `state === "result"` for tool completion | Tool results never detected | Use `state === "output-available"` |
| Assuming `part.type.startsWith("tool-")` catches all tools | Misses `dynamic-tool` parts (MCP) | Check both `tool-*` and `dynamic-tool` |
| Sending tool result blobs to LLM | 413/429/context overflow | `stripBinaryDeep` in `prepareCall` |
| Format-specific blob stripping | Misses AI SDK's internal format | Brute-force base64 detection |
| Using `toolPart.toolName` for static tools | Always empty (property doesn't exist) | Extract from `part.type.slice(5)` |
| Including large files (PPTX) as inline blobs | Payload too large for proxy | Metadata-only for large files, fetch on-demand |
| Not proxying in dev | CORS errors on localhost | Vite proxy config |
| `.env.code-workspaces` missing custom vars | Works locally, breaks in Foundry IDE | Add all custom `VITE_*` vars to all env files |

## Quick Reference

```bash
# Local dev
npm run dev                       # Vite dev server, proxies API calls

# Pre-flight before deploy
npm run lint && npm run test && npm run build

# Deploy (see foundry-osdk-deploy skill for full procedure)
git tag X.Y.Z && git push origin master && git push origin tag X.Y.Z
# Then promote in Developer Console > Website Hosting
```
