# Technologies — Tarot Club Dashboard

## Core Framework

### React 18 + TypeScript + Vite
- **React 18** — Industry standard for SPAs. Concurrent features, hooks, strong ecosystem.
- **TypeScript** — Type safety reduces bugs, improves DX, and makes the codebase self-documenting.
- **Vite** — Blazing fast dev server and build tool. HMR is instant. Zero-config TypeScript.

### React Router v6
- Declarative routing with nested layouts
- `loader`/`action` patterns for data fetching (though we'll use stores primarily)
- Clean route protection via wrapper components

---

## Styling & Theming

### Tailwind CSS v3
- Utility-first — rapid prototyping, no context-switching to CSS files
- CSS variable integration for theme tokens (`dark:` variant built-in)
- Responsive design via breakpoint prefixes (`md:`, `lg:`)
- `tailwind.config.ts` extended with custom theme colors

### CSS Custom Properties (Variables)
- Define two theme palettes in `index.css` under `[data-theme='light']` and `[data-theme='dark']`
- Tailwind references these variables via `theme()`
- Enables smooth CSS transitions on theme change

---

## State Management

### Zustand
- Minimal boilerplate — no providers, no reducers, just hooks
- Perfect for this scope: 4 small stores (tasks, auth, feed, theme)
- `persist` middleware for localStorage sync on auth and theme
- Computed values via selectors keep components lean

---

## Drag & Drop

### @dnd-kit/core + @dnd-kit/sortable
- Modern, accessible, actively maintained
- Declarative API fits React's mental model
- Built-in keyboard support for accessibility
- `@dnd-kit/sortable` handles column reordering if needed

---

## Charts

### Recharts
- Built on React, so charts are composable components
- Responsive containers adapt to layout changes (theme toggle, sidebar collapse)
- Supports bar, line, pie, doughnut — all required types
- Easy to inject theme-aware colors via props

---

## Icons

### Lucide React
- Clean, consistent icon set
- Tree-shakeable — only import what's used
- Stroke-based icons look great in both light and dark themes

---

## Utilities

### date-fns
- Lightweight, modular date formatting
- Used for timestamps in feed, date range filters, chart labels
- Import only what's needed (tree-shaking)

---

## Authentication (Mock)

### Client-side mock auth
- No real backend — simulated with localStorage
- Pre-seeded users with roles (admin, manager, developer)
- Login checks against mock user list
- JWT-like token stored in localStorage (dummy string)
- `ProtectedRoute` component checks auth state
- `RoleGate` component checks user role

---

## Development Tools

### ESLint + Prettier
- Consistent code style across all Tarot Club members' contributions

---

## Summary Table

| Concern | Technology | Why |
|---|---|---|
| Framework | React 18 + TypeScript | Standard, typed, fast |
| Build | Vite | Instant HMR, zero-config TS |
| Routing | React Router v6 | Declarative, nested layouts |
| Styling | Tailwind CSS | Rapid utility-first development |
| Theming | CSS Variables + Tailwind `dark:` | Smooth transitions, full coverage |
| State | Zustand | Minimal, persist middleware |
| Drag & Drop | @dnd-kit | Modern, accessible, React-native |
| Charts | Recharts | React components, themeable |
| Icons | Lucide React | Clean, tree-shakeable |
| Dates | date-fns | Modular, lightweight |
| Auth | Mock (localStorage) | No backend needed |

---

## Skill Recommendations

Based on the project scope, the following skills are recommended:

### For The Sun (Architect) — Building the Skeleton
- **Standard React + Vite scaffolding** — `npm create vite@latest` with React + TypeScript template
- Set up file structure as defined in `architecture.md`
- Create all component files as stubs with proper TypeScript interfaces
- Wire up routing, providers, and layout shell
- Install all dependencies listed above

### For The Hanged Man (Coder) — Implementing Features
- Implement features in this order:
  1. **UI primitives** (`components/ui/`) — Button, Input, Modal, Badge, Card, Avatar
  2. **Theme system** — ThemeProvider, ThemeToggle, CSS variables
  3. **Auth** — Auth store, login/signup pages, ProtectedRoute, RoleGate
  4. **Layout** — AppShell, Sidebar, Header (with theme toggle and user avatar)
  5. **Kanban** — Board, Columns, TaskCards, drag-and-drop, TaskModal
  6. **Activity Feed** — FeedStore, FeedItems, auto-scroll, simulated events
  7. **Analytics** — Charts with Recharts, date filtering, theme-aware colors
  8. **Tarot Club Panel** — ProjectWidget, TeamGrid, MemberCards, Reflections, TokenTracker
  9. **Polish** — Transitions, responsive tweaks, edge cases
