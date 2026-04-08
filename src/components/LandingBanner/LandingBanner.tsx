"use client";

import Link from "next/link";
import { useTranslations } from "../../features/translation";
import { landingBannerTranslations } from "./data";

export function LandingBanner() {
  const { t } = useTranslations(landingBannerTranslations);

  return (
    <main className="flex flex-1">
      <section className="flex flex-1 w-full border-y border-lime-300 bg-white px-4 text-black shadow-[0_16px_45px_-24px_rgba(15,23,42,0.18)] sm:px-6 lg:px-8 dark:border-teal-700 dark:bg-teal-950/70 dark:text-teal-100 dark:shadow-[0_16px_45px_-24px_rgba(16,185,129,0.25)]">
        <div className="mx-auto flex h-full w-full max-w-6xl flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-semibold uppercase tracking-[0.08em] sm:text-6xl md:text-7xl">
            {t("heroTitle")}
          </h1>
          <p className="theme-muted-text mt-4 text-lg font-medium tracking-wide sm:text-xl">
            {t("heroSubtitle")}
          </p>
          <div className="mt-6 flex w-full flex-row items-center justify-center gap-3">
            <div>
              <Link
                href="/curriculum"
                className="inline-flex items-center rounded-full border border-lime-300 bg-white px-4 py-2 text-xs font-semibold text-black transition hover:bg-lime-50 dark:border-teal-500/80 dark:bg-teal-950 dark:text-teal-100 dark:hover:bg-teal-900"
              >
                {t("curriculumButton")}
              </Link>
            </div>
            <div>
              <Link
                href="/coming-soon"
                className="inline-flex items-center rounded-full border border-lime-300 bg-white px-4 py-2 text-xs font-semibold text-black transition hover:bg-lime-50 dark:border-teal-500/80 dark:bg-teal-950 dark:text-teal-100 dark:hover:bg-teal-900"
              >
                {t("tetrisButton")}
              </Link>
            </div>
            <div>
              <Link
                href="/coming-soon"
                className="inline-flex items-center rounded-full border border-lime-300 bg-white px-4 py-2 text-xs font-semibold text-black transition hover:bg-lime-50 dark:border-teal-500/80 dark:bg-teal-950 dark:text-teal-100 dark:hover:bg-teal-900"
              >
                {t("galleryButton")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
