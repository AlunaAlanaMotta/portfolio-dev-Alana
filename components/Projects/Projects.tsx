"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./Projects.module.css";
import PortfolioButton from "../PortfolioButton/PortfolioButton";
import { projects } from "./projects.data";

const particles = Array.from({ length: 26 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  top: `${(index * 53) % 100}%`,
  depth: `${0.35 + (index % 7) * 0.12}`,
  size: `${3 + (index % 4)}px`,
  delay: `${(index % 8) * -0.7}s`,
}));

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [transitionDirection, setTransitionDirection] = useState<
    "forward" | "reverse"
  >("forward");
  const [detailsIndex, setDetailsIndex] = useState<number | null>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const project = projects[current];
  const detailsProject =
    detailsIndex === null ? null : (projects[detailsIndex] ?? null);
  const modalRoot = typeof document === "undefined" ? null : document.body;

  const openDetails = (index: number) => setDetailsIndex(index);
  const closeDetails = () => setDetailsIndex(null);
  const selectProject = (index: number) => {
    if (index === current) return;
    setTransitionDirection(index > current ? "forward" : "reverse");
    setCurrent(index);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    e.currentTarget.style.setProperty("--mouse-x", x.toFixed(3));
    e.currentTarget.style.setProperty("--mouse-y", y.toFixed(3));
  };

  const handlePointerLeave = (e: React.PointerEvent<HTMLElement>) => {
    e.currentTarget.style.setProperty("--mouse-x", "0");
    e.currentTarget.style.setProperty("--mouse-y", "0");
  };

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDetails();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (detailsIndex === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [detailsIndex]);

  // Arrow key navigation between tabs
  const handleTabKeyDown = (e: React.KeyboardEvent, index: number) => {
    let next = index;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      next = (index + 1) % projects.length;
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      next = (index - 1 + projects.length) % projects.length;
    } else if (e.key === "Home") {
      next = 0;
    } else if (e.key === "End") {
      next = projects.length - 1;
    } else {
      return;
    }
    e.preventDefault();
    selectProject(next);
    tabRefs.current[next]?.focus();
  };

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
    <section
      id="projetos"
      className={styles.projects}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className={styles.controlGrid} aria-hidden="true" />
      <div className={styles.energyHalo} aria-hidden="true" />
      <div className={styles.particleField} aria-hidden="true">
        {particles.map((particle) => (
          <span
            key={particle.id}
            style={
              {
                "--particle-left": particle.left,
                "--particle-top": particle.top,
                "--particle-depth": particle.depth,
                "--particle-size": particle.size,
                "--particle-delay": particle.delay,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

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
          <div
            className={styles.projectList}
            role="tablist"
            aria-label="Lista de projetos"
            aria-orientation="vertical"
          >
            {projects.map((item, index) => (
              <button
                key={item.title}
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
                id={`project-tab-${index}`}
                role="tab"
                aria-selected={current === index}
                aria-controls={`project-panel-${index}`}
                tabIndex={current === index ? 0 : -1}
                className={`${styles.projectItem} ${
                  current === index ? styles.activeProject : ""
                }`}
                type="button"
                onClick={() => selectProject(index)}
                onKeyDown={(e) => handleTabKeyDown(e, index)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item.shortTitle}</strong>
                <small>{item.tech.slice(0, 2).join(" + ")}</small>
              </button>
            ))}
          </div>

          <article
            id={`project-panel-${current}`}
            role="tabpanel"
            aria-labelledby={`project-tab-${current}`}
            className={styles.featuredProject}
            data-direction={transitionDirection}
          >
            <div key={`scene-${current}`} className={styles.sceneStage}>
              <div className={styles.browserFrame}>
                <div className={styles.browserBar} aria-hidden="true">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span className={styles.browserUrl}>{project.url}</span>
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
            </div>

            <div key={current} className={styles.projectInfo}>
              <div className={styles.projectMeta}>
                <span className={styles.projectCount}>
                  {String(current + 1).padStart(2, "0")} /{" "}
                  {String(projects.length).padStart(2, "0")}
                </span>
                <span className={styles.categoryBadge}>{project.category}</span>
              </div>
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
              <video
                src={item.video}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              />

              <div className={styles.mobileCardBody}>
                <div className={styles.projectMeta}>
                  <span className={styles.projectCount}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.categoryBadge}>{item.category}</span>
                </div>
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

              <div className={styles.modalVideo}>
                <video
                  src={detailsProject.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>

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
