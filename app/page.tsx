"use client";

import { Header } from "../src/components/Header";
import { CurriculumFront } from "../src/components/CurriculumFront";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
      <Header />
      <CurriculumFront />
    </div>
  );
}

