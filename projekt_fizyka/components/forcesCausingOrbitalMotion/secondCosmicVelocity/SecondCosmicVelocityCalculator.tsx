"use client";

import { useState, useEffect, useRef } from "react";

const G = 6.674e-11;

export default function SecondCosmicVelocityCalculator() {
  const [M, setM] = useState(5.972e24);
  const [R, setR] = useState(6.371e6);
  const [velocity, setVelocity] = useState<number | null>(null);
  const [startVelocity, setStartVelocity] = useState(0);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  function compute() {
    const v = Math.sqrt((2 * G * M) / R);
    setVelocity(v);
    setStartVelocity(v); // ustawiamy suwak na v2
  }

  useEffect(() => {
    if (velocity === null) return; // animacja dopiero po obliczeniu

    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    canvas.width = 500;
    canvas.height = 500;

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    // Skala odległości (żeby planeta była widoczna)
    const scale = 1 / 50000;

    // Pozycja startowa satelity
    let x = cx + R * scale;
    let y = cy;

    // Prędkość startowa – pozioma
    let vx = 0;
    let vy = -startVelocity * scale;

    function animate() {
      ctx.fillStyle = "#000014";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Planeta
      ctx.fillStyle = "#ffaa33";
      ctx.beginPath();
      ctx.arc(cx, cy, R * scale, 0, Math.PI * 2);
      ctx.fill();

      // Wektor r
      const rx = x - cx;
      const ry = y - cy;
      const r = Math.sqrt(rx * rx + ry * ry);

      // Przyspieszenie grawitacyjne (poprawne)
      const a = -(G * M) / (r / scale) ** 2;
      const ax = a * (rx / r);
      const ay = a * (ry / r);

      // Aktualizacja prędkości
      vx += ax;
      vy += ay;

      // Aktualizacja pozycji
      x += vx;
      y += vy;

      // Satelita
      ctx.fillStyle = "#4ade80";
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, Math.PI * 2);
      ctx.fill();

      // Tor lotu
      ctx.fillStyle = "rgba(100,150,255,0.3)";
      ctx.fillRect(x, y, 2, 2);

      requestAnimationFrame(animate);
    }

    animate();
  }, [velocity, startVelocity, M, R]);

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-xl border border-gray-700 bg-gray-900">
        <h2 className="text-2xl font-semibold mb-4">
          Kalkulator drugiej prędkości kosmicznej
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
          Promień planety (m)
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
            Druga prędkość kosmiczna:{" "}
            <span className="font-semibold text-blue-300">
              {velocity.toFixed(2)} m/s
            </span>
          </p>
        )}
      </div>

      {velocity !== null && (
        <div className="p-6 rounded-xl border border-gray-700 bg-gray-900 space-y-4">
          <h3 className="text-xl font-semibold">Animacja ucieczki satelity</h3>

          <label className="block">
            Prędkość startowa satelity (m/s)
            <input
              type="range"
              min={0}
              max={velocity * 2}
              step={velocity / 100}
              value={startVelocity}
              onChange={(e) => setStartVelocity(Number(e.target.value))}
              className="w-full mt-2"
            />
            <div className="text-blue-300 font-semibold">
              {startVelocity.toFixed(2)} m/s
            </div>
          </label>

          <canvas ref={canvasRef} className="border border-gray-700 bg-black" />
        </div>
      )}
    </div>
  );
}


