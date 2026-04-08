import React from "react";
import { render, screen } from "@testing-library/react";
import { TechnicalSkillsSection } from "./TechnicalSkillsSection";
import { skillItems, type SkillItem } from "../data";
import { resetTranslationMocks } from "../../../test/mocks/translation";

vi.mock("../../../features/translation", async () => {
  const mocks = await import("../../../test/mocks/translation");
  return {
    useTranslations: mocks.useTranslationsMock,
  };
});

describe("TechnicalSkillsSection", () => {
  beforeEach(() => {
    resetTranslationMocks();
  });

  it("renders title and every technical skill item", () => {
    const t = (key: string) => key;
    render(<TechnicalSkillsSection title="technicalSkillsTitle" t={t} />);

    expect(screen.getByRole("heading", { name: "technicalSkillsTitle" })).toBeInTheDocument();
    skillItems.forEach((skill: SkillItem) => {
      expect(screen.getByText(skill.labelKey)).toBeInTheDocument();
      expect(screen.getByText(skill.valueKey)).toBeInTheDocument();
    });
  });
});
