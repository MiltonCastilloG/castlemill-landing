import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import {
  CurriculumFront,
  curriculumExperienceItems,
  curriculumSkillItems,
} from "./CurriculumFront";
import {
  educationItems,
  languageItems,
  socialLinks,
  type CurriculumFrontKey,
  type EducationItem,
  type LanguageItem,
} from "./data";
import { type ExperienceItem } from "./Experience/ExperienceSection";
import { type SkillItem } from "./TechnicalSkills/TechnicalSkillsSection";
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
    expect(screen.getByRole("link", { name: socialLinks[0].name })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: socialLinks[0].name })).toHaveAttribute(
      "href",
      socialLinks[0].url,
    );
    expect(screen.getByText("locationLine")).toBeInTheDocument();

    [
      "personalInfoTitle",
      "summaryTitle",
      "experienceTitle",
      "educationTitle",
      "technicalSkillsTitle",
      "languagesTitle",
    ].forEach((headingKey) => {
      expect(screen.getByRole("heading", { name: headingKey })).toBeInTheDocument();
    });

    curriculumExperienceItems.forEach((experience: ExperienceItem) => {
      expect(screen.getByRole("heading", { name: experience.titleKey })).toBeInTheDocument();
      expect(screen.getByText(experience.companyKey)).toBeInTheDocument();
      expect(screen.getByText(experience.dateKey)).toBeInTheDocument();
      experience.bulletKeys.forEach((bulletKey: CurriculumFrontKey) => {
        expect(screen.queryByText(bulletKey)).not.toBeInTheDocument();
      });
    });

    fireEvent.click(screen.getByRole("button", { name: /role1Title/i }));
    curriculumExperienceItems[0].bulletKeys.forEach((bulletKey: CurriculumFrontKey) => {
      expect(screen.getByText(bulletKey)).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole("button", { name: /role2Title/i }));
    curriculumExperienceItems[0].bulletKeys.forEach((bulletKey: CurriculumFrontKey) => {
      expect(screen.getByText(bulletKey)).toBeInTheDocument();
    });
    curriculumExperienceItems[1].bulletKeys.forEach((bulletKey: CurriculumFrontKey) => {
      expect(screen.getByText(bulletKey)).toBeInTheDocument();
    });

    educationItems.forEach((education: EducationItem) => {
      expect(screen.getByRole("heading", { name: education.degreeKey })).toBeInTheDocument();
      expect(screen.getByText(education.dateKey)).toBeInTheDocument();
      education.bulletKeys.forEach((bulletKey: CurriculumFrontKey) => {
        expect(screen.getByText(bulletKey)).toBeInTheDocument();
      });
    });

    curriculumSkillItems.forEach((skill: SkillItem) => {
      expect(screen.getByText(skill.labelKey)).toBeInTheDocument();
      expect(screen.getAllByText(skill.valueKey).length).toBeGreaterThan(0);
    });

    languageItems.forEach((language: LanguageItem) => {
      expect(screen.getByText(language.nameKey)).toBeInTheDocument();
      expect(screen.getByText(language.levelKey)).toBeInTheDocument();
    });
  });
});
