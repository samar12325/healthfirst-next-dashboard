type InfoItem = {
  label: string;
  value: string;
};

type InfoListProps = {
  items: InfoItem[];
};

export const InfoList = ({ items }: InfoListProps) => (
  <dl className="grid gap-4 sm:grid-cols-2">
    {items.map((item) => (
      <div key={item.label} className="rounded-xl bg-[var(--surface-muted)] p-4">
        <dt className="text-xs font-semibold text-[var(--text-secondary)]">
          {item.label}
        </dt>
        <dd className="mt-2 text-sm font-semibold text-[var(--text-primary)]">
          {item.value}
        </dd>
      </div>
    ))}
  </dl>
);
