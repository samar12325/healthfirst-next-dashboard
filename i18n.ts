import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { locales } from "@/lib/i18n";

export default getRequestConfig(async ({ locale, requestLocale }) => {
  const resolvedLocale = locale ?? (await requestLocale);

  if (!resolvedLocale || !locales.includes(resolvedLocale)) {
    notFound();
  }

  return {
    locale: resolvedLocale,
    messages: (await import(`./messages/${resolvedLocale}.json`)).default,
  };
});
