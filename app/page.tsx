import { contactItems, experience, navigation, projects, skillGroups } from "./data";

export default function Home() {
  return (
    <main>
      <header className="site-header" aria-label="Navegação principal">
        <a className="brand" href="#inicio" aria-label="Ir para o início">
          GFR
        </a>
        <nav>
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero section" id="inicio">
        <div className="hero-content">
          <p className="eyebrow">Desenvolvedor Full Stack</p>
          <h1>Gustavo Franchi Ruiz</h1>
          <p className="hero-copy">
            Atuo no desenvolvimento de aplicações para empresas, com foco em automação de
            processos, integrações entre sistemas e construção de soluções que tornam a
            operação mais organizada, escalável e eficiente.
          </p>
          <div className="hero-actions" aria-label="Ações principais">
            <a className="button secondary" href="#skills">
              Skills
            </a>
            <a className="button secondary" href="#sobre">
              Sobre
            </a>
            <a className="button secondary" href="#experiencia">
              Experiência
            </a>
            <a className="button secondary" href="#projetos">
              Projetos
            </a>
          </div>
        </div>

        <aside className="hero-contact" aria-label="Links de contato">
          {contactItems.map((item) => (
            <a key={item.label} href={item.href} target={item.href.startsWith("mailto:") ? undefined : "_blank"} rel="noopener noreferrer">
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </a>
          ))}
        </aside>
      </section>

      <section className="section skills-section" id="skills">
        <div className="section-heading compact-heading">
          <p className="eyebrow">Skills</p>
          <h2>Tecnologias</h2>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="skill-list">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-section" id="sobre">
        <div>
          <p className="eyebrow">Sobre</p>
          <h2>Base técnica aplicada a problemas de negócio.</h2>
        </div>
        <div className="prose">
          <p>
            Sou formado em Análise e Desenvolvimento de Sistemas pela FATEC e atuo com desenvolvimento de sistemas em projetos corporativos. Tenho como diferencial a capacidade de compreender processos, identificar necessidades do cliente e transformar essas demandas em soluções tecnológicas alinhadas ao negócio, atuando na construção de funcionalidades, integrações, workflows, relatórios e melhorias em sistemas utilizados por operações de grande porte.
          </p>
        </div>
      </section>

      <section className="section" id="experiencia">
        <div className="section-heading">
          <p className="eyebrow">Experiência</p>
          <h2>Experiência com sistemas internos e regras complexas.</h2>
        </div>
        <div className="timeline">
          {experience.map((job) => (
            <article className="timeline-item" key={`${job.company}-${job.role}`}>
              <div className="timeline-meta">
                <span>{job.period}</span>
                <strong>{job.company}</strong>
              </div>
              <div className="timeline-body">
                <h3>{job.role}</h3>
                <p>{job.summary}</p>
                <ul>
                  {job.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section projects-section" id="projetos">
        <div className="section-heading">
          <p className="eyebrow">Projetos</p>
          <h2>Projetos selecionados.</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.url}>
              <div className="browser-frame">
                <div className="browser-bar">
                  <div className="browser-dots">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="browser-url">{project.urlLabel}</div>
                </div>
                <div className="browser-screen">
                  {project.image ? (
                    <img src={project.image} alt={`Preview de ${project.title}`} />
                  ) : (
                    <span>Screenshot em breve</span>
                  )}
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a
                  className="project-link"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver projeto &rarr;
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
