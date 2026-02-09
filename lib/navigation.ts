import { createNavigation } from "next-intl/navigation";
import { defaultLocale, locales } from "@/lib/i18n";

export const { Link, usePathname, useRouter, redirect, getPathname } =
  createNavigation({
    locales,
    defaultLocale,
    localePrefix: "always",
  });
