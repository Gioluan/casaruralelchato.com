import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Casa Rural el Chato — Portell de Morella",
    short_name: "El Chato",
    description:
      "Casa rural con historia en el corazón de Portell de Morella, Els Ports (Castellón).",
    start_url: "/es",
    display: "standalone",
    orientation: "portrait",
    background_color: "#f7f2e9",
    theme_color: "#1e3024",
    lang: "es-ES",
    categories: ["travel", "lifestyle"],
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
