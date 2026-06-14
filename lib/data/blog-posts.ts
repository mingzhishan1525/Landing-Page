export type SeoArticle = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  keyDates: string[];
  riskLevel: "Low" | "Medium" | "High";
  recommendedOrderDeadline: string;
  howRadarHelps: string[];
  faqs: { question: string; answer: string }[];
  relatedTools: { label: string; href: string }[];
};

export const seoArticles: SeoArticle[] = [
  {
    slug: "chinese-new-year-2027",
    title: "Chinese New Year 2027 Supply Chain Planning Guide",
    metaTitle: "Chinese New Year 2027 Supply Chain Guide | China Supply Radar",
    metaDescription:
      "Plan reorder deadlines, supplier buffers, and stockout prevention before Chinese New Year 2027 factory shutdowns.",
    intro:
      "Chinese New Year 2027 is the most important supply risk window for ecommerce sellers sourcing from China.",
    keyDates: ["Holiday starts: 2027-02-06", "Estimated shutdown window: 2027-02-06 to 2027-02-20"],
    riskLevel: "High",
    recommendedOrderDeadline: "2027-01-01 for many standard ecommerce replenishment orders.",
    howRadarHelps: [
      "Highlights China holiday impact near reorder decisions.",
      "Shows upcoming stockout risk before supplier delays hit inventory.",
      "Helps sellers compare lead time, sales velocity, and safety buffers.",
    ],
    faqs: [
      {
        question: "When should I order before Chinese New Year 2027?",
        answer:
          "Many sellers should review reorder windows at least 45-60 days before the official holiday starts.",
      },
      {
        question: "Do factories slow down before the official holiday?",
        answer:
          "Yes. Supplier response times, production capacity, and shipping handoffs often slow before the official dates.",
      },
    ],
    relatedTools: [
      { label: "Holiday Calculator", href: "/tools/holiday-calculator" },
      { label: "Reorder Calculator", href: "/tools/reorder-calculator" },
    ],
  },
  {
    slug: "china-national-day-2026",
    title: "China National Day 2026 Reorder Planning Guide",
    metaTitle: "China National Day 2026 Reorder Guide | China Supply Radar",
    metaDescription:
      "Prepare ecommerce reorder timing and supplier buffers before China National Day 2026.",
    intro:
      "National Day 2026 can create production, communication, and domestic logistics delays for China sourcing teams.",
    keyDates: ["Holiday starts: 2026-10-01", "Typical holiday window: 2026-10-01 to 2026-10-07"],
    riskLevel: "High",
    recommendedOrderDeadline: "2026-09-01 for products with long supplier lead times.",
    howRadarHelps: [
      "Adds holiday risk to inventory planning.",
      "Prioritizes products in the reorder queue.",
      "Surfaces stockout risk before holiday disruption.",
    ],
    faqs: [
      {
        question: "Is National Day a major supplier risk?",
        answer:
          "Yes. It is one of China's major Golden Week periods and can affect factory and shipping timelines.",
      },
      {
        question: "Should Shopify sellers reorder before National Day?",
        answer:
          "Sellers with limited inventory cover should review reorder windows before the holiday period.",
      },
    ],
    relatedTools: [
      { label: "Holiday Calculator", href: "/tools/holiday-calculator" },
      { label: "Stockout Risk Calculator", href: "/tools/stockout-risk-calculator" },
    ],
  },
  {
    slug: "china-holiday-calendar-2027",
    title: "China Holiday Calendar 2027 for Ecommerce Sellers",
    metaTitle: "China Holiday Calendar 2027 | China Supply Radar",
    metaDescription:
      "Track 2027 China holidays that may affect factories, reorder timing, and ecommerce inventory risk.",
    intro:
      "A China holiday calendar helps ecommerce teams plan reorder timing before factory slowdowns begin.",
    keyDates: ["Chinese New Year: 2027-02-06", "Labor Day: 2027-05-01", "Dragon Boat Festival: 2027-06-09"],
    riskLevel: "High",
    recommendedOrderDeadline: "Review reorder windows 45-60 days before major holiday periods.",
    howRadarHelps: [
      "Maps holiday dates into reorder planning workflows.",
      "Connects inventory cover to supplier lead time.",
      "Supports both Shopify App and Chrome Extension workflows.",
    ],
    faqs: [
      {
        question: "Which China holiday creates the most supply risk?",
        answer:
          "Chinese New Year is usually the highest-risk holiday for China sourcing.",
      },
      {
        question: "Can short holidays still affect suppliers?",
        answer:
          "Yes. Shorter holidays can still slow communication, production scheduling, and logistics handoffs.",
      },
    ],
    relatedTools: [
      { label: "Holiday Calculator", href: "/tools/holiday-calculator" },
    ],
  },
  {
    slug: "china-factory-shutdown-guide",
    title: "China Factory Shutdown Guide for Ecommerce Reorders",
    metaTitle: "China Factory Shutdown Guide | China Supply Radar",
    metaDescription:
      "Understand China factory shutdown periods and how to protect ecommerce inventory from supplier delays.",
    intro:
      "Factory shutdown risk is not only about the official holiday dates. Slowdowns can start earlier and recovery can take time.",
    keyDates: ["Chinese New Year shutdowns often begin before official dates", "Golden Week can interrupt production and logistics"],
    riskLevel: "High",
    recommendedOrderDeadline: "Use supplier lead time plus a 14-21 day holiday buffer.",
    howRadarHelps: [
      "Calculates reorder windows with holiday risk.",
      "Shows products with upcoming stockout exposure.",
      "Keeps supplier risk notes close to reorder decisions.",
    ],
    faqs: [
      {
        question: "Why do factory shutdowns affect stockouts?",
        answer:
          "If production or shipping pauses while inventory keeps selling, products may stock out before replenishment arrives.",
      },
      {
        question: "How much buffer should I add?",
        answer:
          "A 14-21 day buffer is common for major China holiday windows, depending on supplier reliability.",
      },
    ],
    relatedTools: [
      { label: "Reorder Calculator", href: "/tools/reorder-calculator" },
      { label: "Stockout Risk Calculator", href: "/tools/stockout-risk-calculator" },
    ],
  },
  {
    slug: "shopify-chinese-new-year-guide",
    title: "Shopify Chinese New Year Inventory Planning Guide",
    metaTitle: "Shopify Chinese New Year Inventory Planning | China Supply Radar",
    metaDescription:
      "Plan Shopify inventory and reorder timing before Chinese New Year supplier delays create stockout risk.",
    intro:
      "Shopify sellers need to connect sales velocity, inventory cover, and supplier lead time before Chinese New Year.",
    keyDates: ["Chinese New Year 2027 starts: 2027-02-06"],
    riskLevel: "High",
    recommendedOrderDeadline: "Review reorder queues at least 45 days before the holiday starts.",
    howRadarHelps: [
      "Uses Shopify inventory and order data to estimate sales velocity.",
      "Prioritizes products in a reorder queue.",
      "Adds China holiday impact to inventory planning.",
    ],
    faqs: [
      {
        question: "Why does Shopify inventory planning need holiday context?",
        answer:
          "Inventory cover can look healthy until supplier lead time and holiday shutdowns are included.",
      },
      {
        question: "Can China Supply Radar help with Shopify sales velocity?",
        answer:
          "Yes. The Shopify App is designed to support sales velocity and reorder planning workflows.",
      },
    ],
    relatedTools: [
      { label: "Reorder Calculator", href: "/tools/reorder-calculator" },
    ],
  },
  {
    slug: "amazon-chinese-new-year-guide",
    title: "Amazon Chinese New Year Reorder Planning Guide",
    metaTitle: "Amazon Chinese New Year Reorder Planning | China Supply Radar",
    metaDescription:
      "Avoid Amazon stockouts caused by Chinese New Year factory delays and long replenishment lead times.",
    intro:
      "Amazon sellers sourcing from China need to plan supplier purchase orders before factory slowdowns begin.",
    keyDates: ["Chinese New Year 2027 starts: 2027-02-06"],
    riskLevel: "High",
    recommendedOrderDeadline: "Review supplier orders 60 days before the holiday for long lead-time products.",
    howRadarHelps: [
      "Calculates safe reorder windows.",
      "Shows holiday conflict warnings.",
      "Helps compare supplier lead time and inventory cover.",
    ],
    faqs: [
      {
        question: "Why do Amazon sellers need earlier reorder planning?",
        answer:
          "FBA replenishment often includes supplier production, international freight, receiving, and marketplace processing time.",
      },
      {
        question: "Can I use the free tools without Shopify?",
        answer:
          "Yes. The calculators can support Amazon and independent ecommerce planning workflows.",
      },
    ],
    relatedTools: [
      { label: "Holiday Calculator", href: "/tools/holiday-calculator" },
    ],
  },
  {
    slug: "tiktok-shop-chinese-new-year-guide",
    title: "TikTok Shop Chinese New Year Stockout Guide",
    metaTitle: "TikTok Shop Chinese New Year Stockout Guide | China Supply Radar",
    metaDescription:
      "Protect TikTok Shop inventory from Chinese New Year stockouts, supplier delays, and reorder timing mistakes.",
    intro:
      "TikTok Shop demand can move quickly, so sellers need reorder buffers before China holiday slowdowns.",
    keyDates: ["Chinese New Year 2027 starts: 2027-02-06"],
    riskLevel: "High",
    recommendedOrderDeadline: "Review fast-moving products 45-60 days before the holiday starts.",
    howRadarHelps: [
      "Helps sellers estimate stockout risk.",
      "Adds holiday buffers to reorder timing.",
      "Keeps supply risk visible before inventory runs out.",
    ],
    faqs: [
      {
        question: "Why is TikTok Shop stockout risk different?",
        answer:
          "Demand spikes can be sudden, making inventory cover and supplier lead time harder to manage manually.",
      },
      {
        question: "What should I review first?",
        answer:
          "Start with daily sales, current inventory, supplier lead time, and nearby China holidays.",
      },
    ],
    relatedTools: [
      { label: "Stockout Risk Calculator", href: "/tools/stockout-risk-calculator" },
    ],
  },
];

export function getSeoArticle(slug: string) {
  return seoArticles.find((article) => article.slug === slug);
}
