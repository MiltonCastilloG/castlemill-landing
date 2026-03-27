"use client";

import { useLanguage, useTranslations } from "../../features/translation";
import { headerTranslations } from "./translations";

export function Header() {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslations(headerTranslations);

  return (
    <header className="mx-auto flex w-full max-w-4xl items-center justify-between px-4 py-6">
      <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
        {t("brand")}
      </div>
      <div className="flex items-center gap-2">
        <span className="mr-2 text-xs text-slate-500">{t("languageLabel")}</span>
        <div className="inline-flex rounded-full border border-slate-700 bg-slate-900/70 p-1">
          <button
            type="button"
            onClick={() => setLanguage("es")}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
              language === "es"
                ? "bg-slate-100 text-slate-900"
                : "text-slate-300 hover:text-white"
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
                ? "bg-slate-100 text-slate-900"
                : "text-slate-300 hover:text-white"
            }`}
            aria-pressed={language === "en"}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
}
