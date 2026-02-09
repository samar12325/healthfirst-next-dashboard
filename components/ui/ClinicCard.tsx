import { Link } from "@/lib/navigation";
import type { ClinicSummary } from "@/types/models";

type ClinicCardProps = {
  clinic: ClinicSummary;
  href: string;
  labels: {
    location: string;
    hours: string;
    specialties: string;
    action: string;
  };
};

export const ClinicCard = ({ clinic, href, labels }: ClinicCardProps) => (
  <Link
    href={href}
    className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:border-[var(--accent-strong)]/40 hover:shadow-lg"
  >
    <h4 className="text-lg font-semibold text-[var(--text-primary)]">
      {clinic.name}
    </h4>
    <dl className="mt-4 space-y-2 text-sm">
      <div className="flex items-center justify-between gap-4">
        <dt className="text-[var(--text-secondary)]">{labels.location}</dt>
        <dd className="font-semibold text-[var(--text-primary)]">
          {clinic.location}
        </dd>
      </div>
      <div className="flex items-center justify-between gap-4">
        <dt className="text-[var(--text-secondary)]">{labels.hours}</dt>
        <dd className="font-semibold text-[var(--text-primary)]">
          {clinic.hours}
        </dd>
      </div>
      <div className="flex items-center justify-between gap-4">
        <dt className="text-[var(--text-secondary)]">{labels.specialties}</dt>
        <dd className="font-semibold text-[var(--text-primary)]">
          {clinic.specialtiesCount}
        </dd>
      </div>
    </dl>
    <div className="mt-4 text-sm font-semibold text-[var(--accent-strong)]">
      {labels.action}
    </div>
  </Link>
);
