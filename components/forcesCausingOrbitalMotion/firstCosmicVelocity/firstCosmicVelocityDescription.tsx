"use client";

import Formula from "@/components/Formula";

export function FirstCosmicVelocityDescription() {
  return (
    <div className="space-y-6">
      <div className="p-6 rounded-xl border border-gray-700 bg-gray-900">
        <h2 className="text-2xl font-semibold mb-4">Definicja i wzór</h2>
        <p className="text-gray-400  max-w-2xl">
          Prędkość satelity okrążającego planetę po orbicie kołowej:
        </p>
        <Formula>{`\\(v = \\sqrt{\\frac{GM}{R}}  \\)`}</Formula>
        <p className="text-gray-400  max-w-2xl">
          gdzie: M - masa planety, R - odległość satelity od środka planety.{" "}
          <br />Z tego wzoru można obliczyć także pierwszą prędkość kosmiczną v
          <sub>1</sub>, czyli prędkość satelity na niskiej orbicie. Wówczas za R
          podstawiamy promień planety.
        </p>
      </div>
    </div>
  );
}
