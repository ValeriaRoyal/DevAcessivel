import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../components/common/Button';

const NotFoundContainer = styled.div`
  text-align: center;
  padding: 3rem 1rem;
  max-width: 600px;
  margin: 0 auto;
`;

const NotFoundTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: var(--color-primary);
`;

const NotFoundCode = styled.div`
  font-size: 8rem;
  font-weight: 700;
  color: var(--color-text-secondary);
  opacity: 0.2;
  margin-bottom: 2rem;
`;

const NotFoundText = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: var(--color-text);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

/**
 * Página de erro 404 - Não encontrado
 */
export const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <NotFoundCode aria-hidden="true">404</NotFoundCode>
      <NotFoundTitle>Página não encontrada</NotFoundTitle>
      <NotFoundText>
        A página que você está procurando não existe ou foi movida.
      </NotFoundText>
      <ButtonContainer>
        <Button as={Link} to="/">
          Voltar para a página inicial
        </Button>
        <Button 
          as="a" 
          href="mailto:contato@devacessivel.com.br" 
          variant="outline"
        >
          Reportar problema
        </Button>
      </ButtonContainer>
    </NotFoundContainer>
  );
};
