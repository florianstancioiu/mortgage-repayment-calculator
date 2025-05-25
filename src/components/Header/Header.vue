<script setup lang="ts">
defineProps<{ title: string }>();

const emit = defineEmits(["clearAll"]);

const onClickClearAllHandler = (event: Event) => {
  event.preventDefault;
  emit("clearAll");
};
</script>

<template>
  <header class="mb-[2.375rem]">
    <div class="lg:flex lg:justify-between lg:items-center pt-[2.75rem]">
      <a href="#" class="lg:mb-0 text-2xl font-bold mb-[1.5rem] block">
        {{ title }}
      </a>
      <a
        href="#"
        class="text-secondary cursor-pointer underline inline-block"
        @click="(event) => onClickClearAllHandler(event)"
      >
        Clear All
      </a>
    </div>
  </header>
</template>
