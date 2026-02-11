import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Label } from "./Label";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  args: { text: "Label", backgroundColor: "transparent", disabled: false },
  argTypes: {
    text: { control: "text" },
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {};
export const Disabled: Story = {
  args: { disabled: true, backgroundColor: "#bdbdbd" },
};
