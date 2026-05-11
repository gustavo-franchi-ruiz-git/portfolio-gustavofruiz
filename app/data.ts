export const navigation = [
  { label: "Início", href: "#inicio" },
  { label: "Tecnologias", href: "#skills" },
  { label: "Sobre", href: "#sobre" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Projetos", href: "#projetos" },
];

export const experience = [
  {
    role: "Desenvolvedor Full Stack",
    company: "Siena Company",
    period: "Atual",
    summary:
      "Desenvolvimento de sistemas para operações corporativas, com foco em regras de negócio, integrações, workflows e modernização de aplicações internas.",
    highlights: [
      "Implementação de workflows, formulários, relatórios dinâmicos e eventos na plataforma Fluig usando JavaScript, jQuery, APIs e bancos relacionais.",
      "Desenvolvimento de integrações HTTP com sistemas externos, incluindo tratamento de dados e comunicação entre ambientes corporativos.",
      "Atuação em WMS corporativo com Node.js, NestJS, Next.js, React, SQL Server e Docker.",
      "Atuação em projeto CisPRO com C#/.NET, Oracle e React para sistema de bancada de testes de placas de computador e notebook.",
    ],
  },
  {
    role: "Estagiário em Tecnologia",
    company: "MKData",
    period: "Início na tecnologia",
    summary:
      "Primeira experiência profissional em tecnologia, trabalhando com dados, relatórios e consultas para necessidades de negócio.",
    highlights: [
      "Criação de relatórios dinâmicos no FastReport.",
      "Consultas SQL em bases Oracle e Firebird para extração e organização de dados.",
      "Leitura de requisitos e tradução de informações operacionais em entregas técnicas.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Front-end",
    items: ["React", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    title: "Back-end",
    items: ["Node.js", "NestJS", "C#", ".NET", "APIs REST"],
  },
  {
    title: "Bancos de dados",
    items: ["SQL Server", "Oracle", "Firebird", "SQL", "noSQL"],
  },
  {
    title: "Ferramentas & ambiente",
    items: ["Git", "Docker", "Fluig", "IAs", "Metodologias Ágeis"],
  },
  {
    title: "Contexto de atuação",
    items: [
      "Integrações entre sistemas",
      "Sistemas legados",
      "Processos corporativos",
    ],
  },
];

export const projects = [
  {
    title: "Cond-Ops",
    description:
      "Webapp para gestão e controle de ordens de serviço condominiais. Nasceu de uma necessidade real — ajudar minha mãe como síndica — e evoluiu para um produto independente.",
    url: "https://www.cond-ops.com.br",
    urlLabel: "www.cond-ops.com.br",
    image: "/screenshotProjeto.png",
  },
];

export const contactItems = [
  { label: "Email", value: "email@exemplo.com", href: "mailto:email@exemplo.com" },
  { label: "LinkedIn", value: "linkedin.com/in/seu-usuario", href: "#" },
  { label: "GitHub", value: "github.com/seu-usuario", href: "#" },
];
