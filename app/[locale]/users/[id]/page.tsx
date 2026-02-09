import { use } from "react";
import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/layout/PageHeader";
import { AccessDenied } from "@/components/ui/AccessDenied";
import { Card } from "@/components/ui/Card";
import { InfoList } from "@/components/ui/InfoList";
import { PermissionAssignment } from "@/components/forms/PermissionAssignment";
import { RolePresetsList } from "@/components/ui/RolePresetsList";
import { PERMISSIONS } from "@/lib/constants";
import { type Locale } from "@/lib/i18n";
import { hasPermission } from "@/lib/permissions";
import {
  getPermissionGroups,
  getRolePresets,
  getUserById,
} from "@/services/user.service";

type UserDetailsPageProps = {
  params: { id: string; locale: Locale };
};

export default function UserDetailsPage({ params }: UserDetailsPageProps) {
  const { id, locale } = use(params);
  const t = useTranslations("users.details");
  const canAssignPermissions = hasPermission(PERMISSIONS.user.assignPermissions);

  if (!canAssignPermissions) {
    return <AccessDenied />;
  }

  const user = getUserById(id);

  if (!user) {
    notFound();
  }

  const permissionGroups = getPermissionGroups(locale);
  const rolePresets = getRolePresets(locale);

  return (
    <div className="space-y-6">
      <PageHeader
        title={t("title", { name: user.name })}
        subtitle={t("subtitle")}
      />

      <Card title={t("profile")}>
        <InfoList
          items={[
            { label: t("fields.email"), value: user.email },
            { label: t("fields.role"), value: user.role },
            { label: t("fields.department"), value: user.department },
            { label: t("fields.phone"), value: user.phone },
            { label: t("fields.lastActive"), value: user.lastActive },
            {
              label: t("fields.status"),
              value:
                user.status === "active"
                  ? t("fields.statusActive")
                  : t("fields.statusInactive"),
            },
          ]}
        />
      </Card>

      <Card title={t("permissionsTitle")} description={t("permissionsDescription")}>
        <PermissionAssignment
          groups={permissionGroups}
          assigned={user.permissions}
        />
      </Card>

      <Card title={t("presetsTitle")} description={t("presetsDescription")}>
        <RolePresetsList presets={rolePresets} />
      </Card>
    </div>
  );
}
