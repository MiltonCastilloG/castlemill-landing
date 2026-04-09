"use client";

import { useTranslations } from "../../features/translation";
import { ExperienceSection, type ExperienceItem } from "./Experience";
import { TechnicalSkillsSection, type SkillItem } from "./TechnicalSkills";
import {
  curriculumFrontTranslations,
  educationItems,
  languageItems,
  socialLinks,
  type CurriculumFrontKey,
  type EducationItem,
  type LanguageItem,
} from "./data";
import { CurriculumArticleCard, CurriculumInsetCard } from "./CurriculumArticleCard";
import Link from "next/link";

export const curriculumExperienceItems: ExperienceItem[] = [
  {
    titleKey: "role1Title",
    companyKey: "role1Company",
    dateKey: "role1Date",
    bulletKeys: ["role1Bullet1", "role1Bullet2", "role1Bullet3", "role1Bullet4"],
  },
  {
    titleKey: "role2Title",
    companyKey: "role2Company",
    dateKey: "role2Date",
    bulletKeys: ["role2Bullet1", "role2Bullet2", "role2Bullet3", "role2Bullet4", "role2Bullet5"],
  },
  {
    titleKey: "role3Title",
    companyKey: "role3Company",
    dateKey: "role3Date",
    bulletKeys: ["role3Bullet1", "role3Bullet2", "role3Bullet3", "role3Bullet4"],
  },
];

export const curriculumSkillItems: SkillItem[] = [
  {
    labelKey: "skillsLanguagesLabel",
    valueKey: "skillsLanguagesValue",
  },
  {
    labelKey: "skillsFrontendLabel",
    valueKey: "skillsFrontendValue",
  },
  {
    labelKey: "skillsBackendLabel",
    valueKey: "skillsBackendValue",
  },
  {
    labelKey: "skillsDatabasesLabel",
    valueKey: "skillsDatabasesValue",
  },
  {
    labelKey: "skillsCloudLabel",
    valueKey: "skillsCloudValue",
  },
  {
    labelKey: "skillsMethodologiesLabel",
    valueKey: "skillsMethodologiesValue",
  },
  {
    labelKey: "skillsToolsLabel",
    valueKey: "skillsToolsValue",
  },
];

export function CurriculumFront() {
  const { t } = useTranslations(curriculumFrontTranslations);

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
      <header className="rounded-3xl border border-lime-200 bg-white p-6 shadow-sm dark:border-teal-700 dark:bg-teal-950/80 sm:p-8">
        <div>
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex rounded-full border border-lime-300 bg-lime-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-lime-700 dark:border-teal-500 dark:bg-teal-900/50 dark:text-teal-200">
              Curriculum Vitae
            </span>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-black dark:text-teal-100 sm:text-4xl">
              {t("fullName")}
            </h1>
          </div>
        </div>
      </header>

      <div className="mt-6 grid grid-cols-1 gap-6 text-center">
        <CurriculumArticleCard>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-black dark:text-teal-100">
            {t("personalInfoTitle")}
          </h2>
          {socialLinks.map((social: { name: string; url: string }, index: number) => (
            <Link
              key={`${index}-social-link`}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 text-sm text-gray-700 underline-offset-2 transition-colors hover:text-lime-700 hover:underline dark:text-teal-200 dark:hover:text-teal-100"
            >
              {social.name}
            </Link>
          ))}
          <p className="mt-1 text-sm text-gray-600 dark:text-teal-300">{t("locationLine")}</p>
        </CurriculumArticleCard>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
        <section className="space-y-6 lg:col-span-8">
          <CurriculumArticleCard>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-black dark:text-teal-100">
              {t("summaryTitle")}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-teal-200">
              {t("summaryText")}
            </p>
          </CurriculumArticleCard>

          <ExperienceSection title={t("experienceTitle")} t={t} items={curriculumExperienceItems} />
        </section>

        <aside className="space-y-6 lg:col-span-4">
          <TechnicalSkillsSection
            title={t("technicalSkillsTitle")}
            t={t}
            items={curriculumSkillItems}
          />

          <CurriculumArticleCard>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-black dark:text-teal-100">
              {t("languagesTitle")}
            </h2>
            <dl className="mt-3 space-y-3 text-sm">
              {languageItems.map((language: LanguageItem) => (
                <CurriculumInsetCard key={language.nameKey}>
                  <dt className="font-semibold text-black dark:text-teal-100">
                    {t(language.nameKey)}
                  </dt>
                  <dd className="mt-1 text-gray-700 dark:text-teal-200">{t(language.levelKey)}</dd>
                </CurriculumInsetCard>
              ))}
            </dl>
          </CurriculumArticleCard>

          <CurriculumArticleCard>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-black dark:text-teal-100">
              {t("educationTitle")}
            </h2>
            <div className="mt-3 space-y-4">
              {educationItems.map((education: EducationItem) => (
                <CurriculumInsetCard key={education.degreeKey} as="article">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-sm font-semibold text-black dark:text-teal-100">
                      {t(education.degreeKey)}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-teal-300">
                      {t(education.dateKey)}
                    </p>
                  </div>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700 dark:text-teal-200">
                    {education.bulletKeys.map((bulletKey: CurriculumFrontKey) => (
                      <li key={bulletKey}>{t(bulletKey)}</li>
                    ))}
                  </ul>
                </CurriculumInsetCard>
              ))}
            </div>
          </CurriculumArticleCard>
        </aside>
      </div>
    </main>
  );
}
