import { MachineStatus } from "@repo/types";
import { BarChart2, Layers, Zap, Star } from "lucide-react";

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
  icon: React.ReactNode;
}

function SubMetric({ label, value, icon }: SubMetricProps) {
  const pct = (value * 100).toFixed(0);
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-5 lg:p-3 shadow border border-gray-300 dark:border-gray-700 transition-all duration-300 flex flex-col gap-1 min-w-0">
      <div className="flex items-center gap-1">
        {icon}
        <span className="text-[10px] font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400 truncate">
          {label}
        </span>
      </div>
      <p className="font-bold text-sm text-gray-800 dark:text-white">{pct}%</p>
      <div className="w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full">
        <div
          className={`h-1 rounded-full transition-[width] duration-700 ease-out ${progressColor(value)}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export default function EfficiencyPanel({ oee }: Props) {
  const oeeValue = (oee.overall * 100).toFixed(0);
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 lg:p-3 shadow-sm hover:shadow-md hover:-translate-y-1 border border-gray-300 dark:border-gray-700 flex flex-col gap-3 lg:gap-2 transition-all duration-300 overflow-hidden animate-fade-in">
      <div className="flex items-center gap-1.5">
        <BarChart2
          size={15}
          className="text-green-600 dark:text-green-400"
          aria-hidden="true"
        />
        <span className="font-semibold text-sm text-gray-700 dark:text-gray-200">
          Métricas de Eficiência
        </span>
      </div>

      {/* OEE — métrica principal em destaque */}
      <div className="flex flex-col gap-0.5">
        <span className="text-[10px] font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
          OEE
        </span>
        <p
          key={oeeValue}
          className="font-bold text-2xl lg:text-xl text-gray-800 dark:text-white animate-fade-in"
        >
          {oeeValue}%
        </p>
        <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full">
          <div
            className={`h-1.5 rounded-full transition-[width] duration-700 ease-out ${progressColor(oee.overall)}`}
            style={{ width: `${oeeValue}%` }}
          />
        </div>
      </div>

      {/* Sub-métricas */}
      <div className="grid grid-cols-3 gap-2 w-full">
        <SubMetric
          label="Disponib."
          value={oee.availability}
          icon={
            <Layers
              size={10}
              className="text-green-500 flex-shrink-0"
              aria-hidden="true"
            />
          }
        />
        <SubMetric
          label="Perform."
          value={oee.performance}
          icon={
            <Zap
              size={10}
              className="text-green-500 flex-shrink-0"
              aria-hidden="true"
            />
          }
        />
        <SubMetric
          label="Qualidade"
          value={oee.quality}
          icon={
            <Star
              size={10}
              className="text-green-500 flex-shrink-0"
              aria-hidden="true"
            />
          }
        />
      </div>
    </div>
  );
}
