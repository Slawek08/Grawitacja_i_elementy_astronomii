"use client";

import SpaceBackgroundThreeJs from "@/components/BackgroundThreeJs";
import KeplerCanvas from "@/components/keplerLawsOfPlanetaryMotion/keplersSecondLaw/keplersSecondLawVizualization";
import { KeplersSecondLawDescription } from "@/components/keplerLawsOfPlanetaryMotion/keplersSecondLaw/keplersSecondLawDescription";

export default function KeplersSecondLaw() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-6">
      <SpaceBackgroundThreeJs />

      <h1 className="text-4xl font-bold mb-4">Drugie prawo Keplera</h1>
      <div className="space-y-6">
        <KeplersSecondLawDescription />
        <KeplerCanvas />
      </div>
    </main>
  );
}
