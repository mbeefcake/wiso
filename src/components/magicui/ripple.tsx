import React, { type CSSProperties } from 'react';
import { cn } from '@/lib/utils';

interface RippleProps {
  mainCircleSize?: number;
  mainCircleOpacity?: number;
  numCircles?: number;
  className?: string;
}

export const Ripple = React.memo(function Ripple({
  mainCircleSize = 140,
  mainCircleOpacity = 0.28,
  numCircles = 5,
  className,
}: RippleProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute inset-0 select-none [mask-image:linear-gradient(to_bottom,white,transparent)]',
        className,
      )}
    >
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 72;
        const opacity = Math.max(0.04, mainCircleOpacity - i * 0.045);
        const borderStyle = i === numCircles - 1 ? 'dashed' : 'solid';

        return (
          <div
            key={i}
            className="animate-ripple absolute rounded-full border border-[#99CC33]/60 bg-[#99CC33]/15 shadow-sm"
            style={
              {
                width: `${size}px`,
                height: `${size}px`,
                opacity,
                borderStyle,
                borderWidth: '1px',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%) scale(1)',
                '--i': i,
                '--duration': '3.4s',
              } as CSSProperties
            }
          />
        );
      })}
    </div>
  );
});
