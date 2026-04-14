"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export default function LightboxGallery({
  photos,
  visibleCount = 16,
}: {
  photos: string[];
  visibleCount?: number;
}) {
  const [index, setIndex] = useState<number | null>(null);
  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length)),
    [photos.length]
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? null : (i + 1) % photos.length)),
    [photos.length]
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, prev, next]);

  const shown = photos.slice(0, visibleCount);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {shown.map((src, i) => {
          const tall = i % 5 === 0 || i % 5 === 3;
          return (
            <button
              key={src}
              onClick={() => setIndex(i)}
              className={`relative overflow-hidden rounded-sm group cursor-zoom-in ${
                tall ? "aspect-[3/4]" : "aspect-square"
              }`}
              aria-label={`Ver foto ${i + 1}`}
            >
              <Image
                src={src}
                alt={`Casa Rural el Chato ${i + 1}`}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover photo-warm transition-all duration-[1200ms] group-hover:scale-110 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-forest-deep/0 group-hover:bg-forest-deep/10 transition" />
              <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-cream/95 text-forest-deep flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 3h6v6M14 10l7-7M9 21H3v-6M10 14l-7 7" />
                </svg>
              </div>
            </button>
          );
        })}
      </div>

      {index !== null && (
        <div
          className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 animate-[fadeIn_.3s_ease-out]"
          onClick={close}
        >
          <button
            onClick={(e) => { e.stopPropagation(); close(); }}
            className="absolute top-6 right-6 w-12 h-12 rounded-full border border-cream/30 text-cream hover:bg-cream/10 transition flex items-center justify-center"
            aria-label="Cerrar"
          >
            <span className="text-xl">×</span>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-cream/30 text-cream hover:bg-cream/10 transition flex items-center justify-center"
            aria-label="Anterior"
          >
            ←
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-cream/30 text-cream hover:bg-cream/10 transition flex items-center justify-center"
            aria-label="Siguiente"
          >
            →
          </button>

          <div className="relative w-full max-w-6xl aspect-[4/3]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={photos[index]}
              alt={`Casa Rural el Chato ${index + 1}`}
              fill
              className="object-contain photo-warm"
              sizes="100vw"
              priority
            />
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/70 text-xs tracking-[0.2em] uppercase">
            {index + 1} / {photos.length}
          </div>
        </div>
      )}
    </>
  );
}
