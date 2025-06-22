import React from 'react';
import styled, { css } from 'styled-components';
import { colors, spacing, borderRadius, transitions, fontSizes, fontWeights, semanticColors } from '../../tokens';
import { focusVisibleOnly, touchTarget, respectMotionPreferences } from '../../utils/accessibility';

// Tipos de variantes do botão
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'danger' | 'success' | 'ghost';

// Tipos de tamanhos do botão
export type ButtonSize = 'small' | 'medium' | 'large';

// Props do componente Button
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  loadingText?: string;
  disabled?: boolean;
  children: React.ReactNode;
}

// Estilos base do botão
const baseButtonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: ${borderRadius.md};
  font-weight: ${fontWeights.medium};
  cursor: pointer;
  transition: all ${transitions.duration.normal} ${transitions.timing.easeInOut};
  position: relative;
  text-decoration: none;
  line-height: 1.5;
  
  /* Acessibilidade */
  ${touchTarget}
  ${focusVisibleOnly}
  ${respectMotionPreferences}
  
  /* Desabilitado */
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
  
  /* Espaçamento para ícones */
  svg {
    flex-shrink: 0;
  }
`;

// Estilos para variantes de botão usando tokens semânticos
const variantStyles = {
  primary: css`
    background-color: ${semanticColors.action.primary.background};
    color: ${semanticColors.action.primary.text};
    
    &:hover:not(:disabled) {
      background-color: ${semanticColors.action.primary.backgroundHover};
    }
    
    &:active:not(:disabled) {
      background-color: ${semanticColors.action.primary.backgroundActive};
    }
    
    &:disabled {
      background-color: ${semanticColors.action.primary.backgroundDisabled};
      color: ${semanticColors.action.primary.textDisabled};
    }
  `,
  secondary: css`
    background-color: ${semanticColors.action.secondary.background};
    color: ${semanticColors.action.secondary.text};
    
    &:hover:not(:disabled) {
      background-color: ${semanticColors.action.secondary.backgroundHover};
    }
    
    &:active:not(:disabled) {
      background-color: ${semanticColors.action.secondary.backgroundActive};
    }
    
    &:disabled {
      background-color: ${semanticColors.action.secondary.backgroundDisabled};
      color: ${semanticColors.action.secondary.textDisabled};
    }
  `,
  tertiary: css`
    background-color: ${semanticColors.action.tertiary.background};
    color: ${semanticColors.action.tertiary.text};
    border: 1px solid ${semanticColors.action.tertiary.border};
    
    &:hover:not(:disabled) {
      background-color: ${semanticColors.action.tertiary.backgroundHover};
      border-color: ${semanticColors.action.tertiary.borderHover};
    }
    
    &:active:not(:disabled) {
      background-color: ${semanticColors.action.tertiary.backgroundActive};
    }
    
    &:disabled {
      background-color: ${semanticColors.action.tertiary.backgroundDisabled};
      color: ${semanticColors.action.tertiary.textDisabled};
      border-color: ${semanticColors.action.tertiary.border};
    }
  `,
  danger: css`
    background-color: ${semanticColors.action.danger.background};
    color: ${semanticColors.action.danger.text};
    
    &:hover:not(:disabled) {
      background-color: ${semanticColors.action.danger.backgroundHover};
    }
    
    &:active:not(:disabled) {
      background-color: ${semanticColors.action.danger.backgroundActive};
    }
    
    &:disabled {
      background-color: ${semanticColors.action.danger.backgroundDisabled};
      color: ${semanticColors.action.danger.textDisabled};
    }
  `,
  success: css`
    background-color: ${semanticColors.feedback.success.icon};
    color: ${colors.neutral[0]};
    
    &:hover:not(:disabled) {
      background-color: ${semanticColors.feedback.success.text};
    }
    
    &:active:not(:disabled) {
      filter: brightness(0.9);
    }
    
    &:disabled {
      background-color: ${semanticColors.action.primary.backgroundDisabled};
      color: ${semanticColors.action.primary.textDisabled};
    }
  `,
  ghost: css`
    background-color: ${semanticColors.action.ghost.background};
    color: ${semanticColors.action.ghost.text};
    
    &:hover:not(:disabled) {
      background-color: ${semanticColors.action.ghost.backgroundHover};
    }
    
    &:active:not(:disabled) {
      background-color: ${semanticColors.action.ghost.backgroundActive};
    }
    
    &:disabled {
      background-color: ${semanticColors.action.ghost.backgroundDisabled};
      color: ${semanticColors.action.ghost.textDisabled};
    }
  `,
};

// Estilos para tamanhos de botão
const sizeStyles = {
  small: css`
    font-size: ${fontSizes.xs};
    padding: ${spacing[1]} ${spacing[2]};
    height: 32px;
    
    svg {
      width: 16px;
      height: 16px;
    }
  `,
  medium: css`
    font-size: ${fontSizes.sm};
    padding: ${spacing[2]} ${spacing[4]};
    height: 40px;
    
    svg {
      width: 18px;
      height: 18px;
    }
  `,
  large: css`
    font-size: ${fontSizes.md};
    padding: ${spacing[3]} ${spacing[6]};
    height: 48px;
    
    svg {
      width: 20px;
      height: 20px;
    }
  `,
};

// Componente estilizado
const StyledButton = styled.button<{
  $variant: ButtonVariant;
  $size: ButtonSize;
  $fullWidth: boolean;
  $hasLeftIcon: boolean;
  $hasRightIcon: boolean;
  $isLoading: boolean;
}>`
  ${baseButtonStyles}
  ${props => variantStyles[props.$variant]}
  ${props => sizeStyles[props.$size]}
  
  /* Largura total */
  width: ${props => props.$fullWidth ? '100%' : 'auto'};
  
  /* Espaçamento para ícones */
  ${props => props.$hasLeftIcon && css`
    & > *:first-child {
      margin-right: ${spacing[2]};
    }
  `}
  
  ${props => props.$hasRightIcon && css`
    & > *:last-child {
      margin-left: ${spacing[2]};
    }
  `}
  
  /* Estado de carregamento */
  ${props => props.$isLoading && css`
    cursor: wait;
    
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: inherit;
      border-radius: inherit;
      opacity: 0.7;
    }
  `}
  
  /* Foco visível usando tokens semânticos */
  &:focus-visible {
    outline: ${semanticColors.state.focus.outlineWidth} solid ${semanticColors.state.focus.outline};
    outline-offset: ${semanticColors.state.focus.outlineOffset};
  }
  
  /* Suporte para alto contraste */
  @media (forced-colors: active) {
    border: 1px solid ButtonText;
    background-color: ButtonFace;
    color: ButtonText;
    
    &:focus-visible {
      outline: 2px solid Highlight;
    }
  }
`;

// Componente de spinner para estado de carregamento
const LoadingSpinner = styled.span`
  display: inline-block;
  width: 1em;
  height: 1em;
  border: 2px solid currentColor;
  border-radius: 50%;
  border-right-color: transparent;
  animation: spin 0.75s linear infinite;
  margin-right: ${spacing[2]};
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

// Componente Button
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  leftIcon,
  rightIcon,
  isLoading = false,
  loadingText,
  disabled = false,
  children,
  ...props
}) => {
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      $hasLeftIcon={!!leftIcon}
      $hasRightIcon={!!rightIcon}
      $isLoading={isLoading}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <LoadingSpinner aria-hidden="true" />}
      {!isLoading && leftIcon}
      <span>
        {isLoading && loadingText ? loadingText : children}
      </span>
      {!isLoading && rightIcon}
    </StyledButton>
  );
};

export default Button;
