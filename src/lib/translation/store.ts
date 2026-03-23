import { BehaviorSubject } from "rxjs";
import { Language, DEFAULT_LANGUAGE } from "./config";

const languageSubject = new BehaviorSubject<Language>(DEFAULT_LANGUAGE);

export const language$ = languageSubject.asObservable();

export function setLanguage(language: Language) {
  languageSubject.next(language);
}

export function toggleLanguage() {
  const current = languageSubject.getValue();
  languageSubject.next(current === "en" ? "es" : "en");
}

export function getCurrentLanguage(): Language {
  return languageSubject.getValue();
}
