# Project Prompt

## Project Name
Tarot Club Dashboard

## Description
Build a project management dashboard that is self-aware about the team that built it. The dashboard should be a fully functional web application with modern UI/UX.

## Features

### 1. Kanban Board
- Drag-and-drop task cards between columns (To Do → In Progress → Done)
- Ability to create, edit, and delete tasks
- Task cards with title, description, priority, and assignee

### 2. Live Activity Feed
- Simulated real-time updates feed
- Shows team member actions as they happen (e.g., "The Justice moved a card to Done")
- Auto-scrolling with timestamps
- Animated new entries

### 3. Charts & Analytics
- Charts that respond to date range filters
- Task completion rates, team productivity, etc.
- At least 2-3 different chart types (bar, line, pie/doughnut)
- Interactive filtering

### 4. Authentication with Role-Based Views
- Login/signup flow
- Protected routes
- Different user roles (admin, manager, developer) seeing different widgets/data
- Password reset flow

### 5. Dark/Light Theme Toggle
- Full theming system that cascades through every component
- User preference persistence (localStorage)
- Smooth transition between themes
- Theme-aware charts and widgets

### 6. Tarot Club Panel (Meta Layer)
- **The Project widget** — displays project name, description, and current status
- **Team Activity Tracker** — shows each Tarot Club member:
  - 🃏 The Fool (Leader)
  - ⚖️ The Justice (Planner)
  - ☀️ The Sun (Architect)
  - 🔵 The Hanged Man (Coder)
  - With their role, avatar/icon, token usage, and current phase
- **Reflections panel** — each member writes what they found interesting, challenging, or surprising about the project. This becomes a permanent part of the dashboard.
- Token usage tracking per member as the project is built

## Technical Notes
- Modern tech stack (choose appropriate framework)
- Responsive design
- Clean, well-organized code
- State management for complex interactions
