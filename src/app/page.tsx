import { Counter } from '@/components/sections/counter';
import { Hero } from '@/components/sections/hero';
import { PrivateOffice } from '@/components/sections/private-office';
import { Sectors } from '@/components/sections/sectors';
import { About } from '@/components/sections/about';
import { ScrollFadeIn } from '@/components/scroll-fade-in';
import { Navbar } from '@/components/layout/navbar';

const SectionWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="max-w-7xl mx-auto px-4 md:px-8">
    <ScrollFadeIn>{children}</ScrollFadeIn>
  </div>
);

export default function Home() {
  return (
    <div className="bg-background">
      <Navbar />
      <Hero />
      <div className="relative z-10 bg-background">
        <div className="space-y-24 md:space-y-32 py-24 md:py-32">
          <SectionWrapper>
            <About />
          </SectionWrapper>
          <div id="ventures" className="scroll-mt-20">
            <SectionWrapper>
              <Counter />
            </SectionWrapper>
          </div>
          <div id="sectors" className="scroll-mt-20">
            <SectionWrapper>
              <Sectors />
            </SectionWrapper>
          </div>
          <div id="contact" className="scroll-mt-20">
            <SectionWrapper>
              <PrivateOffice />
            </SectionWrapper>
          </div>
        </div>
      </div>
    </div>
  );
}
