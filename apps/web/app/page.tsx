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
  const [soundEnabled, setSoundEnabled] = useState(false);
  const { data, connected, tempTrend, rpmTrend } = useMachineData();
  const { history } = useMetricHistory();

  const toggleDark = () => {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  const alerts = data
    ? generateAlerts(data.metrics.temperature, data.metrics.rpm, soundEnabled)
    : [];

  return (
    <div
      className={`flex flex-col bg-gray-100 dark:bg-gray-950 transition-all duration-300
      min-h-screen
      lg:h-screen lg:overflow-hidden
      ${darkMode ? "dark" : ""}`}
    >
      <Header
        connected={connected}
        darkMode={darkMode}
        onToggleDark={toggleDark}
        soundEnabled={soundEnabled}
        onToggleSound={() => setSoundEnabled((prev) => !prev)}
      />

      <main
        className="flex-1 flex flex-col gap-3 px-3 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-4
        overflow-y-auto
        lg:overflow-hidden lg:min-h-0"
      >
        {/* Cards de métricas */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 shrink-0">
          <MachineStateCard state={data?.state ?? "STOPPED"} />
          <TemperatureCard
            temperature={data?.metrics.temperature ?? 0}
            max={85}
            trend={tempTrend}
          />
          <RPMCard rpm={data?.metrics.rpm ?? 0} max={1500} trend={rpmTrend} />
          <UptimeCard uptimeSeconds={data?.metrics.uptime ?? 0} />
        </div>

        {/* Gráfico de métricas */}
        <div className="shrink-0">
          <MetricsChart history={history} />
        </div>

        {/* Alertas e eficiência */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:flex-1 lg:min-h-0 items-stretch">
          <AlertsPanel alerts={alerts} />
          {data && <EfficiencyPanel oee={data.oee} />}
        </div>
      </main>
    </div>
  );
}
