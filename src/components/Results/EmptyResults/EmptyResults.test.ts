import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";

import EmptyResults from "./EmptyResults.vue";

describe("EmptyResults", () => {
  const text1 = "Results shown here";
  const text2 =
    "Complete the form and click “calculate repayments” to see what your monthly repayments would be.";

  it("renders the default text", () => {
    const wrapper = mount(EmptyResults, {
      props: {},
    });

    // I don't know why but it seems that a new p element is created before the existing p elements in the DOM - probably regarding the svg
    expect(wrapper.find("div > div > p:nth-child(2)").text()).toEqual(text1);
    expect(wrapper.find("div > div > p:nth-child(3)").text()).toEqual(text2);
  });
});
