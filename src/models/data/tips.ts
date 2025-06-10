// Definindo os tipos diretamente no arquivo
// Categorias disponíveis para os macetes
type Category = 'HTML' | 'CSS' | 'JavaScript' | 'ARIA' | 'Forms' | 'Images' | 'Navigation' | 'Semantic' | 'Color' | 'Keyboard';

// Níveis de dificuldade dos macetes
type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

// Interface para recursos adicionais
interface Resource {
  title: string;
  url: string;
  type: 'article' | 'video' | 'tool' | 'documentation';
}

// Interface principal para os macetes de acessibilidade
interface Tip {
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

// Dados de exemplo para os macetes de acessibilidade
export const tips: Tip[] = [
  {
    id: '1',
    title: 'Use botões semânticos para interações',
    category: 'HTML',
    difficulty: 'Beginner',
    description: 'Botões devem ser criados com o elemento <button> em vez de <div> para garantir acessibilidade por teclado e leitores de tela.',
    badCode: `<div class="button" onclick="submitForm()">
  Enviar formulário
</div>`,
    goodCode: `<button type="button" onclick="submitForm()">
  Enviar formulário
</button>`,
    explanation: 'O elemento <button> já possui funcionalidades nativas de acessibilidade, como foco por teclado, ativação por tecla Enter ou espaço, e é anunciado corretamente por leitores de tela como um botão interativo. Usar <div> exige adicionar manualmente todos esses comportamentos com ARIA, tabindex e event listeners.',
    wcagCriteria: ['2.1.1 Keyboard', '4.1.2 Name, Role, Value'],
    tags: ['botões', 'semântica', 'html', 'formulários'],
    resources: [
      {
        title: 'Botões acessíveis',
        url: 'https://developer.mozilla.org/pt-BR/docs/Web/Accessibility/ARIA/Roles/button_role',
        type: 'documentation'
      }
    ],
    createdAt: new Date('2025-06-01'),
    updatedAt: new Date('2025-06-01')
  },
  {
    id: '2',
    title: 'Forneça textos alternativos para imagens',
    category: 'Images',
    difficulty: 'Beginner',
    description: 'Todas as imagens informativas devem ter um texto alternativo que descreva seu conteúdo ou propósito.',
    badCode: `<img src="grafico-vendas.png">`,
    goodCode: `<img 
  src="grafico-vendas.png" 
  alt="Gráfico mostrando aumento de 30% nas vendas no último trimestre"
>`,
    explanation: 'O atributo alt fornece uma alternativa textual para imagens, permitindo que usuários de leitores de tela compreendam o conteúdo visual. Para imagens decorativas, use alt="" para que leitores de tela as ignorem.',
    wcagCriteria: ['1.1.1 Non-text Content'],
    tags: ['imagens', 'alt', 'texto alternativo'],
    resources: [
      {
        title: 'Textos alternativos',
        url: 'https://www.w3.org/WAI/tutorials/images/decision-tree/',
        type: 'article'
      }
    ],
    createdAt: new Date('2025-06-02'),
    updatedAt: new Date('2025-06-02')
  },
  {
    id: '3',
    title: 'Use rótulos visíveis para campos de formulário',
    category: 'Forms',
    difficulty: 'Beginner',
    description: 'Campos de formulário devem ter rótulos visíveis e associados corretamente para todos os usuários.',
    badCode: `<input type="text" placeholder="Nome completo">`,
    goodCode: `<label for="nome">Nome completo</label>
<input type="text" id="nome">`,
    explanation: 'Rótulos (labels) associados corretamente aos campos de formulário beneficiam todos os usuários, especialmente aqueles que usam tecnologias assistivas. Placeholders não substituem labels, pois desaparecem quando o usuário começa a digitar.',
    wcagCriteria: ['1.3.1 Info and Relationships', '3.3.2 Labels or Instructions'],
    tags: ['formulários', 'labels', 'inputs'],
    resources: [
      {
        title: 'Formulários acessíveis',
        url: 'https://www.w3.org/WAI/tutorials/forms/',
        type: 'documentation'
      }
    ],
    createdAt: new Date('2025-06-03'),
    updatedAt: new Date('2025-06-03')
  }
];
