"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import type { Appointment } from "@/types/models";
import { Badge } from "@/components/ui/Badge";

type SystemAppointmentsTableProps = {
  appointments: Appointment[];
};

export const SystemAppointmentsTable = ({
  appointments,
}: SystemAppointmentsTableProps) => {
  const t = useTranslations("appointments.system.table");
  const statusT = useTranslations("appointments.status");
  const [rows, setRows] = useState(appointments);

  useEffect(() => {
    setRows(appointments);
  }, [appointments]);

  const statusToneMap: Record<
    Appointment["status"],
    { label: string; tone: Parameters<typeof Badge>[0]["tone"] }
  > = {
    confirmed: { label: statusT("confirmed"), tone: "success" },
    pending: { label: statusT("pending"), tone: "warning" },
    delayed: { label: statusT("delayed"), tone: "warning" },
    cancelled: { label: statusT("cancelled"), tone: "danger" },
    completed: { label: statusT("completed"), tone: "info" },
    no_show: { label: statusT("noShow"), tone: "danger" },
  };

  const statusOptions: Array<{ value: Appointment["status"]; label: string }> = [
    { value: "confirmed", label: statusT("confirmed") },
    { value: "pending", label: statusT("pending") },
    { value: "delayed", label: statusT("delayed") },
    { value: "cancelled", label: statusT("cancelled") },
    { value: "completed", label: statusT("completed") },
    { value: "no_show", label: statusT("noShow") },
  ];

  const handleStatusChange = (
    id: string,
    nextStatus: Appointment["status"],
  ) => {
    setRows((prev) =>
      prev.map((appointment) =>
        appointment.id === id
          ? { ...appointment, status: nextStatus }
          : appointment,
      ),
    );
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-right text-[var(--text-secondary)]">
            <th className="px-3 py-3 font-semibold">{t("appointmentNumber")}</th>
            <th className="px-3 py-3 font-semibold">{t("clinic")}</th>
            <th className="px-3 py-3 font-semibold">{t("doctor")}</th>
            <th className="px-3 py-3 font-semibold">{t("patient")}</th>
            <th className="px-3 py-3 font-semibold">{t("dateTime")}</th>
            <th className="px-3 py-3 font-semibold">{t("waitDuration")}</th>
            <th className="px-3 py-3 font-semibold">{t("status")}</th>
            <th className="px-3 py-3 font-semibold">{t("changeStatus")}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((appointment) => {
            const status = statusToneMap[appointment.status];
            const waitDuration =
              appointment.waitTimeMinutes > 0
                ? t("waitValue", { minutes: appointment.waitTimeMinutes })
                : "--";

            return (
              <tr
                key={appointment.id}
                className="border-t border-[var(--border)]"
              >
                <td className="px-3 py-4 font-semibold text-[var(--text-primary)]">
                  {appointment.id.toUpperCase()}
                </td>
                <td className="px-3 py-4">{appointment.clinicName}</td>
                <td className="px-3 py-4">{appointment.doctorName}</td>
                <td className="px-3 py-4">{appointment.patientName}</td>
                <td className="px-3 py-4">
                  <p className="font-semibold text-[var(--text-primary)]">
                    {appointment.date}
                  </p>
                  <p className="text-xs text-[var(--text-secondary)]">
                    {appointment.time}
                  </p>
                </td>
                <td className="px-3 py-4">{waitDuration}</td>
                <td className="px-3 py-4">
                  <Badge label={status.label} tone={status.tone} />
                </td>
                <td className="px-3 py-4">
                  <select
                    value={appointment.status}
                    onChange={(event) =>
                      handleStatusChange(
                        appointment.id,
                        event.target.value as Appointment["status"],
                      )
                    }
                    aria-label={t("changeStatus")}
                    className="rounded-xl border border-[var(--border)] bg-white px-3 py-2 text-xs font-semibold text-[var(--text-primary)] outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[rgba(46,196,182,0.25)]"
                  >
                    {statusOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
