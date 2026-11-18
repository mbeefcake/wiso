import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function BentoGrid({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'grid w-full auto-rows-[minmax(14rem,auto)] grid-cols-1 gap-4 md:grid-cols-3',
        className,
      )}
    >
      {children}
    </div>
  );
}

export function BentoCard({
  name,
  className,
  background,
  Icon,
  description,
  cta,
  onAction,
}: {
  name: string;
  className?: string;
  background?: ReactNode;
  Icon: React.ElementType;
  description: string;
  cta?: string;
  onAction?: () => void;
}) {
  return (
    <div
      className={cn(
        'group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-2xl border border-[#E2E6E1] bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#99CC33]/70 hover:shadow-md',
        className,
      )}
    >
      {background ? (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          {background}
        </div>
      ) : null}

      <div className="relative z-10 flex flex-col gap-3">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF5D3] text-[#4D6E0A] transition-transform duration-300 group-hover:scale-105">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <h3 className="font-heading text-lg font-bold text-[#1E2224]">{name}</h3>
        <p className="text-sm leading-relaxed text-[#4A4D4E]">{description}</p>
      </div>

      {cta && onAction ? (
        <div className="relative z-10 mt-5 pt-3">
          <button
            type="button"
            onClick={onAction}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4D6E0A] transition-colors hover:text-[#1E2224] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4D6E0A] focus-visible:ring-offset-2 rounded-md"
          >
            <span>{cta}</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </button>
        </div>
      ) : null}
    </div>
  );
}
