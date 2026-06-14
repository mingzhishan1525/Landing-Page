import Link from "next/link";
import { siteConfig } from "../config";

export const metadata = {
  title: "Shopify App V1 | China Supply Radar",
  description:
    "China Supply Radar Shopify App V1 planning for reorder timing, supplier lead times, inventory risk, and China holiday shutdown alerts.",
};

const appModules = [
  {
    title: "Inventory Risk Dashboard",
    body: "See variants that may stock out before supplier production and shipping can catch up.",
  },
  {
    title: "Supplier Lead Time Profiles",
    body: "Map products to suppliers and keep production, shipping, and buffer assumptions in one place.",
  },
  {
    title: "China Holiday Risk",
    body: "Surface holiday shutdown windows next to affected reorder recommendations.",
  },
  {
    title: "Explainable Reorder Dates",
    body: "Show stockout date, latest reorder date, and the assumptions behind every recommendation.",
  },
];

const v1Principles = [
  "Embedded Shopify Admin app",
  "GraphQL Admin API first",
  "Read-only inventory foundation",
  "Chrome extension remains optional",
  "Minimal Shopify access scopes",
  "Built for small ecommerce operators",
];

export default function ShopifyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white">
      <header className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <Link href="/" className="text-base font-bold text-slate-950 dark:text-white">
            China Supply Radar
          </Link>
          <div className="flex items-center gap-4 text-sm font-medium text-slate-600 dark:text-slate-300">
            <Link href="/contact" className="hover:text-slate-950 dark:hover:text-white">
              Contact
            </Link>
            <Link
              href="/"
              className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-slate-400 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500"
            >
              Back home
            </Link>
          </div>
        </nav>
      </header>

      <section className="mx-auto grid max-w-5xl gap-10 px-5 py-14 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
            Shopify App V1
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-950 dark:text-white sm:text-5xl">
            Reorder risk intelligence inside Shopify Admin.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            The Shopify App V1 is planned as an embedded inventory and supplier
            risk workspace for merchants sourcing products from China.
          </p>
          <a
            href={`mailto:${siteConfig.helloEmail}?subject=Shopify%20App%20V1%20Interest`}
            className="mt-7 inline-flex min-h-12 items-center justify-center rounded-md bg-teal-600 px-6 py-3 text-base font-semibold text-white hover:bg-teal-700"
          >
            Join Shopify App Waitlist
          </a>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-xl font-bold text-slate-950 dark:text-white">
            V1 Build Principles
          </h2>
          <div className="mt-5 grid gap-3">
            {v1Principles.map((principle) => (
              <div
                key={principle}
                className="flex items-center gap-3 rounded-md bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 dark:bg-slate-950 dark:text-slate-200"
              >
                <span className="text-sm font-bold text-teal-600 dark:text-teal-300">
                  ✓
                </span>
                {principle}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 dark:bg-slate-900">
        <div className="mx-auto max-w-5xl px-5">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
              Planned Modules
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950 dark:text-white">
              Built around the reorder decision.
            </h2>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-2">
            {appModules.map((module) => (
              <article
                key={module.title}
                className="rounded-lg border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-950"
              >
                <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                  {module.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                  {module.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
