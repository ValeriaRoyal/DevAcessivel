import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useTips } from '../controllers/hooks/useTips';
import { CodeBlock } from '../components/common/CodeBlock';
import { Button } from '../components/common/Button';

const DetailContainer = styled.main`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-primary);
  text-decoration: none;
  margin-bottom: 2rem;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
  
  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`;

const TipHeader = styled.header`
  margin-bottom: 2rem;
`;

const TipTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--color-text);
`;

const TipMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const TipMetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  
  strong {
    color: var(--color-text);
  }
`;

const TipDescription = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: var(--color-text);
`;

const TipSection = styled.section`
  margin-bottom: 3rem;
`;

const TipSectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--color-text);
`;

const TipExplanation = styled.div`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-text);
  
  p {
    margin-bottom: 1rem;
  }
  
  ul, ol {
    margin-bottom: 1rem;
    padding-left: 1.5rem;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
`;

const WcagCriteria = styled.div`
  background-color: var(--color-background-alt);
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 2rem;
`;

const WcagTitle = styled.h3`
  font-size: 1.125rem;
  margin-bottom: 1rem;
  color: var(--color-text);
`;

const WcagList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const WcagItem = styled.li`
  margin-bottom: 0.5rem;
  
  a {
    color: var(--color-primary);
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
    
    &:focus-visible {
      outline: 2px solid var(--color-focus);
      outline-offset: 2px;
    }
  }
`;

const ResourcesSection = styled.section`
  margin-top: 3rem;
`;

const ResourcesList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ResourceItem = styled.li`
  a {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-primary);
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
    
    &:focus-visible {
      outline: 2px solid var(--color-focus);
      outline-offset: 2px;
    }
    
    &::before {
      content: '📄';
    }
  }
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border);
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Tag = styled.span`
  font-size: 0.75rem;
  background-color: var(--color-background-alt);
  color: var(--color-text-secondary);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: var(--color-error);
  background-color: var(--color-error-bg);
  border-radius: 8px;
  margin: 2rem 0;
`;

/**
 * Página de detalhe de um macete específico
 */
export const TipDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { loading, error, getTipById } = useTips();
  
  const tip = id ? getTipById(id) : undefined;
  
  // Redirecionar para a página inicial se o macete não for encontrado
  useEffect(() => {
    if (!loading && !tip && !error) {
      navigate('/');
    }
  }, [tip, loading, error, navigate]);
  
  // Tradução das dificuldades para português
  const difficultyMap = {
    'Beginner': 'Iniciante',
    'Intermediate': 'Intermediário',
    'Advanced': 'Avançado'
  };
  
  if (loading) {
    return (
      <DetailContainer id="main-content">
        <p>Carregando macete...</p>
      </DetailContainer>
    );
  }
  
  if (error) {
    return (
      <DetailContainer id="main-content">
        <ErrorMessage role="alert">
          <strong>Erro ao carregar macete:</strong> {error}
        </ErrorMessage>
        <BackLink to="/">← Voltar para a página inicial</BackLink>
      </DetailContainer>
    );
  }
  
  if (!tip) {
    return (
      <DetailContainer id="main-content">
        <ErrorMessage role="alert">
          <strong>Macete não encontrado</strong>
        </ErrorMessage>
        <BackLink to="/">← Voltar para a página inicial</BackLink>
      </DetailContainer>
    );
  }
  
  return (
    <DetailContainer id="main-content">
      <BackLink to="/">← Voltar para a página inicial</BackLink>
      
      <TipHeader>
        <TipTitle>{tip.title}</TipTitle>
        
        <TipMeta>
          <TipMetaItem>
            <span>Categoria:</span>
            <strong>{tip.category}</strong>
          </TipMetaItem>
          
          <TipMetaItem>
            <span>Dificuldade:</span>
            <strong>{difficultyMap[tip.difficulty]}</strong>
          </TipMetaItem>
        </TipMeta>
        
        <TagsContainer>
          {tip.tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </TagsContainer>
      </TipHeader>
      
      <TipDescription>{tip.description}</TipDescription>
      
      <TipSection>
        <TipSectionTitle>Exemplos de Código</TipSectionTitle>
        
        <CodeBlock 
          code={tip.badCode} 
          language="html" 
          isBad 
          title="Código Não Recomendado" 
        />
        
        <CodeBlock 
          code={tip.goodCode} 
          language="html" 
          isGood 
          title="Código Recomendado" 
        />
      </TipSection>
      
      <TipSection>
        <TipSectionTitle>Explicação</TipSectionTitle>
        <TipExplanation>
          <p>{tip.explanation}</p>
        </TipExplanation>
      </TipSection>
      
      {tip.wcagCriteria && tip.wcagCriteria.length > 0 && (
        <WcagCriteria>
          <WcagTitle>Critérios WCAG Relacionados</WcagTitle>
          <WcagList>
            {tip.wcagCriteria.map((criteria, index) => (
              <WcagItem key={index}>
                <a 
                  href={`https://www.w3.org/WAI/WCAG21/quickref/#${criteria.toLowerCase().split(' ')[0]}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {criteria}
                </a>
              </WcagItem>
            ))}
          </WcagList>
        </WcagCriteria>
      )}
      
      {tip.resources && tip.resources.length > 0 && (
        <ResourcesSection>
          <TipSectionTitle>Recursos Adicionais</TipSectionTitle>
          <ResourcesList>
            {tip.resources.map((resource, index) => (
              <ResourceItem key={index}>
                <a 
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {resource.title}
                </a>
              </ResourceItem>
            ))}
          </ResourcesList>
        </ResourcesSection>
      )}
      
      <Navigation aria-label="Navegação entre macetes">
        <Button 
          variant="outline" 
          onClick={() => navigate('/')}
        >
          ← Voltar para lista
        </Button>
        
        {/* Em uma implementação real, aqui teríamos navegação para o próximo/anterior macete */}
      </Navigation>
    </DetailContainer>
  );
};
