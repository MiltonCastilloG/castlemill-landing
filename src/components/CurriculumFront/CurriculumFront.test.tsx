import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { CurriculumFront } from "./CurriculumFront";
import {
  educationItems,
  experienceItems,
  languageItems,
  skillItems,
  type CurriculumFrontKey,
  type EducationItem,
  type ExperienceItem,
  type LanguageItem,
  type SkillItem,
} from "./data";
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

  it("renders header and every curriculum section", () => {
    render(<CurriculumFront />);

    expect(screen.getByRole("heading", { name: "fullName" })).toBeInTheDocument();
    expect(screen.getByText("contactLine")).toBeInTheDocument();
    expect(screen.getByText("locationLine")).toBeInTheDocument();

    ["summaryTitle", "experienceTitle", "educationTitle", "technicalSkillsTitle", "languagesTitle"].forEach(
      (headingKey) => {
        expect(screen.getByRole("heading", { name: headingKey })).toBeInTheDocument();
      }
    );

    experienceItems.forEach((experience: ExperienceItem) => {
      expect(screen.getByRole("heading", { name: experience.titleKey })).toBeInTheDocument();
      expect(screen.getByText(experience.companyKey)).toBeInTheDocument();
      expect(screen.getByText(experience.dateKey)).toBeInTheDocument();
      experience.bulletKeys.forEach((bulletKey: CurriculumFrontKey) => {
        expect(screen.queryByText(bulletKey)).not.toBeInTheDocument();
      });
    });

    fireEvent.click(screen.getByRole("button", { name: /role1Title/i }));
    experienceItems[0].bulletKeys.forEach((bulletKey: CurriculumFrontKey) => {
      expect(screen.getByText(bulletKey)).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole("button", { name: /role2Title/i }));
    experienceItems[0].bulletKeys.forEach((bulletKey: CurriculumFrontKey) => {
      expect(screen.getByText(bulletKey)).toBeInTheDocument();
    });
    experienceItems[1].bulletKeys.forEach((bulletKey: CurriculumFrontKey) => {
      expect(screen.getByText(bulletKey)).toBeInTheDocument();
    });

    educationItems.forEach((education: EducationItem) => {
      expect(screen.getByRole("heading", { name: education.degreeKey })).toBeInTheDocument();
      expect(screen.getByText(education.dateKey)).toBeInTheDocument();
      education.bulletKeys.forEach((bulletKey: CurriculumFrontKey) => {
        expect(screen.getByText(bulletKey)).toBeInTheDocument();
      });
    });

    skillItems.forEach((skill: SkillItem) => {
      expect(screen.getByText(skill.labelKey)).toBeInTheDocument();
      expect(screen.getAllByText(skill.valueKey).length).toBeGreaterThan(0);
    });

    languageItems.forEach((language: LanguageItem) => {
      expect(screen.getByText(language.nameKey)).toBeInTheDocument();
      expect(screen.getByText(language.levelKey)).toBeInTheDocument();
    });
  });
});
