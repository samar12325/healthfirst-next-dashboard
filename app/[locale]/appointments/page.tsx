import { use } from "react";
import { useTranslations } from "next-intl";
import { SelectField } from "@/components/forms/SelectField";
import { TextField } from "@/components/forms/TextField";
import { DoctorSchedulesPanel } from "@/components/appointments/DoctorSchedulesPanel";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { LinkButton } from "@/components/ui/LinkButton";
import { MetricCard } from "@/components/ui/MetricCard";
import { AppointmentsTable } from "@/components/tables/AppointmentsTable";
import { SystemAppointmentsTable } from "@/components/tables/SystemAppointmentsTable";
import { type Locale } from "@/lib/i18n";
import { PERMISSIONS } from "@/lib/constants";
import { hasPermission } from "@/lib/permissions";
import { getClinics } from "@/services/clinic.service";
import {
  getAppointments,
  getMyAppointments,
  getSystemAppointmentMetrics,
} from "@/services/appointment.service";

type AppointmentsPageProps = {
  params: { locale: Locale };
};

const uniqueValues = (values: string[]) => Array.from(new Set(values));

export default function AppointmentsPage({ params }: AppointmentsPageProps) {
  const { locale } = use(params);
  const t = useTranslations("appointments");
  const canCreate = hasPermission(PERMISSIONS.appointment.create);
  const canUpdate = hasPermission(PERMISSIONS.appointment.update);
  const canCancel = hasPermission(PERMISSIONS.appointment.cancel);
  const canViewAll = hasPermission(PERMISSIONS.appointment.viewAll);

  const clinics = getClinics(locale);
  const systemAppointments = getAppointments(locale);
  const appointments = canViewAll
    ? systemAppointments
    : getMyAppointments(locale);
  const metrics = getSystemAppointmentMetrics(locale);

  const clinicOptions = [
    { value: "all", label: t("system.controls.allClinics") },
    ...clinics.map((clinic) => ({
      value: clinic.id,
      label: clinic.name,
    })),
  ];

  const timeRangeOptions = [
    { value: "today", label: t("system.controls.timeRangeOptions.today") },
    { value: "week", label: t("system.controls.timeRangeOptions.week") },
    { value: "custom", label: t("system.controls.timeRangeOptions.custom") },
  ];

  const doctorNames = uniqueValues(
    systemAppointments.map((appointment) => appointment.doctorName),
  );

  const doctorOptions = [
    { value: "all", label: t("system.controls.allDoctors") },
    ...doctorNames.map((doctor) => ({ value: doctor, label: doctor })),
  ];

  const statusOptions = [
    { value: "all", label: t("system.controls.allStatuses") },
    { value: "confirmed", label: t("status.confirmed") },
    { value: "pending", label: t("status.pending") },
    { value: "delayed", label: t("status.delayed") },
    { value: "cancelled", label: t("status.cancelled") },
    { value: "no_show", label: t("status.noShow") },
    { value: "completed", label: t("status.completed") },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title={canViewAll ? t("system.title") : t("title")}
        subtitle={canViewAll ? t("system.subtitle") : t("subtitle")}
        actions={
          canCreate ? (
            <LinkButton href="/appointments/new">{t("add")}</LinkButton>
          ) : undefined
        }
      />

      {canViewAll && (
        <Card
          title={t("system.controls.title")}
          description={t("system.controls.description")}
        >
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <SelectField
              label={t("system.controls.clinic")}
              options={clinicOptions}
              defaultValue="all"
            />
            <SelectField
              label={t("system.controls.timeRange")}
              options={timeRangeOptions}
              defaultValue="today"
            />
            <TextField
              label={t("system.controls.customDate")}
              type="date"
            />
            <SelectField
              label={t("system.controls.doctor")}
              options={doctorOptions}
              defaultValue="all"
            />
            <SelectField
              label={t("system.controls.status")}
              options={statusOptions}
              defaultValue="all"
            />
            <div className="md:col-span-2 xl:col-span-2">
              <TextField
                label={t("system.controls.search")}
                placeholder={t("system.controls.searchPlaceholder")}
                type="search"
              />
            </div>
          </div>
        </Card>
      )}

      {canViewAll && (
        <section className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold text-[var(--text-primary)]">
              {t("system.kpis.title")}
            </h2>
            <p className="text-sm text-[var(--text-secondary)]">
              {t("system.kpis.description")}
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {metrics.map((metric) => (
              <MetricCard key={metric.id} metric={metric} />
            ))}
          </div>
        </section>
      )}

      {canViewAll && (
        <Card
          title={t("system.doctorSchedules.title")}
          description={t("system.doctorSchedules.description")}
        >
          <DoctorSchedulesPanel doctors={doctorNames} />
        </Card>
      )}

      <Card
        title={canViewAll ? t("system.table.title") : t("listTitle")}
        description={
          canViewAll
            ? t("system.table.description")
            : t("listDescriptionMine")
        }
      >
        {canViewAll ? (
          <SystemAppointmentsTable appointments={appointments} />
        ) : (
          <AppointmentsTable
            appointments={appointments}
            canUpdate={canUpdate}
            canCancel={canCancel}
          />
        )}
      </Card>
    </div>
  );
}
