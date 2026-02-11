import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { RadioButton } from "./RadioButton";

const meta: Meta<typeof RadioButton> = {
  title: "Components/RadioButton",
  component: RadioButton,
  args: { label: "Radio", backgroundColor: "transparent", disabled: false },
  argTypes: {
    label: { control: "text" },
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
