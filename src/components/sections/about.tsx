'use client';

export function About() {
  return (
    <section className="py-12 md:py-24">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Manifesto Header */}
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div className="space-y-4">
            <p className="font-body text-xs uppercase tracking-[0.5em] text-primary font-bold">
              The Manifesto
            </p>
            <h2 className="font-headline text-4xl md:text-7xl leading-tight text-foreground">
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
        </div>

        {/* Additional Focus Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6 p-8 border border-border/30 bg-card/20 rounded-2xl backdrop-blur-sm transition-all hover:border-primary/50">
            <div className="h-px w-12 bg-primary"></div>
            <h3 className="font-headline text-3xl text-foreground">Architectural Autonomy</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our philosophy centers on building infrastructure that operates independently of traditional 
              institutional constraints. By leveraging decentralized frameworks, we ensure that every 
              venture is resilient, self-sustaining, and immune to the volatility of legacy systems.
            </p>
          </div>
          
          <div className="space-y-6 p-8 border border-border/30 bg-card/20 rounded-2xl backdrop-blur-sm transition-all hover:border-primary/50">
            <div className="h-px w-12 bg-primary"></div>
            <h3 className="font-headline text-3xl text-foreground">Digital Sovereignty</h3>
            <p className="text-muted-foreground leading-relaxed">
              True disruption requires more than just innovation—it requires the protection of the individual's 
              digital identity and assets. We prioritize technologies that grant users absolute ownership 
              over their data, creating a new standard for trust and security in the digital age.
            </p>
          </div>
        </div>

        {/* Signature */}
        <div className="pt-8 flex items-center justify-center space-x-6">
          <div className="h-px w-16 bg-border"></div>
          <span className="font-headline text-2xl italic text-primary">Sovereign Individual</span>
          <div className="h-px w-16 bg-border"></div>
        </div>
      </div>
    </section>
  );
}
