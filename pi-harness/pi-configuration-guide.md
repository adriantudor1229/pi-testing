# Pi Coding Agent Configuration Guide

## Current Setup

```
~/.pi/agent/
  auth.json         # Auth credentials (empty - using env var ZAI_API_KEY)
  settings.json     # Provider: zai, Model: glm-5.1
  models.json       # ZAI provider definition (GLM-5.1, 200k context)
  bin/fd            # Bundled file finder binary
  sessions/         # Conversation history (JSONL, per working directory)
```

---

## 1. CLAUDE.md / AGENTS.md (Agent Instructions)

**What:** Persistent instructions the agent reads on every session. This is the single biggest quality lever.

**Where:**
- Global: `~/.pi/agent/CLAUDE.md` (or `AGENTS.md`)
- Project-level: `CLAUDE.md` in your project root or any parent directory
- All discovered files are concatenated automatically

**How to add:**

```bash
cat > ~/.pi/agent/CLAUDE.md << 'EOF'
# Instructions

## About Me
- I work with Spring Boot (Java/Kotlin), Android (Jetpack Compose), and web frontends
- I prefer concise, direct responses with code examples
- I use conventional commits (feat, fix, refactor, etc.)

## Coding Style
- Always show code, don't just describe changes
- Use Kotlin over Java when possible
- Follow MVVM pattern for Android projects
- Use constructor injection with Spring Boot

## Behavior
- Read files before suggesting changes
- One task at a time, confirm before moving on
- When debugging, read the error first before suggesting fixes
EOF
```

**Per-project example** (e.g., in your chatforge repo):

```bash
cat > ~/Documents/chatforge/chatforge/CLAUDE.md << 'EOF'
# Chatforge

Multi-tenant SaaS platform for AI chatbot widgets.

## Stack
- Backend: Spring Boot, Spring Security, JPA/Hibernate
- Frontend: Android (Jetpack Compose, Retrofit, Hilt, Coroutines)
- Database: PostgreSQL

## Conventions
- Use repository pattern for data access
- DTOs for API responses, entities for persistence
- All endpoints require authentication except widget embed
EOF
```

---

## 2. System Prompt (SYSTEM.md / APPEND_SYSTEM.md)

**What:** Controls the agent's base behavior. `SYSTEM.md` replaces the default system prompt entirely; `APPEND_SYSTEM.md` extends it.

**Where:**
- Global: `~/.pi/agent/SYSTEM.md` or `~/.pi/agent/APPEND_SYSTEM.md`
- Project-level: `.pi/SYSTEM.md` or `.pi/APPEND_SYSTEM.md`

