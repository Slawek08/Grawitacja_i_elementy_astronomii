import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-800 bg-gray-900/60 backdrop-blur-md">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl px-10 font-bold text-blue-300">
          Grawitacja
        </Link>

        <div className="flex gap-6 text-gray-300">
          <Link
            href="/gravitationalForce"
            className="hover:text-blue-400 transition"
          >
            Siła grawitacji
          </Link>
          <Link
            href="/gravitacionalAcceleration"
            className="hover:text-blue-400 transition"
          >
            Przyspieszenie grawitacyjne
          </Link>
          <Link
            href="/keplerLawsOfPlanetaryMotion"
            className="hover:text-blue-400 transition"
          >
            Prawa Keplera
          </Link>
          <Link
            href="/forcesCausingOrbitalMotion"
            className="hover:text-blue-400 transition"
          >
            Siły wywołujące ruch orbitalny
          </Link>

          <Link
            href="/gravitationalPotentialEnergy"
            className="hover:text-blue-400 transition"
          >
            Energia potencjalna grawitacji
          </Link>
        </div>
      </div>
    </nav>
  );
}
