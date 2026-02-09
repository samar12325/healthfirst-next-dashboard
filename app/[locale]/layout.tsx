import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { RootLayoutClient } from "@/components/layout/RootLayoutClient";
import { defaultLocale, locales, type Locale } from "@/lib/i18n";
import "../globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "HealthFirst Clinic Management",
  description: "Clinic management system frontend",
};

export const generateStaticParams = () =>
  locales.map((locale) => ({ locale }));

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>;

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale: requestedLocale } = await params;
  const locale = requestedLocale ?? defaultLocale;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body
        className={`${cairo.variable} antialiased`}
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          <RootLayoutClient>{children}</RootLayoutClient>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
