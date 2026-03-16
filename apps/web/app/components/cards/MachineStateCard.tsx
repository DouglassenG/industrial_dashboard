import { MachineStatus } from "@repo/types";
import {
  Cpu,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  PauseCircle,
} from "lucide-react";

interface Props {
  state: MachineStatus["state"];
}

const stateConfig = {
  RUNNING: {
    label: "Ligada",
    text: "OK",
    Icon: CheckCircle2,
    iconColor: "text-green-500",
  },
  STOPPED: {
    label: "Desligada",
    text: "Parada",
    Icon: PauseCircle,
    iconColor: "text-gray-500",
  },
  MAINTENANCE: {
    label: "Manutenção",
    text: "Atenção",
    Icon: AlertTriangle,
    iconColor: "text-yellow-500",
  },
  ERROR: {
    label: "Erro",
    text: "Crítico",
    Icon: XCircle,
    iconColor: "text-red-500",
  },
};

export default function MachineStateCard({ state }: Props) {
  const config = stateConfig[state];
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md dark:shadow-black/30 border border-gray-400 dark:border-gray-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800/60 animate-fade-in">
      <div className="flex items-center gap-1.5">
        <Cpu
          size={13}
          className="text-green-600 dark:text-green-400"
          aria-hidden="true"
        />
        <span className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
          Estado Máquina
        </span>
      </div>
      <div className="flex items-center gap-2">
        <config.Icon
          size={20}
          className={`flex-shrink-0 ${config.iconColor}`}
          aria-hidden="true"
        />
        <span
          key={config.label}
          className="font-bold text-2xl text-gray-800 dark:text-white animate-fade-in"
        >
          {config.label}
        </span>
      </div>
      <span className="text-xs text-gray-500 dark:text-gray-400">
        Status: {config.text}
      </span>
    </div>
  );
}
