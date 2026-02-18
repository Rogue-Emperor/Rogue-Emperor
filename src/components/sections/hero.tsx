'use client';

import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export function Hero() {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const revealTimer = setTimeout(() => setIsRevealed(true), 100);
    return () => clearTimeout(revealTimer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#1A1A1B]">
      {/* Geometrical Block Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Tiered Blocks Simulation */}
        <div className="absolute top-[10%] left-[5%] w-[40%] h-[30%] bg-[#222223] border-l border-t border-primary/20 shadow-2xl" />
        <div className="absolute top-[5%] right-[10%] w-[30%] h-[20%] bg-[#1E1E1F] border-r border-t border-primary/10 shadow-xl" />
        <div className="absolute bottom-[15%] left-[10%] w-[25%] h-[40%] bg-[#252526] border-l border-b border-primary/30 shadow-2xl" />
        <div className="absolute bottom-[5%] right-[5%] w-[45%] h-[35%] bg-[#1D1D1E] border-r border-b border-primary/20 shadow-xl" />
        
        {/* Neon Glow Accents */}
        <div className="absolute top-1/4 left-0 w-px h-1/2 bg-gradient-to-b from-transparent via-primary/40 to-transparent blur-[1px]" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
        <div className="relative">
          {/* Main Title with Depth Shadow */}
          <h1
            className={cn(
              'font-headline text-[12vw] md:text-[9vw] leading-none font-black tracking-tighter text-primary transition-all duration-1000 ease-out select-none drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)]',
              isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            )}
          >
            Pragyan Dev
          </h1>
          
          {/* Subtitle with Horizontal Lines */}
          <div className={cn(
            "mt-8 flex items-center justify-center space-x-6 transition-opacity duration-1000 delay-500",
            isRevealed ? "opacity-100" : "opacity-0"
          )}>
            <div className="h-px w-16 md:w-24 bg-primary/40" />
            <p className="font-body text-[10px] md:text-xs uppercase tracking-[0.8em] text-foreground/70 font-bold whitespace-nowrap">
              Empowering the Blueprint that leads to the future.
            </p>
            <div className="h-px w-16 md:w-24 bg-primary/40" />
          </div>
        </div>
      </div>

      {/* Vertical Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 z-40 -translate-x-1/2 flex flex-col items-center space-y-4">
        <span className="font-body text-[8px] uppercase tracking-[0.4em] text-foreground/40">
          Scroll
        </span>
        <div className="h-20 w-[1px] bg-gradient-to-b from-white via-white/50 to-transparent" />
      </div>
    </section>
  );
}
