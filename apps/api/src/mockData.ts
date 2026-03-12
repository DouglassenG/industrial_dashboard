import { MachineStatus, Alert, MetricHistory } from "../../web/app/types";

export function generateMachineStatus(): MachineStatus {
  return {
    id: "mixer-01",
    timestamp: new Date(),
    state: "RUNNING",
    metrics: {
      temperature: parseFloat((70 + Math.random() * 20).toFixed(1)),
      rpm: parseFloat((1100 + Math.random() * 300).toFixed(0)),
      uptime: 19380 + Math.floor(Date.now() / 1000),
      efficiency: parseFloat((88 + Math.random() * 10).toFixed(1)),
    },
    oee: {
      overall: 0.92,
      availability: 0.98,
      performance: 0.95,
      quality: 0.94,
    },
  };
}

export function generateAlert(): Alert {
  const levels: Alert["level"][] = ["INFO", "WARNING", "CRITICAL"];
  const messages = {
    INFO: "Manutenção preventiva próxima",
    WARNING: "RPM abaixo do esperado",
    CRITICAL: "Temperatura acima do limite",
  };
  const level = levels[Math.floor(Math.random() * levels.length)];
  return {
    id: `alert-${Date.now()}`,
    level,
    message: messages[level],
    component: "Misturador",
    timestamp: new Date(),
    acknowledged: false,
  };
}

export function generateMetricHistory(): MetricHistory {
  return {
    timestamp: new Date(),
    temperature: parseFloat((70 + Math.random() * 20).toFixed(1)),
    rpm: parseFloat((1100 + Math.random() * 300).toFixed(0)),
    efficiency: parseFloat((88 + Math.random() * 10).toFixed(1)),
  };
}
