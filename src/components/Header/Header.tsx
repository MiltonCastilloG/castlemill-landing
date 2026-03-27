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
      <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600 dark:text-slate-400">
        {t("brand")}
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <span className="mr-2 text-xs text-slate-500 dark:text-slate-500">
            {t("languageLabel")}
          </span>
          <div className="inline-flex rounded-full border border-slate-300 bg-white/70 p-1 dark:border-slate-700 dark:bg-slate-900/70">
          <button
            type="button"
            onClick={() => setLanguage("es")}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
              language === "es"
                ? "bg-slate-900 text-slate-50 dark:bg-slate-100 dark:text-slate-900"
                : "text-slate-700 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
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
                ? "bg-slate-900 text-slate-50 dark:bg-slate-100 dark:text-slate-900"
                : "text-slate-700 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
            }`}
            aria-pressed={language === "en"}
          >
            EN
          </button>
        </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="mr-2 text-xs text-slate-500 dark:text-slate-500">
            {t("themeLabel")}
          </span>
          <div className="inline-flex rounded-full border border-slate-300 bg-white/70 p-1 dark:border-slate-700 dark:bg-slate-900/70">
            <button
              type="button"
              onClick={() => setTheme("light")}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                theme === "light"
                  ? "bg-slate-900 text-slate-50 dark:bg-slate-100 dark:text-slate-900"
                  : "text-slate-700 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
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
                  ? "bg-slate-900 text-slate-50 dark:bg-slate-100 dark:text-slate-900"
                  : "text-slate-700 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
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
