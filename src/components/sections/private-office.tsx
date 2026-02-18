import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function PrivateOffice() {
  return (
    <section className="flex flex-col items-center py-24 text-center sm:py-32">
      <h2 className="font-headline text-5xl md:text-6xl">Contact</h2>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
        Direct engagement is reserved for partners and ventures of significant
        strategic value. Submit your purpose for review.
      </p>
      <Button asChild size="lg" className="mt-12">
        <a href="mailto:pragyan.dev@outlook.com">
          <Mail className="mr-2 h-5 w-5" />
          pragyan.dev@outlook.com
        </a>
      </Button>
    </section>
  );
}
