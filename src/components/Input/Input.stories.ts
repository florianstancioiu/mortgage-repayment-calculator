import { type Meta } from "@storybook/vue3";
import Input from "./Input.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: { control: { type: "text" } },
    prefix: { control: { type: "text" } },
    suffix: { control: { type: "text" } },
  },
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    title: "Lorem ipsum dolor sit amet",
  },
};

export const WithPrefix = {
  args: {
    title: "Lorem ipsum dolor sit amet",
    prefix: "prefix",
  },
};

export const WithSuffix = {
  args: {
    title: "Lorem ipsum dolor sit amet",
    suffix: "suffix",
  },
};

export const WithPrefixAndSuffix = {
  args: {
    title: "Lorem ipsum dolor sit amet",
    prefix: "prefix",
    suffix: "suffix",
  },
};
