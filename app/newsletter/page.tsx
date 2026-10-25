import NewsletterSignup from "../components/NewsletterSignup";

export const metadata = {
  alternates: { canonical: "/newsletter/" },
  title: "Newsletter | China Supply Radar",
  description:
    "Contact China Supply Radar about product updates and inventory planning resources.",
};

export default function NewsletterPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-5 py-14 text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
          Newsletter
        </p>
        <h1 className="mt-4 text-4xl font-bold">
          Ask about China Supply Radar updates
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
          Contact us about product updates, China holiday planning guides and
          reorder examples for ecommerce sellers.
        </p>
        <NewsletterSignup source="newsletter_page" />
      </section>
    </main>
  );
}
