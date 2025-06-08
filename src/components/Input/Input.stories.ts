import { type Meta } from "@storybook/vue3";
import Input from "./Input.vue";
import { type InputOptions } from "./Input.vue";

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
    options: { control: { type: "object" } },
    suffix: { control: { type: "text" } },
  },
};

const defaultInputOptions: InputOptions = {
  currentValue: "Lorem Ipsum",
  error: false,
  active: false,
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    title: "Input title",
    options: defaultInputOptions,
  },
};

export const WithPrefix = {
  args: {
    title: "Input title",
    prefix: "prefix",
    options: defaultInputOptions,
  },
};

export const WithSuffix = {
  args: {
    title: "Input title",
    suffix: "suffix",
    options: defaultInputOptions,
  },
};

export const WithPrefixAndSuffix = {
  args: {
    title: "Input title",
    prefix: "prefix",
    suffix: "suffix",
    options: defaultInputOptions,
  },
};
