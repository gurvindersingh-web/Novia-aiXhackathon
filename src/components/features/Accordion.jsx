import { useRef, useEffect } from 'react';
import SearchIcon from '../../assets/icons/search.svg?react';
import ArrowTrendingUpIcon from '../../assets/icons/arrow-trending-up.svg?react';
import CogIcon from '../../assets/icons/cog-8-tooth.svg?react';
import ChartPieIcon from '../../assets/icons/chart-pie.svg?react';
import ArrowPathIcon from '../../assets/icons/arrow-path.svg?react';
import LinkIcon from '../../assets/icons/link.svg?react';
import CubeIcon from '../../assets/icons/cube-16-solid.svg?react';
import ChevronDownIcon from '../../assets/icons/chevron-down.svg?react';
import ChevronUpIcon from '../../assets/icons/chevron-up.svg?react';

const ICON_MAP = {
  'search': SearchIcon,
  'arrow-trending-up': ArrowTrendingUpIcon,
  'cog-8-tooth': CogIcon,
  'chart-pie': ChartPieIcon,
  'arrow-path': ArrowPathIcon,
  'link': LinkIcon,
  'cube-16-solid': CubeIcon,
};

export default function Accordion({ features, activeIndex, onToggle }) {
  const panelRefs = useRef({});
  const isInitialMount = useRef(true);

  useEffect(() => {
    // On initial mount, if activeIndex is set, open the panel WITHOUT animation
    if (isInitialMount.current && activeIndex !== null) {
      const el = panelRefs.current[activeIndex];
      if (el) {
        el.style.transition = 'none';
        el.style.maxHeight = `${el.scrollHeight}px`;
        el.style.opacity = '1';
        // Re-enable transition after paint
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            el.style.transition = '';
          });
        });
      }
    }
    isInitialMount.current = false;
  }, [activeIndex]);

  return (
    <div className="flex flex-col gap-3">
      {features.map((feature) => {
        const IconComponent = ICON_MAP[feature.icon];
        const isExpanded = activeIndex === feature.id;
        const panelId = `accordion-panel-${feature.id}`;
        const headerId = `accordion-header-${feature.id}`;

        return (
          <div
            key={feature.id}
            className="rounded-[var(--radius-card)] border overflow-hidden"
            style={{
              borderColor: isExpanded
                ? 'var(--color-border-hover)'
                : 'var(--color-border)',
              background: 'var(--gradient-card)',
            }}
          >
            {/* Header */}
            <button
              id={headerId}
              className="w-full flex items-center justify-between px-5 py-4 text-left transition-colors duration-150"
              onClick={() => onToggle(feature.id)}
              aria-expanded={isExpanded}
              aria-controls={panelId}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{
                    backgroundColor: isExpanded
                      ? 'rgba(255, 200, 1, 0.15)'
                      : 'rgba(217, 232, 226, 0.08)',
                  }}
                >
                  {IconComponent && (
                    <IconComponent
                      className="w-5 h-5"
                      style={{
                        color: isExpanded
                          ? 'var(--color-primary)'
                          : 'var(--color-muted)',
                      }}
                      aria-hidden="true"
                    />
                  )}
                </div>
                <h3
                  className="text-base font-semibold"
                  style={{
                    color: 'var(--color-text)',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {feature.title}
                </h3>
              </div>
              {isExpanded ? (
                <ChevronUpIcon
                  className="w-5 h-5 shrink-0"
                  style={{ color: 'var(--color-primary)' }}
                  aria-hidden="true"
                />
              ) : (
                <ChevronDownIcon
                  className="w-5 h-5 shrink-0"
                  style={{ color: 'var(--color-muted)' }}
                  aria-hidden="true"
                />
              )}
            </button>

            {/* Panel */}
            <div
              id={panelId}
              ref={(el) => { panelRefs.current[feature.id] = el; }}
              role="region"
              aria-labelledby={headerId}
              className="overflow-hidden"
              style={{
                maxHeight: isExpanded ? '500px' : '0',
                opacity: isExpanded ? 1 : 0,
                transition:
                  'max-height var(--transition-layout), opacity var(--transition-layout)',
              }}
            >
              <p
                className="px-5 pb-5 text-sm leading-relaxed"
                style={{ color: 'var(--color-muted)' }}
              >
                {feature.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
