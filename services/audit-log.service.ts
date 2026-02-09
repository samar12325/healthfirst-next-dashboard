import type { AuditLogEntry } from "@/types/models";

const auditLogs: AuditLogEntry[] = [
  {
    id: "log-9001",
    action: "تحديث صلاحيات مستخدم",
    actor: "System Admin",
    timestamp: "2026-01-12 16:40",
    ipAddress: "10.24.11.32",
    status: "تم",
    details: "تحديث صلاحيات المستخدم فاطمة إبراهيم",
  },
  {
    id: "log-9002",
    action: "تعديل سجل طبي",
    actor: "د. سلمى أحمد",
    timestamp: "2026-01-12 14:20",
    ipAddress: "10.24.11.18",
    status: "تم",
    details: "تحديث تشخيص المريض خالد علي",
  },
  {
    id: "log-9003",
    action: "إلغاء موعد",
    actor: "فاطمة إبراهيم",
    timestamp: "2026-01-12 13:05",
    ipAddress: "10.24.11.44",
    status: "تم",
    details: "إلغاء موعد المريضة ليان فهد",
  },
  {
    id: "log-9004",
    action: "تحديث إعدادات النظام",
    actor: "System Admin",
    timestamp: "2026-01-11 18:15",
    ipAddress: "10.24.11.32",
    status: "تم",
    details: "تحديث لغة الواجهة إلى العربية",
  },
];

export const getAuditLogs = (): AuditLogEntry[] => {
  // Backend integration: replace with audit log API.
  return auditLogs;
};
