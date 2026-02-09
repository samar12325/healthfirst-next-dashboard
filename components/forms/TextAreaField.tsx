"use client";

type TextAreaFieldProps = {
  label: string;
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  helperText?: string;
  rows?: number;
};

export const TextAreaField = ({
  label,
  defaultValue,
  value,
  onChange,
  placeholder,
  helperText,
  rows = 4,
}: TextAreaFieldProps) => {
  const isControlled = value !== undefined;

  return (
    <label className="flex flex-col gap-2 text-sm font-semibold text-[var(--text-primary)]">
      <span>{label}</span>
      <textarea
        value={isControlled ? value : undefined}
        defaultValue={!isControlled ? defaultValue : undefined}
        onChange={(event) => onChange?.(event.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm font-normal text-[var(--text-primary)] outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[rgba(46,196,182,0.25)]"
      />
      {helperText && (
        <span className="text-xs font-normal text-[var(--text-secondary)]">
          {helperText}
        </span>
      )}
    </label>
  );
};
