import type { IconName } from "@/lib/constants";

type IconProps = {
  name: IconName;
  className?: string;
};

const iconMap: Record<IconName, JSX.Element> = {
  grid: (
    <path
      d="M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Zm10 0h6v6h-6v-6Z"
      fill="currentColor"
    />
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 3v4M17 3v4M3 9h18" stroke="currentColor" strokeWidth="1.5" />
    </>
  ),
  users: (
    <>
      <path
        d="M16 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm-8 2a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-3.3 0-6 1.3-6 3v1h12v-1c0-1.7-2.7-3-6-3Zm8 1c-1.1 0-2.1.2-3 .6 1.8.9 3 2.2 3 3.4v1h8v-1c0-2.2-3.6-4-8-4Z"
        fill="currentColor"
      />
    </>
  ),
  file: (
    <>
      <path
        d="M6 3h8l4 4v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M14 3v5h5" stroke="currentColor" strokeWidth="1.5" />
    </>
  ),
  userCircle: (
    <>
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="10" r="3" fill="currentColor" />
      <path d="M6.5 18a6 6 0 0 1 11 0" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </>
  ),
  shield: (
    <>
      <path
        d="M12 3 4 6v6c0 5.2 3.4 9.7 8 10 4.6-.3 8-4.8 8-10V6l-8-3Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M9 12h6" stroke="currentColor" strokeWidth="1.5" />
    </>
  ),
  activity: (
    <>
      <path
        d="M3 12h4l2-5 4 10 3-7h5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  settings: (
    <>
      <path
        d="M12 8.5a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 12 8.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V22a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H2a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H8a1.7 1.7 0 0 0 1-1.5V2a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V8c0 .7.4 1.3 1.1 1.5H22a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </>
  ),
  pulse: (
    <>
      <path
        d="M3 12h4l2-4 4 8 3-6h5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  logout: (
    <>
      <path
        d="M9 6H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M16 16l4-4-4-4M20 12H9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
};

export const Icon = ({ name, className }: IconProps) => (
  <svg
    className={className ?? "h-5 w-5"}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    {iconMap[name]}
  </svg>
);
