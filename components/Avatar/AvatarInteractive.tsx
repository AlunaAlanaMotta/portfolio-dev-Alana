"use client";

import { useEffect, useRef } from "react";
import styles from "./avatar.module.css";
import Image from "next/image";

export default function AvatarInteractive() {
  const eyeLeft = useRef<HTMLDivElement>(null);
  const eyeRight = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveEyes = (e: MouseEvent) => {
      const move = (eye: HTMLDivElement | null) => {
        if (!eye) return;

        const rect = eye.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;

        const angle = Math.atan2(e.clientY - y, e.clientX - x);

        const offsetX = Math.cos(angle) * 6;
        const offsetY = Math.sin(angle) * 6;

        eye.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      };

      move(eyeLeft.current);
      move(eyeRight.current);
    };

    window.addEventListener("mousemove", moveEyes);
    return () => window.removeEventListener("mousemove", moveEyes);
  }, []);

  return (
    <div className={styles.avatar}>
      <Image
        src="/images/avatar.png"
        alt="Avatar Alana"
        sizes="(max-width: 768px) 100vw, 300px"
        fill
        loading="eager"
        className={styles.face}
      />

      <div className={styles.eyes}>
        <div className={styles.eye}>
          <div ref={eyeLeft} className={styles.pupil}></div>
        </div>
        <div className={styles.eye}>
          <div ref={eyeRight} className={styles.pupil}></div>
        </div>
      </div>
    </div>
  );
}
