import { useState, useEffect, useCallback } from 'react';

const MOBILE_BREAKPOINT = 768;

export function useActiveFeature() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.innerWidth < MOBILE_BREAKPOINT
  );

  useEffect(() => {
    const handler = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    window.addEventListener('resize', handler, { passive: true });
    return () => window.removeEventListener('resize', handler);
  }, []);

  const setActive = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  const toggleActive = useCallback((index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  }, []);

  return {
    activeIndex,
    setActiveIndex: setActive,
    toggleActiveIndex: toggleActive,
    isMobile,
  };
}
