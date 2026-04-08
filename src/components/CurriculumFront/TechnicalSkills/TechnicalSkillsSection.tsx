"use client";

import { skillItems, type CurriculumFrontKey, type SkillItem } from "../data";

type TechnicalSkillsSectionProps = {
  title: string;
  t: (key: CurriculumFrontKey) => string;
};

export function TechnicalSkillsSection({ title, t }: TechnicalSkillsSectionProps) {
  return (
    <article className="rounded-2xl border border-lime-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-teal-700 dark:bg-teal-950/80">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-black dark:text-teal-100">
        {title}
      </h2>
      <dl className="mt-3 space-y-3 text-sm">
        {skillItems.map((skill: SkillItem) => (
          <div
            key={skill.labelKey}
            className="rounded-lg border border-lime-100 bg-lime-50/40 p-3 dark:border-teal-800 dark:bg-teal-900/30"
          >
            <dt className="font-semibold text-black dark:text-teal-100">{t(skill.labelKey)}</dt>
            <dd className="mt-1 text-gray-700 dark:text-teal-200">{t(skill.valueKey)}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
