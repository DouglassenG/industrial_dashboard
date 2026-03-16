import { Alert } from "@repo/types";
import { Bell, AlertCircle, AlertTriangle, Info } from "lucide-react";

interface Props {
  alerts: Alert[];
}

const levelConfig = {
  CRITICAL: {
    color: "text-red-500",
    bg: "bg-red-50 dark:bg-red-900/20",
    border: "border-red-500",
    ring: "ring-1 ring-inset ring-red-500",
    label: "Crítico",
    Icon: AlertCircle,
  },
  WARNING: {
    color: "text-yellow-500",
    bg: "bg-yellow-50 dark:bg-yellow-900/20",
    border: "border-yellow-500",
    ring: "ring-1 ring-inset ring-yellow-500",
    label: "Aviso",
    Icon: AlertTriangle,
  },
  INFO: {
    color: "text-blue-600",
    bg: "bg-blue-50 dark:bg-blue-900/20",
    border: "border-blue-600",
    ring: "ring-1 ring-inset ring-blue-600",
    label: "Info",
    Icon: Info,
  },
};

export default function AlertsPanel({ alerts }: Props) {
  const sorted = [...alerts].sort((a, b) => {
    const priority = { CRITICAL: 0, WARNING: 1, INFO: 2 };
    return priority[a.level] - priority[b.level];
  });

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 max-sm:overflow-hidden lg:max-h-none lg:overflow-visible transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-gray-50 dark:hover:bg-gray-800/60 animate-fade-in max-sm:h-32">
      <div className="flex items-center gap-1.5 mb-2">
        <Bell
          size={15}
          className="text-blue-600 dark:text-blue-400"
          aria-hidden="true"
        />
        <span className="font-semibold text-gray-900 dark:text-white">
          Alertas Recentes
        </span>
      </div>
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
                className={`rounded-lg px-4 py-3 border-l-4 ${config.bg} ${config.border} ${config.ring} animate-fade-in`}
                role="alert"
                aria-label={`Alerta ${config.label}: ${alert.message}`}
              >
                <div
                  className={`flex items-center gap-1.5 text-sm font-semibold ${config.color}`}
                >
                  <config.Icon size={14} aria-hidden="true" />
                  <span>{config.label}:</span>
                </div>
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
