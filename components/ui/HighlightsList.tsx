import type { OperationalHighlight } from "@/types/models";

type HighlightsListProps = {
  highlights: OperationalHighlight[];
};

export const HighlightsList = ({ highlights }: HighlightsListProps) => (
  <div className="space-y-4">
    {highlights.map((highlight) => (
      <div key={highlight.id} className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-[var(--text-primary)]">
            {highlight.label}
          </p>
          <p className="text-xs text-[var(--text-secondary)]">
            {highlight.note}
          </p>
        </div>
        <span className="text-sm font-semibold text-[var(--accent-strong)]">
          {highlight.value}
        </span>
      </div>
    ))}
  </div>
);
