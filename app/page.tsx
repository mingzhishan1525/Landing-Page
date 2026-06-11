import Link from "next/link";

const ctaLabel = "Install Free Extension";

const trustPoints = [
  "No Login Required",
  "No Data Collection",
  "All Data Stored Locally",
  "Works with Alibaba & 1688",
  "Built for Ecommerce Sellers",
];

const features = [
  {
    eyebrow: "Supplier history",
    title: "Supplier Reliability",
    body: "Record supplier order history and calculate average lead time, on-time rate, delay trend, and reliability score.",
  },
  {
    eyebrow: "Reorder math",
    title: "Reorder Decision Assistant",
    body: "Enter inventory, daily sales, production lead time, and shipping time to calculate stockout date and latest reorder date.",
  },
  {
    eyebrow: "Delay calendar",
    title: "China Holiday Risk",
    body: "Track Chinese New Year, National Day, Labor Day, Mid-Autumn Festival, and Dragon Boat Festival before they affect your production timeline.",
  },
  {
    eyebrow: "Sourcing workflow",
    title: "Supplier Search Enhancement",
    body: "Show China supply risk, Chinese keywords, inquiry templates, and supplier notes directly on Alibaba, 1688, and Made-in-China.",
  },
];

const steps = [
  "Install the Chrome extension.",
  "Add your inventory and supplier data locally.",
  "Get reorder dates, risk scores, and supplier reliability insights.",
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
  operatingSystem: "Chrome",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description:
    "A local-first Chrome extension for China supplier reliability, holiday shutdown risk, and reorder timing.",
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
          chrome-extension://china-supply-radar/popup.html
        </span>
      </div>
      <div className="bg-white p-4 dark:bg-slate-950">
        <div className="mx-auto max-w-[390px] rounded-md border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <div className="border-b border-slate-200 px-4 py-3 dark:border-slate-700">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-700 dark:text-teal-300">
              China Supply Radar
            </p>
            <h3 className="mt-1 text-base font-bold text-slate-950 dark:text-white">
              Supplier Reliability
            </h3>
          </div>
          <div className="space-y-3 p-4">
            <div className="flex items-center justify-between rounded-md bg-slate-50 px-3 py-2 dark:bg-slate-800">
              <span className="text-sm text-slate-600 dark:text-slate-300">
                Average Lead Time
              </span>
              <span className="text-sm font-bold text-slate-950 dark:text-white">
                38 days
              </span>
            </div>
            <div className="flex items-center justify-between rounded-md bg-slate-50 px-3 py-2 dark:bg-slate-800">
              <span className="text-sm text-slate-600 dark:text-slate-300">
                On-Time Rate
              </span>
              <span className="text-sm font-bold text-teal-700 dark:text-teal-300">
                91%
              </span>
            </div>
            <div className="rounded-md bg-teal-50 p-3 dark:bg-teal-950/40">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-teal-900 dark:text-teal-100">
                  Reliability Score
                </span>
                <span className="text-xl font-bold text-teal-950 dark:text-teal-100">
                  82
                </span>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-teal-100 dark:bg-teal-900">
                <div className="h-full w-[82%] rounded-full bg-teal-600 dark:bg-teal-300" />
              </div>
            </div>
            <div className="rounded-md border border-amber-200 bg-amber-50 p-3 dark:border-amber-800 dark:bg-amber-950/40">
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-medium text-amber-950 dark:text-amber-100">
                  Risk Level
                </span>
                <span className="rounded-full bg-amber-200 px-2 py-1 text-xs font-bold uppercase tracking-[0.1em] text-amber-950 dark:bg-amber-800 dark:text-amber-100">
                  High
                </span>
              </div>
              <p className="mt-2 text-xs leading-5 text-amber-900 dark:text-amber-100">
                CNY shutdown window may affect reorder timing.
              </p>
            </div>
          </div>
          <div className="border-t border-slate-200 px-4 py-3 dark:border-slate-700">
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              Data stored locally in chrome.storage.local
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
            <a href="#privacy" className="hidden hover:text-slate-950 dark:hover:text-white sm:inline">
              Privacy
            </a>
            <Link href="/blog" className="hidden hover:text-slate-950 dark:hover:text-white sm:inline">
              Blog
            </Link>
            <a
              href="https://chromewebstore.google.com/"
              className="rounded-md bg-slate-950 px-4 py-2 text-white hover:bg-slate-800 dark:bg-teal-400 dark:text-slate-950 dark:hover:bg-teal-300"
            >
              {ctaLabel}
            </a>
          </div>
        </nav>
      </header>

      <section className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-9 sm:py-10 lg:grid-cols-[1.02fr_0.98fr] lg:py-11">
        <div className="min-w-0">
          <p className="mb-3 inline-flex rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-800 dark:border-teal-800 dark:bg-teal-950/60 dark:text-teal-200">
            Chrome Extension for eCommerce sellers
          </p>
          <h1 className="max-w-3xl break-words text-4xl font-bold leading-tight text-slate-950 dark:text-white sm:text-5xl lg:text-[3.15rem]">
            Never Get Caught by Chinese Factory Delays Again.
          </h1>
          <p className="mt-4 max-w-2xl text-xl font-semibold leading-snug text-slate-800 dark:text-slate-100 sm:text-2xl">
            Track holiday shutdowns, supplier reliability, and reorder timing
            before stockouts happen.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
            Built for Shopify, Amazon, TikTok Shop, and sourcing teams working
            with China.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://chromewebstore.google.com/"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-teal-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-teal-600/20 hover:bg-teal-700"
            >
              {ctaLabel}
            </a>
            <a
              href="#how-it-works"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-slate-500"
            >
              View Demo
            </a>
          </div>
          <p className="mt-3 text-sm font-semibold text-slate-600 dark:text-slate-300">
            Available on Chrome Web Store
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
              Risk alert example
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950 dark:text-white">
              See A Risk Alert Example
            </h2>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-950">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-lg font-bold text-slate-950 dark:text-white">
                Chinese New Year starts in 42 days.
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
                Place a new order within 7 days.
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
              Reorder decisions with supplier risk in view.
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
                From sourcing data to reorder confidence.
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
              Your data stays in your browser.
            </h2>
          </div>
          <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
            China Supply Radar does not require login and does not upload your
            supplier notes, inventory data, or order history to any server.
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
            Install China Supply Radar for free.
          </p>
          <a
            href="https://chromewebstore.google.com/"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-teal-500 px-6 py-3 text-base font-semibold text-slate-950 hover:bg-teal-400 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-800"
          >
            {ctaLabel}
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
              Chrome Extension for China supply risk and reorder decisions.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-600 dark:text-slate-300">
            <a href="mailto:support@chinasupplyradar.com" className="hover:text-slate-950 dark:hover:text-white">
              Support Email
            </a>
            <Link href="/privacy" className="hover:text-slate-950 dark:hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-950 dark:hover:text-white">
              Terms of Service
            </Link>
            <a href="https://chromewebstore.google.com/" className="hover:text-slate-950 dark:hover:text-white">
              Chrome Web Store
            </a>
            <a href="mailto:roadmap@chinasupplyradar.com" className="hover:text-slate-950 dark:hover:text-white">
              Roadmap
            </a>
            <a href="mailto:hello@chinasupplyradar.com" className="hover:text-slate-950 dark:hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
