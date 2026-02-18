'use client';

import Image from 'next/image';
import placeholderData from '@/lib/placeholder-images.json';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export function Hero() {
  const heroImage = placeholderData.placeholderImages.find(
    p => p.id === 'hero-ceo'
  );
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const revealTimer = setTimeout(() => setIsRevealed(true), 100);
    return () => clearTimeout(revealTimer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#1A1A1B]">
      {/* Background Image */}
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          priority
          className="object-cover opacity-60 grayscale"
          sizes="100vw"
        />
      )}

      {/* Geometrical Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Large faint circle */}
        <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] rounded-full border border-primary/10 animate-[pulse_8s_infinite]" />
        
        {/* Diagonal lines pattern */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 right-10 w-32 h-32 border border-primary/20 rotate-45 animate-[spin_20s_linear_infinite]" />
        <div className="absolute bottom-1/4 left-20 w-48 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      {/* Dark Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />

      {/* Main Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
        <div className="relative group">
          {/* Background Shadow Text for Depth */}
          <span 
            className={cn(
              "absolute inset-0 -translate-x-2 translate-y-2 font-headline text-[16vw] md:text-[12vw] leading-none text-black/40 blur-sm transition-all duration-1000",
              isRevealed ? "opacity-100" : "opacity-0"
            )}
            aria-hidden="true"
          >
            IMAN GADZHI
          </span>

          <h1
            className={cn(
              'relative font-headline text-[15vw] md:text-[11vw] leading-none font-black tracking-tighter text-primary transition-all duration-1000 ease-out select-none',
              isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            )}
          >
            IMAN GADZHI
          </h1>
          
          <div className={cn(
            "mt-6 flex items-center justify-center space-x-4 transition-opacity duration-1000 delay-500",
            isRevealed ? "opacity-100" : "opacity-0"
          )}>
            <div className="h-px w-12 bg-primary/50" />
            <p className="font-body text-xs uppercase tracking-[0.8em] text-foreground/80">
              Architect of the Future
            </p>
            <div className="h-px w-12 bg-primary/50" />
          </div>
        </div>
      </div>

      {/* Vertical Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 z-40 -translate-x-1/2 flex flex-col items-center space-y-4">
        <span className="font-body text-[10px] uppercase tracking-[0.4em] text-foreground/40 vertical-text">
          Scroll
        </span>
        <div className="h-24 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
