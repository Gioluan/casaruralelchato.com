import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import { SITE } from "@/lib/site";
import LegalPage from "@/components/LegalPage";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Política de Cookies",
  description:
    "Política de cookies de Casa Rural el Chato. Qué cookies utilizamos y cómo puedes gestionarlas.",
  robots: { index: true, follow: false },
  alternates: { canonical: `${SITE.url}/es/legal/cookies` },
};

export default async function Cookies({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  return (
    <LegalPage
      locale={locale}
      crumb="Política de Cookies"
      title="Política de Cookies"
      lastUpdated="14 de abril de 2026"
      sections={[
        {
          heading: "¿Qué son las cookies?",
          paragraphs: [
            "Una cookie es un pequeño fichero de texto que un sitio web guarda en tu navegador cuando lo visitas. Las cookies permiten que el sitio recuerde información sobre tu visita, como tu idioma preferido, para facilitarte la siguiente visita y hacer que el sitio resulte más útil.",
            "Esta Política de Cookies explica qué son las cookies, qué tipos de cookies utiliza Casa Rural el Chato en su Sitio Web, con qué finalidad, y cómo puedes gestionarlas o deshabilitarlas.",
          ],
        },
        {
          heading: "Tipos de cookies que utilizamos",
          paragraphs: [
            "Casa Rural el Chato utiliza los siguientes tipos de cookies en su Sitio Web:",
          ],
          list: [
            "Cookies técnicas o necesarias: son imprescindibles para el correcto funcionamiento del Sitio Web. Permiten, por ejemplo, recordar la preferencia de idioma seleccionada o almacenar el consentimiento del usuario sobre cookies. No requieren consentimiento previo.",
            "Cookies analíticas: nos permiten analizar el comportamiento de los usuarios de forma agregada para mejorar el Sitio Web. Solo se activarán si has dado tu consentimiento expreso.",
            "Cookies de terceros: en la sección de mapa del Sitio Web se utilizan tiles de OpenStreetMap, que pueden establecer cookies propias. Igualmente, los botones de redes sociales pueden establecer cookies al hacer clic en ellos.",
          ],
        },
        {
          heading: "Detalle de las cookies utilizadas",
          paragraphs: [
            "A continuación se detallan las cookies específicas que se pueden instalar en tu dispositivo al navegar por este Sitio Web:",
          ],
          list: [
            "crc-cookie-consent (técnica, propia): almacena tu decisión sobre las cookies para no volver a mostrarte el aviso. Duración: 12 meses.",
            "Cookies de OpenStreetMap (terceros): se activan únicamente al visualizar el mapa. Más información en https://wiki.osmfoundation.org/wiki/Privacy_Policy.",
            "Cookies analíticas (opcionales): se instalarán únicamente si prestas tu consentimiento al banner de cookies.",
          ],
        },
        {
          heading: "Consentimiento",
          paragraphs: [
            "Al acceder por primera vez al Sitio Web se te mostrará un aviso con información sobre las cookies utilizadas y se te ofrecerá la posibilidad de: aceptar todas las cookies, aceptar únicamente las cookies necesarias, o acceder a esta Política de Cookies para obtener más información.",
            "En cualquier momento puedes modificar tu decisión eliminando las cookies de tu navegador, lo que hará que al volver a visitar el Sitio Web se te vuelva a solicitar el consentimiento.",
          ],
        },
        {
          heading: "Cómo gestionar las cookies",
          paragraphs: [
            "Además de gestionar las cookies a través del banner mostrado en el Sitio Web, puedes configurar tu navegador para que te avise cuando un sitio intente instalar una cookie o para que rechace todas las cookies automáticamente. A continuación encontrarás enlaces a las instrucciones oficiales para los navegadores más habituales:",
          ],
          list: [
            "Google Chrome: https://support.google.com/chrome/answer/95647",
            "Mozilla Firefox: https://support.mozilla.org/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias",
            "Safari (macOS e iOS): https://support.apple.com/es-es/HT201265",
            "Microsoft Edge: https://support.microsoft.com/es-es/microsoft-edge",
          ],
        },
        {
          heading: "Actualizaciones",
          paragraphs: [
            "Esta Política de Cookies puede actualizarse en cualquier momento para reflejar los cambios en las cookies utilizadas o en la normativa aplicable. Te recomendamos revisarla periódicamente.",
            `Si tienes cualquier duda sobre el uso de cookies en este Sitio Web, puedes contactarnos en ${SITE.email}.`,
          ],
        },
      ]}
    />
  );
}
