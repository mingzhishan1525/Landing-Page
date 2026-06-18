import Link from "next/link";
import { siteConfig } from "../config";

const terms = [
  "App is provided as an inventory planning and supply chain risk tool.",
  "Recommendations are informational only and do not guarantee business outcomes.",
  "Merchants are responsible for final purchasing and inventory decisions.",
  "Current pricing is Free Beta. No charges are made through Shopify at this time.",
  "Future paid plans may be introduced later with advance notice.",
  "We may update or discontinue features.",
];

export const metadata = {
  title: "Terms of Service | China Supply Radar",
  description:
    "Terms of Service for China Supply Radar Shopify App and Chrome Extension.",
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
            href="/support"
            className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-slate-400 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500"
          >
            Support
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
          These terms apply to the China Supply Radar Shopify App, Chrome
          Extension, and related support website.
        </p>

        <section className="mt-10 space-y-5">
          {terms.map((term) => (
            <div
              key={term}
              className="rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900"
            >
              <p className="leading-7 text-slate-700 dark:text-slate-300">
                {term}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-8 rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-xl font-bold text-slate-950 dark:text-white">
            Contact
          </h2>
          <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
            Contact email:{" "}
            <a
              href={`mailto:${siteConfig.supportEmail}`}
              className="font-semibold text-teal-700 hover:text-teal-800 dark:text-teal-300 dark:hover:text-teal-200"
            >
              {siteConfig.supportEmail}
            </a>
          </p>
        </section>
      </article>
    </main>
  );
}
