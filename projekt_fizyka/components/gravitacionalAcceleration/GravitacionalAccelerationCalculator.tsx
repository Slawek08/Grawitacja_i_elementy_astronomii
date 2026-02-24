"use client";

import { useState } from "react";

const G = 6.674e-11;

export default function GravitacionalAccelerationCalculator() {
  const [M, setM] = useState(5.972e24);
  const [R, setR] = useState(6.371e6);
  const [acceleration, setAcceleration] = useState<number | null>(null);

  function compute() {
    const g = (G * M) / R ** 2;
    setAcceleration(g);
  }

  return <div className="space-y-6"></div>;
}
