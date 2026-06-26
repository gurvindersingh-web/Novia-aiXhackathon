import { useState } from 'react';
import cubeSvgUrl from '../../assets/icons/cube-16-solid.svg';
import PillNav from '../navbar';

const NAV_ITEMS = [
  { label: 'Features', href: '#features' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Docs', href: '#docs' },
  { label: 'Start Free', href: '#start-free' },
];

export default function Navbar() {
  const [activeHref, setActiveHref] = useState(NAV_ITEMS[0].href);

  const rightNode = (
    <div className="flex items-center desktop-only">
      <a
        href="#signin"
        className="text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:bg-[var(--color-surface-2)] transition-colors flex items-center justify-center bg-[var(--color-surface)] p-2.5 md:p-3 rounded-full border border-[var(--color-border)] shadow-sm"
        aria-label="Profile"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </a>
    </div>
  );

  return (
    <header className="fixed top-4 left-0 right-0 z-50 transition-all duration-200 px-4">
      <PillNav
        logo={cubeSvgUrl}
        logoAlt="Novia AI"
        items={NAV_ITEMS}
        activeHref={activeHref}
        baseColor="rgba(255,255,255,0.05)"
        pillColor="rgba(255,255,255,0.1)"
        pillTextColor="rgba(255,255,255,0.7)"
        hoveredPillTextColor="#FFFFFF"
        className="backdrop-blur-xl border border-white/10 py-2.5 px-4 rounded-full mx-auto shadow-2xl bg-black/20"
        rightNode={rightNode}
      />
    </header>
  );
}
