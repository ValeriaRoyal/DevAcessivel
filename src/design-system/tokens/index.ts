import { colors } from './colors';
import { 
  fontFamilies, 
  fontWeights, 
  fontSizes, 
  lineHeights, 
  letterSpacings, 
  textStyles 
} from './typography';
import { 
  spacing, 
  borderRadius, 
  borderWidth, 
  shadows 
} from './spacing';
import { 
  breakpoints, 
  mediaQueries 
} from './breakpoints';
import { 
  transitions, 
  animations 
} from './animation';
import { semanticTokens } from './semantic-tokens';

export * from './colors';
export * from './typography';
export * from './spacing';
export * from './breakpoints';
export * from './animation';
export * from './semantic-tokens';

// Tema padrão que combina todos os tokens
export const theme = {
  // Tokens de base
  colors,
  fontFamilies,
  fontWeights,
  fontSizes,
  lineHeights,
  letterSpacings,
  textStyles,
  spacing,
  borderRadius,
  borderWidth,
  shadows,
  breakpoints,
  mediaQueries,
  transitions,
  animations,
  
  // Tokens semânticos
  semantic: semanticTokens,
};
