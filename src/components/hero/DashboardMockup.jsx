import { useEffect, useRef, useState } from 'react';

const BAR_HEIGHTS = [38, 62, 45, 78, 55, 88, 42, 95, 68, 72, 50, 84];

function useCountUp(target, duration = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(start + (target - start) * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [target, duration]);

  return value;
}

export default function DashboardMockup() {
  const rootRef = useRef(null);
  const workflows = useCountUp(248);
  const tasks = useCountUp(14532);
  const accuracy = useCountUp(99);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const bars = root.querySelectorAll('.dash-bar');
    bars.forEach((bar, i) => {
      bar.animate(
        [{ transform: 'scaleY(0)' }, { transform: 'scaleY(1)' }],
        {
          duration: 600,
          delay: i * 40,
          fill: 'forwards',
          easing: 'ease-in-out',
        }
      );
    });

    const line = root.querySelector('.dash-sparkline');
    if (line) {
      const length = line.getTotalLength?.() ?? 400;
      line.style.strokeDasharray = `${length}`;
      line.style.strokeDashoffset = `${length}`;
      line.animate(
        [{ strokeDashoffset: length }, { strokeDashoffset: 0 }],
        { duration: 1400, delay: 300, fill: 'forwards', easing: 'ease-in-out' }
      );
    }

    const progress = root.querySelector('.dash-progress-fill');
    if (progress) {
      progress.animate(
        [{ width: '0%' }, { width: '78%' }],
        { duration: 1200, delay: 500, fill: 'forwards', easing: 'ease-in-out' }
      );
    }
  }, []);

  return (
    <div ref={rootRef} className="relative w-full max-w-xl mx-auto lg:mx-0">
      {/* Radial glow behind dashboard */}
      <div
        className="absolute inset-0 -z-10 scale-110 rounded-3xl"
        style={{
          background:
            'radial-gradient(ellipse at 60% 40%, rgba(255, 200, 1, 0.12) 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />

      {/* Floating notification */}
      <div
        className="absolute -top-6 -right-4 z-20 hidden md:flex items-center gap-2 px-4 py-2.5 rounded-xl border backdrop-blur-xl animate-float-card"
        style={{
          backgroundColor: 'rgba(23, 43, 54, 0.85)',
          borderColor: 'var(--color-border)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.35)',
        }}
      >
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-dot" aria-hidden="true" />
        <span className="text-xs font-medium" style={{ color: 'var(--color-text)' }}>
          Pipeline synced
        </span>
      </div>

      {/* Floating metric card */}
      <div
        className="absolute -bottom-8 -left-6 z-20 hidden md:block px-4 py-3 rounded-xl border backdrop-blur-xl animate-float-card-delayed"
        style={{
          backgroundColor: 'rgba(23, 43, 54, 0.85)',
          borderColor: 'rgba(255, 200, 1, 0.2)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.35)',
        }}
      >
        <p className="text-[10px] uppercase tracking-wider mb-0.5" style={{ color: 'var(--color-muted)' }}>
          AI Accuracy
        </p>
        <p
          className="text-xl font-bold tabular-nums"
          style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-display)' }}
        >
          {accuracy}.98%
        </p>
      </div>

      {/* Main dashboard */}
      <div
        className="dashboard-mockup relative rounded-2xl border overflow-hidden transition-transform duration-300 ease-in-out hover:translate-y-[-4px]"
        style={{
          background: 'linear-gradient(145deg, rgba(17,76,90,0.9), rgba(15,58,71,0.95))',
          borderColor: 'var(--color-border)',
          boxShadow: '0 24px 64px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,200,1,0.06)',
        }}
      >
        {/* Title bar */}
        <div
          className="flex items-center gap-2 px-5 py-3.5 border-b"
          style={{ borderColor: 'var(--color-border)', backgroundColor: 'rgba(0,0,0,0.15)' }}
        >
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" aria-hidden="true" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" aria-hidden="true" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" aria-hidden="true" />
          <span
            className="ml-3 text-xs font-medium"
            style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-display)' }}
          >
            novia — automation console
          </span>
          <span className="ml-auto flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-dot" aria-hidden="true" />
            <span className="text-[10px]" style={{ color: 'var(--color-muted)' }}>Live</span>
          </span>
        </div>

        <div className="p-5 grid grid-cols-2 gap-4">
          {/* Chart area */}
          <div
            className="col-span-2 rounded-xl p-4 border"
            style={{ backgroundColor: 'rgba(0,0,0,0.2)', borderColor: 'var(--color-border)' }}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs" style={{ color: 'var(--color-muted)' }}>Throughput</span>
              <span
                className="text-xs font-semibold tabular-nums"
                style={{ color: 'var(--color-primary)' }}
              >
                +24.6%
              </span>
            </div>
            <div className="relative h-24 flex items-end gap-1">
              {BAR_HEIGHTS.map((h, i) => (
                <div
                  key={i}
                  className="dash-bar flex-1 rounded-t origin-bottom"
                  style={{
                    height: `${h}%`,
                    background: 'var(--gradient-primary)',
                    opacity: 0.55 + (i % 3) * 0.15,
                    transform: 'scaleY(0)',
                  }}
                />
              ))}
            </div>
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-0" aria-hidden="true">
              <polyline
                className="dash-sparkline"
                points="0,80 40,60 80,70 120,40 160,55 200,30 240,45 280,20"
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* Metric cards */}
          <div
            className="rounded-xl p-4 border transition-all duration-150 hover:border-[var(--color-border-hover)]"
            style={{ backgroundColor: 'rgba(0,0,0,0.2)', borderColor: 'var(--color-border)' }}
          >
            <p className="text-[10px] uppercase tracking-wider mb-1" style={{ color: 'var(--color-muted)' }}>
              Workflows
            </p>
            <p
              className="text-2xl font-bold tabular-nums"
              style={{ color: 'var(--color-text)', fontFamily: 'var(--font-display)' }}
            >
              {workflows.toLocaleString()}
            </p>
          </div>

          <div
            className="rounded-xl p-4 border transition-all duration-150 hover:border-[var(--color-border-hover)]"
            style={{ backgroundColor: 'rgba(0,0,0,0.2)', borderColor: 'var(--color-border)' }}
          >
            <p className="text-[10px] uppercase tracking-wider mb-1" style={{ color: 'var(--color-muted)' }}>
              AI Tasks
            </p>
            <p
              className="text-2xl font-bold tabular-nums"
              style={{ color: 'var(--color-text)', fontFamily: 'var(--font-display)' }}
            >
              {tasks.toLocaleString()}
            </p>
          </div>

          {/* Processing bar */}
          <div
            className="col-span-2 rounded-xl p-4 border"
            style={{ backgroundColor: 'rgba(0,0,0,0.2)', borderColor: 'var(--color-border)' }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs" style={{ color: 'var(--color-muted)' }}>
                Data ingestion
              </span>
              <span
                className="text-xs font-medium dash-typing"
                style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-display)' }}
              >
                Processing...
              </span>
            </div>
            <div
              className="h-1.5 rounded-full overflow-hidden"
              style={{ backgroundColor: 'rgba(217,232,226,0.08)' }}
            >
              <div
                className="dash-progress-fill h-full rounded-full"
                style={{
                  width: '0%',
                  background: 'var(--gradient-primary)',
                }}
              />
            </div>
          </div>
        </div>

        {/* Animated cursor */}
        <div
          className="absolute bottom-16 right-12 w-4 h-4 pointer-events-none animate-dash-cursor"
          aria-hidden="true"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="var(--color-primary)">
            <path d="M1 1l4 12 2.5-4.5L12 6z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
