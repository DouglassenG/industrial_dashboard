import type { Meta, StoryObj } from "@storybook/react";
import MetricsChart from "../components/charts/MetricsChart";
import type { MetricHistory } from "@repo/types";

const meta: Meta<typeof MetricsChart> = {
  title: "Charts/MetricsChart",
  component: MetricsChart,
};

export default meta;
type Story = StoryObj<typeof MetricsChart>;

const timestamp = new Date("2026-03-13T12:00:00");

const historicoMock: MetricHistory[] = [
  {
    timestamp: new Date("2026-03-13T12:00:00"),
    temperature: 72,
    rpm: 1200,
    efficiency: 91,
  },
  {
    timestamp: new Date("2026-03-13T12:00:03"),
    temperature: 74,
    rpm: 1250,
    efficiency: 92,
  },
  {
    timestamp: new Date("2026-03-13T12:00:06"),
    temperature: 76,
    rpm: 1180,
    efficiency: 90,
  },
  {
    timestamp: new Date("2026-03-13T12:00:09"),
    temperature: 78,
    rpm: 1300,
    efficiency: 93,
  },
  {
    timestamp: new Date("2026-03-13T12:00:12"),
    temperature: 80,
    rpm: 1220,
    efficiency: 94,
  },
  {
    timestamp: new Date("2026-03-13T12:00:15"),
    temperature: 82,
    rpm: 1150,
    efficiency: 89,
  },
  {
    timestamp: new Date("2026-03-13T12:00:18"),
    temperature: 79,
    rpm: 1280,
    efficiency: 92,
  },
  {
    timestamp: new Date("2026-03-13T12:00:21"),
    temperature: 75,
    rpm: 1200,
    efficiency: 91,
  },
];

export const HistoricoNormal: Story = {
  args: { history: historicoMock },
};

export const TemperaturaAlta: Story = {
  args: {
    history: historicoMock.map((h) => ({
      ...h,
      temperature: h.temperature + 10,
    })),
  },
};

export const RPMBaixo: Story = {
  args: {
    history: historicoMock.map((h) => ({
      ...h,
      rpm: h.rpm - 200,
    })),
  },
};

export const SemDados: Story = {
  args: { history: [] },
};

// Salve com `Ctrl + S`.

// ---

// ## O Storybook vai atualizar automaticamente

// Verifique no navegador em:
// ```
// http://localhost:6006
// ```

// No menu lateral deve aparecer:
// ```
// Charts/
//   └── MetricsChart
//         ├── HistoricoNormal
//         ├── TemperaturaAlta
//         ├── RPMBaixo
//         └── SemDados
