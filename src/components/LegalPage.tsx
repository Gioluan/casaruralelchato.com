import Link from "next/link";
import Reveal from "./Reveal";

export type LegalSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

export default function LegalPage({
  locale,
  crumb,
  title,
  lastUpdated,
  sections,
}: {
  locale: string;
  crumb: string;
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <section className="pt-32 pb-10 bg-cream-soft">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <nav className="text-[11px] tracking-[0.2em] uppercase text-ink-soft mb-10 flex gap-2 items-center">
            <Link href={`/${locale}`} className="hover:text-forest-deep transition">Inicio</Link>
            <span>/</span>
            <span className="text-forest-deep">{crumb}</span>
          </nav>
          <Reveal direction="up">
            <div className="text-[11px] tracking-[0.3em] uppercase text-moss mb-6">Legal</div>
            <h1 className="font-display text-4xl md:text-6xl leading-[1.02] text-forest-deep mb-4">
              {title}
            </h1>
            <p className="text-sm text-ink-soft">Última actualización: {lastUpdated}</p>
          </Reveal>
        </div>
      </section>

      <article className="py-20 bg-cream">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          {sections.map((section, i) => (
            <Reveal key={i} direction="up" delay={30}>
              <section className="mb-12">
                <h2 className="font-display text-2xl md:text-3xl text-forest-deep mb-5 leading-tight">
                  {i + 1}. {section.heading}
                </h2>
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="text-ink-soft leading-relaxed mb-4">
                    {p}
                  </p>
                ))}
                {section.list && (
                  <ul className="mt-4 space-y-2">
                    {section.list.map((item, k) => (
                      <li key={k} className="flex gap-3 text-ink-soft leading-relaxed">
                        <span className="text-ochre mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            </Reveal>
          ))}

          <Reveal direction="up">
            <div className="mt-16 border-t border-stone/60 pt-10 flex flex-wrap gap-6 text-[11px] tracking-[0.2em] uppercase text-ink-soft">
              <Link href={`/${locale}/legal/aviso-legal`} className="link-underline hover:text-forest-deep">
                Aviso Legal
              </Link>
              <Link href={`/${locale}/legal/privacidad`} className="link-underline hover:text-forest-deep">
                Privacidad
              </Link>
              <Link href={`/${locale}/legal/cookies`} className="link-underline hover:text-forest-deep">
                Cookies
              </Link>
            </div>
          </Reveal>
        </div>
      </article>
    </>
  );
}
