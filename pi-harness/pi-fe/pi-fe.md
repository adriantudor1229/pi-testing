---
name: pi-fe
description: Frontend skill router — guides the user through framework, styling, and design system selection, then loads the right skill files for their stack
type: skill
---

# Pi Frontend Skill

Interactive skill that configures your frontend development environment step by step.

## How It Works

Walk through each step in order. Wait for the user's response before moving to the next step. Do not skip steps.

---

## Step 1: Framework

Ask the user:

```
What framework are you using?
  1. React
  2. Vue
  3. Angular
  4. HTML/CSS/JS (vanilla)
  5. Next.js
```

Wait for the user to pick a number.

**Currently supported: React (option 1).** If the user picks another option, respond:
"That framework isn't supported yet. Want to continue with React, or stop here?"

Save their choice as `FRAMEWORK`.

---

## Step 2: Styling

Ask the user:

```
What styling approach?
  1. Tailwind CSS
  2. CSS Modules
  3. Styled Components
  4. Plain CSS
```

Wait for the user to pick a number.

**Currently supported: Tailwind CSS (option 1).** If the user picks another option, respond:
"That styling approach isn't supported yet. Want to continue with Tailwind CSS, or stop here?"

Save their choice as `STYLING`.

---

## Step 3: Design System Builder

Tell the user:

```
Let's define your design system visually.
Opening the design system builder in your browser...
```

Then run:

```bash
xdg-open /path/to/pi-fe/design-system-builder.html
```

Use the actual path where `design-system-builder.html` is located.

Tell the user:

```
Configure your colors, typography, spacing, and corners in the browser.
When you're done, click "Export" and paste the result here.
```

Wait for the user to paste the exported markdown.

Save the pasted content as `skills/generated/design-system.md` in the project directory.

---

## Step 4: Review

Show the user a summary of everything selected:

```
Here's your setup:

  Framework:  [FRAMEWORK]
  Styling:    [STYLING]

  Design System:
    - Theme: [from design-system.md]
    - Primary: [color]
    - Font: [font family, size]
    - Corners: [style]
    - Spacing: [density]

Does this look good? (y/n)
```

- If **no** → ask what they want to change. Re-open the builder if it's design system related, or go back to the relevant step.
- If **yes** → continue to Step 5.

---

## Step 5: Project Structure

Based on the selections, propose a project structure. For React + Tailwind:

```
Suggested project structure:

  src/
    components/        # Reusable UI components
      ui/              # Base components (Button, Input, Card)
    features/          # Feature modules
      auth/
        components/
        hooks/
        api.ts
        types.ts
    hooks/             # Shared custom hooks
    services/          # API clients
    utils/             # Utility functions (cn, formatters)
    types/             # Shared TypeScript types
    styles/            # Global styles, Tailwind config
    App.tsx
    main.tsx

  Want me to scaffold this? (y/n)
```

- If **no** → ask what they want to change, adjust, and ask again.
- If **yes** → create the folders and base files.

---

## Step 6: Build

Load the following skill files before building:

| Skill | Path | Always Loaded |
|-------|------|---------------|
| React core | `skills/react/react-core.md` | Yes (when React) |
| React testing | `skills/react/react-testing.md` | Yes |
| React performance | `skills/react/react-performance.md` | Yes |
| Tailwind | `skills/styling/tailwind.md` | Yes (when Tailwind) |
| Design system | `skills/generated/design-system.md` | Yes (generated in Step 3) |

Now build the actual site. Read `design-system.md` carefully — it contains the site brief (description, pages, features, audience) and all design tokens (colors, fonts, spacing, corners).

### STRICT RULES — READ BEFORE WRITING ANY CODE

These rules are non-negotiable. Violating any of them means the output is wrong.

