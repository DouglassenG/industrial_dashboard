import { MachineStatus } from "@repo/types";

interface Props {
  state: MachineStatus["state"];
}

const stateConfig = {
  RUNNING: { label: "Ligada", color: "bg-green-500", text: "OK" },
  STOPPED: { label: "Desligada", color: "bg-gray-500", text: "Parada" },
  MAINTENANCE: { label: "Manutenção", color: "bg-yellow-500", text: "Atenção" },
  ERROR: { label: "Erro", color: "bg-red-500", text: "Crítico" },
};

export default function MachineStateCard({ state }: Props) {
  const config = stateConfig[state];
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow flex flex-col gap-2">
      <span className="text-sm text-gray-500 dark:text-gray-400">
        Estado Máquina
      </span>
      <div className="flex items-center gap-2">
        <span className={`w-3 h-3 rounded-full ${config.color}`} />
        <span className="font-bold text-lg text-gray-800 dark:text-white">
          {config.label}
        </span>
      </div>
      <span className="text-sm text-gray-500 dark:text-gray-400">
        Status: {config.text}
      </span>
    </div>
  );
}
