import Link from "next/link";
import { siteConfig } from "../config";
import TrackedLink from "../components/TrackedLink";
import PricingAnalytics from "./PricingAnalytics";

export const metadata = {
  title: "Pricing | China Supply Radar",
  description:
    "Pricing for China Supply Radar inventory risk and supply chain planning for Shopify merchants.",
};

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Basic inventory and China supply risk visibility.",
    features: [
      "Overall supply risk score",
      "China holiday impact",
      "Track 1 SKU",
    ],
  },
  {
    name: "Pro",
    price: "$29/month",
    description: "Reorder planning for active Shopify merchants.",
    features: [
      "Unlimited SKU monitoring",
      "Supplier reliability intelligence",
      "Inventory risk prediction",
      "Reorder forecasting",
      "Weekly risk alerts",
    ],
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white">
      <PricingAnalytics />
      <header className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <Link href="/" className="text-base font-bold text-slate-950 dark:text-white">
            China Supply Radar
          </Link>
          <div className="flex items-center gap-4 text-sm font-medium text-slate-600 dark:text-slate-300">
            <Link href="/support" className="hover:text-slate-950 dark:hover:text-white">
              Support
            </Link>
            <Link href="/privacy" className="hover:text-slate-950 dark:hover:text-white">
              Privacy
            </Link>
          </div>
        </nav>
      </header>

      <section className="mx-auto max-w-5xl px-5 py-14">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
          Pricing
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-950 dark:text-white sm:text-5xl">
          Simple plans for inventory risk planning.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          China Supply Radar helps Shopify merchants monitor inventory health,
          sales velocity, reorder timing, and China supply chain risk.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900"
            >
              <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
                {plan.name}
              </h2>
              <p className="mt-3 text-3xl font-bold text-teal-700 dark:text-teal-300">
                {plan.price}
              </p>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                {plan.description}
              </p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-slate-700 dark:text-slate-300">
                    <span className="font-bold text-teal-600 dark:text-teal-300">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <TrackedLink
          href={siteConfig.shopifyAppUrl}
          buttonName="pricing_upgrade_pro"
          eventSource="pricing_page"
          commercialEvent="UPGRADE_CLICK"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-teal-600 px-6 py-3 text-base font-semibold text-white hover:bg-teal-700"
        >
          Start Pro · $29/month
        </TrackedLink>
      </section>
    </main>
  );
}
