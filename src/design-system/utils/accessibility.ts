import { css } from 'styled-components';

// Utilitário para esconder elementos visualmente mas mantê-los acessíveis para leitores de tela
export const visuallyHidden = css`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
`;

// Utilitário para criar foco visível e acessível
export const focusVisible = css`
  outline: 3px solid #1890FF;
  outline-offset: 2px;
  box-shadow: 0 0 0 3px rgba(24, 144, 255, 0.5);
`;

// Utilitário para remover o estilo de foco apenas para usuários de mouse
export const focusVisibleOnly = css`
  &:focus:not(:focus-visible) {
    outline: none;
    box-shadow: none;
  }
  &:focus-visible {
    ${focusVisible}
  }
`;

// Utilitário para garantir contraste adequado
export const ensureContrast = (foreground: string, background: string, minRatio = 4.5) => {
  // Esta é uma função simplificada. Em um ambiente real, você usaria
  // uma biblioteca como 'color' para calcular o contraste real.
  return css`
    color: ${foreground};
    background-color: ${background};
    /* Adicione lógica para verificar e ajustar o contraste se necessário */
  `;
};

// Utilitário para criar estilos de texto acessíveis
export const accessibleText = (size = '1rem', weight = 400, lineHeight = 1.5) => css`
  font-size: ${size};
  font-weight: ${weight};
  line-height: ${lineHeight};
  max-width: 65ch; /* Limita o comprimento da linha para melhor legibilidade */
  word-break: break-word;
  overflow-wrap: break-word;
`;

// Utilitário para criar espaçamento consistente para interações com toque
export const touchTarget = css`
  min-height: 44px;
  min-width: 44px;
  padding: 8px;
  
  /* Garante espaçamento adequado entre elementos interativos */
  & + & {
    margin-left: 8px;
  }
`;

// Utilitário para remover animações baseado na preferência do usuário
export const respectMotionPreferences = css`
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transition: none;
  }
`;

// Utilitário para criar estilos de alto contraste
export const highContrastMode = css`
  @media (forced-colors: active) {
    border: 1px solid ButtonText;
    background-color: ButtonFace;
    color: ButtonText;
    forced-color-adjust: none;
  }
`;

// Utilitário para criar estilos de texto que respeitam o modo escuro
export const darkModeText = css`
  @media (prefers-color-scheme: dark) {
    color: #f0f0f0;
  }
`;

// Utilitário para criar estilos de texto que respeitam o modo claro
export const lightModeText = css`
  @media (prefers-color-scheme: light) {
    color: #0f0f0f;
  }
`;
