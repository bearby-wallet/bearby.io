import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import DocsContent from "@/components/Docs/DocsContent";
import SidebarLink from "@/components/Docs/SidebarLink";
import { getAllPosts, getPostBySlug, getPostSlugs } from "@/libs/markdown";
import { Metadata } from 'next';
import { routing } from '@/i18n/routing';
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from 'remark-gfm';

type Params = { slug: string; locale: string };

export async function generateStaticParams() {
  const locales = routing.locales;
  const params = [];

  for (const locale of locales) {
    const slugs = await getPostSlugs(locale);
    for (const slug of slugs) {
      params.push({ locale, slug: slug.replace(/\.mdx$/, "") });
    }
  }

  return params;
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug, locale } = await params;

  const post = await getPostBySlug(locale, slug, ["title", "description"]);
  const t = await getTranslations({ locale, namespace: 'docs' });
  const siteName = process.env.SITE_NAME || "Bearby";

  if (post) {
    return {
      title: `${post.title || t('title')} | ${siteName}`,
      description: post.description?.slice(0, 136) + "...",
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: false,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
      alternates: {
        languages: {
          en: `/en/docs/${slug}`,
          fr: `/fr/docs/${slug}`,
          ru: `/ru/docs/${slug}`,
        },
      },
    };
  } else {
    return {
      title: t('notFound.title'),
      description: t('notFound.description'),
    };
  }
}

export default async function DocsPage({ params }: { params: Promise<Params> }) {
  const { slug, locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const posts = await getAllPosts(["title", "date", "description", "slug"], locale);
  const post = await getPostBySlug(locale, slug, ["title", "content"]);
  const t = await getTranslations({ locale, namespace: 'docs' });

  let serializedContent = null;
  if (typeof post.content === "string") {
    serializedContent = await serialize(post.content, {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    });
  }

  return (
    <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/4">
            <div className="sticky top-[74px] rounded-lg bg-white/5 p-4 transition-all">
              {/* <h2 className="text-lg font-semibold mb-4">{t('title')}</h2> */}
              <ul className="space-y-2">
                {posts.map((post, key) => (
                  <SidebarLink post={post} locale={locale} key={key} />
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full px-4 lg:w-3/4">
            <div className="blog-details blog-details-docs rounded-lg bg-white/5 px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
              {serializedContent ? (
                <DocsContent content={serializedContent} />
              ) : (
                <div>
                  <h1>{t('notFound.title')}</h1>
                  <p>{t('notFound.description')}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
