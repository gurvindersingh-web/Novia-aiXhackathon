import Navbar from '../components/layout/Navbar';
import BackgroundLayer from '../components/layout/BackgroundLayer';
import Hero from '../components/hero/Hero';
import Companies from '../components/companies/Companies';
import FeaturesSection from '../components/features/FeaturesSection';
import ProductShowcase from '../components/showcase/ProductShowcase';
import PricingSection from '../components/pricing/PricingSection';

import Testimonials from '../components/testimonials/Testimonials';
import CTA from '../components/cta/CTA';
import { LogoLoop } from '../components/LogoLoop';
import CurvedLoop from '../components/curveloop';
import { COMPANIES } from '../data/companies';
import Footer from '../components/layout/Footer';
import CustomScrollbar from '../components/layout/CustomScrollbar';

export default function Home() {
  return (
    <>
      <BackgroundLayer opacity={0.3} />
      <Navbar />
      <main>
        <Hero />
        <Companies />
        <FeaturesSection />
        <ProductShowcase />
        <PricingSection />
        <Testimonials />
        <CTA />
        <section
          className="section-padding-sm overflow-hidden"
          aria-label="Decorative footer loop"
        >
          <div className="relative flex items-center justify-center h-40" style={{ color: 'var(--color-text)' }}>
            <CurvedLoop
              marqueeText={COMPANIES.join(' • ')}
              speed={2}
              curveAmount={200}
              direction="left"
              interactive={true}
              className="text-6xl font-bold uppercase tracking-wider"
            />
          </div>
        </section>
      </main>
      <Footer />
      <CustomScrollbar />
    </>
  );
}
