type Props = {
  className?: string;
  showText?: boolean;
};

// Diamond facet mark combined with a reputation shield.
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label="Diamond Reputation Management logo"
    >
      <defs>
        <linearGradient id="drm-grad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563eb" />
          <stop offset="1" stopColor="#4f46e5" />
        </linearGradient>
      </defs>
      <path
        d="M24 3.5l16 6.5v10c0 11.2-6.9 19.7-16 24.5C14.9 39.7 8 31.2 8 20V10l16-6.5z"
        fill="url(#drm-grad)"
      />
      <path
        d="M24 13l7 5-7 13-7-13 7-5z"
        fill="#ffffff"
        fillOpacity="0.95"
      />
      <path d="M17 18h14l-7 13-7-13z" fill="#ffffff" fillOpacity="0.55" />
    </svg>
  );
}

export function Logo({ className = "", showText = true }: Props) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark />
      {showText && (
        <span className="flex flex-col leading-none">
          <span className="text-[15px] font-bold tracking-tight text-ink">
            Diamond Reputation
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
            Management
          </span>
        </span>
      )}
    </span>
  );
}
