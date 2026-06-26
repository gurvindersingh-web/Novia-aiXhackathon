import { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const TABS = [
  {
    id: 'pipelines',
    label: 'Pipelines',
    title: 'Visual pipeline builder',
    description:
      'Drag, connect, and deploy multi-step data workflows. Every node is typed, versioned, and testable in isolation.',
  },
  {
    id: 'insights',
    label: 'Insights',
    title: 'Real-time analytics',
    description:
      'Live KPI widgets update in under 200ms. Share dashboards with stakeholders or embed them anywhere.',
  },
  {
    id: 'automation',
    label: 'Automation',
    title: 'Self-healing engine',
    description:
      'Anomaly detection catches failures before they cascade. Auto-repair or rollback with one click.',
  },
];

export default function ProductShowcase() {
  const revealRef = useScrollReveal();
  const [activeTab, setActiveTab] = useState('pipelines');
  const active = TABS.find((t) => t.id === activeTab);

  return (
    <section
      id="showcase"
      ref={revealRef}
      className="section-padding scroll-reveal"
      aria-label="Product showcase"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-6 mb-16">
          <span className="section-label">Product</span>
          <h2
            className="text-center leading-tight tracking-tight max-w-2xl"
            style={{
              fontSize: 'var(--text-5xl)',
              fontFamily: 'var(--font-display)',
              color: 'var(--color-text)',
            }}
          >
            See the platform{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'var(--gradient-primary)' }}
            >
              in motion.
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Tab controls */}
          <div className="flex flex-col gap-8 order-2 lg:order-1">
            <div
              className="inline-flex gap-1 p-1 rounded-xl w-fit"
              style={{ backgroundColor: 'var(--color-surface-2)' }}
              role="tablist"
            >
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="px-5 py-2.5 font-medium rounded-lg transition-all duration-150"
                  style={{
                    fontSize: 'var(--text-sm)',
                    backgroundColor:
                      activeTab === tab.id ? 'var(--color-surface)' : 'transparent',
                    color:
                      activeTab === tab.id
                        ? 'var(--color-primary)'
                        : 'var(--color-muted)',
                    boxShadow:
                      activeTab === tab.id ? '0 2px 12px rgba(0,0,0,0.25)' : 'none',
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="transition-opacity duration-300 ease-in-out">
              <h3
                className="font-bold mb-4"
                style={{
                  fontSize: 'var(--text-2xl)',
                  fontFamily: 'var(--font-display)',
                  color: 'var(--color-text)',
                }}
              >
                {active.title}
              </h3>
              <p className="leading-relaxed" style={{ fontSize: 'var(--text-base)', color: 'var(--color-muted)' }}>
                {active.description}
              </p>
            </div>
          </div>

          {/* Interactive preview */}
          <div className="order-1 lg:order-2">
            <ShowcasePreview activeTab={activeTab} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ShowcasePreview({ activeTab }) {
  return (
    <div
      className="relative rounded-2xl border overflow-hidden transition-all duration-300 ease-in-out hover:translate-y-[-4px]"
      style={{
        background: 'var(--gradient-card)',
        borderColor: 'var(--color-border)',
        boxShadow: '0 24px 64px rgba(0,0,0,0.35)',
      }}
    >
      <div
        className="px-5 py-3 border-b flex items-center gap-2"
        style={{ borderColor: 'var(--color-border)' }}
      >
        <span className="w-2 h-2 rounded-full bg-red-400/60" aria-hidden="true" />
        <span className="w-2 h-2 rounded-full bg-yellow-400/60" aria-hidden="true" />
        <span className="w-2 h-2 rounded-full bg-green-400/60" aria-hidden="true" />
      </div>

      <div className="p-6 min-h-[280px]">
        {activeTab === 'pipelines' && <PipelinePreview />}
        {activeTab === 'insights' && <InsightsPreview />}
        {activeTab === 'automation' && <AutomationPreview />}
      </div>
    </div>
  );
}

function PipelinePreview() {
  const nodes = ['Ingest', 'Transform', 'Enrich', 'Deploy'];
  return (
    <div className="flex items-center justify-between gap-2">
      {nodes.map((node, i) => (
        <div key={node} className="flex items-center gap-2 flex-1">
          <div
            className="flex-1 rounded-xl p-3 border text-center transition-all duration-150 hover:border-[var(--color-primary)] hover:shadow-[0_0_20px_var(--color-primary-glow)]"
            style={{
              borderColor: 'var(--color-border)',
              backgroundColor: 'rgba(0,0,0,0.2)',
              animationDelay: `${i * 100}ms`,
            }}
          >
            <p className="text-[10px] uppercase tracking-wider mb-1" style={{ color: 'var(--color-muted)' }}>
              Step {i + 1}
            </p>
            <p className="text-xs font-semibold" style={{ color: 'var(--color-text)' }}>
              {node}
            </p>
          </div>
          {i < nodes.length - 1 && (
            <div
              className="w-4 h-0.5 shrink-0 animate-flow-line"
              style={{ background: 'var(--gradient-primary)' }}
              aria-hidden="true"
            />
          )}
        </div>
      ))}
    </div>
  );
}

function InsightsPreview() {
  const bars = [45, 72, 58, 90, 65, 82];
  return (
    <div className="space-y-4">
      <div className="flex items-end gap-2 h-32">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t origin-bottom animate-bar-grow"
            style={{
              height: `${h}%`,
              background: 'var(--gradient-primary)',
              opacity: 0.5 + i * 0.08,
              animationDelay: `${i * 60}ms`,
            }}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-3">
        {['Latency', 'Throughput', 'Errors'].map((label, i) => (
          <div
            key={label}
            className="rounded-lg p-3 border text-center"
            style={{ borderColor: 'var(--color-border)', backgroundColor: 'rgba(0,0,0,0.15)' }}
          >
            <p className="text-[10px] mb-1" style={{ color: 'var(--color-muted)' }}>{label}</p>
            <p
              className="text-sm font-bold tabular-nums"
              style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-display)' }}
            >
              {['12ms', '4.2k/s', '0.01%'][i]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function AutomationPreview() {
  return (
    <div className="space-y-4">
      {[
        { label: 'Anomaly detected', status: 'warning' },
        { label: 'Auto-repair initiated', status: 'active' },
        { label: 'Pipeline restored', status: 'success' },
      ].map((step, i) => (
        <div
          key={step.label}
          className="flex items-center gap-3 p-3 rounded-xl border transition-all duration-150"
          style={{
            borderColor: 'var(--color-border)',
            backgroundColor: 'rgba(0,0,0,0.15)',
            animationDelay: `${i * 200}ms`,
          }}
        >
          <span
            className={`w-2 h-2 rounded-full shrink-0 ${
              step.status === 'success'
                ? 'bg-green-400'
                : step.status === 'active'
                  ? 'bg-[var(--color-primary)] animate-pulse-dot'
                  : 'bg-yellow-400'
            }`}
            aria-hidden="true"
          />
          <span className="text-sm" style={{ color: 'var(--color-text)' }}>
            {step.label}
          </span>
          {step.status === 'active' && (
            <span
              className="ml-auto text-[10px] font-medium animate-typing-cursor"
              style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-display)' }}
            >
              running
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
