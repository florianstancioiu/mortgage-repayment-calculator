<script setup lang="ts">
import EmptyIllustrationSVG from "../../../assets/svg/illustration-empty.svg";
</script>

<template>
  <div class="lg:h-full lg:grid lg:place-items-center empty-results-container">
    <div
      class="bg-bg-secondary text-center pt-[2.25rem] pb-[2.25rem] text-white lg:px-[2.5rem]"
    >
      <EmptyIllustrationSVG class="mx-auto" />
      <p class="mt-[2.75rem] mb-[1.875rem] text-2xl font-bold lg:mt-[2.5rem]">
        Results shown here
      </p>
      <p class="opacity-50">
        Complete the form and click “calculate repayments” to see what your
        monthly repayments would be.
      </p>
    </div>
  </div>
</template>
