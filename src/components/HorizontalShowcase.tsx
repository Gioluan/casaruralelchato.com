"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Item = { title: string; desc: string; tag: string; photo: string };

export default function HorizontalShowcase({ items }: { items: Item[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const updateProgress = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    if (max <= 0) {
      setProgress(0);
      return;
    }
    setProgress(Math.min(1, Math.max(0, el.scrollLeft / max)));
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();
    return () => el.removeEventListener("scroll", updateProgress);
  }, [updateProgress]);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 -mx-6 px-6 lg:-mx-10 lg:px-10 scrollbar-hidden"
        style={{ scrollbarWidth: "none" }}
      >
        {items.map((item, i) => (
          <article
            key={i}
            className="snap-start shrink-0 w-[82%] sm:w-[62%] md:w-[44%] lg:w-[36%] xl:w-[32%] group"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-5">
              <Image
                src={item.photo}
                alt={item.title}
                fill
                sizes="(min-width: 1024px) 35vw, 80vw"
                className="object-cover photo-warm transition-transform duration-[1500ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-forest-deep/10 to-transparent" />
              <div className="absolute top-4 left-4 bg-cream/95 backdrop-blur px-3 py-1 text-[10px] tracking-[0.2em] uppercase text-forest-deep">
                {item.tag}
              </div>
              <div className="absolute bottom-5 left-5 right-5 text-cream">
                <h3 className="font-display text-2xl md:text-3xl mb-1">{item.title}</h3>
              </div>
            </div>
            <p className="text-ink-soft text-sm leading-relaxed">{item.desc}</p>
          </article>
        ))}
      </div>

      <div className="flex items-center justify-between mt-8">
        <div className="relative flex-1 max-w-xs h-px bg-stone/60">
          <div
            className="absolute left-0 top-0 h-full bg-forest-deep transition-[width] duration-300"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
        <div className="flex gap-3 ml-8">
          <button
            onClick={() => scrollBy(-1)}
            className="w-12 h-12 rounded-full border border-stone hover:border-forest-deep hover:text-forest-deep transition flex items-center justify-center text-ink-soft"
            aria-label="Anterior"
          >
            ←
          </button>
          <button
            onClick={() => scrollBy(1)}
            className="w-12 h-12 rounded-full border border-stone hover:border-forest-deep hover:text-forest-deep transition flex items-center justify-center text-ink-soft"
            aria-label="Siguiente"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
