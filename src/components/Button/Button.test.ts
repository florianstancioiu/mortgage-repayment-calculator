import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";

import Button from "./Button.vue";

describe("Button", () => {
  const btnText = "Lorem Ipsum dolor sit amet";

  it("renders the default slot text", () => {
    const wrapper = mount(Button, {
      props: {},
      slots: {
        default: btnText,
      },
    });
    expect(wrapper.find("button").text()).toBe(btnText);
  });
});
