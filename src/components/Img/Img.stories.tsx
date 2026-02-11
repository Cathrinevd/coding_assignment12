import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Img } from "./Img";

const meta: Meta<typeof Img> = {
  title: "Components/Img",
  component: Img,
  args: {
    src: "https://via.placeholder.com/480x220",
    alt: "image",
    backgroundColor: "transparent",
    disabled: false,
  },
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Img>;

export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
