import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { GlobalStyles } from './styles/GlobalStyles';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { AppRoutes } from './routes/AppRoutes';
import styled from 'styled-components';

// Estilos para o container principal
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

// Estilos para o conteúdo principal
const Main = styled.main`
  flex: 1;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <GlobalStyles />
        <AppContainer>
          <Header />
          <Main id="main-content">
            <AppRoutes />
          </Main>
          <Footer />
        </AppContainer>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
