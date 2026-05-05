"use client";

import styles from "./Contact.module.css";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const contactChannels = [
  {
    label: "E-mail",
    value: "mottaalana0@gmail.com",
    href: "mailto:mottaalana0@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    label: "WhatsApp",
    value: "(41) 98770-9040",
    href: "https://wa.me/5541987709040",
    icon: <FaWhatsapp />,
  },
  {
    label: "LinkedIn",
    value: "alana-motta-da-cruz-dev",
    href: "https://www.linkedin.com/in/alana-motta-da-cruz-dev/",
    icon: <FaLinkedin />,
  },
  {
    label: "GitHub",
    value: "AlunaAlanaMotta",
    href: "https://github.com/AlunaAlanaMotta",
    icon: <FaGithub />,
  },
];

export default function Contact() {
  return (
    <section id="contato" className={styles.contact}>
      <div className={styles.stars} aria-hidden="true" />
      <div className={styles.orbit} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.intro}>
          <span className={styles.badge}>Canal aberto</span>
          <h1>Vamos tirar uma ideia da órbita?</h1>
          <p>
            Estou aberta a oportunidades, projetos front-end e conversas sobre
            interfaces criativas, responsivas e bem cuidadas.
          </p>

          <div className={styles.status}>
            <span />
            Disponível para novos projetos
          </div>
        </div>

        <div className={styles.contactGrid}>
          <aside className={styles.channels}>
            <div className={styles.panelHeader}>
              <span>Rotas rápidas</span>
              <p>Escolha o canal que fizer mais sentido para você.</p>
            </div>

            <div className={styles.channelList}>
              {contactChannels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    channel.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className={styles.channel}
                >
                  <span className={styles.channelIcon}>{channel.icon}</span>
                  <span>
                    <strong>{channel.label}</strong>
                    <small>{channel.value}</small>
                  </span>
                </a>
              ))}
            </div>
          </aside>

          <form
            className={styles.form}
            action="https://formsubmit.co/mottaalana0@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div className={styles.formHeader}>
              <span>Mensagem direta</span>
              <p>Me conte um pouco sobre o que você quer construir.</p>
            </div>

            <div className={styles.field}>
              <label htmlFor="name">Nome</label>
              <input id="name" name="name" type="text" required />
            </div>

            <div className={styles.field}>
              <label htmlFor="email">E-mail</label>
              <input id="email" name="email" type="email" required />
            </div>

            <div className={styles.field}>
              <label htmlFor="message">Mensagem</label>
              <textarea id="message" name="message" rows={5} required />
            </div>

            <button type="submit">
              Enviar mensagem
              <span aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
