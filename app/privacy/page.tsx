import Link from "next/link";
import { siteConfig } from "../config";

const policyItems = [
  "We only access Shopify store data required to provide inventory planning, sales velocity calculations, reorder recommendations, and supply chain risk analysis.",
  "We may access product, inventory, order, and limited customer-related order data only when required by Shopify APIs to calculate sales velocity.",
  "We do not sell merchant data.",
  "We do not use customer data for advertising.",
  "We do not share store data with third parties except service providers required to operate the app.",
  "Merchants may request data deletion by contacting support.",
];

export const metadata = {
  title: "Privacy Policy | China Supply Radar",
  description:
    "Privacy Policy for China Supply Radar Shopify App and Chrome Extension.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white">
      <header className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
        <nav className="mx-auto flex max-w-4xl items-center justify-between px-5 py-4">
          <Link href="/" className="text-base font-bold text-slate-950 dark:text-white">
            China Supply Radar
          </Link>
          <Link
            href="/support"
            className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-slate-400 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500"
          >
            Support
          </Link>
        </nav>
      </header>

      <article className="mx-auto max-w-4xl px-5 py-14">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
          Privacy Policy
        </p>
        <h1 className="mt-4 text-4xl font-bold text-slate-950 dark:text-white">
          Privacy for Shopify merchants and ecommerce sellers.
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
          China Supply Radar is an inventory planning and supply chain risk tool
          for Shopify merchants and ecommerce sellers sourcing from China.
        </p>

        <section className="mt-10 rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            Shopify Store Data
          </h2>
          <ul className="mt-5 space-y-4">
            {policyItems.map((item) => (
              <li key={item} className="flex gap-3 leading-7 text-slate-700 dark:text-slate-300">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
            <h2 className="text-xl font-bold text-slate-950 dark:text-white">
              Data Use
            </h2>
            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
              Store data is used to calculate inventory health, sales velocity,
              reorder recommendations, upcoming stockout risk, and China holiday
              impact.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
            <h2 className="text-xl font-bold text-slate-950 dark:text-white">
              Data Deletion
            </h2>
            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
              Merchants may request data deletion by contacting support at{" "}
              {siteConfig.supportEmail}.
            </p>
          </div>
        </section>

        <section className="mt-8 rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-xl font-bold text-slate-950 dark:text-white">
            Contact
          </h2>
          <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
            For privacy questions or data deletion requests, contact{" "}
            <a
              href={`mailto:${siteConfig.supportEmail}`}
              className="font-semibold text-teal-700 hover:text-teal-800 dark:text-teal-300 dark:hover:text-teal-200"
            >
              {siteConfig.supportEmail}
            </a>
            .
          </p>
        </section>
      </article>
    </main>
  );
}
