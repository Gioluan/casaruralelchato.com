import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://casaruralelchato.com"),
  title: {
    default: "Casa Rural el Chato — Portell de Morella, Els Ports",
    template: "%s · Casa Rural el Chato",
  },
  description:
    "Casa rural con historia en el corazón de Portell de Morella, Els Ports (Castellón). Tres habitaciones, catas privadas y naturaleza.",
  icons: {
    icon: "/logos/CRCP-Negro-exp-transparente.png",
    apple: "/logos/CRCP-Negro-exp-transparente.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..600;1,9..144,300..500&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        {/* Leaflet CSS is loaded on-demand from inside LeafletMap, not here */}
      </head>
      <body>{children}</body>
    </html>
  );
}
