import Link from "next/link";
import { siteConfig } from "../config";

export const metadata = {
  title: "Support | China Supply Radar",
  description:
    "Support for China Supply Radar Shopify App and Chrome Extension.",
};

const faqs = [
  {
    question: "Why does the app need read_orders?",
    answer:
      "The app uses order data to calculate sales velocity, which helps estimate inventory risk, reorder timing, and upcoming stockout exposure.",
  },
  {
    question: "Does the app sell my data?",
    answer:
      "No. China Supply Radar does not sell merchant data or use customer data for advertising.",
  },
  {
    question: "Why is my Sales Velocity empty?",
    answer:
      "Sales Velocity may be empty if the app has not finished syncing required Shopify data, if a product has no recent orders, or if the required Shopify permissions are not available.",
  },
  {
    question: "How do I delete my data?",
    answer:
      "Contact support@chinasupplyradar.com to request data deletion. Merchants may request deletion of store data associated with the app.",
  },
];

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white">
      <header className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
        <nav className="mx-auto flex max-w-4xl items-center justify-between px-5 py-4">
          <Link href="/" className="text-base font-bold text-slate-950 dark:text-white">
            China Supply Radar
          </Link>
          <Link
            href="/pricing"
            className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-slate-400 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500"
          >
            Pricing
          </Link>
        </nav>
      </header>

      <article className="mx-auto max-w-4xl px-5 py-14">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
          Support
        </p>
        <h1 className="mt-4 text-4xl font-bold text-slate-950 dark:text-white">
          China Supply Radar support.
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
          For Shopify App, Chrome Extension, privacy, or account questions,
          contact support. Response time: within 48 hours.
        </p>

        <section className="mt-10 rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            Contact Support
          </h2>
          <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
            Support email:{" "}
            <a
              href={`mailto:${siteConfig.supportEmail}`}
              className="font-semibold text-teal-700 hover:text-teal-800 dark:text-teal-300 dark:hover:text-teal-200"
            >
              {siteConfig.supportEmail}
            </a>
          </p>
          <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">
            Response time: within 48 hours.
          </p>
        </section>

        <section className="mt-8 divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white dark:divide-slate-700 dark:border-slate-700 dark:bg-slate-900">
          {faqs.map((faq) => (
            <details key={faq.question} className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-bold text-slate-950 dark:text-white">
                {faq.question}
                <span className="text-xl leading-none text-teal-600 group-open:rotate-45 dark:text-teal-300">
                  +
                </span>
              </summary>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                {faq.answer}
              </p>
            </details>
          ))}
        </section>
      </article>
    </main>
  );
}
