import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeToggle } from '../common/ThemeToggle';
import { SkipLink } from '../common/SkipLink';

const HeaderContainer = styled.header`
  background-color: var(--color-background);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 10;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
    border-radius: 4px;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const NavList = styled.ul`
  display: flex;
  gap: 1.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
  
  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const NavItem = styled.li`
  font-size: 1rem;
`;

const NavLink = styled(Link)`
  color: var(--color-text);
  text-decoration: none;
  padding: 0.5rem;
  border-radius: 4px;
  transition: color 0.2s;
  
  &:hover {
    color: var(--color-primary);
  }
  
  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
  
  &.active {
    color: var(--color-primary);
    font-weight: 500;
  }
`;

/**
 * Componente de cabeçalho com navegação principal e controles de acessibilidade
 */
export const Header = () => {
  return (
    <>
      <SkipLink targetId="main-content" />
      <HeaderContainer>
        <HeaderContent>
          <Logo to="/">
            <span aria-hidden="true">🌐</span>
            <span>DevAcessível</span>
          </Logo>
          
          <Nav aria-label="Navegação principal">
            <NavList>
              <NavItem>
                <NavLink to="/">Início</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/categorias">Categorias</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/sobre">Sobre</NavLink>
              </NavItem>
            </NavList>
            
            <ThemeToggle />
          </Nav>
        </HeaderContent>
      </HeaderContainer>
    </>
  );
};
