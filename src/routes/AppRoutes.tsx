import { Routes, Route } from 'react-router-dom';

// Página temporária para demonstração
const TempPage = ({ title }: { title: string }) => (
  <div>
    <h1>{title}</h1>
    <p>Esta é uma página temporária para demonstração.</p>
  </div>
);

/**
 * Componente de rotas da aplicação
 */
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<TempPage title="Página Inicial" />} />
      <Route path="/categorias" element={<TempPage title="Categorias" />} />
      <Route path="/sobre" element={<TempPage title="Sobre" />} />
      <Route path="*" element={<TempPage title="Página não encontrada" />} />
    </Routes>
  );
};
