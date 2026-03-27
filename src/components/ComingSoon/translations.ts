import type { Translations } from "../../features/translation";

type ComingSoonKey = "comingSoon" | "tagline";

export const comingSoonTranslations: Translations<ComingSoonKey> = {
  en: {
    comingSoon: "Coming soon...",
    tagline: "Soon with your closest internet provider.",
  },
  es: {
    comingSoon: "Proximamente...",
    tagline: "Pronto con tu proveedor de internet mas cercano.",
  },
};
