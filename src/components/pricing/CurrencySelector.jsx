import { usePricing } from '../../hooks/usePricing';
import { CURRENCY_CONFIG } from '../../data/pricingMatrix';
import { motion } from 'framer-motion';

const CURRENCIES = Object.keys(CURRENCY_CONFIG);

export default function CurrencySelector() {
  const { currency, changeCurrency } = usePricing();

  return (
    <div
      className="relative flex items-center p-1.5 rounded-xl border"
      style={{
        borderColor: 'rgba(255,255,255,0.05)',
        backgroundColor: '#112a32',
        width: '320px',
        justifyContent: 'space-between'
      }}
      role="radiogroup"
      aria-label="Currency selector"
    >
      {CURRENCIES.map((key) => {
        const isSelected = currency === key;
        return (
          <button
            key={key}
            role="radio"
            aria-checked={isSelected}
            onClick={() => changeCurrency(key)}
            className={`relative z-10 flex-1 py-2 text-[15px] font-bold rounded-lg transition-colors duration-300 ${isSelected ? 'text-[#172B36]' : 'text-white/40 hover:text-white/60'}`}
          >
            {isSelected && (
              <motion.div
                layoutId="currency-thumb"
                className="absolute inset-0 rounded-lg"
                style={{
                  backgroundColor: '#FF9932',
                  boxShadow: '0 4px 12px rgba(255,153,50,0.3)'
                }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-20">{key}</span>
          </button>
        );
      })}
    </div>
  );
}
