"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { AppShell } from "@/components/layout/AppShell";
import { AuthShell } from "@/components/layout/AuthShell";

type RootLayoutClientProps = {
  children: ReactNode;
};

export const RootLayoutClient = ({ children }: RootLayoutClientProps) => {
  const pathname = usePathname();
  const isAuthRoute = pathname.endsWith("/login");

  if (isAuthRoute) {
    return <AuthShell>{children}</AuthShell>;
  }

  return <AppShell>{children}</AppShell>;
};
