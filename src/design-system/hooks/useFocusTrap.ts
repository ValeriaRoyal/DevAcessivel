import { useRef, useEffect } from 'react';

/**
 * Hook para criar uma armadilha de foco dentro de um elemento
 * Útil para modais, menus dropdown e outros componentes que precisam conter o foco
 * 
 * @param active - Indica se a armadilha de foco está ativa
 * @param initialFocusRef - Referência opcional para o elemento que deve receber o foco inicial
 * @returns Ref para o elemento que deve conter o foco
 */
export const useFocusTrap = (
  active: boolean = true,
  initialFocusRef?: React.RefObject<HTMLElement>
) => {
  const containerRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    if (!active || !containerRef.current) return;
    
    // Salva o elemento que tinha o foco antes de ativar a armadilha
    const previouslyFocusedElement = document.activeElement as HTMLElement;
    
    // Elementos focáveis dentro do container
    const focusableElements = containerRef.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];
    
    // Define o foco inicial
    if (initialFocusRef && initialFocusRef.current) {
      initialFocusRef.current.focus();
    } else if (firstFocusableElement) {
      firstFocusableElement.focus();
    }
    
    // Handler para manter o foco dentro do container
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      
      // Shift + Tab pressionados
      if (e.shiftKey) {
        // Se o foco estiver no primeiro elemento, mova para o último
        if (document.activeElement === firstFocusableElement) {
          e.preventDefault();
          lastFocusableElement.focus();
        }
      } 
      // Tab pressionado
      else {
        // Se o foco estiver no último elemento, mova para o primeiro
        if (document.activeElement === lastFocusableElement) {
          e.preventDefault();
          firstFocusableElement.focus();
        }
      }
    };
    
    // Adiciona o event listener
    document.addEventListener('keydown', handleKeyDown);
    
    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      
      // Restaura o foco para o elemento que tinha o foco antes
      if (previouslyFocusedElement && 'focus' in previouslyFocusedElement) {
        previouslyFocusedElement.focus();
      }
    };
  }, [active, initialFocusRef]);
  
  return containerRef;
};
