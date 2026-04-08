import React from "react";
import { render, screen } from "@testing-library/react";
import { ComingSoon } from "./ComingSoon";
import { resetTranslationMocks } from "../../test/mocks/translation";

vi.mock("../../features/translation", async () => {
  const mocks = await import("../../test/mocks/translation");
  return {
    useTranslations: mocks.useTranslationsMock,
  };
});

describe("ComingSoon", () => {
  beforeEach(() => {
    resetTranslationMocks({
      dictionary: {
        comingSoon: "Coming soon...",
        tagline: "Elves have gone missing, advailable as soon as we find them.",
      },
    });
  });

  it("renders coming soon heading and tagline", () => {
    render(<ComingSoon />);

    expect(screen.getByRole("heading", { name: "Coming soon..." })).toBeInTheDocument();
    expect(
      screen.getByText("Elves have gone missing, advailable as soon as we find them."),
    ).toBeInTheDocument();
  });
});
