import { usePricing } from '../../hooks/usePricing';
import { CURRENCY_CONFIG } from '../../data/pricingMatrix';
import { motion } from 'framer-motion';

const CURRENCIES = Object.keys(CURRENCY_CONFIG);

export default function CurrencySelector() {
  const { currency, changeCurrency } = usePricing();

  return (
    <div
      className="relative flex items-center p-1 rounded-full border shadow-inner overflow-hidden"
      style={{
        borderColor: 'rgba(255,255,255,0.08)',
        backgroundColor: 'rgba(20, 35, 45, 0.5)',
        backdropFilter: 'blur(20px)',
      }}
      role="radiogroup"
      aria-label="Currency selector"
    >
      {CURRENCIES.map((key) => {
        const isSelected = currency === key;
        const { symbol } = CURRENCY_CONFIG[key];
        return (
          <button
            key={key}
            role="radio"
            aria-checked={isSelected}
            onClick={() => changeCurrency(key)}
            className={`relative z-10 px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${isSelected ? 'text-white' : 'text-white/50 hover:text-white/80'}`}
          >
            {isSelected && (
              <motion.div
                layoutId="currency-pill"
                className="absolute inset-0 rounded-full"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-20">{symbol} {key}</span>
          </button>
        );
      })}
    </div>
  );
}
