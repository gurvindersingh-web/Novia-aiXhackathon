import { useState, useCallback, createContext, useContext } from 'react';

const PricingContext = createContext(null);

export function PricingProvider({ children }) {
  const [currency, setCurrency] = useState('USD');
  const [cycle, setCycle] = useState('monthly');

  const toggleCycle = useCallback(
    () => setCycle((c) => (c === 'monthly' ? 'annual' : 'monthly')),
    []
  );
  const changeCurrency = useCallback((c) => setCurrency(c), []);

  return (
    <PricingContext.Provider
      value={{ currency, cycle, toggleCycle, changeCurrency }}
    >
      {children}
    </PricingContext.Provider>
  );
}

export function usePricing() {
  const ctx = useContext(PricingContext);
  if (!ctx) {
    throw new Error('usePricing must be used within a PricingProvider');
  }
  return ctx;
}
