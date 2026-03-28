"use client";

interface Props {
  force: number;
}

export default function ForceArrow({ force }: Props) {
  // skalowanie długości strzałki
  const length = Math.min(250, Math.max(20, force * 1e9));

  return (
    <div className="relative w-full h-40 bg-gray-900 border border-gray-700 rounded-xl flex items-center justify-between px-6">
      {/* Masa 1 */}
      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center font-bold">
        m₁
      </div>

      {/* Strzałka */}
      <div className="flex items-center">
        {/* Linia */}
        <div
          className="h-2 bg-blue-400 transition-all"
          style={{ width: `${length}px` }}
        />

        {/* Grot */}
        <div
          className="w-0 h-0 border-t-[10px] border-b-[10px] border-l-[15px] border-t-transparent border-b-transparent border-l-blue-400"
        />
      </div>

      {/* Masa 2 */}
      <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center font-bold">
        m₂
      </div>
    </div>
  );
}
