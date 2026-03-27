import { BehaviorSubject } from "rxjs";
import type { Theme } from "./config";
import {
  applyThemeClass,
  getInitialTheme,
  getStoredTheme,
  getSystemTheme,
  persistTheme,
} from "./dom";

let initialized = false;
let userOverride = false;
let systemCleanup: (() => void) | null = null;

const themeSubject = new BehaviorSubject<Theme>("light");

export const theme$ = themeSubject.asObservable();

export function getCurrentTheme(): Theme {
  return themeSubject.getValue();
}

export function initTheme() {
  if (initialized) return;
  initialized = true;

  const stored = getStoredTheme();
  userOverride = stored !== null;

  const initial = getInitialTheme();
  themeSubject.next(initial);
  applyThemeClass(initial);

  if (!userOverride && typeof window !== "undefined") {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      if (userOverride) return;
      const next = getSystemTheme();
      themeSubject.next(next);
      applyThemeClass(next);
    };

    media.addEventListener("change", handler);
    systemCleanup = () => media.removeEventListener("change", handler);
  }
}

export function setTheme(theme: Theme) {
  initTheme();
  userOverride = true;
  systemCleanup?.();
  systemCleanup = null;

  themeSubject.next(theme);
  persistTheme(theme);
  applyThemeClass(theme);
}

export function toggleTheme() {
  const next: Theme = getCurrentTheme() === "dark" ? "light" : "dark";
  setTheme(next);
}

