<script setup lang="ts">
const { title } = defineProps<{
  title: string;
  prefix?: string;
  suffix?: string;
}>();

const titleId = title.toLowerCase().replace(" ", "_");
</script>

<template>
  <div class="mb-[1.875rem]">
    <label :for="titleId" class="text-secondary mb-4 inline-block">{{
      title
    }}</label>
    <div
      class="w-full border-secondary border-[0.063rem] relative rounded-[0.25rem] h-[3.125rem]"
    >
      <p
        v-if="prefix"
        class="bg-bg-primary select-none absolute left-0 top-0 h-[3rem] grid place-items-center px-4"
      >
        {{ prefix }}
      </p>
      <input
        :id="titleId"
        :class="`${prefix ? 'pl-12 pr-3' : ''} ${
          suffix ? 'pr-20 pl-3' : ''
        } h-[3rem] w-full`"
        type="text"
      />
      <p
        v-if="suffix"
        class="bg-bg-primary select-none absolute right-0 top-0 h-[3rem] grid place-items-center px-4"
      >
        {{ suffix }}
      </p>
    </div>
  </div>
</template>
