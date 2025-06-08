import { type Meta } from "@storybook/vue3";
import App from "./App.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof App> = {
  title: "Pages/Index",
  component: App,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {},
};
