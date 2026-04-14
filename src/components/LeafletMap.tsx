"use client";

import { useEffect, useRef, useState } from "react";

const LEAFLET_CSS_URL = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
const LEAFLET_CSS_INTEGRITY = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=";

function ensureLeafletCss() {
  if (typeof document === "undefined") return;
  if (document.querySelector(`link[href="${LEAFLET_CSS_URL}"]`)) return;
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = LEAFLET_CSS_URL;
  link.integrity = LEAFLET_CSS_INTEGRITY;
  link.crossOrigin = "";
  document.head.appendChild(link);
}

export default function LeafletMap({
  lat,
  lng,
  zoom = 14,
  label,
}: {
  lat: number;
  lng: number;
  zoom?: number;
  label: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapElRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<unknown>(null);
  const [inView, setInView] = useState(false);

  // Mount the map only when the wrapper enters the viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        });
      },
      { rootMargin: "200px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let cancelled = false;
    ensureLeafletCss();

    (async () => {
      const L = (await import("leaflet")).default;
      if (cancelled || !mapElRef.current) return;
      if (mapRef.current) return;

      const map = L.map(mapElRef.current, {
        center: [lat, lng],
        zoom,
        scrollWheelZoom: false,
        zoomControl: true,
        attributionControl: true,
      });
      mapRef.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map);

      const icon = L.divIcon({
        className: "custom-pin",
        html: `<div class="pin-dot"></div><div class="pin-pulse"></div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 15],
      });

      L.marker([lat, lng], { icon })
        .addTo(map)
        .bindPopup(
          `<strong style="font-family:Fraunces,serif;font-size:16px;color:#1e3024">Casa Rural el Chato</strong><br/><span style="font-size:12px;color:#3a3f38">${label}</span>`
        );
    })();

    return () => {
      cancelled = true;
    };
  }, [inView, lat, lng, zoom, label]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[480px] md:h-[560px] rounded-sm overflow-hidden bg-stone-soft"
    >
      {!inView && (
        <div className="absolute inset-0 flex items-center justify-center text-moss text-[10px] tracking-[0.3em] uppercase">
          <span className="animate-pulse">Cargando mapa…</span>
        </div>
      )}
      <div ref={mapElRef} className="w-full h-full" />
    </div>
  );
}
