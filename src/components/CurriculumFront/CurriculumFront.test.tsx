import React from "react";
import { render, screen } from "@testing-library/react";
import { CurriculumFront } from "./CurriculumFront";
import { curriculumFrontSections } from "./data";
import { resetTranslationMocks } from "../../test/mocks/translation";

vi.mock("../../features/translation", async () => {
  const mocks = await import("../../test/mocks/translation");
  return {
    useTranslations: mocks.useTranslationsMock,
  };
});

describe("CurriculumFront", () => {
  beforeEach(() => {
    resetTranslationMocks();
  });

  it("renders every section and footer note", () => {
    render(<CurriculumFront />);

    curriculumFrontSections.forEach((section) => {
      expect(screen.getByRole("heading", { name: section.titleKey })).toBeInTheDocument();
      expect(screen.getByText(section.descriptionKey)).toBeInTheDocument();
      section.tagKeys.forEach((tag) => {
        expect(screen.getByText(tag)).toBeInTheDocument();
      });
    });

    expect(screen.getByText("footerNote")).toBeInTheDocument();
  });
});
