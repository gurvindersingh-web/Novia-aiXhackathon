import { useState, useEffect } from 'react';
import { PLANS } from '../../data/pricingMatrix';
import BillingToggle from './BillingToggle';
import CurrencySelector from './CurrencySelector';
import PricingCard from './PricingCard';

export default function PricingModal({ isOpen, onClose }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      setIsVisible(false);
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ease-in-out ${
          isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        style={{
          background: 'linear-gradient(135deg, rgba(23, 43, 54, 0.8) 0%, rgba(17, 76, 90, 0.8) 100%)',
          backdropFilter: 'blur(8px)',
        }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center px-4 transition-all duration-300 ease-in-out pointer-events-none ${
          isVisible ? 'pointer-events-auto' : ''
        }`}
        style={{
          animation: isVisible ? 'modalIn 400ms ease-out forwards' : 'modalOut 300ms ease-in forwards',
        }}
      >
        <style>{`
          @keyframes modalIn {
            from {
              opacity: 0;
              transform: scale(0.95) translateY(20px);
            }
            to {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }
          @keyframes modalOut {
            from {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
            to {
              opacity: 0;
              transform: scale(0.95) translateY(20px);
            }
          }
          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .modal-card {
            animation: slideInUp 500ms ease-out both;
          }
          .modal-card:nth-child(2) {
            animation-delay: 100ms;
          }
          .modal-card:nth-child(3) {
            animation-delay: 200ms;
          }
        `}</style>

        <div
          className="w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-2xl border backdrop-blur-xl"
          style={{
            background: 'linear-gradient(135deg, rgba(17, 76, 90, 0.95) 0%, rgba(15, 58, 71, 0.95) 100%)',
            borderColor: 'var(--color-border)',
            boxShadow: '0 32px 96px rgba(0, 0, 0, 0.5), 0 0 64px rgba(255, 200, 1, 0.08)',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 z-10 px-8 py-8 border-b flex items-center justify-between" style={{ borderColor: 'var(--color-border)' }}>
            <div className="flex-1">
              <h2
                className="text-3xl font-bold leading-tight mb-2"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-4xl)',
                  color: 'var(--color-text)',
                }}
              >
                Simple,{' '}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: 'var(--gradient-primary)' }}
                >
                  transparent pricing
                </span>
              </h2>
              <p style={{ color: 'var(--color-muted)', fontSize: 'var(--text-base)' }}>
                Choose the perfect plan for your data automation needs
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full border transition-all duration-150 hover:bg-white/[0.08] hover:border-[var(--color-primary)]"
              style={{ borderColor: 'var(--color-border)' }}
              aria-label="Close pricing modal"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--color-muted)' }}>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="px-8 py-12">
            {/* Controls */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <BillingToggle />
              <CurrencySelector />
            </div>

            {/* Pricing Cards Grid */}
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {PLANS.map((plan, index) => (
                <div
                  key={plan.key}
                  className="modal-card"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <PricingCard plan={plan} />
                </div>
              ))}
            </div>

            {/* FAQ Section */}
            <div className="mt-20 pt-16 border-t" style={{ borderColor: 'var(--color-border)' }}>
              <h3
                className="text-2xl font-bold text-center mb-12"
                style={{
                  fontFamily: 'var(--font-display)',
                  color: 'var(--color-text)',
                }}
              >
                Frequently asked questions
              </h3>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {[
                  {
                    q: 'Can I change plans anytime?',
                    a: 'Yes! Upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.',
                  },
                  {
                    q: 'What payment methods do you accept?',
                    a: 'We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.',
                  },
                  {
                    q: 'Do you offer discounts for annual billing?',
                    a: 'Yes, all plans include 20% discount when you switch to annual billing.',
                  },
                  {
                    q: 'Is there a free trial?',
                    a: 'Absolutely! Start with our free tier and upgrade anytime. No credit card required.',
                  },
                ].map((faq, i) => (
                  <div key={i} className="space-y-3">
                    <h4
                      className="font-semibold"
                      style={{
                        fontSize: 'var(--text-base)',
                        color: 'var(--color-text)',
                      }}
                    >
                      {faq.q}
                    </h4>
                    <p
                      style={{
                        fontSize: 'var(--text-sm)',
                        color: 'var(--color-muted)',
                        lineHeight: '1.6',
                      }}
                    >
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 pt-12 border-t text-center" style={{ borderColor: 'var(--color-border)' }}>
              <p
                className="mb-6"
                style={{
                  fontSize: 'var(--text-base)',
                  color: 'var(--color-muted)',
                }}
              >
                Ready to get started? Create your account today and start automating your data workflows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  className="btn-primary"
                  onClick={onClose}
                >
                  Get Started for Free
                </button>
                <button
                  className="btn-secondary"
                  onClick={onClose}
                >
                  Schedule a Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
