import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/layout/PageHeader";
import { AccessDenied } from "@/components/ui/AccessDenied";
import { Card } from "@/components/ui/Card";
import { UsersTable } from "@/components/tables/UsersTable";
import { PERMISSIONS } from "@/lib/constants";
import { hasPermission } from "@/lib/permissions";
import { getUsers } from "@/services/user.service";

export default function UsersPage() {
  const t = useTranslations("users");
  const canAssignPermissions = hasPermission(PERMISSIONS.user.assignPermissions);

  if (!canAssignPermissions) {
    return <AccessDenied />;
  }

  const users = getUsers();

  return (
    <div className="space-y-6">
      <PageHeader title={t("title")} subtitle={t("subtitle")} />

      <Card title={t("listTitle")} description={t("listDescription")}>
        <UsersTable users={users} />
      </Card>
    </div>
  );
}
