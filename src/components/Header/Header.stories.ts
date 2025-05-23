import { type Meta } from "@storybook/vue3";
import Header from "./Header.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: { control: { type: "text" } },
  },
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    title: "Lorem Ipsmum dolor sit amet",
  },
};

export const Secondary = {
  args: {
    size: "large",
    variant: "secondary",
    label: "Button",
  },
};
