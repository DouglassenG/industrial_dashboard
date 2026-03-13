import type { Meta, StoryObj } from "@storybook/react";
import MachineStateCard from "../components/cards/MachineStateCard";

const meta: Meta<typeof MachineStateCard> = {
  title: "Cards/MachineStateCard",
  component: MachineStateCard,
};

export default meta;
type Story = StoryObj<typeof MachineStateCard>;

export const Ligada: Story = {
  args: { state: "RUNNING" },
};

export const Desligada: Story = {
  args: { state: "STOPPED" },
};

export const EmManutencao: Story = {
  args: { state: "MAINTENANCE" },
};

export const Erro: Story = {
  args: { state: "ERROR" },
};
