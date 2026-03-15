"use client";

import { useState } from "react";
import { useMachineData } from "./hooks/useMachineData";
import { useMetricHistory } from "./hooks/useMetricHistory";
import { generateAlerts } from "./lib/alertsService";
import Header from "./components/layout/Header";
import MachineStateCard from "./components/cards/MachineStateCard";
import TemperatureCard from "./components/cards/TemperatureCard";
import RPMCard from "./components/cards/RPMCard";
import UptimeCard from "./components/cards/UptimeCard";
import EfficiencyPanel from "./components/cards/EfficiencyPanel";
import MetricsChart from "./components/charts/MetricsChart";
import AlertsPanel from "./components/alerts/AlertsPanel";

export default function Page() {
  const [darkMode, setDarkMode] = useState(false);
  const { data, connected } = useMachineData();
  const { history } = useMetricHistory();

  const toggleDark = () => {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  const alerts = data
    ? generateAlerts(data.metrics.temperature, data.metrics.rpm)
    : [];

  return (
    <div
      className={`h-screen flex flex-col bg-gray-50 dark:bg-gray-950 transition-all duration-300 overflow-hidden ${darkMode ? "dark" : ""}`}
    >
      <Header
        connected={connected}
        darkMode={darkMode}
        onToggleDark={toggleDark}
      />
      <main className="flex-1 min-h-0 px-3 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 flex flex-col gap-2">
        {/* Cards de métricas */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 shrink-0">
          <MachineStateCard state={data?.state ?? "STOPPED"} />
          <TemperatureCard
            temperature={data?.metrics.temperature ?? 0}
            max={85}
            trend="up"
          />
          <RPMCard rpm={data?.metrics.rpm ?? 0} max={1500} trend="down" />
          <UptimeCard uptimeSeconds={data?.metrics.uptime ?? 0} />
        </div>

        {/* Gráfico de métricas */}
        <div className="shrink-0">
          <MetricsChart history={history} />
        </div>

        {/* Alertas e eficiência */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 flex-1 min-h-0">
          <AlertsPanel alerts={alerts} />
          {data && <EfficiencyPanel oee={data.oee} />}
        </div>
      </main>
    </div>
  );
}
