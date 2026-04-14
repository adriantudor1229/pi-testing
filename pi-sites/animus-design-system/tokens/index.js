/**
 * Animus Design System — Token Export (ES Module)
 * Aesthetic: The Neon Architect
 *
 * Use these tokens programmatically in JS/TS runtimes,
 * CSS-in-JS libraries, or design token pipelines.
 */

export const colors = {
  primary: {
    default: '#a3a6ff',
    bright: '#c4c6ff',
    dim: '#7a7dcc',
    muted: 'rgba(163, 166, 255, 0.15)',
  },
  secondary: {
    default: '#a28efc',
    bright: '#c4b5ff',
    dim: '#816dd4',
    muted: 'rgba(162, 142, 252, 0.15)',
  },
  tertiary: {
    default: '#6ee7b7',
    bright: '#a7f3d0',
    dim: '#4ac78f',
    muted: 'rgba(110, 231, 183, 0.12)',
  },

  surface: {
    bgBase: '#0e0e0e',
    bgRaised: '#161618',
    bgOverlay: '#1c1c1f',
    bgSunken: '#0a0a0a',
    bgInset: '#111113',
    base: '#161618',
    raised: '#1e1e21',
    overlay: '#232326',
    elevated: '#2a2a2e',
    sunken: '#101012',
  },

  glass: {
    bg: 'rgba(22, 22, 24, 0.72)',
    bgHeavy: 'rgba(22, 22, 24, 0.88)',
    border: 'rgba(163, 166, 255, 0.12)',
    borderBright: 'rgba(163, 166, 255, 0.25)',
    blur: '16px',
    blurHeavy: '32px',
  },

  border: {
    default: 'rgba(255, 255, 255, 0.06)',
    subtle: 'rgba(255, 255, 255, 0.03)',
    strong: 'rgba(255, 255, 255, 0.12)',
  },

  text: {
    primary: '#f0f0f3',
    secondary: '#a0a0a8',
    tertiary: '#6b6b73',
    inverse: '#0e0e0e',
    onAccent: '#0e0e0e',
    link: '#a3a6ff',
  },

  semantic: {
    success: { default: '#6ee7b7', dim: '#4ac78f', muted: 'rgba(110, 231, 183, 0.12)', surface: 'rgba(110, 231, 183, 0.08)' },
    warning: { default: '#fbbf24', dim: '#d4a017', muted: 'rgba(251, 191, 36, 0.12)', surface: 'rgba(251, 191, 36, 0.08)' },
    error:   { default: '#f87171', dim: '#dc5252', muted: 'rgba(248, 113, 113, 0.12)', surface: 'rgba(248, 113, 113, 0.08)' },
    info:    { default: '#67e8f9', dim: '#49c5d6', muted: 'rgba(103, 232, 249, 0.12)', surface: 'rgba(103, 232, 249, 0.08)' },
  },
};

export const lightColors = {
  surface: {
    bgBase: '#f5f5f7',
    bgRaised: '#ffffff',
    bgOverlay: '#ffffff',
    bgSunken: '#ebebed',
    bgInset: '#e5e5e8',
    base: '#ffffff',
    raised: '#ffffff',
    overlay: '#f5f5f7',
    elevated: '#ffffff',
    sunken: '#ebebed',
  },
  primary: {
    default: '#7a7dcc',
    bright: '#6565b0',
    dim: '#5c5ca0',
    muted: 'rgba(122, 125, 204, 0.10)',
  },
  secondary: {
    default: '#816dd4',
    bright: '#6b55ba',
    dim: '#5a48a0',
    muted: 'rgba(129, 109, 212, 0.10)',
  },
  text: {
    primary: '#1a1a1e',
    secondary: '#5c5c66',
    tertiary: '#9a9aa4',
    inverse: '#f0f0f3',
    onAccent: '#ffffff',
  },
};

