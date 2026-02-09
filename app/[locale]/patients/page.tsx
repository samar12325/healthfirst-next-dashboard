import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { PatientsTable } from "@/components/tables/PatientsTable";
import { PERMISSIONS } from "@/lib/constants";
import { hasPermission } from "@/lib/permissions";
import { getPatients } from "@/services/patient.service";

export default function PatientsPage() {
  const t = useTranslations("patients");
  const canReadMedical = hasPermission(PERMISSIONS.medicalRecord.read);
  const patients = getPatients();

  return (
    <div className="space-y-6">
      <PageHeader title={t("title")} subtitle={t("subtitle")} />

      <Card title={t("listTitle")} description={t("listDescription")}>
        <PatientsTable patients={patients} canReadMedical={canReadMedical} />
      </Card>
    </div>
  );
}
