import { use } from "react";
import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { InfoList } from "@/components/ui/InfoList";
import { PERMISSIONS } from "@/lib/constants";
import { hasPermission } from "@/lib/permissions";
import { getPatientProfile } from "@/services/patient.service";

type PatientProfilePageProps = {
  params: { id: string };
};

export default function PatientProfilePage({
  params,
}: PatientProfilePageProps) {
  const { id } = use(params);
  const t = useTranslations("patients.profile");
  const profile = getPatientProfile(id);

  if (!profile) {
    notFound();
  }

  const canReadMedical = hasPermission(PERMISSIONS.medicalRecord.read);

  return (
    <div className="space-y-6">
      <PageHeader
        title={t("title", { name: profile.name })}
        subtitle={t("subtitle", { date: profile.lastVisit })}
      />

      <section className="grid gap-6 lg:grid-cols-2">
        <Card title={t("basicInfo")}>
          <InfoList
            items={[
              { label: t("fields.age"), value: `${profile.age}` },
              { label: t("fields.gender"), value: profile.gender },
              { label: t("fields.patientId"), value: profile.id },
              {
                label: t("fields.medicalRecordId"),
                value: profile.medicalRecordId,
              },
            ]}
          />
        </Card>
        <Card title={t("contactInfo")}>
          <InfoList
            items={[
              { label: t("fields.phone"), value: profile.phone },
              { label: t("fields.email"), value: profile.email },
              { label: t("fields.address"), value: profile.address },
              {
                label: t("fields.emergencyContact"),
                value: profile.emergencyContact,
              },
            ]}
          />
        </Card>
      </section>

      <Card title={t("sensitiveTitle")} description={t("sensitiveDescription")}>
        {canReadMedical ? (
          <InfoList
            items={[
              { label: t("fields.insurance"), value: profile.insurance },
              {
                label: t("fields.allergies"),
                value: profile.allergies.length
                  ? profile.allergies.join("، ")
                  : t("fields.allergiesNone"),
              },
            ]}
          />
        ) : (
          <p className="text-sm text-[var(--text-secondary)]">
            {t("noPermissionSensitive")}
          </p>
        )}
      </Card>

      <Card title={t("notesTitle")}>
        {canReadMedical ? (
          <p className="text-sm text-[var(--text-secondary)]">{profile.notes}</p>
        ) : (
          <p className="text-sm text-[var(--text-secondary)]">
            {t("noPermissionNotes")}
          </p>
        )}
      </Card>
    </div>
  );
}
