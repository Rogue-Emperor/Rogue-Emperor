'use client';

import { useState } from 'react';
import Image from 'next/image';
import placeholderData from '@/lib/placeholder-images.json';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowLeft } from 'lucide-react';

const sectorsData = [
  {
    id: 'aerospace',
    title: 'Aerospace',
    description: 'Re-defining Space software that helps mankind push the boundaries, and achive the extraordinare. Moreoever the broader vision is towards an independent space agency.',
    projects: [
      { name: 'Aerometry' },
      { name: 'Project: Space Society (Releasing Soon)' }
    ],
    imageId: 'sector-aerospace',
    className: 'md:col-span-2',
  },
  { 
    id: 'ai', 
    title: 'Cognitive Technologies', 
    description: 'Building technology that powers the world and beyond... From Trading terminals to Space Softwares. While, also Bringing the World together through Open-source tech community: Initiative.V1',
    projects: [
      { name: 'Initiative.V1', link: 'https://initiative-v1.vercel.app/' }
    ],
    imageId: 'sector-ai' 
  },
  { 
    id: 'metaverse', 
    title: 'Metaverse and Dynamic Simulation', 
    description: 'Connecting the Globe through 3-dimensional experinces built on Roblox and several other game engines.',
    projects: [
      { name: 'Mr.ouufyi [Roblox Game Dev]', link: 'https://www.roblox.com/users/1665468838/profile' },
      { name: 'Project: GD (Releasing end of March)' }
    ],
    imageId: 'sector-biotech' 
  },
  {
    id: 'trading',
    title: 'Algorithmic Finance',
    description: 'Engineering high-frequency trading engines and predictive market models that leverage computational superiority for specialized Quants',
    projects: [
      { name: 'Project: The Terminal (Releasing Soon)' }
    ],
    imageId: 'sector-trading',
    className: 'md:col-span-2',
  },
];

const SectorCard = ({
  title,
  imageId,
  className,
  onClick,
}: {
  title: string;
  imageId: string;
  className?: string;
  onClick: () => void;
}) => {
  const { placeholderImages } = placeholderData;
  const image = placeholderImages.find(p => p.id === imageId);

  return (
    <Card
      onClick={onClick}
      className={cn(
        'group relative h-full cursor-pointer overflow-hidden rounded-xl border-border/50 bg-card/20 transition-all duration-500 hover:scale-[1.01] hover:border-primary/50',
        className
      )}
    >
      <div className="absolute inset-0 z-10 bg-black/40 transition-colors group-hover:bg-black/20" />
      <div className="absolute inset-0 z-0 bg-muted animate-pulse" />
      {image && (
        <Image
          src={image.imageUrl}
          alt={image.description}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          data-ai-hint={image.imageHint}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      )}
      <CardHeader className="relative z-20 flex h-full items-end justify-start p-8">
        <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                Explore Domain
            </p>
            <CardTitle className="font-headline text-3xl text-foreground md:text-4xl drop-shadow-md">
            {title}
            </CardTitle>
        </div>
      </CardHeader>
    </Card>
  );
};

export function Sectors() {
  const [activeSectorId, setActiveSectorId] = useState<string | null>(null);

  const activeSector = sectorsData.find(s => s.id === activeSectorId);

  return (
    <section className="py-24 sm:py-32 min-h-[600px]">
      <div className="mb-16 text-center">
        <h2 className="font-headline text-5xl md:text-7xl">Sector Dominance</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Expanding across several diversified areas that redefines the
          boundaries of possibility.
        </p>
      </div>

      <div className="relative">
        {/* Grid View */}
        <div className={cn(
          "grid auto-rows-[24rem] grid-cols-1 gap-6 md:grid-cols-3 transition-all duration-500 ease-in-out",
          activeSectorId ? "opacity-0 scale-95 pointer-events-none absolute inset-0" : "opacity-100 scale-100"
        )}>
          {sectorsData.map(sector => (
            <SectorCard
              key={sector.id}
              title={sector.title}
              imageId={sector.imageId}
              className={sector.className}
              onClick={() => setActiveSectorId(sector.id)}
            />
          ))}
        </div>

        {/* Detailed View */}
        {activeSector && (
          <div className={cn(
            "transition-all duration-700 ease-out",
            activeSectorId ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12 pointer-events-none"
          )}>
            <Button 
                variant="ghost" 
                onClick={() => setActiveSectorId(null)}
                className="mb-8 group text-muted-foreground hover:text-primary transition-colors"
            >
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Sectors
            </Button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-card/10 p-8 md:p-12 rounded-3xl border border-border/30 backdrop-blur-sm">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <span className="text-xs uppercase tracking-[0.5em] text-primary font-bold">About the Sector:</span>
                        <h3 className="font-headline text-5xl md:text-6xl text-foreground">{activeSector.title}</h3>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            {activeSector.description}
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h4 className="font-body text-sm uppercase tracking-widest text-foreground font-bold border-b border-primary/20 pb-4">Key Ventures & Projects</h4>
                        <ul className="space-y-4">
                            {activeSector.projects.map((project, idx) => (
                                <li key={idx} className="flex items-center space-x-4 group/item">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary transition-all duration-300 group-hover/item:scale-150" />
                                    {project.link ? (
                                      <a 
                                        href={project.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="text-lg text-foreground/80 hover:text-primary transition-colors decoration-primary/30 underline-offset-4 hover:underline"
                                      >
                                        {project.name}
                                      </a>
                                    ) : (
                                      <span className="text-lg text-foreground/80 group-hover/item:text-primary transition-colors">
                                        {project.name}
                                      </span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden border border-border/50 bg-card/30">
                    <div className="absolute inset-0 z-0 bg-muted animate-pulse" />
                    <Image 
                        src={placeholderData.placeholderImages.find(p => p.id === activeSector.imageId)?.imageUrl || ''}
                        alt={activeSector.title}
                        fill
                        className="relative z-10 object-cover transition-all duration-1000"
                        priority
                    />
                    <div className="absolute inset-0 z-20 bg-gradient-to-t from-background via-transparent to-transparent opacity-40" />
                </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
