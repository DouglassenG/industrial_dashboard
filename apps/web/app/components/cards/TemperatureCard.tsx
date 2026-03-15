import { Thermometer, TrendingUp, TrendingDown, Minus } from "lucide-react";

interface Props {
  temperature: number;
  max: number;
  trend: "up" | "down" | "stable";
}

export default function TemperatureCard({ temperature, max, trend }: Props) {
  return (
    <div
      className={`rounded-xl p-5 shadow border transition-all duration-300 hover:-translate-y-1 hover:shadow-md animate-fade-in ${
        temperature >= max
          ? "bg-red-50 dark:bg-red-900/20 border-red-400 dark:border-red-600"
          : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
      }`}
    >
      <div className="flex items-center gap-1.5">
        <Thermometer
          size={13}
          className="text-green-600 dark:text-green-400"
          aria-hidden="true"
        />
        <span className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
          Temperatura
        </span>
      </div>
      <div className="flex items-baseline gap-2">
        <span
          key={temperature}
          className="font-bold text-2xl text-gray-800 dark:text-white animate-fade-in"
        >
          {temperature}°C
        </span>
        {trend === "up" && (
          <TrendingUp size={18} className="text-red-500" aria-label="Subindo" />
        )}
        {trend === "down" && (
          <TrendingDown
            size={18}
            className="text-blue-500"
            aria-label="Descendo"
          />
        )}
        {trend === "stable" && (
          <Minus size={18} className="text-gray-400" aria-label="Estável" />
        )}
      </div>
      <span className="text-xs text-gray-500 dark:text-gray-400">
        Máx: {max}°C
      </span>
    </div>
  );
}
