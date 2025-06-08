import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";

import Header from "./Header.vue";

describe("Header", () => {
  const titleText = "Lorem Ipsum dolor sit amet";

  it("renders the default title text", () => {
    const wrapper = mount(Header, {
      props: {
        title: titleText,
      },
    });

    expect(wrapper.find("a:first-child").text()).toBe(titleText);
  });

  it("emits clearAll when clicked on the second anchor", () => {
    const wrapper = mount(Header, {
      props: {
        title: titleText,
      },
    });

    wrapper.find("a:nth-child(2)").trigger("click");

    expect(wrapper.emitted()).toHaveProperty("clearAll");
  });
});
