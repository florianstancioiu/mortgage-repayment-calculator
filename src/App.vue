<script setup lang="ts">
import Header from "./components/Header/Header.vue";
import Input from "./components/Input/Input.vue";
import RadioInput from "./components/RadioInput/RadioInput.vue";
import Button from "./components/Button/Button.vue";
import IconCalculatorSVG from "./assets/svg/icon-calculator.svg";
import Results from "./components/Results/Results.vue";
import { type RadioInputValue } from "./components/RadioInput/RadioInput.vue";
import { type InputOptions } from "./components/Input/Input.vue";
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

const initialInputOptions: InputOptions = {
  currentValue: "",
  active: false,
  error: false,
};

const mortgageTypes = ref<RadioInputValue[]>(initialMortgageTypes);
const monthlyRepayments = ref<number>(NaN); // 1797.74;
const totalRepay = ref<number>(NaN); // 539322.94;

const mortgageAmount = ref<InputOptions>({
  currentValue: "", // 300000,
  active: false,
  error: false,
});
const mortgageTerm = ref<InputOptions>({
  currentValue: "", // 25,
  active: false,
  error: false,
});
const interestRate = ref<InputOptions>({
  currentValue: "", // 5.25,
  active: false,
  error: false,
});

const onChangeInput = ({ value, title }: { value: string; title: string }) => {
  switch (title) {
    case "Mortgage Amount":
      mortgageAmount.value.currentValue = value;
      break;
    case "Mortgage Term":
      mortgageTerm.value.currentValue = value;
      break;
    case "Interest Rate":
      interestRate.value.currentValue = value;
      break;
  }
};

const onFocusInput = ({ value, title }: { value: boolean; title: string }) => {
  switch (title) {
    case "Mortgage Amount":
      mortgageAmount.value.active = value;
      break;
    case "Mortgage Term":
      mortgageTerm.value.active = value;
      break;
    case "Interest Rate":
      interestRate.value.active = value;
      break;
  }
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
  mortgageAmount.value = Object.assign({}, initialInputOptions);
  mortgageTerm.value = Object.assign({}, initialInputOptions);
  interestRate.value = Object.assign({}, initialInputOptions);
  mortgageTypes.value = initialMortgageTypes;
};

const calculateMortgage = () => {
  const type = mortgageTypes.value.find((mType) => mType.isChecked === true);
  const refsToValidate = [mortgageAmount, mortgageTerm, interestRate];

  refsToValidate.forEach((ref, index) => {
    if (
      isNaN(+ref.value.currentValue) ||
      +ref.value.currentValue < 0 ||
      (index !== 2 && +ref.value.currentValue === 0) ||
      (index === 2 && ref.value.currentValue === "")
    ) {
      ref.value.error = true;
    } else {
      ref.value.error = false;
    }
  });

  if (refsToValidate.find((ref) => ref.value.error === true)) {
    return;
  }

  switch (type?.title) {
    case initialMortgageTypes[0].title: {
      calculateRepayment();
      break;
    }
    case initialMortgageTypes[1].title: {
      calculateInterestOnly();
      break;
    }
  }
};

const calculateRepayment = () => {
  const P = +mortgageAmount.value.currentValue;
  const r = +interestRate.value.currentValue / 12 / 100;
  const N = +mortgageTerm.value.currentValue * 12;

  if (r === 0) {
    monthlyRepayments.value = P / N;
    totalRepay.value = (P / N) * N;
  } else {
    monthlyRepayments.value =
      P * ((r * Math.pow(1 + r, N)) / (Math.pow(1 + r, N) - 1));
    totalRepay.value = monthlyRepayments.value * N;
  }
};

const calculateInterestOnly = () => {
  const P = +mortgageAmount.value.currentValue;
  const r = +interestRate.value.currentValue / 12 / 100;
  const N = +mortgageTerm.value.currentValue * 12;

  monthlyRepayments.value = P * r;
  totalRepay.value = P * r * N;
};
</script>

<template>
  <div
    class="lg:w-[63.125rem] lg:grid lg:grid-cols-2 lg:rounded-2xl lg:overflow-hidden lg:bg-white"
  >
    <main class="bg-white px-[1.5rem] pb-8 lg:px-[2.5rem]">
      <Header title="Mortgage Calculator" @clear-all="onClearAllHandler" />
      <Input
        :options="mortgageAmount"
        @input-change="onChangeInput"
        @input-focus="onFocusInput"
        title="Mortgage Amount"
        prefix="£"
      />
      <div class="lg:grid lg:grid-cols-2 lg:gap-x-[1.375rem]">
        <Input
          :options="mortgageTerm"
          @input-change="onChangeInput"
          @input-focus="onFocusInput"
          title="Mortgage Term"
          suffix="years"
        />
        <Input
          :options="interestRate"
          @input-change="onChangeInput"
          @input-focus="onFocusInput"
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
      <Button @click="calculateMortgage">
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