**How to add (extend, don't replace):**

```bash
cat > ~/.pi/agent/APPEND_SYSTEM.md << 'EOF'
## Additional Instructions

- Think step by step before writing code
- When I ask you to implement something, outline your plan first
- If something is ambiguous, ask before assuming
- Keep responses concise - no filler text
- When showing code changes, show the full function/method, not just the changed line
EOF
```

> Use `APPEND_SYSTEM.md` unless you know exactly what the default system prompt does. Replacing it with `SYSTEM.md` can break tool usage.

---

## 3. Settings (settings.json)

**What:** Controls provider, model, and agent behavior.

**Where:**
- Global: `~/.pi/agent/settings.json`
- Project-level: `.pi/settings.json` (overrides global)

**Current config:**

```json
{
  "lastChangelogVersion": "0.64.0",
  "defaultProvider": "zai",
  "defaultModel": "glm-5.1"
}
```

**Fields you can explore adding** (check `pi --help` or docs for exact keys):
- Default thinking level
- Default tools
- Permission settings

---

## 4. Tools

**What:** Controls which tools the agent can use. Defaults are `read`, `write`, `edit`, `bash`.

**How to enable more:**

```bash
# Per-session via CLI flag
pi --tools read,bash,edit,write,grep,find,ls

# Disable all defaults
pi --no-tools
```

**Recommended set:**

```
read, write, edit, bash, grep, find, ls
```

Adding `grep`, `find`, and `ls` lets the agent search your codebase more effectively instead of relying on bash commands.

---

## 5. Models (models.json)

**What:** Defines available providers and their models.

**Where:** `~/.pi/agent/models.json`

**Current config:** ZAI provider with GLM-5.1

**To add another provider (e.g., OpenAI):**

```json
{
  "providers": {
    "zai": {
      "baseUrl": "https://api.z.ai/api/coding/paas/v4",
      "api": "openai-completions",
      "apiKey": "ZAI_API_KEY",
      "models": [
        {
          "id": "glm-5.1",
          "name": "GLM-5.1",
          "reasoning": true,
          "input": ["text"],
          "contextWindow": 200000,
          "maxTokens": 131072,
          "cost": {
            "input": 1,
            "output": 3.2,
            "cacheRead": 0.2,
            "cacheWrite": 0
          }
        }
      ]
    },
    "openai": {
      "baseUrl": "https://api.openai.com/v1",
      "api": "openai-completions",
      "apiKey": "OPENAI_API_KEY",
      "models": [
        {
          "id": "gpt-4o",
          "name": "GPT-4o",
          "reasoning": false,
          "input": ["text", "image"],
          "contextWindow": 128000,
          "maxTokens": 16384,
          "cost": {
            "input": 2.5,
            "output": 10,
            "cacheRead": 1.25,
            "cacheWrite": 0
          }
        }
      ]
    }
  }
}
```

**Switch models at runtime:**

```bash
pi --provider openai --model gpt-4o
pi --list-models  # see all available
```

---

## 6. MCP Integration

**What:** Connects external tools (browser devtools, databases, APIs) to the agent via Model Context Protocol.

**How to set up:**

```bash
# Install the adapter
pi install npm:pi-mcp-adapter
```

**Create `~/.pi/agent/mcp.json`:**

```json
{
  "settings": {
    "toolPrefix": "mcp",
    "idleTimeout": 10
  },
  "mcpServers": {
    "chrome-devtools": {
      "command": "npx",
      "args": ["-y", "chrome-devtools-mcp@latest", "--browserUrl", "http://127.0.0.1:9222"],
      "lifecycle": "lazy"
    }
  }
}
```

**Server options:**
- `command` / `args` - how to start the server
- `url` - for HTTP-based MCP servers
- `lifecycle` - `lazy` (start on first use), `eager` (start immediately), `keep-alive`
- `idleTimeout` - seconds before shutting down idle server
- `env` - environment variables for the server
- `debug` - enable debug logging

**Can import configs from other agents:**
- `cursor`, `claude-code`, `claude-desktop`, `vscode`, `windsurf`, `codex`

---

## 7. Extensions

**What:** Plugins that add capabilities to Pi.

**How to install:**

```bash
pi install npm:package-name       # from npm
pi install npm:package@version    # specific version
pi list                           # see installed
pi update                         # upgrade all
```

**Useful extensions:**

| Extension | Purpose |
|-----------|---------|
| `pi-mcp-adapter` | MCP server integration |
| `safe-git` | Safer git operations |
| `pi-cost-dashboard` | Track token usage and costs |
| `pi-notify` | Desktop notifications when tasks finish |
| `checkpoint` | Save/restore points during long sessions |
| `pi-canvas` | Visual canvas for diagrams |

---

## 8. Skills

**What:** Markdown-based instructions that teach the agent specialized workflows.

**Where:** `~/.pi/agent/skills/`

**How to install with skill.sh:**

```bash
# Install a skill from a URL
skill.sh install pi https://raw.githubusercontent.com/user/repo/main/skill.md
```

Skills are just markdown files. You can also create them manually:

```bash
mkdir -p ~/.pi/agent/skills
cat > ~/.pi/agent/skills/spring-boot.md << 'EOF'
# Spring Boot Development

When working on Spring Boot projects:
1. Use constructor injection (not field injection)
2. Create DTOs for API responses
3. Use @Valid for request validation
4. Write integration tests with @SpringBootTest
5. Use application.yml over application.properties
EOF
```

---

## 9. Session Management

```bash
pi                        # Start new interactive session
pi -c                     # Continue last session
pi -p "prompt"            # One-off prompt (no interactive REPL)
pi --session-dir <path>   # Custom session storage location
pi --no-session           # Ephemeral run (no history saved)
```

Sessions are stored as JSONL in `~/.pi/agent/sessions/<encoded-cwd>/`.

---

## Quick Start Checklist

1. [ ] Create `~/.pi/agent/CLAUDE.md` with your preferences and stack
2. [ ] Create `~/.pi/agent/APPEND_SYSTEM.md` with behavioral tuning
3. [ ] Enable extra tools: `grep`, `find`, `ls`
4. [ ] Add project-level `CLAUDE.md` to active repos
5. [ ] Install useful extensions (`safe-git`, `pi-cost-dashboard`)
6. [ ] Set up MCP if you need browser/external tool access
7. [ ] Create custom skills for your common workflows
