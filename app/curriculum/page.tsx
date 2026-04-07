"use client";

import { Header } from "../../src/components/Header";
import { CurriculumFront } from "../../src/components/CurriculumFront";

export default function CurriculumPage() {
  return (
    <div className="theme-page-gradient min-h-dvh flex flex-col">
      <Header />
      <CurriculumFront />
    </div>
  );
}
