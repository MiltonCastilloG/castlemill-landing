"use client";

import { Header } from "../src/components/Header";
import { CurriculumFront } from "../src/components/CurriculumFront";

export default function HomePage() {
  return (
    <div className="theme-page-gradient min-h-screen flex flex-col">
      <Header />
      <CurriculumFront />
    </div>
  );
}

