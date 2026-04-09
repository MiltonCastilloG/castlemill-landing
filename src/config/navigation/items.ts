export const HOME_URL = "/";

export type NavId = "home" | "curriculum" | "playTetris" | "gallery";

export type NavigationItem = {
  id: NavId;
  url: string;
};

export const NavigationData: NavigationItem[] = [
  {
    id: "home",
    url: "/",
  },
  {
    id: "curriculum",
    url: "/curriculum",
  },
  {
    id: "playTetris",
    url: "/coming-soon",
  },
  {
    id: "gallery",
    url: "/coming-soon",
  },
];
