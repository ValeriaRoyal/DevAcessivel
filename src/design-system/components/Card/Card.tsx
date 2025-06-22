import React from 'react';
import styled, { css } from 'styled-components';
import { colors, borderRadius, shadows, spacing } from '../../tokens';

// Tipos de variantes de card
export type CardVariant = 'elevated' | 'outlined' | 'filled';

// Props do componente Card
export interface CardProps {
  variant?: CardVariant;
  padding?: keyof typeof spacing | 'none';
  borderRadius?: keyof typeof borderRadius;
  backgroundColor?: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  id?: string;
  role?: string;
  tabIndex?: number;
}

// Estilos para variantes de card
const variantStyles = {
  elevated: css`
    background-color: ${colors.neutral[0]};
    box-shadow: ${shadows.md};
    border: none;
  `,
  outlined: css`
    background-color: transparent;
    box-shadow: none;
    border: 1px solid ${colors.neutral[300]};
  `,
  filled: css`
    background-color: ${colors.neutral[100]};
    box-shadow: none;
    border: none;
  `,
};

// Componente estilizado
const StyledCard = styled.div<{
  $variant: CardVariant;
  $padding: keyof typeof spacing | 'none';
  $borderRadius: keyof typeof borderRadius;
  $backgroundColor?: string;
  $isClickable: boolean;
}>`
  ${props => variantStyles[props.$variant]}
  
  /* Padding */
  padding: ${props => props.$padding === 'none' ? '0' : spacing[props.$padding]};
  
  /* Border radius */
  border-radius: ${props => borderRadius[props.$borderRadius]};
  
  /* Background color (sobrescreve a variante se fornecido) */
  ${props => props.$backgroundColor && `
    background-color: ${props.$backgroundColor};
  `}
  
  /* Estilos para cards clicáveis */
  ${props => props.$isClickable && css`
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: ${shadows.lg};
    }
    
    &:active {
      transform: translateY(0);
    }
    
    &:focus-visible {
      outline: 3px solid ${colors.primary[500]};
      outline-offset: 2px;
    }
  `}
`;

// Componente Card
export const Card: React.FC<CardProps> = ({
  variant = 'elevated',
  padding = '4',
  borderRadius = 'md',
  backgroundColor,
  children,
  onClick,
  className,
  id,
  role,
  tabIndex,
}) => {
  // Determinar se o card é clicável
  const isClickable = !!onClick;
  
  // Determinar o papel ARIA apropriado
  const ariaRole = role || (isClickable ? 'button' : undefined);
  
  // Determinar o tabIndex apropriado
  const cardTabIndex = tabIndex !== undefined ? tabIndex : (isClickable ? 0 : undefined);
  
  return (
    <StyledCard
      $variant={variant}
      $padding={padding}
      $borderRadius={borderRadius}
      $backgroundColor={backgroundColor}
      $isClickable={isClickable}
      onClick={onClick}
      className={className}
      id={id}
      role={ariaRole}
      tabIndex={cardTabIndex}
      onKeyDown={isClickable ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      } : undefined}
    >
      {children}
    </StyledCard>
  );
};

export default Card;
