import type { ReactNode } from "react";
import { Sidebar } from "@/components/layout/Sidebar";

type AppShellProps = {
  children: ReactNode;
};

export const AppShell = ({ children }: AppShellProps) => (
  <div className="min-h-screen bg-[var(--page-bg)] text-[var(--text-primary)]">
    <div className="app-shell">
      <Sidebar />
      <main className="flex-1 px-6 py-8 lg:px-8 lg:py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
          {children}
        </div>
      </main>
    </div>
  </div>
);
