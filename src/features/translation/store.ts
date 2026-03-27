import { BehaviorSubject } from "rxjs";
import { DEFAULT_LANGUAGE, type Language } from "./config";

const languageSubject = new BehaviorSubject<Language>(DEFAULT_LANGUAGE);

export const language$ = languageSubject.asObservable();

export function setLanguage(language: Language) {
  languageSubject.next(language);
}

export function toggleLanguage() {
  const currentLanguage = languageSubject.getValue();
  languageSubject.next(currentLanguage === "en" ? "es" : "en");
}

export function getCurrentLanguage(): Language {
  return languageSubject.getValue();
}
