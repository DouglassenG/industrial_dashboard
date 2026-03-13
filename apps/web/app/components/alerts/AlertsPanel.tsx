import { Alert } from "@repo/types";

interface Props {
  alerts: Alert[];
}

const levelConfig = {
  CRITICAL: {
    color: "text-red-500",
    bg: "bg-red-50 dark:bg-red-900/20",
    label: "Crítico ",
  },
  WARNING: {
    color: "text-yellow-500",
    bg: "bg-yellow-50 dark:bg-yellow-900/20",
    label: "Aviso",
  },
  INFO: {
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-900/20",
    label: "Info",
  },
};

export default function AlertsPanel({ alerts }: Props) {
  const sorted = [...alerts].sort((a, b) => {
    const priority = { CRITICAL: 0, WARNING: 1, INFO: 2 };
    return priority[a.level] - priority[b.level];
  });

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow flex flex-col gap-3">
      <span className="font-semibold text-gray-700 dark:text-gray-200">
        Alertas Recentes
      </span>
      <div className="flex flex-col gap-2">
        {sorted.map((alert) => {
          const config = levelConfig[alert.level];
          return (
            <div
              key={alert.id}
              className={`rounded-lg px-3 py-2 ${config.bg}`}
              role="alert"
              aria-label={`Alerta ${config.label} : ${alert.message}`}
            >
              <span className={`text-sm font-semibold ${config.color}`}>
                {config.label}:
              </span>
              <span className="text-sm text-gray-700 dark:text-gray-300 ml-1">
                {alert.message}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
