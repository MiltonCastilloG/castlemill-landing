import { Language } from "./config";
import { translations } from "./text";

export type { Language, Translations } from "./config";
export { DEFAULT_LANGUAGE } from "./config";
export {
  language$,
  setLanguage,
  toggleLanguage,
  getCurrentLanguage,
} from "./store";

export type TranslationKey = "comingSoon" | "tagline";

export function getTranslationText(language: Language, key: TranslationKey): string {
  return translations[language][key];
}

