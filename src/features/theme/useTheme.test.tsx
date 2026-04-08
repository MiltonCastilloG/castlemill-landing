import { renderHook } from "@testing-library/react";
import { useTheme } from "./useTheme";

const {
  initThemeMock,
  setThemeMock,
  toggleThemeMock,
  getCurrentThemeMock,
  useObservableStateMock,
} = vi.hoisted(() => ({
  initThemeMock: vi.fn(),
  setThemeMock: vi.fn(),
  toggleThemeMock: vi.fn(),
  getCurrentThemeMock: vi.fn(() => "light"),
  useObservableStateMock: vi.fn(() => "light"),
}));

vi.mock("./store", () => ({
  theme$: {},
  initTheme: initThemeMock,
  setTheme: setThemeMock,
  toggleTheme: toggleThemeMock,
  getCurrentTheme: getCurrentThemeMock,
}));

vi.mock("../../hooks/useObservableState", () => ({
  useObservableState: useObservableStateMock,
}));

describe("useTheme", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("initializes theme and exposes store actions", () => {
    const { result } = renderHook(() => useTheme());

    expect(useObservableStateMock).toHaveBeenCalled();
    expect(initThemeMock).toHaveBeenCalledTimes(1);
    expect(result.current.theme).toBe("light");
    expect(result.current.setTheme).toBe(setThemeMock);
    expect(result.current.toggleTheme).toBe(toggleThemeMock);
  });
});
