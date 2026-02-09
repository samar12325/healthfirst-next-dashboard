import { useTranslations } from "next-intl";
import type { AuditLogEntry } from "@/types/models";
import { Badge } from "@/components/ui/Badge";

type AuditLogTableProps = {
  entries: AuditLogEntry[];
};

export const AuditLogTable = ({ entries }: AuditLogTableProps) => {
  const t = useTranslations("auditLog");

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-right text-[var(--text-secondary)]">
            <th className="px-3 py-3 font-semibold">{t("table.action")}</th>
            <th className="px-3 py-3 font-semibold">{t("table.user")}</th>
            <th className="px-3 py-3 font-semibold">{t("table.date")}</th>
            <th className="px-3 py-3 font-semibold">{t("table.ip")}</th>
            <th className="px-3 py-3 font-semibold">{t("table.status")}</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <tr key={entry.id} className="border-t border-[var(--border)]">
              <td className="px-3 py-4 font-semibold text-[var(--text-primary)]">
                {entry.action}
                <p className="text-xs font-normal text-[var(--text-secondary)]">
                  {entry.details}
                </p>
              </td>
              <td className="px-3 py-4">{entry.actor}</td>
              <td className="px-3 py-4">{entry.timestamp}</td>
              <td className="px-3 py-4">{entry.ipAddress}</td>
              <td className="px-3 py-4">
                <Badge label={entry.status} tone="info" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
