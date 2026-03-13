import type { Meta, StoryObj } from "@storybook/react";
import TemperatureCard from "../components/cards/TemperatureCard";

const meta: Meta<typeof TemperatureCard> = {
  title: "Cards/TemperatureCard",
  component: TemperatureCard,
};

export default meta;
type Story = StoryObj<typeof TemperatureCard>;

export const Normal: Story = {
  args: { temperature: 72, max: 85, trend: "stable" },
};

export const Subindo: Story = {
  args: { temperature: 80, max: 85, trend: "up" },
};

export const Critica: Story = {
  args: { temperature: 88, max: 85, trend: "up" },
};

export const Baixa: Story = {
  args: { temperature: 65, max: 85, trend: "down" },
};
