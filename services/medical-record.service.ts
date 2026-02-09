import type { MedicalRecord } from "@/types/models";

const medicalRecords: MedicalRecord[] = [
  {
    id: "mr-3001",
    patientId: "pat-2001",
    patientName: "خالد علي",
    summary: "متابعة ضغط الدم خلال آخر شهرين.",
    diagnosis: "ارتفاع ضغط الدم (مرحلة أولى)",
    medications: ["أملوديبين 5mg", "فيتامين د"],
    allergies: ["البنسلين"],
    updatedAt: "2026-01-10",
    author: "د. سلمى أحمد",
    status: "open",
  },
  {
    id: "mr-3002",
    patientId: "pat-2002",
    patientName: "سارة عمر",
    summary: "تقييم أعراض الحساسية الموسمية.",
    diagnosis: "حساسية تنفسية",
    medications: ["لوراتادين 10mg"],
    allergies: ["غبار موسمي"],
    updatedAt: "2026-01-08",
    author: "د. لمياء مصطفى",
    status: "open",
  },
  {
    id: "mr-3003",
    patientId: "pat-2003",
    patientName: "مريم صالح",
    summary: "متابعة حالة الربو وإعادة وصف العلاج.",
    diagnosis: "ربو متوسط",
    medications: ["سالبوتامول", "بخاخ كورتيزون"],
    allergies: [],
    updatedAt: "2026-01-06",
    author: "د. ياسر خالد",
    status: "open",
  },
  {
    id: "mr-3004",
    patientId: "pat-2004",
    patientName: "أحمد ناصر",
    summary: "متابعة بعد إجراء بسيط.",
    diagnosis: "التهاب مفصل",
    medications: ["باراسيتامول"],
    allergies: ["الأسبرين"],
    updatedAt: "2025-12-22",
    author: "د. سلمى أحمد",
    status: "closed",
  },
];

export const getMedicalRecords = (): MedicalRecord[] => {
  // Backend integration: replace with medical records API.
  return medicalRecords;
};

export const getMedicalRecordById = (id: string): MedicalRecord | null => {
  // Backend integration: replace with medical record details API.
  return medicalRecords.find((record) => record.id === id) ?? null;
};
