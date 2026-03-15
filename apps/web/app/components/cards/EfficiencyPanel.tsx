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
    <div className="flex flex-col gap-1 p-2">
      <span className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
        {label}
      </span>
      <p className="font-bold text-lg text-gray-800 dark:text-white">{pct}%</p>
      <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full">
        <div
          className={`h-1.5 rounded-full ${progressColor(value)}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export default function EfficiencyPanel({ oee }: Props) {
  const oeeValue = (oee.overall * 100).toFixed(0);
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-5 pl-8 shadow hover:shadow-md border border-gray-100 dark:border-gray-700 flex flex-col gap-4 lg:h-full transition-all duration-300">
      <span className="font-semibold text-gray-700 dark:text-gray-200">
        Métricas de Eficiência
      </span>

      {/* OEE — métrica principal em destaque */}
      <div className="flex flex-col gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
          OEE
        </span>
        <p className="font-bold text-3xl text-gray-800 dark:text-white">
          {oeeValue}%
        </p>
        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
          <div
            className={`h-2 rounded-full ${progressColor(oee.overall)}`}
            style={{ width: `${oeeValue}%` }}
          />
        </div>
      </div>

      {/* Sub-métricas */}
      <div className="grid grid-cols-3 gap-4">
        <SubMetric label="Disponib." value={oee.availability} />
        <SubMetric label="Performance" value={oee.performance} />
        <SubMetric label="Qualidade" value={oee.quality} />
      </div>
    </div>
  );
}
