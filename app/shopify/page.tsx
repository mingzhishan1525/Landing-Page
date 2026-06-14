import Link from "next/link";
import { growthLinks } from "../../lib/growth-links";

export const metadata = {
  title: "Shopify App | China Supply Radar",
  description:
    "Prevent stockouts before Chinese factory delays happen with inventory risk, reorder recommendations, and China holiday alerts for Shopify.",
};

const features = [
  {
    title: "Stockout Risk",
    body: "Identify products that may run out before supplier production and shipping can catch up.",
  },
  {
    title: "Reorder Recommendation",
    body: "Use sales velocity, inventory cover, and supplier lead time to prioritize reorder action.",
  },
  {
    title: "China Holiday Alert",
    body: "Add Chinese New Year, National Day, and other shutdown windows to inventory planning.",
  },
  {
    title: "Supplier Risk Notes",
    body: "Keep supplier reliability and lead time context close to reorder decisions.",
  },
];

const faqs = [
  {
    question: "Does China Supply Radar replace inventory planning?",
    answer:
      "No. It provides informational risk signals and recommendations to support merchant decisions.",
  },
  {
    question: "Why connect Shopify?",
    answer:
      "Shopify product, inventory, and order data help calculate sales velocity, inventory cover, and reorder risk.",
  },
  {
    question: "Does it help with China holidays?",
    answer:
      "Yes. The app adds holiday shutdown context to stockout and reorder planning.",
  },
];

export default function ShopifyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white">
      <header className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <Link href="/" className="text-base font-bold text-slate-950 dark:text-white">
            China Supply Radar
          </Link>
          <Link
            href="/support"
            className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-slate-400 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500"
          >
            Contact Support
          </Link>
        </nav>
      </header>

      <section className="mx-auto grid max-w-5xl gap-10 px-5 py-14 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
            Shopify App
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-950 dark:text-white sm:text-5xl">
            Prevent Stockouts Before Chinese Factory Delays Happen
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            China Supply Radar helps Shopify sellers predict inventory risk,
            reorder earlier, and avoid supply chain disruption during Chinese
            holidays.
          </p>
          <a
            href={growthLinks.shopifyInstallUrl}
            className="mt-7 inline-flex min-h-12 items-center justify-center rounded-md bg-teal-600 px-6 py-3 text-base font-semibold text-white hover:bg-teal-700"
          >
            Install Shopify App
          </a>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-xl font-bold text-slate-950 dark:text-white">
            Problem
          </h2>
          <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
            Stockouts caused by Chinese factory delays can happen when inventory
            keeps selling while supplier production, holiday shutdowns, or
            shipping timelines slow down.
          </p>
          <h2 className="mt-6 text-xl font-bold text-slate-950 dark:text-white">
            Solution
          </h2>
          <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
            Inventory Protection helps merchants review stockout risk, reorder
            timing, supplier context, and China holiday impact before it is too
            late.
          </p>
        </div>
      </section>

      <section className="bg-white py-14 dark:bg-slate-900">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="text-3xl font-bold text-slate-950 dark:text-white">
            Shopify App features
          </h2>
          <div className="mt-9 grid gap-5 md:grid-cols-2">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-lg border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-950"
              >
                <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                  {feature.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-14">
        <h2 className="text-3xl font-bold">FAQ</h2>
        <div className="mt-6 divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white dark:divide-slate-700 dark:border-slate-700 dark:bg-slate-900">
          {faqs.map((faq) => (
            <details key={faq.question} className="p-5">
              <summary className="cursor-pointer font-bold">{faq.question}</summary>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
