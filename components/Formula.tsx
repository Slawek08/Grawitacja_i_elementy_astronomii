"use client";

import { useEffect } from "react";

interface Props {
  children: string;
}

export default function Formula({ children }: Props) {
  useEffect(() => {
    // @ts-ignore
    if (window.MathJax) {
      // @ts-ignore
      window.MathJax.typesetPromise();
    }
  }, [children]);

  return (
    <div className="my-4 text-xl">
      <span>{children}</span>
    </div>
  );
}
