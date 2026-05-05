"use client";

import styles from "./Skills.module.css";
import type { IconType } from "react-icons";
import {
  SiCss,
  SiFigma,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTypescript,
} from "react-icons/si";

type Skill = {
  name: string;
  label: string;
  Icon: IconType;
  className: string;
};

const coreSkills: Skill[] = [
  {
    name: "React",
    label: "Componentes vivos",
    Icon: SiReact,
    className: "react",
  },
  {
    name: "Next.js",
    label: "Rotas, performance e SEO",
    Icon: SiNextdotjs,
    className: "next",
  },
  {
    name: "TypeScript",
    label: "Código mais seguro",
    Icon: SiTypescript,
    className: "typescript",
  },
];

const supportSkills: Skill[] = [
  {
    name: "JavaScript",
    label: "Interatividade",
    Icon: SiJavascript,
    className: "javascript",
  },
  {
    name: "HTML5",
    label: "Semântica",
    Icon: SiHtml5,
    className: "html",
  },
  {
    name: "CSS3",
    label: "Responsividade",
    Icon: SiCss,
    className: "css",
  },
  {
    name: "Figma",
    label: "Prototipação",
    Icon: SiFigma,
    className: "figma",
  },
  {
    name: "GitHub",
    label: "Versionamento",
    Icon: SiGithub,
    className: "github",
  },
];

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.stars} aria-hidden="true" />
      <div className={styles.orbitBackdrop} aria-hidden="true" />

      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.badge}>Stack em órbita</span>
          <h2>Meu painel de criação front-end</h2>
          <p>
            Tecnologias que uso para transformar ideias em interfaces modernas,
            responsivas e com aquela camada de detalhe que faz a experiência
            parecer mais viva.
          </p>
        </header>

        <div className={styles.dashboard}>
          <div className={styles.radarPanel}>
            <div className={styles.radar} aria-hidden="true">
              <span className={styles.ringOne} />
              <span className={styles.ringTwo} />
              <span className={styles.ringThree} />
              <span className={styles.scanLine} />
            </div>

            <div className={styles.coreStack}>
              {coreSkills.map(({ name, label, Icon, className }, index) => (
                <article
                  key={name}
                  className={`${styles.coreCard} ${styles[className]}`}
                  style={
                    { "--delay": `${index * 0.12}s` } as React.CSSProperties
                  }
                >
                  <div className={styles.icon}>
                    <Icon />
                  </div>
                  <div>
                    <h3>{name}</h3>
                    <p>{label}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className={styles.supportPanel}>
            <div className={styles.panelHeader}>
              <span>Ferramentas de apoio</span>
              <p>Base visual, estrutura e fluxo de trabalho.</p>
            </div>

            <div className={styles.supportGrid}>
              {supportSkills.map(({ name, label, Icon, className }, index) => (
                <article
                  key={name}
                  className={`${styles.supportCard} ${styles[className]}`}
                  style={
                    { "--delay": `${index * 0.08}s` } as React.CSSProperties
                  }
                >
                  <div className={styles.icon}>
                    <Icon />
                  </div>
                  <div>
                    <h3>{name}</h3>
                    <p>{label}</p>
                  </div>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
