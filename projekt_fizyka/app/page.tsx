import Link from "next/link";
import SpaceBackgroundThreeJs from "@/components/BackgroundThreeJs";

export default function HomePage() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-6">
      <SpaceBackgroundThreeJs />
      <h1 className="text-4xl font-bold mb-4">
        Interaktywne centrum obliczeń grawitacyjnych
      </h1>

      <p className="text-gray-400 mb-10 max-w-2xl">
        Obliczaj i wizualizuj zjawiska grawitacyjne: siłę przyciągania,
        przyspieszenie grawitacyjne, prawa Keplera, prędkości kosmiczne i wiele
        więcej.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          href="/gravitationalForce"
          className="p-6 rounded-xl border border-gray-700 bg-gray-900 hover:bg-gray-800 transition"
        >
          <h2 className="text-xl font-semibold mb-2">Siła grawitacji</h2>
          <p className="text-gray-400">
            Oblicz siłę przyciągania między dwoma masami i zobacz, jak zmienia
            się wraz z odległością.
          </p>
        </Link>

        <Link
          href="/gravitacionalAcceleration"
          className="p-6 rounded-xl border border-gray-700 bg-gray-900 hover:bg-gray-800 transition"
        >
          <h2 className="text-xl font-semibold mb-2">
            Przyspieszenie grawitacyjne
          </h2>
          <p className="text-gray-400">Oblicz przyspieszenie grawitacyjne.</p>
        </Link>

        <Link
          href="/keplerLawsOfPlanetaryMotion"
          className="p-6 rounded-xl border border-gray-700 bg-gray-900 hover:bg-gray-800 transition"
        >
          <h2 className="text-xl font-semibold mb-2">Prawa Keplera</h2>
          <p className="text-gray-400">
            Zobacz eksperymenty z użyciem praw Keplera
          </p>
        </Link>

        <Link
          href="/forcesCausingOrbitalMotion"
          className="p-6 rounded-xl border border-gray-700 bg-gray-900 hover:bg-gray-800 transition"
        >
          <h2 className="text-xl font-semibold mb-2">
            Siły wywołujące ruch orbitalny
          </h2>
          <p className="text-gray-400">Oblicz szybkośći kosmiczne.</p>
        </Link>

        <Link
          href="/gravitationalPotentialEnergy"
          className="p-6 rounded-xl border border-gray-700 bg-gray-900 hover:bg-gray-800 transition"
        >
          <h2 className="text-xl font-semibold mb-2">
            Energia potencjalna grawitacji
          </h2>
          <p className="text-gray-400">Oblicz energie potencjalnej grawitacji.</p>
        </Link>
      </div>
    </main>
  );
}
