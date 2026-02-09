import { defaultLocale, type Locale } from "@/lib/i18n";
import type { ClinicDetails, ClinicSummary } from "@/types/models";

const clinicDetailsByLocale: Record<Locale, ClinicDetails[]> = {
  ar: [
    {
      id: "clinic-dental",
      name: "عيادة الأسنان",
      location: "الرياض - العليا",
      hours: "08:00 ص - 10:00 م",
      specialtiesCount: 1,
      kpis: [
        { id: "clinic-appointments", label: "مواعيد اليوم", value: "86" },
        { id: "clinic-doctors", label: "أطباء متاحون", value: "12" },
        { id: "clinic-waiting", label: "مرضى بالحالة Waiting", value: "9" },
        { id: "clinic-wait", label: "متوسط وقت الانتظار", value: "18 دقيقة" },
        { id: "clinic-no-show", label: "نسبة No-Show", value: "6%" },
      ],
    },
    {
      id: "clinic-dermatology",
      name: "عيادة الجلدية",
      location: "جدة - الشاطئ",
      hours: "09:00 ص - 09:00 م",
      specialtiesCount: 1,
      kpis: [
        { id: "clinic-appointments", label: "مواعيد اليوم", value: "64" },
        { id: "clinic-doctors", label: "أطباء متاحون", value: "9" },
        { id: "clinic-waiting", label: "مرضى بالحالة Waiting", value: "11" },
        { id: "clinic-wait", label: "متوسط وقت الانتظار", value: "22 دقيقة" },
        { id: "clinic-no-show", label: "نسبة No-Show", value: "8%" },
      ],
    },
    {
      id: "clinic-pediatrics",
      name: "عيادة الأطفال",
      location: "الدمام - الفيصلية",
      hours: "08:00 ص - 08:00 م",
      specialtiesCount: 1,
      kpis: [
        { id: "clinic-appointments", label: "مواعيد اليوم", value: "48" },
        { id: "clinic-doctors", label: "أطباء متاحون", value: "7" },
        { id: "clinic-waiting", label: "مرضى بالحالة Waiting", value: "6" },
        { id: "clinic-wait", label: "متوسط وقت الانتظار", value: "15 دقيقة" },
        { id: "clinic-no-show", label: "نسبة No-Show", value: "4%" },
      ],
    },
  ],
  en: [
    {
      id: "clinic-dental",
      name: "Dental Clinic",
      location: "Riyadh - Olaya",
      hours: "08:00 AM - 10:00 PM",
      specialtiesCount: 1,
      kpis: [
        { id: "clinic-appointments", label: "Today's appointments", value: "86" },
        { id: "clinic-doctors", label: "Available doctors", value: "12" },
        { id: "clinic-waiting", label: "Patients in waiting", value: "9" },
        { id: "clinic-wait", label: "Average wait time", value: "18 min" },
        { id: "clinic-no-show", label: "No-show rate", value: "6%" },
      ],
    },
    {
      id: "clinic-dermatology",
      name: "Dermatology Clinic",
      location: "Jeddah - Corniche",
      hours: "09:00 AM - 09:00 PM",
      specialtiesCount: 1,
      kpis: [
        { id: "clinic-appointments", label: "Today's appointments", value: "64" },
        { id: "clinic-doctors", label: "Available doctors", value: "9" },
        { id: "clinic-waiting", label: "Patients in waiting", value: "11" },
        { id: "clinic-wait", label: "Average wait time", value: "22 min" },
        { id: "clinic-no-show", label: "No-show rate", value: "8%" },
      ],
    },
    {
      id: "clinic-pediatrics",
      name: "Pediatrics Clinic",
      location: "Dammam - Faisaliyah",
      hours: "08:00 AM - 08:00 PM",
      specialtiesCount: 1,
      kpis: [
        { id: "clinic-appointments", label: "Today's appointments", value: "48" },
        { id: "clinic-doctors", label: "Available doctors", value: "7" },
        { id: "clinic-waiting", label: "Patients in waiting", value: "6" },
        { id: "clinic-wait", label: "Average wait time", value: "15 min" },
        { id: "clinic-no-show", label: "No-show rate", value: "4%" },
      ],
    },
  ],
};

export const getClinics = (locale: Locale): ClinicSummary[] => {
  const clinics =
    clinicDetailsByLocale[locale] ?? clinicDetailsByLocale[defaultLocale];
  return clinics.map(({ kpis, ...summary }) => summary);
};

export const getClinicById = (
  locale: Locale,
  id: string,
): ClinicDetails | null => {
  const clinics =
    clinicDetailsByLocale[locale] ?? clinicDetailsByLocale[defaultLocale];
  return clinics.find((clinic) => clinic.id === id) ?? null;
};
