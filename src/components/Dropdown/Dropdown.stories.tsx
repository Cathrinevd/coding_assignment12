import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Dropdown } from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  args: {
    backgroundColor: "#ffffff",
    disabled: false,
    options: [
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
    ],
  },
  argTypes: {
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
