"use client";

import { useTranslations } from "../../features/translation";
import { curriculumFrontSections, curriculumFrontTranslations } from "./data";

export function CurriculumFront() {
  const { t } = useTranslations(curriculumFrontTranslations);

  return (
    <main className="flex-1 pb-14">
      <section className="w-full border-y border-slate-200 bg-slate-50 px-4 py-14 text-slate-950 shadow-[0_16px_45px_-24px_rgba(15,23,42,0.18)] sm:px-6 lg:px-8 dark:border-white dark:bg-white dark:shadow-[0_16px_45px_-24px_rgba(248,250,252,0.75)]">
        <div className="mx-auto w-full max-w-6xl text-center">
          <h1 className="text-5xl font-semibold uppercase tracking-[0.08em] sm:text-6xl md:text-7xl">
            {t("heroTitle")}
          </h1>
          <p className="mt-4 text-lg font-medium tracking-wide text-slate-700 sm:text-xl">
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
                  ? "border-slate-200 bg-white"
                  : "border-slate-200 bg-slate-50"
              } ${
                isEven
                  ? "dark:border-slate-700 dark:bg-slate-900/85"
                  : "dark:border-slate-600 dark:bg-slate-800/75"
              }`}
            >
              <div className="mx-auto w-full max-w-6xl">
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                  {t(section.titleKey)}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {t(section.descriptionKey)}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {section.tagKeys.map((tagKey) => (
                    <span
                      key={`${section.titleKey}-${tagKey}`}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-500/80 dark:bg-slate-950/60 dark:text-slate-200"
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
        <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center dark:border-slate-600/80 dark:bg-slate-900/70">
          <p className="text-sm text-slate-600 sm:text-base dark:text-slate-300">
            {t("footerNote")}
          </p>
        </div>
      </section>
    </main>
  );
}
