import { cx } from "@/lib/cx";
import { MemoLabel } from "@/components/memo-label";

type SectionProps = {
  id: string;
  memo: string;
  title: string;
  lede?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ id, memo, title, lede, children, className }: SectionProps) {
  return (
    <section id={id} className={cx("scroll-mt-20 border-t border-line", className)}>
      <div className="mx-auto w-full max-w-4xl px-5 py-16 sm:px-6 sm:py-24">
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="h-2 w-2 rotate-45 bg-mustard" />
          <MemoLabel>{memo}</MemoLabel>
        </div>
        <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          {title}
        </h2>
        {lede ? (
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink/70">{lede}</p>
        ) : null}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
