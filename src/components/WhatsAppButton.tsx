"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/i18n/config";
import { SITE } from "@/lib/site";

const messages: Record<Locale, { prefill: string; tooltip: string; ariaLabel: string }> = {
  es: {
    prefill: "Hola, me gustaría consultar disponibilidad en Casa Rural el Chato.",
    tooltip: "¿Dudas? Escríbenos por WhatsApp",
    ariaLabel: "Contactar por WhatsApp",
  },
  en: {
    prefill: "Hi, I'd like to check availability at Casa Rural el Chato.",
    tooltip: "Questions? Message us on WhatsApp",
    ariaLabel: "Contact us on WhatsApp",
  },
  ca: {
    prefill: "Hola, m'agradaria consultar disponibilitat a Casa Rural el Chato.",
    tooltip: "Dubtes? Escriu-nos per WhatsApp",
    ariaLabel: "Contactar per WhatsApp",
  },
  fr: {
    prefill: "Bonjour, je souhaite vérifier la disponibilité à Casa Rural el Chato.",
    tooltip: "Une question ? Écrivez-nous sur WhatsApp",
    ariaLabel: "Nous contacter par WhatsApp",
  },
};

export default function WhatsAppButton({ locale }: { locale: Locale }) {
  const [mounted, setMounted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const t = messages[locale];

  useEffect(() => {
    // Mount after first paint so it doesn't compete with hero animations
    const mountTimer = setTimeout(() => setMounted(true), 1200);
    // Auto-show tooltip after 6s, hide after 5s
    const showTimer = setTimeout(() => setShowTooltip(true), 6000);
    const hideTimer = setTimeout(() => setShowTooltip(false), 11000);
    return () => {
      clearTimeout(mountTimer);
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const href = `${SITE.whatsapp}?text=${encodeURIComponent(t.prefill)}`;

  return (
    <div
      className={`fixed bottom-6 left-6 z-[80] transition-[transform,opacity] duration-700 ${
        mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
      }`}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener"
        aria-label={t.ariaLabel}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white shadow-lg border-4 border-cream hover:brightness-110"
      >
        <svg
          viewBox="0 0 32 32"
          className="w-7 h-7 md:w-8 md:h-8"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M16.001 3.2c-7.08 0-12.8 5.72-12.8 12.8 0 2.256.592 4.464 1.712 6.416L3.2 28.8l6.592-1.728a12.74 12.74 0 0 0 6.208 1.584h.001c7.08 0 12.8-5.72 12.8-12.8 0-3.424-1.328-6.64-3.744-9.056a12.734 12.734 0 0 0-9.056-3.6zm0 23.344h-.001a10.64 10.64 0 0 1-5.424-1.488l-.384-.224-3.92 1.024 1.04-3.808-.256-.4a10.582 10.582 0 0 1-1.616-5.648c0-5.872 4.784-10.64 10.656-10.64 2.848 0 5.52 1.104 7.536 3.12a10.6 10.6 0 0 1 3.12 7.536c.016 5.872-4.768 10.528-10.752 10.528zm5.84-7.968c-.32-.16-1.888-.928-2.176-1.04-.288-.112-.512-.16-.72.16-.208.32-.832 1.04-1.024 1.264-.192.208-.384.24-.704.08-.32-.16-1.344-.496-2.56-1.584-.944-.848-1.584-1.888-1.776-2.208-.192-.32-.016-.48.144-.64.144-.144.32-.384.48-.576.16-.192.208-.32.32-.528.112-.208.048-.384-.032-.544-.08-.16-.72-1.728-.992-2.368-.256-.624-.528-.544-.72-.544-.192 0-.4-.032-.608-.032-.208 0-.544.08-.832.384-.288.32-1.104 1.072-1.104 2.624s1.136 3.04 1.296 3.248c.16.208 2.24 3.424 5.424 4.8.752.32 1.344.512 1.808.656.76.24 1.456.208 2 .128.608-.096 1.888-.768 2.16-1.52.272-.752.272-1.392.192-1.52-.08-.128-.288-.208-.608-.352z" />
        </svg>
        {/* Tooltip — absolutely positioned so it NEVER moves the button */}
        {showTooltip && (
          <div className="hidden md:block absolute left-full ml-3 bottom-0 bg-forest-deep text-cream px-5 py-3 text-sm shadow-2xl whitespace-nowrap animate-[rise_0.5s_ease-out]">
            {t.tooltip}
            <span className="absolute top-1/2 -left-2 -translate-y-1/2 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[8px] border-r-forest-deep" />
          </div>
        )}
      </a>
    </div>
  );
}
