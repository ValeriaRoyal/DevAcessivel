import { useState } from 'react';
import styled from 'styled-components';

interface SkipLinkProps {
  targetId: string;
  text?: string;
}

const StyledSkipLink = styled.a`
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--color-primary);
  color: var(--color-text-on-primary);
  padding: 8px 16px;
  z-index: 100;
  text-decoration: none;
  transition: top 0.3s;
  
  &:focus {
    top: 0;
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`;

/**
 * Componente de link de salto para acessibilidade
 * Permite que usuários de teclado pulem diretamente para o conteúdo principal
 */
export const SkipLink = ({ targetId, text = "Pular para o conteúdo principal" }: SkipLinkProps) => {
  const [isFocused, setIsFocused] = useState(false);
  
  return (
    <StyledSkipLink 
      href={`#${targetId}`}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className={isFocused ? 'focused' : ''}
    >
      {text}
    </StyledSkipLink>
  );
};
