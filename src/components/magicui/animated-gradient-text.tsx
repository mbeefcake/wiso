import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function AnimatedGradientText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'group relative inline-flex max-w-full items-center justify-center rounded-full bg-white/95 px-4 py-1.5 text-xs font-semibold text-[#1E2224] shadow-[inset_0_-4px_10px_rgba(153,204,51,0.22)] ring-1 ring-[#99CC33]/40 backdrop-blur-sm transition-shadow duration-500 ease-out hover:shadow-[inset_0_-4px_12px_rgba(153,204,51,0.35)] sm:text-sm',
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="animate-gradient pointer-events-none absolute inset-0 block h-full w-full rounded-[inherit] bg-gradient-to-r from-[#99CC33]/45 via-[#4D6E0A]/30 to-[#99CC33]/45 bg-[length:200%_100%] p-[1px] [mask-composite:subtract] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]"
      />
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </div>
  );
}
