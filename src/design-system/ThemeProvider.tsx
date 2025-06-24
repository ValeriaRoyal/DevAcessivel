import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

// Versão simplificada do ThemeProvider para deploy
const defaultTheme = {
  colors: {
    primary: {
      500: '#3B5BCC'
    },
    neutral: {
      50: '#FFFFFF',
      900: '#000000'
    }
  }
};

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
  
  return (
    <ThemeContext.Provider
      value={{
        theme: defaultTheme,
        themeMode,
        setThemeMode,
      }}
    >
      <StyledThemeProvider theme={defaultTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
