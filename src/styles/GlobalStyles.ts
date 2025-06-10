import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    /* Tema claro (padrão) */
    --color-primary: #0066cc;
    --color-secondary: #6c757d;
    --color-background: #ffffff;
    --color-background-alt: #f8f9fa;
    --color-background-hover: #e9ecef;
    --color-text: #212529;
    --color-text-secondary: #6c757d;
    --color-text-on-primary: #ffffff;
    --color-text-on-secondary: #ffffff;
    --color-text-placeholder: #adb5bd;
    --color-border: #dee2e6;
    --color-focus: #0066cc;
    --color-card-bg: #ffffff;
    --color-code-bg: #f8f9fa;
    --color-code-header-bg: #e9ecef;
    --color-input-bg: #ffffff;
    --color-success: #198754;
    --color-success-bg: #d1e7dd;
    --color-warning: #ffc107;
    --color-warning-bg: #fff3cd;
    --color-error: #dc3545;
    --color-error-bg: #f8d7da;
  }
  
  /* Tema escuro */
  .theme-dark {
    --color-primary: #3b82f6;
    --color-secondary: #6c757d;
    --color-background: #121212;
    --color-background-alt: #1e1e1e;
    --color-background-hover: #2d2d2d;
    --color-text: #e5e5e5;
    --color-text-secondary: #adb5bd;
    --color-text-on-primary: #ffffff;
    --color-text-on-secondary: #ffffff;
    --color-text-placeholder: #6c757d;
    --color-border: #2d2d2d;
    --color-focus: #3b82f6;
    --color-card-bg: #1e1e1e;
    --color-code-bg: #2d2d2d;
    --color-code-header-bg: #1e1e1e;
    --color-input-bg: #2d2d2d;
    --color-success: #10b981;
    --color-success-bg: #064e3b;
    --color-warning: #f59e0b;
    --color-warning-bg: #78350f;
    --color-error: #ef4444;
    --color-error-bg: #7f1d1d;
  }
  
  /* Tema de alto contraste */
  .theme-high-contrast {
    --color-primary: #ffff00;
    --color-secondary: #ffffff;
    --color-background: #000000;
    --color-background-alt: #121212;
    --color-background-hover: #333333;
    --color-text: #ffffff;
    --color-text-secondary: #ffffff;
    --color-text-on-primary: #000000;
    --color-text-on-secondary: #000000;
    --color-text-placeholder: #ffffff;
    --color-border: #ffffff;
    --color-focus: #ffff00;
    --color-card-bg: #121212;
    --color-code-bg: #121212;
    --color-code-header-bg: #333333;
    --color-input-bg: #121212;
    --color-success: #00ff00;
    --color-success-bg: #003300;
    --color-warning: #ffff00;
    --color-warning-bg: #333300;
    --color-error: #ff0000;
    --color-error-bg: #330000;
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: var(--color-background);
    color: var(--color-text);
    line-height: 1.5;
    transition: background-color 0.3s, color 0.3s;
    min-height: 100vh;
  }
  
  /* Classe para elementos visualmente escondidos mas acessíveis para leitores de tela */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
  
  /* Foco visível para todos os elementos interativos */
  a:focus-visible,
  button:focus-visible,
  input:focus-visible,
  select:focus-visible,
  textarea:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
  
  /* Remover aparência padrão de botões em iOS */
  button,
  input[type="button"],
  input[type="reset"],
  input[type="submit"] {
    -webkit-appearance: none;
    appearance: none;
  }
  
  /* Melhorar legibilidade de texto em telas pequenas */
  @media (max-width: 768px) {
    html {
      font-size: 14px;
    }
  }
  
  /* Melhorar contraste para usuários com preferência de contraste aumentado */
  @media (prefers-contrast: more) {
    :root {
      --color-focus: #000000;
      --color-border: #000000;
    }
    
    a, button {
      text-decoration: underline;
    }
  }
  
  /* Reduzir movimento para usuários com preferência de movimento reduzido */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;
