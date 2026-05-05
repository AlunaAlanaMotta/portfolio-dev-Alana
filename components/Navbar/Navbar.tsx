"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const updateNavigationState = () => {
      setActiveHash(window.location.hash);
      setIsScrolled(window.scrollY > 20);
    };

    updateNavigationState();
    window.addEventListener("hashchange", updateNavigationState);
    window.addEventListener("scroll", updateNavigationState, { passive: true });

    return () => {
      window.removeEventListener("hashchange", updateNavigationState);
      window.removeEventListener("scroll", updateNavigationState);
    };
  }, []);

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.navInner}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <span>Alana.dev</span>
        </Link>

        <button
          className={`${styles.menuButton} ${
            isOpen ? styles.menuButtonOpen : ""
          }`}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`${styles.links} ${isOpen ? styles.open : ""}`}>
          <Link
            href="/"
            onClick={closeMenu}
            className={
              pathname === "/" && activeHash !== "#projetos"
                ? styles.active
                : ""
            }
          >
            Home
          </Link>

          <Link
            href="/about"
            onClick={closeMenu}
            className={pathname === "/about" ? styles.active : ""}
          >
            Sobre
          </Link>

          <Link
            href="/skills"
            onClick={closeMenu}
            className={pathname === "/skills" ? styles.active : ""}
          >
            Skills
          </Link>

          <Link
            href="/academicJourney"
            onClick={closeMenu}
            className={pathname === "/academicJourney" ? styles.active : ""}
          >
            Trajetória
          </Link>

          <Link
            href="/#projetos"
            onClick={() => {
              closeMenu();
              setActiveHash("#projetos");
            }}
            className={`${styles.cta} ${
              activeHash === "#projetos" ? styles.active : ""
            }`}
          >
            Projetos
          </Link>

          <Link
            href="/contact"
            onClick={closeMenu}
            className={pathname === "/contact" ? styles.active : ""}
          >
            Contato
          </Link>
        </div>
      </div>
    </nav>
  );
}
