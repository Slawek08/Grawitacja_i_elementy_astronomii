"use client";

import { useState } from "react";
import GraphPlotter from "./GraphhPlotter";

export default function Home() {
  const [formula, setFormula] = useState("a * sin(b * x)");
  const [a, setA] = useState(1);
  const [b, setB] = useState(1);
  const [graphs, setGraphs] = useState<
    { formula: string; params: { a: number; b: number }; color: string }[]
  >([]);

  const randomColor = () =>
    "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");

  const addGraph = () => {
    setGraphs([...graphs, { formula, params: { a, b }, color: randomColor() }]);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Mini GeoGebra w Next.js</h1>

      <div style={{ marginBottom: 20 }}>
        <input
          value={formula}
          onChange={(e) => setFormula(e.target.value)}
          style={{ padding: 8, width: 300 }}
        />
        <button onClick={addGraph} style={{ marginLeft: 10 }}>
          Dodaj wykres
        </button>
      </div>

      <div style={{ marginBottom: 20 }}>
        <label>
          a = {a}
          <input
            type="range"
            min="-5"
            max="5"
            step="0.1"
            value={a}
            onChange={(e) => setA(parseFloat(e.target.value))}
          />
        </label>
        <br />
        <label>
          b = {b}
          <input
            type="range"
            min="-5"
            max="5"
            step="0.1"
            value={b}
            onChange={(e) => setB(parseFloat(e.target.value))}
          />
        </label>
      </div>

      <div>
        {graphs.map((g, i) => (
          <GraphPlotter
            key={i}
            formula={g.formula}
            params={g.params}
            color={g.color}
          />
        ))}
      </div>
    </div>
  );
}
