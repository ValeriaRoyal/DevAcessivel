import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
// Importação do axe-core para testes de acessibilidade em desenvolvimento

// Configuração do axe-core apenas em ambiente de desenvolvimento
if (process.env.NODE_ENV !== 'production') {
  import('@axe-core/react').then(axe => {
    const ReactDOM = { createRoot };
    axe.default(StrictMode, ReactDOM, 1000);
    console.log('Axe-core está monitorando violações de acessibilidade.');
  }).catch(err => {
    console.error('Erro ao carregar axe-core:', err);
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
