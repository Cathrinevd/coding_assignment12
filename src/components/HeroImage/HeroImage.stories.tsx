import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { HeroImage } from "./HeroImage";

const meta: Meta<typeof HeroImage> = {
  title: "Components/HeroImage",
  component: HeroImage,
  args: {
    title: "Hero Title",
    subtitle: "Hero subtitle text",
    backgroundColor: "#2d6cdf",
    disabled: false,
  },
  argTypes: {
    title: { control: "text" },
    subtitle: { control: "text" },
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
