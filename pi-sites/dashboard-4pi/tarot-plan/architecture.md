# Architecture — Tarot Club Dashboard

## Overview

A self-aware project management dashboard built by the Tarot Club team. The app serves as both a functional project management tool and a meta-display of the team and process that created it. Single-page application with client-side routing, mock data, and simulated real-time features.

---

## Application Structure

### Top-Level Layout
```
┌─────────────────────────────────────────────────┐
│  App Shell                                       │
│  ┌──────────┬──────────────────────────────────┐ │
│  │          │                                  │ │
│  │  Sidebar │  Main Content Area               │ │
│  │  (nav)   │  (route-dependent)               │ │
│  │          │                                  │ │
│  └──────────┴──────────────────────────────────┘ │
│  Theme Toggle (top-right)   User Avatar (top-right)│
└─────────────────────────────────────────────────┘
```

### Route Map

| Route | Page | Auth Required | Roles |
|---|---|---|---|
| `/login` | Login/Signup | No | All |
| `/` | Dashboard Overview | Yes | All |
| `/kanban` | Kanban Board | Yes | All |
| `/feed` | Live Activity Feed | Yes | All |
| `/analytics` | Charts & Analytics | Yes | All |
| `/tarot-club` | Tarot Club Panel | Yes | Admin, Manager |
| `/settings` | User Settings | Yes | All |

---

## Component Architecture

### 1. Kanban Board (`/kanban`)

**Components:**
- `KanbanBoard` — main container, manages drag-and-drop context
- `KanbanColumn` — droppable column (To Do, In Progress, Review, Done)
- `TaskCard` — draggable card with title, description, priority badge, assignee avatar
- `TaskModal` — create/edit task dialog (title, description, priority select, assignee select)
- `DeleteConfirmDialog` — confirmation before task deletion

**State:**
- Tasks stored in Zustand store with columns as groupings
- Task shape: `{ id, title, description, priority: 'low'|'medium'|'high'|'critical', assignee, column, createdAt, updatedAt }`
- Drag-and-drop updates task's column and triggers feed event

### 2. Live Activity Feed (`/feed`)

**Components:**
- `ActivityFeed` — scrollable container with auto-scroll
- `FeedItem` — individual activity entry with icon, message, timestamp
- `FeedFilter` — filter by team member or action type

**State:**
- Feed items stored in Zustand, appended on kanban actions and simulated events
- Feed shape: `{ id, member, action, message, timestamp }`
- Simulated real-time: setInterval adds random team actions every few seconds
- Auto-scroll to bottom on new entry; animated slide-in for new items

### 3. Charts & Analytics (`/analytics`)

**Components:**
- `AnalyticsDashboard` — grid layout of charts
- `DateRangeFilter` — date picker for filtering chart data
- `CompletionChart` — bar chart of tasks completed per day/week
- `ProductivityChart` — line chart of team productivity over time
- `TaskDistributionChart` — pie/doughnut chart of tasks by status
- `PriorityBreakdownChart` — bar chart of tasks by priority level

**State:**
- Charts read from task store, filtered by date range
- Date range stored in local Zustand slice
- Charts are theme-aware (colors adapt to dark/light)

### 4. Authentication & Role-Based Views

**Components:**
- `LoginPage` — login form with email/password
- `SignupPage` — registration form
- `PasswordResetPage` — password reset flow
- `ProtectedRoute` — wrapper that checks auth state
- `RoleGate` — conditionally renders children based on user role
- `UserAvatar` — displays user info in header

**State:**
- Auth store: `{ user: { id, name, email, role, avatar }, isAuthenticated, token }`
- Mock users pre-seeded:
  - Admin (The Fool) — sees everything
  - Manager (The Justice) — sees dashboard, kanban, analytics, tarot-club
  - Developer (The Sun, The Hanged Man) — sees dashboard, kanban, feed
- Auth state persisted to localStorage
- Protected routes redirect to `/login` if not authenticated
- `RoleGate` component wraps widgets that should be role-specific

### 5. Dark/Light Theme System

**Components:**
- `ThemeProvider` — React context providing theme state
- `ThemeToggle` — switch component in app header

