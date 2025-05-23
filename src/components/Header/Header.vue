<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<template>
  <header class="mb-[2.375rem]">
    <div class="fm:flex fm:justify-between fm:items-center pt-[2.75rem]">
      <h1 class="text-2xl font-bold mb-[1.5rem]">
        {{ title }}
      </h1>
      <p class="text-secondary cursor-pointer underline inline-block">
        Clear All
      </p>
    </div>
  </header>
</template>
