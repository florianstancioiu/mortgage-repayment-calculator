<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<template>
  <header class="mb-[2.375rem]">
    <div class="fm:flex fm:justify-between fm:items-center pt-[2.75rem]">
      <a href="#" class="text-2xl font-bold mb-[1.5rem] block">
        {{ title }}
      </a>
      <a href="#" class="text-secondary cursor-pointer underline inline-block">
        Clear All
      </a>
    </div>
  </header>
</template>
