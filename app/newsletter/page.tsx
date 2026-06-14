import NewsletterSignup from "../components/NewsletterSignup";

export const metadata = {
  title: "Newsletter | China Supply Radar",
  description:
    "Subscribe to China Supply Radar updates on China holiday risk, supplier reliability, and inventory planning.",
};

export default function NewsletterPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-5 py-14 text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
          Newsletter
        </p>
        <h1 className="mt-4 text-4xl font-bold">
          This Week in China Supply Risk
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
          Get China holiday alerts, supplier risk notes, shipping risk
          intelligence, and product updates for ecommerce sellers.
        </p>
        <NewsletterSignup source="newsletter_page" />
      </section>
    </main>
  );
}
