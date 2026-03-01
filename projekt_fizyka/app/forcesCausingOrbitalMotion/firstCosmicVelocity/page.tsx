"use client";

import SpaceBackgroundThreeJs from "@/components/BackgroundThreeJs";
import { FirstCosmicVelocityDescription } from "@/components/forcesCausingOrbitalMotion/firstCosmicVelocity/firstCosmicVelocityDescription";
import FirstCosmicVelocityCalculator from "@/components/forcesCausingOrbitalMotion/firstCosmicVelocity/FirstCosmicVelocityCalculator";

export default function FirstCosmicVelocity() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-6">
      <SpaceBackgroundThreeJs />

      <h1 className="text-4xl font-bold mb-4">Pierwsza prędkość kosmiczna</h1>
      <div className="space-y-6">
        <FirstCosmicVelocityDescription />
        <FirstCosmicVelocityCalculator/>
      </div>
    </main>
  );
}
