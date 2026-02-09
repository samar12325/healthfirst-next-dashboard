import { PERMISSIONS } from "@/lib/constants";
import { defaultLocale, type Locale } from "@/lib/i18n";
import type { PermissionGroup, RolePreset, User, UserProfile } from "@/types/models";

const sessionUser: User = {
  id: "user-001",
  name: "System Admin",
  role: "مدير النظام",
  email: "admin@healthfirst.com",
  status: "active",
  lastActive: "منذ دقيقتين",
  initials: "SA",
};

const sessionPermissions: string[] = [
  PERMISSIONS.appointment.create,
  PERMISSIONS.appointment.update,
  PERMISSIONS.appointment.cancel,
  PERMISSIONS.appointment.viewAll,
  PERMISSIONS.medicalRecord.read,
  PERMISSIONS.medicalRecord.write,
  PERMISSIONS.user.assignPermissions,
  PERMISSIONS.auditLog.read,
  PERMISSIONS.system.settingsUpdate,
];

const users: User[] = [
  {
    id: "user-001",
    name: "System Admin",
    role: "مدير النظام",
    email: "admin@healthfirst.com",
    status: "active",
    lastActive: "منذ دقيقتين",
    initials: "SA",
  },
  {
    id: "user-002",
    name: "د. سلمى أحمد",
    role: "استشاري باطنة",
    email: "salma@healthfirst.com",
    status: "active",
    lastActive: "منذ 15 دقيقة",
    initials: "سأ",
  },
  {
    id: "user-003",
    name: "فاطمة إبراهيم",
    role: "الاستقبال",
    email: "fatima@healthfirst.com",
    status: "active",
    lastActive: "منذ ساعة",
    initials: "فإ",
  },
  {
    id: "user-004",
    name: "محمد حسن",
    role: "محاسب",
    email: "mohammed@healthfirst.com",
    status: "inactive",
    lastActive: "أمس",
    initials: "مح",
  },
];

const userProfiles: UserProfile[] = [
  {
    id: "user-001",
    name: "System Admin",
    role: "مدير النظام",
    email: "admin@healthfirst.com",
    status: "active",
    lastActive: "منذ دقيقتين",
    initials: "SA",
    department: "الإدارة",
    phone: "+966 555 000 001",
    permissions: sessionPermissions,
  },
  {
    id: "user-002",
    name: "د. سلمى أحمد",
    role: "استشاري باطنة",
    email: "salma@healthfirst.com",
    status: "active",
    lastActive: "منذ 15 دقيقة",
    initials: "سأ",
    department: "العيادات الخارجية",
    phone: "+966 555 000 112",
    permissions: [
      PERMISSIONS.appointment.viewAll,
      PERMISSIONS.medicalRecord.read,
      PERMISSIONS.medicalRecord.write,
    ],
  },
  {
    id: "user-003",
    name: "فاطمة إبراهيم",
    role: "الاستقبال",
    email: "fatima@healthfirst.com",
    status: "active",
    lastActive: "منذ ساعة",
    initials: "فإ",
    department: "خدمة المرضى",
    phone: "+966 555 000 221",
    permissions: [
      PERMISSIONS.appointment.create,
      PERMISSIONS.appointment.update,
      PERMISSIONS.appointment.cancel,
      PERMISSIONS.appointment.viewAll,
    ],
  },
  {
    id: "user-004",
    name: "محمد حسن",
    role: "محاسب",
    email: "mohammed@healthfirst.com",
    status: "inactive",
    lastActive: "أمس",
    initials: "مح",
    department: "الإدارة المالية",
    phone: "+966 555 000 334",
    permissions: [],
  },
];

