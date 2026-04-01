"use client";

import { useTranslations } from "../../features/translation";
import { curriculumFrontSections, curriculumFrontTranslations } from "./data";

export function CurriculumFront() {
  const { t } = useTranslations(curriculumFrontTranslations);

  return (
    <main className="flex-1 pb-14">
      <section className="w-full border-y border-lime-300 bg-white px-4 py-14 text-black shadow-[0_16px_45px_-24px_rgba(15,23,42,0.18)] sm:px-6 lg:px-8 dark:border-teal-700 dark:bg-teal-950/70 dark:text-teal-100 dark:shadow-[0_16px_45px_-24px_rgba(16,185,129,0.25)]">
        <div className="mx-auto w-full max-w-6xl text-center">
          <h1 className="text-5xl font-semibold uppercase tracking-[0.08em] sm:text-6xl md:text-7xl">
            {t("heroTitle")}
          </h1>
          <p className="theme-muted-text mt-4 text-lg font-medium tracking-wide sm:text-xl">
            {t("heroSubtitle")}
          </p>
        </div>
      </section>

      <section className="mt-8 w-full space-y-3">
        {curriculumFrontSections.map((section, index) => {
          const isEven = index % 2 === 0;

          return (
            <article
              key={section.titleKey}
              className={`w-full border-y p-7 transition-colors sm:p-9 ${
                isEven
                  ? "border-lime-100 bg-white dark:border-teal-700 dark:bg-teal-950/80"
                  : "border-lime-100 bg-gray-50 dark:border-teal-700 dark:bg-teal-900/85"
              }`}
            >
              <div className="mx-auto w-full max-w-6xl">
                <h2 className="text-2xl font-semibold text-black dark:text-teal-100">
                  {t(section.titleKey)}
                </h2>
                <p className="theme-muted-text mt-3 text-sm leading-relaxed">
                  {t(section.descriptionKey)}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {section.tagKeys.map((tagKey) => (
                    <span
                      key={`${section.titleKey}-${tagKey}`}
                      className="rounded-full border border-lime-300 bg-white px-3 py-1 text-xs font-medium text-black dark:border-teal-500/80 dark:bg-teal-950/95 dark:text-teal-200"
                    >
                      {t(tagKey)}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <section className="mx-auto mt-8 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-lime-300 bg-white p-6 text-center dark:border-teal-600/80 dark:bg-teal-950/85">
          <p className="theme-muted-text text-sm sm:text-base">
            {t("footerNote")}
          </p>
        </div>
      </section>
    </main>
  );
}
