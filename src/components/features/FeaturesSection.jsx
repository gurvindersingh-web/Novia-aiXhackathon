import { useScrollReveal } from '../../hooks/useScrollReveal';
import { FEATURES } from '../../data/features';
import BentoGrid from './BentoGrid';
import Accordion from './Accordion';
import { useActiveFeature } from '../../hooks/useActiveFeature';

export default function FeaturesSection() {
  const revealRef = useScrollReveal();
  const { activeIndex, setActiveIndex, toggleActiveIndex, isMobile } =
    useActiveFeature();

  return (
    <section
      id="features"
      ref={revealRef}
      className="section-padding scroll-reveal"
      aria-label="Platform features"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-6 mb-16">
          <span className="section-label">Capabilities</span>
          <h2
            className="text-center leading-tight tracking-tight max-w-2xl"
            style={{
              fontSize: 'var(--text-5xl)',
              fontFamily: 'var(--font-display)',
              color: 'var(--color-text)',
            }}
          >
            One platform.{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'var(--gradient-primary)' }}
            >
              Every data workflow.
            </span>
          </h2>
        </div>

        {isMobile && (
          <Accordion
            features={FEATURES}
            activeIndex={activeIndex}
            onToggle={toggleActiveIndex}
          />
        )}
      </div>

      {!isMobile && (
        <BentoGrid
          features={FEATURES}
          activeIndex={activeIndex}
          onHoverEnter={setActiveIndex}
          onHoverLeave={() => setActiveIndex(null)}
        />
      )}
    </section>
  );
}
