# Architecture Plan — Lord of the Mysteries Tarot Club Fan Site

## Overview

A single-page fan site dedicated to the Tarot Club from *Lord of the Mysteries*. The site presents all club members with their character details, pathways/sequences lore, and interactive features — all wrapped in an atmospheric grayish fog theme.

## Site Structure

### 1. Hero / Landing Section
- Full-viewport atmospheric fog background
- Title: "The Tarot Club" with mystical typography
- Subtitle / tagline referencing the novel
- Animated fog particles or drifting mist effect
- Subtle call-to-action to scroll down

### 2. Tarot Club Members Section
- Grid or carousel layout presenting ALL Tarot Club members
- Each member card shows:
  - Codename (The Fool, Justice, The Sun, etc.)
  - Real name (if known/relevant)
  - Brief tagline or quote
  - Pathway affiliation
- Clicking a card opens a detailed member profile (modal or inline expand)

### 3. Member Profile Details
For each member, a detailed view with:
- **Codename** and **Real Identity**
- **Pathway** and **Sequence** (current known sequence)
- **Background / Lore** — key story beats
- **Abilities** — notable Beyonder powers
- **Tarot Club Role** — their function within the club
- **Notable Quotes** — memorable lines

### Complete Member List (in order of introduction):
1. The Fool — Klein Moretti
2. Justice — Audrey Hall
3. The Hanged Man — Alger Wilson
4. The Sun — Derek Casto (Derrick Berg)
5. The Moon — Emlyn White
6. The World — Klein Moretti (alternate identity)
7. The Star — Leonard Mitchell
8. The Hermit — Cattleya
9. The Emperor — Xio Derecha (via Queen of Mysteries pathway)
10. The Priestess — Fors Wall

### 4. Pathways & Sequences Section
- Visual diagram or organized list of the major pathways featured in the Tarot Club
- Each pathway shows:
  - Pathway name (e.g., Door, Audience, Seer, etc.)
  - Sequence 9 through Sequence 0 progression
  - Brief description of each sequence's abilities
- Interactive: click to expand pathway details
- Key pathways to feature:
  - **Seer** (The Fool / The World)
  - **Audience** (Justice)
  - **Sailor / Marauder** (The Hanged Man)
  - **Bard / Sun** (The Sun)
  - **Vampire / Moon** (The Moon)
  - **Apprentice / Door** (The Hermit)
  - **Nighthawk / Darkness** (The Star — partial)
  - **Arbiter** (The Emperor)
  - **Mystery Pryer / Instigator** (The Priestess)

### 5. Interactive Elements
- **Tarot Card Flip**: Hover or click to reveal member details (card-flip animation)
- **Pathway Explorer**: Interactive tree/timeline showing sequence progression
- **Fog Particle System**: Animated fog throughout the site (CSS or JS-based)
- **Quote Randomizer**: Display random Tarot Club quotes
- **Member Filter**: Filter members by pathway, sequence, or role
- **Dark/Light Mode**: Toggle (but fog is default and primary)

### 6. Footer
- Attribution to the novel and author (Cuttlefish That Loves Diving)
- Fan site disclaimer
- Links to relevant resources

## Design Principles

- **Fog Theme**: Gray, misty, ethereal throughout — never bright or jarring
- **Typography**: Serif or mystical fonts for headings; clean sans-serif for body
- **Color Palette**: Grays, muted golds, deep purples, soft whites — like candlelight through fog
- **Animations**: Subtle and atmospheric — fog drifts, card reveals, fade-ins
- **Responsive**: Must work on mobile, tablet, and desktop
- **Accessibility**: Proper contrast despite dark/foggy theme, keyboard navigable

## File Structure (recommended)

```
tarot-site/
├── index.html              # Single-page entry point
├── css/
│   ├── main.css            # Global styles, fog theme
│   ├── members.css         # Member cards and profiles
│   ├── pathways.css        # Pathway section styles
│   └── animations.css      # Fog, card flip, transitions
├── js/
│   ├── main.js             # App initialization
│   ├── fog.js              # Fog particle system
│   ├── members.js          # Member data, filtering, modals
│   ├── pathways.js         # Pathway explorer interactions
│   └── quotes.js           # Quote randomizer
├── data/
│   ├── members.json        # All member data
│   ├── pathways.json       # Pathway and sequence data
│   └── quotes.json         # Quote collection
├── assets/
│   ├── images/             # Member portraits, symbols, backgrounds
│   └── fonts/              # Custom fonts if needed
└── tarot-plan/             # Planning docs (not deployed)
```

## Page Flow

1. User lands on foggy hero → scrolls or clicks to explore
2. Members section → browse cards, click to see details
3. Pathways section → explore sequences interactively
4. Interactive quotes scattered or in a dedicated section
5. Footer with credits

## Data Architecture

- All content lives in JSON files (members, pathways, quotes)
- JavaScript loads and renders data dynamically
- No backend needed — purely static site
- Data is structured for easy updates (add members, sequences, quotes)
