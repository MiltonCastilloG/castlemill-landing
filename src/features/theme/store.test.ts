type DomModule = typeof import("./dom");
import type { Theme } from "./config";

function setupMatchMedia() {
  const listeners = new Set<() => void>();
  const media = {
    matches: false,
    addEventListener: vi.fn((_event: string, handler: () => void) => {
      listeners.add(handler);
    }),
    removeEventListener: vi.fn((_event: string, handler: () => void) => {
      listeners.delete(handler);
    }),
    dispatchChange(nextMatches: boolean) {
      media.matches = nextMatches;
      listeners.forEach((handler) => handler());
    },
  };

  vi.stubGlobal("matchMedia", vi.fn(() => media));
  return media;
}

describe("theme store", () => {
  beforeEach(() => {
    vi.resetModules();
    vi.restoreAllMocks();
  });

  it("initializes with initial theme and applies class", async () => {
    const applyThemeClass = vi.fn();
    const domMock: Partial<DomModule> = {
      getStoredTheme: vi.fn(() => null),
      getInitialTheme: vi.fn(() => "dark"),
      getSystemTheme: vi.fn(() => "light"),
      persistTheme: vi.fn(),
      applyThemeClass,
    };
    vi.doMock("./dom", () => domMock);
    setupMatchMedia();

    const { initTheme, getCurrentTheme } = await import("./store");
    initTheme();

    expect(getCurrentTheme()).toBe("dark");
    expect(applyThemeClass).toHaveBeenCalledWith("dark");
  });

  it("tracks system theme changes when there is no user override", async () => {
    const applyThemeClass = vi.fn();
    const getSystemTheme = vi.fn((): Theme => "dark");
    const domMock: Partial<DomModule> = {
      getStoredTheme: vi.fn(() => null),
      getInitialTheme: vi.fn(() => "light"),
      getSystemTheme,
      persistTheme: vi.fn(),
      applyThemeClass,
    };
    vi.doMock("./dom", () => domMock);
    const media = setupMatchMedia();

    const { initTheme, getCurrentTheme } = await import("./store");
    initTheme();
    media.dispatchChange(true);

    expect(getCurrentTheme()).toBe("dark");
    expect(applyThemeClass).toHaveBeenLastCalledWith("dark");
  });

  it("setTheme persists choice and stops system tracking", async () => {
    const applyThemeClass = vi.fn();
    const persistTheme = vi.fn();
    const domMock: Partial<DomModule> = {
      getStoredTheme: vi.fn(() => null),
      getInitialTheme: vi.fn(() => "light"),
      getSystemTheme: vi.fn(() => "dark"),
      persistTheme,
      applyThemeClass,
    };
    vi.doMock("./dom", () => domMock);
    const media = setupMatchMedia();

    const { initTheme, setTheme, getCurrentTheme } = await import("./store");
    initTheme();
    setTheme("dark");
    media.dispatchChange(false);

    expect(getCurrentTheme()).toBe("dark");
    expect(persistTheme).toHaveBeenCalledWith("dark");
    expect(media.removeEventListener).toHaveBeenCalled();
  });

  it("toggleTheme switches between themes", async () => {
    const domMock: Partial<DomModule> = {
      getStoredTheme: vi.fn(() => "dark"),
      getInitialTheme: vi.fn(() => "dark"),
      getSystemTheme: vi.fn(() => "dark"),
      persistTheme: vi.fn(),
      applyThemeClass: vi.fn(),
    };
    vi.doMock("./dom", () => domMock);
    setupMatchMedia();

    const { initTheme, toggleTheme, getCurrentTheme } = await import("./store");
    initTheme();

    toggleTheme();
    expect(getCurrentTheme()).toBe("light");
  });
});
