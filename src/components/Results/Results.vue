<script setup lang="ts">
import EmptyResults from "./EmptyResults/EmptyResults.vue";
import YourResults from "./YourResults/YourResults.vue";

const { monthlyRepayments, totalRepay } = defineProps<{
  monthlyRepayments: number | null;
  totalRepay: number | null;
}>();
</script>

<template>
  <aside class="bg-bg-secondary text-white">
    <YourResults
      v-if="monthlyRepayments && totalRepay"
      :totalRepay="totalRepay"
      :monthlyRepayments="monthlyRepayments"
    />
    <EmptyResults v-if="!monthlyRepayments" />
  </aside>
</template>
