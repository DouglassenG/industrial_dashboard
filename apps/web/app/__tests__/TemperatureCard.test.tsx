import { render, screen } from "@testing-library/react";
import TemperatureCard from "../components/cards/TemperatureCard";
import "@testing-library/jest-dom";

describe("TemperatureCard", () => {
  it("exibe a temperatura atual", () => {
    render(<TemperatureCard temperature={78} max={85} trend="up" />);
    expect(screen.getByText("78°C")).toBeInTheDocument();
  });

  it("exibe o valor máximo", () => {
    render(<TemperatureCard temperature={78} max={85} trend="up" />);
    expect(screen.getByText("Máx: 85°C")).toBeInTheDocument();
  });

  it("exibe indicador de tendência para cima", () => {
    render(<TemperatureCard temperature={78} max={85} trend="up" />);
    expect(screen.getByText("▲")).toBeInTheDocument();
  });
});
