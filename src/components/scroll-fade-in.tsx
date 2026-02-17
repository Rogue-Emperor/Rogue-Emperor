'use client';
import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function ScrollFadeIn({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={cn(
        'transition-all duration-1000 ease-out',
        isVisible
          ? 'opacity-100 blur-0 translate-y-0'
          : 'opacity-0 blur-md translate-y-8',
        className
      )}
    >
      {children}
    </div>
  );
}
