import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { ExperienceSection, type ExperienceItem } from "./ExperienceSection";
import { type CurriculumFrontKey } from "../data";
import { curriculumExperienceItems as experienceItems } from "../CurriculumFront";
import { resetTranslationMocks } from "../../../test/mocks/translation";

vi.mock("../../../features/translation", async () => {
  const mocks = await import("../../../test/mocks/translation");
  return {
    useTranslations: mocks.useTranslationsMock,
  };
});

describe("ExperienceSection", () => {
  beforeEach(() => {
    resetTranslationMocks();
  });

  it("renders experience items and allows independent toggle", () => {
    const t = (key: CurriculumFrontKey) => key;
    render(<ExperienceSection title="experienceTitle" t={t} items={experienceItems} />);

    expect(screen.getByRole("heading", { name: "experienceTitle" })).toBeInTheDocument();

    experienceItems.forEach((experience: ExperienceItem) => {
      expect(screen.getByRole("heading", { name: experience.titleKey })).toBeInTheDocument();
      expect(screen.getByText(experience.companyKey)).toBeInTheDocument();
      experience.bulletKeys.forEach((bulletKey: CurriculumFrontKey) => {
        expect(screen.queryByText(bulletKey)).not.toBeInTheDocument();
      });
    });

    fireEvent.click(screen.getByRole("button", { name: /role1Title/i }));
    fireEvent.click(screen.getByRole("button", { name: /role2Title/i }));

    experienceItems[0].bulletKeys.forEach((bulletKey: CurriculumFrontKey) => {
      expect(screen.getByText(bulletKey)).toBeInTheDocument();
    });
    experienceItems[1].bulletKeys.forEach((bulletKey: CurriculumFrontKey) => {
      expect(screen.getByText(bulletKey)).toBeInTheDocument();
    });
    experienceItems[2].bulletKeys.forEach((bulletKey: CurriculumFrontKey) => {
      expect(screen.queryByText(bulletKey)).not.toBeInTheDocument();
    });
  });
});
