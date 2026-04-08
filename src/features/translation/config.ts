export type Language = "en" | "es";

export const DEFAULT_LANGUAGE: Language = "en";

export type TranslationObj = Record<string, Record<Language, string>>;
