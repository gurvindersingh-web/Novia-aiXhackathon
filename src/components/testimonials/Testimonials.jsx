import { memo, useState, useCallback } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { TESTIMONIALS } from '../../data/testimonials';
import ChevronLeftIcon from '../../assets/icons/chevron-left.svg?react';
import ChevronRightIcon from '../../assets/icons/chevron-right.svg?react';

const Testimonials = memo(function Testimonials() {
  const revealRef = useScrollReveal();
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPrev = useCallback(
    () => setCurrentSlide((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1)),
    []
  );
  const goToNext = useCallback(
    () => setCurrentSlide((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1)),
    []
  );

  return (
    <section
      id="testimonials"
      ref={revealRef}
      className="section-padding scroll-reveal"
      aria-label="Customer testimonials"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-6 mb-16">
          <span className="section-label">Testimonials</span>
          <h2
            className="text-center leading-tight tracking-tight max-w-2xl"
            style={{
              fontSize: 'var(--text-5xl)',
              fontFamily: 'var(--font-display)',
              color: 'var(--color-text)',
            }}
          >
            Loved by{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'var(--gradient-primary)' }}
            >
              data teams
            </span>
          </h2>
        </div>

        <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>

        <div className="md:hidden">
          <TestimonialCard testimonial={TESTIMONIALS[currentSlide]} />
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goToPrev}
              aria-label="Previous testimonial"
              className="p-2.5 rounded-full border transition-all duration-150 hover:border-[var(--color-primary)] hover:scale-105"
              style={{ borderColor: 'var(--color-border)' }}
            >
              <ChevronLeftIcon className="w-5 h-5" style={{ color: 'var(--color-muted)' }} />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <span
                  key={i}
                  className="w-2 h-2 rounded-full transition-colors duration-150"
                  style={{
                    backgroundColor:
                      i === currentSlide ? 'var(--color-primary)' : 'var(--color-surface)',
                  }}
                />
              ))}
            </div>
            <button
              onClick={goToNext}
              aria-label="Next testimonial"
              className="p-2.5 rounded-full border transition-all duration-150 hover:border-[var(--color-primary)] hover:scale-105"
              style={{ borderColor: 'var(--color-border)' }}
            >
              <ChevronRightIcon className="w-5 h-5" style={{ color: 'var(--color-muted)' }} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

function TestimonialCard({ testimonial }) {
  const { quote, name, role, company, initials } = testimonial;

  return (
    <article className="card">
      {/* Star rating */}
      <div className="flex gap-0.5 mb-5" aria-label="5 out of 5 stars">
        {[...Array(5)].map((_, i) => (
          <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="var(--color-primary)" aria-hidden="true">
            <path d="M8 1.5l1.76 3.57 3.94.57-2.85 2.78.67 3.92L8 10.27l-3.52 1.85.67-3.92L2.3 5.64l3.94-.57L8 1.5z" />
          </svg>
        ))}
      </div>

      <blockquote
        className="leading-relaxed mb-8"
        style={{
          fontSize: 'var(--text-sm)',
          color: 'var(--color-muted)',
        }}
      >
        &ldquo;{quote}&rdquo;
      </blockquote>

      <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: 'var(--color-border)' }}>
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
          style={{
            background: 'var(--gradient-primary)',
            color: 'var(--color-text-dark)',
            fontFamily: 'var(--font-display)',
          }}
          aria-hidden="true"
        >
          {initials}
        </div>
        <div>
          <p className="font-semibold leading-none" style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text)' }}>
            {name}
          </p>
          <p className="leading-none mt-1" style={{ fontSize: 'var(--text-xs)', color: 'var(--color-muted)' }}>
            {role}, {company}
          </p>
        </div>
      </div>
    </article>
  );
}

export default Testimonials;
