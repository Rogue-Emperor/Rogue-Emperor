const TextArt = () => {
  const line = 'SOVEREIGN_'.repeat(20);
  const lines = Array.from({ length: 50 }).map((_, i) => {
    const start = i % 10;
    return line.substring(start) + line.substring(0, start);
  });

  return (
    <div className="absolute inset-0 z-0 overflow-hidden font-code text-[10px] text-muted-foreground/20 leading-3 tracking-wider">
      <div className="absolute left-1/2 top-1/2 h-[150%] w-[150%] -translate-x-1/2 -translate-y-1/2 animate-[spin_300s_linear_infinite] opacity-30">
        {lines.map((text, i) => (
          <p key={i} className="whitespace-pre">
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <TextArt />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
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
