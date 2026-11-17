import Link from "next/link";
import ReorderCalculator from "./ReorderCalculator";

const calculationAnswer = "The calculator estimates days until stockout, then subtracts supplier lead time and safety stock days.";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How is the recommended reorder date calculated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: calculationAnswer,
      },
    },
  ],
};

export const metadata = {
  title: "Reorder Calculator | China Supply Radar",
  description:
    "Calculate days until stockout, reorder date, inventory cover days, and reorder risk.",
  alternates: {
    canonical: "/tools/reorder-calculator",
  },
  openGraph: {
    title: "Reorder Calculator | China Supply Radar",
    description:
      "Calculate days until stockout, reorder date, inventory cover days, and reorder risk.",
    url: "/tools/reorder-calculator",
  },
};

export default function ReorderCalculatorPage() {
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
        <h1 className="mt-4 text-4xl font-bold">Reorder Calculator</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          Estimate when to reorder based on current inventory, daily sales,
          supplier lead time, and safety stock.
        </p>
        <div className="mt-8">
          <ReorderCalculator />
        </div>
        <section className="mt-12 max-w-3xl space-y-5 leading-8">
          <h2 className="text-2xl font-bold">How is the recommended reorder date calculated?</h2>
          <p>{calculationAnswer}</p>
          <p><strong>Reorder window = current inventory ÷ daily sales − lead time days − safety stock days.</strong></p>
          <h2 className="text-2xl font-bold">Worked example: a two-day reorder window</h2>
          <p>With 300 sellable units, sales of 10 units per day, a total replenishment lead time of 21 days and a seven-day buffer, the calculation is 300 ÷ 10 − 21 − 7 = 2 days. These are synthetic inputs for illustration.</p>
          <p>Enter the full time until replacement stock becomes sellable as lead time. If production takes 14 days and shipping takes seven sequential days, enter 21 days. Include any additional receiving time that applies; avoid counting overlapping stages twice.</p>
          <p>“Safety Stock Days” is a buffer you choose. This tool does not calculate statistical safety stock or a probability of stocking out. Use positive daily sales and sellable inventory available for future demand. A zero-sales input cannot provide a meaningful coverage estimate.</p>
          <p>The estimate assumes steady demand and excludes incoming purchase orders. A zero or negative window calls for reviewing the inputs and replenishment options; it does not establish a purchase quantity or guarantee a stockout.</p>
          <h2 className="text-2xl font-bold">Check your inputs before ordering</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li><Link className="text-teal-700 underline dark:text-teal-300" href="/blog/choose-daily-sales-reorder/">Choose a daily sales assumption</Link> when promotions or stockouts affect your history.</li>
            <li><Link className="text-teal-700 underline dark:text-teal-300" href="/blog/supplier-lead-time-checklist/">Confirm supplier lead-time milestones</Link> before entering the total.</li>
            <li><Link className="text-teal-700 underline dark:text-teal-300" href="/blog/inbound-inventory-reorder-timeline/">Use a dated inbound inventory plan</Link> when an order is already on its way.</li>
          </ul>
        </section>
      </section>
    </main>
  );
}
