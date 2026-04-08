import { useMemo } from "react";
import { useObservableState } from "../../hooks/useObservableState";
import { getCurrentLanguage, language$, setLanguage, toggleLanguage } from "./store";
import type { Language, TranslationObj } from "./config";

export function useLanguage() {
  const language = useObservableState(language$, getCurrentLanguage());

  return {
    language,
    setLanguage,
    toggleLanguage,
  };
}

export function useTranslations<TTranslations extends TranslationObj>(translations: TTranslations) {
  const { language } = useLanguage();

  return useMemo(
    () => ({
      language,
      // Keep keys inferred from each translation object so t("...") is
      // compile-time checked against only the keys that actually exist.
      t: (key: keyof TTranslations) => translations[key][language],
    }),
    [language, translations],
  );
}

export type { Language, TranslationObj };
