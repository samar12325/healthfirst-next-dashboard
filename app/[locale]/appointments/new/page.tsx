import { use } from "react";
import { useTranslations } from "next-intl";
import { NewAppointmentForm } from "@/components/forms/NewAppointmentForm";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { LinkButton } from "@/components/ui/LinkButton";
import { type Locale } from "@/lib/i18n";
import { getClinics } from "@/services/clinic.service";
import { getAppointments } from "@/services/appointment.service";
import { getPatients } from "@/services/patient.service";

type NewAppointmentPageProps = {
  params: { locale: Locale };
};

export default function NewAppointmentPage({ params }: NewAppointmentPageProps) {
  const { locale } = use(params);
  const t = useTranslations("appointments.new");
  const clinics = getClinics(locale);
  const appointments = getAppointments(locale);
  const patients = getPatients();

  const doctors = Array.from(
    new Set(appointments.map((appointment) => appointment.doctorName)),
  );

  return (
    <div className="space-y-6">
      <PageHeader
        title={t("title")}
        subtitle={t("subtitle")}
        actions={
          <>
            <LinkButton href="/appointments" variant="outline">
              {t("actions.cancel")}
            </LinkButton>
            <Button type="button">{t("actions.save")}</Button>
          </>
        }
      />

      <Card title={t("form.title")} description={t("form.description")}>
        <NewAppointmentForm
          clinics={clinics}
          doctors={doctors}
          patients={patients}
        />
      </Card>
    </div>
  );
}
