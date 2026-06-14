import Link from "next/link";
import type { Metadata } from "next";
import { isChromeStorePublished, siteConfig } from "./config";

export const metadata: Metadata = {
  title: "China Supply Radar | Inventory Risk & Supply Chain Planning for Shopify",
  description:
    "Inventory risk dashboard, sales velocity, reorder queue, stockout alerts, and China holiday impact planning for Shopify merchants.",
};

const chromeStoreStatusText = isChromeStorePublished
  ? "Available on Chrome Web Store"
  : "Chrome Web Store review is pending";

const trustPoints = [
  "Chrome Extension",
  "Shopify App",
  "Privacy-first planning",
  "Built for ecommerce sellers",
  "China supply risk context",
];

const features = [
  {
    eyebrow: "Shopify App",
    title: "Inventory Risk Dashboard",
    body: "See inventory health, stockout exposure, and China supply risk across products in one focused planning view.",
  },
  {
    eyebrow: "Shopify App",
    title: "Sales Velocity",
    body: "Use recent order activity to estimate how quickly products are selling and where inventory risk is building.",
  },
  {
    eyebrow: "Shopify App",
    title: "Reorder Queue",
    body: "Prioritize products that need supplier action based on inventory, sales velocity, lead time, and reorder timing.",
  },
  {
    eyebrow: "Shopify App",
    title: "Upcoming Stockout Alerts",
    body: "Identify products likely to stock out before production and shipping can catch up.",
  },
  {
    eyebrow: "China sourcing",
    title: "China Holiday Impact",
    body: "Track Chinese New Year, National Day, Labor Day, Mid-Autumn Festival, and Dragon Boat Festival before they affect reorder decisions.",
  },
  {
    eyebrow: "Chrome Extension",
    title: "Supplier Reliability",
    body: "Keep supplier lead time notes, reliability context, and China sourcing details close to your reorder workflow.",
  },
];

const steps = [
  "Install the Shopify App or Chrome Extension.",
  "Review inventory, sales velocity, and China supply risk signals.",
  "Use reorder queues and risk alerts to plan supplier action.",
];

const scenarioMetrics = [
  ["Current Inventory", "1,240 units"],
  ["Daily Sales", "42 units"],
  ["Inventory Coverage", "29 days"],
  ["Risk Level", "High"],
];

const sellerTypes = [
  "Shopify Merchants",
  "Amazon FBA Sellers",
  "TikTok Shop Sellers",
  "Ecommerce Agencies",
  "Sourcing Teams",
];

const privacyPoints = [
  "No account required.",
  "No cloud sync.",
  "No supplier data uploaded.",
  "No third-party tracking.",
];

const faqs = [
  {
    question: "Is China Supply Radar free?",
    answer: "Yes. Current version is completely free.",
  },
  {
    question: "Does my data leave my browser?",
    answer:
      "No. All inventory, supplier, and order data remain locally in your browser.",
  },
  {
    question: "Does it require login?",
    answer: "No account or login is required.",
  },
  {
    question: "Which platforms are supported?",
    answer:
      "Shopify, Amazon, TikTok Shop, Alibaba, and 1688 workflows.",
  },
  {
    question: "Can I track multiple suppliers?",
    answer: "Yes. Supplier reliability can be tracked independently.",
  },
  {
    question: "Does it collect supplier information?",
    answer:
      "No. China Supply Radar does not upload supplier data to any server.",
  },
];

const waitlistItems = [
  "New China holiday alerts",
  "Supplier reliability improvements",
  "Shipping risk intelligence",
  "Product updates",
];

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "China Supply Radar",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, Chrome",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description:
    "Inventory risk and supply chain planning for Shopify merchants and ecommerce sellers sourcing from China.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

