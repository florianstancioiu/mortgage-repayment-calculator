<script setup lang="ts">
const { monthlyRepayments, totalRepay } = defineProps<{
  monthlyRepayments: number | null;
  totalRepay: number | null;
}>();
</script>

<template>
  <h1 class="text-3xl font-bold underline">
    {{ monthlyRepayments }}
    {{ totalRepay }}
  </h1>
</template>
