"use client";

import { useState, useEffect } from "react";
import { MachineStatus } from "@repo/types";

export function useMachineData() {
  const [data, setData] = useState<MachineStatus | null>(null);
  const [connected, setConnected] = useState(true);

  useEffect(() => {
    function generateMachineStatus(): MachineStatus {
      return {
        id: "mixer-01",
        timestamp: new Date(),
        state: "RUNNING",
        metrics: {
          temperature: parseFloat((70 + Math.random() * 20).toFixed(1)),
          rpm: parseFloat((1100 + Math.random() * 300).toFixed(0)),
          uptime: 19380,
          efficiency: parseFloat((88 + Math.random() * 10).toFixed(1)),
        },
        oee: {
          overall: 0.92,
          availability: 0.98,
          performance: 0.95,
          quality: 0.94,
        },
      };
    }

    const interval = setInterval(() => {
      try {
        setData(generateMachineStatus());
        setConnected(true);
      } catch {
        setConnected(false);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return { data, connected };
}
