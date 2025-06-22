import React from 'react';
import styled from 'styled-components';
import { Text, Card } from './';
import { semanticTokens, spacing } from '../tokens';

const Section = styled.section`
  margin-bottom: ${spacing[10]};
`;

const SectionTitle = styled.div`
  margin-bottom: ${spacing[4]};
  padding-bottom: ${spacing[2]};
  border-bottom: 1px solid ${semanticTokens.colors.interface.border.default};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${spacing[4]};
  margin-top: ${spacing[4]};
`;

const ColorSwatch = styled.div<{ $bgColor: string }>`
  width: 100%;
  height: 80px;
  background-color: ${props => props.$bgColor};
  border-radius: ${semanticTokens.borders.radius.medium};
  margin-bottom: ${spacing[2]};
  border: 1px solid ${semanticTokens.colors.interface.border.default};
`;

const TokenValue = styled.div`
  font-family: monospace;
  padding: ${spacing[2]};
  background-color: ${semanticTokens.colors.interface.background.tertiary};
  border-radius: ${semanticTokens.borders.radius.small};
  margin-top: ${spacing[2]};
  font-size: 0.875rem;
  overflow-wrap: break-word;
`;

const TokenPath = styled.div`
  font-size: 0.75rem;
  color: ${semanticTokens.colors.text.secondary};
  margin-bottom: ${spacing[1]};
`;

/**
 * Componente para demonstrar os tokens semânticos
 */
