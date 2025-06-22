import React from 'react';
import styled from 'styled-components';
import { textStyles, colors } from '../../tokens';

// Tipos de variantes de texto
export type TextVariant = 
  | 'h1' 
  | 'h2' 
  | 'h3' 
  | 'h4' 
  | 'h5' 
  | 'h6' 
  | 'body1' 
  | 'body2' 
  | 'caption' 
  | 'button' 
  | 'code';

// Mapeamento de variantes para elementos HTML
const variantMapping: Record<TextVariant, string> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body1: 'p',
  body2: 'p',
  caption: 'span',
  button: 'span',
  code: 'code',
};

// Props do componente Text
export interface TextProps {
  variant?: TextVariant;
  component?: React.ElementType;
  color?: string;
  align?: 'left' | 'center' | 'right' | 'justify';
  noWrap?: boolean;
  gutterBottom?: boolean;
  children: React.ReactNode;
  id?: string;
  className?: string;
}

// Componente estilizado
const StyledText = styled.span<{
  $variant: TextVariant;
  $color?: string;
  $align?: 'left' | 'center' | 'right' | 'justify';
  $noWrap?: boolean;
  $gutterBottom?: boolean;
}>`
  /* Aplicar estilos de texto da variante */
  font-family: ${props => textStyles[props.$variant].fontFamily};
  font-size: ${props => textStyles[props.$variant].fontSize};
  font-weight: ${props => textStyles[props.$variant].fontWeight};
  line-height: ${props => textStyles[props.$variant].lineHeight};
  letter-spacing: ${props => textStyles[props.$variant].letterSpacing};
  
  /* Cor do texto */
  color: ${props => props.$color || colors.neutral[900]};
  
  /* Alinhamento do texto */
  text-align: ${props => props.$align || 'left'};
  
  /* Quebra de linha */
  ${props => props.$noWrap && `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `}
  
  /* Margem inferior */
  margin-bottom: ${props => props.$gutterBottom ? '0.35em' : '0'};
  
  /* Estilos específicos para código */
  ${props => props.$variant === 'code' && `
    background-color: ${colors.neutral[100]};
    padding: 0.2em 0.4em;
    border-radius: 3px;
    font-size: 85%;
  `}
`;

// Componente Text
export const Text: React.FC<TextProps> = ({
  variant = 'body1',
  component,
  color,
  align,
  noWrap = false,
  gutterBottom = false,
  children,
  id,
  className,
}) => {
  // Determinar o componente a ser renderizado
  const Component = component || variantMapping[variant];
  
  return (
    <StyledText
      as={Component}
      $variant={variant}
      $color={color}
      $align={align}
      $noWrap={noWrap}
      $gutterBottom={gutterBottom}
      id={id}
      className={className}
    >
      {children}
    </StyledText>
  );
};

export default Text;
