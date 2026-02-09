import { use } from "react";
import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/layout/PageHeader";
import { AccessDenied } from "@/components/ui/AccessDenied";
import { Card } from "@/components/ui/Card";
import { ClinicInfoForm } from "@/components/forms/ClinicInfoForm";
import { LanguageForm } from "@/components/forms/LanguageForm";
import { PERMISSIONS } from "@/lib/constants";
import { type Locale } from "@/lib/i18n";
import { hasPermission } from "@/lib/permissions";
import {
  getLanguageOptions,
  getSystemSettings,
} from "@/services/settings.service";

type SettingsPageProps = {
  params: { locale: Locale };
};

export default function SettingsPage({ params }: SettingsPageProps) {
  const { locale } = use(params);
  const t = useTranslations("settings");
  const canUpdateSettings = hasPermission(PERMISSIONS.system.settingsUpdate);

  if (!canUpdateSettings) {
    return <AccessDenied />;
  }

  const settings = getSystemSettings();
  const languageOptions = getLanguageOptions(locale);

  return (
    <div className="space-y-6">
      <PageHeader title={t("title")} subtitle={t("subtitle")} />

      <section className="grid gap-6 xl:grid-cols-2">
        <Card title={t("clinicInfo.title")} description={t("clinicInfo.description")}>
          <ClinicInfoForm settings={settings} />
        </Card>

        <Card title={t("language.title")} description={t("language.description")}>
          <LanguageForm options={languageOptions} />
        </Card>
      </section>
    </div>
  );
}
