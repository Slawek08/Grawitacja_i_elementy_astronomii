"use client";

import SpaceBackgroundThreeJs from "@/components/BackgroundThreeJs";
import { KeplersThirdLawDescription } from "@/components/keplerLawsOfPlanetaryMotion/keplersThirdLaw/KeplersThirdLawDescription";
export default function KeplersThirdLaw() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-6">
      <SpaceBackgroundThreeJs />
      <h1 className="text-4xl font-bold mb-4">Trzecie prawo Keplera</h1>
      <div className="space-y-6">
        <KeplersThirdLawDescription />
      </div>
    </main>
  );
}
