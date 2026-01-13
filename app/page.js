import HeroScroll from './components/HeroScroll';
import Stats from './components/Stats';
import ProblemSolution from './components/ProblemSolution';
import Process from './components/Process';
import ServicesGrid from './components/ServicesGrid';
import Technology from './components/Technology';
import Showcase from './components/Showcase';
import Testimonials from './components/Testimonials';
import Industries from './components/Industries';
import FAQ from './components/FAQ';
import BusinessValue from './components/BusinessValue';
import FinalCTA from './components/FinalCTA';

export default function Home() {
  return (
    <main>
      {/* 01 - Hero & Showreel Transition */}
      <HeroScroll />

      {/* 02 */}
      <Stats />

      {/* 03 - Problem/Solution */}
      <ProblemSolution />

      {/* 04 - Process */}
      <Process />

      {/* 05 - Services */}
      <ServicesGrid />

      {/* 06 - Technology */}
      <Technology />

      {/* 07 - Showcase */}
      <Showcase />

      {/* 08 - Testimonials */}
      <Testimonials />

      {/* 09 - Industries */}
      <Industries />

      {/* 10 - FAQ */}
      <FAQ />

      {/* 11 - Business Value */}
      <BusinessValue />

      {/* 12 - Final CTA */}
      <FinalCTA />
    </main>
  );
}
