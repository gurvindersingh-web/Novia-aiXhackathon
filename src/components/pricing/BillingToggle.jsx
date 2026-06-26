import { usePricing } from '../../hooks/usePricing';
import { motion } from 'framer-motion';

export default function BillingToggle() {
  const { cycle, toggleCycle } = usePricing();
  const isAnnual = cycle === 'annual';

  return (
    <div
      className="relative flex items-center p-1.5 rounded-full border shadow-inner overflow-hidden"
      style={{
        borderColor: 'rgba(255,255,255,0.08)',
        backgroundColor: 'rgba(20, 35, 45, 0.5)',
        backdropFilter: 'blur(20px)',
      }}
      role="group"
      aria-label="Billing cycle"
    >
      <button
        onClick={() => !isAnnual || toggleCycle()}
        className={`relative z-10 px-6 py-2.5 text-sm font-semibold rounded-full transition-colors duration-300 ${!isAnnual ? 'text-white' : 'text-white/50 hover:text-white/80'}`}
      >
        {!isAnnual && (
          <motion.div
            layoutId="billing-pill"
            className="absolute inset-0 rounded-full"
            style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
            }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        <span className="relative z-20">Monthly</span>
      </button>

      <button
        onClick={() => isAnnual || toggleCycle()}
        className={`relative z-10 px-6 py-2.5 text-sm font-semibold rounded-full transition-colors duration-300 flex items-center gap-2 ${isAnnual ? 'text-white' : 'text-white/50 hover:text-white/80'}`}
      >
        {isAnnual && (
          <motion.div
            layoutId="billing-pill"
            className="absolute inset-0 rounded-full"
            style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
            }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        <span className="relative z-20 flex items-center gap-2">
          Annual
          <span
            className="text-[10px] font-bold px-2 py-0.5 rounded-full"
            style={{
              background: 'linear-gradient(135deg, #FFC801, #FF9932)',
              color: '#172B36',
              boxShadow: '0 0 10px rgba(255, 153, 50, 0.4)'
            }}
          >
            Save 20%
          </span>
        </span>
      </button>
    </div>
  );
}
