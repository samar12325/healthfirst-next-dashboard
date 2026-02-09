import type { ReactNode } from "react";
import { Cairo } from "next/font/google";
import { defaultLocale, locales, type Locale } from "@/lib/i18n";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "HealthFirst Clinic Management",
  description: "Clinic management system frontend",
};

export default function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params?: { locale?: string };
}) {
  const requestedLocale = params?.locale;
  const locale: Locale = locales.includes(requestedLocale as Locale)
    ? (requestedLocale as Locale)
    : defaultLocale;
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir}>
      <body className={`${cairo.variable} antialiased`} dir={dir}>
        {children}
      </body>
    </html>
  );
}