const permissionGroupsByLocale: Record<Locale, PermissionGroup[]> = {
  ar: [
    {
      id: "group-appointments",
      label: "المواعيد",
      permissions: [
        {
          key: PERMISSIONS.appointment.create,
          label: "إضافة موعد",
          description: "إنشاء حجوزات جديدة للمرضى.",
        },
        {
          key: PERMISSIONS.appointment.update,
          label: "تعديل المواعيد",
          description: "تحديث وقت أو تفاصيل الموعد.",
        },
        {
          key: PERMISSIONS.appointment.cancel,
          label: "إلغاء المواعيد",
          description: "إلغاء المواعيد وحفظ السجل.",
        },
        {
          key: PERMISSIONS.appointment.viewAll,
          label: "عرض جميع المواعيد",
          description: "الوصول إلى جدول العيادة بالكامل.",
        },
      ],
    },
    {
      id: "group-medical",
      label: "السجلات الطبية",
      permissions: [
        {
          key: PERMISSIONS.medicalRecord.read,
          label: "قراءة السجل الطبي",
          description: "عرض تفاصيل التشخيص والأدوية.",
        },
        {
          key: PERMISSIONS.medicalRecord.write,
          label: "تعديل السجل الطبي",
          description: "تحديث معلومات العلاج والمتابعة.",
        },
      ],
    },
    {
      id: "group-users",
      label: "المستخدمون والأدوار",
      permissions: [
        {
          key: PERMISSIONS.user.assignPermissions,
          label: "إدارة صلاحيات المستخدمين",
          description: "تعيين الصلاحيات وتحديث الأدوار.",
        },
      ],
    },
    {
      id: "group-system",
      label: "النظام والتدقيق",
      permissions: [
        {
          key: PERMISSIONS.auditLog.read,
          label: "قراءة سجل التدقيق",
          description: "متابعة الأنشطة والتغييرات.",
        },
        {
          key: PERMISSIONS.system.settingsUpdate,
          label: "تحديث إعدادات النظام",
          description: "ضبط تفضيلات العيادة العامة.",
        },
      ],
    },
  ],
  en: [
    {
      id: "group-appointments",
      label: "Appointments",
      permissions: [
        {
          key: PERMISSIONS.appointment.create,
          label: "Create appointments",
          description: "Create new patient bookings.",
        },
        {
          key: PERMISSIONS.appointment.update,
          label: "Update appointments",
          description: "Adjust the time or appointment details.",
        },
        {
          key: PERMISSIONS.appointment.cancel,
          label: "Cancel appointments",
          description: "Cancel bookings and keep the audit trail.",
        },
        {
          key: PERMISSIONS.appointment.viewAll,
          label: "View all appointments",
          description: "Access the full clinic schedule.",
        },
      ],
    },
    {
      id: "group-medical",
      label: "Medical Records",
      permissions: [
        {
          key: PERMISSIONS.medicalRecord.read,
          label: "Read medical records",
          description: "View diagnoses and medication history.",
        },
        {
          key: PERMISSIONS.medicalRecord.write,
          label: "Edit medical records",
          description: "Update care plans and follow-ups.",
        },
      ],
    },
    {
      id: "group-users",
      label: "Users and Roles",
      permissions: [
        {
          key: PERMISSIONS.user.assignPermissions,
          label: "Manage user permissions",
          description: "Assign permissions and keep roles updated.",
        },
      ],
    },
    {
      id: "group-system",
      label: "System and Audit",
      permissions: [
        {
          key: PERMISSIONS.auditLog.read,
          label: "Read audit log",
          description: "Review sensitive activities and changes.",
        },
        {
          key: PERMISSIONS.system.settingsUpdate,
          label: "Update system settings",
          description: "Adjust clinic-wide preferences.",
        },
      ],
    },
  ],
};

const rolePresetsByLocale: Record<Locale, RolePreset[]> = {
  ar: [
    {
      id: "role-admin",
      name: "مدير النظام",
      description: "صلاحيات كاملة لإدارة العيادة والمستخدمين.",
      permissions: sessionPermissions,
    },
    {
      id: "role-frontdesk",
      name: "موظف الاستقبال",
      description: "إدارة المواعيد وخدمة المرضى.",
      permissions: [
        PERMISSIONS.appointment.create,
        PERMISSIONS.appointment.update,
        PERMISSIONS.appointment.cancel,
        PERMISSIONS.appointment.viewAll,
      ],
    },
    {
      id: "role-doctor",
      name: "الطبيب",
      description: "متابعة السجلات الطبية وخطط العلاج.",
      permissions: [PERMISSIONS.medicalRecord.read, PERMISSIONS.medicalRecord.write],
    },
  ],
  en: [
    {
      id: "role-admin",
      name: "System Admin",
      description: "Full access to manage the clinic and users.",
      permissions: sessionPermissions,
    },
    {
      id: "role-frontdesk",
      name: "Front Desk",
      description: "Manage appointments and patient support.",
      permissions: [
        PERMISSIONS.appointment.create,
        PERMISSIONS.appointment.update,
        PERMISSIONS.appointment.cancel,
        PERMISSIONS.appointment.viewAll,
      ],
    },
    {
      id: "role-doctor",
      name: "Doctor",
      description: "Review medical records and care plans.",
      permissions: [PERMISSIONS.medicalRecord.read, PERMISSIONS.medicalRecord.write],
    },
  ],
};

export const getSession = (): { user: User; userPermissions: string[] } => {
  // Backend integration: replace with auth/session provider.
  return { user: sessionUser, userPermissions: sessionPermissions };
};

export const getUsers = (): User[] => {
  // Backend integration: replace with users API.
  return users;
};

export const getUserById = (id: string): UserProfile | null => {
  // Backend integration: replace with user profile API.
  return userProfiles.find((profile) => profile.id === id) ?? null;
};

export const getPermissionGroups = (locale: Locale): PermissionGroup[] => {
  // Backend integration: replace with permissions API.
  return permissionGroupsByLocale[locale] ?? permissionGroupsByLocale[defaultLocale];
};

export const getRolePresets = (locale: Locale): RolePreset[] => {
  // Backend integration: replace with roles API.
  return rolePresetsByLocale[locale] ?? rolePresetsByLocale[defaultLocale];
};
