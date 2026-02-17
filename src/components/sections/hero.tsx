import Image from 'next/image';
import placeholderData from '@/lib/placeholder-images.json';

export function Hero() {
  const { placeholderImages } = placeholderData;
  const heroImage = placeholderImages.find(p => p.id === 'hero-ceo');

  return (
    <section className="relative h-screen w-full">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          priority
          className="object-cover object-center"
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-foreground">
        <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl tracking-tight">
          SOVEREIGN
        </h1>
        <p className="font-body text-lg md:text-xl tracking-[0.2em] uppercase mt-4 text-muted-foreground">
          Building The Future, On Our Own Terms
        </p>
      </div>
    </section>
  );
}