export const typography = {
  fontFamily: {
    sans: "'Space Grotesk', ui-sans-serif, system-ui, -apple-system, sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', ui-monospace, monospace",
  },
  scale: {
    display:   { size: '3.5rem',    weight: 700, lineHeight: 1.1,  letterSpacing: '-0.03em',  label: 'Display' },
    headline:  { size: '2.25rem',   weight: 700, lineHeight: 1.15, letterSpacing: '-0.02em',  label: 'Headline' },
    title:     { size: '1.5rem',    weight: 600, lineHeight: 1.25, letterSpacing: '-0.015em', label: 'Title' },
    subtitle:  { size: '1.125rem',  weight: 600, lineHeight: 1.35, letterSpacing: '-0.01em',  label: 'Subtitle' },
    bodyLg:    { size: '1.0625rem', weight: 400, lineHeight: 1.6,  letterSpacing: '0em',      label: 'Body Large' },
    body:      { size: '0.9375rem', weight: 400, lineHeight: 1.6,  letterSpacing: '0.005em',  label: 'Body' },
    caption:   { size: '0.8125rem', weight: 500, lineHeight: 1.45, letterSpacing: '0.01em',   label: 'Caption' },
    overline:  { size: '0.6875rem', weight: 600, lineHeight: 1.4,  letterSpacing: '0.08em', textTransform: 'uppercase', label: 'Overline' },
  },
};

export const spacing = {
  base: 4,
  scale: {
    1: '0.25rem',   //  4px
    2: '0.5rem',    //  8px
    3: '0.75rem',   // 12px
    4: '1rem',      // 16px
    5: '1.5rem',    // 24px
    6: '2rem',      // 32px
    7: '3rem',      // 48px
    8: '4rem',      // 64px
  },
  px: {
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 24,
    6: 32,
    7: 48,
    8: 64,
  },
};

export const radii = {
  none: '0',
  xs: '0.125rem',   //  2px
  sm: '0.25rem',    //  4px
  md: '0.5rem',     //  8px
  lg: '0.75rem',    // 12px
  full: '9999px',
};

export const shadows = {
  elevation: {
    0: 'none',
    1: '0 1px 2px rgba(0,0,0,0.3), 0 1px 3px rgba(0,0,0,0.15)',
    2: '0 4px 6px -1px rgba(0,0,0,0.35), 0 2px 4px -2px rgba(0,0,0,0.2)',
    3: '0 10px 15px -3px rgba(0,0,0,0.4), 0 4px 6px -4px rgba(0,0,0,0.25)',
    4: '0 20px 25px -5px rgba(0,0,0,0.5), 0 8px 10px -6px rgba(0,0,0,0.3)',
  },
  glow: {
    primarySm: '0 0 8px rgba(163,166,255,0.3)',
    primaryMd: '0 0 16px rgba(163,166,255,0.25), 0 0 32px rgba(163,166,255,0.1)',
    primaryLg: '0 0 24px rgba(163,166,255,0.35), 0 0 48px rgba(163,166,255,0.15), 0 0 96px rgba(162,142,252,0.06)',
    secondarySm: '0 0 8px rgba(162,142,252,0.3)',
    secondaryMd: '0 0 16px rgba(162,142,252,0.25), 0 0 32px rgba(162,142,252,0.1)',
    secondaryLg: '0 0 24px rgba(162,142,252,0.35), 0 0 48px rgba(162,142,252,0.15), 0 0 96px rgba(163,166,255,0.06)',
    successSm: '0 0 8px rgba(110,231,183,0.25)',
    errorSm: '0 0 8px rgba(248,113,113,0.25)',
  },
  focusRing: '0 0 0 2px #0e0e0e, 0 0 0 4px #a3a6ff',
};

export const motion = {
  easing: {
    default: 'cubic-bezier(0.4, 0, 0.2, 1)',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
  duration: {
    fast: 100,
    normal: 200,
    slow: 300,
  },
};
