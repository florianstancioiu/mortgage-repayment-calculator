<script setup lang="ts">
const { monthlyRepayments, totalRepay } = defineProps<{
  monthlyRepayments: number;
  totalRepay: number;
}>();
</script>

<template>
  <div class="bg-bg-secondary pb-[2.25rem] px-[1.5rem] text-white">
    <p class="pt-[2.75rem] mb-[1.875rem] text-2xl font-bold">Your results</p>
    <p class="opacity-50 mb-[1.75rem]">
      Your results are shown below based on the information you provided. To
      adjust the results, edit the form and click “calculate repayments” again.
    </p>
    <div class="rounded-[0.5rem] overflow-hidden">
      <div class="bg-bg-cta rounded-[0.25rem] left-0 w-full h-2"></div>
      <div
        class="bg-bg-ternary rounded-[0.25rem] mt-[-0.25rem] py-[1.75rem] px-4"
      >
        <div class="mb-[1.5rem] border-b-[0.063rem] border-border-primary">
          <p class="opacity-50 mb-[1.5rem]">Your monthly repayments</p>
          <p class="text-bg-cta pb-[1.5rem] text-5xl font-extrabold">
            £{{ monthlyRepayments }}
          </p>
        </div>
        <p class="opacity-50 mb-[1.5rem]">Total you'll repay over the term</p>
        <p class="text-2xl font-extrabold">£{{ totalRepay }}</p>
      </div>
    </div>
  </div>
</template>
