import Image from "next/image";
import PortfolioButton from "../PortfolioButton/PortfolioButton";
import styles from "./Hero.module.css";

const specialties = ["React", "Next.js", "TypeScript", "UI/UX responsiva"];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.stars} aria-hidden="true" />
      <div className={styles.cosmicDust} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>
            Front-end developer orbitando ideias
          </span>

          <h1 className={styles.title}>
            Código, estética e um pouco de universo.
          </h1>

          <p className={styles.description}>
            Olá, eu sou <strong>Alana</strong>. Crio experiências front-end com
            React, Next.js e TypeScript, misturando interfaces responsivas,
            detalhes vivos e código com intenção.
          </p>

          <p className={styles.availability}>
            <span className={styles.availabilityDot} aria-hidden="true" />
            Disponível para CLT/PJ · Curitiba e remoto
          </p>

          <div className={styles.specialties} aria-label="Especialidades">
            {specialties.map((specialty) => (
              <span key={specialty}>{specialty}</span>
            ))}
          </div>

          <div className={styles.actions}>
            <PortfolioButton
              href="#projetos"
              rootClassName={styles.heroButton}
              className={styles.heroButtonLink}
            >
              Ver projetos
            </PortfolioButton>

            <PortfolioButton
              href="#contato"
              variant="secondary"
              rootClassName={styles.heroButton}
              className={styles.heroButtonLink}
            >
              Falar comigo
            </PortfolioButton>
          </div>
        </div>

        <div className={styles.visual} aria-label="Retrato de Alana">
          <span className={`${styles.orbit} ${styles.orbitOne}`} />
          <span className={`${styles.orbit} ${styles.orbitTwo}`} />
          <span className={`${styles.satellite} ${styles.satelliteOne}`} />
          <span className={`${styles.satellite} ${styles.satelliteTwo}`} />

          <div className={styles.portraitFrame}>
            <Image
              src="/images/minhaFoto.jpeg"
              alt="Foto de Alana, desenvolvedora front-end"
              width={320}
              height={320}
              preload
              className={styles.image}
            />
          </div>
        </div>
      </div>

      <div className={styles.heroTicker} aria-hidden="true">
        <div className={styles.tickerTrack}>
          <span>
            do layout ao deploy • interfaces responsivas • código com intenção •
            detalhes vivos •
          </span>
          <span>
            do layout ao deploy • interfaces responsivas • código com intenção •
            detalhes vivos •
          </span>
          <span>
            do layout ao deploy • interfaces responsivas • código com intenção •
            detalhes vivos •
          </span>
        </div>
      </div>
    </section>
  );
}
