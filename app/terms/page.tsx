import Link from "next/link";

export const metadata = {
  title: "Terms of Service | China Supply Radar",
  description: "Terms of Service for the China Supply Radar Chrome extension.",
};

export default function TermsPage() {
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
          Terms of Service
        </p>
        <h1 className="mt-4 text-4xl font-bold text-slate-950 dark:text-white">
          Terms for using China Supply Radar.
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
          China Supply Radar provides local planning tools for supplier
          reliability, reorder timing, and China supply risk. The extension is
          intended to support operational decisions, not replace professional
          logistics, legal, or financial advice.
        </p>

        <section className="mt-10 space-y-5">
          {[
            [
              "Local Use",
              "You are responsible for the inventory, supplier, and order information you enter into the extension. The extension stores this data locally in your browser.",
            ],
            [
              "Planning Estimates",
              "Reorder dates, stockout dates, risk levels, and supplier scores are estimates based on the data you provide. Actual production and shipping outcomes may vary.",
            ],
            [
              "Acceptable Use",
              "Do not use China Supply Radar in a way that violates applicable laws, browser policies, marketplace policies, or third-party website terms.",
            ],
            [
              "Availability",
              "We may update, modify, or discontinue parts of the extension or website as the product evolves.",
            ],
            [
              "Contact",
              "For support or terms questions, contact support@chinasupplyradar.com.",
            ],
          ].map(([title, body]) => (
            <div
              key={title}
              className="rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900"
            >
              <h2 className="text-xl font-bold text-slate-950 dark:text-white">
                {title}
              </h2>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                {body}
              </p>
            </div>
          ))}
        </section>
      </article>
    </main>
  );
}
