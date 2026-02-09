import type { Metric } from "@/types/models";

type MetricCardProps = {
  metric: Metric;
};

export const MetricCard = ({ metric }: MetricCardProps) => (
  <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-card)]">
    <div className="flex items-center justify-between text-sm text-[var(--text-secondary)]">
      <span>{metric.label}</span>
      {metric.trend && (
        <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">
          {metric.trend}
        </span>
      )}
    </div>
    <div className="mt-4 text-2xl font-semibold text-[var(--text-primary)]">
      {metric.value}
    </div>
  </div>
);
