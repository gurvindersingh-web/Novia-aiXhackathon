import { useState, useRef, useEffect } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { FAQ_ITEMS } from '../../data/faq';
import ChevronDownIcon from '../../assets/icons/chevron-down.svg?react';

export default function FAQ() {
  const revealRef = useScrollReveal();
  const [openId, setOpenId] = useState(null);

  return (
    <section
      id="faq"
      ref={revealRef}
      className="section-padding scroll-reveal"
      aria-label="Frequently asked questions"
    >
      <div className="container mx-auto max-w-3xl">
        <div className="flex flex-col items-center gap-6 mb-16">
          <span className="section-label">FAQ</span>
          <h2
            className="text-center leading-tight tracking-tight"
            style={{
              fontSize: 'var(--text-5xl)',
              fontFamily: 'var(--font-display)',
              color: 'var(--color-text)',
            }}
          >
            Questions,{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'var(--gradient-primary)' }}
            >
              answered.
            </span>
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {FAQ_ITEMS.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => setOpenId((prev) => (prev === item.id ? null : item.id))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ item, isOpen, onToggle }) {
  const panelRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (panelRef.current) {
      setHeight(isOpen ? panelRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <article
      className="rounded-[var(--radius-card)] border overflow-hidden transition-all duration-300 ease-in-out"
      style={{
        borderColor: isOpen ? 'var(--color-border-hover)' : 'var(--color-border)',
        background: 'rgba(17, 76, 90, 0.4)',
        backdropFilter: 'blur(10px)',
        boxShadow: isOpen ? '0 8px 32px rgba(0,0,0,0.2), 0 0 24px rgba(255,200,1,0.05)' : 'none',
      }}
    >
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-150 hover:bg-white/[0.02]"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <h3
          className="font-semibold"
          style={{
            fontSize: 'var(--text-base)',
            color: 'var(--color-text)',
          }}
        >
          {item.question}
        </h3>
        <ChevronDownIcon
          className="w-5 h-5 shrink-0 transition-transform duration-300 ease-in-out"
          style={{
            color: isOpen ? 'var(--color-primary)' : 'var(--color-muted)',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
          aria-hidden="true"
        />
      </button>

      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: `${height}px`, opacity: isOpen ? 1 : 0 }}
      >
        <p
          ref={panelRef}
          className="px-6 pb-5 leading-relaxed"
          style={{
            fontSize: 'var(--text-sm)',
            color: 'var(--color-muted)',
          }}
        >
          {item.answer}
        </p>
      </div>
    </article>
  );
}
