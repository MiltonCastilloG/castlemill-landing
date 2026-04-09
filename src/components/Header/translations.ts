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
  navAriaLabel: {
    en: "Main navigation",
    es: "Navegación principal",
  },
  openMenu: {
    en: "Open menu",
    es: "Abrir menú",
  },
  closeMenu: {
    en: "Close menu",
    es: "Cerrar menú",
  },
};

export type HeaderTranslationKey = keyof typeof headerTranslations;
