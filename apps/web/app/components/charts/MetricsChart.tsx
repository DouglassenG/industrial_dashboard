"use client";

import { MetricHistory } from "@repo/types";
import { LineChart as LineChartIcon } from "lucide-react";
import {
  ComposedChart,
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
    <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md dark:shadow-black/30 border border-gray-400 dark:border-gray-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800/60 animate-fade-in">
      <div className="mb-4 flex items-center gap-1.5">
        <LineChartIcon
          size={15}
          className="text-green-600 dark:text-green-400"
          aria-hidden="true"
        />
        <span className="font-semibold text-gray-700 dark:text-gray-200">
          Gráfico de Métricas
        </span>
      </div>
      <div className="h-52 sm:h-32">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{ top: 10, right: 55, left: 10, bottom: 0 }}
          >
            <XAxis
              dataKey="time"
              tick={{ fontSize: 10 }}
              interval="preserveStartEnd"
              height={20}
            />
            <YAxis
              yAxisId="left"
              tick={{ fontSize: 10 }}
              width={45}
              domain={[0, 100]}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tick={{ fontSize: 10 }}
              width={55}
              domain={[800, 1600]}
            />
            <Tooltip
              wrapperStyle={{ zIndex: 50 }}
              contentStyle={{
                backgroundColor: "var(--card)",
                border: "2px solid var(--border)",
                borderRadius: "8px",
                fontSize: "14px",
                color: "var(--card-foreground)",
              }}
            />
            <Legend />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="temperature"
              stroke="#ef4444"
              name="Temperatura (°C)"
              dot={false}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="rpm"
              stroke="#3b82f6"
              name="RPM"
              dot={false}
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="efficiency"
              stroke="#22c55e"
              name="Eficiência (%)"
              dot={false}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
