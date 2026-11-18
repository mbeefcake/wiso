import { useState } from 'react';
import { Wrench } from 'lucide-react';
import { cn } from '@/lib/utils';

export function WisoLogo({ darkText = false }: { darkText?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5 select-none">
      <svg
        width="38"
        height="38"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect width="64" height="64" rx="16" fill="#1E2224" />
        <circle cx="32" cy="32" r="22" stroke="#99CC33" strokeWidth="4" />
        <path
          d="M32 14C41.94 14 50 22.06 50 32C50 38.8 46.2 44.7 40.6 47.7C43.6 44.3 45 39.3 44 34C42.6 26.6 35.6 22 28.4 23.4C23.2 24.4 19.4 28.9 19 34C18.6 24.1 24.8 14 32 14Z"
          fill="#99CC33"
        />
        <circle cx="32" cy="34" r="4.5" fill="#FFFFFF" />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-heading text-xl font-extrabold tracking-tight',
            darkText ? 'text-[#1E2224]' : 'text-white',
          )}
        >
          WISO
        </span>
        <span
          className={cn(
            'text-[11px] font-semibold tracking-wide',
            darkText ? 'text-[#4D6E0A]' : 'text-[#99CC33]',
          )}
        >
          Allround ontstoppingsbedrijf
        </span>
      </span>
    </span>
  );
}

export function SafeWisoImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={cn(
          'flex flex-col items-center justify-center gap-1.5 bg-[#EAF5D3]/60 p-4 text-center text-xs font-medium text-[#4D6E0A]',
          className,
        )}
      >
        <Wrench className="h-5 w-5" aria-hidden="true" />
        <span>{alt || 'WISO Rioolservice'}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={cn('object-cover', className)}
    />
  );
}
