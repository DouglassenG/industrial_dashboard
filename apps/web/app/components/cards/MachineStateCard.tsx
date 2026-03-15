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
    <div className="bg-white dark:bg-gray-800 rounded-xl p-5 pl-10 shadow-sm hover:shadow-md border border-gray-300 dark:border-gray-700 flex flex-col gap-3 min-h-[90px] transition-all duration-300">
      <span className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
        Estado Máquina
      </span>
      <div className="flex items-center gap-2">
        <span
          className={`w-3 h-3 rounded-full flex-shrink-0 ${config.color}`}
        />
        <span className="font-bold text-2xl text-gray-800 dark:text-white">
          {config.label}
        </span>
      </div>
      <span className="text-xs text-gray-500 dark:text-gray-400">
        Status: {config.text}
      </span>
    </div>
  );
}
