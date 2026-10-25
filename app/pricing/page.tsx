import Link from "next/link";
import { siteConfig } from "../config";
import TrackedLink from "../components/TrackedLink";
import InstallCta from "../components/InstallCta";
import PricingAnalytics from "./PricingAnalytics";

export const metadata = {
  alternates: { canonical: "/pricing/" },
  title: "Pricing | China Supply Radar",
  description:
    "Pricing for China Supply Radar inventory risk and supply chain planning for Shopify merchants.",
};

const plans = [
  {
    name: "Free Chrome extension",
    price: "$0",
    description: "Free Chrome Extension. No Shopify account required.",
    features: [
      "China holiday planning aids",
      "Local supplier notes and message templates",
      "Track 1 SKU",
    ],
  },
  {
    name: "Shopify Pro",
    price: "$29/month",
    description: "Inventory risk planning using your Shopify products, inventory and recent orders.",
    features: [
      "Product, inventory and recent order data",
      "Estimated daily sales and remaining stock cover",
      "At-risk SKU prioritization",
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
          Choose the tools that fit your workflow.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          Start with the standalone Chrome extension, or review inventory risk
          using your Shopify store data with Pro.
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

        <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300">
          The free tools belong to the Chrome extension, not a Shopify free plan.
          Shopify Pro is listed at $29/month USD. Review current billing terms in
          Shopify before approving a subscription. Estimates depend on your data
          and changing sales conditions; confirm actual lead times with your supplier.
        </p>

        <InstallCta
          label="Add to Chrome — Free"
          className="mt-8 mr-4 inline-flex min-h-12 items-center justify-center rounded-md border border-teal-600 px-6 py-3 text-base font-semibold text-teal-700 dark:text-teal-300"
        />
        <TrackedLink
          href={siteConfig.shopifyAppUrl}
          buttonName="pricing_upgrade_pro"
          eventSource="pricing_page"
          commercialEvent="UPGRADE_CLICK"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-teal-600 px-6 py-3 text-base font-semibold text-white hover:bg-teal-700"
        >
          View Pro on Shopify · $29/month
        </TrackedLink>
      </section>
    </main>
  );
}
