<script setup lang="ts">
import Header from "./components/Header/Header.vue";
import Input from "./components/Input/Input.vue";
import RadioInput from "./components/RadioInput/RadioInput.vue";
import Button from "./components/Button/Button.vue";
import IconCalculatorSVG from "./assets/svg/icon-calculator.svg";
import Results from "./components/Results/Results.vue";

const mortgageTypes = [
  {
    id: 1,
    title: "Repayment",
  },
  {
    id: 2,
    title: "Interest Only",
  },
];

const monthlyRepayments: number | null = 1797.74;
const totalRepay: number | null = 539322.94;
</script>

<template>
  <div>
    <main class="bg-white px-[1.5rem] pb-8">
      <Header title="Mortgage Calculator" />
      <Input title="Mortgage Amount" prefix="£" />
      <div>
        <Input title="Mortgage Term" suffix="years" />
        <Input title="Interest Rate" suffix="%" />
      </div>
      <RadioInput
        title="Mortgage Type"
        name="mortgage_type"
        :values="mortgageTypes"
      />
      <Button>
        <IconCalculatorSVG />
        <span>Calculate Repayments</span>
      </Button>
    </main>
    <Results
      :total-repay="totalRepay"
      :monthly-repayments="monthlyRepayments"
    />
  </div>
</template>
