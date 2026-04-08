import type { Language } from "../../features/translation";

type TranslationDictionary = Record<string, string>;

const defaultDictionary: TranslationDictionary = {};

export const translationMockState: {
  language: Language;
  dictionary: TranslationDictionary;
} = {
  language: "en",
  dictionary: defaultDictionary,
};

export const setLanguageMock = vi.fn((language: Language) => {
  translationMockState.language = language;
});

export const toggleLanguageMock = vi.fn(() => {
  translationMockState.language = translationMockState.language === "en" ? "es" : "en";
});

export function resetTranslationMocks(overrides?: {
  language?: Language;
  dictionary?: TranslationDictionary;
}) {
  translationMockState.language = overrides?.language ?? "en";
  translationMockState.dictionary = overrides?.dictionary ?? defaultDictionary;
  setLanguageMock.mockClear();
  toggleLanguageMock.mockClear();
}

export function useLanguageMock() {
  return {
    language: translationMockState.language,
    setLanguage: setLanguageMock,
    toggleLanguage: toggleLanguageMock,
  };
}

export function useTranslationsMock() {
  return {
    language: translationMockState.language,
    t: (key: string) => translationMockState.dictionary[key] ?? key,
  };
}
