'use client';

export function About() {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto text-center space-y-10">
        <div className="space-y-4">
          <p className="font-body text-xs uppercase tracking-[0.5em] text-primary font-bold">
            The Manifesto
          </p>
          <h2 className="font-headline text-4xl md:text-6xl leading-tight text-foreground">
            Defining success by the <span className="text-primary italic">freedom</span> to create, not just the capacity to earn.
          </h2>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            In an era of centralization, sovereignty is the ultimate competitive advantage. 
            We build systems that empower the individual, architecting a future where 
            autonomy is the foundation of every venture.
          </p>
        </div>

        <div className="pt-8 flex items-center justify-center space-x-6">
          <div className="h-px w-16 bg-border"></div>
          <span className="font-headline text-2xl italic text-primary">Sovereign Individual</span>
          <div className="h-px w-16 bg-border"></div>
        </div>
      </div>
    </section>
  );
}
