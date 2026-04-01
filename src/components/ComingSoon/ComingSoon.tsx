"use client";

import { useTranslations } from "../../features/translation";
import { comingSoonTranslations } from "./translations";

export function ComingSoon() {
  const { t } = useTranslations(comingSoonTranslations);

  return (
    <main className="flex flex-1 items-center justify-center px-4">
      <div className="mx-auto max-w-xl space-y-4 text-center">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          {t("comingSoon")}
        </h1>
        <p className="theme-muted-text text-base md:text-lg">
          {t("tagline")}
        </p>
      </div>
    </main>
  );
}
