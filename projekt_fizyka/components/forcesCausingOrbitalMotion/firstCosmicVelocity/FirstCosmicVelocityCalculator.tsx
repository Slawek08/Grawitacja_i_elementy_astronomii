"use client";

import { useState, useEffect, useRef } from "react";

const G = 6.674e-11;

export default function FirstCosmicVelocityCalculator() {
  const [M, setM] = useState(5.972e24);
  const [R, setR] = useState(6.371e6);
  const [velocity, setVelocity] = useState<number>(0);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  function compute() {
    const v = Math.sqrt((G * M) / R);
    setVelocity(v);
  }

  useEffect(() => {
    if (velocity === null) return;

    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    canvas.width = 400;
    canvas.height = 400;

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    const orbitRadius = 120; // wizualny promień orbity
    let angle = 0;

    function animate() {
      ctx.fillStyle = "#000014";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // orbita
      ctx.strokeStyle = "#4b9fff";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(cx, cy, orbitRadius, 0, Math.PI * 2);
      ctx.stroke();

      // planeta
      ctx.fillStyle = "#ffaa33";
      ctx.beginPath();
      ctx.arc(cx, cy, 18, 0, Math.PI * 2);
      ctx.fill();

      // satelita
      const x = cx + orbitRadius * Math.cos(angle);
      const y = cy + orbitRadius * Math.sin(angle);

      ctx.fillStyle = "#4ade80";
      ctx.beginPath();
      ctx.arc(x, y, 8, 0, Math.PI * 2);
      ctx.fill();

      // prędkość orbitalna → wpływa na szybkość obrotu
      const scale = 0.00002; // skala wizualna
      angle += velocity * scale;

      requestAnimationFrame(animate);
    }

    animate();
  }, [velocity]);

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-xl border border-gray-700 bg-gray-900">
        <h2 className="text-2xl font-semibold mb-4">
          Kalkulator pierwszaej prędkości kosmicznej
        </h2>

        <label className="block mb-2">
          Masa planety (kg)
          <input
            type="number"
            value={M}
            onChange={(e) => setM(Number(e.target.value))}
            className="w-full p-2 rounded bg-gray-800 border border-gray-700 mt-1"
          />
        </label>

        <label className="block mb-4">
          Promień orbity (m)
          <input
            type="number"
            value={R}
            onChange={(e) => setR(Number(e.target.value))}
            className="w-full p-2 rounded bg-gray-800 border border-gray-700 mt-1"
          />
        </label>

        <button
          onClick={compute}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded transition"
        >
          Oblicz
        </button>

        {velocity !== null && (
          <p className="mt-4 text-lg">
            Prędkość orbitalna:{" "}
            <span className="font-semibold text-blue-300">
              {velocity.toExponential(3)} m/s
            </span>
          </p>
        )}
      </div>

      {velocity !== null && (
        <div className="p-6 rounded-xl border border-gray-700 bg-gray-900">
          <h3 className="text-xl font-semibold mb-4">Animacja satelity na orbicie</h3>
          <canvas ref={canvasRef} className="border border-gray-700 bg-black" />
        </div>
      )}
    </div>
  );
}
