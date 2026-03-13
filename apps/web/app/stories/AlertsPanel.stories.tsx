import type { Meta, StoryObj } from "@storybook/react";
import AlertsPanel from "../components/alerts/AlertsPanel";
import type { Alert } from "@repo/types";

const meta: Meta<typeof AlertsPanel> = {
  title: "Alerts/AlertsPanel",
  component: AlertsPanel,
};

export default meta;
type Story = StoryObj<typeof AlertsPanel>;

const timestamp = new Date("2026-03-13T12:00:00");

const alertas: Alert[] = [
  {
    id: "1",
    level: "CRITICAL",
    message: "Temperatura acima do limite",
    component: "Sensor de Temperatura",
    timestamp,
    acknowledged: false,
  },
  {
    id: "2",
    level: "WARNING",
    message: "RPM abaixo do esperado",
    component: "Motor Principal",
    timestamp,
    acknowledged: false,
  },
  {
    id: "3",
    level: "INFO",
    message: "Manutenção preventiva próxima",
    component: "Sistema",
    timestamp,
    acknowledged: false,
  },
];

export const TodosOsNiveis: Story = {
  args: { alerts: alertas },
};

export const SomenteInfo: Story = {
  args: { alerts: alertas.filter((a) => a.level === "INFO") },
};

export const SomenteWarning: Story = {
  args: { alerts: alertas.filter((a) => a.level === "WARNING") },
};

export const SomenteCritico: Story = {
  args: { alerts: alertas.filter((a) => a.level === "CRITICAL") },
};
