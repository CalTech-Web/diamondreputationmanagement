import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Clock, ArrowRight } from "lucide-react";
import { ARTICLES, getArticle, type Block } from "@/lib/articles";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Faq } from "@/components/Faq";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { articleSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return buildMetadata({
    title: article.title,
    description: article.description,
    path: `/resources/${article.slug}/`,
    keywords: article.keywords,
    ogEyebrow: "Reputation Guide",
    ogTitle: article.h1,
  });
}

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2 key={i} className="mt-10 text-2xl font-bold tracking-tight text-ink">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={i} className="mt-8 text-xl font-semibold text-ink">
          {block.text}
        </h3>
      );
    case "p":
      return (
        <p
          key={i}
          className="mt-4 leading-relaxed text-gray-700"
          dangerouslySetInnerHTML={{ __html: block.text }}
        />
      );
    case "ul":
      return (
        <ul key={i} className="mt-4 space-y-2">
          {block.items.map((item, j) => (
            <li key={j} className="flex gap-2 text-gray-700">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
              <span dangerouslySetInnerHTML={{ __html: item }} />
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={i} className="mt-4 list-decimal space-y-2 pl-5 text-gray-700 marker:font-semibold marker:text-brand">
          {block.items.map((item, j) => (
            <li key={j} className="pl-1" dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ol>
      );
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const path = `/resources/${article.slug}/`;
  const related = ARTICLES.filter((a) => a.slug !== article.slug);

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            headline: article.h1,
            description: article.description,
            path,
            datePublished: article.datePublished,
            dateModified: article.dateModified,
          }),
          faqSchema(article.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Resources", path: "/resources/" },
            { name: article.h1, path },
          ]),
        ]}
      />

      <PageHero
        eyebrow="Reputation Guide"
        title={article.h1}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources/" },
          { name: article.h1, path },
        ]}
      />

      <article className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-1 text-sm font-medium text-gray-500">
            <Clock className="h-4 w-4" />
            {article.readTime}
          </p>
          <div className="mt-2 text-lg [&_a:hover]:text-brand-dark [&_a]:font-medium [&_a]:text-brand [&_a]:underline [&_a]:decoration-blue-300 [&_a]:underline-offset-2">
            {article.body.map((block, i) => renderBlock(block, i))}
          </div>

          <div className="mt-12">
            <Faq items={article.faqs} heading="Quick answers" />
          </div>
        </div>
      </article>

      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-ink">Keep reading</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/resources/${r.slug}/`}
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:border-blue-100 hover:shadow-md"
              >
                <h3 className="font-semibold text-ink group-hover:text-brand">{r.h1}</h3>
                <p className="mt-2 text-sm text-gray-600">{r.excerpt}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  Read the guide
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
