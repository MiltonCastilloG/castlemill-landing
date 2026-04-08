import type { TranslationObj } from "../../features/translation";

export const comingSoonTranslations: TranslationObj = {
  comingSoon: {
    en: "Coming soon...",
    es: "Proximamente...",
  },
  tagline: {
    en: "Elves have gone missing, advailable as soon as we find them.",
    es: "Los elfos se han perdido, disponible cuando los encontremos.",
  },
};

export type ComingSoonKey = keyof typeof comingSoonTranslations;
