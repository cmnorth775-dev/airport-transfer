import Link from "next/link";
import type { ReactNode } from "react";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  target
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  target?: "_blank";
}) {
  return (
    <Link
      className={`button button-${variant}`}
      href={href}
      target={target}
      rel={target === "_blank" ? "noreferrer" : undefined}
    >
      {children}
    </Link>
  );
}
