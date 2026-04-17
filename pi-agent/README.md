# Tarot Club — AI Agent Team

A multi-agent project management system built for [pi](https://github.com/badlogic/pi-mono). Four AI agents work together in tmux panes, each with a specialized role, coordinated through shared files.

## The Team

| Member | Role | Description |
|--------|------|-------------|
| 🃏 The Fool | Leader | Talks to you, coordinates the team, approves phases |
| ⚖️ The Justice | Planner & Reviewer | Breaks down prompts into plan files, reviews all work |
| ☀️ The Sun | Architect | Creates project skeleton (folders, empty files, configs) |
| 🔵 The Hanged Man | Coder | Builds in 3 phases: FE Design → Execution Plan → Code by functionality |

## How It Works

```
You → The Fool → "amen" → The Justice (plan)
                                ↓
                          The Sun (skeleton) ↔ The Justice (review, max 3 attempts)
                                ↓
                          The Hanged Man (code) ↔ The Justice (review) → The Fool → You
```

### Communication

All members communicate through shared files in the project's `tarot-plan/` folder:

| File | Written by | Read by |
|------|-----------|---------|
| `tarot-plan/prompt.md` | The Fool | The Justice |
| `tarot-plan/architecture.md` | The Justice | The Sun, The Hanged Man |
| `tarot-plan/technologies.md` | The Justice | The Hanged Man |
| `tarot-plan/status.md` | All | All — tracks who acts next |
| `tarot-plan/review.md` | The Justice | The Sun, The Hanged Man |
| `tarot-execution.md` | The Hanged Man | The Fool, The Justice |

## Setup

### 1. Prerequisites

- [pi](https://github.com/badlogic/pi-mono) installed
- [tmux](https://github.com/tmux/tmux) installed
- An API key configured for your pi provider

### 2. Add the skill to pi

Symlink the tarot-club folder into pi's skills directory:

```bash
ln -s /path/to/pi-agent/tarot-club ~/.pi/agent/skills/tarot-club
```

### 3. Configure API key (if needed)

Edit `~/.pi/agent/auth.json`:

```json
{
  "zai": { "type": "api_key", "key": "your-api-key" }
}
```

Replace `zai` with your provider and set your key.

## Usage

### Start the team

```bash
~/path/to/pi-agent/tarot-club/scripts/start.sh /path/to/your/project
```

Then attach:

```bash
tmux attach -t tarot-club
```

### Layout

```
┌──────────────────┬──────────────────┐
│                  │   The Justice    │
│                  │   ⚖️ Planner     │
│    The Fool      ├──────────────────┤
│    🃏 Leader     │   The Sun        │
│                  │   ☀️ Architect   │
│                  ├──────────────────┤
│                  │  The Hanged Man  │
│                  │  🔵 Coder        │
└──────────────────┴──────────────────┘
```

### Workflow

1. **Talk to The Fool** (left pane) — describe your project
2. **Say "amen"** — The Fool writes the prompt and activates The Justice
3. **The Justice plans** — creates `architecture.md` and `technologies.md`
4. **Nudge The Sun** — switch pane, tell him to check `tarot-plan/status.md`
5. **The Sun builds the skeleton** — The Justice reviews (max 3 attempts)
6. **The Fool reports to you** — asks if you approve
7. **The Hanged Man codes** — phase by phase, reviewed one by one

> **Note:** Members don't auto-watch files. When it's a member's turn, switch to their pane (`Ctrl+B` then arrow keys) and tell them to check `tarot-plan/status.md`.

### Tmux shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+B` then `D` | Detach (keep running) |
| `Ctrl+B` then `Arrow` | Switch pane |
| `Ctrl+B` then `Z` | Zoom pane (fullscreen toggle) |
| `Ctrl+B` then `X` | Close pane |
| `tmux attach -t tarot-club` | Reattach from terminal |
| `tmux kill-session -t tarot-club` | Kill the session |

## Project Structure

```
tarot-club/
├── SKILL.md              # Master skill — orchestrates the team
├── scripts/
│   └── start.sh          # Tmux setup script
├── the-fool/
│   └── SKILL.md          # Leader — talks to you, coordinates
├── the-justice/
│   └── SKILL.md          # Planner & Reviewer
├── the-sun/
│   └── SKILL.md          # Architect — creates skeleton
└── the-hanged-man/
    └── SKILL.md          # Coder — 3 phases, step by step
```

## Future Plans

- Auto-watcher script to eliminate manual nudging
- More members (The Fool's team may grow)
- More built-in rules for The Sun
- Additional plan files from The Justice
