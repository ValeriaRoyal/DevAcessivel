import { colors } from './colors';

/**
 * Tokens semânticos para cores
 * 
 * Estes tokens separam os valores visuais (cores específicas) dos seus usos semânticos,
 * facilitando a manutenção e adaptação para diferentes temas.
 */
export const semanticColors = {
  // Tokens para elementos de interface
  interface: {
    // Fundos
    background: {
      primary: colors.neutral[0],
      secondary: colors.neutral[50],
      tertiary: colors.neutral[100],
      brand: colors.primary[50],
      inverse: colors.neutral[900],
    },
    
    // Elementos de superfície
    surface: {
      default: colors.neutral[0],
      raised: colors.neutral[0],
      overlay: colors.neutral[0],
      sunken: colors.neutral[100],
    },
    
    // Bordas
    border: {
      default: colors.neutral[300],
      strong: colors.neutral[600],
      subtle: colors.neutral[200],
      focus: colors.primary[500],
      disabled: colors.neutral[200],
    },
    
    // Sombras
    shadow: {
      default: '0 1px 3px rgba(0, 0, 0, 0.1)',
      hover: '0 4px 6px rgba(0, 0, 0, 0.12)',
      active: '0 1px 2px rgba(0, 0, 0, 0.15)',
      focus: '0 0 0 3px rgba(24, 144, 255, 0.4)',
    },
  },
  
  // Tokens para texto
  text: {
    primary: colors.neutral[900],
    secondary: colors.neutral[700],
    tertiary: colors.neutral[500],
    disabled: colors.neutral[400],
    inverse: colors.neutral[0],
    brand: colors.primary[700],
    error: colors.semantic.error.dark,
    success: colors.semantic.success.dark,
    warning: colors.semantic.warning.dark,
    info: colors.semantic.info.dark,
    link: colors.primary[600],
    linkHover: colors.primary[700],
    code: colors.neutral[800],
  },
  
  // Tokens para ações
  action: {
    primary: {
      background: colors.primary[500],
      backgroundHover: colors.primary[600],
      backgroundActive: colors.primary[700],
      backgroundDisabled: colors.neutral[200],
      text: colors.neutral[0],
      textDisabled: colors.neutral[500],
      border: 'transparent',
      borderHover: 'transparent',
    },
    secondary: {
      background: colors.secondary[500],
      backgroundHover: colors.secondary[600],
      backgroundActive: colors.secondary[700],
      backgroundDisabled: colors.neutral[200],
      text: colors.neutral[0],
      textDisabled: colors.neutral[500],
      border: 'transparent',
      borderHover: 'transparent',
    },
    tertiary: {
      background: 'transparent',
      backgroundHover: colors.neutral[100],
      backgroundActive: colors.neutral[200],
      backgroundDisabled: 'transparent',
      text: colors.primary[500],
      textDisabled: colors.neutral[400],
      border: colors.neutral[300],
      borderHover: colors.primary[500],
    },
    danger: {
      background: colors.semantic.error.default,
      backgroundHover: colors.semantic.error.dark,
      backgroundActive: colors.semantic.error.dark,
      backgroundDisabled: colors.neutral[200],
      text: colors.neutral[0],
      textDisabled: colors.neutral[500],
      border: 'transparent',
      borderHover: 'transparent',
    },
    ghost: {
      background: 'transparent',
      backgroundHover: colors.neutral[100],
      backgroundActive: colors.neutral[200],
      backgroundDisabled: 'transparent',
      text: colors.primary[500],
      textDisabled: colors.neutral[400],
      border: 'transparent',
      borderHover: 'transparent',
    },
  },
  
  // Tokens para feedback
  feedback: {
    success: {
      background: colors.semantic.success.light,
      border: colors.semantic.success.default,
      text: colors.semantic.success.dark,
      icon: colors.semantic.success.default,
    },
    warning: {
      background: colors.semantic.warning.light,
      border: colors.semantic.warning.default,
      text: colors.semantic.warning.dark,
      icon: colors.semantic.warning.default,
    },
    error: {
      background: colors.semantic.error.light,
      border: colors.semantic.error.default,
      text: colors.semantic.error.dark,
      icon: colors.semantic.error.default,
    },
    info: {
      background: colors.semantic.info.light,
      border: colors.semantic.info.default,
      text: colors.semantic.info.dark,
      icon: colors.semantic.info.default,
    },
  },
  
  // Tokens para estados
  state: {
    focus: {
      outline: colors.primary[500],
      outlineWidth: '3px',
      outlineOffset: '2px',
    },
    hover: {
      overlay: 'rgba(0, 0, 0, 0.05)',
    },
    active: {
      overlay: 'rgba(0, 0, 0, 0.1)',
    },
    selected: {
      background: colors.primary[50],
      border: colors.primary[500],
      text: colors.primary[700],
    },
    disabled: {
      background: colors.neutral[100],
      text: colors.neutral[400],
      border: colors.neutral[200],
    },
  },
  
  // Tokens para acessibilidade
  accessibility: {
    focusHighlight: colors.primary[500],
    keyboardFocusIndicator: colors.primary[500],
    highContrast: {
      text: '#FFFFFF',
      background: '#000000',
      border: '#FFFFFF',
      link: '#FFFF00',
      button: '#00FFFF',
      focus: '#FF00FF',
    },
  },
};

