import GravityCalculator from "@/components/gravitationalForce/GravitationalForceCalculator";
import { GravityDescription } from "@/components/gravitationalForce/GravitationalForceDescription";
import { GravityAccelerationDescription } from "@/components/gravitacionalAcceleration/GravitacionalAccelerationDescription";

export default function GravityPage() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-4">Siła grawitacji</h1>
      <div className="space-y-6">
        <GravityAccelerationDescription/>
      </div>
    </main>
  );
}