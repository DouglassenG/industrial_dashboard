"use client";

import { MetricHistory } from "@repo/types";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface Props {
  history: MetricHistory[];
}

export default function MetricsChart({ history }: Props) {
  const data = history.map((h) => ({
    time: new Date(h.timestamp).toLocaleTimeString(),
    temperature: h.temperature,
    rpm: h.rpm,
    efficiency: h.efficiency,
  }));

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow">
      <span className="font-semibold text-gray-700 dark:text-gray-200">
        Gráfico de Métricas
      </span>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
        >
          <XAxis dataKey="time" tick={{ fontSize: 11 }} />
          <YAxis tick={{ fontSize: 11 }} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="temperature"
            stroke="#ef4444"
            name="Temperatura (°C)"
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="rpm"
            stroke="#3b82f6"
            name="RPM"
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="efficiency"
            stroke="#22c55e"
            name="Eficiência (%)"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
