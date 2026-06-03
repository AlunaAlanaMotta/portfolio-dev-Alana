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
    title: "Site Institucional para Advogado",
    description:
      "Site institucional completo com formulário de captação de clientes integrado a banco de dados e envio automático de e-mail, desenvolvido com stack moderna.",

    details: (
      <div className={styles.detailsContent}>
        <p className={styles.intro}>
          Projeto autoral desenvolvido do zero, unindo design institucional
          profissional com funcionalidades reais de back-end para captação de
          clientes.
        </p>

        <div className={styles.highlights}>
          <span>
            <i className="fas fa-envelope"></i> Envio de e-mail automático
          </span>
          <span>
            <i className="fas fa-database"></i> Banco de dados integrado
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
          <span>Tailwind CSS</span>
          <span>Supabase</span>
          <span>Resend</span>
        </div>

        <h4>
          <i className="fas fa-check-circle"></i> Funcionalidades
        </h4>
        <ul>
          <li>Formulário de atendimento jurídico (legal intake)</li>
          <li>Armazenamento dos dados no Supabase</li>
          <li>Envio automático de e-mail via Resend</li>
          <li>Layout responsivo e semântico</li>
        </ul>

        <p className={styles.result}>
          Projeto que une front-end moderno com integrações reais de back-end,
          entregando valor imediato ao cliente final.
        </p>
      </div>
    ),

    video: "/videos/advogado.mp4",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    demo: "https://advogado-inky-three.vercel.app/",
    code: "https://github.com/AlunaAlanaMotta/advogado",
  },

  {
    title: "Site Institucional para Clínica Odontológica",
    description:
      "Site institucional moderno para consultório odontológico com agendamento direto pelo WhatsApp, unindo apresentação profissional dos serviços e conversão de pacientes.",

    details: (
      <div className={styles.detailsContent}>
        <p className={styles.intro}>
          Projeto autoral desenvolvido para um consultório odontológico, unindo
          identidade visual profissional com funcionalidades que facilitam o
          contato e a conversão de novos pacientes.
        </p>

        <div className={styles.highlights}>
          <span>
            <i className="fab fa-whatsapp"></i> Agendamento via WhatsApp
          </span>
          <span>
            <i className="fas fa-mobile-alt"></i> Layout responsivo
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
          <span>CSS Modules</span>
        </div>

        <h4>
          <i className="fas fa-check-circle"></i> Entregas
        </h4>
        <ul>
          <li>Apresentação de serviços e especialidades</li>
          <li>Botão de agendamento com redirecionamento direto ao WhatsApp</li>
          <li>Design focado em transmitir confiança e profissionalismo</li>
          <li>Layout semântico e acessível</li>
          <li>Deploy em produção com domínio personalizado</li>
        </ul>

        <p className={styles.result}>
          Projeto que demonstra minha capacidade de entregar soluções práticas e
          orientadas à conversão, adaptadas às necessidades reais de cada
          negócio.
        </p>
      </div>
    ),

    video: "/videos/odontologia.mp4",
    tech: ["Next.js", "TypeScript", "CSS Modules"],
    demo: "https://odontologia-delta.vercel.app/",
    code: "https://github.com/AlunaAlanaMotta/odontologia",
  },

  {
    title: "Landing Page para Personal Trainer",
    description:
      "Landing page completa para personal trainer com apresentação de planos, depoimentos, estudos de caso e agendamento direto pelo WhatsApp.",

    details: (
      <div className={styles.detailsContent}>
        <p className={styles.intro}>
          Projeto autoral desenvolvido para um profissional de educação física,
          com foco em conversão de clientes e apresentação clara dos serviços
          oferecidos.
        </p>

        <div className={styles.highlights}>
          <span>
            <i className="fab fa-whatsapp"></i> Agendamento via WhatsApp
          </span>
          <span>
            <i className="fas fa-layer-group"></i> Múltiplas seções
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
          <span>CSS Modules</span>
        </div>

        <h4>
          <i className="fas fa-check-circle"></i> Funcionalidades
        </h4>
        <ul>
          <li>Apresentação de planos: presencial, online e híbrido</li>
          <li>Seção de depoimentos e transformações reais (antes/depois)</li>
          <li>FAQ com perguntas frequentes</li>
          <li>Método de treino em 4 etapas</li>
          <li>Múltiplos botões de agendamento direto pelo WhatsApp</li>
        </ul>

        <p className={styles.result}>
          Projeto orientado à conversão, mostrando como estruturar uma landing
          page completa que guia o visitante até o contato com o profissional.
        </p>
      </div>
    ),

    video: "/videos/personal.mp4",
    tech: ["Next.js", "TypeScript", "CSS Modules"],
    demo: "https://personal-trainer-blush-zeta.vercel.app/",
    code: "https://github.com/AlunaAlanaMotta/personal-trainer",
  },

  {
    title: "Maison Noir — Estúdio de Beleza",
    description:
      "Landing page sofisticada para estúdio de beleza com galeria de transformações, tabela de serviços e agendamento direto pelo WhatsApp.",

    details: (
      <div className={styles.detailsContent}>
        <p className={styles.intro}>
          Projeto autoral com identidade visual forte e elegante, desenvolvido
          para um estúdio de beleza exclusivo por agendamento.
        </p>

        <div className={styles.highlights}>
          <span>
            <i className="fab fa-whatsapp"></i> Agendamento via WhatsApp
          </span>
          <span>
            <i className="fas fa-images"></i> Galeria de transformações
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
          <span>CSS</span>
        </div>

        <h4>
          <i className="fas fa-check-circle"></i> Funcionalidades
        </h4>
        <ul>
          <li>
            Apresentação de serviços com preços (corte, coloração, tratamento,
            progressiva)
          </li>
          <li>Galeria de transformações antes/depois</li>
          <li>Depoimentos de clientes</li>
          <li>Informações de localização e horários</li>
          <li>Agendamento direto pelo WhatsApp</li>
        </ul>

        <p className={styles.result}>
          Projeto que une design sofisticado com estrutura orientada à
          conversão, refletindo a identidade premium do estúdio.
        </p>
      </div>
    ),

    video: "/videos/salaoCabelo.mp4",
    tech: ["Next.js", "TypeScript", "CSS"],
    demo: "https://salao-maison-noir.vercel.app/",
    code: "https://github.com/AlunaAlanaMotta/salao-maisonNoir",
  },

  {
    title: "Belle Âme — Clínica de Estética",
    description:
      "Site institucional para clínica de estética com apresentação de tratamentos, diferenciais, depoimentos e agendamento direto pelo WhatsApp.",

    details: (
      <div className={styles.detailsContent}>
        <p className={styles.intro}>
          Projeto autoral desenvolvido para uma clínica de estética, com design
          sofisticado e estrutura orientada à conversão de novos clientes.
        </p>

        <div className={styles.highlights}>
          <span>
            <i className="fab fa-whatsapp"></i> Agendamento via WhatsApp
          </span>
          <span>
            <i className="fas fa-spa"></i> Segmento estética
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
          <span>CSS</span>
        </div>

        <h4>
          <i className="fas fa-check-circle"></i> Funcionalidades
        </h4>
        <ul>
          <li>
            Apresentação de tratamentos: facial, corporal, rejuvenescimento e
            avançado
          </li>
          <li>Seção de diferenciais e proposta de valor</li>
          <li>Depoimentos de clientes com avaliações</li>
          <li>Estatísticas de credibilidade (8+ anos, 3k atendimentos)</li>
          <li>Agendamento direto pelo WhatsApp</li>
        </ul>

        <p className={styles.result}>
          Projeto que demonstra domínio em criar experiências visuais premium
          alinhadas à identidade e ao público de cada marca.
        </p>
      </div>
    ),

    video: "/videos/estetica.mp4",
    tech: ["Next.js", "TypeScript", "CSS"],
    demo: "https://salao-estetica-belle-ame.vercel.app/",
    code: "https://github.com/AlunaAlanaMotta/salao-estetica-Belle-Ame",
  },
];

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [detailsIndex, setDetailsIndex] = useState<number | null>(null);

  const project = projects[current];
  const detailsProject =
    detailsIndex === null ? null : (projects[detailsIndex] ?? null);
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

              <div className={styles.modalDetails}>
                {detailsProject.details}
              </div>
            </div>
          </div>,
          document.body,
        )}
    </section>
  );
}
