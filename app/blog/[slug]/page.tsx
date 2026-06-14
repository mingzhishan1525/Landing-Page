import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSeoArticle, seoArticles } from "../../../lib/data/blog-posts";
import { growthLinks } from "../../../lib/growth-links";

type BlogArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return seoArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getSeoArticle(slug);

  if (!article) {
    return {};
  }

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
    },
  };
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const article = getSeoArticle(slug);

  if (!article) {
    notFound();
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-14 text-slate-950 dark:bg-slate-950 dark:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <article className="mx-auto max-w-4xl">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
          China Supply Risk Guide
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight">{article.title}</h1>
        <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
          {article.intro}
        </p>

        <section className="mt-10 grid gap-5 md:grid-cols-3">
          <div className="rounded-lg border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
            <h2 className="font-bold">Key Dates</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              {article.keyDates.map((date) => (
                <li key={date}>{date}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
            <h2 className="font-bold">Risk Level</h2>
            <p className="mt-3 text-2xl font-bold text-teal-700 dark:text-teal-300">
              {article.riskLevel}
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
            <h2 className="font-bold">Recommended Order Deadline</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {article.recommendedOrderDeadline}
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-2xl font-bold">How China Supply Radar helps</h2>
          <ul className="mt-5 space-y-3">
            {article.howRadarHelps.map((item) => (
              <li key={item} className="flex gap-3 text-slate-700 dark:text-slate-300">
                <span className="font-bold text-teal-600 dark:text-teal-300">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={growthLinks.chromeInstallUrl}
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-teal-600 px-5 py-3 font-semibold text-white hover:bg-teal-700"
            >
              Install Chrome Extension
            </a>
            <a
              href={growthLinks.shopifyInstallUrl}
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-900 hover:border-slate-400 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            >
              Connect Shopify Store
            </a>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">FAQ</h2>
          <div className="mt-5 divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white dark:divide-slate-700 dark:border-slate-700 dark:bg-slate-900">
            {article.faqs.map((faq) => (
              <details key={faq.question} className="p-5">
                <summary className="cursor-pointer font-bold">{faq.question}</summary>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Related tools</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {article.relatedTools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="rounded-md border border-slate-300 bg-white px-4 py-3 font-semibold text-slate-900 hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
              >
                {tool.label}
              </Link>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
