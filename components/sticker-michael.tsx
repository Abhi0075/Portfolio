import { cx } from "@/lib/cx";

/**
 * Decorative Michael Scott die-cut sticker (original cartoon drawing).
 * Purely presentational — hidden from assistive tech and pointer events.
 */
export function StickerMichael({ className }: { className?: string }) {
  return (
    <figure
      aria-hidden="true"
      className={cx("pointer-events-none w-24 select-none", className)}
    >
      <div className="rotate-[7deg] rounded-lg border-2 border-card bg-card p-1.5 shadow-note">
        <svg viewBox="0 0 96 92" className="h-auto w-full" role="presentation">
          <path
            d="M14 92 L14 82 Q14 64 34 62 L48 76 L62 62 Q82 64 82 82 L82 92 Z"
            fill="#263B50"
          />
          <path d="M40 63 L48 76 L56 63 L58 92 L38 92 Z" fill="#FFFFFF" />
          <path d="M45 66 L51 66 L53 78 L48 88 L43 78 Z" fill="#D8C69A" />
          <circle cx="29" cy="42" r="3" fill="#EFC3A4" />
          <circle cx="67" cy="42" r="3" fill="#EFC3A4" />
          <ellipse cx="48" cy="40" rx="19" ry="21" fill="#EFC3A4" />
          <path
            d="M29 42 C28 20 38 13 50 13 C63 13 69 24 67 42 C65 28 56 22 44 24 C35 25 30 31 29 42 Z"
            fill="#4A3B33"
          />
          <circle cx="40" cy="40" r="1.8" fill="#292B2E" />
          <circle cx="57" cy="40" r="1.8" fill="#292B2E" />
          <path
            d="M36 35 Q40 33 44 34"
            stroke="#4A3B33"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M53 34 Q57 33 61 35"
            stroke="#4A3B33"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M48 42 L47 50 L51 51"
            stroke="#C9986F"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M38 55 Q48 65 58 55"
            stroke="#8A5A3B"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
        <p className="mt-1 text-center font-mono text-[9px] font-bold uppercase leading-3 tracking-[0.16em] text-navy">
          World’s Best Boss
        </p>
      </div>
    </figure>
  );
}
