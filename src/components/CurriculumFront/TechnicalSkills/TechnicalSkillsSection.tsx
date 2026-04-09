"use client";

import { CurriculumArticleCard, CurriculumInsetCard } from "../CurriculumArticle";
import { type CurriculumFrontKey } from "../data";

export type SkillItem = {
  labelKey: CurriculumFrontKey;
  valueKey: CurriculumFrontKey;
};

type TechnicalSkillsSectionProps = {
  title: string;
  t: (key: CurriculumFrontKey) => string;
  items: SkillItem[];
};

export function TechnicalSkillsSection({ title, t, items }: TechnicalSkillsSectionProps) {
  return (
    <CurriculumArticleCard>
      <h2 className="text-sm font-semibold uppercase tracking-wide text-black dark:text-teal-100">
        {title}
      </h2>
      <dl className="mt-3 space-y-3 text-sm">
        {items.map((skill: SkillItem) => (
          <CurriculumInsetCard key={skill.labelKey}>
            <dt className="font-semibold text-black dark:text-teal-100">{t(skill.labelKey)}</dt>
            <dd className="mt-1 text-gray-700 dark:text-teal-200">{t(skill.valueKey)}</dd>
          </CurriculumInsetCard>
        ))}
      </dl>
    </CurriculumArticleCard>
  );
}
