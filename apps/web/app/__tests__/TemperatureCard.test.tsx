import { render, screen } from "@testing-library/react";
import TemperatureCard from "../components/cards/TemperatureCard";

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
    expect(screen.getByLabelText("Subindo")).toBeInTheDocument();
  });

  it("exibe indicador de tendência para baixo", () => {
    render(<TemperatureCard temperature={78} max={85} trend="down" />);
    expect(screen.getByLabelText("Descendo")).toBeInTheDocument();
  });

  it("aplica fundo vermelho quando temperatura ultrapassa o máximo", () => {
    const { container } = render(
      <TemperatureCard temperature={86} max={85} trend="up" />,
    );
    expect(container.firstChild).toHaveClass("bg-red-50");
  });
});