**Colors:**
- ONLY use the exact hex values from `design-system.md`. Copy them character by character.
- If the design system says `Primary: #2665fd`, your CSS must have `#2665fd` — not `#a51d2d`, not `#3b82f6`, not any other color.
- NEVER invent, approximate, or substitute colors. If a color is not in the design system, do not use it.
- Map colors exactly: primary → primary, secondary → secondary, surface → surface, text → text, error → error, success → success. Do not swap or reassign them.

**Typography:**
- Use the EXACT font family from `design-system.md`. If it says Inter, use Inter — not Plus Jakarta Sans, not Roboto, not anything else.
- Use the EXACT base font size. If it says 14px, use 14px — not 15px, not 16px.
- Use the EXACT font weight. If it says 400 (regular), use 400 — not 500.

**Spacing & Corners:**
- Use the EXACT border radius. If it says 8px, use 8px — not 11px, not 15px.
- Use the spacing scale from the design system. Do not invent spacing values.

**Dependencies:**
- ONLY install the packages listed in Step 6.1. No additional libraries.
- Do NOT install three.js, @react-three/fiber, @react-three/drei, framer-motion, or any animation/3D library.
- Do NOT install any UI component library (shadcn, MUI, Chakra, Ant Design).
- If you think a feature needs an extra library, SKIP that feature. Do not install it.

**Content:**
- Do NOT use placeholder images, SVGs, or any image assets. Use text, icons (emoji only), and colored divs.
- Do NOT generate random graphics, 3D scenes, or animations.
- Use realistic text content that matches the site description, not lorem ipsum.

**Layout:**
- Every page must be centered with `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Content must never clip or overflow the viewport.
- Test at 1280px width mentally — nothing should be cut off.

**Code patterns:**
- Every component must use the `cn` utility for class merging.
- Every component must accept a `className` prop for overrides.
- Use ONLY Tailwind classes that reference your design tokens (`bg-primary`, `text-on-surface`, `rounded-md`). Never use raw hex values in JSX.

### 6.1: Initialize the project

Set up a working React + Tailwind project:

```bash
npm create vite@latest . -- --template react-ts
npm install
npm install -D tailwindcss @tailwindcss/vite
npm install clsx tailwind-merge
npm install react-router-dom
```

These are the ONLY allowed dependencies. Do not add anything else.

Then configure `src/styles/globals.css`. Copy this template exactly, replacing the values with the ones from `design-system.md`:

```css
@import "tailwindcss";
@import url('https://fonts.googleapis.com/css2?family=[FONT_FROM_DESIGN_SYSTEM]:wght@400;500;600&display=swap');

@theme {
  --color-primary: [PRIMARY_HEX_FROM_DESIGN_SYSTEM];
  --color-secondary: [SECONDARY_HEX_FROM_DESIGN_SYSTEM];
  --color-surface: [SURFACE_HEX_FROM_DESIGN_SYSTEM];
  --color-surface-light: [SURFACE_HEX slightly lighter, +10% brightness];
  --color-on-surface: [TEXT_HEX_FROM_DESIGN_SYSTEM];
  --color-error: [ERROR_HEX_FROM_DESIGN_SYSTEM];
  --color-success: [SUCCESS_HEX_FROM_DESIGN_SYSTEM];
  --color-border: [SECONDARY_HEX at 40% opacity equivalent];
  --font-sans: '[FONT_FROM_DESIGN_SYSTEM]', system-ui, sans-serif;
  --radius-sm: [BORDER_RADIUS from design system]px;
  --radius-md: [BORDER_RADIUS + 4]px;
  --radius-lg: [BORDER_RADIUS + 8]px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-sans);
  font-size: [BASE_SIZE_FROM_DESIGN_SYSTEM]px;
  font-weight: [BODY_WEIGHT_FROM_DESIGN_SYSTEM];
  background-color: var(--color-surface);
  color: var(--color-on-surface);
  -webkit-font-smoothing: antialiased;
}

