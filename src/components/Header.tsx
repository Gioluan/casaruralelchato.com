import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const base = `/${locale}`;
  const links = [
    { href: `${base}#casa`, label: t.nav.rooms },
    { href: `${base}#tarifas`, label: t.nav.rates },
    { href: `${base}#cata`, label: t.nav.tasting },
    { href: `${base}#actividades`, label: t.nav.activities },
    { href: `${base}#galeria`, label: t.nav.gallery },
    ...(locale === "es" ? [{ href: "/es/blog", label: "Blog" }] : []),
    { href: `${base}#contacto`, label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-cream/85 border-b border-stone/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-[72px] flex items-center justify-between gap-6">
        <Link href={base} className="flex items-center gap-3 group">
          <span className="font-display text-xl tracking-tight text-forest-deep">
            Casa Rural <span className="font-display-italic">el Chato</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-[13px] tracking-wide text-ink-soft uppercase">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="link-underline hover:text-forest transition">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher locale={locale} />
          <a
            href={`${base}#contacto`}
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-forest-deep text-cream px-5 py-2.5 text-[13px] tracking-wide uppercase hover:bg-forest transition"
          >
            {t.nav.book}
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </header>
  );
}
