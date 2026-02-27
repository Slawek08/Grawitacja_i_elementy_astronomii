"use client";

import Formula from "@/components/Formula";

export function KeplersThirdLawDescription() {
  return (
    <div className="space-y-6">
      <div className="p-6 rounded-xl border border-gray-700 bg-gray-900">
        <h2 className="text-2xl font-semibold mb-4">Definicja i wzór</h2>
        <p className="text-gray-400 mb-8 max-2-2xl">
          Stosunek kwadratów okresów obiegu planet wokół Słońca do sześcianów
          wielkich półosi ich orbit jest stały:
        </p>
        <Formula>{`\\( \\frac{T^2_{1}}{R^3_{1}} = \\frac{T^2_{2}}{R^3_{2}} = const \\)`}</Formula>
        <p className="text-gray-400  max-2-2xl">
          Trzecie prawo Keplera pozwala wyznaczyć masę gwiazdy na podstawie
          obserwacji ruchu dowolnej planety krążącej wokół tej gwiazdy.
        </p>
      </div>
    </div>
  );
}
