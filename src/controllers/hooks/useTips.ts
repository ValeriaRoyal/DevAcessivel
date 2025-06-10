import { useState, useEffect, useMemo } from 'react';
import { tips as initialTips } from '../../models/data/tips';
import { Tip, Category, Difficulty } from '../../models/interfaces/Tip';

interface UseTipsProps {
  initialCategory?: Category | 'all';
  initialDifficulty?: Difficulty | 'all';
  initialSearchTerm?: string;
}

interface UseTipsReturn {
  tips: Tip[];
  filteredTips: Tip[];
  loading: boolean;
  error: string | null;
  categories: Category[];
  difficulties: Difficulty[];
  selectedCategory: Category | 'all';
  selectedDifficulty: Difficulty | 'all';
  searchTerm: string;
  setSelectedCategory: (category: Category | 'all') => void;
  setSelectedDifficulty: (difficulty: Difficulty | 'all') => void;
  setSearchTerm: (term: string) => void;
  getTipById: (id: string) => Tip | undefined;
}

export const useTips = ({
  initialCategory = 'all',
  initialDifficulty = 'all',
  initialSearchTerm = '',
}: UseTipsProps = {}): UseTipsReturn => {
  const [tips, setTips] = useState<Tip[]>(initialTips);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>(initialCategory);
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'all'>(initialDifficulty);
  const [searchTerm, setSearchTerm] = useState<string>(initialSearchTerm);

  // Em uma implementação real, aqui faríamos uma chamada à API
  useEffect(() => {
    setLoading(true);
    
    // Simulando uma chamada à API
    setTimeout(() => {
      try {
        setTips(initialTips);
        setLoading(false);
      } catch (err) {
        setError('Erro ao carregar os macetes');
        setLoading(false);
      }
    }, 500);
  }, []);

  // Extrair categorias e dificuldades únicas
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(tips.map(tip => tip.category))];
    return uniqueCategories;
  }, [tips]);

  const difficulties = useMemo(() => {
    const uniqueDifficulties = [...new Set(tips.map(tip => tip.difficulty))];
    return uniqueDifficulties;
  }, [tips]);

  // Filtrar dicas com base nos critérios selecionados
  const filteredTips = useMemo(() => {
    return tips.filter(tip => {
      // Filtro por categoria
      const categoryMatch = selectedCategory === 'all' || tip.category === selectedCategory;
      
      // Filtro por dificuldade
      const difficultyMatch = selectedDifficulty === 'all' || tip.difficulty === selectedDifficulty;
      
      // Filtro por termo de busca
      const searchMatch = searchTerm === '' || 
        tip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tip.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tip.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      return categoryMatch && difficultyMatch && searchMatch;
    });
  }, [tips, selectedCategory, selectedDifficulty, searchTerm]);

  // Função para obter uma dica pelo ID
  const getTipById = (id: string): Tip | undefined => {
    return tips.find(tip => tip.id === id);
  };

  return {
    tips,
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
    setSearchTerm,
    getTipById,
  };
};
