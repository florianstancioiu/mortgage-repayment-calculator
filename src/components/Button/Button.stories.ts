import { type Meta } from "@storybook/vue3";
import Button from "./Button.vue";
import IconCalculatorSVG from "../../assets/svg/icon-calculator.svg";

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
  render: () => ({
    components: { Button },
    template: "<Button>Lorem ipsum dolor sit amet</Button>",
  }),
};

export const Secondary = {
  render: () => ({
    components: { Button },
    template: "<Button>Secondary text</Button>",
  }),
};

export const WithSvgIcon = {
  render: () => ({
    components: { Button, IconCalculatorSVG },
    template:
      "<Button><IconCalculatorSVG /> <span>Calculate Repayments</span></Button>",
  }),
};
