import type { TranslationObj } from "../../features/translation";

export const comingSoonTranslations: TranslationObj = {
  comingSoon: {
    en: "Coming soon...",
    es: "Proximamente...",
  },
  tagline: {
    en: "Soon with your closest internet provider.",
    es: "Pronto con tu proveedor de internet mas cercano.",
  },
};

export type ComingSoonKey = keyof typeof comingSoonTranslations;
