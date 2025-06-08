<script setup lang="ts">
import { ref, watch } from "vue";

export type InputOptions = {
  currentValue: number | string;
  error: boolean;
  active: boolean;
};

const props = defineProps<{
  title: string;
  options: InputOptions;
  prefix?: string;
  suffix?: string;
}>();

const { title, options } = props;
const { currentValue, error, active } = options;

const inputValue = ref(currentValue);
const isActive = ref(active);
const isError = ref(error);

const emit = defineEmits(["inputChange", "inputFocus"]);

const titleId = title.toLowerCase().replace(" ", "_");

const onInputHandler = (event: Event) => {
  if (event.target) {
    const element = event.target as HTMLInputElement;

    emit("inputChange", { title: title, value: element.value });
  }
};

const onFocusHandler = () => {
  emit("inputFocus", {
    title: title,
    value: true,
  });
};

const onBlurHandler = () => {
  emit("inputFocus", {
    title: title,
    value: false,
  });
};

watch(
  () => props.options.currentValue,
  (newValue) => {
    inputValue.value = newValue;
  }
);

watch(
  () => props.options.active,
  (newValue) => {
    isActive.value = newValue;
  }
);

watch(
  () => props.options.error,
  (newValue) => {
    isError.value = newValue;
  }
);
</script>

<template>
  <div class="mb-[1.875rem]">
    <label
      :for="titleId"
      class="text-secondary mb-4 inline-block cursor-pointer"
      >{{ title }}</label
    >
    <div
      :class="`${isActive ? 'border-bg-cta' : 'border-secondary'}
      ${isError ? 'border-error' : ''}      
     w-full border-[0.063rem] relative focus:border-bg-cta rounded-[0.25rem] h-[3.125rem]`"
    >
      <p
        v-if="prefix"
        :class="`${isActive ? 'bg-bg-cta' : 'bg-bg-primary'} 
        ${isError ? 'bg-error text-white' : ''}
       select-none absolute left-0 top-0 h-[3rem] grid place-items-center px-4`"
      >
        {{ prefix }}
      </p>
      <input
        :id="titleId"
        :value="inputValue"
        @focus="onFocusHandler"
        @blur="onBlurHandler"
        @input="onInputHandler"
        :class="`${prefix ? 'pl-12 pr-3' : 'pl-3'} ${
          suffix ? 'pr-20 pl-3' : 'pr-3'
        } h-[3rem] w-full focus:outline-bg-cta focus:border-bg-cta`"
        type="text"
      />
      <p
        v-if="suffix"
        :class="`${isActive ? 'bg-bg-cta' : 'bg-bg-primary'}
        ${isError ? 'bg-error text-white' : ''}
       select-none absolute right-0 top-0 h-[3rem] grid place-items-center px-4`"
      >
        {{ suffix }}
      </p>
    </div>
    <p v-if="isError" class="text-error mt-4 text-[0.75rem]">
      This field is required and it must be a positive number
    </p>
  </div>
</template>
