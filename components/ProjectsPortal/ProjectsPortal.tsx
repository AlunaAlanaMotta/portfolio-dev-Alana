"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./ProjectsPortal.module.css";

export default function ProjectsPortal() {
  const portalRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = portalRef.current;
    if (!section) return;

    let raf = 0;

    const clamp = (value: number) => Math.min(Math.max(value, 0), 1);

    const updatePortal = () => {
      const rect = section.getBoundingClientRect();
      const viewport = window.innerHeight || 1;
      const progress = clamp((viewport - rect.top) / (viewport + rect.height));
      const centered = progress - 0.5;

      section.style.setProperty("--portal-scale", `${1 + progress * 0.22}`);
      section.style.setProperty("--portal-tilt", `${64 - progress * 18}deg`);
      section.style.setProperty("--portal-y", `${centered * -120}px`);
      section.style.setProperty("--planet-one-x", `${progress * 120}px`);
      section.style.setProperty("--planet-one-y", `${centered * 80}px`);
      section.style.setProperty("--planet-one-rotate", `${progress * 26}deg`);
      section.style.setProperty("--planet-two-y", `${centered * -90}px`);
      section.style.setProperty("--planet-two-rotate", `${progress * -34}deg`);
      section.style.setProperty("--planet-three-x", `${progress * -120}px`);
      section.style.setProperty("--planet-three-y", `${centered * 70}px`);
      section.style.setProperty("--planet-three-rotate", `${progress * -24}deg`);
    };

    const requestUpdate = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(updatePortal);
    };

    updatePortal();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <section ref={portalRef} className={styles.portal} aria-hidden="true">
      <div className={styles.portalScene}>
        <div className={styles.starfield} />
        <div className={styles.nebula} />

        <Image
          src="/images/planet-1.png"
          alt=""
          width={360}
          height={360}
          className={`${styles.planet} ${styles.planetOne}`}
        />

        <Image
          src="/images/planet-2.png"
          alt=""
          width={260}
          height={260}
          className={`${styles.planet} ${styles.planetTwo}`}
        />

        <Image
          src="/images/planet-3.png"
          alt=""
          width={230}
          height={230}
          className={`${styles.planet} ${styles.planetThree}`}
        />

        <div className={styles.portalCore}>
          <span className={styles.ringOuter} />
          <span className={styles.ringMiddle} />
          <span className={styles.ringInner} />
          <span className={styles.energy} />
        </div>

        <span className={`${styles.comet} ${styles.cometOne}`} />
        <span className={`${styles.comet} ${styles.cometTwo}`} />
      </div>
    </section>
  );
}
