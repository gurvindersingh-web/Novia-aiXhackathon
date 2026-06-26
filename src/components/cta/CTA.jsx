import { useScrollReveal } from '../../hooks/useScrollReveal';

const PARTICLES = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  left: `${8 + (i * 7.5) % 85}%`,
  delay: `${(i * 0.4) % 4}s`,
  duration: `${3 + (i % 4)}s`,
  size: `${2 + (i % 3)}px`,
}));

export default function CTA() {
  const revealRef = useScrollReveal();

  return (
    <section
      ref={revealRef}
      className="section-padding scroll-reveal relative overflow-hidden"
      aria-label="Call to action"
    >
      {/* Gradient glow background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(255,200,1,0.08) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      {/* Floating particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
        {PARTICLES.map((p) => (
          <span
            key={p.id}
            className="cta-particle absolute rounded-full"
            style={{
              left: p.left,
              bottom: '-4px',
              width: p.size,
              height: p.size,
              backgroundColor: 'var(--color-primary)',
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto flex flex-col items-center">
        <div className="max-w-2xl text-center">
          <h2
            className="leading-tight tracking-tight mb-6"
            style={{
              fontSize: 'var(--text-5xl)',
              fontFamily: 'var(--font-display)',
              color: 'var(--color-text)',
            }}
          >
            Ready to automate{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'var(--gradient-primary)' }}
            >
              your data?
            </span>
          </h2>
          <p
            className="leading-relaxed mb-10"
            style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--color-muted)',
            }}
          >
            Join thousands of data teams using Novia AI to build, deploy, and
            monitor pipelines in minutes.
          </p>
          <a href="#pricing" className="btn-primary">
            Get Started for Free
          </a>
        </div>
      </div>
    </section>
  );
}
