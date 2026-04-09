"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HOME_URL, NavigationData, navigationTranslations } from "../../config/navigation";
import { useTranslations } from "../../features/translation";
import { PreferencesControls } from "./PreferencesControls";
import { headerTranslations } from "./translations";

function navLinkActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslations(headerTranslations);
  const { t: tNav } = useTranslations(navigationTranslations);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="w-full border-b border-secondary-border bg-secondary dark:border-secondary-borderDark dark:bg-secondary-dark">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <div className="flex items-center gap-3 sm:gap-6">
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            aria-label={t("openMenu")}
            className="inline-flex h-10 w-10 flex-col items-center justify-center gap-1 rounded-md border border-secondary-border bg-white/85 transition-colors hover:bg-lime-100 dark:border-secondary-borderDark dark:bg-secondary-dark/90 dark:hover:bg-teal-900/80"
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
        <div className="hidden flex-wrap items-center gap-3 sm:flex">
          <PreferencesControls />
        </div>
      </div>
      {isMenuOpen ? (
        <div className="fixed inset-0 z-50 flex flex-col bg-secondary/80 px-6 py-8 backdrop-blur-sm dark:bg-secondary-dark/80">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              aria-label={t("closeMenu")}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-secondary-border bg-white/85 text-xl leading-none text-black transition-colors hover:bg-lime-100 dark:border-secondary-borderDark dark:bg-teal-900/90 dark:text-teal-100 dark:hover:bg-teal-800"
            >
              ×
            </button>
          </div>
          <nav
            className="flex flex-1 flex-col items-center justify-center gap-6"
            aria-label={t("navAriaLabel")}
          >
            {NavigationData.map((item, index) => (
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
                {tNav(item.id)}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
