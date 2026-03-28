"use client"

import Formula from "../Formula"

export function GravityAccelerationDescription(){
    return(
        <div className="space-y-6">
            <div className="p-6 rounded-xl border border-gray-700 bg-gray-900">
                <h2 className="text-2xl font-semibold mb-4">Definicja i wzór</h2>
                <p className="text-gray-400 mb-8 max-w-2xl">
                    Przyspieszenie z którym porusza się ciało spadające na planecie o masie M i promieniu R.
                </p>
                <Formula>{`\\(g = G \\cdot \\frac{M}{R^2} \\)`}</Formula>
            </div>
        </div>
    )
}

