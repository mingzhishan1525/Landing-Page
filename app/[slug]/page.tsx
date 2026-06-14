import type { Metadata } from "next";
import BlogArticlePage, {
  generateStaticParams,
} from "../blog/[slug]/page";
import { getSeoArticle } from "../../lib/data/blog-posts";

type RootArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export { generateStaticParams };

export async function generateMetadata({
  params,
}: RootArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getSeoArticle(slug);

  if (!article) {
    return {};
  }

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: {
      canonical: `/${article.slug}`,
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: `/${article.slug}`,
    },
  };
}

export default BlogArticlePage;
