<script setup lang="ts">
import { watch, ref } from "vue";

export type RadioInputValue = {
  id: number;
  isChecked: boolean;
  title: string;
};

const emit = defineEmits(["inputClick"]);

const props = defineProps<{
  title: string;
  name: string;
  values: RadioInputValue[];
}>();

const { title, name, values } = props;

const inputValues = ref(values);

watch(
  () => props.values,
  (newVals) => {
    inputValues.value = newVals;
  }
);
</script>

<template>
  <div class="mb-[1.875rem]">
    <label class="text-secondary mb-4 inline-block">{{ title }}</label>
    <label
      v-for="val in inputValues"
      :class="`${
        val.isChecked ? 'bg-bg-radio-input border-bg-cta' : 'border-secondary'
      } mb-[0.625rem] pl-[1.125rem] w-full flex items-center gap-x-[1.25rem]  border-[0.063rem] relative rounded-[0.25rem] h-[3.125rem]`"
    >
      <input
        :id="val.title.toLowerCase().replace(' ', '_')"
        :name="name"
        :checked="val.isChecked"
        @click="() => emit('inputClick', val)"
        class="cursor-pointer"
        type="radio"
      />
      <p
        class="text-primary cursor-pointer"
        :for="val.title.toLowerCase().replace(' ', '_')"
      >
        {{ val.title }}
      </p>
    </label>
  </div>
</template>
