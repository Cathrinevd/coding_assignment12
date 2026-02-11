import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  args: {
    title: "Card Title",
    body: "Card body text",
    backgroundColor: "#ffffff",
    disabled: false,
  },
  argTypes: {
    title: { control: "text" },
    body: { control: "text" },
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
