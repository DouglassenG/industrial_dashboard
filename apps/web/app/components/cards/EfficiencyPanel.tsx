import { MachineStatus } from "@repo/types";

interface Props {
  oee: MachineStatus["oee"];
}

function progressColor(value: number): string {
  if (value >= 0.8) return "bg-green-500";
  if (value >= 0.6) return "bg-yellow-500";
  return "bg-red-500";
}

interface SubMetricProps {
  label: string;
  value: number;
}

function SubMetric({ label, value }: SubMetricProps) {
  const pct = (value * 100).toFixed(0);
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-5 lg:p-3 shadow border border-gray-300 dark:border-gray-700 transition-all duration-300 flex flex-col gap-1 min-w-0">
      <span className="text-[10px] font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400 truncate">
        {label}
      </span>
      <p className="font-bold text-sm text-gray-800 dark:text-white">{pct}%</p>
      <div className="w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full">
        <div
          className={`h-1 rounded-full ${progressColor(value)}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export default function EfficiencyPanel({ oee }: Props) {
  const oeeValue = (oee.overall * 100).toFixed(0);
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 lg:p-3 shadow-sm hover:shadow-md border border-gray-300 dark:border-gray-700 flex flex-col gap-3 lg:gap-2 transition-all duration-300 overflow-hidden">
      <span className="font-semibold text-sm text-gray-700 dark:text-gray-200">
        Métricas de Eficiência
      </span>

      {/* OEE — métrica principal em destaque */}
      <div className="flex flex-col gap-0.5">
        <span className="text-[10px] font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
          OEE
        </span>
        <p className="font-bold text-2xl lg:text-xl text-gray-800 dark:text-white">
          {oeeValue}%
        </p>
        <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full">
          <div
            className={`h-1.5 rounded-full ${progressColor(oee.overall)}`}
            style={{ width: `${oeeValue}%` }}
          />
        </div>
      </div>

      {/* Sub-métricas */}
      <div className="grid grid-cols-3 gap-2 w-full">
        <SubMetric label="Disponib." value={oee.availability} />
        <SubMetric label="Perform." value={oee.performance} />
        <SubMetric label="Qualidade" value={oee.quality} />
      </div>
    </div>
  );
}
