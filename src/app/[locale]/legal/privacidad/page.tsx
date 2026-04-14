import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import { SITE } from "@/lib/site";
import LegalPage from "@/components/LegalPage";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de privacidad de Casa Rural el Chato. Información sobre el tratamiento de datos personales conforme al RGPD y la LOPDGDD.",
  robots: { index: true, follow: false },
  alternates: { canonical: `${SITE.url}/es/legal/privacidad` },
};

export default async function Privacidad({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  return (
    <LegalPage
      locale={locale}
      crumb="Política de Privacidad"
      title="Política de Privacidad"
      lastUpdated="14 de abril de 2026"
      sections={[
        {
          heading: "Responsable del tratamiento",
          paragraphs: [
            `Casa Rural el Chato, con domicilio en ${SITE.address.locality}, ${SITE.address.region} (${SITE.address.postalCode}), España, y correo electrónico ${SITE.email}, es el Responsable del tratamiento de los datos personales recogidos a través del Sitio Web ${SITE.domain}.`,
            "Esta Política de Privacidad ha sido redactada conforme al Reglamento (UE) 2016/679 (RGPD) y a la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).",
          ],
          list: [
            "Titular: [Nombre y apellidos del titular]",
            "NIF: [NIF del titular]",
            `Correo de contacto: ${SITE.email}`,
            `Teléfono: ${SITE.phone}`,
          ],
        },
        {
          heading: "Datos que recogemos",
          paragraphs: [
            "Recogemos únicamente los datos estrictamente necesarios para la finalidad indicada en cada formulario de recogida. En concreto, trataremos los siguientes datos cuando tú mismo nos los facilites:",
          ],
          list: [
            "Datos identificativos: nombre y apellidos.",
            "Datos de contacto: dirección de correo electrónico y teléfono.",
            "Datos de la consulta o reserva: fechas solicitadas, número de personas, preferencias, mensaje libre.",
            "Datos de navegación: dirección IP, tipo de navegador y páginas visitadas, recogidos por las cookies analíticas en caso de que hayas prestado tu consentimiento.",
          ],
        },
        {
          heading: "Finalidad del tratamiento",
          paragraphs: [
            "Los datos recogidos se utilizarán exclusivamente para las siguientes finalidades:",
          ],
          list: [
            "Gestionar tu solicitud de información o reserva de alojamiento y actividades.",
            "Mantener la comunicación contigo durante todo el proceso reservado.",
            "Enviarte comunicaciones comerciales propias, únicamente si has dado tu consentimiento expreso para ello.",
            "Cumplir con las obligaciones legales, contables, fiscales y administrativas que sean de aplicación.",
            "Análisis estadísticos del uso del Sitio Web con fines de mejora (solo si aceptas las cookies analíticas).",
          ],
        },
        {
          heading: "Base jurídica",
          paragraphs: [
            "La base jurídica que legitima el tratamiento de tus datos es:",
          ],
          list: [
            "Tu consentimiento expreso al rellenar un formulario o solicitar información (art. 6.1.a RGPD).",
            "La ejecución de un contrato o de medidas precontractuales solicitadas por ti, en caso de reserva (art. 6.1.b RGPD).",
            "El cumplimiento de obligaciones legales aplicables a Casa Rural el Chato (art. 6.1.c RGPD).",
            "El interés legítimo en mejorar nuestros servicios y la experiencia del usuario del Sitio Web (art. 6.1.f RGPD), siempre respetando tus derechos y libertades.",
          ],
        },
        {
          heading: "Plazo de conservación",
          paragraphs: [
            "Tus datos se conservarán durante el tiempo estrictamente necesario para cumplir con la finalidad para la que fueron recabados. En el caso de reservas efectivas, se conservarán durante los plazos legales exigidos por la normativa fiscal, contable y turística aplicable.",
            "Cuando los datos ya no sean necesarios para la finalidad para la que fueron recogidos, se bloquearán y únicamente se mantendrán a disposición de las administraciones públicas y tribunales durante los plazos legalmente establecidos.",
          ],
        },
        {
          heading: "Destinatarios y cesiones de datos",
          paragraphs: [
            "Casa Rural el Chato no cederá tus datos a terceros salvo en los siguientes casos:",
          ],
          list: [
            "Cuando exista una obligación legal que lo exija.",
            "A proveedores de servicios que actúen como encargados del tratamiento (alojamiento web, correo electrónico, gestoría, pasarelas de pago), con los que Casa Rural el Chato tiene firmados los correspondientes contratos de encargo del tratamiento.",
            "En caso de reserva de actividades como catas privadas, a los proveedores colaboradores (por ejemplo, 964 Tasting Shop), exclusivamente para la prestación del servicio solicitado.",
          ],
        },
        {
          heading: "Transferencias internacionales",
          paragraphs: [
            "Casa Rural el Chato no realiza transferencias internacionales de datos fuera del Espacio Económico Europeo. Si en el futuro se utilizaran herramientas con servidores fuera del EEE, se informará expresamente al usuario y se adoptarán las garantías adecuadas previstas en el RGPD.",
          ],
        },
        {
          heading: "Tus derechos",
          paragraphs: [
            "Como titular de los datos, puedes ejercer en cualquier momento los siguientes derechos:",
          ],
          list: [
            "Derecho de acceso: saber qué datos tratamos sobre ti.",
            "Derecho de rectificación: corregir datos inexactos o incompletos.",
            "Derecho de supresión (u olvido): solicitar la eliminación de tus datos cuando ya no sean necesarios.",
            "Derecho de oposición al tratamiento.",
            "Derecho de limitación del tratamiento.",
            "Derecho a la portabilidad de los datos.",
            "Derecho a retirar en cualquier momento el consentimiento prestado.",
          ],
          // We include an extra paragraph via the paragraphs section above too? Better add below.
        },
        {
          heading: "Cómo ejercer tus derechos",
          paragraphs: [
            `Puedes ejercer cualquiera de estos derechos enviando un correo electrónico a ${SITE.email} indicando el derecho que deseas ejercer y adjuntando una copia de tu documento nacional de identidad o equivalente que acredite tu identidad.`,
            "Si consideras que el tratamiento de tus datos no se ajusta a la normativa vigente, también tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).",
          ],
        },
        {
          heading: "Medidas de seguridad",
          paragraphs: [
            "Casa Rural el Chato aplica las medidas técnicas y organizativas apropiadas para garantizar un nivel de seguridad adecuado al riesgo del tratamiento, de conformidad con el artículo 32 del RGPD, y para preservar la confidencialidad, integridad y disponibilidad de los datos personales.",
          ],
        },
        {
          heading: "Modificaciones",
          paragraphs: [
            "Casa Rural el Chato se reserva el derecho a modificar esta Política de Privacidad para adaptarla a las novedades legislativas o jurisprudenciales, así como a las prácticas de la industria. En estos casos, se informará a través del Sitio Web de las modificaciones introducidas con una antelación razonable a su puesta en práctica.",
          ],
        },
      ]}
    />
  );
}
