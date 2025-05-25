<script setup lang="ts">
import Header from "./components/Header/Header.vue";
import Input from "./components/Input/Input.vue";
import RadioInput from "./components/RadioInput/RadioInput.vue";
import Button from "./components/Button/Button.vue";
import IconCalculatorSVG from "./assets/svg/icon-calculator.svg";
import Results from "./components/Results/Results.vue";
import { type RadioInputValue } from "./components/RadioInput/RadioInput.vue";
import { ref } from "vue";

const initialMortgageTypes = [
  {
    id: 1,
    title: "Repayment",
    isChecked: true,
  },
  {
    id: 2,
    title: "Interest Only",
    isChecked: false,
  },
];

const mortgageTypes = ref<RadioInputValue[]>(initialMortgageTypes);
const monthlyRepayments: number | null = null; // 1797.74;
const totalRepay: number | null = null; // 539322.94;
const mortgageAmount = ref<number | null>(null);
const mortgageTerm = ref<number | null>(null);
const interestRate = ref<number | null>(null);

const onChangeMortgageAmountHandler = (value: number) => {
  mortgageAmount.value = value;
};

const onChangeMortgageTermHandler = (value: number) => {
  mortgageTerm.value = value;
};

const onChangeInterestRateHandler = (value: number) => {
  interestRate.value = value;
};

const onClickMortgageTypeHandler = (value: RadioInputValue) => {
  mortgageTypes.value = mortgageTypes.value
    .map((type) => ({ ...type, isChecked: false }))
    .map((type) => {
      if (type.id === value.id) {
        return { ...type, isChecked: true };
      }

      return type;
    });
};

const onClearAllHandler = () => {
  mortgageAmount.value = null;
  mortgageTerm.value = null;
  interestRate.value = null;
  mortgageTypes.value = initialMortgageTypes;
};
</script>

<template>
  <div
    class="lg:w-[63.125rem] lg:grid lg:grid-cols-2 lg:rounded-2xl lg:overflow-hidden lg:bg-white"
  >
    <main class="bg-white px-[1.5rem] pb-8 lg:px-[2.5rem]">
      <Header title="Mortgage Calculator" @clear-all="onClearAllHandler" />
      <Input
        :value="mortgageAmount"
        @input-change="onChangeMortgageAmountHandler"
        title="Mortgage Amount"
        prefix="£"
      />
      <div class="lg:grid lg:grid-cols-2 lg:gap-x-[1.375rem]">
        <Input
          :value="mortgageTerm"
          @input-change="onChangeMortgageTermHandler"
          title="Mortgage Term"
          suffix="years"
        />
        <Input
          :value="interestRate"
          @input-change="onChangeInterestRateHandler"
          title="Interest Rate"
          suffix="%"
        />
      </div>
      <RadioInput
        title="Mortgage Type"
        name="mortgage_type"
        @input-click="onClickMortgageTypeHandler"
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
