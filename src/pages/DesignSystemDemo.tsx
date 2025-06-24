import React from 'react';
import styled from 'styled-components';
import { 
  Button, 
  Text, 
  Card,
  colors,
  spacing,
  borderRadius,
  useTheme,
  fontSizes,
  SemanticTokensDemo
} from '../design-system';

// Função para converter hex para RGB
const hexToRgb = (hex: string): string => {
  // Remover o # se existir
  hex = hex.replace('#', '');
  
  // Converter para RGB
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  return `RGB(${r}, ${g}, ${b})`;
};

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${spacing[6]};
`;

const Section = styled.section`
  margin-bottom: ${spacing[10]};
`;

const SectionTitle = styled.div`
  margin-bottom: ${spacing[4]};
  padding-bottom: ${spacing[2]};
  border-bottom: 1px solid ${colors.neutral[300]};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${spacing[4]};
  margin-top: ${spacing[4]};
`;

const ColorSwatch = styled.div<{ $bgColor: string }>`
  width: 100%;
  height: 80px;
  background-color: ${props => props.$bgColor};
  border-radius: ${borderRadius.md};
  margin-bottom: ${spacing[2]};
  border: 1px solid ${colors.neutral[200]};
`;

const ComponentRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing[4]};
  margin-bottom: ${spacing[6]};
  align-items: center;
`;

const ThemeSwitcher = styled.div`
  display: flex;
  gap: ${spacing[2]};
  margin-bottom: ${spacing[6]};
`;

