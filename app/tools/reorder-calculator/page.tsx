import ReorderCalculator from "./ReorderCalculator";

export const metadata = {
  title: "Reorder Calculator | China Supply Radar",
  description:
    "Calculate days until stockout, reorder date, inventory cover days, and reorder risk.",
};

export default function ReorderCalculatorPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-5 py-14 text-slate-950 dark:bg-slate-950 dark:text-white">
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
      </section>
    </main>
  );
}
