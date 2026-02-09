import { PERMISSIONS } from "@/lib/constants";
import { defaultLocale, type Locale } from "@/lib/i18n";
import type {
  DashboardWidget,
  Metric,
  OperationalHighlight,
} from "@/types/models";

const metricsByLocale: Record<Locale, Metric[]> = {
  ar: [
    {
      id: "metric-clinics",
      label: "عدد العيادات",
      value: "12",
      trend: "+2%",
    },
    {
      id: "metric-appointments",
      label: "إجمالي المواعيد اليوم",
      value: "428",
      trend: "+6%",
    },
    {
      id: "metric-doctors",
      label: "إجمالي الأطباء",
      value: "96",
      trend: "+3%",
    },
    {
      id: "metric-patients",
      label: "إجمالي المرضى",
      value: "1,284",
      trend: "+4%",
    },
    {
      id: "metric-cancellations",
      label: "نسبة الإلغاء",
      value: "5.4%",
      trend: "-1%",
    },
    {
      id: "metric-wait",
      label: "متوسط وقت الانتظار",
      value: "18 دقيقة",
      trend: "-2%",
    },
  ],
  en: [
    {
      id: "metric-clinics",
      label: "Total clinics",
      value: "12",
      trend: "+2%",
    },
    {
      id: "metric-appointments",
      label: "Total appointments today",
      value: "428",
      trend: "+6%",
    },
    {
      id: "metric-doctors",
      label: "Total doctors",
      value: "96",
      trend: "+3%",
    },
    {
      id: "metric-patients",
      label: "Total patients",
      value: "1,284",
      trend: "+4%",
    },
    {
      id: "metric-cancellations",
      label: "Cancellation rate",
      value: "5.4%",
      trend: "-1%",
    },
    {
      id: "metric-wait",
      label: "Average wait time",
      value: "18 min",
      trend: "-2%",
    },
  ],
};

const widgetsByLocale: Record<Locale, DashboardWidget[]> = {
  ar: [
    {
      id: "widget-appointments",
      title: "إدارة المواعيد",
      description: "إنشاء وجدولة ومتابعة حجوزات المرضى.",
      href: "/appointments",
      permission: PERMISSIONS.appointment.create,
    },
    {
      id: "widget-medical",
      title: "السجلات الطبية",
      description: "الوصول السريع لملفات المرضى وخطط العلاج.",
      href: "/medical-records",
      permission: PERMISSIONS.medicalRecord.read,
    },
    {
      id: "widget-users",
      title: "إدارة المستخدمين",
      description: "توزيع الصلاحيات وتحديث الأدوار.",
      href: "/users",
      permission: PERMISSIONS.user.assignPermissions,
    },
    {
      id: "widget-audit",
      title: "سجل التدقيق",
      description: "متابعة الأنشطة الحساسة ومراجعتها.",
      href: "/audit-log",
      permission: PERMISSIONS.auditLog.read,
    },
  ],
  en: [
    {
      id: "widget-appointments",
      title: "Appointment Management",
      description: "Create, schedule, and follow up on patient visits.",
      href: "/appointments",
      permission: PERMISSIONS.appointment.create,
    },
    {
      id: "widget-medical",
      title: "Medical Records",
      description: "Quick access to patient files and care plans.",
      href: "/medical-records",
      permission: PERMISSIONS.medicalRecord.read,
    },
    {
      id: "widget-users",
      title: "User Administration",
      description: "Assign permissions and keep roles aligned.",
      href: "/users",
      permission: PERMISSIONS.user.assignPermissions,
    },
    {
      id: "widget-audit",
      title: "Audit Log",
      description: "Review sensitive system activities.",
      href: "/audit-log",
      permission: PERMISSIONS.auditLog.read,
    },
  ],
};

const highlightsByLocale: Record<Locale, OperationalHighlight[]> = {
  ar: [
    {
      id: "highlight-rooms",
      label: "الغرف المشغولة",
      value: "7 / 12",
      note: "أعلى إشغال في الفترة الصباحية.",
    },
    {
      id: "highlight-wait",
      label: "متوسط وقت الانتظار",
      value: "14 دقيقة",
      note: "أقل من متوسط الأسبوع الماضي.",
    },
    {
      id: "highlight-feedback",
      label: "رضا المرضى",
      value: "4.7 / 5",
      note: "تقييمات إيجابية للجودة.",
    },
  ],
  en: [
    {
      id: "highlight-rooms",
      label: "Occupied Rooms",
      value: "7 / 12",
      note: "Peak occupancy during the morning shift.",
    },
    {
      id: "highlight-wait",
      label: "Average Wait Time",
      value: "14 min",
      note: "Below last week's average.",
    },
    {
      id: "highlight-feedback",
      label: "Patient Satisfaction",
      value: "4.7 / 5",
      note: "Positive quality feedback.",
    },
  ],
};


export const getDashboardMetrics = (locale: Locale): Metric[] => {
  // Backend integration: replace with dashboard KPIs API.
  return metricsByLocale[locale] ?? metricsByLocale[defaultLocale];
};

export const getDashboardWidgets = (locale: Locale): DashboardWidget[] => {
  // Backend integration: replace with dashboard modules API.
  return widgetsByLocale[locale] ?? widgetsByLocale[defaultLocale];
};

export const getOperationalHighlights = (
  locale: Locale,
): OperationalHighlight[] => {
  // Backend integration: replace with operational metrics API.
  return highlightsByLocale[locale] ?? highlightsByLocale[defaultLocale];
};
