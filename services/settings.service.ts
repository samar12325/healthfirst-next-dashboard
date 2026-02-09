import { defaultLocale, type Locale } from "@/lib/i18n";
import type { LanguageOption, SystemSettings } from "@/types/models";

const systemSettings: SystemSettings = {
  clinicName: "HealthFirst Medical Clinic",
  phone: "+1 (555) 000-000",
  email: "contact@healthfirst.com",
  address: "Medical Center Drive, San Francisco 100",
  language: "ar",
};

const languageOptionsByLocale: Record<Locale, LanguageOption[]> = {
  ar: [
    {
      value: "ar",
      label: "العربية (Arabic)",
      note: "تم تفعيل اللغة العربية. سيتم عرض الواجهة من اليمين إلى اليسار.",
    },
    {
      value: "en",
      label: "الإنجليزية (English)",
      note: "سيتم عرض الواجهة من اليسار إلى اليمين.",
    },
  ],
  en: [
    {
      value: "ar",
      label: "Arabic (العربية)",
      note: "Interface will render right-to-left.",
    },
    {
      value: "en",
      label: "English",
      note: "Interface will render left-to-right.",
    },
  ],
};

export const getSystemSettings = (): SystemSettings => {
  // Backend integration: replace with system settings API.
  return systemSettings;
};

export const getLanguageOptions = (locale: Locale): LanguageOption[] => {
  // Backend integration: replace with language options API.
  return (
    languageOptionsByLocale[locale] ??
    languageOptionsByLocale[defaultLocale]
  );
};
