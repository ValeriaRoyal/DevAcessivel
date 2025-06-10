import { ThemeProvider } from './contexts/ThemeContext';
import { GlobalStyles } from './styles/GlobalStyles';
import { ThemeToggle } from './components/common/ThemeToggle';
import styled from 'styled-components';

// Estilos para o container principal
const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

// Estilos para o cabeçalho
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

// Estilos para o título
const Title = styled.h1`
  color: var(--color-primary);
  margin: 0;
`;

// Estilos para o conteúdo principal
const Main = styled.main`
  background-color: var(--color-background-alt);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <AppContainer>
        <Header>
          <Title>DevAcessível</Title>
          <ThemeToggle />
        </Header>
        <Main>
          <h2>Plataforma de ensino de acessibilidade web</h2>
          <p>Bem-vindo ao DevAcessível! Esta é uma versão simplificada para teste.</p>
          <p>Experimente alternar entre os temas clicando no botão no canto superior direito.</p>
        </Main>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
