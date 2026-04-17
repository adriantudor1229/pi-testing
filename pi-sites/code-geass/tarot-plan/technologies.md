# Technologies: Code Geass Fan Site

## Core Framework

### **Astro** (Static Site Generator)
- **Why**: Purpose-built for multi-page content sites. Zero JS by default (ships only HTML). Component-based with `.astro` files. Built-in routing via `src/pages/`. Static output — no server needed, deploy anywhere.
- **Version**: Latest stable (5.x)

## Styling

### **CSS (Global + Scoped)**
- **Why**: No preprocessor needed. Astro supports scoped styles per component natively. CSS custom properties (variables) for theming. CSS Grid and Flexbox for all layouts.
- **Approach**:
  - `global.css` — CSS custom properties for the black/blood-red theme, resets, shared typography
  - Scoped `<style>` blocks in each `.astro` component for component-specific styles
  - No Tailwind, no SCSS — keep it lean and readable

### **CSS Animations & Keyframes**
- **Why**: All animation requirements (Geass sigil rotation, card hover transitions, stat bar fills) are achievable with pure CSS. No JS animation library needed.
- **Used for**:
  - Geass sigil rotation + glow pulse
  - Character card hover transforms
  - Mecha stat bar width transitions
  - Page fade-in on load

## Visual Elements

### **SVG (Inline)**
- **Why**: The Geass sigil is a geometric symbol — perfect for SVG. Faction hierarchy diagrams are tree structures — SVG gives full control over nodes, lines, and layout. Scales perfectly, styled with CSS.
- **Used for**:
  - Geass sigil/glyph (animated via CSS on the SVG element)
  - Faction hierarchy trees (nodes + connecting lines)
  - Any decorative geometric patterns

### **Vanilla JavaScript (Islands / `<script>` tags)**
- **Why**: Minimal interactivity needed. Astro allows `<script>` tags that run as isolated JS. No framework overhead.
- **Used for**:
  - IntersectionObserver to trigger mecha stat bar animations on scroll
  - Mobile hamburger menu toggle
  - Any future interactive comparisons or filters

## Data Layer

### **Static JSON Files**
- **Why**: All content (characters, mechas, factions) is static. JSON files imported directly into Astro components at build time. No database, no API, no CMS.
- **Files**: `characters.json`, `mechas.json`, `factions.json`

## Build & Deploy

### **Astro Static Output**
- Output mode: `static` (default)
- Build produces plain HTML/CSS/JS files
- Deployable to: GitHub Pages, Netlify, Vercel, or any static host

## What We Are NOT Using (and why)

| Technology     | Reason for Exclusion                                    |
|----------------|---------------------------------------------------------|
| React/Vue/Svelte | Overkill for a static content site. Astro components handle everything. |
| Tailwind CSS   | Custom dark theme is easier with CSS variables. No utility class soup. |
| SCSS/LESS      | Astro's scoped styles + CSS custom properties remove the need. |
| Chart.js / D3  | Mecha stat bars are simple CSS elements. Faction diagrams are static SVG. No heavy charting library needed. |
| Three.js / WebGL | The Geass sigil animation is achievable with CSS on SVG. No 3D needed. |
| Database / CMS | All data is static JSON, built at compile time. |

## Skill Recommendations

### For The Architect (The Sun — builds the skeleton):
- Standard Astro project scaffolding
- Create the file structure as defined in `architecture.md`
- Set up `BaseLayout.astro`, `Nav.astro`, `Footer.astro`
- Create all page files with basic structure
- Set up `global.css` with theme variables and resets
- Create stub components for `CharacterCard`, `MechaCard`, `MechaStatBar`, `FactionTree`, `GeassSigil`
- Create the JSON data files with the full data set (characters, mechas, factions)
- Ensure Astro builds and all routes resolve

### For The Coder (The Hanged Man — implements the details):
- Implement Geass sigil SVG + CSS animation on landing page
- Build character card hover effects (CSS transitions)
- Implement mecha stat bar animations with IntersectionObserver
- Build SVG faction hierarchy diagrams
- Polish responsive layouts (mobile hamburger nav, grid breakpoints)
- Add atmospheric touches (gradients, glows, shadows)
- Ensure all pages are fully functional and visually cohesive

## Dependencies (Minimal)

```json
{
  "dependencies": {
    "astro": "^5.x"
  }
}
```

That's it. One dependency. Everything else is HTML, CSS, JS, and SVG.
