import { memo, useMemo } from 'react';
import { usePricing } from '../../hooks/usePricing';
import { computePrice } from '../../utils/computePrice';
import { motion, AnimatePresence } from 'framer-motion';

const PriceDisplay = memo(function PriceDisplay({ basePriceUSD }) {
  const { currency, cycle } = usePricing();

  const priceData = useMemo(
    () => computePrice(basePriceUSD, currency, cycle),
    [basePriceUSD, currency, cycle]
  );

  return (
    <div className="flex flex-col items-start min-h-[80px]">
      <div className="flex items-baseline gap-1">
        <div className="overflow-hidden relative h-[48px] flex items-center">
          <AnimatePresence mode="popLayout">
            <motion.span
              key={`${currency}-${cycle}-${basePriceUSD}`}
              initial={{ y: 20, opacity: 0, filter: 'blur(4px)' }}
              animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              exit={{ y: -20, opacity: 0, filter: 'blur(4px)' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="text-5xl font-bold tabular-nums text-white"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {priceData.perMonth}
            </motion.span>
          </AnimatePresence>
        </div>
        <span className="text-[15px] font-medium text-white/50">
          /mo
        </span>
      </div>
      <div className="h-[20px] mt-1">
        <AnimatePresence mode="wait">
          {priceData.isAnnual && (
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-[13px] text-white/50 block"
            >
              {priceData.perYear} billed annually
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
});

export default PriceDisplay;
