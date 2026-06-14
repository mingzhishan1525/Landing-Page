import StockoutRiskCalculator from "./StockoutRiskCalculator";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How is stockout risk scored?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The score starts with inventory coverage and adds risk for long lead times, nearby holidays, and high-risk supplier regions.",
      },
    },
  ],
};

export const metadata = {
  title: "Stockout Risk Calculator | China Supply Radar",
  description:
    "Calculate stockout risk score, revenue at risk, suggested reorder windows, and China supplier risk.",
  alternates: {
    canonical: "/tools/stockout-risk-calculator",
  },
  openGraph: {
    title: "Stockout Risk Calculator | China Supply Radar",
    description:
      "Calculate stockout risk score, revenue at risk, suggested reorder windows, and China supplier risk.",
    url: "/tools/stockout-risk-calculator",
  },
};

export default function StockoutRiskCalculatorPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-5 py-14 text-slate-950 dark:bg-slate-950 dark:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="mx-auto max-w-6xl">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
          Free Tool
        </p>
        <h1 className="mt-4 text-4xl font-bold">Stockout Risk Calculator</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          Estimate stockout exposure using inventory, sales velocity, supplier
          lead time, region risk, and upcoming holidays.
        </p>
        <div className="mt-8">
          <StockoutRiskCalculator />
        </div>
      </section>
    </main>
  );
}
