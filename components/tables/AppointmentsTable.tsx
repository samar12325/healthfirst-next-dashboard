import { useTranslations } from "next-intl";
import type { Appointment } from "@/types/models";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

type AppointmentsTableProps = {
  appointments: Appointment[];
  canUpdate: boolean;
  canCancel: boolean;
};

export const AppointmentsTable = ({
  appointments,
  canUpdate,
  canCancel,
}: AppointmentsTableProps) => {
  const t = useTranslations("appointments");

  const statusToneMap: Record<
    Appointment["status"],
    { label: string; tone: Parameters<typeof Badge>[0]["tone"] }
  > = {
    confirmed: { label: t("status.confirmed"), tone: "success" },
    pending: { label: t("status.pending"), tone: "warning" },
    delayed: { label: t("status.delayed"), tone: "warning" },
    cancelled: { label: t("status.cancelled"), tone: "danger" },
    completed: { label: t("status.completed"), tone: "info" },
    no_show: { label: t("status.noShow"), tone: "danger" },
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-right text-[var(--text-secondary)]">
            <th className="px-3 py-3 font-semibold">{t("table.patient")}</th>
            <th className="px-3 py-3 font-semibold">{t("table.doctor")}</th>
            <th className="px-3 py-3 font-semibold">{t("table.date")}</th>
            <th className="px-3 py-3 font-semibold">{t("table.time")}</th>
            <th className="px-3 py-3 font-semibold">{t("table.status")}</th>
            <th className="px-3 py-3 font-semibold">{t("table.action")}</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => {
            const status = statusToneMap[appointment.status];

            return (
              <tr
                key={appointment.id}
                className="border-t border-[var(--border)]"
              >
                <td className="px-3 py-4 font-semibold text-[var(--text-primary)]">
                  {appointment.patientName}
                  <p className="text-xs font-normal text-[var(--text-secondary)]">
                    {appointment.type} • {appointment.channel}
                  </p>
                </td>
                <td className="px-3 py-4">{appointment.doctorName}</td>
                <td className="px-3 py-4">{appointment.date}</td>
                <td className="px-3 py-4">{appointment.time}</td>
                <td className="px-3 py-4">
                  <Badge label={status.label} tone={status.tone} />
                </td>
                <td className="px-3 py-4">
                  <div className="flex flex-wrap gap-2">
                    <Button variant="ghost" size="sm">
                      {t("actions.view")}
                    </Button>
                    {canUpdate && (
                      <Button variant="outline" size="sm">
                        {t("actions.edit")}
                      </Button>
                    )}
                    {canCancel && (
                      <Button variant="danger" size="sm">
                        {t("actions.cancel")}
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
