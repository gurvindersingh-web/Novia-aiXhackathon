// Single source of truth — used by BOTH BentoGrid and Accordion
// Icon values must match the SVG filename stem
export const FEATURES = [
  {
    id: 0,
    icon: 'search',
    title: 'Matrix-Driven Pricing & Performance-Isolated Currency Switcher',
    description:
      '→The Blueprint: A pricing tier component that toggles between Monthly and Annual billing cycles across three currencies: INR (₹), USD ($), and EUR (€).\n\n→The Data Logic: You must compute the final values dynamically using a multi-dimensional configuration object/matrix that factors in a base tier rate, a flat 20% annual discount multiplier, and regional tariff variables.',
    size: 'large',
  },
  {
    id: 1,
    icon: 'arrow-trending-up',
    title: 'Predictive Analytics',
    description:
      'Forecast trends before they emerge using ensemble ML models trained on your proprietary data streams.',
    size: 'small',
  },
  {
    id: 2,
    icon: 'cog-8-tooth',
    title: 'Workflow Automation Engine',
    description:
      'Build, deploy, and monitor multi-step automation workflows with a visual DAG editor — no code required.',
    size: 'small',
  },
  {
    id: 3,
    icon: 'chart-pie',
    title: 'Real-time Insights Dashboard',
    description:
      'Live metrics, custom KPI widgets, and shareable reports that update in under 200ms.',
    size: 'small',
  },
  {
    id: 4,
    icon: 'arrow-path',
    title: 'Self-healing Pipelines',
    description:
      'Detect, diagnose, and auto-repair broken data pipelines using anomaly detection and rollback logic.',
    size: 'small',
  },
  {
    id: 5,
    icon: 'link',
    title: '200+ Native Integrations',
    description:
      'Plug into any data source — Postgres, Salesforce, S3, Kafka — via pre-built connectors or the REST API.',
    size: 'small',
  },
  {
    id: 6,
    icon: 'cube-16-solid',
    title: 'Modular API Blocks',
    description:
      'Compose complex data transformations from typed, versioned API blocks you can test in isolation.',
    size: 'small',
  },
];
