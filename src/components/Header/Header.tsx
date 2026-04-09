"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NavigationData, HOME_URL } from "../../config/navigation";
import { useLanguage, useTranslations } from "../../features/translation";
import { useTheme } from "../../features/theme";
import { headerTranslations } from "./translations";

function navLinkActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslations(headerTranslations);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="w-full border-b border-lime-300 dark:border-teal-700">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            aria-label={t("openMenu")}
            className="inline-flex h-10 w-10 flex-col items-center justify-center gap-1 rounded-md border border-lime-300 bg-white/85 transition-colors hover:bg-lime-100 dark:border-teal-700 dark:bg-teal-950/90 dark:hover:bg-teal-900/80"
          >
            <span className="h-0.5 w-5 rounded bg-black dark:bg-teal-100" />
            <span className="h-0.5 w-5 rounded bg-black dark:bg-teal-100" />
            <span className="h-0.5 w-5 rounded bg-black dark:bg-teal-100" />
          </button>
          <Link
            href={HOME_URL}
            className="text-sm font-semibold uppercase tracking-[0.2em] text-black transition-colors hover:text-lime-800 dark:text-teal-200 dark:hover:text-teal-50"
          >
            {t("brand")}
          </Link>
        </div>
        <div className="flex flex-wrap items-center gap-3">
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
      </div>
      {isMenuOpen ? (
        <div className="fixed inset-0 z-50 flex flex-col bg-lime-50/80 px-6 py-8 backdrop-blur-sm dark:bg-teal-950/80">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              aria-label={t("closeMenu")}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-lime-300 bg-white/85 text-xl leading-none text-black transition-colors hover:bg-lime-100 dark:border-teal-700 dark:bg-teal-900/90 dark:text-teal-100 dark:hover:bg-teal-800"
            >
              ×
            </button>
          </div>
          <nav
            className="flex flex-1 flex-col items-center justify-center gap-6"
            aria-label={t("navAriaLabel")}
          >
            {
              NavigationData.map((item, index) => (
                <Link
                  key={`${index} -nav-link`}
                  href={item.url}
                  onClick={() => setIsMenuOpen(false)}
                  className={`rounded-full px-6 py-3 text-lg font-semibold transition-colors ${
                    navLinkActive(pathname, item.url)
                      ? "bg-lime-300 text-black dark:bg-teal-300 dark:text-teal-950"
                      : "text-black hover:bg-lime-100 dark:text-teal-100 dark:hover:bg-teal-900/60"
                  }`}
                  aria-current={navLinkActive(pathname, item.url) ? "page" : undefined}
                >
                  {item.text}
                </Link>
              ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
