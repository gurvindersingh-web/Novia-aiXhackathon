import { useScrollReveal } from '../../hooks/useScrollReveal';
import DashboardMockup from './DashboardMockup';
import ArrowTrendingUp from '../../assets/icons/arrow-trending-up.svg?react';

const HERO_STATS = [
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '10M+', label: 'Events / day' },
  { value: '200+', label: 'Integrations' },
];

export default function Hero() {
  const revealRef = useScrollReveal();

  return (
    <section
      id="hero"
      ref={revealRef}
      className="section-padding relative min-h-screen flex items-center overflow-hidden pt-24 scroll-reveal"
      aria-label="Hero"
    >
      {/* Subtle background - removed large animation, using gradient + accent */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          background: 'linear-gradient(135deg, #172B36 0%, #114C5A 50%, #172B36 100%)',
        }}
        aria-hidden="true"
      />
      
      {/* Subtle glow accent behind dashboard */}
      <div
        className="absolute -right-32 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl -z-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255, 200, 1, 0.08) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto">
        <div className="grid-desktop-2">
          {/* Left: Content */}
          <div className="flex flex-col gap-8">
            <span className="ai-badge w-fit">AI Data Automation</span>

            <div>
              <h1
                className="font-bold leading-tight tracking-tight"
                style={{
                  fontSize: 'var(--text-6xl)',
                  fontFamily: 'var(--font-display)',
                  color: 'var(--color-text)',
                }}
              >
                The intelligence layer
                <br />
                <span className="gradient-underline">for modern data teams</span>
              </h1>
            </div>

            <p
              className="leading-relaxed max-w-lg"
              style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--color-muted)',
              }}
            >
              Build self-healing pipelines, surface insights in real time, and
              automate decisions — without adding headcount.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#pricing" className="btn-primary">
                Start Free Trial
              </a>
              <a href="#showcase" className="btn-secondary">
                See It in Action
              </a>
            </div>

            <div className="flex flex-wrap gap-10 pt-8 border-t" style={{ borderColor: 'var(--color-border)' }}>
              {HERO_STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1 group">
                  <div className="flex items-center gap-2">
                    <ArrowTrendingUp
                      className="w-4 h-4 transition-transform duration-150 group-hover:rotate-12"
                      style={{ color: 'var(--color-primary)' }}
                      aria-hidden="true"
                    />
                    <span
                      className="font-bold tabular-nums"
                      style={{
                        fontSize: 'var(--text-2xl)',
                        fontFamily: 'var(--font-display)',
                        color: 'var(--color-primary)',
                      }}
                    >
                      {stat.value}
                    </span>
                  </div>
                  <span className="text-sm" style={{ color: 'var(--color-muted)' }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Dashboard */}
          <div className="relative flex items-center justify-center">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
