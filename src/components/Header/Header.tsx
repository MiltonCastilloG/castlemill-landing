"use client";

import { useLanguage, useTranslations } from "../../features/translation";
import { useTheme } from "../../features/theme";
import { headerTranslations } from "./translations";

export function Header() {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslations(headerTranslations);
  const { theme, setTheme } = useTheme();

  return (
    <header className="mx-auto flex w-full max-w-4xl items-center justify-between px-4 py-6">
      <div className="text-sm font-semibold uppercase tracking-[0.2em] text-black dark:text-teal-200">
        {t("brand")}
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <span className="mr-2 text-xs text-black dark:text-teal-300">{t("languageLabel")}</span>
          <div className="inline-flex rounded-full border border-lime-300 bg-white/85 p-1 dark:border-teal-700 dark:bg-teal-950/90">
            <button
              type="button"
              onClick={() => setLanguage("es")}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                language === "es"
                  ? "bg-lime-300 text-black dark:bg-teal-300 dark:text-teal-950"
                  : "text-black hover:text-black dark:text-teal-300 dark:hover:text-teal-100"
              }`}
              aria-pressed={language === "es"}
            >
              ES
            </button>
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                language === "en"
                  ? "bg-lime-300 text-black dark:bg-teal-300 dark:text-teal-950"
                  : "text-black hover:text-black dark:text-teal-300 dark:hover:text-teal-100"
              }`}
              aria-pressed={language === "en"}
            >
              EN
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="mr-2 text-xs text-black dark:text-teal-300">{t("themeLabel")}</span>
          <div className="inline-flex rounded-full border border-lime-300 bg-white/85 p-1 dark:border-teal-700 dark:bg-teal-950/90">
            <button
              type="button"
              onClick={() => setTheme("light")}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                theme === "light"
                  ? "bg-lime-300 text-black dark:bg-teal-300 dark:text-teal-950"
                  : "text-black hover:text-black dark:text-teal-300 dark:hover:text-teal-100"
              }`}
              aria-pressed={theme === "light"}
            >
              Light
            </button>
            <button
              type="button"
              onClick={() => setTheme("dark")}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                theme === "dark"
                  ? "bg-lime-300 text-black dark:bg-teal-300 dark:text-teal-950"
                  : "text-black hover:text-black dark:text-teal-300 dark:hover:text-teal-100"
              }`}
              aria-pressed={theme === "dark"}
            >
              Dark
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
