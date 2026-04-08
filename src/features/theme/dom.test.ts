import {
  applyThemeClass,
  getInitialTheme,
  getStoredTheme,
  getSystemTheme,
  persistTheme,
} from "./dom";
import { THEME_STORAGE_KEY } from "./config";

describe("theme dom helpers", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove("dark");
  });

  it("reads valid stored theme only", () => {
    expect(getStoredTheme()).toBeNull();

    localStorage.setItem(THEME_STORAGE_KEY, "dark");
    expect(getStoredTheme()).toBe("dark");

    localStorage.setItem(THEME_STORAGE_KEY, "invalid");
    expect(getStoredTheme()).toBeNull();
  });

  it("detects system theme from media query", () => {
    vi.stubGlobal(
      "matchMedia",
      vi.fn().mockReturnValue({
        matches: true,
      }),
    );

    expect(getSystemTheme()).toBe("dark");
  });

  it("applies and removes dark class", () => {
    applyThemeClass("dark");
    expect(document.documentElement.classList.contains("dark")).toBe(true);

    applyThemeClass("light");
    expect(document.documentElement.classList.contains("dark")).toBe(false);
  });

  it("persists selected theme", () => {
    persistTheme("dark");
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe("dark");
  });

  it("prefers stored theme over system theme", () => {
    vi.stubGlobal(
      "matchMedia",
      vi.fn().mockReturnValue({
        matches: false,
      }),
    );

    localStorage.setItem(THEME_STORAGE_KEY, "dark");
    expect(getInitialTheme()).toBe("dark");
  });
});
