import { useMemo } from "react";
import { useObservableState } from "../../hooks/useObservableState";
import {
  getCurrentLanguage,
  language$,
  setLanguage,
  toggleLanguage,
} from "./store";
import type { Language, Translations } from "./config";

export function useLanguage() {
  const language = useObservableState(language$, getCurrentLanguage());

  return {
    language,
    setLanguage,
    toggleLanguage,
  };
}

export function useTranslations<TKey extends string>(
  translations: Translations<TKey>,
) {
  const { language } = useLanguage();

  return useMemo(
    () => ({
      language,
      t: (key: TKey) => translations[language][key],
    }),
    [language, translations],
  );
}

export type { Language, Translations };
