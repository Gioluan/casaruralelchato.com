import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { SITE } from "@/lib/site";
import { BLOG_POSTS } from "@/content/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const localePages: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: `${SITE.url}/${locale}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: locale === "es" ? 1.0 : 0.9,
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [l, `${SITE.url}/${l}`])),
    },
  }));

  const blogIndex: MetadataRoute.Sitemap = [
    {
      url: `${SITE.url}/es/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const blogPosts: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${SITE.url}/es/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...localePages, ...blogIndex, ...blogPosts];
}
