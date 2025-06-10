import { ButtonHTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

const StyledButton = styled.button<Omit<ButtonProps, 'children'>>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  
  /* Variantes */
  ${props => {
    switch (props.variant) {
      case 'secondary':
        return `
          background-color: var(--color-secondary);
          color: var(--color-text-on-secondary);
          border: none;
        `;
      case 'outline':
        return `
          background-color: transparent;
          color: var(--color-primary);
          border: 1px solid var(--color-primary);
        `;
      case 'text':
        return `
          background-color: transparent;
          color: var(--color-primary);
          border: none;
          padding-left: 8px;
          padding-right: 8px;
        `;
      default: // primary
        return `
          background-color: var(--color-primary);
          color: var(--color-text-on-primary);
          border: none;
        `;
    }
  }}
  
  /* Tamanhos */
  ${props => {
    switch (props.size) {
      case 'small':
        return `
          padding: 8px 16px;
          font-size: 0.875rem;
        `;
      case 'large':
        return `
          padding: 16px 24px;
          font-size: 1.125rem;
        `;
      default: // medium
        return `
          padding: 12px 20px;
          font-size: 1rem;
        `;
    }
  }}
  
  /* Estados */
  &:hover:not(:disabled) {
    filter: brightness(1.1);
  }
  
  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
  
  &:active:not(:disabled) {
    transform: translateY(1px);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  /* Ordem dos ícones */
  ${props => props.iconPosition === 'right' && `
    flex-direction: row-reverse;
  `}
`;

/**
 * Componente de botão acessível
 */
export const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  icon,
  iconPosition = 'left',
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      iconPosition={iconPosition}
      {...props}
    >
      {icon && icon}
      {children}
    </StyledButton>
  );
};
