import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Header } from "./Header";
import { resetTranslationMocks, setLanguageMock } from "../../test/mocks/translation";
import { resetThemeMocks, setThemeMock } from "../../test/mocks/theme";

let mockPathname = "/";

vi.mock("next/navigation", () => ({
  usePathname: () => mockPathname,
}));

vi.mock("next/link", () => ({
  default({
    children,
    href,
    ...rest
  }: {
    children: React.ReactNode;
    href: string;
    [key: string]: unknown;
  }) {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    );
  },
}));

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
    mockPathname = "/";
    resetTranslationMocks({
      dictionary: {
        brand: "CastleMill",
        languageLabel: "Language",
        themeLabel: "Theme",
        navAriaLabel: "Main navigation",
        home: "Home",
        curriculum: "Curriculum",
        playTetris: "Play Tetris",
        gallery: "Gallery",
        openMenu: "Open menu",
        closeMenu: "Close menu",
      },
    });
    resetThemeMocks({ theme: "light" });
  });

  it("renders labels and opens fullscreen navigation", () => {
    render(<Header />);

    expect(screen.getByText("CastleMill")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Open menu" })).toBeInTheDocument();
    expect(screen.getByText("Language")).toBeInTheDocument();
    expect(screen.getByText("Theme")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Open menu" }));

    expect(screen.getByRole("navigation", { name: "Main navigation" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: "Curriculum" })).toHaveAttribute("href", "/curriculum");
    expect(screen.getByRole("link", { name: "Play Tetris" })).toHaveAttribute(
      "href",
      "/coming-soon",
    );
    expect(screen.getByRole("link", { name: "Gallery" })).toHaveAttribute("href", "/coming-soon");
    expect(screen.getByRole("button", { name: "Close menu" })).toBeInTheDocument();
  });

  it("resets menu state when route changes", () => {
    const { rerender } = render(<Header />);

    fireEvent.click(screen.getByRole("button", { name: "Open menu" }));
    expect(screen.getByRole("button", { name: "Close menu" })).toBeInTheDocument();

    mockPathname = "/curriculum";
    rerender(<Header />);

    expect(screen.queryByRole("button", { name: "Close menu" })).not.toBeInTheDocument();
    expect(screen.queryByRole("navigation", { name: "Main navigation" })).not.toBeInTheDocument();
  });

  it("calls handlers when selecting language and theme", () => {
    render(<Header />);

    fireEvent.click(screen.getByRole("button", { name: "ES" }));
    fireEvent.click(screen.getByRole("button", { name: "Dark" }));

    expect(setLanguageMock).toHaveBeenCalledWith("es");
    expect(setThemeMock).toHaveBeenCalledWith("dark");
  });
});
