interface Props {
  uptimeSeconds: number;
}

export default function UptimeCard({ uptimeSeconds }: Props) {
  const hours = Math.floor(uptimeSeconds / 3600);
  const minutes = Math.floor((uptimeSeconds % 3600) / 60);
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow hover:shadow-md border border-gray-100 dark:border-gray-700 flex flex-col gap-3 min-h-[120px] transition-all duration-300">
      <span className="pl-4 text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
        Tempo de Operação
      </span>
      <span className="pl-4 font-bold text-2xl text-gray-800 dark:text-white">
        {hours}h {minutes}m
      </span>
      <span className="pl-4 text-xs text-gray-500 dark:text-gray-400">
        Tempo acumulado
      </span>
    </div>
  );
}
