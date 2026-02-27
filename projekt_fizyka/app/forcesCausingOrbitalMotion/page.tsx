import Link from "next/link";
import SpaceBackgroundThreeJs from "@/components/BackgroundThreeJs";
import { ForcesCausingOrbitalMotionDescription } from "@/components/forcesCausingOrbitalMotion/forcesCausingOrbitalMotionDescription";

export default function HomePage() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-6">
      <SpaceBackgroundThreeJs />
      <h1 className="text-4xl font-bold mb-4">
        Siły wywołujące ruch orbitalny
      </h1>
      <div className="space-y-6">
        <ForcesCausingOrbitalMotionDescription />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/forcesCausingOrbitalMotion/firstCosmicVelocity"
            className="p-6 rounded-xl border border-gray-700 bg-gray-900 hover:bg-gray-800 transition"
          >
            <h2 className="text-xl font-semibold mb-2">
              Pierwsza prędkość kosmiczna
            </h2>
            <p className="text-gray-400">in progress</p>
          </Link>

          <Link
            href="/forcesCausingOrbitalMotion/secondCosmicVelocity"
            className="p-6 rounded-xl border border-gray-700 bg-gray-900 hover:bg-gray-800 transition"
          >
            <h2 className="text-xl font-semibold mb-2">Druga prędkość kosmiczna</h2>
            <p className="text-gray-400">
             in progress
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
