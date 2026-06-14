import HolidayCalculator from "./HolidayCalculator";

export const metadata = {
  title: "China Holiday Risk Calculator | China Supply Radar",
  description:
    "Calculate China holiday conflict risk, safe order dates, and supplier buffer timing.",
};

export default function HolidayCalculatorPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-5 py-14 text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
          Free Tool
        </p>
        <h1 className="mt-4 text-4xl font-bold">China Holiday Risk Calculator</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          Check whether a supplier order date conflicts with major Chinese
          holiday shutdown windows.
        </p>
        <div className="mt-8">
          <HolidayCalculator />
        </div>
      </section>
    </main>
  );
}
