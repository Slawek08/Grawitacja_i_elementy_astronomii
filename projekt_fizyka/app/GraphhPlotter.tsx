"use client";

import dynamic from "next/dynamic";
import { evaluate } from "mathjs";

const Plot = dynamic(() => import("react-plotly.js"), {
  ssr: false,
});

type GraphPlotterProps = {
  formula: string;
  params: Record<string, number>;
  color: string;
};

export default function GraphPlotter({ formula, params, color }: GraphPlotterProps) {
  const xValues = Array.from({ length: 500 }, (_, i) => i / 20 - 10);

  const yValues = xValues.map((x) => {
    try {
      return evaluate(formula, { x, ...params });
    } catch {
      return null;
    }
  });

  return (
    <Plot
      data={[
        {
          x: xValues,
          y: yValues,
          type: "scatter",
          mode: "lines",
          line: { color },
        },
      ]}
      layout={{
        width: 700,
        height: 500,
        title: `${formula} | parametry: ${JSON.stringify(params)}`,
      }}
    />
  );
}
