"use client";

import Formula from "../Formula";

export function GravitationalPotentialEnergyDescription() {
  return (
    <div className="space-y-6">
      <div className="p-6 rounded-xl border border-gray-700 bg-gray-900">
        <h2 className="text-2xl font-semibold mb-4">Definicja i wzór</h2>
        <Formula>{`\\(E_{p} = - \\frac{GMm}{r} \\)`}</Formula>
        <p className="text-gray-400 max-w-2xl">
          gdzie: <br /> ⭐ m - masa ciałą, którego chcemy obliczyć, <br /> ⭐ M
          - masa ciała, które je przyciąga, <br /> ⭐ r - odległość między tymi
          ciałami.
        </p>
      </div>
    </div>
  );
}
