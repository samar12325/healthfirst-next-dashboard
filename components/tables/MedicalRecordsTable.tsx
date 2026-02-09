import { Link } from "@/lib/navigation";
import { useTranslations } from "next-intl";
import type { MedicalRecord } from "@/types/models";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

type MedicalRecordsTableProps = {
  records: MedicalRecord[];
  canEdit: boolean;
};

export const MedicalRecordsTable = ({
  records,
  canEdit,
}: MedicalRecordsTableProps) => {
  const t = useTranslations("medicalRecords");

  const statusToneMap: Record<
    MedicalRecord["status"],
    { label: string; tone: Parameters<typeof Badge>[0]["tone"] }
  > = {
    open: { label: t("status.open"), tone: "info" },
    closed: { label: t("status.closed"), tone: "neutral" },
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-right text-[var(--text-secondary)]">
            <th className="px-3 py-3 font-semibold">{t("table.patient")}</th>
            <th className="px-3 py-3 font-semibold">{t("table.summary")}</th>
            <th className="px-3 py-3 font-semibold">{t("table.updatedAt")}</th>
            <th className="px-3 py-3 font-semibold">{t("table.status")}</th>
            <th className="px-3 py-3 font-semibold">{t("table.action")}</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => {
            const status = statusToneMap[record.status];

            return (
              <tr
                key={record.id}
                className="border-t border-[var(--border)]"
              >
                <td className="px-3 py-4 font-semibold text-[var(--text-primary)]">
                  {record.patientName}
                  <p className="text-xs font-normal text-[var(--text-secondary)]">
                    {record.id}
                  </p>
                </td>
                <td className="px-3 py-4">{record.summary}</td>
                <td className="px-3 py-4">{record.updatedAt}</td>
                <td className="px-3 py-4">
                  <Badge label={status.label} tone={status.tone} />
                </td>
                <td className="px-3 py-4">
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href={`/medical-records/${record.id}`}
                      className="text-xs font-semibold text-[var(--accent-strong)]"
                    >
                      {t("table.details")}
                    </Link>
                    {canEdit && (
                      <Button variant="outline" size="sm">
                        {t("actions.edit")}
                      </Button>
                    )}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
