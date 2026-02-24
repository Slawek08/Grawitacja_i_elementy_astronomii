"use client";

interface Props {
  force: number;
}

export default function GravityVectorDiagram({ force }: Props) {
  const arrowLength = Math.min(150, Math.max(20, force * 1e9));

  return (
    <div className="relative w-full h-40 bg-gray-900 border border-gray-700 rounded-xl flex items-center justify-center">

      {/* Napis nad wektorami */}
      <div className="absolute top-4 flex gap-20 text-gray-300 text-sm">
        <span>F<small>12</small> (siła działająca na m₁)</span>
        <span>F<small>21</small> (siła działająca na m₂)</span>
      </div>

      {/* Masa 1 + strzałka → */}
      <div className="flex items-center gap-3 absolute left-[15%]">
        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center font-bold">
          m₁
        </div>

        {/* Strzałka w stronę m2 */}
        <div className="flex items-center">
          <div
            className="h-2 bg-red-400 transition-all"
            style={{ width: `${arrowLength}px` }}
          />
          <div className="w-0 h-0 border-t-[8px] border-b-[8px] border-l-[12px] border-t-transparent border-b-transparent border-l-red-400" />
        </div>
      </div>

      {/* Masa 2 + strzałka ← */}
      <div className="flex items-center gap-3 absolute right-[15%]">
        {/* Strzałka w stronę m1 */}
        <div className="flex items-center">
          <div className="w-0 h-0 border-t-[8px] border-b-[8px] border-r-[12px] border-t-transparent border-b-transparent border-r-red-400" />
          <div
            className="h-2 bg-red-400 transition-all"
            style={{ width: `${arrowLength}px` }}
          />
        </div>

        <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center font-bold">
          m₂
        </div>
      </div>
    </div>
  );
}
