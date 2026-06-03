"use client";

import styles from "./Footer.module.css";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Sobre", href: "/about" },
  { label: "Projetos", href: "/#projetos" },
  { label: "Skills", href: "/skills" },
  { label: "Trajetória", href: "/academicJourney" },
  { label: "Contato", href: "/contact" },
];

const socialLinks = [
  {
    label: "Email",
    href: "mailto:mottaalana0@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alana-motta-da-cruz-dev/",
    icon: <FaLinkedin />,
  },
  {
    label: "GitHub",
    href: "https://github.com/AlunaAlanaMotta",
    icon: <FaGithub />,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/5541987709040",
    icon: <FaWhatsapp />,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.orbit} aria-hidden="true" />
      <div className={styles.grid} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.brand}>
          <span className={styles.eyebrow}>Obrigada pela visita</span>
          <h2>Vamos criar algo bonito, funcional e com alma?</h2>
          <p>
            Front-end developer focada em interfaces responsivas, experiências
            criativas e detalhes que fazem o layout parecer vivo.
          </p>

          <a
            className={styles.cta}
            href="https://wa.me/5541987709040"
            target="_blank"
            rel="noopener noreferrer"
          >
            Iniciar conversa
            <span aria-hidden="true" />
          </a>
        </div>

        <div className={styles.panel}>
          <div className={styles.status}>
            <span />
            Disponível para novos projetos
          </div>

          <nav className={styles.links} aria-label="Links do rodapé">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className={styles.socials} aria-label="Redes sociais">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.copy}>
        <p>&copy; {year} Alana Motta</p>
        <p>Design, código e um pouco de universo.</p>
      </div>
    </footer>
  );
}
