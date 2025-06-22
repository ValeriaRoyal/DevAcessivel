import { useState, useEffect } from 'react';
import { breakpoints } from '../tokens/breakpoints';

type BreakpointKey = keyof typeof breakpoints;

/**
 * Hook para verificar se um media query está ativo
 * @param query - String de media query ou chave de breakpoint
 * @returns boolean indicando se o media query está ativo
 */
export const useMediaQuery = (query: string | BreakpointKey): boolean => {
  // Converte chave de breakpoint para media query se necessário
  const mediaQuery = breakpoints[query as BreakpointKey]
    ? `(min-width: ${breakpoints[query as BreakpointKey]})`
    : query;

  const [matches, setMatches] = useState<boolean>(() => {
    // Verifica se window está disponível (para SSR)
    if (typeof window !== 'undefined') {
      return window.matchMedia(mediaQuery).matches;
    }
    return false;
  });

  useEffect(() => {
    // Retorna early se não estiver no browser
    if (typeof window === 'undefined') return undefined;

    const mediaQueryList = window.matchMedia(mediaQuery);
    const listener = (event: MediaQueryListEvent) => setMatches(event.matches);

    // Adiciona listener
    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener('change', listener);
    } else {
      // Fallback para browsers mais antigos
      mediaQueryList.addListener(listener);
    }

    // Cleanup
    return () => {
      if (mediaQueryList.removeEventListener) {
        mediaQueryList.removeEventListener('change', listener);
      } else {
        // Fallback para browsers mais antigos
        mediaQueryList.removeListener(listener);
      }
    };
  }, [mediaQuery]);

  return matches;
};

/**
 * Hook para verificar preferências de redução de movimento
 * @returns boolean indicando se o usuário prefere movimento reduzido
 */
export const usePrefersReducedMotion = (): boolean => {
  return useMediaQuery('(prefers-reduced-motion: reduce)');
};

/**
 * Hook para verificar preferências de esquema de cores
 * @returns string indicando o esquema de cores preferido ('dark', 'light' ou 'no-preference')
 */
export const usePrefersColorScheme = (): 'dark' | 'light' | 'no-preference' => {
  const prefersDark = useMediaQuery('(prefers-color-scheme: dark)');
  const prefersLight = useMediaQuery('(prefers-color-scheme: light)');

  if (prefersDark) return 'dark';
  if (prefersLight) return 'light';
  return 'no-preference';
};

/**
 * Hook para verificar se o modo de alto contraste está ativo
 * @returns boolean indicando se o modo de alto contraste está ativo
 */
export const useHighContrastMode = (): boolean => {
  return useMediaQuery('(forced-colors: active)');
};
