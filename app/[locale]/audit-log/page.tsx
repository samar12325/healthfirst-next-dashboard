import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/layout/PageHeader";
import { AccessDenied } from "@/components/ui/AccessDenied";
import { Card } from "@/components/ui/Card";
import { AuditLogTable } from "@/components/tables/AuditLogTable";
import { PERMISSIONS } from "@/lib/constants";
import { hasPermission } from "@/lib/permissions";
import { getAuditLogs } from "@/services/audit-log.service";

export default function AuditLogPage() {
  const t = useTranslations("auditLog");
  const canReadAudit = hasPermission(PERMISSIONS.auditLog.read);

  if (!canReadAudit) {
    return <AccessDenied />;
  }

  const logs = getAuditLogs();

  return (
    <div className="space-y-6">
      <PageHeader title={t("title")} subtitle={t("subtitle")} />

      <Card title={t("listTitle")} description={t("listDescription")}>
        <AuditLogTable entries={logs} />
      </Card>
    </div>
  );
}
