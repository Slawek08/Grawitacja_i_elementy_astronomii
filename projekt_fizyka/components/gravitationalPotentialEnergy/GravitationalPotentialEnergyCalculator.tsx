"use client";

import { useState } from "react";
const G = 6.674e-11;

export default function GravitationalPotentialEnergyCalculator() {
  const [M, setM] = useState(5.972e24);
  const [m, setm] = useState(5.972e24);
  const [r, setr] = useState(6.371e6);
  const [potencialEnergy, setPotencialEnergy] = useState<number | null>(null);

  function compute() {
    const E = - (G * M * m) / r;
    setPotencialEnergy(E);
  }

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-xl border border-gray-700 bg-gray-900">
        <h2 className="text-2xl font-semibold mb-4">
          Kalkulator przyspieszenia grawitacyjnego
        </h2>

        <label className="block mb-2">
          Masa ciała (kg)
          <input
            type="number"
            value={m}
            onChange={(e) => setm(Number(e.target.value))}
            className="w-full p-2 rounded bg-gray-800 border border-gray-700 mt-1"
          />
        </label>

        <label className="block mb-2">
          Masa ciała, które je przyciąga (kg)
          <input
            type="number"
            value={M}
            onChange={(e) => setM(Number(e.target.value))}
            className="w-full p-2 rounded bg-gray-800 border border-gray-700 mt-1"
          />
        </label>

        <label className="block mb-2">
          Odleglość (m)
          <input
            type="number"
            value={r}
            onChange={(e) => setr(Number(e.target.value))}
            className="w-full p-2 rounded bg-gray-800 border border-gray-700 mt-1"
          />
        </label>

        <button
          onClick={compute}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded transition"
        >
          Oblicz
        </button>

        {potencialEnergy !== null && (
          <p className="mt-4 text-lg">
            Energia potencjalna grawitacji: {""}
            <span className="font-semibold text-blue-300">
              {potencialEnergy.toExponential(3)} J
            </span>
          </p>
        )}
      </div>

      {potencialEnergy !== null && (
        <>
        </>
      )}
    </div>
  );
}