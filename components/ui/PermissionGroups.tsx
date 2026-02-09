import type { PermissionGroup } from "@/types/models";

type PermissionGroupsProps = {
  groups: PermissionGroup[];
};

export const PermissionGroups = ({ groups }: PermissionGroupsProps) => (
  <div className="space-y-4">
    {groups.map((group) => (
      <div
        key={group.id}
        className="rounded-2xl border border-[var(--border)] bg-white p-5"
      >
        <h4 className="text-base font-semibold text-[var(--text-primary)]">
          {group.label}
        </h4>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {group.permissions.map((permission) => (
            <div
              key={permission.key}
              className="rounded-xl bg-[var(--surface-muted)] px-4 py-3"
            >
              <p className="text-sm font-semibold text-[var(--text-primary)]">
                {permission.label}
              </p>
              <p className="mt-1 text-xs text-[var(--text-secondary)]">
                {permission.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);
