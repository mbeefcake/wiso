import React, { type CSSProperties } from 'react';
import { cn } from '@/lib/utils';

export interface ShimmerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}

export const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  (
    {
      shimmerColor = '#ffffff',
      shimmerSize = '0.07em',
      shimmerDuration = '2.8s',
      borderRadius = '12px',
      background = 'linear-gradient(135deg, #99CC33 0%, #7DAE1C 100%)',
      className,
      children,
      type = 'button',
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        style={
          {
            '--spread': '90deg',
            '--shimmer-color': shimmerColor,
            '--radius': borderRadius,
            '--speed': shimmerDuration,
            '--cut': shimmerSize,
            '--bg': background,
          } as CSSProperties
        }
        className={cn(
          'group relative z-0 inline-flex cursor-pointer items-center justify-center gap-2 overflow-hidden whitespace-nowrap border border-black/10 px-6 py-3.5 text-sm font-bold text-[#1A200C] [background:var(--bg)] [border-radius:var(--radius)]',
          'shadow-[0_10px_28px_-8px_rgba(153,204,51,0.65)] transition-transform duration-300 ease-out hover:-translate-y-0.5 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E2224] focus-visible:ring-offset-2',
          className,
        )}
        {...props}
      >
        <div
          aria-hidden="true"
          className={cn(
            '-z-30 blur-[2px]',
            'absolute inset-0 overflow-visible [container-type:size]',
          )}
        >
          <div className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
            <div className="animate-spin-around absolute -inset-full w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
          </div>
        </div>
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
        <div
          aria-hidden="true"
          className={cn(
            'insert-0 absolute size-full pointer-events-none',
            'rounded-[inherit] shadow-[inset_0_-6px_12px_rgba(255,255,255,0.28)]',
            'transform-gpu transition-all duration-300 ease-in-out',
            'group-hover:shadow-[inset_0_-6px_14px_rgba(255,255,255,0.45)]',
          )}
        />
        <div
          aria-hidden="true"
          className="absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]"
        />
      </button>
    );
  },
);

ShimmerButton.displayName = 'ShimmerButton';
