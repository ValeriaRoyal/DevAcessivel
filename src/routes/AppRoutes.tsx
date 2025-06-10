import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { TipDetailPage } from '../pages/TipDetailPage';

/**
 * Componente de rotas da aplicação
 */
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dica/:id" element={<TipDetailPage />} />
      {/* Adicionar mais rotas conforme necessário */}
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};
