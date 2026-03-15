import { Alert } from "@repo/types";

interface Props {
  alerts: Alert[];
}

const levelConfig = {
  CRITICAL: {
    color: "text-red-500",
    bg: "bg-red-50 dark:bg-red-900/20",
    border: "border-red-500",
    label: "Crítico",
  },
  WARNING: {
    color: "text-yellow-500",
    bg: "bg-yellow-50 dark:bg-yellow-900/20",
    border: "border-yellow-500",
    label: "Aviso",
  },
  INFO: {
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-900/20",
    border: "border-blue-500",
    label: "Info",
  },
};

export default function AlertsPanel({ alerts }: Props) {
  const sorted = [...alerts].sort((a, b) => {
    const priority = { CRITICAL: 0, WARNING: 1, INFO: 2 };
    return priority[a.level] - priority[b.level];
  });

  return (
    <div className=" bg-white dark:bg-gray-800 rounded-xl p-5 shadow border border-gray-300 dark:border-gray-700 max-sm:h-40 overflow-hidden lg:max-h-none lg:overflow-visible">
      {" "}
      <span className="font-semibold text-gray-700 dark:text-gray-200">
        Alertas Recentes
      </span>
      <div className="flex flex-col gap-2 overflow-y-auto flex-1 min-h-0">
        {sorted.length === 0 ? (
          <p className="text-sm text-gray-400 dark:text-gray-500 text-center py-8">
            Nenhum alerta ativo
          </p>
        ) : (
          sorted.map((alert) => {
            const config = levelConfig[alert.level];
            return (
              <div
                key={alert.id}
                className={`rounded-lg px-4 py-3 border-l-4 ${config.bg} ${config.border}`}
                role="alert"
                aria-label={`Alerta ${config.label}: ${alert.message}`}
              >
                <span className={`text-sm font-semibold ${config.color}`}>
                  {config.label}:
                </span>
                <span className="text-sm text-gray-700 dark:text-gray-300 ml-2">
                  {alert.message}
                </span>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
