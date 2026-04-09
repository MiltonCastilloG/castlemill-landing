"use client";

import { useTranslations } from "../../features/translation";
import { PreferencesControls } from "../Header/PreferencesControls";
import { footerTranslations } from "./translations";

export function Footer() {
  const { t } = useTranslations(footerTranslations);

  return (
    <footer className="w-full border-t border-lime-300 bg-lime-50 px-4 py-3 dark:border-teal-700 dark:bg-teal-950">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2">
        <div className="flex items-center justify-between gap-3 sm:hidden">
          <PreferencesControls />
        </div>
        <p className="text-center text-[11px] text-black/75 dark:text-teal-200/75">
          {`${t("copyright")}`}
        </p>
      </div>
    </footer>
  );
}
