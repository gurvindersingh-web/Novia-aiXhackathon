import { usePricing } from '../../hooks/usePricing';
import { motion } from 'framer-motion';

export default function BillingToggle() {
  const { cycle, toggleCycle } = usePricing();
  const isAnnual = cycle === 'annual';

  return (
    <div className="flex items-center gap-4">
      <span 
        className={`text-lg font-semibold transition-colors duration-300 ${!isAnnual ? 'text-white' : 'text-white/40'}`}
      >
        Monthly
      </span>

      <button
        onClick={toggleCycle}
        className="relative w-[52px] h-[28px] rounded-full flex items-center px-1 transition-colors duration-300"
        style={{
          backgroundColor: '#112a32',
          border: '1px solid rgba(255,255,255,0.05)',
          boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2)'
        }}
        aria-label="Toggle billing cycle"
      >
        <motion.div
          className="w-5 h-5 rounded-full"
          style={{ backgroundColor: '#FF9932' }}
          layout
          initial={false}
          animate={{
            x: isAnnual ? 24 : 0
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30
          }}
        />
      </button>

      <span 
        className={`text-lg font-bold transition-colors duration-300 flex items-center gap-2 ${isAnnual ? 'text-white' : 'text-white/40'}`}
      >
        Annually
        <span 
          className="text-sm"
          style={{ color: '#FF9932' }}
        >
          -20%
        </span>
      </span>
    </div>
  );
}
