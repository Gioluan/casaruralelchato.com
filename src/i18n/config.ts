export const locales = ["es", "en", "ca", "fr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

export const localeNames: Record<Locale, string> = {
  es: "Español",
  en: "English",
  ca: "Català",
  fr: "Français",
};

export const localeFlags: Record<Locale, string> = {
  es: "ES",
  en: "EN",
  ca: "CA",
  fr: "FR",
};
