import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  args: { text: "Some text", backgroundColor: "transparent", disabled: false },
  argTypes: {
    text: { control: "text" },
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true, backgroundColor: "#bdbdbd" } };
