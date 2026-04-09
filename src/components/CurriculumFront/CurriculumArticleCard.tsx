import type { ReactNode } from "react";

const panelClassName =
  "rounded-2xl border border-lime-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-secondary-borderDark dark:bg-secondary-dark/80";

const insetClassName =
  "rounded-lg border border-lime-100 bg-secondary/40 p-3 dark:border-teal-800 dark:bg-teal-900/30";

function mergeClassNames(base: string, extra?: string) {
  return extra ? `${base} ${extra}` : base;
}

type CurriculumArticleCardProps = {
  children: ReactNode;
  className?: string;
};

export function CurriculumArticleCard({ children, className }: CurriculumArticleCardProps) {
  return <article className={mergeClassNames(panelClassName, className)}>{children}</article>;
}

type CurriculumInsetCardProps = {
  as?: "div" | "article";
  children: ReactNode;
  className?: string;
};

export function CurriculumInsetCard({ as = "div", children, className }: CurriculumInsetCardProps) {
  const merged = mergeClassNames(insetClassName, className);
  if (as === "article") {
    return <article className={merged}>{children}</article>;
  }
  return <div className={merged}>{children}</div>;
}
