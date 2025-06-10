import { useState } from 'react';
import styled from 'styled-components';
import { Category, Difficulty } from '../../models/interfaces/Tip';

interface FilterBarProps {
  categories: Category[];
  difficulties: Difficulty[];
  selectedCategory: Category | 'all';
  selectedDifficulty: Difficulty | 'all';
  searchTerm: string;
  onCategoryChange: (category: Category | 'all') => void;
  onDifficultyChange: (difficulty: Difficulty | 'all') => void;
  onSearchChange: (term: string) => void;
}

const FilterContainer = styled.div`
  background-color: var(--color-background-alt);
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 2rem;
`;

const FilterForm = styled.form`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FilterLabel = styled.label`
  font-weight: 500;
  font-size: 0.875rem;
  color: var(--color-text);
`;

const FilterSelect = styled.select`
  padding: 0.5rem;
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
`;

const SearchInput = styled.input`
  padding: 0.5rem;
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

const ClearButton = styled.button`
  background: none;
  border: none;
  color: var(--color-primary);
  font-size: 0.875rem;
  cursor: pointer;
  padding: 0.5rem;
  margin-top: 0.5rem;
  align-self: flex-start;
  
  &:hover {
    text-decoration: underline;
  }
  
  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`;

/**
 * Componente de barra de filtros para macetes
 */
export const FilterBar = ({
  categories,
  difficulties,
  selectedCategory,
  selectedDifficulty,
  searchTerm,
  onCategoryChange,
  onDifficultyChange,
  onSearchChange
}: FilterBarProps) => {
  const [searchValue, setSearchValue] = useState(searchTerm);
  
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchChange(searchValue);
  };
  
  const clearFilters = () => {
    onCategoryChange('all');
    onDifficultyChange('all');
    setSearchValue('');
    onSearchChange('');
  };
  
  // Tradução das dificuldades para português
  const difficultyMap = {
    'Beginner': 'Iniciante',
    'Intermediate': 'Intermediário',
    'Advanced': 'Avançado'
  };
  
  return (
    <FilterContainer>
      <FilterForm onSubmit={handleSearchSubmit}>
        <FilterGroup>
          <FilterLabel htmlFor="category-filter">Categoria</FilterLabel>
          <FilterSelect
            id="category-filter"
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value as Category | 'all')}
          >
            <option value="all">Todas as categorias</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </FilterSelect>
        </FilterGroup>
        
        <FilterGroup>
          <FilterLabel htmlFor="difficulty-filter">Nível de dificuldade</FilterLabel>
          <FilterSelect
            id="difficulty-filter"
            value={selectedDifficulty}
            onChange={(e) => onDifficultyChange(e.target.value as Difficulty | 'all')}
          >
            <option value="all">Todos os níveis</option>
            {difficulties.map((difficulty) => (
              <option key={difficulty} value={difficulty}>
                {difficultyMap[difficulty]}
              </option>
            ))}
          </FilterSelect>
        </FilterGroup>
        
        <FilterGroup>
          <FilterLabel htmlFor="search-filter">Buscar</FilterLabel>
          <SearchInput
            id="search-filter"
            type="search"
            placeholder="Buscar por título, descrição ou tags"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            aria-label="Buscar macetes"
          />
        </FilterGroup>
        
        <FilterGroup>
          <ClearButton 
            type="button" 
            onClick={clearFilters}
            aria-label="Limpar todos os filtros"
          >
            Limpar filtros
          </ClearButton>
        </FilterGroup>
      </FilterForm>
    </FilterContainer>
  );
};
