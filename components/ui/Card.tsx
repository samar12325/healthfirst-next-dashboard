import type { ReactNode } from "react";

type CardProps = {
  title?: string;
  description?: string;
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
};

export const Card = ({ title, description, actions, children, className }: CardProps) => (
  <section
    className={`rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-card)] ${className ?? ""}`}
  >
    {(title || description || actions) && (
      <header className="mb-5 flex flex-wrap items-start justify-between gap-4">
        <div>
          {title && <h3 className="text-lg font-semibold text-[var(--text-primary)]">{title}</h3>}
          {description && (
            <p className="mt-1 text-sm text-[var(--text-secondary)]">{description}</p>
          )}
        </div>
        {actions && <div className="flex items-center gap-2">{actions}</div>}
      </header>
    )}
    {children}
  </section>
);
