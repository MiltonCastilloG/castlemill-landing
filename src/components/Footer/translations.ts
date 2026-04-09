import type { TranslationObj } from "../../features/translation";

export const footerTranslations: TranslationObj = {
  copyright: {
    en: "© 2026 Milton Andrés Castillo García. All rights reserved.",
    es: "© 2026 Milton Andrés Castillo García. Todos los derechos reservados.",
  },
};

export type FooterTranslationKey = keyof typeof footerTranslations;
