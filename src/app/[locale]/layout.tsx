import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { SITE } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import WhatsAppButton from "@/components/WhatsAppButton";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};
  const t = getDictionary(locale as Locale);
  const url = `${SITE.url}/${locale}`;
  return {
    title: t.meta.siteTitle,
    description: t.meta.description,
    alternates: {
      canonical: url,
      languages: Object.fromEntries(locales.map((l) => [l, `${SITE.url}/${l}`])),
    },
    openGraph: {
      title: t.meta.siteTitle,
      description: t.meta.description,
      url,
      siteName: "Casa Rural el Chato",
      locale,
      type: "website",
      images: [
        {
          url: "/images/photo-14.jpg",
          width: 1600,
          height: 1067,
          alt: "Casa Rural el Chato — Portell de Morella",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.siteTitle,
      description: t.meta.description,
      images: ["/images/photo-14.jpg"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const typedLocale = locale as Locale;

  const lodgingSchema = {
    "@context": "https://schema.org",
    "@type": ["LodgingBusiness", "VacationRental"],
    "@id": `${SITE.url}/#lodging`,
    name: "Casa Rural el Chato",
    alternateName: "Casa Rural el Chato Portell de Morella",
    description: getDictionary(typedLocale).meta.description,
    image: [
      `${SITE.url}/images/photo-02.jpg`,
      `${SITE.url}/images/photo-09.jpg`,
      `${SITE.url}/images/photo-14.jpg`,
      `${SITE.url}/images/photo-22.jpg`,
    ],
    url: `${SITE.url}/${locale}`,
    telephone: SITE.phone,
    email: SITE.email,
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Bank transfer",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Portell de Morella",
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.address.lat,
      longitude: SITE.address.lng,
    },
    hasMap: `https://www.openstreetmap.org/?mlat=${SITE.address.lat}&mlon=${SITE.address.lng}#map=14/${SITE.address.lat}/${SITE.address.lng}`,
    numberOfRooms: 3,
    numberOfBedrooms: 3,
    occupancy: {
      "@type": "QuantitativeValue",
      maxValue: 6,
      minValue: 1,
    },
    petsAllowed: "Ask on booking",
    smokingAllowed: false,
    checkinTime: "16:00",
    checkoutTime: "12:00",
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Full kitchen", value: true },
      { "@type": "LocationFeatureSpecification", name: "Central heating", value: true },
      { "@type": "LocationFeatureSpecification", name: "Washing machine", value: true },
      { "@type": "LocationFeatureSpecification", name: "Free parking nearby", value: true },
      { "@type": "LocationFeatureSpecification", name: "WiFi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Entertainment room", value: true },
      { "@type": "LocationFeatureSpecification", name: "Private wine tasting experience", value: true },
    ],
    // NOTE: aggregateRating intentionally omitted until we have verified review
    // data from Booking.com / Airbnb. Google penalizes fake or unverifiable ratings.
    makesOffer: {
      "@type": "Offer",
      name: "Whole house rental",
      description: "Rental of the entire Casa Rural el Chato. 3 bedrooms, whole house, direct booking.",
      priceCurrency: "EUR",
      price: "115",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
    },
    sameAs: [SITE.social.instagram, SITE.social.facebook],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: "Casa Rural el Chato",
    url: SITE.url,
    logo: `${SITE.url}/logos/CRCP-Negro-exp-transparente.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phone,
      contactType: "reservations",
      areaServed: ["ES", "EU"],
      availableLanguage: ["Spanish", "English", "Catalan", "French"],
    },
    sameAs: [SITE.social.instagram, SITE.social.facebook],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: "Casa Rural el Chato",
    inLanguage: locale,
    publisher: { "@id": `${SITE.url}/#organization` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <a href="#main" className="skip-link">
        {typedLocale === "en"
          ? "Skip to content"
          : typedLocale === "fr"
            ? "Aller au contenu"
            : typedLocale === "ca"
              ? "Saltar al contingut"
              : "Saltar al contenido"}
      </a>
      <Header locale={typedLocale} />
      <main id="main">{children}</main>
      <Footer locale={typedLocale} />
      <WhatsAppButton locale={typedLocale} />
      <CookieBanner locale={typedLocale} />
    </>
  );
}
