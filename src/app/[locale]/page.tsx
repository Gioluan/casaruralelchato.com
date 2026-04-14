import Image from "next/image";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import {
  SITE,
  HERO_PHOTO,
  HERO_ACCENTS,
  INTRO_PHOTO,
  ROOM_PHOTOS,
  LOUNGE_PHOTOS,
  TASTING_PHOTO,
  LOCATION_PHOTO,
  ACTIVITY_PHOTOS,
  GALLERY_PHOTOS,
} from "@/lib/site";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import LightboxGallery from "@/components/Lightbox";
import LeafletMap from "@/components/LeafletMap";
import HorizontalShowcase from "@/components/HorizontalShowcase";
import { BLOG_POSTS } from "@/content/blog";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const typedLocale = locale as Locale;
  const t = getDictionary(typedLocale);

  const roomsAndLoungesTags = {
    es: ["Habitación", "Habitación", "Habitación", "Salón", "Salón", "Salón"],
    en: ["Bedroom", "Bedroom", "Bedroom", "Lounge", "Lounge", "Lounge"],
    ca: ["Habitació", "Habitació", "Habitació", "Sala", "Sala", "Sala"],
    fr: ["Chambre", "Chambre", "Chambre", "Salon", "Salon", "Salon"],
  }[typedLocale];

  const showcaseItems = [
    ...t.house.rooms.map((r, i) => ({ ...r, tag: roomsAndLoungesTags[i], photo: ROOM_PHOTOS[i] })),
    ...t.house.lounges.map((r, i) => ({ ...r, tag: roomsAndLoungesTags[3 + i], photo: LOUNGE_PHOTOS[i] })),
  ].map(({ name, desc, tag, photo }) => ({ title: name, desc, tag, photo }));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const showBlogPreview = typedLocale === "es";
  const previewPosts = BLOG_POSTS.slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* ============ HERO — asymmetric collage ============ */}
      <section className="relative min-h-[100svh] w-full overflow-hidden bg-cream">
        <div className="mx-auto max-w-[1600px] h-[100svh] min-h-[680px] grid grid-cols-1 md:grid-cols-12">
          {/* Left: main portrait photo of the house */}
          <div className="relative col-span-1 md:col-span-7 h-full">
            <Image
              src={HERO_PHOTO}
              alt="Casa Rural el Chato — Portell de Morella"
              fill
              priority
              sizes="(min-width: 768px) 58vw, 100vw"
              className="object-cover animate-kenburns photo-warm"
              style={{ objectPosition: "center 35%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-cream/20" />

            {/* Small house nameplate chip, overlay */}
            <div className="hidden md:flex absolute top-10 left-10 items-center gap-3 bg-cream/90 backdrop-blur px-4 py-2 text-[10px] tracking-[0.3em] uppercase text-forest-deep">
              <span className="w-1.5 h-1.5 rounded-full bg-ochre animate-pulse" />
              Casa · 1800s · Nº 24
            </div>
          </div>

          {/* Right: text panel with accent photo stack */}
          <div className="relative col-span-1 md:col-span-5 bg-cream-soft flex flex-col justify-between p-8 md:p-14 lg:p-20">
            <Reveal direction="fade" delay={100}>
              <div className="text-[10px] tracking-[0.3em] uppercase text-moss">
                {t.hero.eyebrow}
              </div>
            </Reveal>

            <div>
              <Reveal direction="up" delay={200}>
                <h1 className="font-display text-[clamp(2.4rem,5.2vw,5.2rem)] leading-[0.95] text-forest-deep">
                  {t.hero.title}
                  <br />
                  <span className="font-display-italic text-ochre">{t.hero.titleItalic}</span>
                </h1>
              </Reveal>
              <Reveal direction="up" delay={400}>
                <p className="mt-8 max-w-md text-base md:text-lg text-ink-soft leading-relaxed">
                  {t.hero.subtitle}
                </p>
              </Reveal>
              <Reveal direction="up" delay={600}>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <a
                    href="#contacto"
                    className="group inline-flex items-center gap-3 rounded-full bg-forest-deep text-cream px-8 py-4 text-[11px] tracking-[0.2em] uppercase hover:bg-forest transition"
                  >
                    {t.hero.ctaPrimary}
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </a>
                  <a
                    href="#casa"
                    className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-forest-deep link-underline"
                  >
                    {t.hero.ctaSecondary}
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Accent photo stack — small tilted polaroid-ish cards */}
            <Reveal direction="right" delay={800}>
              <div className="flex items-center gap-3 mt-10 md:mt-0">
                <div className="text-[10px] tracking-[0.2em] uppercase text-moss flex-1">
                  {typedLocale === "en"
                    ? "Inside the house"
                    : typedLocale === "fr"
                      ? "À l'intérieur"
                      : typedLocale === "ca"
                        ? "A dins de la casa"
                        : "Dentro de la casa"}
                </div>
                <div className="flex -space-x-3">
                  {HERO_ACCENTS.map((src, i) => (
                    <div
                      key={src}
                      className="relative w-20 h-24 md:w-24 md:h-28 overflow-hidden border-4 border-cream shadow-xl hover:z-10 hover:scale-110 transition-transform duration-500"
                      style={{ transform: `rotate(${(i - 1) * 4}deg)` }}
                    >
                      <Image src={src} alt="" fill sizes="120px" className="object-cover photo-warm" />
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="absolute bottom-6 left-6 md:left-10 z-10 flex items-center gap-3 text-cream/80 text-[10px] tracking-[0.3em] uppercase">
          <span className="block w-10 h-px bg-cream/60" />
          {t.hero.scroll}
        </div>
      </section>

      {/* ============ INTRO ============ */}
      <section className="relative py-28 md:py-40 bg-cream overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <Reveal direction="left">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <Image
                  src={INTRO_PHOTO}
                  alt="Cocina comedor de Casa Rural el Chato"
                  fill
                  sizes="(min-width: 768px) 40vw, 90vw"
                  className="object-cover photo-warm"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-forest-deep text-cream p-6 md:p-10 max-w-xs shadow-2xl">
                <div className="font-display-italic text-2xl md:text-3xl leading-tight">
                  {t.intro.quote}
                </div>
                <div className="mt-4 text-[11px] tracking-widest uppercase text-ochre-soft">
                  {t.intro.quoteAttribution}
                </div>
              </div>
              {/* Vertical label decoration */}
              <div className="hidden md:block absolute -left-12 top-0 bottom-0">
                <div className="eyebrow-vertical text-moss h-full flex items-center">
                  Portell · Els Ports · Castellón
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal direction="up">
              <div className="text-[11px] tracking-[0.3em] uppercase text-moss mb-6">
                {t.intro.eyebrow}
              </div>
            </Reveal>
            <Reveal direction="up" delay={100}>
              <h2 className="font-display text-4xl md:text-6xl leading-[1.02] text-forest-deep mb-10 max-w-lg">
                {t.intro.title}
              </h2>
            </Reveal>
            <Reveal direction="up" delay={200}>
              <p className="drop-cap text-lg leading-relaxed text-ink-soft mb-6">{t.intro.body1}</p>
            </Reveal>
            <Reveal direction="up" delay={300}>
              <p className="text-lg leading-relaxed text-ink-soft">{t.intro.body2}</p>
            </Reveal>

            <Reveal direction="up" delay={400}>
              <div className="mt-12 grid grid-cols-3 gap-6 border-t border-stone/60 pt-10">
                <div>
                  <div className="font-display text-4xl text-forest-deep">3</div>
                  <div className="text-xs tracking-wider uppercase text-ink-soft mt-2">
                    {locale === "en" ? "Bedrooms" : locale === "fr" ? "Chambres" : locale === "ca" ? "Habitacions" : "Habitaciones"}
                  </div>
                </div>
                <div>
                  <div className="font-display text-4xl text-forest-deep">3</div>
                  <div className="text-xs tracking-wider uppercase text-ink-soft mt-2">
                    {locale === "en" ? "Lounges" : locale === "fr" ? "Salons" : locale === "ca" ? "Sales" : "Salones"}
                  </div>
                </div>
                <div>
                  <div className="font-display text-4xl text-forest-deep">1</div>
                  <div className="text-xs tracking-wider uppercase text-ink-soft mt-2">
                    {locale === "en" ? "Whole house" : locale === "fr" ? "Maison entière" : locale === "ca" ? "Casa sencera" : "Casa entera"}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ HOUSE — horizontal showcase ============ */}
      <section id="casa" className="relative py-28 md:py-40 bg-stone-soft overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal direction="up">
            <div className="max-w-3xl mb-16">
              <div className="text-[11px] tracking-[0.3em] uppercase text-moss mb-6">
                {t.house.eyebrow}
              </div>
              <h2 className="font-display text-4xl md:text-6xl leading-[1.02] text-forest-deep mb-6">
                {t.house.title}
              </h2>
              <p className="text-lg text-ink-soft leading-relaxed max-w-2xl">{t.house.subtitle}</p>
            </div>
          </Reveal>

          <Reveal direction="up" delay={150}>
            <HorizontalShowcase items={showcaseItems} />
          </Reveal>

          {/* Features grid */}
          <div className="mt-28 grid md:grid-cols-3 gap-x-12 gap-y-10 border-t border-stone/60 pt-16">
            {t.house.features.map((f, i) => (
              <Reveal key={f.title} direction="up" delay={i * 80}>
                <div className="flex gap-5">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-forest-deep text-ochre-soft flex items-center justify-center font-display text-sm">
                    ✦
                  </div>
                  <div>
                    <h4 className="font-display text-lg text-forest-deep mb-1">{f.title}</h4>
                    <p className="text-sm text-ink-soft leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TASTING EXPERIENCE ============ */}
      <section id="cata" className="relative py-28 md:py-40 bg-forest-deep text-cream overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src={TASTING_PHOTO} alt="" fill sizes="100vw" className="object-cover photo-warm" />
          <div className="absolute inset-0 bg-forest-deep/70" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal direction="up">
            <div className="max-w-3xl">
              <div className="text-[11px] tracking-[0.3em] uppercase text-ochre-soft mb-6">
                {t.tasting.eyebrow}
              </div>
              <h2 className="font-display text-4xl md:text-6xl leading-[1.02] mb-4">
                {typedLocale === "en"
                  ? "Private tastings"
                  : typedLocale === "fr"
                    ? "Dégustations privées"
                    : typedLocale === "ca"
                      ? "Tastos privats"
                      : "Catas privadas"}
                <br />
                <span className="font-display-italic text-ochre-soft">@964TASTINGSHOP</span>
              </h2>
              <p className="text-xl text-cream/85 font-display-italic mb-8">{t.tasting.lead}</p>
              <p className="text-cream/75 leading-relaxed max-w-2xl">{t.tasting.body}</p>
            </div>
          </Reveal>

          <div className="mt-20 grid md:grid-cols-3 gap-8">
            {t.tasting.types.map((type, i) => (
              <Reveal key={type.name} direction="up" delay={i * 120}>
                <div className="border border-cream/20 p-8 hover:border-ochre-soft transition group h-full">
                  <div className="text-4xl mb-4 font-display-italic text-ochre-soft">
                    {type.name.includes("Vin") || type.name.includes("Wine") ? "𝔙" : type.name.includes("Cerve") || type.name.includes("Beer") || type.name.includes("Biè") ? "𝔅" : "𝔏"}
                  </div>
                  <h3 className="font-display text-2xl mb-3">{type.name}</h3>
                  <p className="text-cream/70 text-sm leading-relaxed">{type.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            {t.tasting.features.map((f, i) => (
              <Reveal key={f.title} direction="left" delay={i * 100}>
                <div className="flex gap-5 border-l border-ochre-soft/40 pl-6">
                  <div>
                    <h4 className="font-display text-lg text-ochre-soft mb-1">{f.title}</h4>
                    <p className="text-sm text-cream/70 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal direction="up" delay={200}>
            <div className="mt-16">
              <a
                href="#contacto"
                className="group inline-flex items-center gap-3 bg-ochre text-ink px-10 py-5 text-sm tracking-widest uppercase hover:bg-ochre-soft transition"
              >
                {t.tasting.cta}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 30 REASONS ============ */}
      <section className="py-28 md:py-40 bg-cream-soft">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal direction="up">
            <div className="max-w-3xl mb-20">
              <div className="text-[11px] tracking-[0.3em] uppercase text-moss mb-6">
                {t.reasons.eyebrow}
              </div>
              <h2 className="font-display text-4xl md:text-6xl leading-[1.02] text-forest-deep mb-4">
                {t.reasons.title}
              </h2>
              <p className="text-lg text-ink-soft">{t.reasons.subtitle}</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
            {t.reasons.list.map((r, i) => (
              <Reveal key={i} direction="up" delay={(i % 6) * 60}>
                <div className="flex gap-5 group">
                  <div className="shrink-0 font-display-italic text-2xl text-ochre w-10">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="border-l border-stone/60 pl-5 group-hover:border-ochre transition">
                    <h4 className="font-display text-lg text-forest-deep mb-1">{r.title}</h4>
                    <p className="text-sm text-ink-soft leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ACTIVITIES ============ */}
      <section id="actividades" className="py-28 md:py-40 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal direction="up">
            <div className="max-w-3xl mb-20">
              <div className="text-[11px] tracking-[0.3em] uppercase text-moss mb-6">
                {t.activities.eyebrow}
              </div>
              <h2 className="font-display text-4xl md:text-6xl leading-[1.02] text-forest-deep mb-4">
                {t.activities.title}
              </h2>
              <p className="text-lg text-ink-soft">{t.activities.lead}</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {t.activities.items.map((item, i) => {
              const big = i % 3 === 0;
              return (
                <Reveal
                  key={item.title}
                  direction={i % 2 === 0 ? "left" : "right"}
                  delay={(i % 3) * 120}
                  as="article"
                  className={`relative overflow-hidden rounded-sm group ${
                    big ? "md:col-span-2 aspect-[21/9]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={ACTIVITY_PHOTOS[i % ACTIVITY_PHOTOS.length]}
                    alt={item.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 90vw"
                    className="object-cover photo-warm transition-transform duration-[1500ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8 md:p-10 text-cream max-w-lg">
                    <h3 className="font-display text-3xl md:text-4xl mb-3">{item.title}</h3>
                    <p className="text-cream/85 leading-relaxed">{item.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ RATES ============ */}
      <section id="tarifas" className="py-28 md:py-40 bg-stone-soft">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <Reveal direction="up">
            <div className="max-w-3xl mb-16">
              <div className="text-[11px] tracking-[0.3em] uppercase text-moss mb-6">
                {t.rates.eyebrow}
              </div>
              <h2 className="font-display text-4xl md:text-6xl leading-[1.02] text-forest-deep mb-4">
                {t.rates.title}
              </h2>
              <p className="text-lg text-ink-soft">{t.rates.lead}</p>
            </div>
          </Reveal>

          <Reveal direction="up" delay={150}>
            <div className="bg-cream border border-stone/50 overflow-hidden shadow-[0_20px_60px_-30px_rgba(30,48,36,0.3)]">
              <div className="divide-y divide-stone/40">
                {t.rates.table.map((row, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between px-6 md:px-10 py-5 hover:bg-cream-soft transition group"
                  >
                    <div className="text-ink-soft text-sm md:text-base flex-1 group-hover:text-forest-deep transition">
                      {row.nights}
                    </div>
                    <div className="text-right">
                      <div className="font-display text-xl md:text-2xl text-forest-deep">{row.total}</div>
                      <div className="text-xs text-ink-soft">{row.perNight}</div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="border-t border-stone/40 px-6 md:px-10 py-5 text-xs text-ink-soft italic">
                {t.rates.note}
              </p>
            </div>
          </Reveal>

          <Reveal direction="up" delay={250}>
            <ul className="mt-12 grid md:grid-cols-2 gap-x-10 gap-y-3 text-sm text-ink-soft">
              {t.rates.rules.map((rule) => (
                <li key={rule} className="flex gap-3">
                  <span className="text-ochre">•</span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal direction="up" delay={350}>
            <div className="mt-12 text-center">
              <a
                href="#contacto"
                className="group inline-flex items-center gap-3 rounded-full bg-forest-deep text-cream px-10 py-5 text-sm tracking-widest uppercase hover:bg-forest transition"
              >
                {t.rates.cta}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ GALLERY with lightbox ============ */}
      <section id="galeria" className="py-28 md:py-40 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal direction="up">
            <div className="max-w-3xl mb-16">
              <div className="text-[11px] tracking-[0.3em] uppercase text-moss mb-6">
                {t.gallery.title}
              </div>
              <h2 className="font-display text-4xl md:text-6xl leading-[1.02] text-forest-deep mb-4">
                {t.gallery.title}
              </h2>
              <p className="text-lg text-ink-soft max-w-xl">{t.gallery.lead}</p>
            </div>
          </Reveal>

          <Reveal direction="up" delay={150}>
            <LightboxGallery photos={GALLERY_PHOTOS} visibleCount={16} />
          </Reveal>
        </div>
      </section>

      {/* ============ LOCATION + Leaflet map ============ */}
      <section id="como-llegar" className="py-28 md:py-40 bg-forest-deep text-cream overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-2 gap-16 items-start">
          <Reveal direction="left">
            <div>
              <div className="text-[11px] tracking-[0.3em] uppercase text-ochre-soft mb-6">
                {t.location.eyebrow}
              </div>
              <h2 className="font-display text-4xl md:text-6xl leading-[1.02] mb-6">
                {t.location.title}
              </h2>
              <p className="text-cream/80 leading-relaxed mb-8">{t.location.body}</p>
              <div className="text-[11px] tracking-[0.2em] uppercase text-ochre-soft mb-8">
                {t.location.address}
              </div>
              <div className="space-y-8 border-t border-cream/15 pt-8">
                {t.location.getting.map((g) => (
                  <div key={g.title}>
                    <h4 className="font-display text-xl mb-2">{g.title}</h4>
                    <p className="text-cream/70 text-sm leading-relaxed">{g.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={150}>
            <div className="relative">
              <LeafletMap
                lat={SITE.address.lat}
                lng={SITE.address.lng}
                zoom={13}
                label={`${SITE.address.locality} · ${SITE.address.postalCode}`}
              />
              <div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 bg-ochre text-ink px-6 py-4 shadow-2xl max-w-xs">
                <div className="text-[10px] tracking-[0.2em] uppercase mb-1">
                  {typedLocale === "en" ? "GPS" : typedLocale === "fr" ? "GPS" : "GPS"}
                </div>
                <div className="font-display text-lg">
                  {SITE.address.lat}, {SITE.address.lng}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="py-28 md:py-40 bg-cream-soft">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal direction="up">
            <div className="max-w-3xl mb-16">
              <div className="text-[11px] tracking-[0.3em] uppercase text-moss mb-6">
                {t.testimonials.eyebrow}
              </div>
              <h2 className="font-display text-4xl md:text-6xl leading-[1.02] text-forest-deep">
                {t.testimonials.title}
              </h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {t.testimonials.items.map((tm, i) => (
              <Reveal key={i} direction="up" delay={i * 140}>
                <figure className="bg-cream p-10 border border-stone/50 h-full hover:shadow-xl transition">
                  <div className="text-5xl font-display-italic text-ochre leading-none mb-6">&ldquo;</div>
                  <blockquote className="font-display text-xl text-forest-deep leading-snug mb-8">
                    {tm.quote}
                  </blockquote>
                  <figcaption className="text-xs tracking-widest uppercase text-ink-soft">
                    {tm.author}
                    <span className="block text-moss mt-1 not-italic">{tm.source}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section id="faq" className="py-28 md:py-40 bg-cream">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <Reveal direction="up">
            <div className="max-w-3xl mb-16">
              <div className="text-[11px] tracking-[0.3em] uppercase text-moss mb-6">
                {t.faq.eyebrow}
              </div>
              <h2 className="font-display text-4xl md:text-6xl leading-[1.02] text-forest-deep mb-4">
                {t.faq.title}
              </h2>
              <p className="text-lg text-ink-soft max-w-2xl">{t.faq.lead}</p>
            </div>
          </Reveal>

          <dl className="divide-y divide-stone/60 border-t border-b border-stone/60">
            {t.faq.items.map((item, i) => (
              <Reveal key={i} direction="up" delay={i * 40}>
                <details className="group py-6 px-1 cursor-pointer">
                  <summary className="flex items-start gap-6 list-none [&::-webkit-details-marker]:hidden">
                    <dt className="flex-1 font-display text-xl md:text-2xl text-forest-deep group-hover:text-ochre transition leading-snug">
                      {item.q}
                    </dt>
                    <span className="shrink-0 w-8 h-8 rounded-full border border-stone text-forest-deep flex items-center justify-center text-lg transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <dd className="mt-5 text-ink-soft leading-relaxed max-w-3xl pr-14">{item.a}</dd>
                </details>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* ============ BLOG PREVIEW (Spanish only) ============ */}
      {showBlogPreview && (
        <section id="blog" className="py-28 md:py-40 bg-stone-soft">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal direction="up">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                <div className="max-w-2xl">
                  <div className="text-[11px] tracking-[0.3em] uppercase text-moss mb-6">
                    {t.blogPreview.eyebrow}
                  </div>
                  <h2 className="font-display text-4xl md:text-6xl leading-[1.02] text-forest-deep mb-4">
                    {t.blogPreview.title}
                  </h2>
                  <p className="text-lg text-ink-soft">{t.blogPreview.lead}</p>
                </div>
                <Link
                  href="/es/blog"
                  className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-forest-deep link-underline shrink-0"
                >
                  {t.blogPreview.all} →
                </Link>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-8">
              {previewPosts.map((post, i) => (
                <Reveal key={post.slug} direction="up" delay={i * 120}>
                  <article className="group h-full flex flex-col">
                    <Link href={`/es/blog/${post.slug}`} className="block mb-5">
                      <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                        <Image
                          src={post.heroImage}
                          alt={post.heroAlt}
                          fill
                          sizes="(min-width: 1024px) 33vw, 100vw"
                          className="object-cover photo-warm transition-transform duration-[1500ms] group-hover:scale-110"
                        />
                      </div>
                    </Link>
                    <div className="flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase text-moss mb-3">
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
                    <h3 className="font-display text-2xl leading-tight text-forest-deep mb-3">
                      <Link href={`/es/blog/${post.slug}`} className="hover:text-ochre transition">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-ink-soft text-sm leading-relaxed flex-1">
                      {post.description}
                    </p>
                    <Link
                      href={`/es/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 mt-5 text-[11px] tracking-[0.2em] uppercase text-forest-deep link-underline"
                    >
                      {t.blogPreview.readMore} →
                    </Link>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============ CONTACT / BOOK ============ */}
      <section id="contacto" className="py-28 md:py-40 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-2 gap-16">
          <Reveal direction="left">
            <div>
              <div className="text-[11px] tracking-[0.3em] uppercase text-moss mb-6">
                {t.contact.eyebrow}
              </div>
              <h2 className="font-display text-4xl md:text-6xl leading-[1.02] text-forest-deep mb-6">
                {t.contact.title}
              </h2>
              <p className="text-lg text-ink-soft leading-relaxed mb-12">{t.contact.lead}</p>

              <div className="space-y-6">
                <div>
                  <div className="text-[11px] tracking-[0.2em] uppercase text-moss mb-1">{t.contact.phone}</div>
                  <a href={SITE.phoneHref} className="font-display text-3xl text-forest-deep hover:text-ochre transition">
                    {SITE.phoneDisplay}
                  </a>
                </div>
                <div>
                  <div className="text-[11px] tracking-[0.2em] uppercase text-moss mb-1">{t.contact.email}</div>
                  <a href={SITE.emailHref} className="font-display text-xl text-forest-deep hover:text-ochre transition break-all">
                    {SITE.email}
                  </a>
                </div>
                <div>
                  <div className="text-[11px] tracking-[0.2em] uppercase text-moss mb-1">{t.contact.addressLabel}</div>
                  <div className="text-ink-soft">{t.contact.addressValue}</div>
                </div>
                <div>
                  <div className="text-[11px] tracking-[0.2em] uppercase text-moss mb-1">{t.contact.hours}</div>
                  <div className="text-ink-soft">{t.contact.hoursValue}</div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={150}>
            <div className="bg-stone-soft p-10 md:p-14">
              <h3 className="font-display text-2xl text-forest-deep mb-8">{t.contact.bookOn}</h3>
              <div className="space-y-4">
                <a
                  href={SITE.booking.bookingCom}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center justify-between border border-stone px-6 py-5 bg-cream hover:border-forest-deep hover:shadow-md transition group"
                >
                  <span className="font-medium text-forest-deep">Booking.com</span>
                  <span className="text-ochre group-hover:translate-x-1 transition">→</span>
                </a>
                <a
                  href={SITE.booking.airbnb}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center justify-between border border-stone px-6 py-5 bg-cream hover:border-forest-deep hover:shadow-md transition group"
                >
                  <span className="font-medium text-forest-deep">Airbnb</span>
                  <span className="text-ochre group-hover:translate-x-1 transition">→</span>
                </a>
                <a
                  href={SITE.booking.escapadaRural}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center justify-between border border-stone px-6 py-5 bg-cream hover:border-forest-deep hover:shadow-md transition group"
                >
                  <span className="font-medium text-forest-deep">Escapada Rural</span>
                  <span className="text-ochre group-hover:translate-x-1 transition">→</span>
                </a>
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center justify-between bg-forest-deep text-cream px-6 py-5 mt-6 hover:bg-forest transition group"
                >
                  <span className="font-medium">WhatsApp</span>
                  <span className="group-hover:translate-x-1 transition">→</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
