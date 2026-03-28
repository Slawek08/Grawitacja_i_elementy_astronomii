"use client";

import { div } from "three/tsl";

export function KeplersSecondLawDescription() {
  return (
    <div className="space-y-6">
      <div className="p-6 rounded-xl border border-gray-700 bg-gray-900">
        <h2 className="text-2xl font-semibold mb-4">Definicja</h2>
        <p className="text-gray-400 mb-8 max-2-2xl">
          W trakcie ruchu każdej planety promień wodzący - odcinek łączący
          Słońce i planetę - zakreśla w równych odstępach czasu równe pola.
        </p>
      </div>
    </div>
  );
}
