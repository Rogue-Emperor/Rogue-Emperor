import { Counter } from '@/components/sections/counter';
import { Hero } from '@/components/sections/hero';
import { PrivateOffice } from '@/components/sections/private-office';
import { Sectors } from '@/components/sections/sectors';
import { ScrollFadeIn } from '@/components/scroll-fade-in';

const SectionWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="max-w-7xl mx-auto px-4 md:px-8">
    <ScrollFadeIn>{children}</ScrollFadeIn>
  </div>
);

export default function Home() {
  return (
    <div className="bg-background">
      <Hero />
      <div className="relative z-10 bg-background">
        {' '}
        {/* To ensure content is on top of hero gradient */}
        <div className="space-y-24 md:space-y-32 py-24 md:py-32">
          <SectionWrapper>
            <Counter />
          </SectionWrapper>
          <SectionWrapper>
            <Sectors />
          </SectionWrapper>
          <SectionWrapper>
            <PrivateOffice />
          </SectionWrapper>
        </div>
      </div>
    </div>
  );
}
