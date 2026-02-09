import { Link } from "@/lib/navigation";
import { useTranslations } from "next-intl";
import type { User } from "@/types/models";
import { Badge } from "@/components/ui/Badge";

type UsersTableProps = {
  users: User[];
};

export const UsersTable = ({ users }: UsersTableProps) => {
  const t = useTranslations("users");

  const statusToneMap: Record<
    User["status"],
    { label: string; tone: Parameters<typeof Badge>[0]["tone"] }
  > = {
    active: { label: t("status.active"), tone: "success" },
    inactive: { label: t("status.inactive"), tone: "neutral" },
    invited: { label: t("status.invited"), tone: "warning" },
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-right text-[var(--text-secondary)]">
            <th className="px-3 py-3 font-semibold">{t("table.user")}</th>
            <th className="px-3 py-3 font-semibold">{t("table.role")}</th>
            <th className="px-3 py-3 font-semibold">
              {t("table.lastActive")}
            </th>
            <th className="px-3 py-3 font-semibold">{t("table.status")}</th>
            <th className="px-3 py-3 font-semibold">{t("table.action")}</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            const status = statusToneMap[user.status];

            return (
              <tr key={user.id} className="border-t border-[var(--border)]">
                <td className="px-3 py-4 font-semibold text-[var(--text-primary)]">
                  {user.name}
                  <p className="text-xs font-normal text-[var(--text-secondary)]">
                    {user.email}
                  </p>
                </td>
                <td className="px-3 py-4">{user.role}</td>
                <td className="px-3 py-4">{user.lastActive}</td>
                <td className="px-3 py-4">
                  <Badge label={status.label} tone={status.tone} />
                </td>
                <td className="px-3 py-4">
                  <Link
                    href={`/users/${user.id}`}
                    className="text-xs font-semibold text-[var(--accent-strong)]"
                  >
                    {t("table.details")}
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
