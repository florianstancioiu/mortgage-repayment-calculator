import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";

import Results from "./Results.vue";

describe("Results", () => {
  it("renders the right section for NaN values", () => {
    const wrapper = mount(Results, {
      props: {
        monthlyRepayments: NaN,
        totalRepay: NaN,
      },
    });

    expect(wrapper.find(".empty-results-container").exists()).toBe(true);
    expect(wrapper.find(".your-results-container").exists()).toBe(false);
  });

  it("renders the right section for non-NaN values", () => {
    const wrapper = mount(Results, {
      props: {
        monthlyRepayments: 12345,
        totalRepay: 12345,
      },
    });

    expect(wrapper.find(".empty-results-container").exists()).toBe(false);
    expect(wrapper.find(".your-results-container").exists()).toBe(true);
  });
});
