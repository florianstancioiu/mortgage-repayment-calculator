<script setup lang="ts">
const { monthlyRepayments, totalRepay } = defineProps<{
  monthlyRepayments: number;
  totalRepay: number;
}>();
</script>

<template>
  <h1 class="text-3xl font-bold underline">
    {{ monthlyRepayments }}
    {{ totalRepay }}
  </h1>
</template>
