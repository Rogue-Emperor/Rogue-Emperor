'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import placeholderData from '@/lib/placeholder-images.json';
import { cn } from '@/lib/utils';

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  const ceoImage = placeholderData.placeholderImages.find(p => p.id === 'hero-ceo');

  useEffect(() => {
    setIsClient(true);

    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    const revealTimer = setTimeout(() => setIsRevealed(true), 100);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(revealTimer);
    };
  }, []);

  const parallaxX = isClient ? (mousePosition.x / window.innerWidth - 0.5) * 30 : 0;
  const parallaxY = isClient ? (mousePosition.y / window.innerHeight - 0.5) * 30 : 0;

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#1A1A1B]">
      {/* Power Background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_#4a545c_0%,_#1A1A1B_70%)]" />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,_transparent_50%,_black_90%)]" />

      {/* Background Text */}
      <div
        className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden transition-transform duration-200 ease-out"
        style={{
          transform: `translate(${parallaxX}px, ${parallaxY}px)`,
        }}
      >
        <span className="font-headline text-[45vw] font-black text-primary/5 select-none md:text-[40vw]">
          S
        </span>
      </div>

      {/* CEO Image */}
      {ceoImage && (
        <div className="absolute z-20 w-[60%] max-w-md h-[70%] bottom-0 left-1/2 -translate-x-1/2 md:w-[35%] md:max-w-xl">
          <Image
            src={ceoImage.imageUrl}
            alt={ceoImage.description}
            fill
            priority
            className="object-contain object-bottom drop-shadow-[0_20px_20px_rgba(0,0,0,0.7)] grayscale"
            sizes="(max-width: 768px) 60vw, 35vw"
          />
        </div>
      )}

      {/* Foreground Text */}
      <div className="relative z-30 flex h-full flex-col items-center justify-center text-center pointer-events-none">
        <div className="overflow-hidden">
          <h1
            className={cn(
              'font-headline text-[15vw] leading-[0.8] text-[#F4F4F4] md:text-[10vw] transition-transform duration-1000 ease-out',
              isRevealed ? 'translate-y-0' : 'translate-y-full'
            )}
          >
            ARCHITECTING
          </h1>
        </div>
        <div className="overflow-hidden">
          <h2
            className={cn(
              'font-body text-[15vw] leading-[0.8] font-bold uppercase md:text-[10vw] transition-transform duration-1000 ease-out delay-200',
              isRevealed ? 'translate-y-0' : 'translate-y-full'
            )}
            style={
              {
                '--tw-text-opacity': 1,
                color: 'transparent',
                WebkitTextStroke: '2px hsl(var(--primary))',
              } as React.CSSProperties
            }
          >
            THE FUTURE
          </h2>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-40 -translate-x-1/2">
        <div className="h-16 w-px animate-pulse bg-white/50" />
      </div>
    </section>
  );
}
