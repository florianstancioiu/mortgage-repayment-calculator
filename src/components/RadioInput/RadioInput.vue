<script setup lang="ts">
const { title, name, values } = defineProps<{
  title: string;
  name: string;
  values: { id: number; title: string }[];
}>();
</script>

<template>
  <div class="mb-[1.875rem]">
    <label class="text-secondary mb-4 inline-block">{{ title }}</label>
    <div
      v-for="val in values"
      class="mb-[0.625rem] pl-[1.125rem] w-full flex items-center gap-x-[1.25rem] border-secondary border-[0.063rem] relative rounded-[0.25rem] h-[3.125rem]"
    >
      <input
        :id="val.title.toLowerCase().replace(' ', '_')"
        :name="name"
        class=""
        type="radio"
      />
      <label
        class="text-primary"
        :for="val.title.toLowerCase().replace(' ', '_')"
        >{{ val.title }}</label
      >
    </div>
  </div>
</template>
