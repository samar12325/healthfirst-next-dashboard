import type { ReactNode } from "react";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
};

export const PageHeader = ({ title, subtitle, actions }: PageHeaderProps) => (
  <header className="flex flex-wrap items-start justify-between gap-4">
    <div>
      <h1 className="text-2xl font-semibold text-[var(--text-primary)]">{title}</h1>
      {subtitle && (
        <p className="mt-2 text-sm text-[var(--text-secondary)]">{subtitle}</p>
      )}
    </div>
    {actions && <div className="flex items-center gap-3">{actions}</div>}
  </header>
);
