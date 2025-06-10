import styled from 'styled-components';

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const AboutTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--color-text);
`;

const AboutSection = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 1rem;
  color: var(--color-text);
`;

const SectionText = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: var(--color-text);
`;

const TeamList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const TeamMember = styled.li`
  text-align: center;
`;

const TeamMemberName = styled.h3`
  font-size: 1.25rem;
  margin: 1rem 0 0.5rem;
  color: var(--color-text);
`;

const TeamMemberRole = styled.p`
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  margin: 0;
`;

const Avatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: var(--color-background-alt);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-size: 3rem;
  color: var(--color-primary);
`;

/**
 * Página Sobre com informações sobre o projeto e equipe
 */
export const AboutPage = () => {
  return (
    <AboutContainer>
      <AboutTitle>Sobre o DevAcessível</AboutTitle>
      
      <AboutSection>
        <SectionTitle>Nossa Missão</SectionTitle>
        <SectionText>
          O DevAcessível nasceu da necessidade de tornar o conhecimento sobre acessibilidade web mais acessível para desenvolvedores. Nossa missão é simplificar a implementação de práticas de acessibilidade, fornecendo exemplos práticos, explicações claras e recursos úteis.
        </SectionText>
        <SectionText>
          Acreditamos que a web deve ser para todos, independentemente de suas habilidades ou limitações. Ao educar desenvolvedores sobre boas práticas de acessibilidade, contribuímos para um ambiente digital mais inclusivo e equitativo.
        </SectionText>
      </AboutSection>
      
      <AboutSection>
        <SectionTitle>O Projeto</SectionTitle>
        <SectionText>
          O DevAcessível é uma plataforma educacional que oferece "macetes" de acessibilidade - dicas práticas e exemplos de código que mostram como implementar recursos acessíveis em projetos web. Cada macete inclui exemplos de código bom e ruim, explicações detalhadas e referências às diretrizes WCAG relevantes.
        </SectionText>
        <SectionText>
          Este projeto é de código aberto e está disponível no GitHub. Convidamos desenvolvedores a contribuir com novos macetes, correções ou melhorias na plataforma.
        </SectionText>
      </AboutSection>
      
      <AboutSection>
        <SectionTitle>Nossa Equipe</SectionTitle>
        <SectionText>
          Sou uma desenvolvedora e designer apaixonada por criar experiências web inclusivas e acessíveis para todos os usuários.
        </SectionText>
        
        <TeamList>
          <TeamMember>
            <Avatar aria-hidden="true">👩‍💻</Avatar>
            <TeamMemberName>Valéria Regina Araujo do Nascimento</TeamMemberName>
            <TeamMemberRole>Desenvolvedora Frontend & UX/UI Designer</TeamMemberRole>
          </TeamMember>
        </TeamList>
      </AboutSection>
      
      <AboutSection>
        <SectionTitle>Contato</SectionTitle>
        <SectionText>
          Tem sugestões, dúvidas ou quer contribuir com o projeto? Entre em contato conosco pelo email <a href="mailto:valeriaroyal.contato@gmail.com">valeriaroyal.contato@gmail.com</a> ou visite nosso repositório no <a href="https://github.com/devacessivel/devacessivel" target="_blank" rel="noopener noreferrer">GitHub</a>.
        </SectionText>
      </AboutSection>
    </AboutContainer>
  );
};
