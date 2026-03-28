"use client";

import { useEffect, useRef } from "react";

export default function KeplerCanvasCentered() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const container = containerRef.current!;
    const ctx = canvas.getContext("2d")!;

    function resizeCanvas() {
      // Canvas dopasowuje się do kontenera z marginesami
      canvas.width = container.clientWidth - 24;  // pr-6 = 24px
      canvas.height = container.clientHeight - 24; // pb-6 = 24px
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    function animate() {
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      // Parametry orbity (wyśrodkowanej)
      const a = 200;
      const e = 0.6;
      const b = a * Math.sqrt(1 - e * e);
      const n = 0.01;

      let t = 0;

      function solveE(M: number, e: number) {
        let E = M;
        for (let i = 0; i < 5; i++) {
          E = E - (E - e * Math.sin(E) - M) / (1 - e * Math.cos(E));
        }
        return E;
      }

      function drawEllipse() {
        ctx.strokeStyle = "#4b9fff";
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (let E = 0; E <= Math.PI * 2; E += 0.01) {
          const x = cx + a * Math.cos(E);
          const y = cy + b * Math.sin(E);
          if (E === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      function drawVelocityVector(x: number, y: number, vx: number, vy: number) {
        const scale = 40;
        const endX = x + vx * scale;
        const endY = y + vy * scale;

        ctx.strokeStyle = "#ff4444";
        ctx.lineWidth = 3;

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(endX, endY);
        ctx.stroke();

        const angle = Math.atan2(vy, vx);
        const size = 8;

        ctx.beginPath();
        ctx.moveTo(endX, endY);
        ctx.lineTo(endX - size * Math.cos(angle - 0.3), endY - size * Math.sin(angle - 0.3));
        ctx.lineTo(endX - size * Math.cos(angle + 0.3), endY - size * Math.sin(angle + 0.3));
        ctx.closePath();
        ctx.fillStyle = "#ff4444";
        ctx.fill();
      }

      function frame() {
        t += 1;

        ctx.fillStyle = "#000014";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        drawEllipse();

        // Słońce na środku
        const sunX = cx;
        const sunY = cy;

        ctx.fillStyle = "#ffcc33";
        ctx.beginPath();
        ctx.arc(sunX, sunY, 10, 0, Math.PI * 2);
        ctx.fill();

        // Pozycja planety (wyśrodkowana orbita)
        const M = n * t;
        const E = solveE(M, e);

        const x = cx + a * Math.cos(E);
        const y = cy + b * Math.sin(E);

        // Prędkość orbitalna
        const vx = -a * Math.sin(E) * n / (1 - e * Math.cos(E));
        const vy =  b * Math.cos(E) * n / (1 - e * Math.cos(E));

        drawVelocityVector(x, y, vx, vy);

        // Planeta
        ctx.fillStyle = "#4ade80";
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fill();

        requestAnimationFrame(frame);
      }

      frame();
    }

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="p-3  rounded-xl border border-gray-700 bg-gray-900 w-full h-[400px]"
    >
      <canvas ref={canvasRef} className="block" />
    </div>
  );
}
