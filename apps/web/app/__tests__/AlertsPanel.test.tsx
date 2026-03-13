import { render, screen } from "@testing-library/react";
import AlertsPanel from "../components/alerts/AlertsPanel";
import { Alert } from "@repo/types";

const mockAlerts: Alert[] = [
  {
    id: "1",
    level: "CRITICAL",
    message: "Temperatura acima do limite",
    component: "Sensor",
    timestamp: new Date(),
    acknowledged: false,
  },
  {
    id: "2",
    level: "WARNING",
    message: "RPM abaixo do esperado",
    component: "Motor",
    timestamp: new Date(),
    acknowledged: false,
  },
  {
    id: "3",
    level: "INFO",
    message: "Manutenção preventiva próxima",
    component: "Sistema",
    timestamp: new Date(),
    acknowledged: false,
  },
];

describe("AlertsPanel", () => {
  it("exibe todos os alertas", () => {
    render(<AlertsPanel alerts={mockAlerts} />);
    expect(screen.getByText("Temperatura acima do limite")).toBeInTheDocument();
    expect(screen.getByText("RPM abaixo do esperado")).toBeInTheDocument();
    expect(
      screen.getByText("Manutenção preventiva próxima"),
    ).toBeInTheDocument();
  });

  it("exibe alerta crítico primeiro", () => {
    render(<AlertsPanel alerts={mockAlerts} />);
    const alertas = screen.getAllByRole("alert");
    expect(alertas[0]).toHaveAttribute(
      "aria-label",
      expect.stringContaining("Crítico"),
    );
  });
});
