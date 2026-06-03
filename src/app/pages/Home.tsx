import React from "react";
import { Hero } from "../components/Hero";
import { WeaveLibrary } from "../components/WeaveLibrary";
import { QualityCheckpoint } from "../components/QualityCheckpoint";
import { Logistics } from "../components/Logistics";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <main className="relative min-h-screen bg-brand-alabaster text-brand-charcoal font-sans selection:bg-brand-periwinkle selection:text-brand-charcoal">
      <Hero />
      <WeaveLibrary />
      <QualityCheckpoint />
      <Logistics />
      <Footer />
    </main>
  );
}
