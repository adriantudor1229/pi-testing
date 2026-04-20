---
name: tarot-club
description: Opens the Tarot Club team in tmux panes. The Fool leads on the left, with The Justice, The Sun, and The Hanged Man on the right. Say "praise" to The Fool to start the workflow.
---

# Tarot Club

Opens the full team in tmux. Each member runs in their own pane with their own pi session.

## Layout

```
┌──────────────────┬──────────────────┐
│                  │   The Justice    │
│                  │   Planner         │
│    The Fool      ├──────────────────┤
│    Leader        │   The Sun        │
│                  │   Architect       │
│                  ├──────────────────┤
│                  │  The Hanged Man  │
│                  │  Coder            │
└──────────────────┴──────────────────┘
```

## Usage

Run the start script:
```bash
./scripts/start.sh [project-path]
```

This opens a tmux session with 4 panes, each running pi with the respective skill loaded.

## Workflow

1. Talk to **The Fool** (left pane) — describe your project
2. Say **"praise"** → The Fool starts the team
3. Members communicate via shared files in the project's `tarot-plan/` folder
4. A `status.md` file tracks who is active

## Communication

Members communicate through shared files:

| File | Written by | Read by |
|------|-----------|---------|
| `tarot-plan/prompt.md` | The Fool | The Justice |
| `tarot-plan/architecture.md` | The Justice | The Sun, The Hanged Man |
| `tarot-plan/technologies.md` | The Justice | The Hanged Man |
| `tarot-plan/status.md` | All | All — tracks who acts next |
| `tarot-plan/review.md` | The Justice | The Sun, The Hanged Man |
| `tarot-execution.md` | The Hanged Man | The Fool, The Justice |

### Status File Format (`tarot-plan/status.md`)

```markdown
# Status

## Current Phase
planning | skeleton | design | coding | done

## Active Member
the-fool | the-justice | the-sun | the-hanged-man

## Message
Description of what was done and what's expected next.
```

## Rules

- **No emoji** — no emoji in any output, communication, status files, or pane titles. Plain text only.

## Team

| Member | Role | Pane |
|--------|------|------|
| The Fool | Leader | Left |
| The Justice | Planner/Reviewer | Top-right |
| The Sun | Architect | Middle-right |
| The Hanged Man | Coder | Bottom-right |
