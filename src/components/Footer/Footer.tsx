"use client";

import { useTranslations } from "../../features/translation";
import { PreferencesControls } from "../Header/PreferencesControls";
import { footerTranslations } from "./translations";

export function Footer() {
  const { t } = useTranslations(footerTranslations);

  return (
    <footer className="w-full border-t border-secondary-border bg-secondary px-4 py-3 dark:border-secondary-borderDark dark:bg-secondary-dark">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2">
        <div className="flex items-center justify-between gap-3 sm:hidden">
          <PreferencesControls />
        </div>
        <p className="text-center text-[11px] text-secondary-textMuted/75 dark:text-secondary-textMutedDark/75">
          {`${t("copyright")}`}
        </p>
      </div>
    </footer>
  );
}
