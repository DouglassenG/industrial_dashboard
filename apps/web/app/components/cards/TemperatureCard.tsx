interface Props {
  temperature: number;
  max: number;
  trend: "up" | "down" | "stable";
}

export default function TemperatureCard({ temperature, max, trend }: Props) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-5 pl-10 shadow-sm hover:shadow-md border border-gray-300 dark:border-gray-700 flex flex-col gap-3 min-h-[90px] transition-all duration-300">
      <span className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
        Temperatura
      </span>
      <div className="flex items-baseline gap-2">
        <span className="font-bold text-2xl text-gray-800 dark:text-white">
          {temperature}°C
        </span>
        <span
          aria-hidden="true"
          className={
            trend === "up"
              ? "text-red-500"
              : trend === "down"
                ? "text-blue-500"
                : "text-gray-400"
          }
        >
          {trend === "up" ? "▲" : trend === "down" ? "▼" : "●"}
        </span>
      </div>
      <span className="text-xs text-gray-500 dark:text-gray-400">
        Máx: {max}°C
      </span>
    </div>
  );
}
