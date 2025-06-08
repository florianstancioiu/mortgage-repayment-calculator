import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";

import YourResults from "./YourResults.vue";

describe("YourResults", () => {
  it("renders the right formatted numbers", () => {
    const wrapper = mount(YourResults, {
      props: {
        monthlyRepayments: 123456,
        totalRepay: 654321,
      },
    });

    expect(
      wrapper.find("div > div > div > div > p:nth-child(2)").text()
    ).toEqual("£123,456.00");
    expect(wrapper.find("div > div  p.text-2xl.font-extrabold").text()).toEqual(
      "£654,321.00"
    );
  });
});
