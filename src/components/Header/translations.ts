import type { Translations } from "../../features/translation";

type HeaderTranslationKey = "languageLabel" | "themeLabel" | "brand";

export const headerTranslations: Translations<HeaderTranslationKey> = {
  en: {
    languageLabel: "Language",
    themeLabel: "Theme",
    brand: "CastleMill",
  },
  es: {
    languageLabel: "Idioma",
    themeLabel: "Tema",
    brand: "CastleMill",
  },
};
