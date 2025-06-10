import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useTips } from '../controllers/hooks/useTips';

const CategoriesContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const CategoriesTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--color-text);
`;

const CategoriesDescription = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: var(--color-text-secondary);
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const CategoryCard = styled(Link)<{ $bgColor: string }>`
  background-color: ${props => props.$bgColor || 'var(--color-background-alt)'};
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  text-decoration: none;
  color: var(--color-text);
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`;

const CategoryIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const CategoryName = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const CategoryCount = styled.p`
  font-size: 0.875rem;
  color: var(--color-text-secondary);
`;

const SearchContainer = styled.div`
  margin-bottom: 2rem;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid var(--color-border);
  background-color: var(--color-input-bg);
  color: var(--color-text);
  font-size: 1rem;
  
  &:focus {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
    border-color: var(--color-primary);
  }
  
  &::placeholder {
    color: var(--color-text-placeholder);
  }
`;

/**
 * Página de categorias de macetes
 */
export const CategoriesPage = () => {
  const { tips } = useTips();
  const [searchTerm, setSearchTerm] = useState('');
  
  // Agrupar macetes por categoria
  const categoriesMap = tips.reduce((acc, tip) => {
    if (!acc[tip.category]) {
      acc[tip.category] = [];
    }
    acc[tip.category].push(tip);
    return acc;
  }, {} as Record<string, typeof tips>);
  
  // Filtrar categorias com base na busca
  const filteredCategories = Object.keys(categoriesMap).filter(category => 
    category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Cores para as categorias
  const categoryColors: Record<string, string> = {
    'HTML': 'rgba(229, 77, 38, 0.2)',
    'CSS': 'rgba(38, 77, 228, 0.2)',
    'JavaScript': 'rgba(240, 219, 79, 0.2)',
    'ARIA': 'rgba(0, 121, 107, 0.2)',
    'Forms': 'rgba(156, 39, 176, 0.2)',
    'Images': 'rgba(121, 85, 72, 0.2)',
    'Navigation': 'rgba(33, 150, 243, 0.2)',
    'Semantic': 'rgba(76, 175, 80, 0.2)',
    'Color': 'rgba(244, 67, 54, 0.2)',
    'Keyboard': 'rgba(255, 152, 0, 0.2)'
  };
  
  // Ícones para as categorias
  const categoryIcons: Record<string, string> = {
    'HTML': '🏗️',
    'CSS': '🎨',
    'JavaScript': '⚙️',
    'ARIA': '🔊',
    'Forms': '📝',
    'Images': '🖼️',
    'Navigation': '🧭',
    'Semantic': '🧩',
    'Color': '🌈',
    'Keyboard': '⌨️'
  };
  
  return (
    <CategoriesContainer>
      <CategoriesTitle>Categorias</CategoriesTitle>
      <CategoriesDescription>
        Explore macetes de acessibilidade por categoria para encontrar soluções específicas para suas necessidades de desenvolvimento.
      </CategoriesDescription>
      
      <SearchContainer>
        <SearchInput
          type="search"
          placeholder="Buscar categorias..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Buscar categorias"
        />
      </SearchContainer>
      
      <CategoryGrid>
        {filteredCategories.map(category => (
          <CategoryCard 
            key={category} 
            to={`/?category=${category}`}
            $bgColor={categoryColors[category] || 'var(--color-background-alt)'}
          >
            <CategoryIcon aria-hidden="true">
              {categoryIcons[category] || '📚'}
            </CategoryIcon>
            <CategoryName>{category}</CategoryName>
            <CategoryCount>
              {categoriesMap[category].length} macete{categoriesMap[category].length !== 1 ? 's' : ''}
            </CategoryCount>
          </CategoryCard>
        ))}
      </CategoryGrid>
    </CategoriesContainer>
  );
};
