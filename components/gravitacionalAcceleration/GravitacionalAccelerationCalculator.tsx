"use client";

import { useState } from "react";
import GravityAccelerationPlot from "./GravitacionalAccelerationPlot";

const G = 6.674e-11;

export default function GravitacionalAccelerationCalculator() {
  const [M, setM] = useState(5.972e24);
  const [R, setR] = useState(6.371e6);
  const [acceleration, setAcceleration] = useState<number | null>(null);

  function compute() {
    const g = (G * M) / R ** 2;
    setAcceleration(g);
  }

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-xl border border-gray-700 bg-gray-900">
        <h2 className="text-2xl font-semibold mb-4">
          Kalkulator przyspieszenia grawitacyjnego
        </h2>

        <label className="block mb-2">
          Masa (kg)
          <input
            type="number"
            value={M}
            onChange={(e) => setM(Number(e.target.value))}
            className="w-full p-2 rounded bg-gray-800 border border-gray-700 mt-1"
          />
        </label>

        <label className="block mb-2">
          Promień (m)
          <input
            type="number"
            value={R}
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

        {acceleration !== null && (
          <p className="mt-4 text-lg">
            Przyspieszenie grawitacyjne: {""}
            <span className="font-semibold text-blue-300">
              {acceleration.toExponential(3)} m/s² 
            </span>
          </p>
        )}
      </div>

      {acceleration !== null && (
        <>
          <GravityAccelerationPlot M={M} />
        </>
      )}
    </div>
  );
}
