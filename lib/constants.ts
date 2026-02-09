export const APP_NAME = "HealthFirst";

export const PERMISSIONS = {
  appointment: {
    create: "appointment.create",
    update: "appointment.update",
    cancel: "appointment.cancel",
    viewAll: "appointment.view_all",
  },
  medicalRecord: {
    read: "medical_record.read",
    write: "medical_record.write",
  },
  user: {
    assignPermissions: "user.assign_permissions",
  },
  auditLog: {
    read: "audit_log.read",
  },
  system: {
    settingsUpdate: "system.settings.update",
  },
};

export type IconName =
  | "grid"
  | "calendar"
  | "users"
  | "file"
  | "userCircle"
  | "shield"
  | "activity"
  | "settings"
  | "pulse"
  | "logout";

export type NavItem = {
  key: string;
  labelKey: string;
  href: string;
  icon: IconName;
  permission?: string;
};

export const NAV_ITEMS: NavItem[] = [
  {
    key: "dashboard",
    labelKey: "dashboard",
    href: "/dashboard",
    icon: "grid",
  },
  {
    key: "appointments",
    labelKey: "appointments",
    href: "/appointments",
    icon: "calendar",
  },
  {
    key: "doctor-schedules",
    labelKey: "doctorSchedules",
    href: "/appointments/schedules",
    icon: "calendar",
    permission: PERMISSIONS.appointment.viewAll,
  },
  {
    key: "patients",
    labelKey: "patients",
    href: "/patients",
    icon: "users",
  },
  {
    key: "medical-records",
    labelKey: "medicalRecords",
    href: "/medical-records",
    icon: "file",
  },
  {
    key: "users",
    labelKey: "users",
    href: "/users",
    icon: "userCircle",
    permission: PERMISSIONS.user.assignPermissions,
  },
  {
    key: "roles",
    labelKey: "roles",
    href: "/roles",
    icon: "shield",
  },
  {
    key: "audit-log",
    labelKey: "auditLog",
    href: "/audit-log",
    icon: "activity",
    permission: PERMISSIONS.auditLog.read,
  },
  {
    key: "settings",
    labelKey: "settings",
    href: "/settings",
    icon: "settings",
    permission: PERMISSIONS.system.settingsUpdate,
  },
];
