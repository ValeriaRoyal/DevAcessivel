import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

// Renderiza o componente App no elemento root
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
