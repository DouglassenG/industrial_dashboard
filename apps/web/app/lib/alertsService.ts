import { Alert } from "@repo/types";
import { playAlertSound } from "./soundService";

export function generateAlerts(
  temperature: number,
  rpm: number,
  soundEnabled: boolean = false,
): Alert[] {
  const alerts: Alert[] = [];

  if (temperature > 85) {
    if (soundEnabled) playAlertSound("CRITICAL");
    alerts.push({
      id: `alert-${Date.now()}-temp`,
      level: "CRITICAL",
      message: "Temperatura acima do limite",
      component: "Sensor de Temperatura",
      timestamp: new Date(),
      acknowledged: false,
    });
  }

  if (rpm < 1100) {
    if (soundEnabled) playAlertSound("WARNING");
    alerts.push({
      id: `alert-${Date.now()}-rpm`,
      level: "WARNING",
      message: "RPM abaixo do esperado",
      component: "Motor Principal",
      timestamp: new Date(),
      acknowledged: false,
    });
  }

  alerts.push({
    id: `alert-${Date.now()}-info`,
    level: "INFO",
    message: "Manutenção preventiva próxima",
    component: "Sistema",
    timestamp: new Date(),
    acknowledged: false,
  });

  return alerts;
}
