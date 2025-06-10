import { createContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark' | 'high-contrast';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  setTheme: () => {},
  toggleTheme: () => {},
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // Verifica preferência do usuário no localStorage ou preferência do sistema
  const getInitialTheme = (): Theme => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && ['light', 'dark', 'high-contrast'].includes(savedTheme)) {
      return savedTheme;
    }
    
    // Verifica preferência do sistema
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    return 'light';
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  // Atualiza o localStorage e aplica classe ao body quando o tema muda
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = `theme-${theme}`;
    
    // Anuncia a mudança de tema para leitores de tela
    const themeAnnouncement = document.getElementById('theme-announcement');
    if (themeAnnouncement) {
      themeAnnouncement.textContent = `Tema alterado para ${
        theme === 'light' ? 'claro' : 
        theme === 'dark' ? 'escuro' : 
        'alto contraste'
      }`;
    }
  }, [theme]);

  // Alterna entre temas
  const toggleTheme = () => {
    setTheme(current => {
      if (current === 'light') return 'dark';
      if (current === 'dark') return 'high-contrast';
      return 'light';
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {/* Elemento para anúncios de mudança de tema para leitores de tela */}
      <div 
        id="theme-announcement" 
        role="status" 
        aria-live="polite" 
        className="sr-only"
      ></div>
      {children}
    </ThemeContext.Provider>
  );
};
