<script setup lang="ts">
import { ref } from "vue";

defineProps<{ title: string }>();
</script>

<template>
  <header>
    <div class="fm:flex fm:justify-between fm:items-center">
      <h1 class="text-3xl font-bold underline">
        {{ title }}
      </h1>
      <p class="cursor-pointer">Clear All</p>
    </div>
  </header>
</template>
