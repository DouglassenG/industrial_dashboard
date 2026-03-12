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
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-950 transition-all duration-300">
        <Header
          connected={connected}
          darkMode={darkMode}
          onToggleDark={toggleDark}
        />
        <main className="p-6 flex flex-col gap-6">
          {/* Cards de métricas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
          <MetricsChart history={history} />

          {/* Alertas e eficiência */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AlertsPanel alerts={alerts} />
            {data && <EfficiencyPanel oee={data.oee} />}
          </div>
        </main>
      </div>
    </div>
  );
}
