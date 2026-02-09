"use client";

type SelectOption = {
  value: string;
  label: string;
};

type SelectFieldProps = {
  label: string;
  options: SelectOption[];
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
  helperText?: string;
};

export const SelectField = ({
  label,
  options,
  defaultValue,
  value,
  onChange,
  helperText,
}: SelectFieldProps) => {
  const isControlled = value !== undefined;

  return (
    <label className="flex flex-col gap-2 text-sm font-semibold text-[var(--text-primary)]">
      <span>{label}</span>
      <select
        value={isControlled ? value : undefined}
        defaultValue={!isControlled ? defaultValue : undefined}
        onChange={(event) => onChange?.(event.target.value)}
        className="rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm font-normal text-[var(--text-primary)] outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[rgba(46,196,182,0.25)]"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {helperText && (
        <span className="text-xs font-normal text-[var(--text-secondary)]">
          {helperText}
        </span>
      )}
    </label>
  );
};
