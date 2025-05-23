import { mount } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";

import Button from "./Button.vue";

describe("Button", () => {
  it("renders the text", () => {
    const wrapper = mount(Button, {
      props: {
        label: "Click me!",
        onClick: () => {},
        disabled: false,
        variant: "primary",
        size: "large",
      },
    });
    expect(wrapper.find("button").text()).toBe("Click me!");
  });

  it("calls onClick when clicked", () => {
    const onClick = vi.fn();
    const wrapper = mount(Button, {
      props: {
        label: "Click me!",
        onClick,
        disabled: false,
        variant: "primary",
        size: "large",
      },
    });
    wrapper.find("button").trigger("click");
    expect(onClick).toHaveBeenCalled();
  });
});
