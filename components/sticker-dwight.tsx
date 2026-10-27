import { cx } from "@/lib/cx";

/**
 * Decorative Dwight Schrute die-cut sticker (original cartoon drawing).
 * Purely presentational — hidden from assistive tech and pointer events.
 */
export function StickerDwight({ className }: { className?: string }) {
  return (
    <figure
      aria-hidden="true"
      className={cx("pointer-events-none w-24 select-none", className)}
    >
      <div className="rotate-[-8deg] rounded-lg border-2 border-card bg-card p-1.5 shadow-note">
        <svg viewBox="0 0 96 92" className="h-auto w-full" role="presentation">
          <path
            d="M16 92 L16 82 Q16 64 48 64 Q80 64 80 82 L80 92 Z"
            fill="#D8C69A"
          />
          <path
            d="M41 66 L48 75 L55 66"
            stroke="#A89465"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="29" cy="42" r="3" fill="#EFC3A4" />
          <circle cx="67" cy="42" r="3" fill="#EFC3A4" />
          <ellipse cx="48" cy="40" rx="19" ry="21" fill="#EFC3A4" />
          <path
            d="M29 42 C29 21 40 15 48 15 C56 15 67 21 67 42 C64 28 56 24 48 24 C40 24 32 28 29 42 Z"
            fill="#3B2F2A"
          />
          <path d="M45 15 L48 23 L51 15 Z" fill="#EFC3A4" />
          <rect
            x="30"
            y="35"
            width="15"
            height="12"
            rx="3"
            fill="#FFFFFF"
            fillOpacity="0.25"
            stroke="#292B2E"
            strokeWidth="2.5"
          />
          <rect
            x="51"
            y="35"
            width="15"
            height="12"
            rx="3"
            fill="#FFFFFF"
            fillOpacity="0.25"
            stroke="#292B2E"
            strokeWidth="2.5"
          />
          <line x1="45" y1="40" x2="51" y2="40" stroke="#292B2E" strokeWidth="2.5" />
          <circle cx="37.5" cy="41" r="1.8" fill="#292B2E" />
          <circle cx="58.5" cy="41" r="1.8" fill="#292B2E" />
          <line
            x1="32"
            y1="31"
            x2="42"
            y2="30"
            stroke="#3B2F2A"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="54"
            y1="30"
            x2="64"
            y2="31"
            stroke="#3B2F2A"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M48 44 L47 51 L50 52"
            stroke="#C9986F"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="41"
            y1="58"
            x2="55"
            y2="57"
            stroke="#8A5A3B"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
        <p className="mt-1 text-center font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-navy">
          Fact.
        </p>
      </div>
    </figure>
  );
}
