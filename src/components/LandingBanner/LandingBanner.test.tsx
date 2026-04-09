import React from "react";
import { render, screen } from "@testing-library/react";
import { LandingBanner } from "./LandingBanner";
import { resetTranslationMocks } from "../../test/mocks/translation";

vi.mock("../../features/translation", async () => {
  const mocks = await import("../../test/mocks/translation");
  return {
    useTranslations: mocks.useTranslationsMock,
  };
});

describe("LandingBanner", () => {
  beforeEach(() => {
    resetTranslationMocks({
      dictionary: {
        heroTitle: "castlemill",
        heroSubtitle: "Milton Castillo Hub",
        curriculumButton: "Curriculum",
        tetrisButton: "Play Tetris",
        galleryButton: "Gallery",
      },
    });
  });

  it("renders hero copy and navigation links", () => {
    render(<LandingBanner />);

    expect(screen.getByRole("heading", { name: "castlemill" })).toBeInTheDocument();
    expect(screen.getByText("Milton Castillo Hub")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Curriculum" })).toHaveAttribute("href", "/curriculum");
    expect(screen.getByRole("link", { name: "Play Tetris" })).toHaveAttribute(
      "href",
      "/coming-soon",
    );
    expect(screen.getByRole("link", { name: "Gallery" })).toHaveAttribute("href", "/coming-soon");
  });
});
