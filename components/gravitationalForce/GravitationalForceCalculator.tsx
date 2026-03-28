"use client";

import { useState } from "react";
import GravityPlot from "./GravitationalForcePlot";
import GravityVectorDiagram from "./GravitationalForceVectorDiagram";

const G = 6.674e-11;

export default function GravityCalculator() {
  const [m1, setM1] = useState(5.97e24);
  const [m2, setM2] = useState(80);
  const [r, setR] = useState(6.37e6);
  const [force, setForce] = useState<number | null>(null);

  function compute() {
    const F = (G * m1 * m2) / (r * r);
    setForce(F);
  }

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-xl border border-gray-700 bg-gray-900">
        <h2 className="text-2xl font-semibold mb-4">
          Kalkulator siły grawitacji
        </h2>

        <label className="block mb-2">
          Masa 1 (kg)
          <input
            type="number"
            value={m1}
            onChange={(e) => setM1(Number(e.target.value))}
            className="w-full p-2 rounded bg-gray-800 border border-gray-700 mt-1"
          />
        </label>

        <label className="block mb-2">
          Masa 2 (kg)
          <input
            type="number"
            value={m2}
            onChange={(e) => setM2(Number(e.target.value))}
            className="w-full p-2 rounded bg-gray-800 border border-gray-700 mt-1"
          />
        </label>

        <label className="block mb-4">
          Odległość (m)
          <input
            type="number"
            value={r}
            onChange={(e) => setR(Number(e.target.value))}
            className="w-full p-2 rounded bg-gray-800 border border-gray-700 mt-1"
          />
        </label>

        <button
          onClick={compute}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded transition"
        >
          Oblicz
        </button>

        {force !== null && (
          <p className="mt-4 text-lg">
            Siła grawitacji:{" "}
            <span className="font-semibold text-blue-300">
              {force.toExponential(3)} N
            </span>
          </p>
        )}
      </div>

      {force !== null && (
        <>
          <GravityVectorDiagram force={force} />
          <GravityPlot m1={m1} m2={m2} />
        </>
      )}
    </div>
  );
}
