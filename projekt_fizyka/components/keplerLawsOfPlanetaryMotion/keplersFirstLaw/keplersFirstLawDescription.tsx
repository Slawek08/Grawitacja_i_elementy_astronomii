"use client";

import Formula from "@/components/Formula";
import { div } from "three/tsl";

export function KeplersFirstLawDescription() {
  return (
    <div className="space-y-6">
      <div className="p-6 rounded-xl border border-gray-700 bg-gray-900">
        <h2 className="text-2xl font-semibold mb-4">Definicja</h2>
        <p className="text-gray-400 mb-8 max-w-2xl">
          Torem ruchu każdej planety jest elipsa. W jednym z ognisk tej elipsy
          znajduje się Słońce.
        </p>
      </div>
    </div>
  );
}
