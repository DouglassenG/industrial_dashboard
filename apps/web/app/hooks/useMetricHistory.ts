"use client";

import { useState, useEffect } from "react";
import { MetricHistory } from "@repo/types";

export function useMetricHistory() {
  const [history, setHistory] = useState<MetricHistory[]>([]);

  useEffect(() => {
    function generateMetricHistory(): MetricHistory {
      return {
        timestamp: new Date(),
        temperature: parseFloat((70 + Math.random() * 20).toFixed(1)),
        rpm: parseFloat((1100 + Math.random() * 300).toFixed(0)),
        efficiency: parseFloat((88 + Math.random() * 10).toFixed(1)),
      };
    }

    const interval = setInterval(() => {
      setHistory((prev) => [...prev.slice(-20), generateMetricHistory()]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return { history };
}
