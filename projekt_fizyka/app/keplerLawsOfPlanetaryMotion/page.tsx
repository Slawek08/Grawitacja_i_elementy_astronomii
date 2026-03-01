import Link from "next/link";
import SpaceBackgroundThreeJs from "@/components/BackgroundThreeJs";
import { KeplersLawDescription } from "@/components/keplerLawsOfPlanetaryMotion/KeplerLawDescription";

export default function HomePage() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-6">
      <SpaceBackgroundThreeJs />
      <h1 className="text-4xl font-bold mb-4">Prawa Keplera</h1>
      <div className="space-y-6">
        <KeplersLawDescription />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/keplerLawsOfPlanetaryMotion/keplersFirstLaw"
            className="p-6 rounded-xl border border-gray-700 bg-gray-900 hover:bg-gray-800 transition"
          >
            <h2 className="text-xl font-semibold mb-2">
              Pierwsze prawo Keplera
            </h2>
            <p className="text-gray-400">Zobacz wizualizację orbity planet.</p>
          </Link>

          <Link
            href="/keplerLawsOfPlanetaryMotion/keplersSecondLaw"
            className="p-6 rounded-xl border border-gray-700 bg-gray-900 hover:bg-gray-800 transition"
          >
            <h2 className="text-xl font-semibold mb-2">Drugie prawo Keplera</h2>
            <p className="text-gray-400">
              Zobacz jak działa drugie prawo Keplera.
            </p>
          </Link>

          <Link
            href="/keplerLawsOfPlanetaryMotion/keplersThirdLaw"
            className="p-6 rounded-xl border border-gray-700 bg-gray-900 hover:bg-gray-800 transition"
          >
            <h2 className="text-xl font-semibold mb-2">
              Trzecie prawo Keplera
            </h2>
            <p className="text-gray-400">W przygotowaniu</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
