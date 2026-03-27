export type Language = "en" | "es";

export const DEFAULT_LANGUAGE: Language = "en";

export type Translations<TKey extends string> = Record<
  Language,
  Record<TKey, string>
>;
