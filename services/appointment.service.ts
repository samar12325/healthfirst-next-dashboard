import { defaultLocale, type Locale } from "@/lib/i18n";
import type { Appointment, Metric } from "@/types/models";

const appointmentsByLocale: Record<Locale, Appointment[]> = {
  ar: [
    {
      id: "apt-1001",
      patientName: "خالد علي",
      doctorName: "د. سلمى أحمد",
      date: "2026-01-13",
      time: "09:30",
      status: "confirmed",
      type: "استشارة أولية",
      channel: "حضوري",
      clinicName: "عيادة الأسنان",
      city: "الرياض",
      waitTimeMinutes: 12,
    },
    {
      id: "apt-1002",
      patientName: "سارة عمر",
      doctorName: "د. ياسر خالد",
      date: "2026-01-13",
      time: "10:15",
      status: "delayed",
      type: "متابعة",
      channel: "عن بُعد",
      clinicName: "عيادة الجلدية",
      city: "جدة",
      waitTimeMinutes: 28,
    },
    {
      id: "apt-1003",
      patientName: "مريم صالح",
      doctorName: "د. سلمى أحمد",
      date: "2026-01-13",
      time: "11:00",
      status: "pending",
      type: "تحاليل",
      channel: "حضوري",
      clinicName: "عيادة الأسنان",
      city: "الرياض",
      waitTimeMinutes: 9,
    },
    {
      id: "apt-1004",
      patientName: "أحمد ناصر",
      doctorName: "د. لمياء مصطفى",
      date: "2026-01-13",
      time: "12:20",
      status: "completed",
      type: "إجراء بسيط",
      channel: "حضوري",
      clinicName: "عيادة الأطفال",
      city: "الدمام",
      waitTimeMinutes: 6,
    },
    {
      id: "apt-1005",
      patientName: "ليان فهد",
      doctorName: "د. سلمى أحمد",
      date: "2026-01-13",
      time: "01:00",
      status: "cancelled",
      type: "استشارة",
      channel: "حضوري",
      clinicName: "عيادة الأسنان",
      city: "الرياض",
      waitTimeMinutes: 0,
    },
    {
      id: "apt-1006",
      patientName: "رنا يوسف",
      doctorName: "د. ياسر خالد",
      date: "2026-01-13",
      time: "02:30",
      status: "no_show",
      type: "استشارة",
      channel: "حضوري",
      clinicName: "عيادة الجلدية",
      city: "جدة",
      waitTimeMinutes: 0,
    },
  ],
  en: [
    {
      id: "apt-1001",
      patientName: "Khaled Ali",
      doctorName: "Dr. Salma Ahmed",
      date: "2026-01-13",
      time: "09:30",
      status: "confirmed",
      type: "Initial consultation",
      channel: "On-site",
      clinicName: "Dental Clinic",
      city: "Riyadh",
      waitTimeMinutes: 12,
    },
    {
      id: "apt-1002",
      patientName: "Sara Omar",
      doctorName: "Dr. Yasser Khaled",
      date: "2026-01-13",
      time: "10:15",
      status: "delayed",
      type: "Follow-up",
      channel: "Telehealth",
      clinicName: "Dermatology Clinic",
      city: "Jeddah",
      waitTimeMinutes: 28,
    },
    {
      id: "apt-1003",
      patientName: "Maryam Saleh",
      doctorName: "Dr. Salma Ahmed",
      date: "2026-01-13",
      time: "11:00",
      status: "pending",
      type: "Lab work",
      channel: "On-site",
      clinicName: "Dental Clinic",
      city: "Riyadh",
      waitTimeMinutes: 9,
    },
    {
      id: "apt-1004",
      patientName: "Ahmed Nasser",
      doctorName: "Dr. Lamia Mustafa",
      date: "2026-01-13",
      time: "12:20",
      status: "completed",
      type: "Minor procedure",
      channel: "On-site",
      clinicName: "Pediatrics Clinic",
      city: "Dammam",
      waitTimeMinutes: 6,
    },
    {
      id: "apt-1005",
      patientName: "Layan Fahad",
      doctorName: "Dr. Salma Ahmed",
      date: "2026-01-13",
      time: "01:00",
      status: "cancelled",
      type: "Consultation",
      channel: "On-site",
      clinicName: "Dental Clinic",
      city: "Riyadh",
      waitTimeMinutes: 0,
    },
    {
      id: "apt-1006",
      patientName: "Rana Youssef",
      doctorName: "Dr. Yasser Khaled",
      date: "2026-01-13",
      time: "02:30",
      status: "no_show",
      type: "Consultation",
      channel: "On-site",
      clinicName: "Dermatology Clinic",
      city: "Jeddah",
      waitTimeMinutes: 0,
    },
  ],
};

const systemMetricsByLocale: Record<Locale, Metric[]> = {
  ar: [
    { id: "kpi-total", label: "إجمالي المواعيد", value: "428" },
    { id: "kpi-active", label: "المواعيد النشطة", value: "312" },
    { id: "kpi-delayed", label: "المتأخرة", value: "48" },
    { id: "kpi-cancelled", label: "الملغاة", value: "38" },
    { id: "kpi-no-show", label: "عدم الحضور", value: "22" },
    { id: "kpi-wait", label: "متوسط وقت الانتظار", value: "18 دقيقة" },
  ],
  en: [
    { id: "kpi-total", label: "Total appointments", value: "428" },
    { id: "kpi-active", label: "Active appointments", value: "312" },
    { id: "kpi-delayed", label: "Delayed", value: "48" },
    { id: "kpi-cancelled", label: "Cancelled", value: "38" },
    { id: "kpi-no-show", label: "No-show", value: "22" },
    { id: "kpi-wait", label: "Average wait time", value: "18 min" },
  ],
};

const currentDoctorByLocale: Record<Locale, string> = {
  ar: "سلمى",
  en: "Salma",
};

export const getAppointments = (
  locale: Locale = defaultLocale,
): Appointment[] => {
  // Backend integration: replace with appointments API.
  return appointmentsByLocale[locale] ?? appointmentsByLocale[defaultLocale];
};

export const getMyAppointments = (
  locale: Locale = defaultLocale,
): Appointment[] => {
  // Backend integration: filter by authenticated user.
  const appointments = getAppointments(locale);
  const doctorName = currentDoctorByLocale[locale] ?? currentDoctorByLocale.ar;

  return appointments.filter((appointment) =>
    appointment.doctorName.includes(doctorName),
  );
};

export const getUpcomingAppointments = (
  locale: Locale = defaultLocale,
): Appointment[] => {
  // Backend integration: return next appointments.
  const appointments = getAppointments(locale);

  return appointments.filter(
    (appointment) =>
      appointment.status !== "cancelled" &&
      appointment.status !== "completed" &&
      appointment.status !== "no_show",
  );
};

export const getSystemAppointmentMetrics = (
  locale: Locale,
): Metric[] => {
  // Backend integration: replace with system appointments KPIs API.
  return systemMetricsByLocale[locale] ?? systemMetricsByLocale[defaultLocale];
};
