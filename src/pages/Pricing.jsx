import { useMemo, useState } from 'react';
import Navbar from '../components/layout/Navbar';
import BackgroundLayer from '../components/layout/BackgroundLayer';
import Footer from '../components/layout/Footer';
import { PricingProvider } from '../hooks/usePricing';
import { PLANS, CURRENCY_CONFIG, ANNUAL_MULTIPLIER } from '../data/pricingMatrix';
import BillingToggle from '../components/pricing/BillingToggle';
import CurrencySelector from '../components/pricing/CurrencySelector';
import PricingCard from '../components/pricing/PricingCard';
import { usePricing } from '../hooks/usePricing';

function PricingHero() {
  return (
    <section className="section-padding pt-32 pb-16">
      <div className="container mx-auto text-center max-w-4xl">
        <span className="section-label">Pricing</span>
        <h1
          className="mt-6 leading-tight tracking-tight"
          style={{
            fontSize: 'var(--text-6xl)',
            fontFamily: 'var(--font-display)',
            color: 'var(--color-text)',
          }}
        >
          Matrix-driven pricing for{' '}
          <span className="gradient-underline">global teams</span>
        </h1>
        <p
          className="mt-6 mx-auto max-w-2xl leading-relaxed"
          style={{ fontSize: 'var(--text-lg)', color: 'var(--color-muted)' }}
        >
          Toggle monthly or annual billing across USD, EUR, and INR with a live pricing
          matrix built for regional tariffs and predictable scaling.
        </p>
      </div>
    </section>
  );
}

function PricingMatrixPreview() {
  const { currency, cycle } = usePricing();
  const config = CURRENCY_CONFIG[currency];
  const annualFactor = cycle === 'annual' ? ANNUAL_MULTIPLIER : 1;

  const rows = useMemo(
    () =>
      PLANS.map((plan) => {
        const monthly = plan.base * config.multiplier * annualFactor;
        const annual = monthly * 12;
        return {
          ...plan,
          monthly,
          annual,
        };
      }),
    [annualFactor, config.multiplier]
  );

  return (
    <section className="section-padding-sm">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-6 mb-12">
          <BillingToggle />
          <CurrencySelector />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rows.map((plan) => (
            <PricingCard key={plan.key} plan={plan} />
          ))}
        </div>

        <div className="mt-10 rounded-[var(--radius-card)] border p-6" style={{ borderColor: 'var(--color-border)', background: 'rgba(17, 76, 90, 0.35)' }}>
          <h2 className="text-lg font-semibold mb-3" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-display)' }}>
            Billing matrix snapshot
          </h2>
          <p style={{ color: 'var(--color-muted)' }}>
            Monthly prices use the regional multiplier for {currency}. Annual billing applies the 20% discount before multiplying by 12.
          </p>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm" style={{ color: 'var(--color-muted)' }}>
            {PLANS.map((plan) => {
              const monthly = plan.base * config.multiplier * annualFactor;
              return (
                <div key={plan.key} className="rounded-2xl border p-4" style={{ borderColor: 'var(--color-border)' }}>
                  <div className="font-semibold mb-1" style={{ color: 'var(--color-text)' }}>{plan.key}</div>
                  <div>{config.symbol}{currency === 'INR' ? Math.round(monthly) : monthly.toFixed(2)} / mo</div>
                  <div>{config.symbol}{currency === 'INR' ? Math.round(monthly * 12) : (monthly * 12).toFixed(2)} / yr</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PricingPage() {
  return (
    <PricingProvider>
      <div className="min-h-screen relative overflow-hidden">
        <BackgroundLayer opacity={0.35} />
        <Navbar />
        <main>
          <PricingHero />
          <PricingMatrixPreview />
        </main>
        <Footer />
      </div>
    </PricingProvider>
  );
}
