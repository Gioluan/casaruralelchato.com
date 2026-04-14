import Link from "next/link";
import { locales, localeFlags, type Locale } from "@/i18n/config";

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  return (
    <div className="flex items-center gap-1 text-[11px] tracking-widest uppercase text-ink-soft">
      {locales.map((l, i) => (
        <span key={l} className="flex items-center">
          <Link
            href={`/${l}`}
            className={`px-1.5 py-1 transition ${
              l === locale ? "text-forest-deep font-medium" : "hover:text-forest"
            }`}
            aria-current={l === locale ? "page" : undefined}
          >
            {localeFlags[l]}
          </Link>
          {i < locales.length - 1 && <span className="text-stone">·</span>}
        </span>
      ))}
    </div>
  );
}
