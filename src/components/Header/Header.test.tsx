import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Header } from "./Header";
import {
  resetTranslationMocks,
  setLanguageMock,
} from "../../test/mocks/translation";
import { resetThemeMocks, setThemeMock } from "../../test/mocks/theme";

vi.mock("../../features/translation", async () => {
  const mocks = await import("../../test/mocks/translation");
  return {
    useLanguage: mocks.useLanguageMock,
    useTranslations: mocks.useTranslationsMock,
  };
});

vi.mock("../../features/theme", async () => {
  const mocks = await import("../../test/mocks/theme");
  return {
    useTheme: mocks.useThemeMock,
  };
});

describe("Header", () => {
  beforeEach(() => {
    resetTranslationMocks({
      dictionary: {
        brand: "CastleMill",
        languageLabel: "Language",
        themeLabel: "Theme",
      },
    });
    resetThemeMocks({ theme: "light" });
  });

  it("renders labels and brand", () => {
    render(<Header />);

    expect(screen.getByText("CastleMill")).toBeInTheDocument();
    expect(screen.getByText("Language")).toBeInTheDocument();
    expect(screen.getByText("Theme")).toBeInTheDocument();
  });

  it("calls handlers when selecting language and theme", () => {
    render(<Header />);

    fireEvent.click(screen.getByRole("button", { name: "ES" }));
    fireEvent.click(screen.getByRole("button", { name: "Dark" }));

    expect(setLanguageMock).toHaveBeenCalledWith("es");
    expect(setThemeMock).toHaveBeenCalledWith("dark");
  });
});
