import type { ReactNode } from "react";
import { useTranslations } from "next-intl";
import { APP_NAME } from "@/lib/constants";
import { Icon } from "@/components/ui/Icon";

type AuthShellProps = {
  children: ReactNode;
};

export const AuthShell = ({ children }: AuthShellProps) => (
  <AuthShellContent>{children}</AuthShellContent>
);

const AuthShellContent = ({ children }: AuthShellProps) => {
  const t = useTranslations("app");

  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--page-bg)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(45,212,191,0.15),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.12),transparent_40%)]" />
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-12">
        <div className="w-full max-w-md rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow-card)]">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent)] text-white">
              <Icon name="pulse" className="h-6 w-6" />
            </div>
            <div>
              <p className="text-lg font-semibold text-[var(--text-primary)]">
                {APP_NAME}
              </p>
              <p className="text-xs text-[var(--text-secondary)]">
                {t("subtitle")}
              </p>
            </div>
          </div>
          <div className="mt-6">{children}</div>
        </div>
      </div>
    </div>
  );
};
