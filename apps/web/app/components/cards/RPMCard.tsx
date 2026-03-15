interface Props {
  rpm: number;
  max: number;
  trend: "up" | "down" | "stable";
}

export default function RPMCard({ rpm, max, trend }: Props) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow hover:shadow-md border border-gray-100 dark:border-gray-700 flex flex-col gap-3 min-h-[120px] transition-all duration-300">
      <span className="pl-4 text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
        RPM
      </span>
      <div className="pl-4 flex items-baseline gap-2">
        <span className="font-bold text-2xl text-gray-800 dark:text-white">
          {rpm}
        </span>
        <span
          aria-hidden="true"
          className={
            trend === "up"
              ? "text-green-500"
              : trend === "down"
                ? "text-red-500"
                : "text-gray-400"
          }
        >
          {trend === "up" ? "▲" : trend === "down" ? "▼" : "●"}
        </span>
      </div>
      <span className="pl-4 text-xs text-gray-500 dark:text-gray-400">
        Máx: {max}
      </span>
    </div>
  );
}
