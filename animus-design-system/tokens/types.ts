/**
 * Animus Design System — TypeScript Token Types
 */

export interface ColorToken {
  default: string;
  bright: string;
  dim: string;
  muted: string;
}

export interface SemanticColorToken extends ColorToken {
  surface: string;
}

export interface SurfaceTokens {
  bgBase: string;
  bgRaised: string;
  bgOverlay: string;
  bgSunken: string;
  bgInset: string;
  base: string;
  raised: string;
  overlay: string;
  elevated: string;
  sunken: string;
}

export interface TypographyLevel {
  size: string;
  weight: number;
  lineHeight: number;
  letterSpacing: string;
  textTransform?: string;
  label: string;
}

export interface AnimusTokens {
  colors: {
    primary: ColorToken;
    secondary: ColorToken;
    tertiary: ColorToken;
    surface: SurfaceTokens;
    glass: {
      bg: string;
      bgHeavy: string;
      border: string;
      borderBright: string;
      blur: string;
      blurHeavy: string;
    };
    border: {
      default: string;
      subtle: string;
      strong: string;
    };
    text: {
      primary: string;
      secondary: string;
      tertiary: string;
      inverse: string;
      onAccent: string;
      link: string;
    };
    semantic: {
      success: SemanticColorToken;
      warning: SemanticColorToken;
      error: SemanticColorToken;
      info: SemanticColorToken;
    };
  };
  typography: {
    fontFamily: { sans: string; mono: string };
    scale: Record<string, TypographyLevel>;
  };
  spacing: {
    base: number;
    scale: Record<number, string>;
    px: Record<number, number>;
  };
  radii: Record<string, string>;
  shadows: {
    elevation: Record<number, string>;
    glow: Record<string, string>;
    focusRing: string;
  };
  motion: {
    easing: Record<string, string>;
    duration: Record<string, number>;
  };
}

export type AnimusTheme = 'dark' | 'light';
