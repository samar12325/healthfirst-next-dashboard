import type { ReactNode } from "react";
import { Link } from "@/lib/navigation";

type LinkButtonVariant = "primary" | "secondary" | "ghost" | "danger" | "outline";
type LinkButtonSize = "sm" | "md";

type LinkButtonProps = {
  href: string;
  children: ReactNode;
  variant?: LinkButtonVariant;
  size?: LinkButtonSize;
  className?: string;
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--accent)]";

const variantStyles: Record<LinkButtonVariant, string> = {
  primary:
    "bg-[var(--accent)] text-white hover:bg-[var(--accent-strong)] shadow-[0_10px_20px_rgba(45,212,191,0.25)]",
  secondary:
    "bg-[var(--surface-muted)] text-[var(--text-primary)] hover:bg-[var(--surface-muted-strong)]",
  ghost: "text-[var(--text-primary)] hover:bg-[var(--surface-muted)]",
  danger: "bg-rose-500 text-white hover:bg-rose-600",
  outline:
    "border border-[var(--border)] text-[var(--text-primary)] hover:bg-[var(--surface-muted)]",
};

const sizeStyles: Record<LinkButtonSize, string> = {
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-2.5 text-sm",
};

export const LinkButton = ({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
}: LinkButtonProps) => (
  <Link
    href={href}
    className={[
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className ?? "",
    ].join(" ")}
  >
    {children}
  </Link>
);
