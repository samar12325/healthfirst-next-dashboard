import { useTranslations } from "next-intl";
import type { Appointment } from "@/types/models";
import { Badge } from "@/components/ui/Badge";

type UpcomingAppointmentsProps = {
  appointments: Appointment[];
};

export const UpcomingAppointments = ({
  appointments,
}: UpcomingAppointmentsProps) => {
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
    <div className="space-y-3">
      {appointments.map((appointment) => {
        const status = statusToneMap[appointment.status];

        return (
          <div
            key={appointment.id}
            className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[var(--border)] bg-white px-4 py-3"
          >
            <div>
              <p className="text-sm font-semibold text-[var(--text-primary)]">
                {appointment.patientName}
              </p>
              <p className="text-xs text-[var(--text-secondary)]">
                {appointment.doctorName} • {appointment.time}
              </p>
            </div>
            <Badge label={status.label} tone={status.tone} />
          </div>
        );
      })}
    </div>
  );
};
