"use client";

import Image from "next/image";
import styles from "./AcademicJourney.module.css";

type Experience = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageClass?: string;
  link?: string;
  linkLabel?: string;
};

const experiences: Experience[] = [
  {
    title: "Formação em Gestão de TI",
    subtitle: "PUCPR",
    description:
      "Minha base na tecnologia começou com uma formação sólida em Gestão de TI, onde tive contato com desenvolvimento, banco de dados, redes e projetos.",
    image: "/images/formatura.jpeg",
    imageClass: "graduationImage",
  },
  {
    title: "IT Girls",
    subtitle: "Co-fundadora do clube universitário",
    description:
      "Movida pelo desejo de fazer mais, participei da criação de um clube voltado para mulheres na tecnologia, promovendo apoio, colaboração e crescimento dentro da área.",
    image: "/images/it-girls.png",
  },
  {
    title: "Monitoria Acadêmica",
    subtitle: "Apoio em disciplinas de computação",
    description:
      "Com a evolução nos estudos, passei a apoiar outros alunos, criando conteúdos, tirando dúvidas e contribuindo diretamente com o aprendizado de colegas.",
    image: "/images/monitoria.png",
  },
  {
    title: "Lives PUCPR",
    subtitle: "Gestão de tempo e experiência acadêmica",
    description:
      "Minha trajetória também me levou a compartilhar experiências em lives, abordando organização, rotina e equilíbrio entre estudos, trabalho e vida pessoal.",
    image: "/images/live.png",
    link: "https://www.youtube.com/results?search_query=PUCPR+gest%C3%A3o+de+tempo+experi%C3%AAncia+acad%C3%AAmica",
    linkLabel: "Assistir no YouTube",
  },
];

export default function AcademicJourney() {
  return (
    <section id="trajetoria" className={styles.academic}>
      <div className={styles.stars} aria-hidden="true" />
      <div className={styles.orbit} aria-hidden="true" />

      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.badge}>Vida acadêmica</span>
          <h2>Minha jornada na tecnologia</h2>
          <p>
            Uma trajetória construída com aprendizado, comunidade, ensino e
            experiências que moldaram meu jeito de criar para a web.
          </p>
        </header>

        <div className={styles.timeline}>
          {experiences.map((item, index) => (
            <article
              key={item.title}
              className={styles.item}
              style={{ "--delay": `${index * 0.12}s` } as React.CSSProperties}
            >
              <div className={styles.marker}>
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>

              <div className={styles.media}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={560}
                  height={380}
                  className={item.imageClass ? styles[item.imageClass] : ""}
                />
              </div>

              <div className={styles.content}>
                <span>{item.subtitle}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>

                {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.linkLabel}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
