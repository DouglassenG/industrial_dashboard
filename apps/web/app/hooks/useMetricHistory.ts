"use client";

import { useState, useEffect } from "react";
import { MetricHistory } from "@repo/types";

export function useMetricHistory() {
  const [history, setHistory] = useState<MetricHistory[]>([]);

  // Carrega histórico salvo ao iniciar
  useEffect(() => {
    const saved = localStorage.getItem("metricHistory");
    if (saved) {
      setHistory(JSON.parse(saved));
    }
  }, []);

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
      setHistory((prev) => {
        const updated = [...prev.slice(-20), generateMetricHistory()];
        // Salva no localStorage
        localStorage.setItem("metricHistory", JSON.stringify(updated));
        return updated;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return { history };
}
