"use client";

import styles from "./about.module.css";
import AvatarInteractive from "@/components/Avatar/AvatarInteractive";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function AboutPage() {
  const lightRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!aboutRef.current) return;

      const section = aboutRef.current;
      const rect = section.getBoundingClientRect();

      const progress = Math.min(
        Math.max(Math.abs(rect.top) / section.offsetHeight, 0),
        1,
      );

      section.style.setProperty("--space-scroll", `${progress}`);
      section.style.setProperty("--space-rotate", `${progress * 360}`);
      const opacity = progress < 0.75 ? 1 : 1 - (progress - 0.75) * 4;

      section.style.setProperty("--space-opacity", `${Math.max(opacity, 0)}`);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll(`.${styles.cardItem}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            el.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.2 },
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <main className={styles.container}>
      <section ref={aboutRef} className={styles.aboutSection}>
        <div className={styles.spaceLayer}>
          <Image
            src="/images/planet-1.png"
            alt=""
            className={`${styles.planet} ${styles.planetOne}`}
            width={220}
            height={220}
          />

          <Image
            src="/images/planet-2.png"
            alt=""
            className={`${styles.planet} ${styles.planetTwo}`}
            width={180}
            height={180}
          />

          <Image
            src="/images/planet-3.png"
            alt=""
            className={`${styles.planet} ${styles.planetThree}`}
            width={160}
            height={160}
          />
        </div>
        <div ref={lightRef} className={styles.lightLayer} />

        <div className={styles.hero}>
          <div className={styles.card}>
            <h1 className={styles.glitch} data-text="Sobre mim">
              Sobre mim
            </h1>

            <h1 className={styles.title}>
              Construindo experiências digitais com{" "}
              <span>intenção e estética</span>
            </h1>

            <div className={styles.story}>
              <div className={styles.storyBlock}>
                <span>01 — Origem</span>
                <p>
                  Minha trajetória não começou na tecnologia — e talvez seja
                  exatamente isso que torna meu olhar diferente. Antes de entrar
                  para a área de desenvolvimento, construí minha base em
                  ambientes que exigiam comunicação, organização e resolução
                  constante de problemas.
                </p>
              </div>

              <div className={styles.storyBlock}>
                <span>02 — Transição</span>
                <p>
                  A transição para a tecnologia foi uma decisão consciente de
                  buscar algo que fizesse sentido para mim. No front-end,
                  encontrei no código uma forma de transformar ideias em
                  experiências digitais.
                </p>
              </div>

              <div className={styles.storyBlock}>
                <span>03 — Hoje</span>
                <p>
                  Atualmente, estou finalizando minha formação como Engenheira
                  Front-End pela EBAC e sigo construindo interfaces modernas,
                  intuitivas e bem estruturadas com React, Next.js e TypeScript.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.avatarStage}>
            <AvatarInteractive />
          </div>
        </div>
      </section>

      <section className={styles.cardsSection}>
        <div className={styles.stars}></div>
        <div className={styles.cardsWrapper}>
          <div className={styles.cardsHeader}>
            <span>Meu lado criativo</span>
            <h2 className={styles.sectionTitle}>Além do código</h2>
            <p>
              Interesses que também influenciam meu olhar criativo, minha
              atenção aos detalhes e minha forma de construir experiências.
            </p>
          </div>

          <div className={styles.timeline}>
            <div className={styles.cardItem}>
              <Image
                src="/images/bg-film.png"
                alt="Séries e filmes"
                fill
                sizes="(max-width: 768px) 100vw, 560px"
                className={styles.cardImage}
              />

              <div className={styles.overlay} aria-hidden="true">
                <span>Inspiração criativa</span>
                <h3>Séries e filmes</h3>
              </div>

              <div className={styles.content}>
                <span>Inspiração criativa</span>
                <h3>Séries e filmes</h3>
                <p>
                  Gosto de histórias que despertam criatividade, emoção e novas
                  formas de enxergar o mundo.
                </p>
              </div>
            </div>

            <div className={styles.cardItem}>
              <Image
                src="/images/bg-travel.png"
                alt="Viagens"
                fill
                sizes="(max-width: 768px) 100vw, 560px"
                className={styles.cardImage}
              />

              <div className={styles.overlay} aria-hidden="true">
                <span>Descoberta e aprendizado</span>
                <h3>Viagens</h3>
              </div>

              <div className={styles.content}>
                <span>Descoberta e aprendizado</span>
                <h3>Viagens</h3>
                <p>
                  Explorar novos lugares me inspira a observar detalhes,
                  culturas e experiências diferentes.
                </p>
              </div>
            </div>

            <div className={styles.cardItem}>
              <Image
                src="/images/bg-crochet.png"
                alt="Crochê e criatividade"
                fill
                sizes="(max-width: 768px) 100vw, 560px"
                className={styles.cardImage}
              />

              <div className={styles.overlay} aria-hidden="true">
                <span>Manual e artesanato</span>
                <h3>Crochê e criatividade</h3>
              </div>

              <div className={styles.content}>
                <span>Manual e artesanato</span>
                <h3>Crochê e criatividade</h3>
                <p>
                  O crochê me conecta com paciência, atenção aos detalhes e
                  construção manual — pontos que também levo para o código.
                </p>
              </div>
            </div>

            <div className={styles.cardItem}>
              <Image
                src="/images/bg-design.png"
                alt="Decoração"
                fill
                sizes="(max-width: 768px) 100vw, 560px"
                className={styles.cardImage}
              />

              <div className={styles.overlay} aria-hidden="true">
                <span>Estética e composição</span>
                <h3>Decoração</h3>
              </div>

              <div className={styles.content}>
                <span>Estética e composição</span>
                <h3>Decoração</h3>
                <p>
                  Tenho interesse por ambientes bem pensados, estética visual e
                  composição — algo que também influencia meu olhar para UI.
                </p>
              </div>
            </div>

            <div className={styles.cardItem}>
              <Image
                src="/images/bg-podcast.png"
                alt="Podcasts e curiosidades"
                fill
                sizes="(max-width: 768px) 100vw, 560px"
                className={styles.cardImage}
              />

              <div className={styles.overlay} aria-hidden="true">
                <span>História, mente e universo</span>
                <h3>Podcasts e curiosidades</h3>
              </div>

              <div className={styles.content}>
                <span>História, mente e universo</span>
                <h3>Podcasts e curiosidades</h3>
                <p>
                  Gosto de ouvir podcasts sobre história, psicologia,
                  comportamento e astronomia. São temas que alimentam minha
                  curiosidade, ampliam minha visão de mundo e inspiram meu olhar
                  criativo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
