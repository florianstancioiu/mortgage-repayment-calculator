import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";

import { type InputOptions } from "./Input.vue";
import Input from "./Input.vue";

const defaultInputOptions: InputOptions = {
  currentValue: "Lorem Ipsum",
  error: false,
  active: false,
};

describe("Input", () => {
  const titleText = "Lorem Ipsum dolor sit amet";

  it("renders the default title text", () => {
    const wrapper = mount(Input, {
      props: {
        title: titleText,
        options: defaultInputOptions,
      },
    });

    expect(wrapper.find("label").text()).toBe(titleText);
  });

  it("renders the suffix text", () => {
    const wrapper = mount(Input, {
      props: {
        title: titleText,
        options: defaultInputOptions,
        suffix: "suffix",
      },
    });

    expect(wrapper.find("div > div > p.right-0").text()).toBe("suffix");
  });

  it("renders the prefix text", () => {
    const wrapper = mount(Input, {
      props: {
        title: titleText,
        options: defaultInputOptions,
        prefix: "prefix",
      },
    });

    expect(wrapper.find("div > div > p.left-0").text()).toBe("prefix");
  });

  it("renders the prefix and suffix texts", () => {
    const wrapper = mount(Input, {
      props: {
        title: titleText,
        options: defaultInputOptions,
        prefix: "prefix",
        suffix: "suffix",
      },
    });

    expect(wrapper.find("div > div > p.left-0").text()).toBe("prefix");
    expect(wrapper.find("div > div > p.right-0").text()).toBe("suffix");
  });

  it("renders the error text when in error", () => {
    const wrapper = mount(Input, {
      props: {
        title: titleText,
        options: { ...defaultInputOptions, error: true },
      },
    });

    expect(wrapper.find("div > p.text-error").text()).toEqual(
      "This field is required and it must be a positive number"
    );
  });

  it("emits inputChange when changing the text of the input", () => {
    const wrapper = mount(Input, {
      props: {
        title: titleText,
        options: defaultInputOptions,
      },
    });

    const inputValue = "Testing the input value string";

    const input = wrapper.find("input");
    // this is necessary so that the value of the input is changed
    input.element.value = inputValue;
    input.trigger("input", { key: inputValue });

    expect(wrapper.emitted()).toHaveProperty("inputChange");
    expect(wrapper.emitted().inputChange[0]).toEqual([
      { title: titleText, value: inputValue },
    ]);
    expect(input.element.value).toEqual(inputValue);
  });

  it("emits inputFocus with true when focusing on the input", () => {
    const wrapper = mount(Input, {
      props: {
        title: titleText,
        options: defaultInputOptions,
      },
    });

    wrapper.find("input").trigger("focus");

    expect(wrapper.emitted()).toHaveProperty("inputFocus");
    expect(wrapper.emitted().inputFocus[0]).toEqual([
      {
        title: titleText,
        value: true,
      },
    ]);
  });

  it("emits inputFocus with false when blurring away from the input", () => {
    const wrapper = mount(Input, {
      props: {
        title: titleText,
        options: defaultInputOptions,
      },
    });

    wrapper.find("input").trigger("blur");

    expect(wrapper.emitted()).toHaveProperty("inputFocus");
    expect(wrapper.emitted().inputFocus[0]).toEqual([
      {
        title: titleText,
        value: false,
      },
    ]);
  });
});
