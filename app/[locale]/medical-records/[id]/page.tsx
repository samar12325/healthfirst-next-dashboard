import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { InfoList } from "@/components/ui/InfoList";
import { PERMISSIONS } from "@/lib/constants";
import { hasPermission } from "@/lib/permissions";
import { getMedicalRecordById } from "@/services/medical-record.service";

type MedicalRecordDetailsProps = {
  params: { id: string };
};

export default async function MedicalRecordDetailsPage({
  params,
}: MedicalRecordDetailsProps) {
  const t = useTranslations("medicalRecords.details");
  const { id } = await params;
  const record = getMedicalRecordById(id);

  if (!record) {
    notFound();
  }

  const canEdit = hasPermission(PERMISSIONS.medicalRecord.write);

  return (
    <div className="space-y-6">
      <PageHeader
        title={t("title", { name: record.patientName })}
        subtitle={t("subtitle", { date: record.updatedAt })}
        actions={canEdit ? <Button>{t("edit")}</Button> : undefined}
      />

      <section className="grid gap-6 lg:grid-cols-2">
        <Card title={t("basicTitle")}>
          <InfoList
            items={[
              { label: t("fields.recordId"), value: record.id },
              { label: t("fields.doctor"), value: record.author },
              {
                label: t("fields.status"),
                value:
                  record.status === "open"
                    ? t("status.open")
                    : t("status.closed"),
              },
              { label: t("fields.diagnosis"), value: record.diagnosis },
            ]}
          />
        </Card>
        <Card title={t("summaryTitle")}>
          <p className="text-sm text-[var(--text-secondary)]">
            {record.summary}
          </p>
        </Card>
      </section>

      <Card title={t("medicationsTitle")}>
        <div className="flex flex-wrap gap-2">
          {record.medications.map((medication) => (
            <span
              key={medication}
              className="rounded-full bg-[var(--surface-muted)] px-3 py-1 text-xs font-semibold text-[var(--text-primary)]"
            >
              {medication}
            </span>
          ))}
        </div>
      </Card>

      <Card title={t("allergiesTitle")}>
        {record.allergies.length ? (
          <div className="flex flex-wrap gap-2">
            {record.allergies.map((allergy) => (
              <span
                key={allergy}
                className="rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-700"
              >
                {allergy}
              </span>
            ))}
          </div>
        ) : (
          <p className="text-sm text-[var(--text-secondary)]">
            {t("noAllergies")}
          </p>
        )}
      </Card>
    </div>
  );
}
