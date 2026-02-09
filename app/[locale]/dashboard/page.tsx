import { use } from "react";
import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { ClinicCard } from "@/components/ui/ClinicCard";
import { HighlightsList } from "@/components/ui/HighlightsList";
import { MetricCard } from "@/components/ui/MetricCard";
import { WidgetCard } from "@/components/ui/WidgetCard";
import { UpcomingAppointments } from "@/components/tables/UpcomingAppointments";
import { type Locale } from "@/lib/i18n";
import { filterByPermission } from "@/lib/permissions";
import { getUpcomingAppointments } from "@/services/appointment.service";
import { getClinics } from "@/services/clinic.service";
import {
  getDashboardMetrics,
  getDashboardWidgets,
  getOperationalHighlights,
} from "@/services/dashboard.service";

type DashboardPageProps = {
  params: { locale: Locale };
};

export default function DashboardPage({ params }: DashboardPageProps) {
  const { locale } = use(params);
  const t = useTranslations("dashboard");
  const metrics = getDashboardMetrics(locale);
  const widgets = filterByPermission(getDashboardWidgets(locale));
  const highlights = getOperationalHighlights(locale);
  const clinics = getClinics(locale);
  const upcomingAppointments = getUpcomingAppointments(locale);
  const clinicLabels = {
    location: t("clinics.fields.location"),
    hours: t("clinics.fields.hours"),
    specialties: t("clinics.fields.specialties"),
    action: t("clinics.action"),
  };

  return (
    <div className="space-y-8">
      <PageHeader title={t("title")} subtitle={t("subtitle")} />

      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-[var(--text-primary)]">
            {t("globalOverview.title")}
          </h2>
          <p className="text-sm text-[var(--text-secondary)]">
            {t("globalOverview.description")}
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {metrics.map((metric) => (
            <MetricCard key={metric.id} metric={metric} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-[var(--text-primary)]">
            {t("clinics.title")}
          </h2>
          <p className="text-sm text-[var(--text-secondary)]">
            {t("clinics.description")}
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {clinics.map((clinic) => (
            <ClinicCard
              key={clinic.id}
              clinic={clinic}
              href={`/clinics/${clinic.id}`}
              labels={clinicLabels}
            />
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {widgets.map((widget) => (
          <WidgetCard
            key={widget.id}
            title={widget.title}
            description={widget.description}
            actionLabel={t("widgets.action")}
            href={widget.href}
          />
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card title={t("upcoming.title")} description={t("upcoming.description")}>
          <UpcomingAppointments appointments={upcomingAppointments} />
        </Card>
        <Card
          title={t("highlights.title")}
          description={t("highlights.description")}
        >
          <HighlightsList highlights={highlights} />
        </Card>
      </section>
    </div>
  );
}
