import { type Meta } from "@storybook/vue3";
import RadioInput from "./RadioInput.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof RadioInput> = {
  title: "Components/RadioInput",
  component: RadioInput,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: { control: { type: "text" } },
    name: { control: { type: "text" } },
    values: { control: { type: "select" } },
  },
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    title: "Lorem Ipsum dolor sit amet",
    name: "lorem_ipsum_dolor_sit_amet",
    values: [
      {
        id: 1,
        title: "Repayment",
        isChecked: true,
      },
      {
        id: 2,
        title: "Interest Only",
        isChecked: false,
      },
    ],
  },
};
