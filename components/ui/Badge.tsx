type BadgeTone = "success" | "warning" | "danger" | "neutral" | "info";

type BadgeProps = {
  label: string;
  tone?: BadgeTone;
};

const toneStyles: Record<BadgeTone, string> = {
  success: "bg-emerald-100 text-emerald-700",
  warning: "bg-amber-100 text-amber-700",
  danger: "bg-rose-100 text-rose-700",
  neutral: "bg-slate-100 text-slate-600",
  info: "bg-sky-100 text-sky-700",
};

export const Badge = ({ label, tone = "neutral" }: BadgeProps) => (
  <span
    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${toneStyles[tone]}`}
  >
    {label}
  </span>
);