export const SemanticTokensDemo: React.FC = () => {
  return (
    <div>
      <Section>
        <SectionTitle>
          <Text variant="h2">Tokens Semânticos de Cores</Text>
        </SectionTitle>
        
        <Card variant="outlined" padding="4" marginBottom="4">
          <Text variant="h4" gutterBottom>Sobre Tokens Semânticos</Text>
          <Text variant="body1" gutterBottom>
            Tokens semânticos separam os valores visuais (cores específicas) dos seus usos semânticos,
            facilitando a manutenção e adaptação para diferentes temas.
          </Text>
        </Card>
        
        <Text variant="h3" gutterBottom>Cores de Interface</Text>
        <Grid>
          {Object.entries(semanticTokens.colors.interface.background).map(([key, value]) => (
            <Card key={`bg-${key}`} padding="3">
              <ColorSwatch $bgColor={value as string} />
              <TokenPath>semantic.colors.interface.background.{key}</TokenPath>
              <TokenValue>{value}</TokenValue>
            </Card>
          ))}
        </Grid>
        
        <Text variant="h3" gutterBottom>Cores de Texto</Text>
        <Grid>
          {Object.entries(semanticTokens.colors.text).map(([key, value]) => (
            <Card key={`text-${key}`} padding="3">
              <ColorSwatch $bgColor={value as string} />
              <TokenPath>semantic.colors.text.{key}</TokenPath>
              <TokenValue>{value}</TokenValue>
            </Card>
          ))}
        </Grid>
        
        <Text variant="h3" gutterBottom>Cores de Ação</Text>
        <Grid>
          {Object.entries(semanticTokens.colors.action).map(([category, values]) => 
            Object.entries(values as Record<string, string>)
              .filter(([key]) => key.includes('background') && !key.includes('Hover') && !key.includes('Active') && !key.includes('Disabled'))
              .map(([key, value]) => (
                <Card key={`action-${category}-${key}`} padding="3">
                  <ColorSwatch $bgColor={value} />
                  <TokenPath>semantic.colors.action.{category}.{key}</TokenPath>
                  <TokenValue>{value}</TokenValue>
                </Card>
              ))
          )}
        </Grid>
        
        <Text variant="h3" gutterBottom>Cores de Feedback</Text>
        <Grid>
          {Object.entries(semanticTokens.colors.feedback).map(([category, values]) => 
            Object.entries(values as Record<string, string>)
              .filter(([key]) => key === 'background')
              .map(([key, value]) => (
                <Card key={`feedback-${category}-${key}`} padding="3">
                  <ColorSwatch $bgColor={value} />
                  <TokenPath>semantic.colors.feedback.{category}.{key}</TokenPath>
                  <TokenValue>{value}</TokenValue>
                </Card>
              ))
          )}
        </Grid>
      </Section>
      
      <Section>
        <SectionTitle>
          <Text variant="h2">Tokens Semânticos de Tipografia</Text>
        </SectionTitle>
        
        <Grid>
          {Object.entries(semanticTokens.typography.heading).map(([key, value]) => (
            <Card key={`typography-${key}`} padding="3">
              <TokenPath>semantic.typography.heading.{key}</TokenPath>
              <div style={{
                fontFamily: (value as any).fontFamily,
                fontSize: (value as any).fontSize,
                fontWeight: (value as any).fontWeight,
                lineHeight: (value as any).lineHeight,
                letterSpacing: (value as any).letterSpacing,
                marginBottom: spacing[2],
              }}>
                Exemplo de texto
              </div>
              <TokenValue>
                {JSON.stringify(value, null, 2)}
              </TokenValue>
            </Card>
          ))}
        </Grid>
        
        <Text variant="h3" gutterBottom>Estilos de Corpo</Text>
        <Grid>
          {Object.entries(semanticTokens.typography.body).map(([key, value]) => (
            <Card key={`typography-body-${key}`} padding="3">
              <TokenPath>semantic.typography.body.{key}</TokenPath>
              <div style={{
                fontFamily: (value as any).fontFamily,
                fontSize: (value as any).fontSize,
                fontWeight: (value as any).fontWeight,
                lineHeight: (value as any).lineHeight,
                letterSpacing: (value as any).letterSpacing,
                marginBottom: spacing[2],
              }}>
                Exemplo de texto para corpo do documento com várias palavras para demonstrar o estilo.
              </div>
              <TokenValue>
                {JSON.stringify(value, null, 2)}
              </TokenValue>
            </Card>
          ))}
        </Grid>
      </Section>
      
      <Section>
        <SectionTitle>
          <Text variant="h2">Tokens Semânticos de Espaçamento</Text>
        </SectionTitle>
        
        <Grid>
          {Object.entries(semanticTokens.spacing.component).map(([key, value]) => (
            <Card key={`spacing-${key}`} padding="3">
              <TokenPath>semantic.spacing.component.{key}</TokenPath>
              <div style={{
                height: value,
                background: semanticTokens.colors.interface.background.brand,
                marginBottom: spacing[2],
              }} />
              <TokenValue>{value}</TokenValue>
            </Card>
          ))}
        </Grid>
      </Section>
      
      <Section>
        <SectionTitle>
          <Text variant="h2">Tokens Semânticos de Bordas</Text>
        </SectionTitle>
        
        <Grid>
          {Object.entries(semanticTokens.borders.radius).map(([key, value]) => (
            <Card key={`border-radius-${key}`} padding="3">
              <TokenPath>semantic.borders.radius.{key}</TokenPath>
              <div style={{
                height: '80px',
                background: semanticTokens.colors.interface.background.brand,
                borderRadius: value,
                marginBottom: spacing[2],
              }} />
              <TokenValue>{value}</TokenValue>
            </Card>
          ))}
        </Grid>
      </Section>
      
      <Section>
        <SectionTitle>
          <Text variant="h2">Tokens Semânticos de Elevação</Text>
        </SectionTitle>
        
        <Grid>
          {Object.entries(semanticTokens.elevation).map(([key, value]) => (
            <Card key={`elevation-${key}`} padding="3">
              <TokenPath>semantic.elevation.{key}</TokenPath>
              <div style={{
                height: '80px',
                background: semanticTokens.colors.interface.background.primary,
                boxShadow: value,
                marginBottom: spacing[2],
                borderRadius: semanticTokens.borders.radius.medium,
              }} />
              <TokenValue>{value}</TokenValue>
            </Card>
          ))}
        </Grid>
      </Section>
    </div>
  );
};

export default SemanticTokensDemo;
