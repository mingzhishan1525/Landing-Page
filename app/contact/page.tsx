import Link from "next/link";
import { siteConfig } from "../config";

export const metadata = {
  title: "Contact | China Supply Radar",
  description:
    "Contact China Supply Radar for support, partnerships, and product questions.",
};

const contactOptions = [
  {
    title: "Support",
    body: "Extension support, privacy questions, Chrome Web Store issues, and bug reports.",
    email: siteConfig.supportEmail,
  },
  {
    title: "General",
    body: "Partnerships, product feedback, Shopify App interest, and other questions.",
    email: siteConfig.helloEmail,
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white">
      <header className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
        <nav className="mx-auto flex max-w-4xl items-center justify-between px-5 py-4">
          <Link href="/" className="text-base font-bold text-slate-950 dark:text-white">
            China Supply Radar
          </Link>
          <Link
            href="/"
            className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-slate-400 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500"
          >
            Back home
          </Link>
        </nav>
      </header>

      <article className="mx-auto max-w-4xl px-5 py-14">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
          Contact
        </p>
        <h1 className="mt-4 text-4xl font-bold text-slate-950 dark:text-white">
          Reach the China Supply Radar team.
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
          For extension support, store review questions, partnerships, or early
          Shopify App V1 interest, use the mailbox that best matches your
          request.
        </p>

        <section className="mt-10 grid gap-5 md:grid-cols-2">
          {contactOptions.map((option) => (
            <div
              key={option.title}
              className="rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900"
            >
              <h2 className="text-xl font-bold text-slate-950 dark:text-white">
                {option.title}
              </h2>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                {option.body}
              </p>
              <a
                href={`mailto:${option.email}`}
                className="mt-5 inline-flex min-h-12 items-center justify-center rounded-md bg-teal-600 px-5 py-3 text-base font-semibold text-white hover:bg-teal-700"
              >
                {option.email}
              </a>
            </div>
          ))}
        </section>
      </article>
    </main>
  );
}
