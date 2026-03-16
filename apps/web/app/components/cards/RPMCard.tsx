import { Gauge, TrendingUp, TrendingDown, Minus } from "lucide-react";

interface Props {
  rpm: number;
  max: number;
  trend: "up" | "down" | "stable";
}

export default function RPMCard({ rpm, max, trend }: Props) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-gray-50 dark:hover:bg-gray-800/60 animate-fade-in">
      <div className="flex items-center gap-1.5">
        <Gauge
          size={13}
          className="text-blue-600 dark:text-blue-400"
          aria-hidden="true"
        />
        <span className="text-xs font-medium uppercase tracking-wide text-gray-600 dark:text-gray-400">
          RPM
        </span>
      </div>
      <div className="flex items-baseline gap-2">
        <span
          key={rpm}
          className="font-bold text-2xl text-gray-900 dark:text-white animate-fade-in"
        >
          {rpm}
        </span>
        {trend === "up" && (
          <TrendingUp
            size={18}
            className="text-green-500"
            aria-label="Subindo"
          />
        )}
        {trend === "down" && (
          <TrendingDown
            size={18}
            className="text-red-500"
            aria-label="Descendo"
          />
        )}
        {trend === "stable" && (
          <Minus size={18} className="text-gray-500" aria-label="Estável" />
        )}
      </div>
      <span className="text-xs text-gray-600 dark:text-gray-400">
        Máx: {max}
      </span>
    </div>
  );
}
