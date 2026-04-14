import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import { SITE } from "@/lib/site";
import LegalPage from "@/components/LegalPage";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Aviso Legal",
  description:
    "Aviso legal de Casa Rural el Chato, Portell de Morella (Castellón). Información del titular, condiciones de uso y responsabilidad.",
  robots: { index: true, follow: false },
  alternates: { canonical: `${SITE.url}/es/legal/aviso-legal` },
};

// NOTE: The legal texts below are templates compliant with Spanish law (LSSI-CE).
// Replace [TITULAR], [NIF] and any other placeholder with the real owner details
// before going live.

export default async function AvisoLegal({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  return (
    <LegalPage
      locale={locale}
      crumb="Aviso Legal"
      title="Aviso Legal"
      lastUpdated="14 de abril de 2026"
      sections={[
        {
          heading: "Información general",
          paragraphs: [
            `En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa a los usuarios de los siguientes datos identificativos del titular del sitio web ${SITE.domain}:`,
          ],
          list: [
            "Denominación: Casa Rural el Chato",
            "Titular: [Nombre y apellidos del titular]",
            "NIF: [NIF del titular]",
            `Domicilio: ${SITE.address.locality}, ${SITE.address.region} (${SITE.address.postalCode}), España`,
            `Correo electrónico: ${SITE.email}`,
            `Teléfono: ${SITE.phone}`,
            "Actividad: alojamiento rural y organización de experiencias turísticas",
          ],
        },
        {
          heading: "Objeto",
          paragraphs: [
            `El presente Aviso Legal regula el uso del sitio web ${SITE.domain} (en adelante, el "Sitio Web"), cuyo titular es Casa Rural el Chato. La navegación por el Sitio Web atribuye la condición de usuario del mismo e implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal.`,
            "El usuario se compromete a realizar un uso adecuado de los contenidos y servicios que Casa Rural el Chato ofrece a través de su Sitio Web y a no emplearlos para incurrir en actividades ilícitas o contrarias a la buena fe y al ordenamiento legal.",
          ],
        },
        {
          heading: "Condiciones de acceso y uso",
          paragraphs: [
            "El acceso al Sitio Web es libre y gratuito. Casa Rural el Chato se reserva el derecho a modificar en cualquier momento la presentación y configuración del Sitio Web, así como los contenidos y servicios que en él se incorporan.",
            "El usuario se obliga a utilizar los contenidos de forma diligente, correcta y lícita y, en particular, se compromete a no utilizarlos con finalidades contrarias a la ley, a la moral o al orden público, y a no realizar actividades que puedan dañar, inutilizar o sobrecargar el Sitio Web o que impidan, de cualquier forma, su normal utilización y funcionamiento.",
          ],
        },
        {
          heading: "Propiedad intelectual e industrial",
          paragraphs: [
            "Todos los contenidos del Sitio Web, entendiendo por éstos a título meramente enunciativo los textos, fotografías, gráficos, imágenes, iconos, tecnología, software, nombre de dominio, marcas y logotipos, son propiedad de Casa Rural el Chato o de terceros que han autorizado su uso, sin que pueda entenderse que se cede al usuario ningún derecho de explotación sobre los mismos más allá de lo estrictamente necesario para el correcto uso del Sitio Web.",
            "Queda prohibida la reproducción, distribución, comunicación pública y transformación, total o parcial, de los contenidos del Sitio Web, sin la autorización expresa y por escrito de Casa Rural el Chato.",
          ],
        },
        {
          heading: "Exclusión de garantías y responsabilidad",
          paragraphs: [
            "Casa Rural el Chato no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título meramente enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del Sitio Web o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.",
            "Casa Rural el Chato no garantiza la disponibilidad y continuidad del funcionamiento del Sitio Web y queda exonerada de cualquier responsabilidad por los posibles daños causados como consecuencia de la falta de disponibilidad debido a motivos de fuerza mayor o a errores en las redes telemáticas.",
          ],
        },
        {
          heading: "Enlaces a terceros",
          paragraphs: [
            "Desde el Sitio Web es posible que se redirija a contenidos de terceros sitios web (como Booking.com, Airbnb, Escapada Rural, redes sociales u otros). Dado que Casa Rural el Chato no puede controlar siempre los contenidos introducidos por los terceros en sus sitios web, no asume ningún tipo de responsabilidad respecto a dichos contenidos. En todo caso, Casa Rural el Chato procederá a la retirada inmediata de cualquier contenido que pudiera contravenir la legislación nacional o internacional, la moral o el orden público, procediendo a la retirada inmediata de la redirección a dicho sitio web.",
          ],
        },
        {
          heading: "Modificaciones",
          paragraphs: [
            "Casa Rural el Chato se reserva el derecho a efectuar, sin previo aviso, las modificaciones que considere oportunas en el Sitio Web, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados.",
          ],
        },
        {
          heading: "Legislación aplicable y jurisdicción",
          paragraphs: [
            "La relación entre Casa Rural el Chato y el usuario se regirá por la normativa española vigente. Todas las disputas y reclamaciones derivadas de este Aviso Legal se resolverán por los juzgados y tribunales competentes de Castellón, España, renunciando expresamente las partes al fuero que pudiera corresponderles.",
          ],
        },
      ]}
    />
  );
}
