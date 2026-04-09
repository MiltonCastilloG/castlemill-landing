import type { TranslationObj } from "../../features/translation";

export const comingSoonTranslations: TranslationObj = {
  comingSoon: {
    en: "Coming soon...",
    es: "Próximamente...",
  },
  tagline: {
    en: "Elves building thousands of castles...",
    es: "Elfos construyendo miles de castillos...",
  },
};

export type ComingSoonKey = keyof typeof comingSoonTranslations;
