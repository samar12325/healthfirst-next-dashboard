import { useTranslations } from "next-intl";
import type { SystemSettings } from "@/types/models";
import { TextField } from "@/components/forms/TextField";
import { Button } from "@/components/ui/Button";

type ClinicInfoFormProps = {
  settings: SystemSettings;
};

export const ClinicInfoForm = ({ settings }: ClinicInfoFormProps) => (
  <ClinicInfoFormContent settings={settings} />
);

const ClinicInfoFormContent = ({ settings }: ClinicInfoFormProps) => {
  const t = useTranslations("settings.clinicInfo");

  return (
    <div className="space-y-5">
      <TextField label={t("name")} defaultValue={settings.clinicName} dir="ltr" />
      <TextField label={t("phone")} defaultValue={settings.phone} dir="ltr" />
      <TextField
        label={t("email")}
        defaultValue={settings.email}
        type="email"
        dir="ltr"
      />
      <TextField label={t("address")} defaultValue={settings.address} dir="ltr" />
      <div className="pt-2">
        <Button>{t("update")}</Button>
      </div>
    </div>
  );
};
