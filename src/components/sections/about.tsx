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
              Forging a  <span className="text-primary italic">Legacy</span> that redfines the boundaries
            </h2>
          </div>
          The world is a shifting tide of energy where most are far too busy fighting the current to ever master the flow. Competition is for those at the bottom: a race with no finish line. At the highest level, the logic shifts from conflict to calculation, and true power becomes a collaborative art. I do not build ventures & projects to participate in friction,I build them to be the gravity that pulls the board into alignment with those who see the same horizon. For an innovator, the goal isn't to beat the market, but to render the old one obsolete by designing what comes next. Excellence is not a suggestion, it is the only path to absolute autonomy.


          <div className="max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              
            </p>
          </div>
        </div>

        {/* Additional Focus Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6 p-8 border border-border/30 bg-card/20 rounded-2xl backdrop-blur-sm transition-all hover:border-primary/50">
            <div className="h-px w-12 bg-primary"></div>
            <h3 className="font-headline text-3xl text-foreground">Innovation</h3>
            <p className="text-muted-foreground leading-relaxed">
              My approach towards innovation lies in doing thing differently and breaking down the complexity to build and fullfill the needs of the current generation.
            </p>
          </div>
          
          <div className="space-y-6 p-8 border border-border/30 bg-card/20 rounded-2xl backdrop-blur-sm transition-all hover:border-primary/50">
            <div className="h-px w-12 bg-primary"></div>
            <h3 className="font-headline text-3xl text-foreground">Entrepreneurship & Disruption</h3>
            <p className="text-muted-foreground leading-relaxed">
            Success at the highest level is not a matter of chance, it is the result of a singular, refined strategy that prioritizes the top 1% of outcomes. By shifting from competition to high-level calculation, I design ventures that bypass traditional friction. My vision is built on the logic of the board, where collaboration and precision render the finish line a settled certainty.
            </p>
          </div>
        </div>

        {/* Signature */}
        <div className="pt-8 flex items-center justify-center space-x-6">
          <div className="h-px w-16 bg-border"></div>
          <span className="font-headline text-2xl italic text-primary">Greatest Victory requires no battle</span>
          <div className="h-px w-16 bg-border"></div>
        </div>
      </div>
    </section>
  );
}
