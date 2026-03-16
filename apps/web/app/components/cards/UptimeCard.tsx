import { Clock } from "lucide-react";

interface Props {
  uptimeSeconds: number;
}

export default function UptimeCard({ uptimeSeconds }: Props) {
  const hours = Math.floor(uptimeSeconds / 3600);
  const minutes = Math.floor((uptimeSeconds % 3600) / 60);
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 flex flex-col gap-1 hover:-translate-y-1 hover:shadow-md hover:bg-gray-50 dark:hover:bg-gray-800/60 animate-fade-in">
      <div className="flex items-center gap-1.5">
        <Clock
          size={13}
          className="text-blue-600 dark:text-blue-400"
          aria-hidden="true"
        />
        <span className="text-xs font-medium uppercase tracking-wide text-gray-600 dark:text-gray-400">
          Tempo de Operação
        </span>
      </div>
      <span
        key={`${hours}-${minutes}`}
        className="font-bold text-2xl text-gray-900 dark:text-white animate-fade-in"
      >
        {hours}h {minutes}m
      </span>
      <span className="text-xs text-gray-600 dark:text-gray-400">
        Tempo acumulado
      </span>
    </div>
  );
}
