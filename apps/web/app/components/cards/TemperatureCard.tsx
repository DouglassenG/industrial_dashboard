interface Props {
  temperature: number;
  max: number;
  trend: "up" | "down" | "stable";
}

export default function TemperatureCard({ temperature, max, trend }: Props) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow flex flex-col gap-2 transition-all duration-300">
      <span className="text-sm text-gray-500 dark:text-gray-400">
        Temperatura
      </span>
      <div className="flex items-center gap-2">
        <span className="font-bold text-lg text-gray-800 dark:text-white">
          {temperature}°C
        </span>
        <span
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
      <span className="text-sm text-gray-500 dark:text-gray-400">
        Máx: {max}°C
      </span>
    </div>
  );
}
