"use client";

import { useTranslations } from "../../features/translation";
import { ExperienceSection } from "./Experience";
import {
  curriculumFrontTranslations,
  educationItems,
  languageItems,
  skillItems,
  type CurriculumFrontKey,
  type EducationItem,
  type LanguageItem,
  type SkillItem,
} from "./data";

export function CurriculumFront() {
  const { t } = useTranslations(curriculumFrontTranslations);

  return (
    <main className="relative mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-56 bg-gradient-to-r from-lime-100/60 via-cyan-100/50 to-fuchsia-100/40 blur-3xl dark:from-lime-900/20 dark:via-cyan-900/20 dark:to-fuchsia-900/20" />

      <header className="relative overflow-hidden rounded-3xl border border-lime-200 bg-gradient-to-br from-lime-50 via-white to-cyan-50/70 p-6 shadow-md dark:border-teal-700 dark:from-teal-900/70 dark:via-teal-950/80 dark:to-cyan-950/70 sm:p-8">
        <div className="absolute -right-16 -top-20 h-48 w-48 rounded-full bg-lime-300/30 blur-2xl dark:bg-cyan-400/20" />
        <div className="absolute -bottom-20 -left-12 h-44 w-44 rounded-full bg-cyan-300/30 blur-2xl dark:bg-lime-400/20" />

        <div className="relative">
          <span className="inline-flex rounded-full border border-lime-300 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-lime-700 dark:border-teal-500 dark:bg-teal-950/70 dark:text-teal-200">
            Curriculum Vitae
          </span>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-black dark:text-teal-100 sm:text-4xl">
            {t("fullName")}
          </h1>
          <p className="mt-3 text-sm text-gray-700 dark:text-teal-200">{t("contactLine")}</p>
          <p className="mt-1 text-sm text-gray-600 dark:text-teal-300">{t("locationLine")}</p>
        </div>
      </header>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
        <section className="space-y-6 lg:col-span-8">
          <article className="rounded-2xl border border-lime-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-teal-700 dark:bg-teal-950/80">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-black dark:text-teal-100">
              {t("summaryTitle")}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-teal-200">
              {t("summaryText")}
            </p>
          </article>

          <ExperienceSection title={t("experienceTitle")} t={t} />
        </section>

        <aside className="space-y-6 lg:col-span-4">
          <article className="rounded-2xl border border-lime-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-teal-700 dark:bg-teal-950/80">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-black dark:text-teal-100">
              {t("technicalSkillsTitle")}
            </h2>
            <dl className="mt-3 space-y-3 text-sm">
              {skillItems.map((skill: SkillItem) => (
                <div key={skill.labelKey} className="rounded-lg border border-lime-100 bg-lime-50/40 p-3 dark:border-teal-800 dark:bg-teal-900/30">
                  <dt className="font-semibold text-black dark:text-teal-100">{t(skill.labelKey)}</dt>
                  <dd className="mt-1 text-gray-700 dark:text-teal-200">{t(skill.valueKey)}</dd>
                </div>
              ))}
            </dl>
          </article>

          <article className="rounded-2xl border border-lime-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-teal-700 dark:bg-teal-950/80">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-black dark:text-teal-100">
              {t("languagesTitle")}
            </h2>
            <dl className="mt-3 space-y-3 text-sm">
              {languageItems.map((language: LanguageItem) => (
                <div key={language.nameKey} className="rounded-lg border border-lime-100 bg-lime-50/40 p-3 dark:border-teal-800 dark:bg-teal-900/30">
                  <dt className="font-semibold text-black dark:text-teal-100">{t(language.nameKey)}</dt>
                  <dd className="mt-1 text-gray-700 dark:text-teal-200">{t(language.levelKey)}</dd>
                </div>
              ))}
            </dl>
          </article>

          <article className="rounded-2xl border border-lime-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-teal-700 dark:bg-teal-950/80">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-black dark:text-teal-100">
              {t("educationTitle")}
            </h2>
            <div className="mt-3 space-y-4">
              {educationItems.map((education: EducationItem) => (
                <article key={education.degreeKey} className="rounded-lg border border-lime-100 bg-lime-50/40 p-3 dark:border-teal-800 dark:bg-teal-900/30">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-sm font-semibold text-black dark:text-teal-100">
                      {t(education.degreeKey)}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-teal-300">{t(education.dateKey)}</p>
                  </div>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700 dark:text-teal-200">
                    {education.bulletKeys.map((bulletKey: CurriculumFrontKey) => (
                      <li key={bulletKey}>{t(bulletKey)}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </article>
        </aside>
      </div>
    </main>
  );
}
