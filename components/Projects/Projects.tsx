"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./Projects.module.css";
import PortfolioButton from "../PortfolioButton/PortfolioButton";

const projects = [
  {
    title: "Vitz Monitoramento",
    description:
      "Projeto desenvolvido como minha primeira experiência profissional na área, com foco em criação de um site institucional moderno, performático e orientado à conversão de clientes.",

    details: (
      <div className={styles.detailsContent}>
        <p className={styles.intro}>
          Este projeto marcou minha primeira experiência profissional como
          desenvolvedora front-end, com foco em entregar uma solução real e
          eficiente.
        </p>

        <div className={styles.highlights}>
          <span>
            <i className="fas fa-search"></i> SEO otimizado
          </span>
          <span>
            <i className="fas fa-bolt"></i> Alta performance
          </span>
          <span>
            <i className="fas fa-rocket"></i> Deploy em produção
          </span>
        </div>

        <h4>
          <i className="fas fa-code"></i> Tecnologias
        </h4>
        <div className={styles.techList}>
          <span>Next.js</span>
          <span>TypeScript</span>
          <span>React Hooks</span>
          <span>CSS Modules</span>
        </div>

        <h4>
          <i className="fas fa-check-circle"></i> Entregas
        </h4>
        <ul>
          <li>Refatoração completa do projeto</li>
          <li>Melhoria de SEO e semântica</li>
          <li>Deploy com domínio personalizado</li>
          <li>Layout responsivo</li>
        </ul>

        <p className={styles.result}>
          Esse projeto consolidou minha transição para a área de tecnologia.
        </p>
      </div>
    ),

    video: "/videos/video-site-vitz.mp4",
    tech: ["Next.js", "TypeScript", "SEO", "UX/UI"],
    demo: "https://vitzmonitoramento.vercel.app/",
    code: "https://github.com/AlunaAlanaMotta/vitzmonitoramento",
  },

  {
    title: "Pokédex Interativa",
    description:
      "Aplicação web interativa com consumo de API externa, exibindo dados dinâmicos em tempo real.",

    details: (
      <div className={styles.detailsContent}>
        <p className={styles.intro}>
          Projeto desenvolvido com foco em integração com API externa,
          permitindo consumir e exibir dados dinâmicos de forma organizada.
        </p>

        <div className={styles.highlights}>
          <span>
            <i className="fas fa-database"></i> Consumo de API
          </span>
          <span>
            <i className="fas fa-sync"></i> Dados dinâmicos
          </span>
          <span>
            <i className="fas fa-bolt"></i> Interface rápida
          </span>
        </div>

        <h4>
          <i className="fas fa-code"></i> Tecnologias
        </h4>
        <div className={styles.techList}>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>API REST</span>
        </div>

        <h4>
          <i className="fas fa-check-circle"></i> Funcionalidades
        </h4>
        <ul>
          <li>Consumo da PokeAPI</li>
          <li>Renderização dinâmica</li>
          <li>Interface interativa</li>
        </ul>

        <p className={styles.result}>
          Esse projeto fortaleceu minhas habilidades em integração com APIs.
        </p>
      </div>
    ),

    video: "/videos/video-pokedex.mp4",
    tech: ["JavaScript", "API", "UI"],
    demo: "https://desafio-dio-poke-api.vercel.app/",
    code: "https://github.com/AlunaAlanaMotta/desafio-dio-poke-api",
  },

  {
    title: "AluraFlix (CRUD)",
    description:
      "Aplicação estilo streaming com organização por categorias e funcionalidades CRUD para gerenciamento de conteúdo.",

    details: (
      <div className={styles.detailsContent}>
        <p className={styles.intro}>
          Aplicação inspirada em plataformas de streaming, com foco em
          componentização e manipulação de dados.
        </p>

        <p>
          Desenvolvi funcionalidades de gerenciamento de conteúdo utilizando
          conceitos de CRUD, permitindo interação completa com os dados na
          interface.
        </p>

        <div className={styles.highlights}>
          <span>
            <i className="fas fa-layer-group"></i> Componentização
          </span>
          <span>
            <i className="fas fa-database"></i> CRUD completo
          </span>
          <span>
            <i className="fas fa-film"></i> Interface streaming
          </span>
        </div>

        <h4>
          <i className="fas fa-code"></i> Tecnologias
        </h4>
        <div className={styles.techList}>
          <span>React</span>
          <span>JavaScript</span>
          <span>CSS</span>
        </div>

        <h4>
          <i className="fas fa-database"></i> Funcionalidades
        </h4>
        <ul>
          <li>Cadastro de vídeos (Create)</li>
          <li>Listagem dinâmica (Read)</li>
          <li>Edição de dados (Update)</li>
          <li>Remoção de conteúdo (Delete)</li>
        </ul>

        <p className={styles.result}>
          Esse projeto reforçou minha capacidade de trabalhar com estado e
          lógica de aplicação.
        </p>
      </div>
    ),

    video: "/videos/video-aluraflix.mp4",
    tech: ["React", "CRUD", "State"],
    demo: "https://alura-flix-swart-nine.vercel.app/",
    code: "#",
  },

  {
    title: "Portfólio Inicial (Figma → Código)",
    description:
      "Projeto focado na conversão de layout do Figma para código, marcando o início da minha jornada como desenvolvedora front-end.",

    details: (
      <div className={styles.detailsContent}>
        <p className={styles.intro}>
          Este foi um dos primeiros projetos que desenvolvi na área de
          front-end, e representa um momento muito importante da minha
          trajetória.
        </p>

        <p>
          Foi a primeira vez que consegui transformar um layout do Figma em
          código, entendendo na prática como estruturar uma interface real e
          funcional.
        </p>

        <div className={styles.highlights}>
          <span>
            <i className="fas fa-pencil-ruler"></i> Figma → Código
          </span>
          <span>
            <i className="fas fa-mobile-alt"></i> Responsivo
          </span>
          <span>
            <i className="fas fa-layer-group"></i> Estrutura semântica
          </span>
        </div>

        <h4>
          <i className="fas fa-code"></i> Tecnologias
        </h4>
        <div className={styles.techList}>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
        </div>

        <h4>
          <i className="fas fa-chart-line"></i> Evolução
        </h4>
        <ul>
          <li>Primeiro contato com conversão de layout (Figma → código)</li>
          <li>Aprendizado de responsividade</li>
          <li>Organização de estilos CSS</li>
          <li>Base de estruturação HTML semântica</li>
        </ul>

        <p className={styles.result}>
          Hoje, olhando para esse projeto, consigo enxergar claramente minha
          evolução, desde os primeiros passos até projetos mais completos e
          profissionais que desenvolvi depois.
        </p>
        <p className={styles.evolutionHighlight}>
          Este projeto representa o início da minha evolução como
          desenvolvedora.
        </p>
      </div>
    ),

    video: "/videos/video-portfolio.mp4", //
    tech: ["HTML", "CSS", "JavaScript", "Figma"],
    demo: "https://portfolio-alana.vercel.app/",
    code: "#",
  },

  {
    title: "Temporizador Interativo",
    description:
      "Aplicação web interativa focada em experiência do usuário, com controle de tempo, estados e feedback visual dinâmico.",

    details: (
      <div className={styles.detailsContent}>
        <p className={styles.intro}>
          Projeto desenvolvido com foco em interação e experiência do usuário,
          explorando manipulação de tempo e comportamento dinâmico da interface.
        </p>

        <p>
          A aplicação permite controlar ciclos de tempo de forma intuitiva, com
          feedback visual em tempo real e transições suaves, reforçando a
          usabilidade e a clareza das ações do usuário.
        </p>

        <div className={styles.highlights}>
          <span>
            <i className="fas fa-clock"></i> Controle de tempo
          </span>
          <span>
            <i className="fas fa-bolt"></i> Interação em tempo real
          </span>
          <span>
            <i className="fas fa-mouse-pointer"></i> UX intuitiva
          </span>
        </div>

        <h4>
          <i className="fas fa-code"></i> Tecnologias
        </h4>
        <div className={styles.techList}>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS</span>
        </div>

        <h4>
          <i className="fas fa-cogs"></i> Funcionalidades
        </h4>
        <ul>
          <li>Contagem regressiva com controle de tempo</li>
          <li>Manipulação de estados da aplicação</li>
          <li>Feedback visual dinâmico</li>
          <li>Interações em tempo real com o usuário</li>
        </ul>

        <p className={styles.result}>
          Esse projeto fortaleceu minha habilidade em criar interfaces
          interativas e melhorar a experiência do usuário com JavaScript.
        </p>
      </div>
    ),

    video: "/videos/video-tempo.mp4", //
    tech: ["JavaScript", "UX", "UI", "Interação"],
    demo: "https://temporizador-alura.vercel.app/",
    code: "#",
  },
];

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [detailsIndex, setDetailsIndex] = useState<number | null>(null);

  const project = projects[current];
  const detailsProject =
    detailsIndex === null ? null : projects[detailsIndex] ?? null;
  const modalRoot = typeof document === "undefined" ? null : document.body;

  const openDetails = (index: number) => setDetailsIndex(index);
  const closeDetails = () => setDetailsIndex(null);

  useEffect(() => {
    if (detailsIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [detailsIndex]);

  const renderActions = (selectedProject: (typeof projects)[number]) => (
    <div className={styles.buttons}>
      <PortfolioButton
        href={selectedProject.demo}
        target="_blank"
        rel="noopener noreferrer"
        rootClassName={styles.projectButton}
        className={styles.projectButtonLink}
      >
        Ver site
      </PortfolioButton>
      <PortfolioButton
        href={selectedProject.code}
        target="_blank"
        rel="noopener noreferrer"
        variant="secondary"
        rootClassName={styles.projectButton}
        className={styles.projectButtonLink}
      >
        Código
      </PortfolioButton>
    </div>
  );

  return (
    <section id="projetos" className={styles.projects}>
      <div className={styles.controlGrid} aria-hidden="true" />
      <div className={styles.energyHalo} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Projetos selecionados</span>
          <h2
            className="section-title reveal"
            data-delay="0"
            data-title="Projetos"
          >
            Do conceito ao código
          </h2>
          <p>
            Interfaces reais, responsivas e pensadas para transformar ideias em
            experiências digitais claras, modernas e funcionais.
          </p>
        </div>

        <div className={`${styles.desktopExperience} reveal`} data-delay="200">
          <div className={styles.projectList} aria-label="Lista de projetos">
            {projects.map((item, index) => (
              <button
                key={item.title}
                className={`${styles.projectItem} ${
                  current === index ? styles.activeProject : ""
                }`}
                type="button"
                onClick={() => setCurrent(index)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item.title}</strong>
                <small>{item.tech.slice(0, 2).join(" + ")}</small>
              </button>
            ))}
          </div>

          <article className={styles.featuredProject}>
            <div className={styles.browserFrame}>
              <div className={styles.browserBar} aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <video
                key={project.video}
                src={project.video}
                autoPlay
                loop
                muted
                playsInline
              />
            </div>

            <div className={styles.projectInfo}>
              <span className={styles.projectCount}>
                {String(current + 1).padStart(2, "0")} /{" "}
                {String(projects.length).padStart(2, "0")}
              </span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className={styles.tech}>
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>

              <div className={styles.actionRow}>
                {renderActions(project)}
                <button
                  className={styles.detailsButton}
                  type="button"
                  onClick={() => openDetails(current)}
                >
                  Ver detalhes
                </button>
              </div>
            </div>
          </article>
        </div>

        <div className={styles.mobileProjects}>
          {projects.map((item, index) => (
            <article className={styles.mobileCard} key={item.title}>
              <video src={item.video} muted playsInline preload="metadata" />

              <div className={styles.mobileCardBody}>
                <span className={styles.projectCount}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <div className={styles.tech}>
                  {item.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>

                {renderActions(item)}

                <button
                  className={styles.detailsButton}
                  type="button"
                  onClick={() => openDetails(index)}
                >
                  Ver detalhes
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {modalRoot &&
        detailsProject &&
        createPortal(
        <div className={styles.modalOverlay} onClick={closeDetails}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeButton}
              type="button"
              onClick={closeDetails}
              aria-label="Fechar detalhes"
            >
              ×
            </button>

            <h3>{detailsProject.title}</h3>

            <div className={styles.modalDetails}>{detailsProject.details}</div>
          </div>
        </div>,
          document.body,
        )}
    </section>
  );
}
