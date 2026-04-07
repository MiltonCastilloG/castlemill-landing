import type { TranslationObj } from "../../features/translation";

export const headerTranslations: TranslationObj = {
  languageLabel: {
    en: "Language",
    es: "Idioma",
  },
  themeLabel: {
    en: "Theme",
    es: "Tema",
  },
  brand: {
    en: "CastleMill",
    es: "CastleMill",
  },
};

export type HeaderTranslationKey = keyof typeof headerTranslations;
