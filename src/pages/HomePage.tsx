import styled from 'styled-components';
import { useTips } from '../controllers/hooks/useTips';
import { FilterBar } from '../components/features/FilterBar';
import { TipCard } from '../components/features/TipCard';

const HomeContainer = styled.div`
  width: 100%;
`;

const Hero = styled.section`
  text-align: center;
  margin-bottom: 3rem;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--color-text);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: var(--color-text-secondary);
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const TipsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const NoResults = styled.div`
  text-align: center;
  padding: 3rem 0;
  color: var(--color-text-secondary);
`;

const LoadingIndicator = styled.div`
  text-align: center;
  padding: 3rem 0;
  color: var(--color-text-secondary);
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: var(--color-error);
  background-color: var(--color-error-bg);
  border-radius: 8px;
  margin: 2rem 0;
`;

const ResultsCount = styled.p`
  margin-bottom: 1.5rem;
  color: var(--color-text-secondary);
  font-size: 0.875rem;
`;

/**
 * Página inicial com listagem de macetes e filtros
 */
export const HomePage = () => {
  const {
    filteredTips,
    loading,
    error,
    categories,
    difficulties,
    selectedCategory,
    selectedDifficulty,
    searchTerm,
    setSelectedCategory,
    setSelectedDifficulty,
    setSearchTerm
  } = useTips();
  
  return (
    <HomeContainer>
      <Hero>
        <HeroTitle>DevAcessível</HeroTitle>
        <HeroSubtitle>
          Aprenda boas práticas de acessibilidade web com exemplos práticos e explicações detalhadas.
        </HeroSubtitle>
      </Hero>
      
      <FilterBar
        categories={categories}
        difficulties={difficulties}
        selectedCategory={selectedCategory}
        selectedDifficulty={selectedDifficulty}
        searchTerm={searchTerm}
        onCategoryChange={setSelectedCategory}
        onDifficultyChange={setSelectedDifficulty}
        onSearchChange={setSearchTerm}
      />
      
      {loading ? (
        <LoadingIndicator>Carregando macetes...</LoadingIndicator>
      ) : error ? (
        <ErrorMessage role="alert">
          <strong>Erro ao carregar macetes:</strong> {error}
        </ErrorMessage>
      ) : (
        <>
          <ResultsCount>
            {filteredTips.length === 0
              ? 'Nenhum macete encontrado'
              : `${filteredTips.length} macete${filteredTips.length !== 1 ? 's' : ''} encontrado${filteredTips.length !== 1 ? 's' : ''}`}
          </ResultsCount>
          
          {filteredTips.length === 0 ? (
            <NoResults>
              <p>Nenhum macete corresponde aos filtros selecionados.</p>
              <p>Tente ajustar seus critérios de busca.</p>
            </NoResults>
          ) : (
            <TipsGrid>
              {filteredTips.map(tip => (
                <TipCard key={tip.id} tip={tip} />
              ))}
            </TipsGrid>
          )}
        </>
      )}
    </HomeContainer>
  );
};
