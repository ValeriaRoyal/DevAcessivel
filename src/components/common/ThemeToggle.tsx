import { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../contexts/ThemeContext';

// Estilos do botão de alternância de tema
const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-text);
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
  font-size: 1.25rem;
  
  &:hover {
    background-color: var(--color-background-hover);
  }
  
  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`;

/**
 * Componente para alternar entre os temas disponíveis
 */
export const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  // Determina o ícone e o texto do botão com base no tema atual
  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return '🌙'; // Lua para mudar para tema escuro
      case 'dark':
        return '☀️'; // Sol para mudar para tema claro
      default:
        return '🌙';
    }
  };
  
  const getNextThemeName = () => {
    switch (theme) {
      case 'light':
        return 'escuro';
      case 'dark':
        return 'claro';
      default:
        return 'escuro';
    }
  };
  
  return (
    <ToggleButton
      onClick={toggleTheme}
      aria-label={`Alternar para tema ${getNextThemeName()}`}
      title={`Alternar para tema ${getNextThemeName()}`}
    >
      {getThemeIcon()}
    </ToggleButton>
  );
};
