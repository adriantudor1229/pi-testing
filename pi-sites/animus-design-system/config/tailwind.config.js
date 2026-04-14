const animusDesignSystem = require('./animus-theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx,js,jsx,html}'],
  theme: {
    extend: {
      /* ── Colors ─────────────────────────────────────────────── */
      colors: {
        animus: {
          // Primary — Neon Lavender
          primary: {
            DEFAULT: '#a3a6ff',
            bright: '#c4c6ff',
            dim: '#7a7dcc',
            muted: 'rgba(163, 166, 255, 0.15)',
          },
          // Secondary — Electric Violet
          secondary: {
            DEFAULT: '#a28efc',
            bright: '#c4b5ff',
            dim: '#816dd4',
            muted: 'rgba(162, 142, 252, 0.15)',
          },
          // Tertiary — Mint Signal
          tertiary: {
            DEFAULT: '#6ee7b7',
            bright: '#a7f3d0',
            dim: '#4ac78f',
            muted: 'rgba(110, 231, 183, 0.12)',
          },
          // Backgrounds
          bg: {
            base: '#0e0e0e',
            raised: '#161618',
            overlay: '#1c1c1f',
            sunken: '#0a0a0a',
            inset: '#111113',
          },
          // Surfaces
          surface: {
            base: '#161618',
            raised: '#1e1e21',
            overlay: '#232326',
            elevated: '#2a2a2e',
            sunken: '#101012',
          },
          // Borders
          border: {
            default: 'rgba(255, 255, 255, 0.06)',
            subtle: 'rgba(255, 255, 255, 0.03)',
            strong: 'rgba(255, 255, 255, 0.12)',
          },
          // Text
          text: {
            primary: '#f0f0f3',
            secondary: '#a0a0a8',
            tertiary: '#6b6b73',
            inverse: '#0e0e0e',
            'on-accent': '#0e0e0e',
          },
          // Semantic
          success: { DEFAULT: '#6ee7b7', dim: '#4ac78f', muted: 'rgba(110, 231, 183, 0.12)' },
          warning: { DEFAULT: '#fbbf24', dim: '#d4a017', muted: 'rgba(251, 191, 36, 0.12)' },
          error:   { DEFAULT: '#f87171', dim: '#dc5252', muted: 'rgba(248, 113, 113, 0.12)' },
          info:    { DEFAULT: '#67e8f9', dim: '#49c5d6', muted: 'rgba(103, 232, 249, 0.12)' },
        },
      },

      /* ── Typography ─────────────────────────────────────────── */
      fontFamily: {
        animus: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'animus-display':  ['3.5rem',    { lineHeight: '1.1',  letterSpacing: '-0.03em',  fontWeight: '700' }],
        'animus-headline': ['2.25rem',   { lineHeight: '1.15', letterSpacing: '-0.02em',  fontWeight: '700' }],
        'animus-title':    ['1.5rem',    { lineHeight: '1.25', letterSpacing: '-0.015em', fontWeight: '600' }],
        'animus-subtitle': ['1.125rem',  { lineHeight: '1.35', letterSpacing: '-0.01em',  fontWeight: '600' }],
        'animus-body-lg':  ['1.0625rem', { lineHeight: '1.6',  letterSpacing: '0em',     fontWeight: '400' }],
        'animus-body':     ['0.9375rem', { lineHeight: '1.6',  letterSpacing: '0.005em',  fontWeight: '400' }],
        'animus-caption':  ['0.8125rem', { lineHeight: '1.45', letterSpacing: '0.01em',   fontWeight: '500' }],
        'animus-overline': ['0.6875rem', { lineHeight: '1.4',  letterSpacing: '0.08em',   fontWeight: '600' }],
      },

      /* ── Spacing (4px grid, 8 levels) ───────────────────────── */
      spacing: {
        'animus-1': '0.25rem',   //  4px
        'animus-2': '0.5rem',    //  8px
        'animus-3': '0.75rem',   // 12px
        'animus-4': '1rem',      // 16px
        'animus-5': '1.5rem',    // 24px
        'animus-6': '2rem',      // 32px
        'animus-7': '3rem',      // 48px
        'animus-8': '4rem',      // 64px
      },

      /* ── Border Radii (6 levels) ────────────────────────────── */
      borderRadius: {
        'animus-none': '0',
        'animus-xs':   '0.125rem',  //  2px
        'animus-sm':   '0.25rem',   //  4px
        'animus-md':   '0.5rem',    //  8px
        'animus-lg':   '0.75rem',   // 12px
        'animus-full': '9999px',
      },

      /* ── Box Shadows (elevation + neon glows) ───────────────── */
      boxShadow: {
        'animus-0': 'none',
        'animus-1': '0 1px 2px rgba(0,0,0,0.3), 0 1px 3px rgba(0,0,0,0.15)',
        'animus-2': '0 4px 6px -1px rgba(0,0,0,0.35), 0 2px 4px -2px rgba(0,0,0,0.2)',
        'animus-3': '0 10px 15px -3px rgba(0,0,0,0.4), 0 4px 6px -4px rgba(0,0,0,0.25)',
        'animus-4': '0 20px 25px -5px rgba(0,0,0,0.5), 0 8px 10px -6px rgba(0,0,0,0.3)',

        // Neon glows
        'glow-primary-sm': '0 0 8px rgba(163,166,255,0.3)',
        'glow-primary-md': '0 0 16px rgba(163,166,255,0.25), 0 0 32px rgba(163,166,255,0.1)',
        'glow-primary-lg': '0 0 24px rgba(163,166,255,0.35), 0 0 48px rgba(163,166,255,0.15), 0 0 96px rgba(162,142,252,0.06)',
        'glow-secondary-sm': '0 0 8px rgba(162,142,252,0.3)',
        'glow-secondary-md': '0 0 16px rgba(162,142,252,0.25), 0 0 32px rgba(162,142,252,0.1)',
        'glow-secondary-lg': '0 0 24px rgba(162,142,252,0.35), 0 0 48px rgba(162,142,252,0.15), 0 0 96px rgba(163,166,255,0.06)',
        'glow-success': '0 0 8px rgba(110,231,183,0.25)',
        'glow-error': '0 0 8px rgba(248,113,113,0.25)',

        // Focus ring
        'animus-focus': '0 0 0 2px #0e0e0e, 0 0 0 4px #a3a6ff',
      },

      /* ── Animations ─────────────────────────────────────────── */
      transitionTimingFunction: {
        'animus-default': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'animus-in':      'cubic-bezier(0.4, 0, 1, 1)',
        'animus-out':     'cubic-bezier(0, 0, 0.2, 1)',
        'animus-spring':  'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      transitionDuration: {
        'animus-fast':   '100ms',
        'animus-normal': '200ms',
        'animus-slow':   '300ms',
      },

      /* ── Backdrop Blur ──────────────────────────────────────── */
      backdropBlur: {
        'animus':       '16px',
        'animus-heavy': '32px',
      },

      /* ── Keyframes ──────────────────────────────────────────── */
      keyframes: {
        'animus-pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 8px rgba(163, 166, 255, 0.3)' },
          '50%':      { boxShadow: '0 0 24px rgba(163, 166, 255, 0.5), 0 0 48px rgba(162, 142, 252, 0.15)' },
        },
        'animus-fade-in': {
          from: { opacity: '0', transform: 'translateY(4px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'animus-slide-up': {
          from: { opacity: '0', transform: 'translateY(8px) scale(0.98)' },
          to:   { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
      },
      animation: {
        'animus-pulse-glow': 'animus-pulse-glow 2s ease-in-out infinite',
        'animus-fade-in':    'animus-fade-in 200ms cubic-bezier(0.4, 0, 0.2, 1)',
        'animus-slide-up':   'animus-slide-up 300ms cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
};
