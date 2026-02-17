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
    // Simple fade-in effect on mount
    const revealTimer = setTimeout(() => setIsRevealed(true), 100);
    return () => clearTimeout(revealTimer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      )}
      {/* Semi-transparent overlay to darken the image for better text contrast */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center pointer-events-none">
        <div className="overflow-hidden">
          <h1
            className={cn(
              'font-headline text-[15vw] md:text-[10vw] lg:text-[8vw] leading-none text-primary transition-opacity duration-1000 ease-in',
              isRevealed ? 'opacity-90' : 'opacity-0'
            )}
          >
            IMAN GADZHI
          </h1>
        </div>
      </div>

      {/* Scroll Indicator - keeping this from previous design as it's a good UX element */}
      <div className="absolute bottom-8 left-1/2 z-40 -translate-x-1/2">
        <div className="h-16 w-px animate-pulse bg-white/50" />
      </div>
    </section>
  );
}
