import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { MedicalRecordsTable } from "@/components/tables/MedicalRecordsTable";
import { PERMISSIONS } from "@/lib/constants";
import { hasPermission } from "@/lib/permissions";
import { getMedicalRecords } from "@/services/medical-record.service";

export default function MedicalRecordsPage() {
  const t = useTranslations("medicalRecords");
  const canEdit = hasPermission(PERMISSIONS.medicalRecord.write);
  const records = getMedicalRecords();

  return (
    <div className="space-y-6">
      <PageHeader title={t("title")} subtitle={t("subtitle")} />

      <Card title={t("listTitle")} description={t("listDescription")}>
        <MedicalRecordsTable records={records} canEdit={canEdit} />
      </Card>
    </div>
  );
}
