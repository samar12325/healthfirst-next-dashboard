import { use } from "react";
import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { PermissionGroups } from "@/components/ui/PermissionGroups";
import { RolePresetsList } from "@/components/ui/RolePresetsList";
import { type Locale } from "@/lib/i18n";
import { getPermissionGroups, getRolePresets } from "@/services/user.service";

type RolesPageProps = {
  params: { locale: Locale };
};

export default function RolesPage({ params }: RolesPageProps) {
  const { locale } = use(params);
  const t = useTranslations("roles");
  const permissionGroups = getPermissionGroups(locale);
  const rolePresets = getRolePresets(locale);

  return (
    <div className="space-y-6">
      <PageHeader title={t("title")} subtitle={t("subtitle")} />

      <Card title={t("groupsTitle")} description={t("groupsDescription")}>
        <PermissionGroups groups={permissionGroups} />
      </Card>

      <Card title={t("presetsTitle")} description={t("presetsDescription")}>
        <RolePresetsList presets={rolePresets} />
      </Card>
    </div>
  );
}
