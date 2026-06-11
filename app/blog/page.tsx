import Link from "next/link";

export const metadata = {
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
          China sourcing risk notes are coming soon.
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
          Future posts will cover China holiday shutdowns, supplier reliability,
          reorder timing, shipping risk, and stockout prevention for ecommerce
          sellers.
        </p>
      </article>
    </main>
  );
}
