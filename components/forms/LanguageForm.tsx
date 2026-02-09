"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import type { LanguageOption } from "@/types/models";
import { SelectField } from "@/components/forms/SelectField";

type LanguageFormProps = {
  options: LanguageOption[];
};

export const LanguageForm = ({ options }: LanguageFormProps) => {
  const t = useTranslations("settings.language");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const selected = options.find((option) => option.value === locale);

  const handleChange = (nextLocale: string) => {
    if (nextLocale === locale) {
      return;
    }

    const segments = pathname.split("/");
    if (segments[1] === locale) {
      segments[1] = nextLocale;
    } else {
      segments.splice(1, 0, nextLocale);
    }

    router.replace(segments.join("/") || "/");
  };

  return (
    <div className="space-y-4">
      <SelectField
        label={t("label")}
        options={options.map((option) => ({
          value: option.value,
          label: option.label,
        }))}
        value={locale}
        onChange={handleChange}
      />
      {selected && (
        <p className="text-sm text-[var(--text-secondary)]">{selected.note}</p>
      )}
    </div>
  );
};
