"use Client";

import Formula from "@/components/Formula";

export function ForcesCausingOrbitalMotionDescription() {
  return (
    <div className="space-y-6">
      <div className="p-6 rounded-xl border border-gray-700 bg-gray-900">
        <p className="text-gray-400 max-w-2xl">
          W przypadku orbity kołowej siłą grawitacji pełni funkcję siły
          dośrodkowej. <br />
          <br />
          W przypadku orbity eliptycznej siłę grawitacji możemy rozłożyć na
          składowe:
          <br />⭐ o kierunku stycznym do toru, powodującą zmianę wartości
          prędkości,
          <br />⭐ o kierunku prostopadłym do stycznej, powodującą
          zmianękierunku prękości, czyli zakrzywienie toru.
        </p>
      </div>
    </div>
  );
}
