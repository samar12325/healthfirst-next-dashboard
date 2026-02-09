import { Link } from "@/lib/navigation";
import { useTranslations } from "next-intl";
import type { Patient } from "@/types/models";
import { Badge } from "@/components/ui/Badge";

type PatientsTableProps = {
  patients: Patient[];
  canReadMedical: boolean;
};

export const PatientsTable = ({
  patients,
  canReadMedical,
}: PatientsTableProps) => {
  const t = useTranslations("patients");

  const statusToneMap: Record<
    Patient["status"],
    { label: string; tone: Parameters<typeof Badge>[0]["tone"] }
  > = {
    active: { label: t("status.active"), tone: "success" },
    inactive: { label: t("status.inactive"), tone: "neutral" },
    follow_up: { label: t("status.followUp"), tone: "warning" },
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-right text-[var(--text-secondary)]">
            <th className="px-3 py-3 font-semibold">{t("table.patient")}</th>
            <th className="px-3 py-3 font-semibold">{t("table.age")}</th>
            <th className="px-3 py-3 font-semibold">{t("table.lastVisit")}</th>
            <th className="px-3 py-3 font-semibold">
              {t("table.medicalRecord")}
            </th>
            <th className="px-3 py-3 font-semibold">{t("table.status")}</th>
            <th className="px-3 py-3 font-semibold">{t("table.action")}</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => {
            const status = statusToneMap[patient.status];

            return (
              <tr
                key={patient.id}
                className="border-t border-[var(--border)]"
              >
                <td className="px-3 py-4 font-semibold text-[var(--text-primary)]">
                  {patient.name}
                  <p className="text-xs font-normal text-[var(--text-secondary)]">
                    {patient.phone}
                  </p>
                </td>
                <td className="px-3 py-4">{patient.age}</td>
                <td className="px-3 py-4">{patient.lastVisit}</td>
                <td className="px-3 py-4">
                  {canReadMedical
                    ? patient.medicalRecordId
                    : t("medicalRecordHidden")}
                </td>
                <td className="px-3 py-4">
                  <Badge label={status.label} tone={status.tone} />
                </td>
                <td className="px-3 py-4">
                  <Link
                    href={`/patients/${patient.id}`}
                    className="text-xs font-semibold text-[var(--accent-strong)]"
                  >
                    {t("viewProfile")}
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
