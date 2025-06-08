import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";

import { type RadioInputValue } from "./RadioInput.vue";
import RadioInput from "./RadioInput.vue";

const firstValueTitle = "1 - Lorem ipsum dolor sit amet";
const secondValueTitle = "2 - John Doe";
const thirdValueTitle = "3 - Jane Doe";

const defaultRadioInputValues: RadioInputValue[] = [
  {
    id: 1,
    isChecked: false,
    title: firstValueTitle,
  },
  {
    id: 2,
    isChecked: true,
    title: secondValueTitle,
  },
  {
    id: 3,
    isChecked: false,
    title: thirdValueTitle,
  },
];

describe("RadioInput", () => {
  const titleText = "Lorem Ipsum dolor sit amet";

  it("renders all the titles for all the values", () => {
    const wrapper = mount(RadioInput, {
      props: {
        title: titleText,
        name: "lorem_ipsum",
        values: defaultRadioInputValues,
      },
    });

    // I need to add a position to the index of nth-child
    // because I'm using a label to display the main title
    // so the nth-child position is increased everywhere by 1
    expect(wrapper.find("div > label:nth-child(2) > p").text()).toBe(
      firstValueTitle
    );
    expect(wrapper.find("div > label:nth-child(3) > p").text()).toBe(
      secondValueTitle
    );
    expect(wrapper.find("div > label:nth-child(4) > p").text()).toBe(
      thirdValueTitle
    );
  });

  it("renders the correct checked state of a component instance", () => {
    const wrapper = mount(RadioInput, {
      props: {
        title: titleText,
        name: "lorem_ipsum",
        values: defaultRadioInputValues,
      },
    });

    const firstInput = wrapper.find("div > label:nth-child(2) > input")
      .element as HTMLInputElement;
    const secondInput = wrapper.find("div > label:nth-child(3) > input")
      .element as HTMLInputElement;
    const thirdInput = wrapper.find("div > label:nth-child(4) > input")
      .element as HTMLInputElement;

    expect(firstInput.checked).toBe(false);
    expect(secondInput.checked).toBe(true);
    expect(thirdInput.checked).toBe(false);
  });

  it("emits inputClick when clicking on a radio input", () => {
    const wrapper = mount(RadioInput, {
      props: {
        title: titleText,
        name: "lorem_ipsum",
        values: defaultRadioInputValues,
      },
    });

    const firstInput = wrapper.find("div > label:nth-child(2)");
    firstInput.trigger("click");

    expect(wrapper.emitted()).toHaveProperty("inputClick");
    expect(wrapper.emitted().inputClick[0]).toEqual([
      defaultRadioInputValues[0],
    ]);
  });
});
