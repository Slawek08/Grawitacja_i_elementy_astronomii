"use client";

import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const G = 6.674e-11;

interface Props {
  m1: number;
  m2: number;
}

export default function GravityPlot({ m1, m2 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    const distances = [];
    const forces = [];

    for (let r = 1e6; r <= 2e7; r += 5e5) {
      distances.push(r); 
      forces.push((G * m1 * m2) / (r * r));
    }

    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: distances,
        datasets: [
          {
            label: "Siła grawitacji (N)",
            data: forces,
            borderColor: "#38bdf8",
            borderWidth: 2,
            tension: 0.2,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: false, title: {display: true, text: "Siła grawitacji (N)"} },
          x: { title: { display: true, text: "Odległość (m)" } },
        },
      },
    });

    return () => chart.destroy();
  }, [m1, m2]);

  return (
    <div className="p-4 bg-gray-900 border border-gray-700 rounded-xl">
      <h3 className="text-lg mb-2">Wykres siły F(r)</h3>
      <canvas ref={canvasRef} />
    </div>
  );
}
