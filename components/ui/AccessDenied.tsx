import { useTranslations } from "next-intl";
import { Icon } from "@/components/ui/Icon";

type AccessDeniedProps = {
  title?: string;
  message?: string;
};

export const AccessDenied = ({ title, message }: AccessDeniedProps) => {
  const t = useTranslations("common");

  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center rounded-3xl border border-dashed border-[var(--border)] bg-[var(--surface)] p-10 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-100 text-rose-500">
        <Icon name="shield" className="h-7 w-7" />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-[var(--text-primary)]">
        {title ?? t("accessDeniedTitle")}
      </h3>
      <p className="mt-2 text-sm text-[var(--text-secondary)]">
        {message ?? t("accessDeniedMessage")}
      </p>
    </div>
  );
};
