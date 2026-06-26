import { CURRENCY_CONFIG, ANNUAL_MULTIPLIER } from '../data/pricingMatrix';

/**
 * Pure function — no side effects, no React.
 * @param {number} basePriceUSD - Base monthly price in USD
 * @param {string} currencyKey - One of 'USD', 'EUR', 'INR'
 * @param {string} cycle - 'monthly' or 'annual'
 * @returns {{ perMonth: string, perYear: string, isAnnual: boolean, rawMonthly: number }}
 */
export function computePrice(basePriceUSD, currencyKey, cycle) {
  const { symbol, multiplier } = CURRENCY_CONFIG[currencyKey];
  const discount = cycle === 'annual' ? ANNUAL_MULTIPLIER : 1;
  const monthly = basePriceUSD * multiplier * discount;
  const annual = monthly * 12;

  const fmt = (n) =>
    currencyKey === 'INR'
      ? Math.round(n)
      : parseFloat(n.toFixed(2));

  return {
    perMonth: `${symbol}${fmt(monthly)}`,
    perYear: `${symbol}${fmt(annual)}`,
    isAnnual: cycle === 'annual',
    rawMonthly: monthly,
  };
}
