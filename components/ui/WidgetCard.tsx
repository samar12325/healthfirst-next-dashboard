import { Link } from "@/lib/navigation";

type WidgetCardProps = {
  title: string;
  description: string;
  actionLabel: string;
  href: string;
};

export const WidgetCard = ({
  title,
  description,
  actionLabel,
  href,
}: WidgetCardProps) => (
  <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-card)]">
    <h4 className="text-lg font-semibold text-[var(--text-primary)]">{title}</h4>
    <p className="mt-2 text-sm text-[var(--text-secondary)]">{description}</p>
    <div className="mt-4">
      <Link
        href={href}
        className="inline-flex items-center justify-center rounded-xl bg-[var(--surface-muted)] px-3 py-2 text-sm font-semibold text-[var(--text-primary)] transition hover:bg-[var(--surface-muted-strong)]"
      >
        {actionLabel}
      </Link>
    </div>
  </div>
);
