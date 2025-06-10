import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Tip } from '../../models/interfaces';

interface TipCardProps {
  tip: Tip;
}

const Card = styled(Link)`
  display: block;
  background-color: var(--color-card-bg);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  text-decoration: none;
  color: var(--color-text);
  height: 100%;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
    transform: translateY(-4px);
  }
`;

const CardHeader = styled.div`
  background-color: var(--color-primary);
  padding: 1rem;
  color: var(--color-text-on-primary);
`;

const CardCategory = styled.div`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.5rem;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
`;

const CardBody = styled.div`
  padding: 1rem;
`;

const CardDescription = styled.p`
  margin: 0 0 1rem;
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CardFooter = styled.div`
  padding: 0 1rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardDifficulty = styled.span<{ difficulty: string }>`
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  background-color: ${props => {
    switch (props.difficulty) {
      case 'Beginner':
        return 'var(--color-success-bg)';
      case 'Intermediate':
        return 'var(--color-warning-bg)';
      case 'Advanced':
        return 'var(--color-error-bg)';
      default:
        return 'var(--color-background-alt)';
    }
  }};
  color: ${props => {
    switch (props.difficulty) {
      case 'Beginner':
        return 'var(--color-success)';
      case 'Intermediate':
        return 'var(--color-warning)';
      case 'Advanced':
        return 'var(--color-error)';
      default:
        return 'var(--color-text)';
    }
  }};
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

/**
 * Componente de card para exibir um macete na listagem
 */
export const TipCard = ({ tip }: TipCardProps) => {
  // Tradução das dificuldades para português
  const difficultyMap = {
    'Beginner': 'Iniciante',
    'Intermediate': 'Intermediário',
    'Advanced': 'Avançado'
  };
  
  return (
    <Card to={`/dica/${tip.id}`}>
      <CardHeader>
        <CardCategory>{tip.category}</CardCategory>
        <CardTitle>{tip.title}</CardTitle>
      </CardHeader>
      
      <CardBody>
        <CardDescription>{tip.description}</CardDescription>
        
        <TagsContainer>
          {tip.tags.slice(0, 3).map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
          {tip.tags.length > 3 && <Tag>+{tip.tags.length - 3}</Tag>}
        </TagsContainer>
      </CardBody>
      
      <CardFooter>
        <CardDifficulty difficulty={tip.difficulty}>
          {difficultyMap[tip.difficulty as keyof typeof difficultyMap]}
        </CardDifficulty>
      </CardFooter>
    </Card>
  );
};
