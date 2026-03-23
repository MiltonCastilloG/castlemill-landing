"use client";

import { useLanguage } from "../hooks/useLanguage";
import { getTranslationText } from "../lib/translation";

export function ComingSoon() {
  const { language } = useLanguage();

  return (
    <main className="flex-1 flex items-center justify-center px-4">
      <div className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
          {getTranslationText(language, "comingSoon")}
        </h1>
        <p className="text-base md:text-lg text-slate-400 max-w-xl mx-auto">
          {getTranslationText(language, "tagline")}
        </p>
      </div>
    </main>
  );
}

