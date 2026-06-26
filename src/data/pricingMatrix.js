export const CURRENCY_CONFIG = {
  USD: { symbol: '$', multiplier: 1.0 },
  EUR: { symbol: '€', multiplier: 0.92 },
  INR: { symbol: '₹', multiplier: 83 },
};

export const ANNUAL_MULTIPLIER = 0.8;

export const PLANS = [
  {
    key: 'Starter',
    base: 19,
    description: 'For solo analysts and early-stage teams',
    highlight: false,
    features: [
      '5 data pipelines',
      '10GB storage',
      'Community support',
      '3 integrations',
      'Basic dashboards',
    ],
  },
  {
    key: 'Pro',
    base: 49,
    description: 'For growing teams that run on data',
    highlight: true,
    badge: 'Most Popular',
    features: [
      'Unlimited pipelines',
      '500GB storage',
      'Priority support',
      '50+ integrations',
      'Advanced analytics',
      'Custom alerts',
    ],
  },
  {
    key: 'Enterprise',
    base: 99,
    description: 'For organizations at scale',
    highlight: false,
    features: [
      'Unlimited everything',
      'Dedicated infrastructure',
      'SLA guarantee',
      '200+ integrations',
      'SSO & audit logs',
      'Custom SLAs',
      'Dedicated CSM',
    ],
  },
];
