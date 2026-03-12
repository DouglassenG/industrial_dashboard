import { MachineStatus } from "@repo/types";

interface Props {
  oee: MachineStatus["oee"];
}

export default function EfficiencyPanel({ oee }: Props) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow flex flex-col gap-3 transition-all duration-300">
      <span className="font-semibold text-gray-700 dark:text-gray-200">
        Métricas de Eficiência
      </span>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <span className="text-sm text-gray-500 dark:text-gray-400">OEE</span>
          <p className="font-bold text-gray-800 dark:text-white">
            {(oee.overall * 100).toFixed(0)}%
          </p>
        </div>
        <div>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Disponibilidade
          </span>
          <p className="font-bold text-gray-800 dark:text-white">
            {(oee.availability * 100).toFixed(0)}%
          </p>
        </div>
        <div>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Performance
          </span>
          <p className="font-bold text-gray-800 dark:text-white">
            {(oee.performance * 100).toFixed(0)}%
          </p>
        </div>
        <div>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Qualidade
          </span>
          <p className="font-bold text-gray-800 dark:text-white">
            {(oee.quality * 100).toFixed(0)}%
          </p>
        </div>
      </div>
    </div>
  );
}
