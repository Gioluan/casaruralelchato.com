import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/content/blog";
import { SITE } from "@/lib/site";
import Reveal from "@/components/Reveal";

// Blog is Spanish-only for now
export function generateStaticParams() {
  return [{ locale: "es" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "es") return {};
  return {
    title: "Diario del Chato · Blog sobre Portell de Morella y Els Ports",
    description:
      "Guías, rutas y consejos para descubrir Portell de Morella, Els Ports, Morella y el Maestrazgo. Blog oficial de Casa Rural el Chato.",
    alternates: {
      canonical: `${SITE.url}/es/blog`,
    },
    openGraph: {
      title: "Diario del Chato · Blog de Casa Rural el Chato",
      description:
        "Guías, rutas y consejos para descubrir Portell de Morella, Els Ports y el Maestrazgo.",
      url: `${SITE.url}/es/blog`,
      type: "website",
      images: ["/images/photo-14.jpg"],
    },
  };
}

export default async function BlogIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es") notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE.url}/es` },
      { "@type": "ListItem", position: 2, name: "Diario del Chato", item: `${SITE.url}/es/blog` },
    ],
  };

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Diario del Chato",
    description: "Blog oficial de Casa Rural el Chato sobre Portell de Morella y Els Ports.",
    url: `${SITE.url}/es/blog`,
    publisher: {
      "@type": "Organization",
      name: "Casa Rural el Chato",
      url: SITE.url,
    },
    blogPost: BLOG_POSTS.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      datePublished: p.date,
      url: `${SITE.url}/es/blog/${p.slug}`,
      image: `${SITE.url}${p.heroImage}`,
      description: p.description,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      {/* Header */}
      <section className="relative pt-40 pb-20 bg-cream-soft">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <nav className="text-[11px] tracking-[0.2em] uppercase text-ink-soft mb-10 flex gap-2 items-center">
            <Link href="/es" className="hover:text-forest-deep transition">Inicio</Link>
            <span>/</span>
            <span className="text-forest-deep">Diario del Chato</span>
          </nav>
          <Reveal direction="up">
            <div className="text-[11px] tracking-[0.3em] uppercase text-moss mb-6">Blog</div>
          </Reveal>
          <Reveal direction="up" delay={100}>
            <h1 className="font-display text-5xl md:text-7xl leading-[0.98] text-forest-deep mb-6 max-w-4xl">
              Diario del <span className="font-display-italic text-ochre">Chato</span>
            </h1>
          </Reveal>
          <Reveal direction="up" delay={200}>
            <p className="text-lg text-ink-soft max-w-2xl leading-relaxed">
              Guías, rutas y recomendaciones para descubrir Portell de Morella, Els Ports y el Maestrazgo.
              Historias y consejos de quien vive aquí todo el año.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {BLOG_POSTS.map((post, i) => (
              <Reveal key={post.slug} direction="up" delay={(i % 3) * 100}>
                <article className="group h-full flex flex-col">
                  <Link href={`/es/blog/${post.slug}`} className="block">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-sm mb-6">
                      <Image
                        src={post.heroImage}
                        alt={post.heroAlt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover photo-warm transition-transform duration-[1500ms] group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-forest-deep/0 group-hover:bg-forest-deep/10 transition" />
                    </div>
                  </Link>

                  <div className="flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase text-moss mb-4">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("es-ES", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                    <span>·</span>
                    <span>{post.readingTime}</span>
                  </div>

                  <h2 className="font-display text-2xl leading-tight text-forest-deep mb-3">
                    <Link href={`/es/blog/${post.slug}`} className="hover:text-ochre transition">
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-ink-soft text-sm leading-relaxed flex-1">{post.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] tracking-wider uppercase text-moss border border-stone px-2.5 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/es/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 mt-6 text-[11px] tracking-[0.2em] uppercase text-forest-deep link-underline"
                  >
                    Leer artículo <span>→</span>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
