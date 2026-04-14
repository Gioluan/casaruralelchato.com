import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { SITE } from "@/lib/site";

export default function Footer({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const base = `/${locale}`;
  return (
    <footer className="bg-forest-deep text-cream mt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 grid md:grid-cols-5 gap-12">
        <div className="md:col-span-2">
          <div className="font-display text-2xl mb-3">
            Casa Rural <span className="font-display-italic">el Chato</span>
          </div>
          <p className="text-cream/70 max-w-sm leading-relaxed">{t.footer.tagline}</p>
          <div className="mt-6 flex items-center gap-4 text-cream/60 text-sm">
            <a href={SITE.social.instagram} className="hover:text-ochre-soft transition">Instagram</a>
            <span>·</span>
            <a href={SITE.social.facebook} className="hover:text-ochre-soft transition">Facebook</a>
          </div>
        </div>

        <div>
          <div className="text-[11px] tracking-[0.2em] uppercase text-ochre-soft mb-4">{t.footer.nav}</div>
          <ul className="space-y-2 text-cream/80 text-sm">
            <li><a href={`${base}#casa`} className="hover:text-ochre-soft transition">{t.nav.rooms}</a></li>
            <li><a href={`${base}#tarifas`} className="hover:text-ochre-soft transition">{t.nav.rates}</a></li>
            <li><a href={`${base}#cata`} className="hover:text-ochre-soft transition">{t.nav.tasting}</a></li>
            <li><a href={`${base}#actividades`} className="hover:text-ochre-soft transition">{t.nav.activities}</a></li>
            <li><a href={`${base}#galeria`} className="hover:text-ochre-soft transition">{t.nav.gallery}</a></li>
            {locale === "es" && (
              <li><Link href="/es/blog" className="hover:text-ochre-soft transition">Blog</Link></li>
            )}
          </ul>
        </div>

        <div>
          <div className="text-[11px] tracking-[0.2em] uppercase text-ochre-soft mb-4">{t.nav.contact}</div>
          <ul className="space-y-2 text-cream/80 text-sm">
            <li><a href={SITE.phoneHref} className="hover:text-ochre-soft transition">{SITE.phoneDisplay}</a></li>
            <li><a href={SITE.emailHref} className="hover:text-ochre-soft transition">{SITE.email}</a></li>
            <li className="text-cream/60">Portell de Morella</li>
            <li className="text-cream/60">Castellón · CP 12318</li>
          </ul>
        </div>

        <div>
          <div className="text-[11px] tracking-[0.2em] uppercase text-ochre-soft mb-4">{t.footer.legal}</div>
          <ul className="space-y-2 text-cream/80 text-sm">
            <li>
              <Link href={`${base}/legal/aviso-legal`} className="hover:text-ochre-soft transition">
                Aviso Legal
              </Link>
            </li>
            <li>
              <Link href={`${base}/legal/privacidad`} className="hover:text-ochre-soft transition">
                {t.footer.privacy}
              </Link>
            </li>
            <li>
              <Link href={`${base}/legal/cookies`} className="hover:text-ochre-soft transition">
                Cookies
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/50">
          <div>© {new Date().getFullYear()} Casa Rural el Chato. {t.footer.rights}.</div>
          <div>{t.footer.builtWith} · Portell de Morella, Castellón</div>
        </div>
      </div>
    </footer>
  );
}
