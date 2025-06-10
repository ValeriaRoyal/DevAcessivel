export type Category = 'HTML' | 'CSS' | 'JavaScript' | 'ARIA' | 'Forms' | 'Images' | 'Navigation' | 'Semantic' | 'Color' | 'Keyboard';

export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export interface Resource {
  title: string;
  url: string;
  type: 'article' | 'video' | 'tool' | 'documentation';
}

export interface Tip {
  id: string;               // Identificador único
  title: string;            // Título do macete
  category: Category;       // Categoria (HTML, CSS, JS, ARIA, etc.)
  difficulty: Difficulty;   // Nível de dificuldade (Básico, Intermediário, Avançado)
  description: string;      // Descrição do problema/solução
  badCode: string;          // Exemplo de código ruim/inacessível
  goodCode: string;         // Exemplo de código bom/acessível
  explanation: string;      // Explicação detalhada da solução
  wcagCriteria?: string[];  // Critérios WCAG relacionados
  tags: string[];           // Tags para filtro e busca
  resources?: Resource[];   // Links e recursos adicionais
  createdAt: Date;          // Data de criação
  updatedAt: Date;          // Data de atualização
}
