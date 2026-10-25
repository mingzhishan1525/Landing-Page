import Link from "next/link";
import TrackedLink from "../components/TrackedLink";
import { growthLinks, withUtm } from "../../lib/growth-links";

export const metadata = {
  alternates: { canonical: "/shopify/" },
  title: "Shopify App | China Supply Radar",
  description:
    "Review inventory, recent sales and stock coverage to prioritize replenishment planning for your Shopify store.",
};

const features = [
  {
    title: "Stockout Risk",
    body: "Review at-risk SKUs using inventory levels and recent sales estimates.",
  },
  {
    title: "Replenishment Priorities",
    body: "Use estimated sales velocity and stock cover to decide which products need attention.",
  },
  {
    title: "Recent Sales",
    body: "Use recent order data to estimate how quickly products are selling.",
  },
  {
    title: "Inventory Overview",
    body: "Review product and inventory data alongside sales estimates.",
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
      "Use the standalone Chrome extension and our free website tools for China holiday planning. Confirm actual factory schedules with your supplier.",
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
            See which SKUs need replenishment attention
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Review your products, inventory and recent orders to estimate daily
            sales and remaining stock cover. Use the results to plan your next
            replenishment conversation.
          </p>
          <TrackedLink
            href={withUtm(growthLinks.shopifyInstallUrl, "shopify")}
            buttonName="shopify_install"
            eventSource="shopify"
            className="mt-7 inline-flex min-h-12 items-center justify-center rounded-md bg-teal-600 px-6 py-3 text-base font-semibold text-white hover:bg-teal-700"
          >
            View Shopify App · $29/month
          </TrackedLink>
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
            China Supply Radar highlights at-risk SKUs using inventory and recent
            sales. Estimates depend on store data and changing demand; confirm
            lead times and existing purchase orders before deciding.
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
