import { Meta } from "@storybook/vue3";
import Button from "./Button.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof Button> = {
  title: "Base/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: { control: { type: "select" }, options: ["small", "large"] },
    variant: { control: { type: "select" }, options: ["primary", "secondary"] },
  },
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    size: "large",
    variant: "primary",
    label: "Button",
  },
};

export const Secondary = {
  args: {
    size: "large",
    variant: "secondary",
    label: "Button",
  },
};

export const Large = {
  args: {
    size: "large",
    variant: "primary",
    label: "Button",
  },
};

export const Small = {
  args: {
    size: "small",
    variant: "primary",
    label: "Button",
  },
};
