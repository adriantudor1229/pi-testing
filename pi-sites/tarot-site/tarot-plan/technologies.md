# Technologies Plan — Lord of the Mysteries Tarot Club Fan Site

## Technology Choices

### Core Stack
| Technology | Purpose | Justification |
|---|---|---|
| **HTML5** | Structure | Semantic markup, accessibility, no build step needed |
| **CSS3** | Styling & Animations | Native fog effects via gradients, filters, keyframe animations. No preprocessor needed for this scope |
| **Vanilla JavaScript (ES6+)** | Interactivity | No framework overhead. The site is content-display with interactions, not a complex app. Fast load, zero dependencies |

### Why No Framework?
- This is a static content site with interactive flourishes
- React/Vue/Svelte would add build complexity for minimal benefit
- Performance: zero-dependency site loads fast, matching the ethereal "appearing from fog" feel
- Simplicity: any team member can understand and modify the code

### Why No Build Tools?
- No bundler (Webpack, Vite) needed — we're using vanilla HTML/CSS/JS
- Keeps the project simple and immediately runnable
- Open `index.html` in a browser and it works

### Libraries (considered but optional)
| Library | Purpose | Decision |
|---|---|---|
| **particles.js** | Fog particle system | ❌ Skip — custom CSS fog is lighter and more atmospheric. Canvas particles can be added later if CSS isn't enough |
| **GSAP** | Advanced animations | ❌ Skip — CSS animations + lightweight JS are sufficient for card flips and fade-ins |
| **AOS (Animate on Scroll)** | Scroll-triggered animations | ✅ Consider — but can be done with IntersectionObserver natively. Skip for now |
| **Google Fonts** | Typography | ✅ Use — a mystical serif font (e.g., Cinzel, Cormorant Garamond) for headings |

### Fonts
- **Heading Font**: `Cinzel` or `Cormorant Garamond` — elegant, mystical, serif
- **Body Font**: `Inter` or system sans-serif — clean, readable

### Data Format
- **JSON** files for members, pathways, and quotes
- Loaded via `fetch()` at runtime
- Simple to edit and extend

### Responsive Design
- **CSS Grid** + **Flexbox** — native, no library needed
- **CSS Custom Properties** — for theming (fog colors, spacing)
- **Media queries** — mobile-first approach

### Fog Effects Techniques
- CSS `radial-gradient` layers with animated opacity
- CSS `filter: blur()` on overlay elements
- Optional: lightweight canvas-based particle drift
- `mix-blend-mode` for atmospheric layering

### Color System (CSS Custom Properties)
```css
:root {
  --fog-light: #d4d4d8;
  --fog-mid: #a1a1aa;
  --fog-dark: #52525b;
  --fog-deep: #27272a;
  --gold-muted: #c9a84c;
  --purple-deep: #4a2d6a;
  --candlelight: #f5e6c8;
  --text-primary: #e4e4e7;
  --text-secondary: #a1a1aa;
}
```

### Hosting (future consideration)
- Static site → GitHub Pages, Netlify, or Vercel
- Zero server cost

---

## Skill Recommendations

### For The Sun (Architect — builds the skeleton)
The Sun should use:
- **the-sun** skill — to scaffold the project structure, create all files, and set up the HTML/CSS/JS skeleton based on `architecture.md`

### For The Hanged Man (Coder — implements functionality)
The Hanged Man should use:
- **the-hanged-man** skill — to implement all JavaScript interactions (fog effects, member filtering, card flips, pathway explorer, quote randomizer) and populate JSON data files based on `architecture.md` and `technologies.md`

### Notes
- No additional external skills are needed — the project is self-contained vanilla web tech
- All content data (members, pathways, quotes) should be written by The Hanged Man into the JSON files
- The Sun should focus on structure, layout, and fog-themed styling
- The Hanged Man should focus on interactivity and data population
