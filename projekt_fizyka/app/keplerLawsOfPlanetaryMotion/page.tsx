import Link from "next/link";
import SpaceBackgroundThreeJs from "@/components/BackgroundThreeJs";

export default function HomePage() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-6">
      <SpaceBackgroundThreeJs />
      <h1 className="text-4xl font-bold mb-4">Prawa Keplera</h1>

      <p className="text-gray-400 mb-10 max-w-2xl">
        Prawa Keplera to trzy prawa sformułowane przez Jana Keplera (1609-1619),
        które opisują ruch planet wokół Słońca, bazując na obserwacjach Tycho
        Brahe. Stanowią one, że planety poruszają się po elipsach z Słońcem w
        jednym ognisku, w równych czasach zakreślają równe pola, a kwadraty ich
        okresów są proporcjonalne do sześcianów półosi wielkich orbit.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          href="/keplerLawsOfPlanetaryMotion/keplersFirstLaw"
          className="p-6 rounded-xl border border-gray-700 bg-gray-900 hover:bg-gray-800 transition"
        >
          <h2 className="text-xl font-semibold mb-2">Pierwsze prawo Keplera</h2>
          <p className="text-gray-400">
            Zobacz wizualizację orbity planet.
          </p>
        </Link>

        <Link
          href="/keplerLawsOfPlanetaryMotion/keplersSecondLaw"
          className="p-6 rounded-xl border border-gray-700 bg-gray-900 hover:bg-gray-800 transition"
        >
          <h2 className="text-xl font-semibold mb-2">Drugie prawo Keplera</h2>
          <p className="text-gray-400">Zobacz jak działa drugie prawo Keplera.</p>
        </Link>

        <Link
          href="/keplerLawsOfPlanetaryMotion/keplersThirdLaw"
          className="p-6 rounded-xl border border-gray-700 bg-gray-900 hover:bg-gray-800 transition"
        >
          <h2 className="text-xl font-semibold mb-2">Trzecie prawo Keplera</h2>
          <p className="text-gray-400">W przygotowaniu</p>
        </Link>
      </div>
    </main>
  );
}
