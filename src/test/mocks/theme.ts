import type { Theme } from "../../features/theme";

export const themeMockState: { theme: Theme } = {
  theme: "light",
};

export const setThemeMock = vi.fn((theme: Theme) => {
  themeMockState.theme = theme;
});

export const toggleThemeMock = vi.fn(() => {
  themeMockState.theme = themeMockState.theme === "dark" ? "light" : "dark";
});

export function resetThemeMocks(overrides?: { theme?: Theme }) {
  themeMockState.theme = overrides?.theme ?? "light";
  setThemeMock.mockClear();
  toggleThemeMock.mockClear();
}

export function useThemeMock() {
  return {
    theme: themeMockState.theme,
    setTheme: setThemeMock,
    toggleTheme: toggleThemeMock,
  };
}
