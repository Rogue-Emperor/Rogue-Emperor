'use client';
import { useState, useEffect, useRef } from 'react';

const AnimatedCounter = ({
  end,
  duration = 2000,
  label,
}: {
  end: number;
  duration?: number;
  label: string;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    // Adjust increment to handle cases where end is small
    const stepTime = 16; // ~60fps
    const totalSteps = duration / stepTime;
    const increment = end / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-headline text-5xl md:text-7xl text-primary">
        {count.toLocaleString()}
        {count === end && '+'}
      </p>
      <p className="text-muted-foreground tracking-widest text-sm uppercase mt-2">
        {label}
      </p>
    </div>
  );
};

export function Counter() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 sm:grid-cols-3">
          <AnimatedCounter end={3} label="Active Ventures" />
          <AnimatedCounter end={6} label="Years of disruption" />
          <AnimatedCounter end={10} label="Blueprints turning into reality" />
        </div>
      </div>
    </section>
  );
}
