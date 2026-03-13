import type { Meta, StoryObj } from "@storybook/react";
import RPMCard from "../components/cards/RPMCard";

const meta: Meta<typeof RPMCard> = {
  title: "Cards/RPMCard",
  component: RPMCard,
};

export default meta;
type Story = StoryObj<typeof RPMCard>;

export const Normal: Story = {
  args: { rpm: 1200, max: 1500, trend: "stable" },
};

export const Subindo: Story = {
  args: { rpm: 1400, max: 1500, trend: "up" },
};

export const Baixo: Story = {
  args: { rpm: 1050, max: 1500, trend: "down" },
};
