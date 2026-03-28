import SpaceBackgroundThreeJs from "@/components/BackgroundThreeJs";
import { KeplersFirstLawDescription } from "@/components/keplerLawsOfPlanetaryMotion/keplersFirstLaw/keplersFirstLawDescription";
import KeplerFirstLawVisualization from "@/components/keplerLawsOfPlanetaryMotion/keplersFirstLaw/keplersFirstLawVisualization";

export default function KeplersFirstLaw() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-6">
      <SpaceBackgroundThreeJs />
      <h1 className="text-4xl font-bold mb-4">Pierwsze prawo Keplera</h1>
      <div className="space-y-6">
        <KeplersFirstLawDescription />
        <KeplerFirstLawVisualization />
      </div>
    </main>
  );
}
