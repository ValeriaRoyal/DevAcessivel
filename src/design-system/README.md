# Design System do DevAcessível

Este design system foi criado para garantir consistência visual e acessibilidade em toda a plataforma DevAcessível.

## Estrutura

O design system está organizado da seguinte forma:

```
design-system/
├── tokens/             # Tokens de design (cores, tipografia, espaçamento, etc.)
├── components/         # Componentes reutilizáveis
├── hooks/              # Hooks personalizados para acessibilidade
├── utils/              # Utilitários para acessibilidade
├── ThemeProvider.tsx   # Provedor de tema com suporte a temas claro, escuro e alto contraste
└── index.ts            # Ponto de entrada para exportações
```

## Tokens de Design

Os tokens de design são as unidades fundamentais do sistema, definindo valores consistentes para:

- **Cores**: Paleta de cores primárias, secundárias, neutras e semânticas
- **Tipografia**: Famílias de fontes, tamanhos, pesos, alturas de linha
- **Espaçamento**: Sistema de espaçamento consistente
- **Bordas**: Raios de borda e larguras
- **Sombras**: Sistema de elevação com sombras
- **Breakpoints**: Pontos de quebra para design responsivo
- **Animações**: Durações e curvas de timing para transições e animações

## Componentes

Os componentes são construídos com base nos tokens de design e seguem as melhores práticas de acessibilidade:

- **Button**: Botões com diferentes variantes, tamanhos e estados
- **Text**: Componente de texto com diferentes variantes tipográficas
- **Card**: Cartões com diferentes estilos e comportamentos

## Hooks de Acessibilidade

Hooks personalizados para facilitar a implementação de recursos acessíveis:

- **useMediaQuery**: Para design responsivo e detecção de preferências do usuário
- **useFocusTrap**: Para criar armadilhas de foco em modais e menus

## Utilitários de Acessibilidade

Funções e estilos utilitários para garantir acessibilidade:

- **visuallyHidden**: Para esconder elementos visualmente, mas mantê-los acessíveis para leitores de tela
- **focusVisible**: Para criar estilos de foco visíveis e acessíveis
- **ensureContrast**: Para garantir contraste adequado entre cores
- **touchTarget**: Para criar áreas de toque adequadas para interação móvel

## Temas

O sistema suporta três modos de tema:

- **Claro**: Tema padrão com fundo claro
- **Escuro**: Tema com fundo escuro para uso noturno ou preferência do usuário
- **Alto Contraste**: Tema com alto contraste para usuários com deficiências visuais

## Uso

Para usar o design system em seus componentes:

```tsx
import { Button, Text, Card, useMediaQuery } from '../design-system';

const MyComponent = () => {
  const isMobile = useMediaQuery('sm');
  
  return (
    <Card variant="elevated" padding="4">
      <Text variant="h2">Título do Cartão</Text>
      <Text variant="body1">Conteúdo do cartão com texto descritivo.</Text>
      <Button variant="primary" size="medium">
        Clique Aqui
      </Button>
    </Card>
  );
};
```

Para usar o provedor de tema:

```tsx
import { ThemeProvider } from '../design-system';

const App = () => {
  return (
    <ThemeProvider initialThemeMode="light">
      {/* Conteúdo da aplicação */}
    </ThemeProvider>
  );
};
```

## Princípios de Acessibilidade

Este design system foi construído seguindo os princípios do WCAG 2.1 nível AA:

1. **Perceptível**: Todos os componentes são perceptíveis para todos os usuários
2. **Operável**: Todos os componentes são operáveis por teclado e outros dispositivos de entrada
3. **Compreensível**: A interface é clara e previsível
4. **Robusto**: Os componentes funcionam com diferentes tecnologias assistivas

## Contribuição

Ao adicionar novos componentes ou modificar os existentes, certifique-se de:

1. Seguir os tokens de design existentes
2. Testar a acessibilidade com leitores de tela
3. Garantir suporte completo a navegação por teclado
4. Documentar o uso do componente
5. Adicionar exemplos de uso
