"use client";

import { useState } from "react";
import { experienceItems, type CurriculumFrontKey, type ExperienceItem } from "../data";

type ExperienceSectionProps = {
  title: string;
  t: (key: CurriculumFrontKey) => string;
};

export function ExperienceSection({ title, t }: ExperienceSectionProps) {
  const [openExperienceIndices, setOpenExperienceIndices] = useState<Set<number>>(new Set());

  return (
    <article className="rounded-2xl border border-lime-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-teal-700 dark:bg-teal-950/80">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-black dark:text-teal-100">
        {title}
      </h2>
      <div className="mt-4 space-y-5 border-l-2 border-lime-200 pl-4 dark:border-teal-700">
        {experienceItems.map((experience: ExperienceItem, index: number) => (
          <article
            key={experience.titleKey}
            role="button"
            tabIndex={0}
            aria-expanded={openExperienceIndices.has(index)}
            onClick={() =>
              setOpenExperienceIndices((prev) => {
                const next = new Set(prev);
                if (next.has(index)) {
                  next.delete(index);
                } else {
                  next.add(index);
                }
                return next;
              })
            }
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setOpenExperienceIndices((prev) => {
                  const next = new Set(prev);
                  if (next.has(index)) {
                    next.delete(index);
                  } else {
                    next.add(index);
                  }
                  return next;
                });
              }
            }}
            className="relative rounded-xl border border-lime-100 bg-gradient-to-r from-lime-50/50 to-white p-4 transition-all hover:border-lime-300 hover:shadow-sm dark:border-teal-800 dark:from-teal-900/35 dark:to-teal-950/70 dark:hover:border-teal-600"
          >
            <span className="absolute -left-[1.35rem] top-5 h-3 w-3 rounded-full border-2 border-white bg-lime-500 dark:border-teal-950 dark:bg-cyan-400" />
            <div className="w-full text-left">
              <div className="min-w-0">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-sm font-semibold text-black dark:text-teal-100">
                    {t(experience.titleKey)}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-teal-300">
                    {t(experience.dateKey)}
                  </p>
                </div>
                <p className="mt-1 text-sm text-gray-700 dark:text-teal-200">
                  {t(experience.companyKey)}
                </p>
              </div>
              {openExperienceIndices.has(index) ? null : (
                <div className="mt-2 flex justify-center">
                  <svg
                    focusable="false"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="mt-0.5 h-4 w-4 shrink-0 fill-current text-gray-500 transition-transform duration-200 dark:text-teal-300"
                  >
                    <path d="M5.41 7.59L4 9l8 8 8-8-1.41-1.41L12 14.17" />
                  </svg>
                </div>
              )}
            </div>
            {openExperienceIndices.has(index) ? (
              <>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700 dark:text-teal-200">
                  {experience.bulletKeys.map((bulletKey: CurriculumFrontKey) => (
                    <li key={bulletKey}>{t(bulletKey)}</li>
                  ))}
                </ul>
                <div className="mt-2 flex justify-center">
                  <svg
                    focusable="false"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="mt-0.5 h-4 w-4 shrink-0 rotate-180 fill-current text-gray-500 transition-transform duration-200 dark:text-teal-300"
                  >
                    <path d="M5.41 7.59L4 9l8 8 8-8-1.41-1.41L12 14.17" />
                  </svg>
                </div>
              </>
            ) : null}
          </article>
        ))}
      </div>
    </article>
  );
}
