# The Fool's Catalogue

The Fool's master reference for skill delegation. Contains only names, purposes, and assignments. No rule content.

---

## How to Use

1. The Fool hears the project description from the user
2. The Fool selects relevant skills from this catalogue
3. The Fool tells The Justice which skills to assign in the plan
4. The Justice records assignments in `tarot-plan/technologies.md`
5. Members read only their assigned skill files when activated

---

## Skill Source

All skills are located at:
```
/home/autumn/Documents/pi-playground/pi-agent/tarot-club/skills/
```

---

## Skills by Role

### The Justice (Review)

| Skill | File Count | When to Assign |
|--------|-----------|----------------|
| react-best-practices | 70 rules | Reviewing React/Next.js web code for performance |
| composition-patterns | 8 rules | Reviewing component architecture decisions |

### The Sun (Architecture)

| Skill | File Count | When to Assign |
|--------|-----------|----------------|
| composition-patterns | 8 rules | Planning component structure before coding |

### The Hanged Man (Coding)

| Skill | File Count | When to Assign |
|--------|-----------|----------------|
| react-view-transitions | 4 references | Implementing animations and page transitions |

---

## Skill Details

### react-best-practices

- **Location:** `/home/autumn/Documents/pi-playground/pi-agent/tarot-club/skills/react-best-practices/`
- **Type:** Review
- **Assigned to:** The Justice
- **Coverage:** React and Next.js performance
- **Categories:** Waterfalls, Bundle Size, Server-Side, Client-Side, Re-renders, Rendering, JS Perf, Advanced
- **Format:** 70 rule files in `rules/`, each with wrong/right code examples
- **Compiled:** `AGENTS.md` has all rules in one file
- **How to use for review:** Read `rules/_sections.md` for category index, then load relevant rule files one at a time based on what code is being reviewed

### composition-patterns

- **Location:** `/home/autumn/Documents/pi-playground/pi-agent/tarot-club/skills/composition-patterns/`
- **Type:** Architecture + Review
- **Assigned to:** The Sun (architecture), The Justice (review)
- **Coverage:** React component API design
- **Categories:** Component Architecture, State Management, Implementation Patterns, React 19 APIs
- **Format:** 8 rule files in `rules/`, each with wrong/right code examples
- **Compiled:** `AGENTS.md` has all rules in one file

### react-view-transitions

- **Location:** `/home/autumn/Documents/pi-playground/pi-agent/tarot-club/skills/react-view-transitions/`
- **Type:** Coding
- **Assigned to:** The Hanged Man
- **Coverage:** React View Transition API
- **Topics:** Shared elements, enter/exit, Suspense reveals, Next.js integration, CSS recipes
- **Format:** 4 reference files in `references/` (implementation, css-recipes, patterns, nextjs)
- **Compiled:** `AGENTS.md` has all references in one file

---

## Delegation Guide

### If the project is a React/Next.js web app:

```
The Sun (architecture):
  - composition-patterns

The Hanged Man (coding):
  - react-view-transitions

The Justice (review):
  - react-best-practices
  - composition-patterns
```

### If the project needs animations:

Add to the Hanged Man's assignments:
```
  - react-view-transitions
```

---

## Gaps

Skills that do not exist yet but would be useful for React/Next.js projects:

| Missing Skill | Type | Would Assign To |
|---------------|------|-----------------|
| Project structure | Architecture | The Sun |
| Server vs Client Components | Architecture | The Sun |
| Data fetching patterns | Architecture + Coding | The Sun, The Hanged Man |
| Authentication | Architecture + Coding | The Sun, The Hanged Man |
| Error handling | Coding | The Hanged Man |
| Testing | Review | The Justice |
| TypeScript patterns | Coding + Review | The Hanged Man, The Justice |
| Styling (Tailwind, CSS Modules) | Coding | The Hanged Man |
| API design (route handlers, server actions) | Architecture + Coding | The Sun, The Hanged Man |
| SEO and metadata | Coding | The Hanged Man |
