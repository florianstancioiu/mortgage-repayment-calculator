import { type Meta } from "@storybook/vue3";
import EmptyResults from "./EmptyResults.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof EmptyResults> = {
  title: "Components/EmptyResults",
  component: EmptyResults,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {};
