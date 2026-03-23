import {
  language$,
  getCurrentLanguage,
  setLanguage,
  toggleLanguage,
  type Language,
} from "../lib/translation";
import { useObservableState } from "./useObservableState";

export function useLanguage() {
  const language = useObservableState(language$, getCurrentLanguage());

  return {
    language,
    setLanguage,
    toggleLanguage
  };
}

