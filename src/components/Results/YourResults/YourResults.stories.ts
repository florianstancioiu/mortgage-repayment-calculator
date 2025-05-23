import { type Meta } from "@storybook/vue3";
import YourResults from "./YourResults.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof YourResults> = {
  title: "Components/YourResults",
  component: YourResults,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    monthlyRepayments: { control: { type: "number" } },
    totalRepay: { control: { type: "number" } },
  },
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    monthlyRepayments: 1234,
    totalRepay: 1234,
  },
};
