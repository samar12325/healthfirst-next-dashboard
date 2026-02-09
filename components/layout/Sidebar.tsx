"use client";

import { Link, usePathname } from "@/lib/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Icon } from "@/components/ui/Icon";
import { APP_NAME, NAV_ITEMS } from "@/lib/constants";
import { filterByPermission } from "@/lib/permissions";
import { getSession } from "@/services/user.service";

export const Sidebar = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("nav");
  const appT = useTranslations("app");
  const commonT = useTranslations("common");
  const navItems = filterByPermission(NAV_ITEMS);
  const { user } = getSession();
  const normalizedPath = pathname.startsWith(`/${locale}`)
    ? pathname.slice(locale.length + 1) || "/"
    : pathname;

  return (
    <aside className="flex w-full flex-col bg-[var(--sidebar-bg)] text-slate-100 lg:sticky lg:top-0 lg:h-screen lg:w-72">
      <div className="border-b border-white/10 p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent)] text-white">
            <Icon name="pulse" className="h-6 w-6" />
          </div>
          <div>
            <p className="text-lg font-semibold">{APP_NAME}</p>
            <p className="text-xs text-slate-300">{appT("subtitle")}</p>
          </div>
        </div>
      </div>

      <nav className="grid gap-2 p-4 lg:flex lg:flex-1 lg:flex-col">
        {navItems.map((item) => {
          const isActive =
            normalizedPath === item.href ||
            (normalizedPath.startsWith(item.href) && item.href !== "/");

          return (
            <Link
              key={item.key}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                isActive
                  ? "bg-[var(--accent)] text-white"
                  : "text-slate-200 hover:bg-white/10"
              }`}
            >
              <Icon name={item.icon} className="h-5 w-5" />
              <span>{t(item.labelKey)}</span>
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-white/10 p-4">
        <div className="space-y-3">
          <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-semibold text-white">
              {user.initials}
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold">{user.name}</p>
              <p className="text-xs text-slate-300">{user.role}</p>
            </div>
          </div>
          <Link
            href="/login"
            className="flex items-center justify-center gap-2 rounded-xl border border-white/10 px-3 py-2 text-xs font-semibold text-slate-200 transition hover:bg-white/10"
          >
            <Icon name="logout" className="h-4 w-4" />
            <span>{commonT("logout")}</span>
          </Link>
        </div>
      </div>
    </aside>
  );
};
