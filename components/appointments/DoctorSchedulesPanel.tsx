"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { TextField } from "@/components/forms/TextField";

type DoctorSchedulesPanelProps = {
  doctors: string[];
};

type Schedule = {
  startTime: string;
  endTime: string;
  slotMinutes: string;
};

const defaultSchedule: Schedule = {
  startTime: "09:00",
  endTime: "17:00",
  slotMinutes: "20",
};

const buildScheduleMap = (doctors: string[]) =>
  doctors.reduce<Record<string, Schedule>>((acc, doctor) => {
    acc[doctor] = { ...defaultSchedule };
    return acc;
  }, {});

export const DoctorSchedulesPanel = ({ doctors }: DoctorSchedulesPanelProps) => {
  const t = useTranslations("appointments.system.doctorSchedules");
  const [selectedDoctor, setSelectedDoctor] = useState(doctors[0] ?? "");
  const [schedules, setSchedules] = useState<Record<string, Schedule>>(() =>
    buildScheduleMap(doctors),
  );

  useEffect(() => {
    setSchedules((prev) => {
      const next: Record<string, Schedule> = {};
      doctors.forEach((doctor) => {
        next[doctor] = prev[doctor] ?? { ...defaultSchedule };
      });
      return next;
    });
    setSelectedDoctor((current) => {
      if (doctors.length === 0) {
        return "";
      }
      if (!current || !doctors.includes(current)) {
        return doctors[0];
      }
      return current;
    });
  }, [doctors]);

  if (doctors.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-[var(--border)] bg-[var(--surface-muted)] p-6 text-center">
        <p className="text-sm font-semibold text-[var(--text-primary)]">
          {t("emptyTitle")}
        </p>
        <p className="mt-2 text-xs text-[var(--text-secondary)]">
          {t("emptyDescription")}
        </p>
      </div>
    );
  }

  const selectedSchedule =
    selectedDoctor && schedules[selectedDoctor]
      ? schedules[selectedDoctor]
      : defaultSchedule;

  const updateSchedule = (field: keyof Schedule, value: string) => {
    if (!selectedDoctor) {
      return;
    }
    setSchedules((prev) => ({
      ...prev,
      [selectedDoctor]: {
        ...(prev[selectedDoctor] ?? defaultSchedule),
        [field]: value,
      },
    }));
  };

  const handleIntervalChange = (value: string) => {
    const normalized = value.replace(/\D/g, "");
    updateSchedule("slotMinutes", normalized);
  };

  return (
    <div className="grid gap-4 lg:grid-cols-[240px_minmax(0,1fr)]">
      <div>
        <p className="text-xs font-semibold text-[var(--text-secondary)]">
          {t("listLabel")}
        </p>
        <div className="mt-3 space-y-2">
          {doctors.map((doctor) => {
            const schedule = schedules[doctor] ?? defaultSchedule;
            const isActive = doctor === selectedDoctor;
            return (
              <button
                key={doctor}
                type="button"
                onClick={() => setSelectedDoctor(doctor)}
                className={`w-full rounded-xl border px-4 py-3 text-start transition ${
                  isActive
                    ? "border-[var(--accent)] bg-[var(--surface-muted)]"
                    : "border-[var(--border)] bg-white hover:bg-[var(--surface-muted)]"
                }`}
              >
                <p className="text-sm font-semibold text-[var(--text-primary)]">
                  {doctor}
                </p>
                <p className="mt-1 text-xs text-[var(--text-secondary)]">
                  {t("summary", {
                    start: schedule.startTime || "--:--",
                    end: schedule.endTime || "--:--",
                    minutes: schedule.slotMinutes || "--",
                  })}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      <div className="rounded-xl border border-[var(--border)] bg-white p-4">
        <div>
          <h4 className="text-sm font-semibold text-[var(--text-primary)]">
            {t("detailsTitle")}
          </h4>
          <p className="mt-1 text-xs text-[var(--text-secondary)]">
            {t("selectedDoctorLabel")}: {selectedDoctor}
          </p>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <TextField
            label={t("fields.start")}
            type="time"
            value={selectedSchedule.startTime}
            onChange={(value) => updateSchedule("startTime", value)}
            dir="ltr"
          />
          <TextField
            label={t("fields.end")}
            type="time"
            value={selectedSchedule.endTime}
            onChange={(value) => updateSchedule("endTime", value)}
            dir="ltr"
          />
          <TextField
            label={t("fields.interval")}
            type="number"
            value={selectedSchedule.slotMinutes}
            onChange={handleIntervalChange}
            placeholder={t("fields.intervalPlaceholder")}
            helperText={t("fields.intervalHelper")}
            dir="ltr"
          />
        </div>
      </div>
    </div>
  );
};
