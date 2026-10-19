import Link from "next/link";

export const metadata = {
  alternates: { canonical: "/blog/" },
  title: "Blog | China Supply Radar",
  description:
    "China Supply Radar articles on China supplier delays, reorder timing, and sourcing risk.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white">
      <header className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
        <nav className="mx-auto flex max-w-4xl items-center justify-between px-5 py-4">
          <Link href="/" className="text-base font-bold text-slate-950 dark:text-white">
            China Supply Radar
          </Link>
          <Link
            href="/"
            className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-slate-400 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500"
          >
            Back home
          </Link>
        </nav>
      </header>

      <article className="mx-auto max-w-4xl px-5 py-14">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
          Blog
        </p>
        <h1 className="mt-4 text-4xl font-bold text-slate-950 dark:text-white">
          Inventory and sourcing planning guides
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
          Practical examples for understanding stock coverage, reorder timing, and supplier lead times.
        </p>
        <section className="mt-10 rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900"><h2 className="text-2xl font-bold"><Link href="/blog/inbound-inventory-reorder-timeline/" className="text-teal-700 underline dark:text-teal-300">Does an inbound order change your reorder timing?</Link></h2><p className="mt-4 leading-7">Daily stock tables for on-time and delayed receipts, with a downloadable CSV and separate lost-sales and back-order examples.</p></section>
        <section className="mt-10 rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-2xl font-bold"><Link href="/blog/supplier-lead-time-checklist/" className="text-teal-700 underline dark:text-teal-300">Supplier lead time checklist: what to confirm before reordering</Link></h2>
          <p className="mt-4 leading-7">Eight questions to ask, a message you can adapt, and an example of how missing delivery days change your reorder window.</p>
        </section>
        <section className="mt-10 rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-2xl font-bold"><Link href="/blog/calculate-reorder-window/" className="text-teal-700 underline dark:text-teal-300">How to calculate your reorder window from stock and lead time</Link></h2>
          <p className="mt-4 leading-7">A worked example using 300 units, daily sales, production, shipping and a planning buffer.</p>
        </section>
      </article>
    </main>
  );
}
