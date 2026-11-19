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
    "Explore a heuristic stockout score, inventory coverage and reorder timing using your planning assumptions.",
  alternates: {
    canonical: "/tools/stockout-risk-calculator",
  },
  openGraph: {
    title: "Stockout Risk Calculator | China Supply Radar",
    description:
      "Explore a heuristic stockout score, inventory coverage and reorder timing using your planning assumptions.",
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
        <section className="mt-12 max-w-3xl space-y-5 leading-8">
          <h2 className="text-2xl font-bold">How is stockout risk scored?</h2>
          <p>The score starts with inventory coverage and adds risk for long lead times, nearby holidays, and high-risk supplier regions.</p>
          <p>This is a heuristic planning score, not a measured probability of a stockout or an assessment of an individual supplier. Region categories are general assumptions; confirm your supplier’s actual capacity and dates directly.</p>
          <p>Coverage equals inventory divided by positive daily sales. The suggested reorder window subtracts lead time from coverage, without a separate safety buffer or incoming purchase orders. Zero daily sales cannot produce a meaningful coverage estimate.</p>
          <p>Illustrative Inventory Value multiplies your inventory by an assumed $24 per unit. It is not your actual selling price, profit or predicted lost revenue.</p>
          <p>For a worked timing example and an explicit buffer, use the <a className="text-teal-700 underline dark:text-teal-300" href="/tools/reorder-calculator/">reorder calculator</a>. Confirm production and delivery milestones with the <a className="text-teal-700 underline dark:text-teal-300" href="/blog/supplier-lead-time-checklist/">supplier lead-time checklist</a>.</p>
        </section>
      </section>
    </main>
  );
}