const DesignSystemDemo: React.FC = () => {
  const { themeMode, setThemeMode } = useTheme();
  
  return (
    <PageContainer>
      <Text variant="h1" gutterBottom>Design System DevAcessível</Text>
      
      <ThemeSwitcher>
        <Button 
          variant={themeMode === 'light' ? 'primary' : 'tertiary'} 
          onClick={() => setThemeMode('light')}
        >
          Tema Claro
        </Button>
        <Button 
          variant={themeMode === 'dark' ? 'primary' : 'tertiary'} 
          onClick={() => setThemeMode('dark')}
        >
          Tema Escuro
        </Button>
        <Button 
          variant={themeMode === 'high-contrast' ? 'primary' : 'tertiary'} 
          onClick={() => setThemeMode('high-contrast')}
        >
          Alto Contraste
        </Button>
      </ThemeSwitcher>
      
      <Section>
        <SectionTitle>
          <Text variant="h2">Cores</Text>
        </SectionTitle>
        
        <Card variant="outlined" padding="4" marginBottom="4">
          <Text variant="h4" gutterBottom>Sobre as Cores</Text>
          <Text variant="body1" gutterBottom>
            Nossa paleta de cores foi cuidadosamente selecionada para garantir contraste adequado e acessibilidade.
            Todas as combinações de cores seguem as diretrizes WCAG 2.1 para contraste.
          </Text>
        </Card>
        
        <Text variant="h3" gutterBottom>Cores Primárias</Text>
        <Grid>
          {Object.entries(colors.primary).map(([key, value]) => (
            <Card key={key} padding="3">
              <ColorSwatch $bgColor={value as string} />
              <Text variant="body2">primary.{key}</Text>
              <Text variant="caption">{value}</Text>
              <Text variant="caption" color={colors.neutral[600]}>
                {hexToRgb(value as string)}
              </Text>
            </Card>
          ))}
        </Grid>
        
        <Text variant="h3" gutterBottom>Cores Secundárias</Text>
        <Grid>
          {Object.entries(colors.secondary).map(([key, value]) => (
            <Card key={key} padding="3">
              <ColorSwatch $bgColor={value as string} />
              <Text variant="body2">secondary.{key}</Text>
              <Text variant="caption">{value}</Text>
              <Text variant="caption" color={colors.neutral[600]}>
                {hexToRgb(value as string)}
              </Text>
            </Card>
          ))}
        </Grid>
        
        <Text variant="h3" gutterBottom>Cores Neutras</Text>
        <Grid>
          {Object.entries(colors.neutral).map(([key, value]) => (
            <Card key={key} padding="3">
              <ColorSwatch $bgColor={value as string} />
              <Text variant="body2">neutral.{key}</Text>
              <Text variant="caption">{value}</Text>
              <Text variant="caption" color={colors.neutral[600]}>
                {hexToRgb(value as string)}
              </Text>
            </Card>
          ))}
        </Grid>
        
        <Text variant="h3" gutterBottom>Cores Semânticas</Text>
        <Grid>
          {Object.entries(colors.semantic).map(([category, colorSet]) => 
            Object.entries(colorSet as Record<string, string>).map(([variant, value]) => (
              <Card key={`${category}-${variant}`} padding="3">
                <ColorSwatch $bgColor={value} />
                <Text variant="body2">semantic.{category}.{variant}</Text>
                <Text variant="caption">{value}</Text>
                <Text variant="caption" color={colors.neutral[600]}>
                  {hexToRgb(value)}
                </Text>
              </Card>
            ))
          )}
        </Grid>
      </Section>
      
      <Section>
        <SectionTitle>
          <Text variant="h2">Tipografia</Text>
        </SectionTitle>
        
        <Card variant="outlined" padding="4" marginBottom="4">
          <Text variant="h4" gutterBottom>Famílias de Fontes</Text>
          <Text variant="body1" gutterBottom><strong>Fonte Principal:</strong> Inter (sans-serif)</Text>
          <Text variant="body1" gutterBottom><strong>Fonte para Código:</strong> Fira Code (monospace)</Text>
        </Card>
        
        <Card variant="outlined" padding="4" marginBottom="6">
          <Text variant="h4" gutterBottom>Estilos de Texto</Text>
          
          <div style={{ marginBottom: '24px' }}>
            <Text variant="caption" color={colors.neutral[600]}>Inter Bold (700) / {fontSizes['4xl']}</Text>
            <Text variant="h1" gutterBottom>Heading 1</Text>
          </div>
          
          <div style={{ marginBottom: '24px' }}>
            <Text variant="caption" color={colors.neutral[600]}>Inter Bold (700) / {fontSizes['3xl']}</Text>
            <Text variant="h2" gutterBottom>Heading 2</Text>
          </div>
          
          <div style={{ marginBottom: '24px' }}>
            <Text variant="caption" color={colors.neutral[600]}>Inter SemiBold (600) / {fontSizes['2xl']}</Text>
            <Text variant="h3" gutterBottom>Heading 3</Text>
          </div>
          
          <div style={{ marginBottom: '24px' }}>
            <Text variant="caption" color={colors.neutral[600]}>Inter SemiBold (600) / {fontSizes.xl}</Text>
            <Text variant="h4" gutterBottom>Heading 4</Text>
          </div>
          
          <div style={{ marginBottom: '24px' }}>
            <Text variant="caption" color={colors.neutral[600]}>Inter SemiBold (600) / {fontSizes.lg}</Text>
            <Text variant="h5" gutterBottom>Heading 5</Text>
          </div>
          
          <div style={{ marginBottom: '24px' }}>
            <Text variant="caption" color={colors.neutral[600]}>Inter SemiBold (600) / {fontSizes.md}</Text>
            <Text variant="h6" gutterBottom>Heading 6</Text>
          </div>
          
          <div style={{ marginBottom: '24px' }}>
            <Text variant="caption" color={colors.neutral[600]}>Inter Regular (400) / {fontSizes.md}</Text>
            <Text variant="body1" gutterBottom>Body 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl vel nisl.</Text>
          </div>
          
          <div style={{ marginBottom: '24px' }}>
            <Text variant="caption" color={colors.neutral[600]}>Inter Regular (400) / {fontSizes.sm}</Text>
            <Text variant="body2" gutterBottom>Body 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl vel nisl.</Text>
          </div>
          
          <div style={{ marginBottom: '24px' }}>
            <Text variant="caption" color={colors.neutral[600]}>Inter Regular (400) / {fontSizes.xs}</Text>
            <Text variant="caption" gutterBottom>Caption text</Text>
          </div>
          
          <div style={{ marginBottom: '24px' }}>
            <Text variant="caption" color={colors.neutral[600]}>Inter Medium (500) / {fontSizes.sm}</Text>
            <Text variant="button" gutterBottom>Button text</Text>
          </div>
          
          <div style={{ marginBottom: '24px' }}>
            <Text variant="caption" color={colors.neutral[600]}>Fira Code Regular (400) / {fontSizes.sm}</Text>
            <Text variant="code" gutterBottom>Code text</Text>
          </div>
        </Card>
      </Section>
      
      <Section>
        <SectionTitle>
          <Text variant="h2">Botões</Text>
        </SectionTitle>
        
        <Text variant="h3" gutterBottom>Variantes</Text>
        <ComponentRow>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="success">Success</Button>
          <Button variant="ghost">Ghost</Button>
        </ComponentRow>
        
        <Text variant="h3" gutterBottom>Tamanhos</Text>
        <ComponentRow>
          <Button variant="primary" size="small">Small</Button>
          <Button variant="primary" size="medium">Medium</Button>
          <Button variant="primary" size="large">Large</Button>
        </ComponentRow>
        
        <Text variant="h3" gutterBottom>Estados</Text>
        <ComponentRow>
          <Button variant="primary">Normal</Button>
          <Button variant="primary" disabled>Disabled</Button>
          <Button variant="primary" isLoading>Loading</Button>
          <Button variant="primary" isLoading loadingText="Carregando...">Loading with text</Button>
        </ComponentRow>
      </Section>
      
      <Section>
        <SectionTitle>
          <Text variant="h2">Cards</Text>
        </SectionTitle>
        
        <Grid>
          <Card variant="elevated" padding="4">
            <Text variant="h4" gutterBottom>Card Elevado</Text>
            <Text variant="body2">Este é um card com sombra elevada.</Text>
            <ComponentRow>
              <Button variant="primary" size="small">Ação</Button>
            </ComponentRow>
          </Card>
          
          <Card variant="outlined" padding="4">
            <Text variant="h4" gutterBottom>Card com Borda</Text>
            <Text variant="body2">Este é um card com borda.</Text>
            <ComponentRow>
              <Button variant="primary" size="small">Ação</Button>
            </ComponentRow>
          </Card>
          
          <Card variant="filled" padding="4">
            <Text variant="h4" gutterBottom>Card Preenchido</Text>
            <Text variant="body2">Este é um card com fundo preenchido.</Text>
            <ComponentRow>
              <Button variant="primary" size="small">Ação</Button>
            </ComponentRow>
          </Card>
          
          <Card 
            variant="elevated" 
            padding="4" 
            onClick={() => alert('Card clicável!')}
          >
            <Text variant="h4" gutterBottom>Card Clicável</Text>
            <Text variant="body2">Este card inteiro é clicável. Tente clicar nele!</Text>
          </Card>
        </Grid>
      </Section>
      
      <Section>
        <SectionTitle>
          <Text variant="h2">Tokens Semânticos</Text>
        </SectionTitle>
        <Card variant="outlined" padding="4" marginBottom="4">
          <Text variant="h4" gutterBottom>Tokens Semânticos</Text>
          <Text variant="body1" gutterBottom>
            Tokens semânticos separam os valores visuais dos seus usos, facilitando a manutenção e adaptação para diferentes temas.
            Inspirados nos design systems brasileiros, nossos tokens semânticos criam uma camada de abstração que torna o design system mais flexível.
          </Text>
        </Card>
        <SemanticTokensDemo />
      </Section>
      
      <Section>
        <SectionTitle>
          <Text variant="h2">Exemplos de Acessibilidade</Text>
        </SectionTitle>
        
        <Card variant="outlined" padding="4" marginBottom="4">
          <Text variant="h4" gutterBottom>Navegação por Teclado</Text>
          <Text variant="body2" gutterBottom>
            Todos os componentes interativos são acessíveis por teclado. 
            Tente navegar usando Tab e ativar elementos com Enter ou Espaço.
          </Text>
          <ComponentRow>
            <Button variant="primary">Botão 1</Button>
            <Button variant="secondary">Botão 2</Button>
            <Button variant="tertiary">Botão 3</Button>
          </ComponentRow>
        </Card>
        
        <Card variant="outlined" padding="4">
          <Text variant="h4" gutterBottom>Contraste de Cores</Text>
          <Text variant="body2" gutterBottom>
            Todas as combinações de cores seguem as diretrizes WCAG 2.1 para contraste.
            O tema de alto contraste oferece visibilidade máxima.
          </Text>
          <ComponentRow>
            <Button variant="primary">Alto Contraste</Button>
            <Button variant="ghost">Texto Legível</Button>
          </ComponentRow>
        </Card>
      </Section>
    </PageContainer>
  );
};

export default DesignSystemDemo;