/**
 * Tokens semânticos para espaçamento
 */
export const semanticSpacing = {
  // Espaçamento para componentes
  component: {
    xxsmall: '0.25rem', // 4px
    xsmall: '0.5rem',   // 8px
    small: '0.75rem',   // 12px
    medium: '1rem',     // 16px
    large: '1.5rem',    // 24px
    xlarge: '2rem',     // 32px
    xxlarge: '3rem',    // 48px
  },
  
  // Espaçamento para layout
  layout: {
    xxsmall: '1rem',    // 16px
    xsmall: '1.5rem',   // 24px
    small: '2rem',      // 32px
    medium: '3rem',     // 48px
    large: '4rem',      // 64px
    xlarge: '6rem',     // 96px
    xxlarge: '8rem',    // 128px
  },
  
  // Espaçamento para conteúdo
  content: {
    xxsmall: '0.25rem', // 4px
    xsmall: '0.5rem',   // 8px
    small: '0.75rem',   // 12px
    medium: '1rem',     // 16px
    large: '1.5rem',    // 24px
    xlarge: '2rem',     // 32px
    xxlarge: '3rem',    // 48px
  },
  
  // Espaçamento para acessibilidade
  accessibility: {
    touchTarget: '2.75rem', // 44px (mínimo para alvos de toque)
    focusRing: '0.1875rem', // 3px (largura do anel de foco)
    focusOffset: '0.125rem', // 2px (offset do anel de foco)
    interactiveGap: '0.5rem', // 8px (espaço mínimo entre elementos interativos)
  },
};

/**
 * Tokens semânticos para tipografia
 */
