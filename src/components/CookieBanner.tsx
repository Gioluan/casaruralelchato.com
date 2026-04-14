"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Locale } from "@/i18n/config";

const STORAGE_KEY = "crc-cookie-consent";
type Consent = "all" | "necessary";

const copy: Record<Locale, {
  title: string;
  body: string;
  link: string;
  accept: string;
  reject: string;
}> = {
  es: {
    title: "Cookies en esta web",
    body: "Usamos cookies técnicas para que el sitio funcione y, con tu permiso, cookies analíticas para entender cómo se usa la web y mejorarla. No compartimos tus datos con terceros con fines publicitarios.",
    link: "Más información en la Política de Cookies",
    accept: "Aceptar todas",
    reject: "Solo necesarias",
  },
  en: {
    title: "Cookies on this site",
    body: "We use technical cookies to make the site work and, with your permission, analytics cookies to understand how the site is used and improve it. We don't share your data with third parties for advertising.",
    link: "Read our Cookie Policy",
    accept: "Accept all",
    reject: "Only necessary",
  },
  ca: {
    title: "Galetes en aquest lloc",
    body: "Fem servir galetes tècniques perquè el lloc funcioni i, amb el teu permís, galetes analítiques per entendre com s'utilitza i millorar-lo. No compartim les teves dades amb tercers amb finalitats publicitàries.",
    link: "Més informació a la Política de Galetes",
    accept: "Acceptar totes",
    reject: "Només necessàries",
  },
  fr: {
    title: "Cookies sur ce site",
    body: "Nous utilisons des cookies techniques pour le fonctionnement du site et, avec votre accord, des cookies analytiques pour comprendre son utilisation et l'améliorer. Nous ne partageons pas vos données à des fins publicitaires.",
    link: "Lire la Politique de cookies",
    accept: "Tout accepter",
    reject: "Seulement nécessaires",
  },
};

export default function CookieBanner({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const t = copy[locale];

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) setOpen(true);
    } catch {
      // localStorage not available
    }
  }, []);

  const setConsent = (value: Consent) => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ value, ts: Date.now() })
      );
    } catch {
      // ignore
    }
    setOpen(false);
    // Broadcast so analytics scripts can load dynamically
    try {
      window.dispatchEvent(new CustomEvent("crc:consent", { detail: value }));
    } catch {
      // ignore
    }
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t.title}
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-[90]"
    >
      <div className="bg-forest-deep text-cream shadow-2xl border border-forest/60 p-6 md:p-7">
        <div className="flex items-start gap-3 mb-3">
          <div className="w-8 h-8 shrink-0 rounded-full bg-ochre text-ink flex items-center justify-center text-sm font-display">
            🍪
          </div>
          <h2 className="font-display text-xl leading-snug">{t.title}</h2>
        </div>
        <p className="text-cream/75 text-sm leading-relaxed mb-4">{t.body}</p>
        <Link
          href={`/${locale}/legal/cookies`}
          className="inline-block text-[11px] tracking-[0.15em] uppercase text-ochre-soft link-underline mb-5"
        >
          {t.link} →
        </Link>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => setConsent("all")}
            className="flex-1 bg-ochre text-ink px-4 py-3 text-[11px] tracking-[0.15em] uppercase hover:bg-ochre-soft transition"
          >
            {t.accept}
          </button>
          <button
            onClick={() => setConsent("necessary")}
            className="flex-1 border border-cream/30 text-cream px-4 py-3 text-[11px] tracking-[0.15em] uppercase hover:bg-cream/10 transition"
          >
            {t.reject}
          </button>
        </div>
      </div>
    </div>
  );
}
