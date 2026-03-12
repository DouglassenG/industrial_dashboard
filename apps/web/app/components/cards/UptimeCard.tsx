interface Props {
  uptimeSeconds: number;
}

export default function UptimeCard({ uptimeSeconds }: Props) {
  const hours = Math.floor(uptimeSeconds / 3600);
  const minutes = Math.floor((uptimeSeconds % 3600) / 60);
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow flex flex-col gap-2">
      <span className="text-sm text-gray-500 dark:text-gray-400">
        Tempo de Operação
      </span>
      <span className="font-bold text-lg text-gray-800 dark:text-white">
        {hours}h {minutes}m
      </span>
    </div>
  );
}
