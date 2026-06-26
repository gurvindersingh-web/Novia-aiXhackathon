import { memo } from 'react';
import PriceDisplay from './PriceDisplay';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const PricingCard = memo(function PricingCard({ plan }) {
  const isFeatured = plan.highlight;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`
        relative flex flex-col gap-8 w-full
        ${isFeatured ? 'h-[105%] -mt-[2.5%]' : 'h-full'}
      `}
      style={{
        padding: '40px',
        borderRadius: '28px',
        background: 'rgba(20, 35, 45, 0.75)',
        backdropFilter: 'blur(20px)',
        border: isFeatured 
          ? '1px solid transparent' 
          : '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: isFeatured 
          ? '0 32px 64px rgba(255, 153, 50, 0.15)' 
          : '0 24px 48px rgba(0, 0, 0, 0.2)',
        backgroundImage: isFeatured 
          ? 'linear-gradient(rgba(20, 35, 45, 0.9), rgba(20, 35, 45, 0.9)), linear-gradient(135deg, #FFC801, #FF9932)'
          : 'none',
        backgroundOrigin: 'border-box',
        backgroundClip: isFeatured ? 'padding-box, border-box' : 'border-box',
      }}
    >
      {plan.badge && (
        <span
          className="absolute -top-4 left-1/2 -translate-x-1/2 text-sm font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg"
          style={{
            background: 'linear-gradient(135deg, #FFC801, #FF9932)',
            color: '#172B36',
          }}
        >
          ⭐ {plan.badge}
        </span>
      )}

      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-bold text-white tracking-tight">
          {plan.key}
        </h3>
        <p className="text-[15px] text-white/60">
          {plan.description}
        </p>
      </div>

      <PriceDisplay basePriceUSD={plan.base} />

      <motion.button
        whileHover={{ scale: 1.02, boxShadow: '0 8px 32px rgba(255,153,50,0.3)' }}
        whileTap={{ scale: 0.98 }}
        className={`w-full flex items-center justify-center font-semibold transition-all duration-300 ${
          isFeatured 
            ? 'text-[#172B36] border-none' 
            : 'text-white border border-white/10 hover:border-white/20 hover:bg-white/5'
        }`}
        style={{
          height: '56px',
          borderRadius: '16px',
          background: isFeatured ? 'linear-gradient(135deg, #FFC801, #FF9932)' : 'transparent',
        }}
      >
        {plan.key === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
      </motion.button>

      <div className="h-[1px] w-full bg-white/10" />

      <ul className="flex flex-col gap-4">
        {plan.features.map((feature, idx) => (
          <li
            key={idx}
            className="flex items-start gap-3 text-[15px] text-white/70"
          >
            <span className="shrink-0 mt-0.5 rounded-full p-0.5 bg-white/5">
              <Check className="w-4 h-4 text-[#FF9932]" />
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
});

export default PricingCard;
