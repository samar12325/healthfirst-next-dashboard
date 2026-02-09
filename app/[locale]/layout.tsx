import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { RootLayoutClient } from "@/components/layout/RootLayoutClient";
import { defaultLocale, locales, type Locale } from "@/lib/i18n";

export const generateStaticParams = () =>
  locales.map((locale) => ({ locale }));

type RootLayoutProps = {
  children: ReactNode;
  params: { locale: string };
};

export default async function LocaleLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale: requestedLocale } = await params;
  const locale: Locale = locales.includes(requestedLocale as Locale)
    ? (requestedLocale as Locale)
    : defaultLocale;

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <RootLayoutClient>{children}</RootLayoutClient>
    </NextIntlClientProvider>
  );
}
