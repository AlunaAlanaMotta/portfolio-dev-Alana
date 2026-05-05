import type { AnchorHTMLAttributes, ReactNode } from "react";
import styles from "./PortfolioButton.module.css";

type PortfolioButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
  rootClassName?: string;
};

export default function PortfolioButton({
  children,
  variant = "primary",
  rootClassName,
  className,
  ...props
}: PortfolioButtonProps) {
  const rootClasses = [
    styles.buttonWrap,
    variant === "secondary" ? styles.secondary : "",
    rootClassName,
  ]
    .filter(Boolean)
    .join(" ");

  const linkClasses = [styles.button, className].filter(Boolean).join(" ");

  return (
    <span className={rootClasses}>
      <a className={linkClasses} {...props}>
        {children}
      </a>
    </span>
  );
}
