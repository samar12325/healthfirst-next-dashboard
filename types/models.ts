export type UserStatus = "active" | "inactive" | "invited";
export type AppointmentStatus =
  | "confirmed"
  | "pending"
  | "delayed"
  | "cancelled"
  | "completed"
  | "no_show";
export type PatientStatus = "active" | "inactive" | "follow_up";
export type MedicalRecordStatus = "open" | "closed";

export type User = {
  id: string;
  name: string;
  role: string;
  email: string;
  status: UserStatus;
  lastActive: string;
  initials: string;
};

export type UserProfile = User & {
  department: string;
  phone: string;
  permissions: string[];
};

export type Appointment = {
  id: string;
  patientName: string;
  doctorName: string;
  date: string;
  time: string;
  status: AppointmentStatus;
  type: string;
  channel: string;
  clinicName: string;
  city: string;
  waitTimeMinutes: number;
};

export type Patient = {
  id: string;
  name: string;
  age: number;
  gender: string;
  phone: string;
  nationalId?: string;
  email: string;
  status: PatientStatus;
  lastVisit: string;
  medicalRecordId: string;
};

export type PatientProfile = Patient & {
  address: string;
  emergencyContact: string;
  insurance: string;
  allergies: string[];
  notes: string;
};

export type MedicalRecord = {
  id: string;
  patientId: string;
  patientName: string;
  summary: string;
  diagnosis: string;
  medications: string[];
  allergies: string[];
  updatedAt: string;
  author: string;
  status: MedicalRecordStatus;
};

export type PermissionItem = {
  key: string;
  label: string;
  description: string;
};

export type PermissionGroup = {
  id: string;
  label: string;
  permissions: PermissionItem[];
};

export type RolePreset = {
  id: string;
  name: string;
  description: string;
  permissions: string[];
};

export type AuditLogEntry = {
  id: string;
  action: string;
  actor: string;
  timestamp: string;
  ipAddress: string;
  status: string;
  details: string;
};

export type SystemSettings = {
  clinicName: string;
  phone: string;
  email: string;
  address: string;
  language: string;
};

export type LanguageOption = {
  value: string;
  label: string;
  note: string;
};

export type Metric = {
  id: string;
  label: string;
  value: string;
  trend?: string;
};

export type ClinicSummary = {
  id: string;
  name: string;
  location: string;
  hours: string;
  specialtiesCount: number;
};

export type ClinicDetails = ClinicSummary & {
  kpis: Metric[];
};

export type DashboardWidget = {
  id: string;
  title: string;
  description: string;
  href: string;
  permission?: string;
};

export type OperationalHighlight = {
  id: string;
  label: string;
  value: string;
  note: string;
};
