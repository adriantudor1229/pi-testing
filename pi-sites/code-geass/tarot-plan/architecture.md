# Architecture: Code Geass Fan Site

## Site Structure

```
code-geass/
├── public/
│   ├── images/
│   │   ├── characters/       # Character portraits
│   │   ├── mechas/           # Knightmare images
│   │   ├── factions/         # Faction emblems/banners
│   │   └── geass-sigil.svg   # Geass symbol SVG
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Nav.astro          # Shared navigation bar
│   │   ├── Footer.astro       # Shared footer
│   │   ├── CharacterCard.astro # Reusable character card with hover
│   │   ├── MechaCard.astro     # Reusable mecha card
│   │   ├── MechaStatBar.astro  # Animated stat comparison bar
│   │   ├── FactionTree.astro   # Faction hierarchy diagram (SVG)
│   │   └── GeassSigil.astro    # Animated Geass symbol component
│   ├── layouts/
│   │   └── BaseLayout.astro    # Shared HTML shell, meta, global CSS
│   ├── pages/
│   │   ├── index.astro         # Landing / Hero page
│   │   ├── characters.astro    # Characters page
│   │   ├── mechas.astro        # Knightmares page
│   │   └── factions.astro      # Factions page
│   ├── data/
│   │   ├── characters.json     # Character data (name, stats, bio, image)
│   │   ├── mechas.json         # Mecha data (name, stats, specs, image)
│   │   └── factions.json       # Faction data (name, members, hierarchy)
│   └── styles/
│       └── global.css          # Theme variables, resets, shared styles
├── astro.config.mjs
└── package.json
```

## Pages

### 1. Landing Page (`index.astro`)
- **Hero Section**: Full-viewport dark background with animated Geass sigil centered
- **Geass Sigil Animation**: SVG-based Geass glyph that pulses with a crimson glow and slowly rotates. Rendered via CSS keyframes. Not the eye — the sigil/glyph symbol.
- **Tagline**: Series tagline overlaid on or below the sigil (e.g., "The power of absolute obedience")
- **Call to Action**: Buttons/links to Characters, Mechas, Factions pages
- **Atmosphere**: Dark gradient background, subtle particle or fog effect if feasible with CSS

### 2. Characters Page (`characters.astro`)
- **Layout**: CSS Grid of `CharacterCard` components
- **Character Card Component**:
  - Default state: Character portrait, name, faction badge
  - Hover state: Card flips or expands to reveal — bio summary, stats (intelligence, combat, charisma, geass power), allegiance
  - Smooth CSS transition on hover (transform, opacity, box-shadow)
- **Data**: Pulled from `characters.json`
- **Main Cast**: Lelouch vi Britannia, Suzaku Kururugi, C.C., Kallen Stadtfeld, Nunnally, Schneizel, Cornelia, Mao, Jeremiah, etc.

### 3. Mechas Page (`mechas.astro`)
- **Layout**: Grid of `MechaCard` components + a comparison section
- **Mecha Card Component**: Mecha image, name, affiliation, class type
- **Mecha Stats Section**:
  - Stat bars for: Speed, Power, Defense, Mobility, Range
  - Bars rendered as CSS elements with width proportional to stat value
  - Animated fill on page load (CSS transition triggered by intersection observer)
  - Stats pulled from `mechas.json`
- **Mecha Specs Diagram**: Simple SVG or CSS-based diagram showing key specs per Knightmare
- **Main Knightmares**: Lancelot, Lancelot Albion, Gawain, Shinkirō, Guren, Guren SEITEN, Sutherland, Gloucester, etc.

### 4. Factions Page (`factions.astro`)
- **Layout**: Section per faction with hierarchy diagram
- **Faction Tree Component** (`FactionTree.astro`):
  - SVG-based hierarchy/tree diagram
  - Leader at top, sub-commanders below, soldiers/pilots at leaves
  - Connecting lines between nodes
  - Color-coded nodes by rank
- **Faction Relationships**: Visual showing alliances/rivalries between factions (simple node graph or side-by-side comparison)
- **Main Factions**:
  - Holy Britannian Empire (royal family tree)
  - The Black Knights (command structure)
  - Geass Order
  - Knight of Rounds
  - Japan Liberation Front

## Shared Components

### Navigation (`Nav.astro`)
- Fixed top bar, semi-transparent black background
- Links: Home, Characters, Mechas, Factions
- Active page indicator (blood red underline)
- Responsive: collapses to hamburger menu on mobile

### Footer (`Footer.astro`)
- Dark footer with Geass sigil watermark
- Credits / "Fan-made site, not affiliated with Sunrise"

### Base Layout (`BaseLayout.astro`)
- `<html>` shell with dark theme meta
- Imports `global.css`
- Contains `<Nav />`, `<slot />`, `<Footer />`
- Sets `<body>` background to near-black

## Data Files

### `characters.json`
```json
[
  {
    "id": "lelouch",
    "name": "Lelouch vi Britannia",
    "alias": "Zero",
    "faction": "The Black Knights",
    "image": "/images/characters/lelouch.jpg",
    "bio": "Exiled Britannian prince who leads the Black Knights...",
    "stats": { "intelligence": 10, "combat": 3, "charisma": 10, "geass": 10 }
  }
]
```

### `mechas.json`
```json
[
  {
    "id": "lancelot",
    "name": "Lancelot",
    "faction": "Holy Britannian Empire",
    "pilot": "Suzaku Kururugi",
    "class": "7th Generation",
    "image": "/images/mechas/lancelot.png",
    "stats": { "speed": 9, "power": 7, "defense": 6, "mobility": 9, "range": 5 }
  }
]
```

### `factions.json`
```json
[
  {
    "id": "black-knights",
    "name": "The Black Knights",
    "leader": "Zero (Lelouch vi Britannia)",
    "members": [
      { "name": "Kallen Stadtfeld", "role": "Ace Pilot" },
      { "name": "Ohgi", "role": "Deputy Commander" }
    ]
  }
]
```

## Design Tokens (Theme)

| Token              | Value        | Usage                          |
|--------------------|------------- |---------------------------------|
| `--black`          | `#000000`    | Page backgrounds                |
| `--black-light`    | `#0a0a0a`    | Card backgrounds                |
| `--black-card`     | `#111111`    | Elevated surfaces               |
| `--red-blood`      | `#8B0000`    | Primary accent                  |
| `--red-bright`     | `#CC0000`    | Hover states, active elements   |
| `--red-glow`       | `#FF0000`    | Glowing effects (with opacity)  |
| `--text-primary`   | `#E0E0E0`    | Body text                       |
| `--text-muted`     | `#888888`    | Secondary text, captions        |
| `--text-red`       | `#FF4444`    | Highlighted text, warnings      |

## Responsive Breakpoints

- Mobile: `< 768px` — single column, stacked cards
- Tablet: `768px - 1024px` — 2-column grid
- Desktop: `> 1024px` — 3-4 column grid, full diagrams

## Animation Notes

1. **Geass Sigil**: CSS keyframe rotation (slow spin, 20s loop) + box-shadow pulse (blood red glow, 3s loop). SVG element.
2. **Character Card Hover**: `transform: translateY(-8px)` + `box-shadow` expansion + inner content fade-in via opacity transition (0.3s ease).
3. **Mecha Stat Bars**: Width transition from 0% to target% on scroll-into-view, triggered by IntersectionObserver (vanilla JS in `<script>` tag).
4. **Page Transitions**: Subtle fade-in on page load (CSS animation on `<main>`).
