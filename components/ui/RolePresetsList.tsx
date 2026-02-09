import { useTranslations } from "next-intl";
import type { RolePreset } from "@/types/models";

type RolePresetsListProps = {
  presets: RolePreset[];
};

export const RolePresetsList = ({ presets }: RolePresetsListProps) => {
  const t = useTranslations("roles");

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {presets.map((preset) => (
        <div
          key={preset.id}
          className="rounded-2xl border border-[var(--border)] bg-white p-5"
        >
          <h4 className="text-base font-semibold text-[var(--text-primary)]">
            {preset.name}
          </h4>
          <p className="mt-2 text-xs text-[var(--text-secondary)]">
            {preset.description}
          </p>
          <p className="mt-4 text-xs font-semibold text-[var(--accent-strong)]">
            {t("permissionsCount", { count: preset.permissions.length })}
          </p>
        </div>
      ))}
    </div>
  );
};
