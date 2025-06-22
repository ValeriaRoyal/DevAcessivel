import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider, createGlobalStyle } from 'styled-components';
import { theme as defaultTheme } from './tokens';
import { animations, colors } from './tokens';

// Tipos de tema disponíveis
export type ThemeMode = 'light' | 'dark' | 'high-contrast';

// Contexto do tema
interface ThemeContextType {
  theme: typeof defaultTheme;
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Hook para usar o tema
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Estilos globais
const GlobalStyles = createGlobalStyle<{ theme: typeof defaultTheme }>`
  /* Reset CSS */
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  html, body {
    margin: 0;
    padding: 0;
    font-family: ${props => props.theme.fontFamilies.primary};
    font-size: 16px;
    line-height: 1.5;
    color: ${props => props.theme.colors.neutral[900]};
    background-color: ${props => props.theme.colors.neutral[50]};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  /* Definições de animações */
  ${animations.fadeIn}
  ${animations.fadeOut}
  ${animations.slideInFromRight}
  ${animations.slideInFromLeft}
  ${animations.slideInFromTop}
  ${animations.slideInFromBottom}
  ${animations.pulse}
  ${animations.spin}
  
  /* Acessibilidade - Foco visível */
  :focus-visible {
    outline: 3px solid ${props => props.theme.colors.primary[500]};
    outline-offset: 2px;
  }
  
  /* Reduzir animações se o usuário preferir */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

// Modificadores de tema para diferentes modos
const themeModifiers = {
  light: (baseTheme: typeof defaultTheme) => ({
    ...baseTheme,
    // Nenhuma modificação necessária para o tema claro (padrão)
  }),
  dark: (baseTheme: typeof defaultTheme) => ({
    ...baseTheme,
    colors: {
      ...baseTheme.colors,
      neutral: {
        0: '#121212',
        50: '#1E1E1E',
        100: '#2C2C2C',
        200: '#3A3A3A',
        300: '#484848',
        400: '#606060',
        500: '#808080',
        600: '#A0A0A0',
        700: '#C0C0C0',
        800: '#E0E0E0',
        900: '#F0F0F0',
        1000: '#FFFFFF',
      },
      // Ajustar outras cores para o tema escuro se necessário
    },
  }),
  'high-contrast': (baseTheme: typeof defaultTheme) => ({
    ...baseTheme,
    colors: {
      ...baseTheme.colors,
      primary: {
        ...baseTheme.colors.primary,
        500: '#FFFF00', // Amarelo de alto contraste
      },
      neutral: {
        0: '#000000',
        50: '#000000',
        100: '#000000',
        200: '#000000',
        300: '#000000',
        400: '#000000',
        500: '#FFFFFF',
        600: '#FFFFFF',
        700: '#FFFFFF',
        800: '#FFFFFF',
        900: '#FFFFFF',
        1000: '#FFFFFF',
      },
      // Usar cores de alto contraste
      highContrast: {
        background: '#000000',
        text: '#FFFFFF',
        links: '#FFFF00',
        buttons: '#00FFFF',
        focus: '#FF00FF',
      },
    },
  }),
};

// Props do provedor de tema
interface ThemeProviderProps {
  children: React.ReactNode;
  initialThemeMode?: ThemeMode;
}

// Componente provedor de tema
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  initialThemeMode = 'light',
}) => {
  // Estado para o modo do tema
  const [themeMode, setThemeMode] = useState<ThemeMode>(initialThemeMode);
  
  // Efeito para detectar preferências do sistema
  useEffect(() => {
    // Verificar se há uma preferência salva
    const savedTheme = localStorage.getItem('theme-mode') as ThemeMode | null;
    
    if (savedTheme) {
      setThemeMode(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setThemeMode('dark');
    }
    
    // Observar mudanças na preferência do sistema
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      // Só mudar automaticamente se não houver preferência salva
      if (!localStorage.getItem('theme-mode')) {
        setThemeMode(e.matches ? 'dark' : 'light');
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  // Efeito para salvar a preferência do usuário
  useEffect(() => {
    localStorage.setItem('theme-mode', themeMode);
    
    // Atualizar atributo data-theme no elemento HTML para CSS
    document.documentElement.setAttribute('data-theme', themeMode);
  }, [themeMode]);
  
  // Aplicar modificações ao tema base de acordo com o modo
  const modifiedTheme = themeModifiers[themeMode](defaultTheme);
  
  return (
    <ThemeContext.Provider
      value={{
        theme: modifiedTheme,
        themeMode,
        setThemeMode,
      }}
    >
      <StyledThemeProvider theme={modifiedTheme}>
        <GlobalStyles />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
