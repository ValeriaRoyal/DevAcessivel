import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './contexts/ThemeContext';
import { GlobalStyles } from './styles/GlobalStyles';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { AppRoutes } from './routes/AppRoutes';

/**
 * Componente principal da aplicação
 */
function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <BrowserRouter>
          <GlobalStyles />
          <div className="app-container">
            <Header />
            <AppRoutes />
            <Footer />
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
