import type { TranslationKey } from ".";

export type Language = "en" | "es";

export const DEFAULT_LANGUAGE: Language = "en";

export type Translations = Record<Language, Record<TranslationKey, string>>;



