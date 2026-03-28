"use client";

import { useEffect, useRef, useState } from "react";
import { div } from "three/tsl";

export default function KeplerFirstLawVisualization() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [e, setE] = useState(0.3); //mimośród

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    // parametry elipsy
    const a = 150; //półoś wielka
    const b = a * Math.sqrt(1 - e * e); // półoś mała
    const cx = w / 2; // środek ekranu
    const cy = h / 2;

    // przesunięcie tak, aby Słońce było w ognisku
    const c = e * a; // odległość ogniska od środka
    const sunX = cx - c;
    const sunY = cy;

    // tło
    ctx.fillStyle = "#020617";
    ctx.fillRect(0, 0, w, h);

    //orbita (elipsa)
    ctx.strokeStyle = "#38bdf8";
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let t = 0; t <= 2 * Math.PI + 0.01; t += 0.01) {
      const x = cx + a * Math.cos(t);
      const y = cy + b * Math.sin(t);
      if (t === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Słońce w ognisku
    ctx.fillStyle = "#facc15";
    ctx.beginPath();
    ctx.arc(sunX, sunY, 8, 0, 2 * Math.PI);
    ctx.fill();

    //planeta
    ctx.fillStyle = "#60a5fa";
    ctx.beginPath();
    ctx.arc(cx + a, cy, 5, 0, 2 * Math.PI);
    ctx.fill();
  }, [e]);

  return (
    <div className="p-4 bg-gray-900 border border-gray-700 rounded-xl">
      <h3 className="text-lg mb-2">Orbita eliptyczna</h3>
      <canvas
        ref={canvasRef}
        width={400}
        height={300}
        className="border border-gray-700 bg-black"
      />
      <div className="mt-3">
        <label className="text-sm">
          Mimośród e: <span className="font-mono">{e.toFixed(2)}</span>
        </label>
        <input
          type="range"
          min={0}
          max={0.8}
          step={0.01}
          value={e}
          onChange={(e) => setE(parseFloat(e.target.value))}
          className="w-full"
        />
      </div>
    </div>
  );
}