function ProductPreview() {
  return (
    <div className="min-w-0 overflow-hidden rounded-lg border border-slate-300 bg-slate-100 shadow-xl shadow-slate-200/70 dark:border-slate-700 dark:bg-slate-800 dark:shadow-black/30">
      <div className="flex items-center gap-2 border-b border-slate-300 px-4 py-3 dark:border-slate-700">
        <span className="h-3 w-3 rounded-full bg-rose-400" />
        <span className="h-3 w-3 rounded-full bg-amber-400" />
        <span className="h-3 w-3 rounded-full bg-teal-500" />
        <span className="ml-3 truncate text-xs font-medium text-slate-500 dark:text-slate-400">
          admin.shopify.com/store/example/apps/china-supply-radar
        </span>
      </div>
      <div className="bg-white p-4 dark:bg-slate-950">
        <div className="mx-auto max-w-[390px] rounded-md border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <div className="border-b border-slate-200 px-4 py-3 dark:border-slate-700">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-700 dark:text-teal-300">
              China Supply Radar
            </p>
            <h3 className="mt-1 text-base font-bold text-slate-950 dark:text-white">
              Inventory Risk Dashboard
            </h3>
          </div>
          <div className="space-y-3 p-4">
            <div className="flex items-center justify-between rounded-md bg-slate-50 px-3 py-2 dark:bg-slate-800">
              <span className="text-sm text-slate-600 dark:text-slate-300">
                Sales Velocity
              </span>
              <span className="text-sm font-bold text-slate-950 dark:text-white">
                42 units/day
              </span>
            </div>
            <div className="flex items-center justify-between rounded-md bg-slate-50 px-3 py-2 dark:bg-slate-800">
              <span className="text-sm text-slate-600 dark:text-slate-300">
                Reorder Queue
              </span>
              <span className="text-sm font-bold text-teal-700 dark:text-teal-300">
                7 products
              </span>
            </div>
            <div className="rounded-md bg-teal-50 p-3 dark:bg-teal-950/40">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-teal-900 dark:text-teal-100">
                  Upcoming Stockout
                </span>
                <span className="text-xl font-bold text-teal-950 dark:text-teal-100">
                  29d
                </span>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-teal-100 dark:bg-teal-900">
                <div className="h-full w-[82%] rounded-full bg-teal-600 dark:bg-teal-300" />
              </div>
            </div>
            <div className="rounded-md border border-amber-200 bg-amber-50 p-3 dark:border-amber-800 dark:bg-amber-950/40">
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-medium text-amber-950 dark:text-amber-100">
                  China Holiday Impact
                </span>
                <span className="rounded-full bg-amber-200 px-2 py-1 text-xs font-bold uppercase tracking-[0.1em] text-amber-950 dark:bg-amber-800 dark:text-amber-100">
                  High
                </span>
              </div>
              <p className="mt-2 text-xs leading-5 text-amber-900 dark:text-amber-100">
                CNY shutdown window may affect production and shipping timing.
              </p>
            </div>
          </div>
          <div className="border-t border-slate-200 px-4 py-3 dark:border-slate-700">
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              Planning view for Shopify inventory and China supply risk
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white">
      <JsonLd data={softwareApplicationSchema} />
      <JsonLd data={faqSchema} />
      <header className="border-b border-slate-200 bg-white/85 backdrop-blur dark:border-slate-800 dark:bg-slate-950/85">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link href="/" className="text-base font-bold text-slate-950 dark:text-white">
            China Supply Radar
          </Link>
          <div className="flex items-center gap-4 text-sm font-medium text-slate-600 dark:text-slate-300">
            <a href="#features" className="hidden hover:text-slate-950 dark:hover:text-white sm:inline">
              Features
            </a>
            <Link href="/pricing" className="hidden hover:text-slate-950 dark:hover:text-white sm:inline">
              Pricing
            </Link>
            <Link href="/support" className="hidden hover:text-slate-950 dark:hover:text-white sm:inline">
              Support
            </Link>
            <a href="#privacy" className="hidden hover:text-slate-950 dark:hover:text-white sm:inline">
              Privacy
            </a>
            <Link href="/blog" className="hidden hover:text-slate-950 dark:hover:text-white sm:inline">
              Blog
            </Link>
            <Link href="/shopify" className="hidden hover:text-slate-950 dark:hover:text-white sm:inline">
              Shopify
            </Link>
            <a
              href={siteConfig.shopifyAppUrl}
              className="rounded-md bg-slate-950 px-4 py-2 text-white hover:bg-slate-800 dark:bg-teal-400 dark:text-slate-950 dark:hover:bg-teal-300"
            >
              Install Shopify App
            </a>
          </div>
        </nav>
      </header>

      <section className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-9 sm:py-10 lg:grid-cols-[1.02fr_0.98fr] lg:py-11">
        <div className="min-w-0">
          <p className="mb-3 inline-flex rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-800 dark:border-teal-800 dark:bg-teal-950/60 dark:text-teal-200">
            Shopify App and Chrome Extension for ecommerce sellers
          </p>
          <h1 className="max-w-3xl break-words text-4xl font-bold leading-tight text-slate-950 dark:text-white sm:text-5xl lg:text-[3.15rem]">
            Inventory Risk & Supply Chain Planning for Shopify.
          </h1>
          <p className="mt-4 max-w-2xl text-xl font-semibold leading-snug text-slate-800 dark:text-slate-100 sm:text-2xl">
            Track sales velocity, reorder queues, upcoming stockout alerts, and
            China holiday impact before inventory problems hit your store.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
            China Supply Radar supports both a Shopify App for inventory risk
            planning and a Chrome Extension for China supplier context.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={siteConfig.shopifyAppUrl}
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-teal-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-teal-600/20 hover:bg-teal-700"
            >
              Install Shopify App
            </a>
            <a
              href="/support"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-slate-500"
            >
              Contact Support
            </a>
          </div>
          <p className="mt-3 text-sm font-semibold text-slate-600 dark:text-slate-300">
            Shopify App support site. Chrome Extension: {chromeStoreStatusText}.
          </p>
          <div className="mt-5 grid gap-x-6 gap-y-2 sm:grid-cols-3">
            {trustPoints.map((point) => (
              <div
                key={point}
                className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                <span className="text-sm font-bold text-teal-600 dark:text-teal-300">
                  ✓
                </span>
                {point}
              </div>
            ))}
          </div>
        </div>
        <ProductPreview />
      </section>

      <section className="bg-white py-10 dark:bg-slate-900">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
              Shopify risk example
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950 dark:text-white">
              See an inventory risk example
            </h2>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-950">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-lg font-bold text-slate-950 dark:text-white">
                Bamboo cutting boards may stock out before the next supplier shipment.
              </p>
              <span className="w-fit rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-rose-700 dark:bg-rose-950/60 dark:text-rose-200">
                High risk
              </span>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {scenarioMetrics.map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-md bg-white p-4 dark:bg-slate-900"
                >
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {label}
                  </p>
                  <p className="mt-2 text-lg font-bold text-slate-950 dark:text-white">
                    {value}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-md border border-teal-200 bg-teal-50 p-4 dark:border-teal-800 dark:bg-teal-950/40">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-800 dark:text-teal-200">
                Recommended Action
              </p>
              <p className="mt-2 text-lg font-bold text-teal-950 dark:text-teal-100">
                Add this product to the reorder queue and review China holiday impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="bg-white py-16 dark:bg-slate-900">
        <div className="mx-auto max-w-6xl px-5">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
              Features
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950 dark:text-white">
              Shopify inventory planning with China supply risk in view.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-lg border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-950"
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-700 dark:text-teal-300">
                  {feature.eyebrow}
                </p>
                <h3 className="mt-3 text-xl font-bold text-slate-950 dark:text-white">
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

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
              Social Proof
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950 dark:text-white">
              Built For Sellers Working With China
            </h2>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {sellerTypes.map((sellerType) => (
              <div
                key={sellerType}
                className="rounded-lg border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-800 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              >
                {sellerType}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
                How It Works
              </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950 dark:text-white">
              From Shopify inventory data to reorder confidence.
            </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {steps.map((step, index) => (
                <div
                  key={step}
                  className="rounded-lg border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-slate-950 text-sm font-bold text-white dark:bg-teal-400 dark:text-slate-950">
                    {index + 1}
                  </span>
                  <p className="mt-5 text-base font-semibold leading-7 text-slate-800 dark:text-slate-100">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="privacy" className="bg-white py-16 dark:bg-slate-900">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
              Privacy
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950 dark:text-white">
              Privacy-first store data handling.
            </h2>
          </div>
          <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
            China Supply Radar only accesses Shopify store data required for
            inventory planning, sales velocity, reorder recommendations, and
            supply chain risk analysis.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {privacyPoints.map((point) => (
              <div
                key={point}
                className="flex items-center gap-3 rounded-md bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 dark:bg-slate-950 dark:text-slate-200"
              >
                <span className="text-sm font-bold text-teal-600 dark:text-teal-300">
                  ✓
                </span>
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-5">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950 dark:text-white">
              Questions before installing
            </h2>
          </div>
          <div className="mt-8 divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white dark:divide-slate-700 dark:border-slate-700 dark:bg-slate-900">
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
          </div>
        </div>
      </section>

      <section className="bg-white py-16 dark:bg-slate-900">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
              Stay Updated
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950 dark:text-white">
              Get product and China supply risk updates.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
              Get notified about:
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {waitlistItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-md bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 dark:bg-slate-950 dark:text-slate-200"
                >
                  <span className="text-sm font-bold text-teal-600 dark:text-teal-300">
                    ✓
                  </span>
                  {item}
                </div>
              ))}
            </div>
            <form className="mt-6 flex flex-col gap-3 sm:flex-row" action="#" method="post">
              <label className="sr-only" htmlFor="waitlist-email">
                Email address
              </label>
              <input
                id="waitlist-email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="min-h-12 flex-1 rounded-md border border-slate-300 bg-white px-4 text-base text-slate-950 outline-none focus:border-teal-600 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
              />
              <button
                type="submit"
                className="min-h-12 rounded-md bg-slate-950 px-6 py-3 text-base font-semibold text-white hover:bg-slate-800 dark:bg-teal-400 dark:text-slate-950 dark:hover:bg-teal-300"
              >
                Join Waitlist
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl rounded-lg bg-slate-950 px-6 py-10 text-center text-white dark:bg-teal-500 dark:text-slate-950">
          <h2 className="text-3xl font-bold">
            Stop guessing your China reorder timing.
          </h2>
          <p className="mt-4 text-lg text-slate-300 dark:text-slate-900">
            Start with inventory risk visibility and China holiday impact.
          </p>
          <a
            href={siteConfig.shopifyAppUrl}
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-teal-500 px-6 py-3 text-base font-semibold text-slate-950 hover:bg-teal-400 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-800"
          >
            Install Shopify App
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-bold text-slate-950 dark:text-white">
              China Supply Radar
            </p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Shopify App and Chrome Extension for inventory risk and China supply planning.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-600 dark:text-slate-300">
            <a href={`mailto:${siteConfig.supportEmail}`} className="hover:text-slate-950 dark:hover:text-white">
              Contact email
            </a>
            <Link href="/privacy" className="hover:text-slate-950 dark:hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-950 dark:hover:text-white">
              Terms of Service
            </Link>
            <Link href="/support" className="hover:text-slate-950 dark:hover:text-white">
              Support
            </Link>
            <Link href="/pricing" className="hover:text-slate-950 dark:hover:text-white">
              Pricing
            </Link>
            <a href={siteConfig.chromeStoreUrl} className="hover:text-slate-950 dark:hover:text-white">
              Chrome Web Store
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
