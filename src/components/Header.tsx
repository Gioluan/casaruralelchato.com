"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { SITE } from "@/lib/site";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const base = `/${locale}`;
  const [open, setOpen] = useState(false);

  const links = [
    { href: `${base}#casa`, label: t.nav.rooms },
    { href: `${base}#tarifas`, label: t.nav.rates },
    { href: `${base}#cata`, label: t.nav.tasting },
    { href: `${base}#actividades`, label: t.nav.activities },
    { href: `${base}#galeria`, label: t.nav.gallery },
    ...(locale === "es" ? [{ href: "/es/blog", label: "Blog" }] : []),
    { href: `${base}#contacto`, label: t.nav.contact },
  ];

  // Lock body scroll when mobile menu is open + close on Escape
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-md bg-cream/85 border-b border-stone/40">
        <div className="mx-auto max-w-7xl px-5 md:px-6 lg:px-10 h-[68px] md:h-[72px] flex items-center justify-between gap-4">
          <Link
            href={base}
            onClick={close}
            className="flex items-center gap-3 shrink-0"
            aria-label="Casa Rural el Chato"
          >
            <span className="font-display text-lg md:text-xl tracking-tight text-forest-deep">
              Casa Rural <span className="font-display-italic">el Chato</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7 text-[13px] tracking-wide text-ink-soft uppercase">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="link-underline hover:text-forest transition"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right cluster: lang (desktop), reservar (always), hamburger (mobile) */}
          <div className="flex items-center gap-2 md:gap-3">
            <div className="hidden md:block">
              <LanguageSwitcher locale={locale} />
            </div>

            {/* Reservar button — always visible, responsive size */}
            <a
              href={`${base}#contacto`}
              onClick={close}
              className="inline-flex items-center gap-2 rounded-full bg-forest-deep text-cream px-4 md:px-5 py-2 md:py-2.5 text-[10px] md:text-[12px] tracking-[0.15em] md:tracking-wide uppercase hover:bg-forest transition whitespace-nowrap shadow-sm"
            >
              <span className="hidden sm:inline">{t.nav.book}</span>
              <span className="sm:hidden">{t.nav.book}</span>
              <span aria-hidden className="hidden sm:inline">→</span>
            </a>

            {/* Hamburger — mobile/tablet only */}
            <button
              type="button"
              aria-label="Menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-forest-deep -mr-2"
            >
              <span className="relative block w-6 h-[2px] bg-current">
                <span
                  className={`absolute left-0 w-6 h-[2px] bg-current transition-transform duration-300 ${
                    open ? "top-0 rotate-45" : "-top-[7px]"
                  }`}
                />
                <span
                  className={`absolute left-0 top-0 w-6 h-[2px] bg-current transition-opacity duration-200 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 w-6 h-[2px] bg-current transition-transform duration-300 ${
                    open ? "top-0 -rotate-45" : "top-[7px]"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          open ? "pointer-events-auto visible" : "pointer-events-none invisible"
        }`}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div
          onClick={close}
          className={`absolute inset-0 bg-ink/60 backdrop-blur-sm transition-opacity duration-500 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Panel */}
        <div
          className={`absolute top-[68px] md:top-[72px] left-0 right-0 bg-forest-deep text-cream shadow-2xl transition-transform duration-500 origin-top ${
            open ? "translate-y-0" : "-translate-y-4 opacity-0"
          }`}
          style={{ maxHeight: "calc(100vh - 68px)", overflowY: "auto" }}
        >
          <div className="px-6 py-10">
            <div className="text-[10px] tracking-[0.3em] uppercase text-ochre-soft mb-6">
              {locale === "en"
                ? "Menu"
                : locale === "fr"
                  ? "Menu"
                  : locale === "ca"
                    ? "Menú"
                    : "Menú"}
            </div>

            <nav className="flex flex-col divide-y divide-cream/10 border-y border-cream/10 mb-8">
              {links.map((l, i) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  className="group flex items-center justify-between py-5 font-display text-2xl text-cream hover:text-ochre-soft transition"
                  style={{
                    transitionDelay: open ? `${i * 50 + 100}ms` : "0ms",
                    transform: open ? "translateX(0)" : "translateX(-20px)",
                    opacity: open ? 1 : 0,
                    transitionProperty: "transform, opacity, color",
                    transitionDuration: "500ms",
                  }}
                >
                  <span>{l.label}</span>
                  <span className="text-ochre-soft opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                    →
                  </span>
                </a>
              ))}
            </nav>

            {/* CTA + contact + lang */}
            <a
              href={`${base}#contacto`}
              onClick={close}
              className="block text-center bg-ochre text-ink px-6 py-5 text-[11px] tracking-[0.25em] uppercase hover:bg-ochre-soft transition mb-8"
            >
              {t.nav.book} →
            </a>

            <div className="space-y-3 mb-8">
              <a
                href={SITE.phoneHref}
                className="flex items-center gap-3 text-cream/85 hover:text-ochre-soft transition"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="font-display text-lg">{SITE.phoneDisplay}</span>
              </a>
              <a
                href={SITE.emailHref}
                className="flex items-center gap-3 text-cream/85 hover:text-ochre-soft transition"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="m22 6-10 7L2 6" />
                </svg>
                <span className="text-sm break-all">{SITE.email}</span>
              </a>
            </div>

            <div className="pt-6 border-t border-cream/10 flex items-center justify-between">
              <div className="text-[10px] tracking-[0.3em] uppercase text-ochre-soft">
                {locale === "en"
                  ? "Language"
                  : locale === "fr"
                    ? "Langue"
                    : locale === "ca"
                      ? "Idioma"
                      : "Idioma"}
              </div>
              <LanguageSwitcher locale={locale} variant="dark" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
