import { use } from "react";
import { useTranslations } from "next-intl";
import { DoctorSchedulesPanel } from "@/components/appointments/DoctorSchedulesPanel";
import { PageHeader } from "@/components/layout/PageHeader";
import { AccessDenied } from "@/components/ui/AccessDenied";
import { Card } from "@/components/ui/Card";
import { PERMISSIONS } from "@/lib/constants";
import { type Locale } from "@/lib/i18n";
import { hasPermission } from "@/lib/permissions";
import { getAppointments } from "@/services/appointment.service";

type DoctorSchedulesPageProps = {
  params: { locale: Locale };
};

export default function DoctorSchedulesPage({
  params,
}: DoctorSchedulesPageProps) {
  const { locale } = use(params);
  const t = useTranslations("appointments.system.doctorSchedules");
  const canViewAll = hasPermission(PERMISSIONS.appointment.viewAll);

  if (!canViewAll) {
    return <AccessDenied />;
  }

  const appointments = getAppointments(locale);
  const doctors = Array.from(
    new Set(appointments.map((appointment) => appointment.doctorName)),
  );

  return (
    <div className="space-y-6">
      <PageHeader title={t("title")} subtitle={t("description")} />
      <Card>
        <DoctorSchedulesPanel doctors={doctors} />
      </Card>
    </div>
  );
}
