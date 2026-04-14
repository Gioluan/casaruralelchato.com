import Link from "next/link";
import { locales, localeFlags, type Locale } from "@/i18n/config";

type Variant = "light" | "dark";

export default function LanguageSwitcher({
  locale,
  variant = "light",
}: {
  locale: Locale;
  variant?: Variant;
}) {
  const isDark = variant === "dark";

  const base = isDark ? "text-cream/60" : "text-ink-soft";
  const activeClass = isDark ? "text-cream font-medium" : "text-forest-deep font-medium";
  const hoverClass = isDark ? "hover:text-ochre-soft" : "hover:text-forest";
  const sepClass = isDark ? "text-cream/25" : "text-stone";

  return (
    <div className={`flex items-center gap-1 text-[11px] tracking-widest uppercase ${base}`}>
      {locales.map((l, i) => (
        <span key={l} className="flex items-center">
          <Link
            href={`/${l}`}
            className={`px-1.5 py-1 transition ${
              l === locale ? activeClass : hoverClass
            }`}
            aria-current={l === locale ? "page" : undefined}
          >
            {localeFlags[l]}
          </Link>
          {i < locales.length - 1 && <span className={sepClass}>·</span>}
        </span>
      ))}
    </div>
  );
}
