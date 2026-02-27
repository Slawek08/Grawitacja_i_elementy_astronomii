import { GravityAccelerationDescription } from "@/components/gravitacionalAcceleration/GravitacionalAccelerationDescription";
import GravitacionalAccelerationCalculator from "@/components/gravitacionalAcceleration/GravitacionalAccelerationCalculator";
import SpaceBackgroundThreeJs from "@/components/BackgroundThreeJs";

export default function GravityPage() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-6">
      <SpaceBackgroundThreeJs/>
      <h1 className="text-4xl font-bold mb-4">Przyspieszenie grawitacyjne</h1>
      <div className="space-y-6">
        <GravityAccelerationDescription/>
        <GravitacionalAccelerationCalculator/>
      </div>
    </main>
  );
}