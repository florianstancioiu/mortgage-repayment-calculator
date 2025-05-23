import { type Meta } from "@storybook/vue3";
import Button from "./Button.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  decorators: [() => ({ template: "<Button>Lorem dolor sit amet</Button>" })],
};

export const Secondary = {
  decorators: [() => ({ template: "<Button>Secondary text</Button>" })],
};
