<script setup lang="ts">
import EmptyResults from "./EmptyResults/EmptyResults.vue";
import YourResults from "./YourResults/YourResults.vue";

const { monthlyRepayments, totalRepay } = defineProps<{
  monthlyRepayments: number;
  totalRepay: number;
}>();
</script>

<template>
  <aside
    class="bg-bg-secondary text-white lg:rounded-bl-[5rem] lg:overflow-hidden"
  >
    <YourResults
      v-if="!isNaN(monthlyRepayments) && !isNaN(totalRepay)"
      :totalRepay="totalRepay"
      :monthlyRepayments="monthlyRepayments"
    />
    <EmptyResults v-if="isNaN(monthlyRepayments) && isNaN(totalRepay)" />
  </aside>
</template>
