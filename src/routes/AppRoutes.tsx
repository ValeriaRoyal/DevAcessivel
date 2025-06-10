import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { TipDetailPage } from '../pages/TipDetailPage';
import { CategoriesPage } from '../pages/CategoriesPage';
import { AboutPage } from '../pages/AboutPage';
import { NotFoundPage } from '../pages/NotFoundPage';

/**
 * Componente de rotas da aplicação
 */
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dica/:id" element={<TipDetailPage />} />
      <Route path="/categorias" element={<CategoriesPage />} />
      <Route path="/sobre" element={<AboutPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
