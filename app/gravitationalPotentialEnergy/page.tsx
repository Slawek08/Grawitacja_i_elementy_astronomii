import SpaceBackgroundThreeJs from "@/components/BackgroundThreeJs";
import { GravitationalPotentialEnergyDescription } from "@/components/gravitationalPotentialEnergy/GravitationalPotentialEnergyDescription";
import GravitationalPotentialEnergyCalculator from "@/components/gravitationalPotentialEnergy/GravitationalPotentialEnergyCalculator";

export default function GravityPage() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-6">
      <SpaceBackgroundThreeJs/>
      <h1 className="text-4xl font-bold mb-4">Energia potencjalna grawitacji</h1>
      <div className="space-y-6">
   <GravitationalPotentialEnergyDescription/>
   <GravitationalPotentialEnergyCalculator/>
      </div>
    </main>
  );
}
