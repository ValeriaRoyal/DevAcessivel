import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ThemeToggle } from '../common/ThemeToggle';

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled.header`
  background-color: var(--color-primary);
  color: white;
  padding: 1rem 0;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  text-decoration: none;
  
  &:hover, &:focus {
    text-decoration: underline;
  }
  
  &:focus-visible {
    outline: 2px solid white;
    outline-offset: 4px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  position: relative;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  
  &:hover, &:focus {
    text-decoration: underline;
  }
  
  &:focus-visible {
    outline: 2px solid white;
    outline-offset: 4px;
  }
`;

const AccessibilityButton = styled.button`
  background: none;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 1rem;
  transition: all 0.2s ease;
  position: relative;
  padding: 0;
  opacity: 0.9;
  
  &:hover, &:focus {
    transform: scale(1.1);
    opacity: 1;
  }
  
  &:focus-visible {
    outline: 2px solid white;
    outline-offset: 4px;
  }
  
  img {
    width: 32px;
    height: 32px;
  }
`;

const Main = styled.main`
  flex: 1;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const Footer = styled.footer`
  background-color: var(--color-background-alt);
  padding: 1.5rem 0;
  margin-top: 2rem;
  text-align: center;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
  color: var(--color-text-secondary);
  font-size: 0.875rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  p {
    margin: 0.5rem 0;
    text-align: center;
    max-width: 100%; /* Sobrescreve o limite de largura global */
  }
`;

const AccessibilityMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  padding: 1.25rem;
  margin-top: 0.75rem;
  z-index: 100;
  width: 250px;
  color: var(--color-text);
  
  /* Adiciona uma seta no topo do menu */
  &::before {
    content: "";
    position: absolute;
    top: -8px;
    right: 16px;
    width: 16px;
    height: 16px;
    background-color: white;
    transform: rotate(45deg);
    box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.05);
  }
  
  /* Tema escuro */
  .theme-dark & {
    background-color: var(--color-card-bg);
    
    &::before {
      background-color: var(--color-card-bg);
    }
  }
  
  /* Tema de alto contraste */
  .theme-high-contrast & {
    background-color: black;
    border: 2px solid white;
    
    &::before {
      background-color: black;
      border-left: 2px solid white;
      border-top: 2px solid white;
      right: 15px;
    }
  }
`;

const AccessibilityMenuTitle = styled.h3`
  margin-bottom: 1rem;
  font-size: 1rem;
  color: var(--color-text);
`;

const AccessibilityOption = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
`;

const AccessibilityOptionLabel = styled.span`
  margin-left: 0.75rem;
  font-size: 0.875rem;
`;

const AccessibilityMenuButton = styled.button`
  background-color: var(--color-background-alt);
  border: 1px solid var(--color-border);
  color: var(--color-text);
  width: 36px;
  height: 36px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: bold;
  
  &:hover, &:focus {
    background-color: var(--color-primary);
    color: white;
    border-color: var(--color-primary);
  }
  
  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [accessibilityMenuOpen, setAccessibilityMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  const toggleAccessibilityMenu = () => {
    setAccessibilityMenuOpen(!accessibilityMenuOpen);
  };
  
  // Fechar o menu quando clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current && 
        buttonRef.current && 
        !menuRef.current.contains(event.target as Node) && 
        !buttonRef.current.contains(event.target as Node)
      ) {
        setAccessibilityMenuOpen(false);
      }
    };
    
    if (accessibilityMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [accessibilityMenuOpen]);
  
  // Fechar o menu quando pressionar ESC
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setAccessibilityMenuOpen(false);
      }
    };
    
    if (accessibilityMenuOpen) {
      document.addEventListener('keydown', handleEscKey);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [accessibilityMenuOpen]);
  
  return (
    <LayoutContainer>
      <Header>
        <HeaderContent>
          <Logo to="/">DevAcessível</Logo>
          <Nav aria-label="Navegação principal">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/categorias">Categorias</NavLink>
            <NavLink to="/sobre">Sobre</NavLink>
            <ThemeToggle />
            <AccessibilityButton 
              ref={buttonRef}
              aria-label="Abrir menu de acessibilidade"
              onClick={toggleAccessibilityMenu}
              aria-expanded={accessibilityMenuOpen}
              aria-controls="accessibility-menu"
            >
              <img 
                src="/acessibilidade_sem_contraste.svg" 
                alt="" 
                width="24" 
                height="24" 
                aria-hidden="true"
              />
            </AccessibilityButton>
            {accessibilityMenuOpen && (
              <AccessibilityMenu id="accessibility-menu" ref={menuRef}>
                <AccessibilityMenuTitle>Opções de Acessibilidade</AccessibilityMenuTitle>
                <AccessibilityOption>
                  <AccessibilityMenuButton 
                    aria-label="Aumentar tamanho do texto"
                    onClick={() => document.body.style.fontSize = "larger"}
                  >
                    A+
                  </AccessibilityMenuButton>
                  <AccessibilityOptionLabel>Aumentar texto</AccessibilityOptionLabel>
                </AccessibilityOption>
                <AccessibilityOption>
                  <AccessibilityMenuButton 
                    aria-label="Diminuir tamanho do texto"
                    onClick={() => document.body.style.fontSize = "smaller"}
                  >
                    A-
                  </AccessibilityMenuButton>
                  <AccessibilityOptionLabel>Diminuir texto</AccessibilityOptionLabel>
                </AccessibilityOption>
                <AccessibilityOption>
                  <AccessibilityMenuButton 
                    aria-label="Alternar contraste"
                    onClick={() => document.body.classList.toggle('theme-high-contrast')}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10v-20z"/>
                    </svg>
                  </AccessibilityMenuButton>
                  <AccessibilityOptionLabel>Alto contraste</AccessibilityOptionLabel>
                </AccessibilityOption>
              </AccessibilityMenu>
            )}
          </Nav>
        </HeaderContent>
      </Header>
      
      <Main id="main-content">
        {children}
      </Main>
      
      <Footer>
        <FooterContent>
          <p>© {new Date().getFullYear()} DevAcessível - Todos os direitos reservados</p>
          <p>Desenvolvido com ❤️ por Valéria Regina</p>
        </FooterContent>
      </Footer>
    </LayoutContainer>
  );
};

export default Layout;
