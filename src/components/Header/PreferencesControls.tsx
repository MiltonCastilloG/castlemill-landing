"use client";

import { useLanguage, useTranslations } from "../../features/translation";
import { useTheme } from "../../features/theme";
import { headerTranslations } from "./translations";

export function PreferencesControls() {
  const { language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();
  const { t } = useTranslations(headerTranslations);

  return (
    <>
      <div className="flex items-center gap-2">
        <span className="text-xs text-black dark:text-teal-300">{t("languageLabel")}</span>
        <div className="inline-flex rounded-full border border-secondary bg-white/85 p-1 dark:border-secondary-dark dark:bg-secondary-dark/90">
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
        <span className="text-xs text-black dark:text-teal-300">{t("themeLabel")}</span>
        <div className="inline-flex rounded-full border border-secondary bg-white/85 p-1 dark:border-secondary-dark dark:bg-secondary-dark/90">
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
    </>
  );
}