**State:**
- Theme preference in localStorage key `dashboard-theme`
- CSS custom properties (variables) defined for both themes
- Toggle smoothly transitions via CSS `transition` on `background-color`, `color`, `border-color`
- Charts receive theme-aware color palettes via context

### 6. Tarot Club Panel (`/tarot-club`)

**Components:**
- `TarotClubPanel` — main container
- `ProjectWidget` — project name, description, current status badge
- `TeamGrid` — grid of member cards
- `MemberCard` — individual member: emoji icon, name, role, phase, token usage bar
- `ReflectionsPanel` — scrollable list of member reflections
- `ReflectionCard` — single reflection with member name, text, timestamp
- `TokenUsageTracker` — summary chart of token usage per member

**State:**
- Team members seeded with tarot data:
  - 🃏 The Fool — Leader — Planning Phase
  - ⚖️ The Justice — Planner — Planning Phase
  - ☀️ The Sun — Architect — Build Phase
  - 🔵 The Hanged Man — Coder — Build Phase
- Token usage: mock numbers, displayed as progress bars
- Reflections: hardcoded entries, each with `interesting`, `challenging`, `surprising` fields

---

## Data Flow

```
User Action (drag, create, filter)
       │
       ▼
  Zustand Store ──────► React Components (re-render)
       │
       ├─► Activity Feed Store (append event)
       ├─► Analytics (recompute chart data)
       └─► localStorage (persist)
```

## Mock Data Strategy

- `src/data/mockTasks.ts` — 12-16 pre-seeded tasks across columns
- `src/data/mockUsers.ts` — 4-5 mock users with different roles
- `src/data/mockFeed.ts` — 10 initial feed items
- `src/data/mockTeam.ts` — 4 Tarot Club members
- `src/data/mockReflections.ts` — 4 member reflections
- No real backend — all data lives in Zustand + localStorage

## File Structure

```
src/
├── main.tsx                    # Entry point
├── App.tsx                     # Routes + providers
├── index.css                   # Global styles + CSS variables
├── components/
│   ├── layout/
│   │   ├── AppShell.tsx        # Top-level layout wrapper
│   │   ├── Sidebar.tsx         # Navigation sidebar
│   │   └── Header.tsx          # Top bar with theme toggle + user
│   ├── kanban/
│   │   ├── KanbanBoard.tsx
│   │   ├── KanbanColumn.tsx
│   │   ├── TaskCard.tsx
│   │   └── TaskModal.tsx
│   ├── feed/
│   │   ├── ActivityFeed.tsx
│   │   ├── FeedItem.tsx
│   │   └── FeedFilter.tsx
│   ├── analytics/
│   │   ├── AnalyticsDashboard.tsx
│   │   ├── DateRangeFilter.tsx
│   │   ├── CompletionChart.tsx
│   │   ├── ProductivityChart.tsx
│   │   ├── TaskDistributionChart.tsx
│   │   └── PriorityBreakdownChart.tsx
│   ├── auth/
│   │   ├── LoginPage.tsx
│   │   ├── SignupPage.tsx
│   │   ├── PasswordResetPage.tsx
│   │   ├── ProtectedRoute.tsx
│   │   └── RoleGate.tsx
│   ├── tarot-club/
│   │   ├── TarotClubPanel.tsx
│   │   ├── ProjectWidget.tsx
│   │   ├── TeamGrid.tsx
│   │   ├── MemberCard.tsx
│   │   ├── ReflectionsPanel.tsx
│   │   ├── ReflectionCard.tsx
│   │   └── TokenUsageTracker.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Input.tsx
│       ├── Modal.tsx
│       ├── Badge.tsx
│       ├── Card.tsx
│       └── Avatar.tsx
├── stores/
│   ├── taskStore.ts
│   ├── authStore.ts
│   ├── feedStore.ts
│   └── themeStore.ts
├── hooks/
│   ├── useTheme.ts
│   ├── useAuth.ts
│   └── useFeed.ts
├── providers/
│   └── ThemeProvider.tsx
├── data/
│   ├── mockTasks.ts
│   ├── mockUsers.ts
│   ├── mockFeed.ts
│   ├── mockTeam.ts
│   └── mockReflections.ts
├── types/
│   └── index.ts                # All TypeScript interfaces
└── utils/
    ├── dateUtils.ts
    └── feedSimulator.ts
```
