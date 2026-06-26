import SearchIcon from '../../assets/icons/search.svg?react';
import ArrowTrendingUpIcon from '../../assets/icons/arrow-trending-up.svg?react';
import CogIcon from '../../assets/icons/cog-8-tooth.svg?react';
import ChartPieIcon from '../../assets/icons/chart-pie.svg?react';
import ArrowPathIcon from '../../assets/icons/arrow-path.svg?react';
import LinkIcon from '../../assets/icons/link.svg?react';
import CubeIcon from '../../assets/icons/cube-16-solid.svg?react';


const ICON_MAP = {
  search: SearchIcon,
  'arrow-trending-up': ArrowTrendingUpIcon,
  'cog-8-tooth': CogIcon,
  'chart-pie': ChartPieIcon,
  'arrow-path': ArrowPathIcon,
  link: LinkIcon,
  'cube-16-solid': CubeIcon,
};

function MiniViz({ type, isActive }) {
  const opacity = isActive ? 1 : 0.6;

  if (type === 'graph') {
    return (
      <div className="flex items-end gap-1 h-12 mt-auto" aria-hidden="true">
        {[40, 65, 50, 80, 55, 90].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t origin-bottom transition-transform duration-300"
            style={{
              height: `${h}%`,
              background: 'var(--gradient-primary)',
              opacity: opacity * (0.4 + i * 0.1),
              transform: isActive ? 'scaleY(1)' : 'scaleY(0.7)',
            }}
          />
        ))}
      </div>
    );
  }

  if (type === 'pipeline') {
    return (
      <div className="flex items-center gap-1.5 mt-auto" aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex items-center gap-1.5">
            <div
              className="w-8 h-8 rounded-lg border transition-all duration-300"
              style={{
                borderColor: isActive ? 'var(--color-primary)' : 'var(--color-border)',
                backgroundColor: 'rgba(0,0,0,0.2)',
              }}
            />
            {i < 2 && (
              <div
                className="w-3 h-0.5"
                style={{ background: 'var(--gradient-primary)', opacity }}
              />
            )}
          </div>
        ))}
      </div>
    );
  }

  if (type === 'nodes') {
    return (
      <div className="relative h-12 mt-auto" aria-hidden="true">
        <div
          className="absolute left-1/4 top-1/2 w-3 h-3 rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
          style={{
            backgroundColor: 'var(--color-primary)',
            boxShadow: isActive ? '0 0 12px var(--color-primary-glow)' : 'none',
          }}
        />
        <div
          className="absolute left-1/2 top-1/4 w-2 h-2 rounded-full -translate-x-1/2 transition-all duration-300"
          style={{ backgroundColor: 'var(--color-secondary)', opacity }}
        />
        <div
          className="absolute left-3/4 top-2/3 w-2.5 h-2.5 rounded-full -translate-x-1/2 transition-all duration-300"
          style={{ backgroundColor: 'var(--color-muted)', opacity: opacity * 0.5 }}
        />
        <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
          <line x1="25%" y1="50%" x2="50%" y2="25%" stroke="var(--color-border)" strokeWidth="1" />
          <line x1="50%" y1="25%" x2="75%" y2="67%" stroke="var(--color-border)" strokeWidth="1" />
        </svg>
      </div>
    );
  }

  return (
    <div className="h-1 rounded-full mt-auto overflow-hidden" style={{ backgroundColor: 'rgba(217,232,226,0.08)' }} aria-hidden="true">
      <div
        className="h-full rounded-full transition-all duration-500 ease-in-out"
        style={{
          width: isActive ? '78%' : '45%',
          background: 'var(--gradient-primary)',
        }}
      />
    </div>
  );
}

const VIZ_MAP = {
  0: 'graph',
  1: 'graph',
  2: 'pipeline',
  3: 'graph',
  4: 'nodes',
  5: 'pipeline',
  6: 'nodes',
};

export default function BentoGrid({ features, activeIndex, onHoverEnter, onHoverLeave }) {
  return (
    <div className="flex flex-col w-full px-[10px] py-20 relative">
      {features.map((feature, index) => {
        const IconComponent = ICON_MAP[feature.icon];
        const isActive = activeIndex === feature.id;

        return (
          <div
            key={feature.id}
            className="w-full flex justify-center mb-[40vh] last:mb-0"
            style={{
              position: 'sticky',
              top: `calc(15vh + ${index * 24}px)`,
              zIndex: index
            }}
          >
            <article
              className={`
                bento-card relative rounded-[calc(var(--radius-card)+8px)] p-12 flex flex-col gap-6
                cursor-pointer border overflow-hidden w-full max-w-6xl
              `}
              style={{
                backgroundColor: 'var(--color-bg)',
                backgroundImage: 'var(--gradient-card)',
                borderColor: isActive ? 'var(--color-border-hover)' : 'var(--color-border)',
                minHeight: '400px',
                boxShadow: '0 -10px 30px rgba(0,0,0,0.2)'
              }}
              onMouseEnter={() => onHoverEnter(feature.id)}
              onMouseLeave={onHoverLeave}
            >
              {/* Animated border glow */}
              <div
                className="absolute inset-0 rounded-[calc(var(--radius-card)+8px)] pointer-events-none transition-opacity duration-300"
                style={{
                  opacity: isActive ? 1 : 0,
                  boxShadow: 'inset 0 0 0 1px var(--color-primary), 0 20px 48px rgba(255,200,1,0.1)',
                }}
                aria-hidden="true"
              />

              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-150"
                style={{
                  backgroundColor: isActive
                    ? 'rgba(255, 200, 1, 0.15)'
                    : 'rgba(217, 232, 226, 0.08)',
                  transform: isActive ? 'rotate(6deg)' : 'rotate(0deg)',
                }}
              >
                {IconComponent && (
                  <IconComponent
                    className="w-8 h-8 transition-colors duration-150"
                    style={{
                      color: isActive ? 'var(--color-primary)' : 'var(--color-muted)',
                    }}
                    aria-hidden="true"
                  />
                )}
              </div>

              <h3
                className="font-semibold text-3xl"
                style={{ color: 'var(--color-text)' }}
              >
                {feature.title}
              </h3>

              <p className="text-lg leading-relaxed max-w-2xl" style={{ color: 'var(--color-muted)' }}>
                {feature.description}
              </p>

              <div className="mt-auto pt-6">
                <MiniViz type={VIZ_MAP[feature.id] || 'progress'} isActive={isActive} />
              </div>
            </article>
          </div>
        );
      })}
    </div>
  );
}
