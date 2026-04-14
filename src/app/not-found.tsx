import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página no encontrada · 404",
  description:
    "La página que buscas no existe o ha sido movida. Vuelve a la portada de Casa Rural el Chato.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="relative min-h-[100vh] w-full overflow-hidden bg-cream">
      <div className="absolute inset-0 opacity-[0.35]">
        <Image
          src="/images/photo-05.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover photo-warm"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream/40 to-cream" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 lg:px-10 min-h-[100vh] flex flex-col justify-center py-24">
        <div className="text-[11px] tracking-[0.3em] uppercase text-moss mb-6">Error 404</div>

        <div className="font-display-italic text-[clamp(7rem,16vw,14rem)] leading-[0.85] text-ochre/80">
          404
        </div>

        <h1 className="font-display text-4xl md:text-6xl leading-[1.02] text-forest-deep mt-2 mb-6 max-w-3xl">
          Te has perdido en <span className="font-display-italic">Els Ports</span>
        </h1>

        <p className="text-lg text-ink-soft leading-relaxed max-w-xl mb-10">
          La página que buscas no existe o ha sido movida. No te preocupes: el camino de vuelta al
          casco histórico de Portell de Morella está aquí mismo.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/es"
            className="inline-flex items-center gap-3 rounded-full bg-forest-deep text-cream px-8 py-4 text-[11px] tracking-[0.2em] uppercase hover:bg-forest transition"
          >
            Volver al inicio <span>→</span>
          </Link>
          <Link
            href="/es/blog"
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-forest-deep link-underline"
          >
            Leer el Diario del Chato
          </Link>
        </div>

        <div className="mt-20 border-t border-stone/60 pt-8 max-w-xl">
          <div className="text-[11px] tracking-[0.2em] uppercase text-moss mb-3">
            ¿Quieres reservar?
          </div>
          <p className="text-ink-soft text-sm leading-relaxed">
            Llámanos al{" "}
            <a href="tel:+34964921016" className="font-display text-lg text-forest-deep link-underline">
              964 92 10 16
            </a>{" "}
            o escríbenos a{" "}
            <a href="mailto:info@casaruralelchato.com" className="font-display text-lg text-forest-deep link-underline">
              info@casaruralelchato.com
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
