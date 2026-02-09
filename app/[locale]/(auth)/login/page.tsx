import { useTranslations } from "next-intl";
import { TextField } from "@/components/forms/TextField";
import { Button } from "@/components/ui/Button";

export default function LoginPage() {
  const t = useTranslations("auth.login");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-[var(--text-primary)]">
          {t("title")}
        </h1>
        <p className="mt-2 text-sm text-[var(--text-secondary)]">
          {t("subtitle")}
        </p>
      </div>

      <form className="space-y-4">
        <TextField label={t("email")} type="email" dir="ltr" />
        <TextField label={t("password")} type="password" dir="ltr" />
        <div className="flex items-center justify-between text-xs text-[var(--text-secondary)]">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4 accent-[var(--accent)]" />
            {t("remember")}
          </label>
          <span>{t("forgot")}</span>
        </div>
        <Button className="w-full" type="submit">
          {t("submit")}
        </Button>
      </form>
    </div>
  );
}
