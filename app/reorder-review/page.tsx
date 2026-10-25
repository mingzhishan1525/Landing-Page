import type { Metadata } from "next";
import Link from "next/link";
import TrackedLink from "../components/TrackedLink";
import { siteConfig } from "../config";

export const metadata: Metadata = {
  title: "Free One-SKU Reorder Review | China Supply Radar",
  description: "Request a free manual review of one SKU: stock coverage, replenishment timing and assumptions. No app installation or purchase required.",
  alternates: { canonical: "/reorder-review/" },
};

const intake = `One-SKU reorder review request
1. SKU alias and stock unit:
2. Stock snapshot date, time and timezone:
3. Available stock after committed orders (units):
4. Sales window start/end dates and total units sold:
5. Stockouts, promotions, unusual orders or expected demand changes:
6. Production time (days):
7. Shipping, customs and receiving time until sellable (days):
8. Do these periods overlap? Calendar days or working days?
9. Your chosen buffer (days):
10. Replenishment already ordered: quantity and sellable date, or NONE:
11. How do you reorder today? What decision are you facing next?
12. May we use these anonymized figures for this review only? YES / NO:
13. Preferred retention period and communication channel:

Use UNKNOWN where unsure. Do not include customer records, passwords, supplier contacts or account access.`;
const requestUrl = `mailto:${siteConfig.helloEmail}?subject=${encodeURIComponent("One-SKU reorder review request")}&body=${encodeURIComponent(intake)}`;
const card = "rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900";

export default function ReorderReviewPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white">
      <header className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-6">
        <Link href="/" className="font-bold">China Supply Radar</Link>
        <Link href="/tools/reorder-calculator/" className="text-sm underline underline-offset-4">Prefer a self-service calculator?</Link>
      </header>
      <div className="mx-auto max-w-5xl px-6 pb-20 pt-8 sm:pt-14">
        <p className="text-sm font-semibold uppercase tracking-widest text-teal-700 dark:text-teal-300">Free · manual · one SKU</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">Is it time to reorder your next SKU?</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">Send anonymized stock, recent sales and lead-time figures. We will review the assumptions and help you understand the replenishment timing for one product. No app installation or purchase is required.</p>
        <TrackedLink href={requestUrl} buttonName="reorder_review_email" eventSource="reorder_review" className="mt-7 inline-flex min-h-12 items-center justify-center rounded-lg bg-teal-700 px-6 py-3 font-semibold text-white hover:bg-teal-800">Prepare my review request</TrackedLink>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-300">Opens a draft in your email app. Review and send it yourself. Clicking does not submit your data or book a review. We will confirm scope and availability by email before starting.</p>

        <section className="mt-14 grid gap-6 md:grid-cols-2" aria-label="Review scope">
          <div className={card}>
            <h2 className="text-2xl font-bold">What you will receive</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 leading-7 text-slate-600 dark:text-slate-300">
              <li>A stock coverage estimate based on your recent sales.</li>
              <li>A reorder timing calculation where the inputs support it.</li>
              <li>Assumptions, missing information and questions to verify with your supplier.</li>
            </ul>
            <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">This review does not determine purchase quantities or guarantee stock availability. Incoming orders, variable demand and overlapping lead times may require a different calculation.</p>
          </div>
          <div className={card}>
            <h2 className="text-2xl font-bold">A worked example</h2>
            <p className="mt-3 font-semibold text-teal-700 dark:text-teal-300">DEMO DATA · not a merchant result</p>
            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">300 available units ÷ 10 units sold per day = 30 days of stock. With 14 days production, 7 days shipping and a 7-day buffer, the replenishment threshold is 28 days.</p>
            <p className="mt-4 text-xl font-semibold">30 − 28 = 2 days until the reorder trigger.</p>
            <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Assumes steady demand, no outstanding replenishment, sequential calendar-day lead times and an accurate stock snapshot. The buffer is chosen by the merchant. This manual illustration does not demonstrate app functionality.</p>
          </div>
        </section>

        <section className="mt-12" aria-labelledby="request-details">
          <h2 id="request-details" className="text-2xl font-bold">What to include</h2>
          <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">Use a SKU alias and anonymized figures. Write UNKNOWN where unsure. Do not send customer records, passwords, supplier contacts or account access. We will not publish your data or use it as a case study without separate permission.</p>
          <details className={`${card} mt-5`}>
            <summary className="cursor-pointer font-semibold">View the email template</summary>
            <pre className="mt-4 whitespace-pre-wrap break-words font-sans text-sm leading-7 text-slate-600 dark:text-slate-300">{intake}</pre>
          </details>
          <p className="mt-4 break-words text-sm leading-6 text-slate-600 dark:text-slate-300">If the button does not open your email app, copy the template and send it to <a href={`mailto:${siteConfig.helloEmail}`} className="underline">{siteConfig.helloEmail}</a>. See our <Link href="/privacy/" className="underline">privacy policy</Link>.</p>
        </section>

        <section className={`${card} mt-12`}>
          <h2 className="text-2xl font-bold">After the review</h2>
          <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">Tell us whether it changed your next decision and what remains unclear. If you want to explore the Shopify app, review its current capabilities and subscription terms separately. The free manual review has no purchase requirement.</p>
          <Link href="/pricing/" className="mt-4 inline-block font-semibold text-teal-700 underline underline-offset-4 dark:text-teal-300">View current plans</Link>
        </section>
      </div>
    </main>
  );
}
