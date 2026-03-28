"use Client";

import Formula from "@/components/Formula";

export function GravityDescription() {
  return (
    <div className="space-y-6">
      <div className="p-6 rounded-xl border border-gray-700 bg-gray-900">
      <h2 className="text-2xl font-semibold mb-4">Definicja i wzór</h2>

        <p className="text-gray-400 mb-8 max-w-2xl">
          Siła dośrodkowa, która powoduje ruch planet wokół Słońca i księżyców wokół planet.
        </p>
        <Formula>{`\\( F = G \\cdot \\frac{m_1 m_2}{r^2} \\)`}</Formula>
      </div>
    </div>
  );
}
