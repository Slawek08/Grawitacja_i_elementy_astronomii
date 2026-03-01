"use client";

import SpaceBackgroundThreeJs from "@/components/BackgroundThreeJs";
import { SecondCosmicVelocityDescription } from "@/components/forcesCausingOrbitalMotion/secondCosmicVelocity/SecondCosmicVelocityDescription";
import SecondCosmicVelocityCalculator from "@/components/forcesCausingOrbitalMotion/secondCosmicVelocity/SecondCosmicVelocityCalculator";

export default function FirstCosmicVelocity() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-6">
      <SpaceBackgroundThreeJs />

      <h1 className="text-4xl font-bold mb-4">Druga prędkość kosmiczna</h1>
      <div className="space-y-6">
        <SecondCosmicVelocityDescription/>
        <SecondCosmicVelocityCalculator/>
      </div>
    </main>
  );
}
