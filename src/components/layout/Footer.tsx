import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: var(--color-background-alt);
  padding: 2rem 1rem;
  margin-top: 3rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FooterTitle = styled.h2`
  font-size: 1.25rem;
  margin: 0 0 1rem;
  color: var(--color-text);
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FooterItem = styled.li`
  font-size: 0.875rem;
`;

const FooterLink = styled(Link)`
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: color 0.2s;
  
  &:hover {
    color: var(--color-primary);
    text-decoration: underline;
  }
  
  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`;

const ExternalLink = styled.a`
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: color 0.2s;
  
  &:hover {
    color: var(--color-primary);
    text-decoration: underline;
  }
  
  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid var(--color-border);
  color: var(--color-text-secondary);
  font-size: 0.875rem;
`;

/**
 * Componente de rodapé com links úteis e informações de contato
 */
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>DevAcessível</FooterTitle>
          <p>
            Plataforma dedicada a ensinar boas práticas de acessibilidade web para desenvolvedores.
          </p>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Navegação</FooterTitle>
          <FooterList>
            <FooterItem>
              <FooterLink to="/">Início</FooterLink>
            </FooterItem>
            <FooterItem>
              <FooterLink to="/categorias">Categorias</FooterLink>
            </FooterItem>
            <FooterItem>
              <FooterLink to="/sobre">Sobre</FooterLink>
            </FooterItem>
          </FooterList>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Recursos</FooterTitle>
          <FooterList>
            <FooterItem>
              <ExternalLink 
                href="https://www.w3.org/WAI/WCAG21/quickref/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                WCAG 2.1 Quick Reference
              </ExternalLink>
            </FooterItem>
            <FooterItem>
              <ExternalLink 
                href="https://www.w3.org/WAI/fundamentals/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                W3C Web Accessibility Initiative
              </ExternalLink>
            </FooterItem>
            <FooterItem>
              <ExternalLink 
                href="https://developer.mozilla.org/pt-BR/docs/Web/Accessibility" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                MDN Web Docs - Acessibilidade
              </ExternalLink>
            </FooterItem>
          </FooterList>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        © {currentYear} DevAcessível. Todos os direitos reservados.
      </Copyright>
    </FooterContainer>
  );
};