export const semanticTypography = {
  // Estilos de texto por função
  heading: {
    hero: {
      fontFamily: 'Inter, sans-serif',
      fontSize: '3.75rem', // 60px
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    display: {
      fontFamily: 'Inter, sans-serif',
      fontSize: '3rem', // 48px
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    title1: {
      fontFamily: 'Inter, sans-serif',
      fontSize: '2.25rem', // 36px
      fontWeight: 700,
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
    },
    title2: {
      fontFamily: 'Inter, sans-serif',
      fontSize: '1.875rem', // 30px
      fontWeight: 700,
      lineHeight: 1.3,
      letterSpacing: '-0.005em',
    },
    title3: {
      fontFamily: 'Inter, sans-serif',
      fontSize: '1.5rem', // 24px
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: '0',
    },
    subtitle1: {
      fontFamily: 'Inter, sans-serif',
      fontSize: '1.25rem', // 20px
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: '0',
    },
    subtitle2: {
      fontFamily: 'Inter, sans-serif',
      fontSize: '1.125rem', // 18px
      fontWeight: 600,
      lineHeight: 1.5,
      letterSpacing: '0',
    },
  },
  
  // Estilos de texto para corpo
  body: {
    large: {
      fontFamily: 'Inter, sans-serif',
      fontSize: '1.125rem', // 18px
      fontWeight: 400,
      lineHeight: 1.6,
      letterSpacing: '0',
    },
    medium: {
      fontFamily: 'Inter, sans-serif',
      fontSize: '1rem', // 16px
      fontWeight: 400,
      lineHeight: 1.6,
      letterSpacing: '0',
    },
    small: {
      fontFamily: 'Inter, sans-serif',
      fontSize: '0.875rem', // 14px
      fontWeight: 400,
      lineHeight: 1.6,
      letterSpacing: '0',
    },
    xsmall: {
      fontFamily: 'Inter, sans-serif',
      fontSize: '0.75rem', // 12px
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0.01em',
    },
  },
  
  // Estilos para elementos de interface
  ui: {
    button: {
      fontFamily: 'Inter, sans-serif',
      fontSize: '0.875rem', // 14px
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: '0.01em',
    },
    caption: {
      fontFamily: 'Inter, sans-serif',
      fontSize: '0.75rem', // 12px
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0.01em',
    },
    overline: {
      fontFamily: 'Inter, sans-serif',
      fontSize: '0.75rem', // 12px
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
    },
    label: {
      fontFamily: 'Inter, sans-serif',
      fontSize: '0.875rem', // 14px
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: '0.01em',
    },
    code: {
      fontFamily: 'Fira Code, monospace',
      fontSize: '0.875rem', // 14px
      fontWeight: 400,
      lineHeight: 1.6,
      letterSpacing: '0',
    },
  },
  
  // Estilos para acessibilidade
  accessibility: {
    screenReader: {
      position: 'absolute',
      width: '1px',
      height: '1px',
      padding: '0',
      margin: '-1px',
      overflow: 'hidden',
      clip: 'rect(0, 0, 0, 0)',
      whiteSpace: 'nowrap',
      borderWidth: '0',
    },
    largeText: {
      fontSize: '1.2em',
      lineHeight: 1.6,
    },
  },
};

/**
 * Tokens semânticos para bordas
 */
export const semanticBorders = {
  radius: {
    none: '0',
    small: '0.125rem', // 2px
    medium: '0.25rem',  // 4px
    large: '0.5rem',    // 8px
    xlarge: '0.75rem',  // 12px
    pill: '9999px',
    circle: '50%',
  },
  
  width: {
    none: '0',
    thin: '1px',
    medium: '2px',
    thick: '4px',
    focus: '3px',
  },
  
  style: {
    solid: 'solid',
    dashed: 'dashed',
    dotted: 'dotted',
  },
};

/**
 * Tokens semânticos para elevação (sombras)
 */
export const semanticElevation = {
  none: 'none',
  low: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  medium: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  high: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  highest: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  focus: '0 0 0 3px rgba(24, 144, 255, 0.4)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
};

/**
 * Tokens semânticos para animações
 */
export const semanticMotion = {
  duration: {
    instant: '0ms',
    fast: '150ms',
    normal: '250ms',
    slow: '400ms',
    slower: '600ms',
  },
  
  easing: {
    standard: 'cubic-bezier(0.4, 0, 0.2, 1)',
    entrance: 'cubic-bezier(0, 0, 0.2, 1)',
    exit: 'cubic-bezier(0.4, 0, 1, 1)',
    emphasized: 'cubic-bezier(0.2, 0, 0, 1)',
  },
  
  transition: {
    fade: 'opacity 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    scale: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    slide: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    color: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    background: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    border: 'border-color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    shadow: 'box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    all: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  
  // Configurações para preferências de redução de movimento
  reducedMotion: {
    duration: '50ms',
    easing: 'linear',
  },
};

// Exportar todos os tokens semânticos
export const semanticTokens = {
  colors: semanticColors,
  spacing: semanticSpacing,
  typography: semanticTypography,
  borders: semanticBorders,
  elevation: semanticElevation,
  motion: semanticMotion,
};
