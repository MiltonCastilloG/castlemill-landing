"use client";

import { Header } from "../src/components/Header";
import { CurriculumFront } from "../src/components/CurriculumFront";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
      <Header />
      <CurriculumFront />
    </div>
  );
}

