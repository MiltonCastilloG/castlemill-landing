"use client";

import { Header } from "../src/components/Header";
import { LandingBanner } from "../src/components/LandingBanner";

export default function HomePage() {
  return (
    <div className="theme-page-gradient min-h-dvh flex flex-col">
      <Header />
      <LandingBanner />
    </div>
  );
}

