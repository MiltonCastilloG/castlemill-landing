"use client";

import { useLanguage } from "../hooks/useLanguage";

export function Header() {
  const { language, setLanguage } = useLanguage();

  return (
    <header className="w-full max-w-4xl mx-auto flex items-center justify-between py-6 px-4">
      <div className="text-sm font-semibold tracking-[0.2em] uppercase text-slate-400">
        CastleMill
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-slate-500 mr-2">Language</span>
        <div className="inline-flex rounded-full bg-slate-900/70 border border-slate-700 p-1">
          <button
            type="button"
            onClick={() => setLanguage("es")}
            className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
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
            className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
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

