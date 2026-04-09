"use client";

import Link from "next/link";
import { HOME_URL, NavigationData, navigationTranslations } from "../../config/navigation";
import { useTranslations } from "../../features/translation";
import { landingBannerTranslations } from "./data";

export function LandingBanner() {
  const { t } = useTranslations(landingBannerTranslations);
  const { t: tNav } = useTranslations(navigationTranslations);

  return (
    <main className="flex flex-1">
      <section className="flex w-full flex-1 border-t border-secondary-border bg-white px-4 text-black shadow-[0_16px_45px_-24px_rgba(15,23,42,0.18)] sm:border-y sm:px-6 lg:px-8 dark:border-secondary-borderDark dark:bg-secondary-dark/70 dark:text-teal-100 dark:shadow-[0_16px_45px_-24px_rgba(16,185,129,0.25)]">
        <div className="mx-auto flex h-full w-full max-w-6xl flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-semibold uppercase tracking-[0.08em] sm:text-6xl md:text-7xl">
            {t("heroTitle")}
          </h1>
          <p className="theme-muted-text mt-4 text-lg font-medium tracking-wide sm:text-xl">
            {t("heroSubtitle")}
          </p>
          <div className="mt-6 flex w-full flex-row items-center justify-center gap-3">
            {NavigationData.filter((item) => item.url !== HOME_URL).map((item, index) => (
              <div key={`${index}-landing-banner-link`}>
                <Link
                  href={item.url}
                  className="inline-flex items-center rounded-full border border-secondary-border bg-white px-4 py-2 text-xs font-semibold text-black transition hover:bg-secondary dark:border-teal-500/80 dark:bg-secondary-dark dark:text-teal-100 dark:hover:bg-teal-900"
                >
                  {tNav(item.id)}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
