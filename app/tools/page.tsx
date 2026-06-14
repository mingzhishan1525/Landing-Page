import Link from "next/link";

export const metadata = {
  title: "Free Supply Chain Tools | China Supply Radar",
  description:
    "Free China holiday, reorder, and stockout risk calculators for ecommerce sellers.",
};

const tools = [
  {
    title: "Holiday Calculator",
    href: "/tools/holiday-calculator",
    body: "Check China holiday conflict risk and safe supplier order dates.",
  },
  {
    title: "Reorder Calculator",
    href: "/tools/reorder-calculator",
    body: "Estimate stockout timing, inventory cover, and reorder dates.",
  },
  {
    title: "Stockout Risk Calculator",
    href: "/tools/stockout-risk-calculator",
    body: "Score inventory risk using sales velocity, lead time, region, and holidays.",
  },
];

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-5 py-14 text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-5xl">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
          Free Tools
        </p>
        <h1 className="mt-4 text-4xl font-bold">Supply chain risk calculators</h1>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="rounded-lg border border-slate-200 bg-white p-6 hover:border-teal-400 dark:border-slate-700 dark:bg-slate-900"
            >
              <h2 className="text-xl font-bold">{tool.title}</h2>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                {tool.body}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
