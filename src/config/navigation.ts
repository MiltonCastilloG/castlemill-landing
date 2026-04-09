import type { Language } from "../features/translation";

export const HOME_URL = "/";

export const NavigationData: { translations: Record<Language, string>; url: string }[] = [
  {
    translations: {
      en: "Home",
      es: "Inicio",
    },
    url: "/",
  },
  {
    translations: {
      en: "Curriculum",
      es: "Currículum",
    },
    url: "/curriculum",
  },
  {
    translations: {
      en: "Play Tetris",
      es: "Jugar Tetris",
    },
    url: "/coming-soon",
  },
  {
    translations: {
      en: "Gallery",
      es: "Galeria",
    },
    url: "/coming-soon",
  },
];

export type NavigationKey = keyof typeof NavigationData;
