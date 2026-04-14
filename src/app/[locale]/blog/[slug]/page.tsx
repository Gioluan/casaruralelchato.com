import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BLOG_POSTS, getPost, getRelatedPosts } from "@/content/blog";
import { SITE } from "@/lib/site";
import Reveal from "@/components/Reveal";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ locale: "es", slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (locale !== "es") return {};
  const post = getPost(slug);
  if (!post) return {};

  const url = `${SITE.url}/es/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.date,
      authors: ["Casa Rural el Chato"],
      tags: post.tags,
      images: [
        {
          url: post.heroImage,
          width: 1600,
          height: 1067,
          alt: post.heroAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.heroImage],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (locale !== "es") notFound();
  const post = getPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug);
  const url = `${SITE.url}/es/blog/${post.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: `${SITE.url}${post.heroImage}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "Casa Rural el Chato",
      url: SITE.url,
    },
    publisher: {
      "@type": "Organization",
      name: "Casa Rural el Chato",
      logo: {
        "@type": "ImageObject",
        url: `${SITE.url}/logos/CRCP-Negro-exp-transparente.png`,
      },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: post.tags.join(", "),
    articleSection: "Turismo rural",
    inLanguage: "es-ES",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE.url}/es` },
      { "@type": "ListItem", position: 2, name: "Diario del Chato", item: `${SITE.url}/es/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  const faqSchema = post.faq && post.faq.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Header + hero */}
      <section className="relative pt-32 pb-14 bg-cream-soft">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <nav className="text-[11px] tracking-[0.2em] uppercase text-ink-soft mb-10 flex flex-wrap gap-2 items-center">
            <Link href="/es" className="hover:text-forest-deep transition">Inicio</Link>
            <span>/</span>
            <Link href="/es/blog" className="hover:text-forest-deep transition">Diario del Chato</Link>
            <span>/</span>
            <span className="text-forest-deep truncate max-w-[50%]">{post.title}</span>
          </nav>

          <div className="flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase text-moss mb-6">
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

          <Reveal direction="up">
            <h1 className="font-display text-4xl md:text-6xl leading-[1.02] text-forest-deep mb-8">
              {post.title}
            </h1>
          </Reveal>
          <Reveal direction="up" delay={150}>
            <p className="text-xl text-ink-soft leading-relaxed font-display-italic">
              {post.description}
            </p>
          </Reveal>

          <div className="mt-8 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] tracking-wider uppercase text-moss border border-stone px-2.5 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Hero image */}
      <Reveal direction="up" delay={100}>
        <div className="relative mx-auto max-w-5xl px-6 lg:px-10 mb-16">
          <div className="relative aspect-[16/9] overflow-hidden rounded-sm shadow-2xl">
            <Image
              src={post.heroImage}
              alt={post.heroAlt}
              fill
              priority
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="object-cover photo-warm"
            />
          </div>
        </div>
      </Reveal>

      {/* Article body */}
      <article className="pb-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <Reveal direction="up">
            <p className="drop-cap text-lg text-ink-soft leading-[1.85] mb-14">{post.intro}</p>
          </Reveal>

          {post.sections.map((section, i) => (
            <Reveal key={i} direction="up" delay={50}>
              <section className="mb-14">
                <h2 className="font-display text-3xl md:text-4xl text-forest-deep mb-6 leading-tight">
                  {section.heading}
                </h2>
                {section.paragraphs.map((para, j) => (
                  <p key={j} className="text-lg text-ink-soft leading-[1.85] mb-5">
                    {para}
                  </p>
                ))}
                {section.list && (
                  <ul className="mt-6 space-y-3">
                    {section.list.map((item, k) => (
                      <li key={k} className="flex gap-4 text-lg text-ink-soft leading-relaxed">
                        <span className="text-ochre font-display-italic text-xl mt-0.5">✦</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            </Reveal>
          ))}

          {/* FAQ */}
          {post.faq && post.faq.length > 0 && (
            <Reveal direction="up">
              <section className="mt-20 mb-14 border-t border-stone/60 pt-14">
                <h2 className="font-display text-3xl md:text-4xl text-forest-deep mb-10 leading-tight">
                  Preguntas frecuentes
                </h2>
                <dl className="space-y-8">
                  {post.faq.map((item, i) => (
                    <div key={i}>
                      <dt className="font-display text-xl text-forest-deep mb-3">{item.q}</dt>
                      <dd className="text-ink-soft leading-relaxed">{item.a}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            </Reveal>
          )}

          {/* CTA block */}
          <Reveal direction="up">
            <div className="mt-20 bg-forest-deep text-cream p-10 md:p-14 relative overflow-hidden">
              <div className="text-[11px] tracking-[0.3em] uppercase text-ochre-soft mb-4">
                ¿Te apetece?
              </div>
              <h3 className="font-display text-3xl md:text-4xl leading-tight mb-4">
                Ven a vivirlo a Casa Rural el Chato
              </h3>
              <p className="text-cream/80 max-w-xl mb-8 leading-relaxed">
                Alquila la casa entera en pleno casco histórico de Portell de Morella. Tres habitaciones,
                cocina comedor, tres salones y todo lo que necesitas para desconectar en Els Ports.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/es#contacto"
                  className="inline-flex items-center gap-3 bg-ochre text-ink px-8 py-4 text-[11px] tracking-[0.2em] uppercase hover:bg-ochre-soft transition"
                >
                  Reservar estancia <span>→</span>
                </Link>
                <Link
                  href="/es#tarifas"
                  className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-cream link-underline"
                >
                  Ver tarifas
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="py-24 bg-cream-soft">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal direction="up">
              <div className="text-[11px] tracking-[0.3em] uppercase text-moss mb-4">
                Seguir leyendo
              </div>
              <h2 className="font-display text-3xl md:text-5xl text-forest-deep mb-14">
                Más artículos del Diario
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-8">
              {related.map((p, i) => (
                <Reveal key={p.slug} direction="up" delay={i * 120}>
                  <Link href={`/es/blog/${p.slug}`} className="group block">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-sm mb-5">
                      <Image
                        src={p.heroImage}
                        alt={p.heroAlt}
                        fill
                        sizes="(min-width: 1024px) 33vw, 100vw"
                        className="object-cover photo-warm transition-transform duration-[1500ms] group-hover:scale-110"
                      />
                    </div>
                    <div className="text-[10px] tracking-[0.2em] uppercase text-moss mb-3">
                      {p.readingTime}
                    </div>
                    <h3 className="font-display text-xl text-forest-deep group-hover:text-ochre transition leading-tight">
                      {p.title}
                    </h3>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
