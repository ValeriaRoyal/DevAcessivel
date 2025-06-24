# DevAcessível

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Styled Components](https://img.shields.io/badge/Styled_Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![WCAG](https://img.shields.io/badge/WCAG_2.1-005A9C?style=for-the-badge&logo=w3c&logoColor=white)

Uma plataforma educativa para ensinar boas práticas de acessibilidade web com exemplos práticos e explicações detalhadas.

## 🚀 Sobre o Projeto

DevAcessível é uma plataforma dedicada a ensinar desenvolvedores web sobre boas práticas de acessibilidade através de exemplos concretos, comparações de código e explicações detalhadas. O objetivo é tornar a web mais inclusiva, mostrando como pequenas mudanças no código podem fazer grande diferença para usuários com deficiências.

A plataforma foi desenvolvida seguindo rigorosamente os princípios de acessibilidade que ela mesma ensina, servindo como um exemplo prático de implementação das diretrizes WCAG 2.1 nível AA.

## 🎯 Objetivos

- Ensinar boas práticas de acessibilidade web de forma prática e objetiva
- Demonstrar exemplos de código acessível vs. não acessível com explicações claras
- Explicar os princípios do WCAG (Web Content Accessibility Guidelines) de maneira simplificada
- Fornecer recursos adicionais para aprofundamento em cada tópico
- Ser um exemplo de site totalmente acessível em todos os aspectos
- Promover a inclusão digital através da educação de desenvolvedores

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca para construção de interfaces
- **TypeScript** - Superset tipado de JavaScript
- **Styled Components** - CSS-in-JS para estilização
- **React Router** - Navegação entre páginas
- **Framer Motion** - Animações acessíveis
- **React Helmet Async** - Gerenciamento de SEO e metadados
- **Axe-core** - Ferramentas de acessibilidade
- **Vite** - Build tool e dev server
- **Atkinson Hyperlegible** - Fonte otimizada para acessibilidade

## ♿ Recursos de Acessibilidade

O projeto implementa diversas funcionalidades de acessibilidade:

- **Fonte Atkinson Hyperlegible** - Desenvolvida pela Braille Institute especificamente para melhorar a legibilidade
- **Alternância de temas** - Opções de tema claro e escuro
- **Menu de acessibilidade** - Acesso rápido a configurações de acessibilidade
- **Alto contraste** - Modo de alto contraste para usuários com baixa visão
- **Ajuste de tamanho de texto** - Opções para aumentar ou diminuir o tamanho do texto
- **Navegação por teclado** - Suporte completo para navegação sem mouse
- **Landmarks semânticos** - Estrutura HTML semântica para leitores de tela
- **Atributos ARIA** - Implementação correta de roles, states e properties
- **Anúncios para leitores de tela** - Notificações sobre mudanças de estado

## 📁 Estrutura do Projeto

O projeto segue uma arquitetura MVC (Model-View-Controller) adaptada para React:

```
src/
├── assets/                 # Recursos estáticos
├── components/             # Componentes React (View)
│   ├── common/             # Componentes genéricos
│   ├── layout/             # Componentes de layout
│   └── features/           # Componentes específicos
├── controllers/            # Lógica de controle (Controller)
│   ├── hooks/              # Custom hooks
│   └── services/           # Serviços
├── models/                 # Modelos de dados (Model)
│   ├── interfaces/         # Definições de tipos
│   └── data/               # Dados estáticos
├── pages/                  # Componentes de página
├── routes/                 # Configuração de rotas
├── styles/                 # Estilos globais
├── utils/                  # Funções utilitárias
├── contexts/               # Contextos React
├── design-system/          # Sistema de design com tokens e componentes
├── App.tsx                 # Componente principal
└── main.tsx                # Ponto de entrada
```

## 🚀 Como Executar

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/ValeriaRoyal/DevAcessivel.git
   ```

2. **Instale as dependências**:
   ```bash
   cd DevAcessivel
   npm install
   ```

3. **Execute o projeto em modo de desenvolvimento**:
   ```bash
   npm run dev
   ```

4. **Acesse no navegador**:
   ```
   http://localhost:5173
   ```

5. **Verificar lint**:
   ```bash
   npm run lint
   ```

## 🌟 Funcionalidades

- **Navegação acessível** com suporte completo a teclado e leitores de tela
- **Filtros avançados** por categoria, dificuldade e busca textual
- **Exemplos de código** com syntax highlighting e botão de cópia
- **Temas personalizáveis** claro, escuro e alto contraste
- **Explicações detalhadas** sobre cada prática de acessibilidade
- **Referências ao WCAG** com links diretos para documentação oficial
- **Design responsivo** para todos os dispositivos e tamanhos de tela
- **Modo offline** para acesso sem internet após primeiro carregamento
- **Tutoriais interativos** para aprendizado prático

## 📊 Categorias de Conteúdo

- **Semântica HTML** - Uso correto de elementos e atributos
- **Navegação por teclado** - Foco, ordem de tabulação e atalhos
- **Contraste e cores** - Legibilidade e percepção de cores
- **Formulários acessíveis** - Labels, validação e feedback
- **Mídia acessível** - Alternativas para imagens, áudio e vídeo
- **ARIA** - Uso correto de roles, states e properties
- **Responsividade** - Adaptação para diferentes dispositivos
- **Performance** - Otimizações para diferentes capacidades de hardware

## 🔮 Próximos Passos

- [ ] Implementar sistema de busca avançada com filtros combinados
- [ ] Adicionar mais exemplos e categorias de acessibilidade
- [ ] Criar playground interativo para testar código ao vivo
- [ ] Implementar sistema de contribuição da comunidade com revisão
- [ ] Adicionar suporte para múltiplos idiomas (Português, Inglês, Espanhol)
- [ ] Implementar testes automatizados com Jest e Testing Library
- [ ] Configurar testes automatizados de acessibilidade com axe-core
- [ ] Integrar com backend para armazenamento de dados e perfis de usuário
- [ ] Desenvolver aplicativo móvel complementar

## 🧪 Testes de Acessibilidade

O projeto é regularmente testado com as seguintes ferramentas:

- **axe DevTools** - Para verificação automática de problemas de acessibilidade
- **Lighthouse** - Para análise de performance e acessibilidade
- **NVDA e VoiceOver** - Para testes com leitores de tela
- **Navegação por teclado** - Para garantir que todas as funcionalidades sejam acessíveis sem mouse
- **Simuladores de daltonismo** - Para testar a percepção de cores

## 🤝 Contribuição

Contribuições são bem-vindas! Se você tem uma sugestão para melhorar este projeto:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/amazing-feature`)
3. Faça commit das suas mudanças (`git commit -m 'Add some amazing feature'`)
4. Faça push para a branch (`git push origin feature/amazing-feature`)
5. Abra um Pull Request

Por favor, certifique-se de que suas contribuições seguem as diretrizes de acessibilidade do projeto.

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para detalhes.

## 📬 Contato

Valéria Regina - [valeriaroyal.contato@gmail.com](mailto:valeriaroyal.contato@gmail.com)

Link do Projeto: [https://github.com/ValeriaRoyal/DevAcessivel](https://github.com/ValeriaRoyal/DevAcessivel)

---

Desenvolvido com ❤️ por Valéria Regina | © 2025 DevAcessível
