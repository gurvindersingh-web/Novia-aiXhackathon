import { memo } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { PricingProvider } from '../../hooks/usePricing';
import { PLANS } from '../../data/pricingMatrix';
import BillingToggle from './BillingToggle';
import CurrencySelector from './CurrencySelector';
import PricingCard from './PricingCard';

const PricingSection = memo(function PricingSection() {
  const revealRef = useScrollReveal();

  return (
    <PricingProvider>
      <section
        id="pricing"
        ref={revealRef}
        className="section-padding scroll-reveal"
        aria-label="Pricing plans"
      >
        <div className="container max-w-[1280px] mx-auto relative z-10">
          <div className="flex flex-col items-center text-center gap-6 mb-12">
            <h2
              className="font-bold tracking-tight"
              style={{
                fontSize: 'clamp(36px, 5vw, 72px)',
                lineHeight: 1.05,
                color: '#FFFFFF'
              }}
            >
              Scale without{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'var(--gradient-primary)' }}
              >
                surprises.
              </span>
            </h2>
            <p 
              className="text-[18px] max-w-[650px] mx-auto text-white/70"
            >
              Choose the perfect plan for your data automation needs. Simple, transparent pricing that grows with you.
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-col items-center justify-center gap-6 mb-48">
            <span className="text-white text-[17px] font-medium tracking-wide">Simple Scale.</span>
            <BillingToggle />
            <CurrencySelector />
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto w-full mb-12 mt-24">
            {PLANS.map((plan, index) => (
              <div
                key={plan.key}
                style={{
                  animation: `slideIn 600ms ease-out ${index * 100}ms both`,
                }}
              >
                <style>{`
                  @keyframes slideIn {
                    from {
                      opacity: 0;
                      transform: translateY(20px);
                    }
                    to {
                      opacity: 1;
                      transform: translateY(0);
                    }
                  }
                `}</style>
                <PricingCard plan={plan} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </PricingProvider>
  );
});

export default PricingSection;
