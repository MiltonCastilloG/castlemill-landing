import type { Language, TranslationObj } from "../../features/translation";
import type { NavId } from "./items";

export const navigationTranslations: TranslationObj & Record<NavId, Record<Language, string>> = {
  home: {
    en: "Home",
    es: "Inicio",
  },
  curriculum: {
    en: "Curriculum",
    es: "Currículum",
  },
  playTetris: {
    en: "Play Tetris",
    es: "Jugar Tetris",
  },
  gallery: {
    en: "Gallery",
    es: "Galeria",
  },
};
