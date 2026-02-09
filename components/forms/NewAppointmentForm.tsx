"use client";

import { useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { SelectField } from "@/components/forms/SelectField";
import { TextAreaField } from "@/components/forms/TextAreaField";
import { TextField } from "@/components/forms/TextField";
import { Button } from "@/components/ui/Button";
import type { ClinicSummary, Patient } from "@/types/models";

type NewAppointmentFormProps = {
  clinics: ClinicSummary[];
  doctors: string[];
  patients: Patient[];
};

type LinkState = "idle" | "found" | "not_found" | "created";

const normalizeIdValue = (value: string) => value.replace(/\D/g, "");

const isLikelyPhone = (value: string) => {
  const normalized = normalizeIdValue(value);
  return value.includes("+") || normalized.startsWith("05") || normalized.startsWith("966");
};

export const NewAppointmentForm = ({
  clinics,
  doctors,
  patients,
}: NewAppointmentFormProps) => {
  const t = useTranslations("appointments.new");
  const [identifier, setIdentifier] = useState("");
  const [linkState, setLinkState] = useState<LinkState>("idle");
  const [linkedPatient, setLinkedPatient] = useState<Patient | null>(null);
  const [showCreate, setShowCreate] = useState(false);
  const [newPatientName, setNewPatientName] = useState("");
  const [newPatientPhone, setNewPatientPhone] = useState("");
  const [newPatientNationalId, setNewPatientNationalId] = useState("");
  const [appointmentPatientName, setAppointmentPatientName] = useState("");

  const clinicOptions = useMemo(
    () =>
      clinics.map((clinic) => ({
        value: clinic.id,
        label: clinic.name,
      })),
    [clinics],
  );

  const doctorOptions = useMemo(
    () =>
      doctors.map((doctor) => ({
        value: doctor,
        label: doctor,
      })),
    [doctors],
  );

  const channelOptions = useMemo(
    () => [
      { value: "on_site", label: t("options.channel.onSite") },
      { value: "telehealth", label: t("options.channel.telehealth") },
    ],
    [t],
  );

  useEffect(() => {
    const normalized = normalizeIdValue(identifier);

    if (!normalized || normalized.length < 6) {
      setLinkState("idle");
      setLinkedPatient(null);
      setShowCreate(false);
      return;
    }

    const matched =
      patients.find((patient) => {
        const phone = normalizeIdValue(patient.phone);
        const nationalId = normalizeIdValue(patient.nationalId ?? "");
        return normalized === phone || normalized === nationalId;
      }) ?? null;

    if (matched) {
      setLinkedPatient(matched);
      setLinkState("found");
      setShowCreate(false);
      setAppointmentPatientName(matched.name);
      return;
    }

    setLinkedPatient(null);
    setLinkState("not_found");
  }, [identifier, patients]);

  const handleCreatePatient = () => {
    if (!newPatientName || (!newPatientPhone && !newPatientNationalId)) {
      return;
    }

    const createdPatient: Patient = {
      id: `pat-new-${Date.now()}`,
      name: newPatientName,
      age: 0,
      gender: t("patientLookup.placeholders.gender"),
      phone: newPatientPhone || identifier,
      nationalId: newPatientNationalId || undefined,
      email: "",
      status: "active",
      lastVisit: "",
      medicalRecordId: "pending",
    };

    setLinkedPatient(createdPatient);
    setAppointmentPatientName(createdPatient.name);
    setLinkState("created");
    setShowCreate(false);
  };

  const handleShowCreate = () => {
    setShowCreate(true);
    if (!newPatientPhone && !newPatientNationalId && identifier) {
      if (isLikelyPhone(identifier)) {
        setNewPatientPhone(identifier);
      } else {
        setNewPatientNationalId(identifier);
      }
    }
  };

  const canCreatePatient =
    newPatientName.trim().length > 0 &&
    (newPatientPhone.trim().length > 0 || newPatientNationalId.trim().length > 0);

  return (
    <form className="space-y-5">
      <div className="rounded-xl border border-dashed border-[var(--border)] bg-[var(--surface-muted)] p-4">
        <div>
          <h4 className="text-sm font-semibold text-[var(--text-primary)]">
            {t("patientLookup.title")}
          </h4>
          <p className="mt-1 text-xs text-[var(--text-secondary)]">
            {t("patientLookup.description")}
          </p>
        </div>
        <div className="mt-4">
          <TextField
            label={t("patientLookup.identifierLabel")}
            placeholder={t("patientLookup.identifierPlaceholder")}
            helperText={t("patientLookup.identifierHelper")}
            value={identifier}
            onChange={setIdentifier}
            dir="ltr"
          />
        </div>

        {linkState === "found" && linkedPatient && (
          <div className="mt-4 rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
            <p className="font-semibold">{t("patientLookup.foundTitle")}</p>
            <p className="mt-1 text-xs">
              {t("patientLookup.foundDescription", { name: linkedPatient.name })}
            </p>
          </div>
        )}

        {linkState === "not_found" && (
          <div className="mt-4 rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-900">
            <p className="font-semibold">{t("patientLookup.notFoundTitle")}</p>
            <p className="mt-1 text-xs">
              {t("patientLookup.notFoundDescription")}
            </p>
            <div className="mt-3">
              <Button variant="outline" size="sm" type="button" onClick={handleShowCreate}>
                {t("patientLookup.createAction")}
              </Button>
            </div>
          </div>
        )}

        {showCreate && (
          <div className="mt-4 rounded-xl border border-[var(--border)] bg-white p-4">
            <p className="text-sm font-semibold text-[var(--text-primary)]">
              {t("patientLookup.createTitle")}
            </p>
            <p className="mt-1 text-xs text-[var(--text-secondary)]">
              {t("patientLookup.createDescription")}
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <TextField
                label={t("patientLookup.fields.name")}
                value={newPatientName}
                onChange={setNewPatientName}
              />
              <TextField
                label={t("patientLookup.fields.phone")}
                value={newPatientPhone}
                onChange={setNewPatientPhone}
                dir="ltr"
              />
              <TextField
                label={t("patientLookup.fields.nationalId")}
                value={newPatientNationalId}
                onChange={setNewPatientNationalId}
                dir="ltr"
              />
              <div className="flex items-end">
                <Button
                  type="button"
                  disabled={!canCreatePatient}
                  onClick={handleCreatePatient}
                >
                  {t("patientLookup.createButton")}
                </Button>
              </div>
            </div>
          </div>
        )}

        {linkState === "created" && linkedPatient && (
          <div className="mt-4 rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
            <p className="font-semibold">{t("patientLookup.createSuccess")}</p>
            <p className="mt-1 text-xs">
              {t("patientLookup.foundDescription", { name: linkedPatient.name })}
            </p>
          </div>
        )}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <SelectField label={t("fields.clinic")} options={clinicOptions} />
        <SelectField label={t("fields.doctor")} options={doctorOptions} />
        <TextField
          label={t("fields.patient")}
          value={appointmentPatientName}
          onChange={setAppointmentPatientName}
          disabled={Boolean(linkedPatient)}
        />
        <TextField label={t("fields.date")} type="date" />
        <TextField label={t("fields.time")} type="time" />
        <SelectField label={t("fields.channel")} options={channelOptions} />
        <TextField label={t("fields.type")} />
        <div className="md:col-span-2">
          <TextAreaField label={t("fields.notes")} />
        </div>
      </div>
    </form>
  );
};
