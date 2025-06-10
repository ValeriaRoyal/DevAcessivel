import { createContext, useState, useEffect, ReactNode } from 'react';

// Tipos de tema disponíveis
type Theme = 'light' | 'dark' | 'high-contrast';

// Interface do contexto de tema
interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

// Criação do contexto com valores padrão
export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  setTheme: () => {},
  toggleTheme: () => {},
});

// Props do provedor de tema
interface ThemeProviderProps {
  children: ReactNode;
}

// Componente provedor de tema
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // Função para obter o tema inicial com base nas preferências do usuário
  const getInitialTheme = (): Theme => {
    // Verifica se há um tema salvo no localStorage
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && ['light', 'dark', 'high-contrast'].includes(savedTheme)) {
      return savedTheme;
    }
    
    // Verifica preferência do sistema para modo escuro
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    // Padrão: tema claro
    return 'light';
  };

  // Estado para armazenar o tema atual
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  // Efeito para aplicar o tema quando ele mudar
  useEffect(() => {
    // Salva o tema no localStorage
    localStorage.setItem('theme', theme);
    
    // Aplica a classe do tema ao elemento body
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

  // Função para alternar entre os temas
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
