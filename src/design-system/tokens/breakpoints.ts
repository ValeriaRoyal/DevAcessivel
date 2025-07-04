export const breakpoints = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

export const mediaQueries = {
  xs: `@media (min-width: ${breakpoints.xs})`,
  sm: `@media (min-width: ${breakpoints.sm})`,
  md: `@media (min-width: ${breakpoints.md})`,
  lg: `@media (min-width: ${breakpoints.lg})`,
  xl: `@media (min-width: ${breakpoints.xl})`,
  '2xl': `@media (min-width: ${breakpoints['2xl']})`,
  
  // Media queries para acessibilidade
  prefersReducedMotion: '@media (prefers-reduced-motion: reduce)',
  prefersColorSchemeLight: '@media (prefers-color-scheme: light)',
  prefersColorSchemeDark: '@media (prefers-color-scheme: dark)',
  highContrast: '@media (forced-colors: active)',
};
