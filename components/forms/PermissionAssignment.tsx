import { useTranslations } from "next-intl";
import type { PermissionGroup } from "@/types/models";
import { Button } from "@/components/ui/Button";

type PermissionAssignmentProps = {
  groups: PermissionGroup[];
  assigned: string[];
};

export const PermissionAssignment = ({
  groups,
  assigned,
}: PermissionAssignmentProps) => {
  const t = useTranslations("common");

  return (
    <div className="space-y-6">
      {groups.map((group) => (
        <div
          key={group.id}
          className="rounded-2xl border border-[var(--border)] bg-[var(--surface-muted)] p-5"
        >
          <h4 className="text-base font-semibold text-[var(--text-primary)]">
            {group.label}
          </h4>
          <div className="mt-4 space-y-3">
            {group.permissions.map((permission) => (
              <label
                key={permission.key}
                className="flex items-start gap-3 rounded-xl bg-white p-3"
              >
                <input
                  type="checkbox"
                  defaultChecked={assigned.includes(permission.key)}
                  className="mt-1 h-4 w-4 accent-[var(--accent)]"
                />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">
                    {permission.label}
                  </p>
                  <p className="text-xs text-[var(--text-secondary)]">
                    {permission.description}
                  </p>
                </div>
              </label>
            ))}
          </div>
        </div>
      ))}
      <div className="flex items-center justify-end gap-3">
        <Button variant="outline">{t("cancel")}</Button>
        <Button>{t("savePermissions")}</Button>
      </div>
    </div>
  );
};
