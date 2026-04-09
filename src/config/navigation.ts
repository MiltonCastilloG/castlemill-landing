export const HOME_URL = "/";

export const NavigationData: { text: string; url: string }[] = [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "Curriculum",
    url: "/curriculum",
  },
  {
    text: "Play Tetris",
    url: "/coming-soon",
  },
  {
    text: "Gallery",
    url: "/coming-soon",
  },
];

export type NavigationKey = keyof typeof NavigationData;
