"use client";

type TextFieldProps = {
  label: string;
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  type?: string;
  helperText?: string;
  dir?: "rtl" | "ltr";
  disabled?: boolean;
};

export const TextField = ({
  label,
  defaultValue,
  value,
  onChange,
  placeholder,
  type = "text",
  helperText,
  dir,
  disabled,
}: TextFieldProps) => {
  const isControlled = value !== undefined;

  return (
    <label className="flex flex-col gap-2 text-sm font-semibold text-[var(--text-primary)]">
      <span>{label}</span>
      <input
        type={type}
        value={isControlled ? value : undefined}
        defaultValue={!isControlled ? defaultValue : undefined}
        onChange={(event) => onChange?.(event.target.value)}
        placeholder={placeholder}
        dir={dir}
        disabled={disabled}
        className="rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm font-normal text-[var(--text-primary)] outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[rgba(46,196,182,0.25)] disabled:bg-slate-50"
      />
      {helperText && (
        <span className="text-xs font-normal text-[var(--text-secondary)]">
          {helperText}
        </span>
      )}
    </label>
  );
};
