import { useEffect, useRef } from 'react';
import { animate, onScroll } from 'animejs';

export default function CustomScrollbar() {
  const thumbRef = useRef(null);

  useEffect(() => {
    if (!thumbRef.current) return;

    let animation = null;
    
    try {
      const initAnimation = () => {
        const thumbHeight = 24;
        const trackHeight = window.innerHeight;
        
        return animate(thumbRef.current, {
          y: [0, trackHeight - thumbHeight],
          autoplay: onScroll(),
          easing: 'linear'
        });
      };

      animation = initAnimation();

      const handleResize = () => {
        if (animation && typeof animation.pause === 'function') {
          animation.pause();
        }
        animation = initAnimation();
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        if (animation && typeof animation.pause === 'function') animation.pause();
      };
    } catch (error) {
      console.error("AnimeJS onScroll error:", error);
    }
  }, []);

  return (
    <div 
      className="fixed right-0 top-0 h-screen w-12 z-50 pointer-events-none flex justify-end pr-2"
      aria-hidden="true"
    >
      {/* Ticks background (right-aligned) */}
      <div 
        className="absolute right-4 top-0 w-3 h-full opacity-30"
        style={{
          background: 'repeating-linear-gradient(to bottom, transparent, transparent 18px, var(--color-text) 18px, var(--color-text) 20px)'
        }}
      />
      {/* Scroll Thumb */}
      <div 
        ref={thumbRef}
        className="absolute right-4 top-0 w-4 h-6 rounded-sm bg-white"
        style={{
          boxShadow: '0 0 12px rgba(255, 255, 255, 0.4)',
          transform: 'translateX(2px)' // Center thumb slightly over the ticks
        }}
      />
    </div>
  );
}
