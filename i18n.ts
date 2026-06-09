import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { locales, type Locale } from "@/lib/i18n";

const isLocale = (value: string): value is Locale =>
  locales.includes(value as Locale);

export default getRequestConfig(async ({ locale, requestLocale }) => {
  const resolvedLocale = locale ?? (await requestLocale);

  if (!resolvedLocale || !isLocale(resolvedLocale)) {
    notFound();
  }

  return {
    locale: resolvedLocale,
    messages: (await import(`./messages/${resolvedLocale}.json`)).default,
  };
});
