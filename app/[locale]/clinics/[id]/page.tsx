import { use } from "react";
import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { InfoList } from "@/components/ui/InfoList";
import { MetricCard } from "@/components/ui/MetricCard";
import { type Locale } from "@/lib/i18n";
import { getClinicById } from "@/services/clinic.service";

type ClinicPageProps = {
  params: { locale: Locale; id: string };
};

export default function ClinicPage({ params }: ClinicPageProps) {
  const { locale, id } = use(params);
  const t = useTranslations("clinic");
  const clinic = getClinicById(locale, id);

  if (!clinic) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <PageHeader
        title={clinic.name}
        subtitle={t("subtitle", { location: clinic.location })}
      />

      <Card title={t("info.title")} description={t("info.description")}>
        <InfoList
          items={[
            { label: t("info.fields.name"), value: clinic.name },
            { label: t("info.fields.location"), value: clinic.location },
            { label: t("info.fields.hours"), value: clinic.hours },
            {
              label: t("info.fields.specialties"),
              value: clinic.specialtiesCount.toString(),
            },
          ]}
        />
      </Card>

      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-[var(--text-primary)]">
            {t("kpis.title")}
          </h2>
          <p className="text-sm text-[var(--text-secondary)]">
            {t("kpis.description")}
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {clinic.kpis.map((metric) => (
            <MetricCard key={metric.id} metric={metric} />
          ))}
        </div>
      </section>
    </div>
  );
}