a {
  color: inherit;
  text-decoration: none;
}
```

VERIFY: Open the design-system.md, read each value, and confirm your CSS matches exactly before moving on.

### 6.2: Build base UI components

Create these in `src/components/ui/`. Copy these templates, adapting only to your design tokens:

**Button.tsx:**

```tsx
import { type ButtonHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variants = {
  primary: 'bg-primary text-white hover:opacity-90',
  secondary: 'bg-secondary text-on-surface hover:opacity-90',
  danger: 'bg-error text-white hover:opacity-90',
};

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

function Button({ variant = 'primary', size = 'md', className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'rounded-sm font-medium transition-opacity cursor-pointer',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export { Button };
```

**Input.tsx:**

```tsx
import { type InputHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

type InputProps = {
  label?: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

function Input({ label, error, className, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium text-on-surface">{label}</label>}
      <input
        className={cn(
          'rounded-sm border border-border bg-surface-light px-3 py-2 text-on-surface outline-none transition-colors',
          'focus:border-primary',
          error && 'border-error',
          className
        )}
        {...props}
      />
      {error && <span className="text-sm text-error">{error}</span>}
    </div>
  );
}

export { Input };
```

**Card.tsx:**

```tsx
import { cn } from '../../utils/cn';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

function Card({ children, className }: CardProps) {
  return (
    <div className={cn('rounded-md border border-border bg-surface-light p-6', className)}>
      {children}
    </div>
  );
}

function CardTitle({ children, className }: CardProps) {
  return <h3 className={cn('text-lg font-semibold text-on-surface', className)}>{children}</h3>;
}

function CardBody({ children, className }: CardProps) {
  return <div className={cn('mt-2 text-sm text-on-surface/70', className)}>{children}</div>;
}

Card.Title = CardTitle;
Card.Body = CardBody;

export { Card };
```

**Badge.tsx:**

```tsx
import { cn } from '../../utils/cn';

type BadgeProps = {
  variant?: 'primary' | 'secondary' | 'success' | 'error';
  children: React.ReactNode;
  className?: string;
};

const variants = {
  primary: 'bg-primary/10 text-primary',
  secondary: 'bg-secondary/20 text-on-surface',
  success: 'bg-success/10 text-success',
  error: 'bg-error/10 text-error',
};

function Badge({ variant = 'primary', className, children }: BadgeProps) {
  return (
    <span className={cn('inline-block rounded-sm px-2.5 py-1 text-xs font-medium', variants[variant], className)}>
      {children}
    </span>
  );
}

export { Badge };
```

**Layout.tsx:**

```tsx
import { cn } from '../../utils/cn';

type LayoutProps = {
  children: React.ReactNode;
  className?: string;
};

function Layout({ children, className }: LayoutProps) {
  return (
    <div className={cn('flex min-h-screen flex-col bg-surface', className)}>
      {children}
    </div>
  );
}

function Header({ children, className }: LayoutProps) {
  return (
    <header className={cn('flex items-center justify-between border-b border-border px-4 py-3 sm:px-6 lg:px-8', className)}>
      {children}
    </header>
  );
}

function Main({ children, className }: LayoutProps) {
  return <main className={cn('flex-1', className)}>{children}</main>;
}

function Section({ children, className }: LayoutProps) {
  return (
    <section className={cn('mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8', className)}>
      {children}
    </section>
  );
}

function Footer({ children, className }: LayoutProps) {
  return (
    <footer className={cn('border-t border-border px-4 py-12 sm:px-6 lg:px-8', className)}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </footer>
  );
}

Layout.Header = Header;
Layout.Main = Main;
Layout.Section = Section;
Layout.Footer = Footer;

export { Layout };
```

**cn.ts:**

```tsx
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### 6.3: Build pages

Read the **Pages** list from `design-system.md` and create a route + page component for each one.

Rules for pages:
- Each page goes in `src/features/<page-name>/PageName.tsx`
- Set up React Router in `App.tsx` with all routes
- Every page must use the `Layout` component as its wrapper
- Every section must use `Layout.Section` for proper centering and padding
- Use ONLY the UI components from Step 6.2 (Button, Input, Card, Badge, Layout)
- Use realistic text content that matches the site description
- Do NOT use images. Use emoji for icons, colored divs for visual blocks.

**Page templates by type:**

**Landing Page** must include:
- Header with logo text + nav links + CTA button
- Hero section: headline, subtitle, CTA buttons, trust badges (text only, no images)
- Features grid: 3-6 cards using the Card component
- CTA section: centered call to action
- Footer with link columns

**Dashboard** must include:
- Sidebar or top nav with links
- Stats row using Cards (3-4 metric cards)
- Main content area with a list or table

**Login/Register** must include:
- Centered card with form using Input components
- Email + password fields with validation placeholder
- Submit Button
- Link to switch between login/register

**Pricing** must include:
- 2-3 pricing tier Cards side by side
- Feature lists inside each card
- CTA Button per tier

**About/Contact** must include:
- Text content sections using Layout.Section
- Contact form using Input components (for Contact page)

### 6.4: Build key features

Read the **Key Features** from `design-system.md` and implement only what can be done with the installed dependencies (React, React Router, Tailwind, clsx, tailwind-merge).

- Do NOT install additional packages for features.
- If a feature requires a library not in Step 6.1, implement a simple version with plain React/CSS or skip it.
- Keep implementations simple — working placeholder, not production-ready.

### 6.5: Verify before showing to user

Before telling the user the site is ready, verify by reading your own code:

**Checklist — go through each item:**

- [ ] Open `globals.css` and confirm every color hex matches `design-system.md` exactly
- [ ] Confirm font family matches exactly
- [ ] Confirm font size and weight match exactly
- [ ] Confirm border radius matches exactly
- [ ] Open each page component and confirm no raw hex values in JSX (only Tailwind token classes)
- [ ] Confirm no third-party libraries beyond Step 6.1 were installed
- [ ] Confirm no image assets, 3D graphics, or animations were added
- [ ] Confirm every page uses Layout wrapper and Layout.Section for content
- [ ] Confirm content doesn't clip or overflow (max-w-7xl mx-auto px-4 on all sections)
- [ ] Run `npm run dev` and confirm no build errors

If ANY item fails, fix it before proceeding.

Then tell the user:

```
Site is built and running at [localhost URL].

Pages created:
  - [list of pages]

Components built:
  - Button, Input, Card, Badge, Layout

Features implemented:
  - [list of features]

Design system verified:
  - Colors: [primary hex], [secondary hex], etc.
  - Font: [font family], [size]px
  - Corners: [radius]px

Take a look and let me know what you'd like to change.
```

Wait for user feedback. If they want changes, make them. If they approve, continue to Step 7.

---

## Step 7: Done

Tell the user:

```
Your project is ready.

  Stack: [FRAMEWORK] + [STYLING]
  Pages: [list]
  Features: [list]

  Skills loaded for this session:
    - React core patterns
    - React testing (Vitest + Testing Library)
    - React performance optimization
    - Tailwind CSS patterns
    - Your design system

How can I help next?
```

---

## Notes

- Never skip the review step (Step 4). The user must confirm before scaffolding.
- Never scaffold the project (Step 5) without explicit user approval.
- Never start building (Step 6) without the project structure being scaffolded first.
- If the user wants to change something after Step 4, go back to the relevant step only — don't restart the whole flow.
- The design-system.md is unique per project. Always save it in `skills/generated/`.
- During Step 6, the STRICT RULES section overrides everything else. If a skill file and a strict rule conflict, the strict rule wins.
- Build pages with realistic placeholder content that matches the site description, not lorem ipsum.
- NEVER add dependencies not listed in Step 6.1.
- NEVER use colors not defined in design-system.md.
- NEVER use a different font than what design-system.md specifies.
- NEVER add images, 3D graphics, SVG illustrations, or animations.
