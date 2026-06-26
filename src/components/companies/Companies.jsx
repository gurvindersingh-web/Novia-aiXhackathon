import { memo } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { COMPANIES } from '../../data/companies';
import { LogoLoop } from '../LogoLoop';

const Companies = memo(function Companies() {
  const revealRef = useScrollReveal();

  return (
    <section
      ref={revealRef}
      className="section-padding-sm overflow-hidden border-y scroll-reveal"
      style={{ borderColor: 'var(--color-border)' }}
      aria-label="Trusted companies"
    >
      <div className="mx-auto max-w-7xl px-6 mb-12">
        <p className="text-center text-sm uppercase tracking-[0.2em]" style={{ color: 'var(--color-muted)' }}>
          Trusted by data teams at
        </p>
      </div>

      <div className="relative flex items-center justify-center" style={{ color: 'var(--color-text)' }}>
        <LogoLoop
          logos={COMPANIES.map((name) => ({ node: name, ariaLabel: `${name} logo` }))}
          speed={70}
          direction="left"
          gap={40}
          logoHeight={50}
          pauseOnHover={true}
          scaleOnHover={true}
          ariaLabel="Company logo loop"
          className="w-full"
          renderItem={(item) => (
            <span
              className="inline-flex items-center rounded-full border px-6 py-3 text-xl font-semibold tracking-wide transition-all duration-150"
              style={{
                borderColor: 'var(--color-border)',
                background: 'rgba(17, 76, 90, 0.35)',
                color: 'var(--color-text)',
                fontFamily: 'var(--font-display)',
              }}
            >
              {item.node}
            </span>
          )}
        />
      </div>
    </section>
  );
});

export default Companies;
