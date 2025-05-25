<script setup lang="ts">
export type RadioInputValue = {
  id: number;
  isChecked: boolean;
  title: string;
};

const emit = defineEmits(["inputClick"]);

const { title, name, values } = defineProps<{
  title: string;
  name: string;
  values: RadioInputValue[];
}>();
</script>

<template>
  <div class="mb-[1.875rem]">
    <label class="text-secondary mb-4 inline-block">{{ title }}</label>
    <label
      v-for="val in values"
      class="mb-[0.625rem] pl-[1.125rem] w-full flex items-center gap-x-[1.25rem] border-secondary border-[0.063rem] relative rounded-[0.25rem] h-[3.125rem]"
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
