import type { Translations } from "../../features/translation";

type HeaderTranslationKey = "languageLabel" | "brand";

export const headerTranslations: Translations<HeaderTranslationKey> = {
  en: {
    languageLabel: "Language",
    brand: "CastleMill",
  },
  es: {
    languageLabel: "Idioma",
    brand: "CastleMill",
  },
};
