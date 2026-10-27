import { cx } from "@/lib/cx";

type MemoLabelProps = {
  children: React.ReactNode;
  className?: string;
};

export function MemoLabel({ children, className }: MemoLabelProps) {
  return (
    <p
      className={cx(
        "font-mono text-[11px] uppercase tracking-[0.18em] text-navy/80 sm:text-xs",
        className,
      )}
    >
      {children}
    </p>
  );
}
