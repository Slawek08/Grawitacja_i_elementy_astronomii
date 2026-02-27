"use client";

import { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import { div } from "three/tsl";

const G = 6.67e-11;

interface Props {
  M: number;
}

export default function GravityAccelerationPlot({ M }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    const distances = [];
    const gValues = [];

    for (let r = 1e6; r <= 2e7; r += 5e5) {
      distances.push(r / 1000);
      gValues.push((G * M) / r ** 2);
    }

    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: distances,
        datasets: [
          {
            label: `g(r) - przyspieszenie grawitacyjne (m/s²)`,
            data: gValues,
            borderColor: "#f472b6",
            borderWidth: 2,
            tension: 0.25,
          },
        ]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            title: {display: true, text: "g (m/s²)"},
            beginAtZero: false,
          },
          x: {
            title: {display: true, text: "Odległość od środka (km)"},
          }
        }
      },
    })
    return () => chart.destroy()
  }, [M]);

  return (
    <div className="p-4 bg-gray-900 border border-gray-700 rounded-xl">
      <h3 className="text-lg mb-2">Wykres g(r)</h3>
      <canvas ref={canvasRef}/>
    </div>
  )
}
