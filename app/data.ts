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
      "Atuação no desenvolvimento de sistemas corporativos, com foco em regras de negócio, integrações entre sistemas, automação de processos e evolução de aplicações internas.",
    highlights: [
      "Desenvolvimento de workflows, formulários, relatórios dinâmicos e eventos na plataforma Fluig, utilizando JavaScript, jQuery, APIs REST e bancos de dados relacionais.",
      "Implementação de integrações HTTP com sistemas externos, incluindo validação, transformação e sincronização de dados entre ambientes corporativos.",
      "Atuação no desenvolvimento de sistemas voltados à gestão e operação logística, utilizando Node.js, NestJS, Next.js, React, SQL Server e Docker.",
      "Participação no desenvolvimento de aplicações corporativas com C#/.NET, Oracle e React, voltadas à operação e suporte de processos internos.",
    ],
  },
  {
    role: "Estagiário em Tecnologia",
    company: "MKData",
    period: "Estágio",
    summary:
      "Primeira experiência profissional na área de tecnologia, com atuação em consultas a banco de dados, relatórios e suporte a processos de negócio em sistemas ERP e rotinas da área da saúde.",
    highlights: [
      "Desenvolvimento de relatórios dinâmicos com FastReport.",
      "Elaboração de consultas SQL em bases Oracle e Firebird para extração, análise e organização de dados.",
      "Criação de queries utilizadas em processos relacionados à emissão de receitas médicas e rotinas de sistemas ERP.",
      "Apoio na interpretação de requisitos e na tradução de demandas operacionais em entregas técnicas.",
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
  { label: "Email", value: "contato@gustavofranchiruiz.com.br", href: "mailto:contato@gustavofranchiruiz.com.br" },
  { label: "LinkedIn", value: "Gustavo Franchi Ruiz", href: "https://www.linkedin.com/in/gustavo-franchi-ruiz-20b3b31b9/" },
  { label: "GitHub", value: "gustavo-franchi-ruiz-git", href: "https://github.com/gustavo-franchi-ruiz-git" },
];
