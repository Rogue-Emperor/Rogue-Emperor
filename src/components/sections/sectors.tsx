import Image from 'next/image';
import placeholderData from '@/lib/placeholder-images.json';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const sectorsData = [
  {
    id: 'aerospace',
    title: 'Aerospace',
    imageId: 'sector-aerospace',
    className: 'md:col-span-2',
  },
  { id: 'ai', title: 'Artificial Intelligence', imageId: 'sector-ai' },
  { id: 'biotech', title: 'Biotechnology', imageId: 'sector-biotech' },
  {
    id: 'energy',
    title: 'Sustainable Energy',
    imageId: 'sector-energy',
    className: 'md:col-span-2',
  },
];

const SectorCard = ({
  title,
  imageId,
  className,
}: {
  title: string;
  imageId: string;
  className?: string;
}) => {
  const { placeholderImages } = placeholderData;
  const image = placeholderImages.find(p => p.id === imageId);

  return (
    <Card
      className={cn(
        'group relative overflow-hidden rounded-xl border-border/50 bg-transparent transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10',
        className
      )}
    >
      <div className="absolute inset-0 z-10 bg-black/40 transition-colors group-hover:bg-black/20" />
      {image && (
        <Image
          src={image.imageUrl}
          alt={image.description}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          data-ai-hint={image.imageHint}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      )}
      <CardHeader className="relative z-20 flex h-full items-end justify-start p-6">
        <CardTitle className="font-headline text-3xl text-foreground md:text-4xl">
          {title}
        </CardTitle>
      </CardHeader>
    </Card>
  );
};

export function Sectors() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mb-16 text-center">
        <h2 className="font-headline text-5xl md:text-6xl">Sector Dominance</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Pioneering advancements across critical industries that redefine the
          boundaries of possibility.
        </p>
      </div>
      <div className="grid auto-rows-[24rem] grid-cols-1 gap-6 md:grid-cols-3">
        {sectorsData.map(sector => (
          <SectorCard
            key={sector.id}
            title={sector.title}
            imageId={sector.imageId}
            className={sector.className}
          />
        ))}
      </div>
    </section>
  );
}
