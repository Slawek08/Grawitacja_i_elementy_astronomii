"use client";

import Formula from "@/components/Formula";

export function SecondCosmicVelocityDescription() {
  return (
    <div className="space-y-6">
      <div className="p-6 rounded-xl border border-gray-700 bg-gray-900">
        <h2 className="text-2xl font-semibold mb-4">Definicja i wzór</h2>
        <p className="text-gray-400  max-w-2xl">
          Minimalną prędkość potrzebną do oddalenia się bez napędu na bardzo dużą odległość od ciała niebieskiego nazywamy drugą prędkością kosmiczną (prędkość ucieczki):
        </p>
        <Formula>{`\\(v_{II} = \\sqrt{\\frac{2GM}{R}}  \\)`}</Formula>
        <p className="text-gray-400  max-w-2xl">
          gdzie: M - masa ciała niebieskiego, R - jego promień.
        </p>
      </div>
    </div>
  );
}
