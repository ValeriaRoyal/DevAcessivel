import { useState } from 'react';
import styled from 'styled-components';
import { Button } from './Button';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  isGood?: boolean;
  isBad?: boolean;
}

const CodeBlockContainer = styled.div`
  margin: 1rem 0;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--color-border);
`;

const CodeHeader = styled.div<{ isGood?: boolean; isBad?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: ${props => 
    props.isGood ? 'var(--color-success-bg)' : 
    props.isBad ? 'var(--color-error-bg)' : 
    'var(--color-code-header-bg)'
  };
  border-bottom: 1px solid var(--color-border);
`;

const CodeTitle = styled.div<{ isGood?: boolean; isBad?: boolean }>`
  font-weight: 500;
  font-size: 0.875rem;
  color: ${props => 
    props.isGood ? 'var(--color-success)' : 
    props.isBad ? 'var(--color-error)' : 
    'var(--color-text)'
  };
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &::before {
    content: ${props => 
      props.isGood ? '"✓"' : 
      props.isBad ? '"✗"' : 
      '""'
    };
  }
`;

const Pre = styled.pre`
  margin: 0;
  padding: 1rem;
  overflow-x: auto;
  background-color: var(--color-code-bg);
  font-family: 'Fira Code', monospace;
  font-size: 0.875rem;
  line-height: 1.5;
`;

const Code = styled.code`
  font-family: inherit;
`;

const CopyButton = styled(Button)`
  font-size: 0.75rem;
  padding: 4px 8px;
`;

const CopyFeedback = styled.span`
  position: absolute;
  top: -30px;
  right: 0;
  background-color: var(--color-success);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  opacity: 0;
  transition: opacity 0.3s, top 0.3s;
  
  &.visible {
    opacity: 1;
    top: -25px;
  }
`;

/**
 * Componente para exibir blocos de código com syntax highlighting
 * e botão de cópia acessível
 */
export const CodeBlock = ({ 
  code, 
  language = 'html', 
  title,
  isGood = false,
  isBad = false
}: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      
      // Limpar mensagem após 2 segundos
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Falha ao copiar código:', err);
    }
  };
  
  const displayTitle = title || (
    isGood ? 'Código Recomendado' : 
    isBad ? 'Código Não Recomendado' : 
    `Código ${language.toUpperCase()}`
  );
  
  return (
    <CodeBlockContainer>
      <CodeHeader isGood={isGood} isBad={isBad}>
        <CodeTitle isGood={isGood} isBad={isBad}>
          {displayTitle}
        </CodeTitle>
        <div style={{ position: 'relative' }}>
          <CopyButton 
            onClick={handleCopy} 
            variant="text" 
            size="small"
            aria-label="Copiar código"
          >
            Copiar
          </CopyButton>
          <CopyFeedback className={copied ? 'visible' : ''} aria-live="polite">
            {copied ? 'Copiado!' : ''}
          </CopyFeedback>
        </div>
      </CodeHeader>
      <Pre>
        <Code>{code}</Code>
      </Pre>
    </CodeBlockContainer>
  );
};
